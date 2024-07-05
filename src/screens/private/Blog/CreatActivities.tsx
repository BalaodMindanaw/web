
import Footer from '@/components/footer/Footer'
// import Tiptap from './Tiptap'
import { Link, useNavigate} from 'react-router-dom'
import { Loader2Icon, LocateIcon } from 'lucide-react'
// import axios from '../../../plugin/axios'
import { useEffect, useState } from 'react'
import { Switch } from '@/components/ui/switch'
import TiptapEdit from './TiptapEdit'
import { Button } from '@/components/ui/button'
import axios from './../../../plugin/axios'
import Swal from 'sweetalert2'
import imageCompression from 'browser-image-compression';




const CreatActivity = () => {
  const navigate = useNavigate()
 const [loading,setLoading] = useState(false)

 const [data,setData] = useState<any>(JSON.parse(localStorage.getItem('saveEdit')||""))


  // function formatDate(dateString:any) {
  //   const date = new Date(dateString);
  //   const options:any = { year: 'numeric', month: 'long', day: '2-digit' };
  
  //   return new Intl.DateTimeFormat('en-US', options).format(date);
  // }

  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    

    if (file) {
      const previewURL = URL.createObjectURL(file);
      const webpFile = await convertToWebP(file);
      setPreview(previewURL );
      setData({ ...data, photo: webpFile }); // Update state with the WebP file
    }
  };


  const convertToWebP = async (file: File): Promise<File> => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 2048,
      useWebWorker: true,
      fileType: 'image/webp',
    };
    return await imageCompression(file, options);
  };

 
  useEffect(()=>{
    localStorage.setItem('saveEdit',JSON.stringify(data))

  
  },[data])

  function checkBlankContent(data:any) {
    // Check if the 'content' field is present and is blank
    return  !data.title || !data.content || !(data.photo.name?true:false);
  }
   
    
  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">
   
      <div className=' relative w-full flex  justify-center items-center h-[60vh] bg-black overflow-hidden'>
      
      
      <div className=" cursor-pointer z-20 absolute grid w-full max-w-xs items-center gap-1.5">
     
      <input id="picture" className=" cursor-pointer flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
      required
      placeholder="Photo"
      type="file"
      onChange={handleFileChange}
      />
</div>
          
        
        {preview && (
              <img src={preview} className=' relative w-full mt-5 text-xl mb-5 object-cover h-[60vh]' alt="" />
         
          )}
      </div>



        <div className=" mt-5 px-[10vw] md:px-5">
        <Link to="/editable/kudlit" className=" w-[90px] font-fmedium flex items-center justify-between px-2 py-2 bg-background text-black font-bold border border-gray-300 hover:bg-[#e4e4e4]">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Kudlit
    </Link> 
    <div className=" flex justify-between border border-x-0 py-5 text-base font-fmedium mt-4 ">
      <div className=' flex items-center gap-4'>
      
        <input value={data.date} onChange={(e:any)=>{
          setData({...data,date:e.target.value})
        }} 
        className=' text-right border border-border' type='date' />
        <Switch 
          checked={data.showDate}
          onCheckedChange={(checked) => {
            setData({ ...data, showDate: checked });
          }}
        />
        
        
      </div>
        
        <div className=' flex items-center gap-4'>
           <input 
           value={data.location} onChange={(e:any)=>{
            setData({...data,location:e.target.value})
          }} 
          placeholder=' Cagayan de Oro, 9000'
           type="text" className=' w-[400px] text-right border border-border' />
           <LocateIcon className=' h-4 w-4'/>

           <Switch 
          checked={data.showLocation}
          onCheckedChange={(checked )=>{
            setData({...data,showLocation:checked })
          }}
          
        />
           
          
        </div>
        
    </div>

    <div className=" flex flex-col  mt-5 font-fmedium text-lg gap-5 mb-36">

    
  

    

    <div>
      <textarea  value={data.title} onChange={(e:any)=>{
        setData({...data,title:e.target.value})
      }} required className=" w-full outline-none text-primary text-3xl font-fbold" placeholder='Title e.g Community Engagement: Local Citizens Participate in Process ' />
    </div>

 
    <TiptapEdit data={data.content} setData={setData} />
    <Button className={loading?' font-fbold pointer-events-none flex gap-3 ':' font-fbold pointer-events-auto'} onClick={async(e:any)=>{
      e.preventDefault()
      console.log(checkBlankContent(data))
      
      if (!checkBlankContent(data)) {
        setLoading(true)
        const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("photo", data.photo);
      formData.append("location", data.location);
      formData.append("date", data.date);
      formData.append("showDate", data.showDate);
      formData.append("showLocation", data.showLocation);




      try {
        await axios
          .post(`posting/activity/addActivity/`, formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "Content-Type": "multipart/form-data", // Important for file uploads
            },
          })
          .then((_e: any) => {
            setLoading(false)
            Swal.fire({
              title: "Added!",
              text: "The new Activity has been Added",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            setData({
              title:"",content:"",highlight:false,photo:null,location:'',date:null,showDate:true,showLocation:true
             })

             localStorage.setItem('saveEdit',JSON.stringify({
              title:"",content:"",highlight:false,photo:{},location:'',date:null,showDate:true,showLocation:true
             }))

             navigate('/editable/kudlit')
          });
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Something is wrong, please contact the creator",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
        // Handle errors appropriately (e.g., show error message to user)
      }
      setTimeout(()=>{

        setLoading(false)
      },5000)
      }else{
      Swal.fire({
        title: "Empty Field (Photo,title,content)!",
        text: "Some Fields are Empty please fill it up",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      }





   
      

    }} >  <Loader2Icon className={loading?' animate-spin ':' hidden'}/> Publish Blog</Button>
   
{/*         
        <div>
            <h1 className=" text-primary text-3xl font-fbold">Community Engagement: Local Citizens Participate in Process
            </h1>
        <p className=' font-fmedium'>By: Aurora Parong</p>
        </div>
        

       

        <p>Community engagement plays a pivotal role in fostering collaboration and ensuring that local citizens have a voice in the decision-making processes that affect their lives. The photo above, taken during a community meeting organized by Balay Mindanaw, captures the essence of this engagement.</p>

        <h1 className=' font-fbold text-xl'>The Importance of Community Involvement</h1>

        <p>Involving community members in planning and decision-making processes leads to more effective and sustainable outcomes. When citizens are actively engaged, they are more likely to support and contribute to initiatives, creating a sense of ownership and responsibility. This collaborative approach helps in addressing local issues with locally informed solutions.</p>

        <h1 className=' font-fbold text-xl'>Balay Mindanaw's Approach</h1>


        <p>Balay Mindanaw, an organization dedicated to promoting inclusive and sustainable peace in Mindanao, exemplifies effective community engagement. They facilitate various platforms where local citizens can participate actively, share their insights, and influence the processes that impact their communities.</p>
    */}
   
   
    </div>
                

        </div>

       


        <Footer/>
        
        

    </div>
  )
}

export default CreatActivity