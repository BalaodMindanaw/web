import Reveal2 from '@/components/animation/reveal2'
import TextSlide from '@/components/animation/textSlide'
import EmblaCarousel from './Partner'

const Partners = () => {
  return (
    <div id="Partners-and-Networks" className=" rounded-sm pt-40  sm:px-0 flex flex-col  w-full py-10  gap-10 sm:gap-5   min-h-0 items-center justify-center  ">
      <TextSlide>
      <h1 className=" text-4xl font-fbold text-primary text-center "><span>Partners and Networks
</span></h1>
      </TextSlide>
      
<div className=" w-full flex justify-center">


<Reveal2>
  <div className=" w-full min-h-0 flex justify-center mt-20 sm:mt-10">

  <EmblaCarousel slides={JSON.parse(localStorage.getItem('partners')||"")} options={{ loop: true }} />

</div>
</Reveal2>
</div>
      </div>
  )
}

export default Partners