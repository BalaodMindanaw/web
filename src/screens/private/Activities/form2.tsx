import { InputWithLabel } from "@/components/Input/Input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "../../../plugin/axios";
import { useState } from "react";
import Swal from "sweetalert2";
import ActivitiesCard from "@/components/card/card3";
import { Loader2Icon } from "lucide-react";

export function Form({ resetPartners, id,e,order}: any) {
  const [loading,setLoading] = useState(false)
  const [show,setShow] = useState(false)



  const [selectedID,setSelectedID] = useState(id)

  const [preview,setpreview] = useState<any>(e)

  const [searchQuery, setSearchQuery] = useState('');


  const [kudlits] =  useState(JSON.parse(localStorage.getItem('kudlit')||""))
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
  const [filteredData,setFilterData]:any = useState(kudlits) ;

  const handleSearchChange = (event:any) => {
    setSearchQuery(event.target.value);
    setShow(false)
    setFilterData(filterData(kudlits, searchQuery))
  }


  const [dialogOpen, setDialogOpen] = useState(false); // State to control dialog visibility



  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(id)
    console.log(order+1)

    setLoading(true)

    try {
      await axios
        .put(`posting/activity/${id}`, {
            
          "highlight": false,
          "order": null
      }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        })
        .then((_e: any) => {
          console.log("remove current!")
          try {
             axios
              .put(`posting/activity/${selectedID}`, {
                  
                "highlight": true,
                "order": order+1
            }, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  "Content-Type": "multipart/form-data", // Important for file uploads
                },
              })
              .then((_e: any) => {
                console.log("updated!")
                setLoading(false)
                resetPartners();
                Swal.fire({
                  title: "Added!",
                  text: `Highligh ${order+1} has been updated!`,
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2000,
                });
      
                // Hide the form after submission
                setDialogOpen(false);
              });
          } catch (error) {
            console.error("Error uploading partner data:", error);
            // Handle errors appropriately (e.g., show error message to user)
          }

          

          // Hide the form after submission
          setDialogOpen(false);
        });

        
    } catch (error) {
      console.error("Error uploading partner data:", error);
      // Handle errors appropriately (e.g., show error message to user)
    }

    setTimeout(()=>{

      setLoading(false)
    },5000)
    
    
  };

  return (

    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary"  onClick={() => setDialogOpen(true)}>
          Change Highlight
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Changing Highlight #{order +1}</DialogTitle>
          <DialogDescription>
            Select  highlight from current activities, Click submit when you're done.
           
          </DialogDescription>
        </DialogHeader>
        {show?<ActivitiesCard e={preview} />:""}
        
        <form onSubmit={handleSubmit} className="grid gap-2 py-4">

          
          <InputWithLabel
            className="text-black"
            placeholder="Search Activities"
            type="search"
            value={searchQuery} 
            onChange={handleSearchChange}
          />

          {filteredData.slice(0,5).map((e:any,key:any)=>(
            <div className=" cursor-pointer border-border border flex items-center gap-3" key={key} onClick={()=>{
              setSearchQuery(e.title)
              setShow(true)
              setpreview(e)
              setFilterData([])
              setSelectedID(e._id)
            }}>
              <img src={e.imageURL} className="  h-16 w-12  object-cover" alt="" />
              <p className=" font-fbold text-sm">{e.title}</p>
            </div>
          ))}
          
          <DialogFooter>
            <Button className={loading?' font-fbold pointer-events-none flex gap-3 ':' font-fbold pointer-events-auto'} type="submit"> <Loader2Icon className={loading?' animate-spin ':' hidden'}/> Update</Button>
          </DialogFooter>
        </form>

        
      </DialogContent>

      
    </Dialog>
  );
}
