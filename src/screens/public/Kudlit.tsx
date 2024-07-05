


import CoverSlide from "@/components/animation/coverSlide"
import Footer from '@/components/footer/Footer'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DOMPurify from 'dompurify';



const Kudlit = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event:any) => {
    setSearchQuery(event.target.value);
  }
  const [kudlits,_setKudlits] =  useState(JSON.parse(localStorage.getItem('kudlit')||""))

  const filterData = (data:any, query:any) => {
    if (!query) {
      return data;
    }
    return data.filter((item:any) => {
      const title = item.title.toLowerCase();
      const content = item.content.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();
      return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
    });
  }


  const [filteredData,setFilterData]:any = useState(JSON.parse(localStorage.getItem('kudlit')||"")) ;

 
  

  const truncateText = (text:any, maxLength:any) => {
    if (text.length <= maxLength) {
      return text;
    }
    
    const truncatedText = text.slice(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');

    if (lastSpaceIndex === -1) {
      return truncatedText + '...';
    } else {
      return truncatedText.slice(0, lastSpaceIndex) + '...';
    }
  }

  const navigate = useNavigate()
  const renderContent = (htmlContent:any) => {
    // 1. Create temporary element for parsing
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
  
    // 2. Apply existing transformations
    tempDiv.innerHTML = tempDiv.innerHTML
      .replace(/<p><\/p>/g, '<p><br></p>')
      .replace(/\n/g, '<br>'); 
  
    // 3. Extract the first paragraph
    const firstParagraph = tempDiv.querySelector('p');
  
    // 4. Handle scenario where no paragraph is found
    const contentToDisplay = firstParagraph ? firstParagraph.outerHTML : '';
  
    // 5. Return with the sanitized __html property
    return { __html: DOMPurify.sanitize(truncateText (contentToDisplay,200)) }; 
  };
  
  function formatDate(dateString:any) {
    const date = new Date(dateString);
    const options:any = { year: 'numeric', month: 'long', day: '2-digit' };
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  
  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">
    <CoverSlide>
    <div id="who-we-are" className=" px-20 sm:px-5 flex flex-col  w-full min-h-[10vh] py-5 bg-primary-foreground items-center pb-10 justify-center bg-fixed bg-cover bg-center object-contain  " >
        <div className="  z-10 absolute h-full w-full bg-primary ">
        </div>
          <div className="  z-20 flex flex-col items-center justify-center gap-5  ">
        
            <h1 className=" mt-20  text-accent rounded-full  font-fbold  md:text-4xl text-4xl font-semibold">
            Kudlit
            </h1>

            
      </div>
          </div>
    </CoverSlide>

    <div className=" relative w-[95%]  self-center py-10 my-10   gap-4 flex flex-col px-10 md:px-5 bg-[#e4e4e4]">

      <form onSubmit={(e:any)=>{
        e.preventDefault()
        setFilterData(filterData(kudlits, searchQuery))
      }} className=" flex gap-3 items-center w-full  h-14">
        
        <input placeholder="WHAT ARE YOU LOOKING FOR?" className=" px-4 h-full w-full  outline-none py-4 font-fmedium border  " value={searchQuery} onChange={handleSearchChange} type="text" />

        <button className=" font-fbold bg-primary text-accent w-[200px] h-full ">Search</button>
      </form>


<div className=' flex flex-col w-full  gap-3 min-h-[30vh]'>
    
    {filteredData.slice(0, 10).map((e:any,key:any)=>(

      <CoverSlide key={key}>

      
      <div  onClick={()=>{
        window.scrollTo(0, 0);
        navigate(`/blog/${e._id}`)
        localStorage.setItem("selected",JSON.stringify(e))

      }} className=" relative max-w-full flex w-full min-h-0  "  >
        <div className=" relative w-[20vw] md:hidden " >
        <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "></div>

          <img src={e.imageURL} className="  h-full relative aspect-square object-cover" alt="" />
        </div>
        
        <div className="w-full border flex flex-col gap-4 border-border p-4 bg-background cursor-pointer hover:bg-[#e4e4e4] pr-10 relative">

        <div className=" bg-primary-foreground w-[80px] h-[40px] text-lg text-accent  flex items-center justify-center font-fmedium">
          Kudlit
        </div>

      <div className=" border-b border-gray-300  pb-2">
        <h1 className="text-2xl font-fbold">{e.title}</h1>
      </div>
      <div className=" text-gray-600 mb-4">
      
        <span className=" font-fmedium text-lg">
        <div className=" outline-none " dangerouslySetInnerHTML={renderContent(e.content)} />
        {/* {e.content} */}
        </span>
      </div>
      <div className="  text-sm font-fregular text-gray-500">
        <span>{e.date?formatDate(e.date):""}</span>
      </div>
    </div>
      </div>
      </CoverSlide>
      
    ))
    }
      
      

   </div>

    </div>
    

    




    

   
        <Footer/>
  
    </div>
  )
}

export default Kudlit