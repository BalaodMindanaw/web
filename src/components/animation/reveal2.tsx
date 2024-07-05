import { motion,useInView,useAnimation } from "framer-motion"
import { useEffect, useRef } from "react";

interface Props{
    children: JSX.Element;
    width?:"fit-content" | "100%";
}

const Reveal2 = ({children,width = "fit-content"}:Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation();
    const slideControls = useAnimation();


    useEffect(()=>{
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")

        }

    },[isInView])

  return (
    <div ref={ref} className=" flex items-center justify-center relative" style={{width, overflow:"hidden"}}>
        <motion.div 
        variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.7,delay:0.65}}
        >{children}</motion.div>
        
    </div>
  )
}

export default Reveal2