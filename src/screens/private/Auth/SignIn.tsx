
import { useEffect, useState } from "react";
import Main from "../Main/Main";
import axios from "./../../../plugin/axios";
import Swal from 'sweetalert2'

import HeadLogo from "./../../../assets/images/logo/BalaodWhiteOutFull@3x.png";
import { InputWithLabel } from "@/components/Input/Input";
import { Loader2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [data,setData] = useState({
    email:"",password:""
  })

  
  const navigate = useNavigate()
  function GetKudlit() {
  
    axios.get('posting/kudlit').then((e:any)=>{
      localStorage.setItem('kudlit',JSON.stringify(e.data.activities))
      
      
    })
   
  }
  useEffect(()=>{
    localStorage.getItem('accessToken')?navigate('/editable/'):""
    GetKudlit()
  },[])
  const [loading,setLoading] = useState(false)
  return (
    <div className=" relative min-h-0 w-full max-w-full  flex flex-col justify-center">

      <div className=" z-30 flex flex-col items-center justify-center right-0 absolute h-screen w-[40vw] lg:w-screen backdrop-blur-sm bg-primary lg:bg-[#5d193e]/70">

        <img src={HeadLogo} className=" h-[100px] object-contain" alt="" />
        <form onSubmit={(e:any)=>{
          e.preventDefault()

          setLoading(true)
          axios.post('auth/login',data).then((e:any)=>{

            switch (e.data.status) {
              case "success":
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Logging In",
                  text: `Welcome back,  ${e.data.user.name}! `,
                  showConfirmButton: false,
                  timer: 2000
                })
                
                localStorage.setItem("user",JSON.stringify(e.data.user))
                localStorage.setItem("accessToken",e.data.accessToken)
                navigate('/editable/')

                
                break;
                
            
              default:
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Invalid Credentials",
                  showConfirmButton: false,
                  timer: 1500
                })
                break;
            }
           
            
            setLoading(false)
            
          }).catch((e:any)=>{
            console.log(e)
          })

          setTimeout(()=>{

            setLoading(false)
          },5000)

          console.log(data)
        }} className=" w-[500px] sm:w-full sm:px-5 mt-10 flex flex-col gap-5">
          <InputWithLabel
          value={data.email}
          onChange={(e:any)=>{
            setData({...data,email:e.target.value})
          }}
          type="email"
          placeholder="Email"
          />
          <InputWithLabel
          value={data.password}
          onChange={(e:any)=>{
            setData({...data,password:e.target.value})
          }}
          type="password"
          placeholder="Password"
          />

          <p className=" text-background text-sm font-fregular cursor-pointer hover:underline">  Forgot Password?</p>

            <button className={loading?"relative px-8 py-2 rounded-md bg-background isolation-auto z-10 border-2 border-primary-foreground flex items-center justify-center gap-4 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-primary-foreground before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-fmedium pointer-events-none":" relative px-8 py-2 rounded-md bg-background isolation-auto z-10 border-2 border-primary-foreground flex items-center justify-center gap-4 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-primary-foreground before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-fmedium"}> <Loader2Icon  className={loading?" animate-spin ":" hidden"}/> {loading?"Loading":"Sign In"}</button>
        </form>

      </div>

    

      
      <Main />
    
    </div>
  );
};

export default SignIn;
