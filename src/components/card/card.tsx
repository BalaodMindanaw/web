// import { Button } from "../ui/button"

import { useNavigate } from 'react-router-dom'
import Reveal from '../animation/reveal'
import Logo from './../../assets/images/logo/BalaodWhiteOutFull@3x.png'

function ActivitiesCard({className,e}:any) {

  let navigate = useNavigate()
  return (
    <Reveal>
    <div onClick={()=>{
      window.scrollTo(0, 0);
      navigate(`/blog/${e._id}`)
      localStorage.setItem("selected",JSON.stringify(e))

    }}  className={"  cursor-pointer rounded-sm  border  justify-center  border-card flex flex-col items-center relative  bg-primary aspect-[7/10] overflow-hidden "+ className}>

      <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd90019d] from-5% via-[#5d193e00] via-92% to-[#5d193ee5] to-2% ">
      <img
              src={Logo}
              className=" m-5  logo h-7 right-0 absolute object-contain "
              alt="Vite logo"
            />
      </div>
        
        <img className="  w-full h-full bg-white object-cover rounded-md  "  src={e.imageURL}/>
        
        <div className=" w-full z-20 absolute bottom-0    mt-2 flex flex-col gap-4">
            <h1 className=' text-accent font-fbold  px-5 w-[400px]'>
              <span className=' py-2  px-2 bg-primary-foreground'>
                Kudlit
              </span>
              </h1>
            <h1 className="  px-5 w-full text-wrap  leading-[37px]  text-primary text-md font-fbold">
              <span className=' w-full bg-accent backdrop-blur-lg box-decoration-clone px-2 py-2'>{e.title}</span>
                </h1> 
            <div className=" z-40 flex bottom-0 w-full h-10 items-center justify-end text-accent bg-[#531837ca] text-xs ">
              <h1 className=" px-5 font-fregular">{e.author?`by: ${e.author}`:""}</h1>

            </div>
        </div>

    </div>
    </Reveal>
  )
}

export default ActivitiesCard