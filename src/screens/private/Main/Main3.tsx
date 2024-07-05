import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';
import CoverSlide from "@/components/animation/coverSlide"
import Cover from './../../../assets/images/samples/42fb9365-3627-4ac0-8127-4305a99fe179.jfif'
import Reveal from '@/components/animation/reveal';
import { useNavigate } from 'react-router-dom';

const Main = ({data}:any) => {

  
  const HighlightAct = data.find((item:any) => item.order === 1);

  const navigate = useNavigate()
  return (
    <Swiper
        
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="  ease-out duration-1000 text-accent flex items-start justify-center h-[100vh] w-full overflow-hidden bg-fixed bg-cover bg-center object-contain  " 
      >
        <SwiperSlide>
        <CoverSlide>
      <div className=" rounded-b-md relative  flex items-start justify-center h-[100vh] w-full overflow-hidden bg-fixed bg-cover bg-center object-contain " style={{backgroundImage:`url(${Cover})`}} >

        <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "></div>
      

        <div className=" relative h-full  w-full flex justify-between items-center  overflow-hidden ">
          <div className=" mt-10 sm:mt-0 md:mt-5 sm:px-2 relative flex flex-col gap-9 sm:gap-4  z-10 w-full px-20   min-h-0  lg:px-10 lg:items-center py-10 sm:py-2 items-start md:w-[100%]">

         

              <h1 className=" w-[800px] md:w-[100%] leading-loose sm:leading-[40px] sm:w-full  text-accent  font-fbold sm:text-lg text-3xl ">
             
                
              <span className="text-5xl sm:text-4xl font-fbold bg-primary-foreground px-2 py-2 box-decoration-clone text-accent ">BALAOD </span> <hr  className=" border-none bg-none h-[2vh]" />
                <span className="  font-fmedium bg-accent px-2 py-2 box-decoration-clone text-primary">Envisions a society where legal empowerment is a way of life  and a  means to protect and  advance peoples access to justice and resources.
                </span>
             
              
              </h1>

              <hr className=" animate__animated animate__slideInDown lg:hidden md:w-[70%] md:border-2 w-[20%] border-[2px] sm:border-[1px] border-primary-foreground sm:w-[50%]" />
            

       
           

{/* 
            <Reveal>
              <button  
              onClick={(e) => {handleClick(e, 'more')
                
              }}
              className=" hover:opacity-60 transition-all duration-200 font-black shadow-2xl text-primary-foreground uppercase  sm:text-sm bg-transparent border border-primary-foreground text-xl p-4">
                Read More
              </button>
            </Reveal> */}

            
          </div>
       
         
        </div>
        <div className=" z-30 flex px-5 absolute bottom-0 w-full h-10 items-center justify-end text-accent bg-black/20 text-lg font-fmedium sm:text-sm text-gray-300 ">
        © Balaod Mindanaw

{/* <h1>© DIMITAR DILKOFF via AFP</h1> */}

</div>
      </div>
      </CoverSlide>


        </SwiperSlide>
        {HighlightAct?
        <SwiperSlide>
        <CoverSlide>
      <div className=" rounded-b-md relative  flex items-start justify-center h-[100vh] w-full overflow-hidden bg-fixed bg-cover bg-center object-contain " style={{backgroundImage:`url(${HighlightAct.imageURL})`}} >

        <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "></div>
      

        <div className=" relative h-full  w-full flex justify-between items-center  overflow-hidden ">
          <div className=" mt-10 sm:mt-0 md:mt-5 sm:px-2 relative flex flex-col gap-9 sm:gap-4  z-10 w-full px-20   min-h-0  lg:px-10 md:items-center py-10 sm:py-2 sm:items-start sm:w-[90%]">
            
          <h1 className=" font-fbold sm:text-2xl sm:max-w-full sm:leading-[47px] text-4xl text-primary  leading-loose max-w-[60%] md:max-w-[100%] md:text-center sm:text-left">
    <span className="bg-background px-4 py-2 box-decoration-clone">
        {HighlightAct.title}
    </span>
</h1>
   

       
              <hr className=" animate__animated animate__slideInDown md:w-[70%] md:border-2 w-[20%] border-[2px] sm:border-[1px] border-primary-foreground sm:w-[50%]" />


            <Reveal>
              <button  
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/blog/${HighlightAct._id}`)
                localStorage.setItem("selected",JSON.stringify(HighlightAct))
                
              }}
              className=" hover:opacity-60 transition-all duration-200 font-black shadow-2xl text-primary-foreground uppercase  sm:text-sm bg-transparent border border-primary-foreground text-xl p-4">
                Read More
              </button>
            </Reveal>

            
          </div>
       
         
        </div>
        <div className=" z-30 flex px-5 absolute bottom-0 w-full h-12 items-center justify-end text-accent bg-black/20 text-sm ">

{/* <h1>© DIMITAR DILKOFF via AFP</h1> */}

</div>
      </div>
      </CoverSlide>


        </SwiperSlide>
        :""}
        
      </Swiper>
  )
}

export default Main