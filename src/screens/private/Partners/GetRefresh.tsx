import axios from '../../../plugin/axios';
import { useState } from 'react';

// Define the return type for the custom hook
interface UsePartnersReturn {
    whatWeDo: any[];
    partners: any[];
    activities:any[]; // Update type to array for clarity
    resetPartners: () => void;
    seed: number;
  }

const usePartners = (): UsePartnersReturn => {
  const [seed, setSeed] = useState<number>(1);
  const [partners,setPartners] = useState<any>([])
  const [whatWeDo,setwhatWeDo] = useState<any>([])
  const [activities,setactivities] = useState<any>([])



  const GetData = () => {
    try {
      axios.get('posting/').then((e) => {
        setactivities(e.data.activities);
        setPartners(e.data.partners)
        setwhatWeDo(e.data.whatWeDo)

      });
    } catch (error) {
      console.log("server Down hehe");
    }
  };

  const resetPartners = () => {
    
    GetData();
    setSeed(Math.random());
    console.log("ref");
    console.log(seed)
  };

  return {seed,partners,whatWeDo,activities,resetPartners};
};

export default usePartners;
