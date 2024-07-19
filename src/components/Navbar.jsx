

const Navbar = (props) => {
  return (
    <>
  

<div className="navbar w-full z-10 bg-opacity-200 bg-[#1F0F18] flex items-center justify-center ">
  <div className="navbar-center ">
    <a className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ff0084] ">{props.name}</a>
  </div> 
</div>
</>
   
  )
}

export default Navbar