import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

import './embla.css'
const EmblaCarousel = (props:any) => {
  const { slides, options } = props
  const [emblaRef]:any = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ])






  return (
    <div className="embla ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container sm:gap-1">
          {slides.map((e:any,index:any) => (
            <a href={e.linkToPage?e.linkToPage:'#'} target='_blank' className="embla__slide flex  justify-center" key={index}>
              <img src={e.imageURL} className=" col-span-1  h-32 sm:h-24 object-contain" alt="" />
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}

export default EmblaCarousel
