import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

import './embla.css'
import axios from './../../../plugin/axios'
import Swal from 'sweetalert2'
const EmblaCarousel = (props:any) => {


 
  
  const { slides, options,resetPartners } = props
  const [emblaRef]:any = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ])






  return (
    <div className="embla ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container sm:gap-1">
          {slides.map((e:any,index:any) => (
            <div
            onClick={()=>{
           
                    
                Swal.fire({
                  imageUrl:e.imageURL,
                  imageWidth: 400,
                  imageAlt: "Custom image",
                  title: "This action will delete the image, are you sure?",
                  text: "You won't be able to revert this!",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                  if (result.isConfirmed) {
                   
                    axios.delete(`posting/partner/${e._id}`,{
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                      }, 
                    }).then((e)=>{
                      resetPartners()
            
                      console.log(e)
                    }).catch((e)=>{
                      console.log(e)
                    })
                    Swal.fire({
                      title: "Deleted!",
                      text: "The Image has been deleted.",
                      icon: "success"
                    });
                  }
                });
              }
            

            }
               className="embla__slide flex  justify-center" key={index}>
              
              <img src={e.imageURL} className=" col-span-1  h-32 sm:h-24 object-contain" alt="" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default EmblaCarousel
