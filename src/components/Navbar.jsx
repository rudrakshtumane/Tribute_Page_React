

const Navbar = (props) => {
  return (
    <>
  

<div className="navbar  top-0 left-0 w-full z-10 bg-opacity-200 bg-[#1F0F18] text-[#1F0F18]">
  <div className="navbar-start">
    
  </div>
  <div className="navbar-center flex justify-center">
    <a className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ff0084] flex items-center justify-center">{props.name}</a>
  </div>
  
</div>
</>
   
  )
}

export default Navbar