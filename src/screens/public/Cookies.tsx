
import {  CookieIcon } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


export function Cookies() {


  return (
    <Drawer>
      <DrawerTrigger asChild>
      <div className="  animate__animated animate__slideInUp fixed   z-50 m-4 cursor-pointer h-14 w-14  flex items-center justify-center bg-accent  bottom-0 left-0 rounded-full">
                  <CookieIcon className=" text-primary"/>
        </div>
      </DrawerTrigger>
      <DrawerContent>

        <div className="mx-auto w-full max-w-sm">
            
          <DrawerHeader>
            <DrawerTitle className=" font-fextra-bold text-3xl">THIS SITE USES COOKIES</DrawerTitle>
            
          </DrawerHeader>
          <div className="p-4 pb-0">
            
            <div className="flex items-center justify-center space-x-2">
                
            <DrawerDescription className=" font-fmedium">Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used.

For more information on how we use cookies, see our cookie statement. <b className=" font-fbold hover:underline cursor-pointer">Learn more</b> 

</DrawerDescription>

            </div>
            
          </div>
          <DrawerFooter>
          <DrawerClose asChild>
            <Button>ACCEPT RECOMMENDED COOKIES</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
