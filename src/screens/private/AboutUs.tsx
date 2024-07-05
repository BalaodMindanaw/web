import Reveal2 from "@/components/animation/reveal2"
import Reveal3 from "@/components/animation/reveal3"
import CoverSlide from "@/components/animation/coverSlide"
import Cover from './../../assets/images/samples/9d146eac-ca05-4249-9eaf-37fdee7ec489.jfif'
import Footer from "@/components/footer/Footer"
import { Form } from "./Partners/form2"
import usePartners from "./Partners/GetRefresh"
import { useEffect } from "react"



const AboutUs = () => {

  const { whatWeDo,resetPartners } = usePartners();

  useEffect(()=>{
    resetPartners()
  },[])


  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">
    <CoverSlide>
    <div id="who-we-are" className=" px-20 sm:px-5 flex flex-col  w-full min-h-[80vh] pb-20 bg-primary-foreground pt-20 items-center justify-center bg-fixed bg-cover bg-center object-contain  " style={{backgroundImage:`url(${Cover})`}}>
        <div className="  z-10 absolute h-full w-full bg-gradient-to-t from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] ">
        </div>
          <div className="  z-20 flex flex-col justify-center gap-10  ">
          <Reveal2>
            <h1 className=" text-accent font-fbold  md:text-4xl text-7xl font-semibold">
            WHO WE ARE?
            </h1>
          </Reveal2>
          <Reveal3>
          <div className=" flex gap-5">
         

            <p className="  text-3xl w-[70%] text-accent  sm:text-sm">
            Balay Alternative Legal Advocates for Development in Mindanaw (Balaod Mindanaw), or popularly know as “Balaod”, is a legal resource non-government organization who believes in the legal empowerment of marginalized groups and communities as a way of advancing their access to justice.
          </p>
          </div>
          </Reveal3>
          
      </div>
          </div>
    </CoverSlide>
        <div id="what-we-do" className=" relative flex rounded-sm px-20 pl-36 sm:px-5 flex-col  w-full h-[80vh]  items-start  ">
          <div className=" md:hidden absolute  animate__animated animate__fadeIn flex flex-col items-center h-full w-[30px] left-0 ml-20 ">
            <div className=" h-[61%] w-[20px] bg-primary-foreground">
            </div>
        <div className=" translate-y-[-20px] bg-primary-foreground rounded-full h-[50px] w-[50px]">

        </div>
          </div>

          <Reveal2>
            
          <div className=" relative w-full   pt-20 md:pt-5 min-h-0 max-h-[38vh] overflow-hidden flex justify-center items-center gap-2">
            {whatWeDo.map((e:any,key:any)=>(
              <div className=" relative cursor-pointer w-1/3 aspect-video">
                <div className=" absolute flex items-center justify-center w-full h-full">
                  <Form id={e._id} resetPartners={resetPartners}/>
                </div>
                
                
                 

                 <img key={key} src={e.imageURL} className=" w-full h-full col-span-1 object-cover" alt="" />
              </div>
             
            ))}
         

          </div>
        </Reveal2>
          <div className=" flex  justify-center gap-10 pt-10  ">
          <Reveal2>
          <div className=" flex flex-col">

<h1 className=" text-primary font-fbold  md:text-4xl text-7xl font-semibold">
WHAT WE DO ?

</h1>

</div>
</Reveal2>
         
<Reveal3>
          <div className=" flex gap-5 ">
         

            <p className=" font-flight   text-3xl text-primary md:text-base  sm:text-sm">
            Paralegal Formation and Capacity-building, Alternative Lawyering, Policy Formulation, and Advocacy Campaigning that is guided by active and non-violent participation as a vital standard.


          </p>
          </div>
          </Reveal3>
          
          </div>
        </div>
       

       <Footer/>
  
    </div>
  )
}

export default AboutUs