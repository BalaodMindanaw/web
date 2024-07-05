import TextSlide from "@/components/animation/textSlide";

import Reveal2 from "@/components/animation/reveal2";
import Reveal3 from "@/components/animation/reveal3";

import partner5 from "./../../assets/images/partners/DSWD-Logo.png";

import partner6 from "./../../assets/images/partners/sec.png";
import partner7 from "./../../assets/images/partners/cdo_seal.png";

import Footer from "@/components/footer/Footer";

import Main from "./Main/Main3";
import Activities from "./Activities/Activities";
import Partners from "./Partners/Partners";
import { useEffect } from "react";
import usePartners from "./Partners/GetRefresh";

const Page1 = () => {

  const { seed,partners,activities,resetPartners } = usePartners();

  useEffect(()=>{
    resetPartners()
  },[])
 
  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">
      <Main key={seed+2}  data={activities} />

      <div
        id="more"
        className=" rounded-sm px-[5vw] sm:px-5 flex-col  w-full  min-h-0 pt-20 items-center justify-center  "
      >
        <div className=" flex  justify-center gap-10 sm:gap-5 items-start  ">
          <Reveal2>
            <div className=" flex flex-col">
            <h1 className=" text-primary font-fbold  md:text-4xl lg:text-5xl text-7xl font-semibold">
                Balaod
              </h1>
              <p className=" text-primary text-2xl  sm:text-lg font-fextra-bold-italic">
                Noun.{" "}
                <span className=" font-fregular">A Cebuano term for law</span>
              </p>
            </div>
          </Reveal2>

          <Reveal3>
            <div className=" flex gap-5">
              <p className=" font-flight   text-3xl text-primary  sm:text-base">
                To achieve our advocacies on gender equality, and legal
                improvement in the ownership and use of natural resources
                (resource tenure) within the context of people actively
                participating in governance, we constantly engage with various
                marginalized groups through legal empowerment approach
              </p>
            </div>
          </Reveal3>
        </div>
      </div>
      {/* Activities part */}

      <hr className=" w-full border border-primary h-2 border-none border-b-2" />
      <Activities key={seed+1} resetPartners={resetPartners} data={activities} />

      <Partners key={seed} resetPartners={resetPartners} data={partners}/>

      <div
        id="Accreditations"
        className=" rounded-sm  px-20 sm:px-5 flex flex-col  w-full py-10 pt-40  gap-20   min-h-0 items-center justify-center  "
      >
        <TextSlide>
          <h1 className=" text-4xl font-fbold text-primary text-center ">
            <span>Accreditations</span>
          </h1>
        </TextSlide>

        <div className=" w-full flex justify-center">
          <Reveal2>
            <div className=" w-full min-h-0 flex justify-center">
              <div className=" grid grid-cols-3 items-center justify-center w-full gap-10  sm:gap-2">
                {[partner7, partner6, partner5].map((e: any, key: any) => (
                  <div key={key} className=" flex flex-col gap-5">
                    <img
                      src={e}
                      className=" col-span-1 sm:col-span-3 justify-self-center h-36 sm:h-24 object-contain"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal2>
        </div>
      </div>

      <div className=" w-full h-[30vh]"></div>

      <Footer />
    </div>
  );
};

export default Page1;
