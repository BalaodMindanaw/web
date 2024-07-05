

import CoverSlide from "@/components/animation/coverSlide"
import Cover from './../../assets/images/samples/programs1.png'
import Program1 from "./../../assets/images/samples/programs1.png";
import Program2 from "./../../assets/images/samples/programs2.png";
import Program3 from "./../../assets/images/samples/programs3.jfif";
import Program4 from "./../../assets/images/samples/programs4.jfif";
import Reveal4 from "@/components/animation/reveal4"
import Footer from '@/components/footer/Footer';




const Programs = () => {
  const programs =[{
    title:"Human Rights Promotion",
    img:Program1,
    description:"This involves the work of assessing the status of human rights in many marginalized communities, capacitating community paralegals in forwarding their rights, and facilitating the advocation of policies and programs that strengthen and enhance their rights-claiming mechanisms."
  },
  {
    title:"Environmental Justice",
    img:Program2,
    description:"BALAOD firmly believes that all the natural resources: land, trees, air, water and all the living plants and animals are critical common resources that must be shared and enjoyed by, and for the growth and development of,  all generations, present and future. "
  },
  {
    title:"Women and Children Protection",
    img:Program3,
    description:"The number of cases of abuse, exploitation and discrimination against women and children in our society show the extent by which this affected sector are marginalized, oppressed and objectified. BALAOD strives to work for the dismantling of structural policies, discriminate practices and even traditional mindsets that put women and children at the oppressive end."
  },

  {
    title:"Institutional Development",
    img:Program4,
    description:"In order to effectively perform its mission and successfully pursue its vision, BALAOD must also strive to continuously enhance its operations and ways of doing things in order to be responsive to the needs of its partner communities and to the challenges posed upon by society."
  },


]
  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">
    <CoverSlide>
    <div id="who-we-are" className=" px-20 sm:px-5 flex flex-col  w-full min-h-[40vh] pb-20 bg-primary-foreground pt-20 items-center justify-center bg-fixed bg-cover bg-center object-contain  " style={{backgroundImage:`url(${Cover})`}}>
        <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] ">
        </div>
          <div className="  z-20 flex flex-col items-center justify-center gap-5  ">
        
            <h1 className=" mt-20  rounded-full text-accent font-fbold  md:text-4xl text-6xl font-semibold">
            Our programs
            </h1>

            <div className=" sm:flex flex-col items-center hidden gap-2 text-lg text-accent font-flight">
              <a href="#Human Rights Promotion">Human Rights Promotion</a>
              <a href="#Environmental Justice">Environmental Justice</a> 
              <a href="#Women and Children Protection">Women and Children Protection</a> 
              <a href="#Institutional Development">Institutional Development</a>
            </div>

            <div className=" sm:hidden flex gap-2 text-lg text-accent font-flight">
              <a href="#Human Rights Promotion">Human Rights Promotion</a> |
              <a href="#Environmental Justice">Environmental Justice</a> |
              <a href="#Women and Children Protection">Women and Children Protection</a> |
              <a href="#Institutional Development">Institutional Development</a>
            </div>
      </div>
          </div>
    </CoverSlide>


    {
      programs.map((e:any,key)=>(
       
        <div key={key} id={e.title} className=" animate__animated animate__fadeIn relative flex rounded-sm px-20  sm:px-5 flex-col justify-center  w-full min-h-[50vh] py-20  items-start">

      <div className=" flex flex-col items-end gap-10  ">
      
        <h1 className=" overflow-hidden  flex items-center justify-center gap-3 sm:flex-col bg-primary-foreground py-5 px-10 w-full  text-accent font-fbold sm:text-2xl  md:text-4xl text-2xl font-semibold text-center">{e.title}</h1>
        
      

        <Reveal4>
        <div className=" grid grid-cols-3 sm:flex sm:flex-col gap-10 ">
          
            <img className=" col-span-1 sm:max-h-[200px] sm:w-full object-contain" src={e.img} alt="" />
            <p className=" col-span-2 font-fregular sm:text-center sm:self-center  w-[90%]  text-xl">{e.description}</p>
        </div>
        </Reveal4>
        

      </div>



    </div>
      ))
    }

   
        
        <Footer/>
  
    </div>
  )
}

export default Programs