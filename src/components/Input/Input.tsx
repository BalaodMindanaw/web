import { Input } from "@/components/ui/input"
 
export function InputWithLabel({placeholder,type,onChange,value,required,className}:any) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h1 className={` text-lg sm:text-sm font-fmedium text-background ${className}`}>{placeholder}</h1>
      <Input type={type} required={required} onChange={onChange} value={value} className=" w-full rounded-md" placeholder={placeholder} />
    </div>
  )
}