
function NavLink({onClick,text}:any) {
  return (
    <div onClick={onClick} className=" cursor-pointer  font-fbold h-full px-8 flex items-center justify-center hover:bg-foreground text-xs transition-all  duration-75" >{text}</div>
  )
}

export default NavLink