import { ThemeProvider } from "@/components/theme-provider";

import { Link, Outlet, useNavigate } from "react-router-dom";

// import { ModeToggle } from "./components/mode-toggle";
// import Reveal from "./components/animation/reveal";
import { ChevronDown, MenuIcon, SearchIcon } from "lucide-react";
import NavLink from "../../components/link/link";
import { useEffect, useState } from "react";
import HeadLogo from "./../../assets/images/logo/BalaodWhite.png";
import { Cookies } from "./Cookies";
import axios from "../../plugin/axios";

function Public() {
  const navigate = useNavigate()
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [navbarTop, setNavbarTop] = useState<string>("0");


  const handleClick = (event:any, targetId:any) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = () => {
    // Logic to hide the menu when scrolling
    setShowMenu(false);
  };

  // Effect to add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function GetKudlit() {

    axios.get('posting/kudlit').then((e:any)=>{
    
      localStorage.setItem('kudlit',JSON.stringify(e.data.activities))
    })
  }
 


  function GetData(){
    try {
      axios.get('posting/').then((e:any)=>{
      localStorage.setItem('activities',JSON.stringify(e.data.activities))
      localStorage.setItem('partners',JSON.stringify(e.data.partners))
      localStorage.setItem('whatWeDo',JSON.stringify(e.data.whatWeDo))
    })
    } catch (error) {
      console.log("server Down hehe")
    }
    
  }
  useEffect(()=>{
    
    GetData()
    GetKudlit()
  },[])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setNavbarTop("0");
      } else {
        setNavbarTop("-80px");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" bg-background min-h-screen w-full overflow-hidden flex flex-col  items-center">
        <nav
          style={{ top: navbarTop }}
          className=" transition-all duration-500 z-50 animate__animated animate__slideInDown   bg-[#4d172e] from-[#4d172e] from-5% via-background  via-40% to-background to-50% b backdrop-blur-md    fixed flex justify-between items-center w-full max-w-full py-0   "
        >
          <Link className=" ml-5 flex items-center" to="/">
            <img
              src={HeadLogo}
              className="  logo h-10 object-contain "
              alt="Vite logo"
            />
          </Link>
          <nav className=" bg-accent h-[60px] text-accent-foreground flex  uppercase items-center justify-center">
            <div className=" flex h-full items-center font-regular justify-center w-full lg:hidden">
              <NavLink onClick={() => {
                window.scrollTo(0, 0);
                navigate("/home")
              
                
              }} text="HOME" />

              <div className="hover:cursor-pointer relative group  font-fbold h-full px-8 flex items-center justify-center hover:bg-foreground text-xs transition-all  duration-75">
                {" "}
                {/* Dropdown Container */}
                <Link to="/about"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/about")
                
                  
                }}
                
                className=" flex items-center gap-2  ">
                  ABOUT US{" "}
                  <ChevronDown className=" group-hover:rotate-180 transition-all duration-75 w-4 h-4" />{" "}
                </Link>
                <div className="hidden w-[200px] group-hover:flex flex-col absolute top-full left-0 bg-accent text-accent-foreground">
                  <Link
                    to="/about"
                    onClick={(e) => {
                      navigate("/about#who-we-are")
                      window.scrollTo(0, 0);
                      handleClick(e, 'who-we-are')
                    
                      
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm border-b-[1px] tracking-wider bg-gray-200 hover:bg-background"
                  >
                    Who We Are
                  </Link>
                  <Link
                    to="/about"
                    onClick={(e) => {
                    navigate("/about#what-we-do")
                    handleClick(e, 'what-we-do')
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm bg-gray-200 hover:bg-background"
                  >
                    What We Do
                  </Link>
                </div>
              </div>

              <div className="hover:cursor-pointer relative group  font-fbold h-full px-8 flex items-center justify-center hover:bg-foreground text-xs transition-all  duration-75">
                {" "}
                {/* Dropdown Container */}
                <Link to="/programs"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/programs")
                
                  
                }}
                
                className=" flex items-center gap-2 uppercase  ">
                  Our programs{" "}
                  <ChevronDown className=" group-hover:rotate-180 transition-all duration-75 w-4 h-4" />{" "}
                </Link>
                <div className="hidden w-[300px] group-hover:flex flex-col absolute top-full left-0 bg-accent text-accent-foreground">
                  <Link
                     to="/programs"
                     onClick={(e) => {
                      navigate("/programs#Human Rights Promotion")
                      handleClick(e, 'Human Rights Promotion')
                    
                      
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm border-b-[1px] tracking-wider bg-gray-200 hover:bg-background"
                  >
                    Human Rights Promotion
                  </Link>
                  <Link
                    to="/programs"
                    onClick={(e) => {
                      navigate("/programs#Environmental Justice")
                      handleClick(e, 'Environmental Justice')
                    
                      
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm bg-gray-200 hover:bg-background"
                  >
                    Environmental Justice

                  </Link>
                  <Link
                     to="/programs"
                     onClick={(e) => {
                      navigate("/programs#Women and Children Protection")
                      handleClick(e, 'Women and Children Protection')
                    
                      
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm bg-gray-200 hover:bg-background"
                  >
                    Women and Children Protection
                  </Link>
                  <Link
                    to="/programs"
                    onClick={(e) => {
                      navigate("/programs#Institutional Development")
                      handleClick(e, 'Institutional Development')
                    
                      
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm bg-gray-200 hover:bg-background"
                  >
                   Institutional Development
                  </Link>
                </div>
              </div>

              <NavLink
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/kudlit")
                
              }}
              text="Kudlit" />     
              <NavLink 
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/work-with-us")
              
                
              }}
              text="Work With Us" />

              <span className="  px-10">
                <div
                  className={
                    " search transition-all duration-150 bg-primary-foreground p-3 rounded-full hover:cursor-pointer px-5 "
                  }
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/kudlit")
                    
                  }}
                >
                  <SearchIcon className=" text-accent w-5 h-5 " />
                </div>
              </span>
            </div>
            <div className="hidden lg:flex  w-full h-full">
              <div className="relative flex items-center px-4 ">
                <MenuIcon className="h-7 w-7 cursor-pointer " onClick={() => setShowMenu(!showMenu)} />
                <div className={`absolute ${showMenu ? 'flex' : 'hidden'} top-full border-b-2 border-primary-foreground right-0 bg-white/60 text-black shadow-lg w-[100vw] flex-col text-right sm:text-center`}>
                  <Link to="/home" className="block text-lg font-fbold px-4 py-2 hover:bg-gray-100">
                    HOME
                  </Link>
                  <div className=" relative group w-[100vw]  hover:bg-gray-100  flex flex-col items-end justify-end sm:items-center">
                    
                    <div className="   flex items-center gap-3 text-lg font-fbold px-4 py-2 ">
                      ABOUT US
                      <ChevronDown className=" group-hover:rotate-180 inline w-4 h-4 " />
                    </div>
                    <div className=" hidden group-hover:flex flex-col w-[100vw]  right-full top-0  text-black rounded-md  ">
                      <Link
                        to="/about"
                        onClick={(e) => {
                          navigate("/about#who-we-are")
                          window.scrollTo(0, 0);
                          handleClick(e, 'who-we-are')
                        
                          
                        }}
                        className="block px-4 py-2 hover:bg-gray-200 font-fmedium text-sm"
                      >
                        Who We Are
                      </Link>
                      <Link
                        to="/about"
                        onClick={(e) => {
                        navigate("/about#what-we-do")
                        handleClick(e, 'what-we-do')
                        }}
                        className="block px-4 py-2 hover:bg-gray-200 font-fmedium text-sm"
                      >
                        What We Do
                      </Link>
                    </div>
                  </div>



                  <div className="relative group w-[100vw]  hover:bg-gray-100  flex flex-col items-end justify-end sm:items-center">
                    <div className="flex items-center gap-3 text-lg font-fbold px-4 py-2 ">
                      OUR PROGRAMS
                      <ChevronDown className="group-hover:rotate-180 inline w-4 h-4" />
                    </div>
                    <div className="hidden group-hover:flex flex-col w-[100vw]  right-full top-0  text-black rounded-md">
                      <Link
                        to="/programs"
                        onClick={(e) => {
                         navigate("/programs#Human Rights Promotion")
                         handleClick(e, 'Human Rights Promotion')
                       
                         
                       }}
                        className="block px-4 py-2 hover:bg-gray-200 font-fmedium text-sm"
                      >
                        Human Rights Promotion
                      </Link>
                      <Link
                        to="/programs"
                        onClick={(e) => {
                          navigate("/programs#Environmental Justice")
                          handleClick(e, 'Environmental Justice')
                        
                          
                        }}
                        className="block px-4 py-2 hover:bg-gray-200 font-fmedium text-sm"
                      >
                        Environmental Justice
                      </Link>
                      <Link
                        to="/programs"
                        onClick={(e) => {
                         navigate("/programs#Women and Children Protection")
                         handleClick(e, 'Women and Children Protection')
                       
                         
                       }}
                        className="block px-4 py-2 hover:bg-gray-200 font-fmedium text-sm"
                      >
                        Women and Children Protection
                      </Link>
                      <Link
                        to="/programs"
                        onClick={(e) => {
                          navigate("/programs#Institutional Development")
                          handleClick(e, 'Institutional Development')
                        
                          
                        }}
                        className="block px-4 py-2 hover:bg-gray-200 font-fmedium text-sm"
                      >
                        Institutional Development
                      </Link>
                    </div>
                  </div>
                  <Link to="/kudlit" className="block text-lg font-fbold px-4 py-2 hover:bg-gray-100">
                    Kudlit
                  </Link>
                  <Link to="/work-with-us" className="block text-lg font-fbold px-4 py-2 hover:bg-gray-100">
                    Work With Us
                  </Link>
                  
                </div>
              </div>
            </div>
          </nav>
        </nav>
                  
        <Cookies/>

        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default Public;
