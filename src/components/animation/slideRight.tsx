import { motion,useInView,useAnimation } from "framer-motion"
import { useEffect, useRef } from "react";

interface Props{
    children: JSX.Element;
    width?:"fit-content" | "100%";
}

const SlideRight = ({children}:Props) => {
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
    <div ref={ref} style={{ overflow:"hidden"}}>
        <motion.div 
        variants={{
            hidden:{opacity:0,x:-75},
            visible:{opacity:1,x:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5,delay:0.25}}
        >{children}</motion.div>
       
    </div>
  )
}

export default SlideRight