


import CoverSlide from "@/components/animation/coverSlide"
import Footer from '@/components/footer/Footer'
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import DOMPurify from 'dompurify';
import axios from "../../plugin/axios"
import { Skeleton } from "@/components/ui/skeleton"
import { Edit2Icon, Trash2Icon } from "lucide-react";
import Swal from "sweetalert2";


const Kudlit = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event:any) => {
    setSearchQuery(event.target.value);
  }
  const [kudlits,setKudlits] =  useState([])

  

  // const data =[
  //   {
  //     "title": " Paglalakad ng mga kinatawan at opisyal ng Legal Rights and Natural Resources Center (LRC)",
  //     "image": Sample2,
  //     "author": "Frank Carter",
  //     "content": `<p>The automotive industry has rebounded strongly, with increased production and sales indicating a positive outlook for the sector. After a period of disruption caused by the pandemic, the industry is experiencing renewed growth, driven by a combination of factors including rising consumer demand, technological advancements, and supportive government policies.</p><p></p><p><strong><em>"One of the main drivers of the automotive industry's recovery is the resurgence in consumer demand. As economic conditions improve and consumer confidence rises, more people are purchasing vehicles. This trend is particularly evident in emerging markets, where rising incomes and urbanization are fueling demand for both passenger and commercial vehicles."</em></strong></p><p></p><p>Technological innovation is also playing a crucial role in the industry's revival. The development and adoption of electric vehicles (EVs) are accelerating, with many automakers expanding their EV offerings. Advances in battery technology, charging infrastructure, and government incentives are making EVs more accessible and attractive to consumers. Additionally, autonomous driving technologies and connected car features are transforming the automotive landscape, enhancing safety and convenience for drivers.</p><p></p><p>Government policies aimed at supporting the automotive industry are further bolstering growth. Many countries have implemented measures such as subsidies, tax incentives, and regulatory support to encourage the production and adoption of greener and smarter vehicles. These initiatives are helping to create a favorable environment for the automotive sector to thrive.</p><p></p><h2><span style="color: rgb(255, 140, 0); font-size: [object Object]px">About</span></h2><p></p><p>However, the industry still faces several challenges. Supply chain disruptions, particularly in the semiconductor market, have caused production delays and shortages. Automakers are working to address these issues by diversifying their supplier base and investing in more resilient supply chain strategies. Additionally, the transition to electric and autonomous vehicles requires significant investment in research and development, as well as the retraining of the workforce to adapt to new technologies.</p><p></p><p>Overall, the automotive industry's strong rebound is a testament to its resilience and adaptability. By embracing innovation and responding to changing market dynamics, the sector is poised for continued growth and transformation. The shift towards more sustainable and connected vehicles will shape the future of mobility, offering new opportunities and challenges for automakers and consumers alike.</p><p></p>`,
  //     "date": "March 26, 2024"
  // },
  // {
  //     "title": "Pharmaceutical Sector Achieves Breakthroughs",
  //     "image": Sample,
  //     "author": "Robert Bailey",
  //     "content": `<p><em>The pharmaceutical sector has achieved significant breakthroughs, driving growth and innovation in the healthcare industry. Recent advancements in drug development and medical research have led to the introduction of new treatments and therapies for a wide range of diseases and conditions.</em></p><p></p><p style="text-align: center"><strong>One of the key drivers of this progress is the substantial investment in research and development (R&amp;D) by pharmaceutical companies. These investments have enabled the discovery of novel drugs and the improvement of existing medications. Cutting-edge technologies such as genomics, biotechnology, and artificial intelligence are being utilized to accelerate the drug discovery process and enhance the efficacy of treatments.</strong></p><p><br></p><h1><span style="color: rgb(255, 140, 0); font-size: [object Object]px">Regulatory approvals for new drugs </span></h1><h3><span style="color: #171719">have also been on the rise, reflecting the sector's robust pipeline of innovative products</span></h3><p></p><p>Regulatory agencies around the world are working closely with pharmaceutical companies to expedite the approval process for promising treatments. This collaborative approach is essential for bringing life-saving medications to market more quickly and addressing unmet medical needs.</p><p><br></p><p>In addition to drug development, the pharmaceutical sector is making strides in personalized medicine. This approach tailors treatments to individual patients based on their genetic makeup, lifestyle, and other factors. Personalized medicine has the potential to improve treatment outcomes, reduce side effects, and optimize healthcare resources.</p><p></p><p>Another area of focus is the expansion of access to healthcare. Pharmaceutical companies are partnering with governments, non-profit organizations, and other stakeholders to improve the availability and affordability of medications. Initiatives such as patient assistance programs, differential pricing, and collaborative research efforts are helping to ensure that more people can benefit from the latest medical advancements.</p><p></p><p>Despite these positive developments, the pharmaceutical sector faces ongoing challenges. The high cost of drug development, complex regulatory requirements, and the need for extensive clinical trials can hinder the pace of innovation. Additionally, issues such as drug pricing, patent disputes, and ethical concerns surrounding new treatments continue to generate debate.</p>`,
  //     "date": "April 12, 2024"
  // },
  // {
  //     "title": "Mining Industry Benefits from High Commodity Prices",
  //     "image": Sample2,
  //     "author": "Patricia Gray",
  //     "content": "<p>The mining industry is benefiting from high commodity prices, leading to increased production and economic gains. Strong global demand for minerals and metals has driven up prices, creating favorable conditions for mining companies. This trend is expected to continue as industrial activities and infrastructure projects around the world require substantial amounts of raw materials.</p><p>One of the primary factors contributing to the surge in commodity prices is the robust recovery of the global economy. As countries emerge from the pandemic, there has been a resurgence in construction, manufacturing, and other industries that rely heavily on mined resources. This has resulted in higher demand for key commodities such as copper, iron ore, and lithium.</p><p>Technological advancements are also playing a significant role in the mining industry's success. Innovations in mining equipment and processes have improved efficiency and productivity, allowing companies to extract and process minerals more effectively. Automation, remote sensing, and data analytics are some of the technologies being leveraged to enhance mining operations and reduce costs.</p><p>Environmental, social, and governance (ESG) considerations are increasingly important for the mining industry. Companies are under pressure to adopt sustainable practices and minimize their environmental impact. This includes efforts to reduce greenhouse gas emissions, manage water resources responsibly, and rehabilitate mining sites. Social and governance aspects, such as community engagement and ethical business practices, are also critical for maintaining a positive reputation and securing social license to operate.</p><p>Supply chain disruptions pose a potential challenge for the mining industry. The pandemic has highlighted vulnerabilities in global supply chains, and mining companies are taking steps to mitigate these risks. Diversifying suppliers, improving inventory management, and investing in logistics infrastructure are some of the strategies being employed to ensure a stable supply of critical materials.</p><p>Looking forward, the outlook for the mining industry remains positive. The transition to a low-carbon economy is expected to drive demand for minerals such as lithium, cobalt, and nickel, which are essential for renewable energy technologies and electric vehicles. Additionally, continued urbanization and infrastructure development will sustain demand for construction materials and metals.</p>",
  //     "date": "January 19, 2024"
  // },
  // {
  //     "title": "Automotive Industry Rebounds Strongly",
  //     "image": Sample,
  //     "author": "Kevin Hunter",
  //     "content": "<p>The automotive industry has rebounded strongly, with increased production and sales indicating a positive outlook for the sector. After a period of disruption caused by the pandemic, the industry is experiencing renewed growth, driven by a combination of factors including rising consumer demand, technological advancements, and supportive government policies.</p><p>One of the main drivers of the automotive industry's recovery is the resurgence in consumer demand. As economic conditions improve and consumer confidence rises, more people are purchasing vehicles. This trend is particularly evident in emerging markets, where rising incomes and urbanization are fueling demand for both passenger and commercial vehicles.</p><p>Technological innovation is also playing a crucial role in the industry's revival. The development and adoption of electric vehicles (EVs) are accelerating, with many automakers expanding their EV offerings. Advances in battery technology, charging infrastructure, and government incentives are making EVs more accessible and attractive to consumers. Additionally, autonomous driving technologies and connected car features are transforming the automotive landscape, enhancing safety and convenience for drivers.</p><p>Government policies aimed at supporting the automotive industry are further bolstering growth. Many countries have implemented measures such as subsidies, tax incentives, and regulatory support to encourage the production and adoption of greener and smarter vehicles. These initiatives are helping to create a favorable environment for the automotive sector to thrive.</p><p>However, the industry still faces several challenges. Supply chain disruptions, particularly in the semiconductor market, have caused production delays and shortages. Automakers are working to address these issues by diversifying their supplier base and investing in more resilient supply chain strategies. Additionally, the transition to electric and autonomous vehicles requires significant investment in research and development, as well as the retraining of the workforce to adapt to new technologies.</p><p>Overall, the automotive industry's strong rebound is a testament to its resilience and adaptability. By embracing innovation and responding to changing market dynamics, the sector is poised for continued growth and transformation. The shift towards more sustainable and connected vehicles will shape the future of mobility, offering new opportunities and challenges for automakers and consumers alike.</p>",
  //     "date": "February 08, 2024"
  // },
  // ]

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

  const [loading,setLoading]=useState(false)
  const [filteredData,setFilterData]:any = useState(kudlits) ;

  function GetKudlit() {
    setLoading(true)
    axios.get('posting/kudlit').then((e:any)=>{
      console.log(e.data.activities)
      setFilterData(e.data.activities)
      setKudlits(e.data.activities)
      setTimeout(()=>{
        setLoading(false)
      },1000)
    })

    setTimeout(()=>{
      setLoading(false)
    },10000)
  }
  useEffect(()=>{
    GetKudlit()
  },[])
  

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
        
            <h1 className=" flex items-center gap-3 mt-20  text-accent rounded-full  font-fbold  md:text-4xl text-4xl font-semibold">
            Kudlit
            <Link 
      className=' text-sm px-4 py-2 rounded-md border border-input bg-primary hover:bg-accent hover:text-accent-foreground'
      to="/editable/create-blog"

      >Create Activity</Link>
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
      {loading?
      <>
         <Skeleton className="h-[300px] w-full" />
         <Skeleton className="h-[300px] w-full" />
         <Skeleton className="h-[300px] w-full" />
         <Skeleton className="h-[300px] w-full" />
         
    </>
    :
    filteredData.slice(0, 10).map((e:any,key:any)=>(

      <CoverSlide>

      
      <div className=" relative max-w-full flex w-full min-h-0  " key={key} >
        
        <div className=" absolute z-40 right-0 flex gap-5 p-6">
        <Edit2Icon className=" cursor-pointer text-green-600" onClick={()=>{
            window.scrollTo(0, 0);
            navigate(`/editable/edit-blog/${e._id}`)
            localStorage.setItem("saveEdit",JSON.stringify(e))
        }}/>
          <Trash2Icon className=" cursor-pointer text-red-600" onClick={
            ()=>{
              Swal.fire({
                imageUrl:e.imageURL,
                imageWidth: 400,
                imageAlt: "Custom image",
                title: "This action will delete this activity, are you sure?",
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                 
                  axios.delete(`posting/activity/${e._id}`,{
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    }, 
                  }).then((e)=>{
                    GetKudlit()
          
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
          }/>
        
        </div>
        
        <div className=" relative w-[20vw] md:hidden  "  >

          
        <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "></div>

          <img src={e.imageURL} className="  h-full relative aspect-square object-cover" alt="" />
        </div>
        
        <div className="w-full border flex flex-col gap-4 border-border p-4 bg-background cursor-pointer hover:bg-[#e4e4e4] pr-10 relative" onClick={()=>{
        window.scrollTo(0, 0);
        navigate(`/editable/blog/${e._id}`)
        localStorage.setItem("selected",JSON.stringify(e))

      }}>

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