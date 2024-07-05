


import CoverSlide from "@/components/animation/coverSlide"
import Cover from './../../assets/images/samples/438161546_463636099496909_3614983135274376987_n.jpg'

import QR from './../../assets/images/samples/BALAOD Mindanaw_qrcode.png'
import Footer from '@/components/footer/Footer'



const WorkUs = () => {
  
  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">
    <CoverSlide>
    <div id="who-we-are" className=" px-20 sm:px-5 flex flex-col  w-full min-h-[30vh] pb-20 bg-primary-foreground pt-20 items-center justify-center bg-fixed bg-cover bg-center object-contain  " style={{backgroundImage:`url(${Cover})`}}>
        <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] ">
        </div>
          <div className="  z-20 flex flex-col items-center justify-center gap-5  ">
        
            <h1 className=" mt-20  rounded-full text-accent font-fbold  md:text-4xl text-6xl font-semibold">
            Work With Us
            </h1>

            
      </div>
          </div>
    </CoverSlide>


    <h1 className="  bg-primary-foreground py-5 px-10 w-full  text-accent font-fbold  md:text-4xl text-xl font-semibold text-center">Contact Details</h1>

    <div className=' flex md:flex-col justify-around'>

    
    <div className=' flex flex-col justify-around gap-5 py-20 px-[5vw]'>
      {[{
        head:"Email",
        url:"mailto:balaodmindanaw@gmail.com",
        link:" info@balaod.org balaodmindanaw@gmail.com"
      },
      {
        head:"Facebook",
        url:"https://www.facebook.com/BALAODMindanaw",
        link:"BALAOD Mindanaw"
      },
      {
        head:"Address",
        url:"https://www.facebook.com/BALAODMindanaw",
        link:"Cagayan de Oro, PH, 9000"
      }


      ].map((e:any,key:any)=>(
        <div key={key} className=' flex flex-col gap-2' >
        <h1 className=' font-fbold text-xl text-primary uppercase'>{e.head}</h1>
        <a className=' w-[300px] cursor-pointer text-gray-600 pl-5 font-fregular' href={e.url
        }>{e.link
        }</a>
      </div>
      ))}
    </div>

    

    <div className=' py-20 sm:py-0 sm:pb-10 flex items-center justify-center '>
    <img src={QR} alt={QR} className=' w-[300px] object-contain' />
    </div>

    

   </div>




    

   
        <Footer/>
  
    </div>
  )
}

export default WorkUs