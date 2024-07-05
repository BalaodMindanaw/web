import Reveal2 from '@/components/animation/reveal2'
import TextSlide from '@/components/animation/textSlide'
import EmblaCarousel from './Partner'

import { Form } from './form'

const Partners = ({data,key,resetPartners}:any) => {


    

    
  return (
    <div key={key} id="Partners-and-Networks" className=" rounded-sm pt-40  sm:px-0 flex flex-col  w-full py-10  gap-10 sm:gap-5   min-h-0 items-center justify-center  ">
      


      <TextSlide>
        <div className=' flex  items-center gap-4 w-full'>
      <h1 className=" text-4xl font-fbold text-primary text-center "><span>Partners and Networks
</span>

</h1>

 <Form resetPartners={resetPartners} />
 </div>
      </TextSlide>
      
<div className=" w-full flex justify-center">


<Reveal2>
  <div className=" w-full min-h-0 flex justify-center mt-20 sm:mt-10">

  <EmblaCarousel resetPartners={resetPartners}  slides={data}  options={{ loop: true }} />

</div>
</Reveal2>
</div>
      </div>
  )
}

export default Partners