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

export function Form({ resetPartners, id,description,img }: any) {
  const [part, setpart] = useState<any>({
    description:description,
    photo: null,
  });

  const [preview, setPreview] = useState<string | null>(img);
  const [dialogOpen, setDialogOpen] = useState(false); // State to control dialog visibility

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setpart({ ...part, photo: file }); // Correctly store the file

    // Generate a preview URL for the selected image file
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", part.photo); // Include the file in FormData

    try {
      await axios
        .put(`posting/whatWeDo/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        })
        .then((_e: any) => {
          resetPartners();
          Swal.fire({
            title: "Added!",
            text: "The Image has been Updated",
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
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className=" text-primary border" onClick={() => setDialogOpen(true)}>
        Update This Program
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update This Program</DialogTitle>
          <DialogDescription>
            Add another image or Description. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        
        
          <InputWithLabel
            className="text-black"
            placeholder="Photo"
            type="file"
            onChange={handleFileChange}
          />
          {preview && (
            <div className="preview">
              <img src={preview} className=" h-[20vh] w-full object-contain" alt="Image Preview" />
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <h1 className={` text-lg sm:text-sm font-fmedium text-background text-black `}>Description</h1>
          <textarea className=" flex h-[30vh] w-full font-fmedium rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" name="" id="" onChange={handleFileChange} value={part.description}></textarea>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
