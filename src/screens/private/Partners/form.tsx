import { InputWithLabel } from "@/components/Input/Input";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from "./../../../plugin/axios";
import { useState } from "react";
import Swal from "sweetalert2";

export function Form({resetPartners}:any) {

  const [dialogOpen, setDialogOpen] = useState(false); // State to control dialog visibility

    const [part, setpart] = useState<any>({
        type: "partner",
        linkToPage: "https://www.facebook.com/BALAODMindanaw",
        photo: null,
    });

    const handleFileChange = (event: any) => {
        setpart({ ...part, photo: event.target.files[0] }); // Correctly store the file
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('type', part.type);
        formData.append('linkToPage', part.linkToPage);
        formData.append('photo', part.photo); // Include the file in FormData
  
        try {
            await axios.post(
                'posting/partner/addPartner',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        'Content-Type': 'multipart/form-data', // Important for file uploads
                    },
                }
            ).then((e:any)=>{
              console.log(e)
              resetPartners()
              Swal.fire({
                title: "Added!",
                text: "The Image has been added, try view on the public url or refresh the page.",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
              });
              setDialogOpen(false);

              
  
            }) ;
            
      
        } catch (error) {
            console.error("Error uploading partner data:", error);
            // Handle errors appropriately (e.g., show error message to user)
        }
       // Hide the form after submission
    }; 
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild onClick={() => setDialogOpen(true)}>
        <Button variant="outline">Add Partners</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Partners</DialogTitle>
          <DialogDescription>
           Add another partners or Networks here. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
        <InputWithLabel
        className=" text-black"
        placeholder="Type"
        value={part.type}
        required={false}
        onChange={(e:any)=>{
          setpart({...part,type:e.target.value})
        }}
        />

        <InputWithLabel
        className=" text-black"
        placeholder="linkToPage"
        type="url"
        value={part.linkToPage}
        onChange={(e:any)=>{
          setpart({...part,linkToPage:e.target.value})
        }}
        />
        <InputWithLabel
        className=" text-black"
        placeholder="Photo"
        type="file"
        onChange={handleFileChange}
        />
        <DialogFooter>
            
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
        
      </DialogContent>
    </Dialog>
  )
}
