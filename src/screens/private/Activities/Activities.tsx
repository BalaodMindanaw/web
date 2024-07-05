import Reveal from '@/components/animation/reveal'
import Reveal2 from '@/components/animation/reveal2'
import TextSlide from '@/components/animation/textSlide'
import ActivitiesCard from '@/components/card/card2'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from './form3'

const Activities = ({resetPartners,data}:any) => {


  const maxOrder = 4;
  const sortedData = data.sort((a:any, b:any) => a.order - b.order);
  
  const elements = [];
  
  for (let i = 1; i <= maxOrder; i++) {
    const item = sortedData.find((e:any) => e.order === i);
    if (item) {
      elements.push(
        <ActivitiesCard
          resetPartners={resetPartners}
          order={item.order - 1}
          key={item._id }
          e={item}
          id={item._id }
        />
      );
    } else {
      elements.push(
        <div key={`placeholder-${i}`} className=' cursor-pointer rounded-sm  border  justify-center  border-card flex flex-col items-center relative  bg-primary aspect-[7/10] overflow-hidden' >
          <Form  resetPartners={resetPartners} order={i}/>
        </div>
      );
    }
  }


  const navigate = useNavigate()
  return (
    <div className="  mt-36 relative  flex  gap-10 flex-col  items-center min-h-0 w-full ">
    <TextSlide>
      
      <h1 className=" flex items-center gap-4 text-4xl font-fbold text-primary "><span>Activities</span> 
      <Link 
      className=' text-sm px-4 py-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground'
      to="/balaod/editable/create-blog"

      >Create Activity</Link></h1>

    
      
    </TextSlide>
   <Reveal2>
   <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-4 gap-4 w-full sm:px-5 px-[4vw] min-h-0 justify-center items-center">
      {elements}
    </div>

       
          
        
    
  </Reveal2>



  <Reveal>
          <button  
          onClick={()=>{
            window.scrollTo(0, 0);
            navigate("/balaod/kudlit")

          }}
          className=" w-[400px] sm:w-[300px]  hover:opacity-60 transition-all duration-200 font-black shadow-2xl text-primary-foreground uppercase  sm:text-sm bg-transparent border border-primary-foreground text-xl p-4">
            View More
          </button>
        </Reveal>
      




  </div>
  )
}

export default Activities