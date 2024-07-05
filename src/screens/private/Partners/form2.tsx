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
import imageCompression from 'browser-image-compression';

export function Form({ resetPartners, id }: any) {
  const [part, setpart] = useState<any>({
    id: null,
    photo: null,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false); // State to control dialog visibility

  


  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    setpart({ ...part, photo: file }); // Correctly store the file

    // Generate a preview URL for the selected image file
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
      const webpFile = await convertToWebP(file);
      setpart({ ...part, photo: webpFile });
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
        <Button variant="outline" onClick={() => setDialogOpen(true)}>
          Update Image
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Image</DialogTitle>
          <DialogDescription>
            Add another image here. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <InputWithLabel
            className="text-black"
            placeholder="Photo"
            type="file"
            onChange={handleFileChange}
          />
          {preview && (
            <div className="preview">
              <img src={preview} alt="Image Preview" />
            </div>
          )}
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
