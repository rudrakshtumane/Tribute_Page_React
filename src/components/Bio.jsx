// import React from 'react'


const Bio = ({bio, earlyLife, workLife,fraud}) => {
  return (
    <>  
    
    <div className="bg-gradient-to-r from-[#ff0084] to-[#33001b] h-[950px] w-full">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-black text-center py-10">Get to know more</h1>


    <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-black border mx-auto w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 my-5 ">
  <div className="collapse-title text-lg sm:text-xl  font-medium text-center">Bio</div>
  <div className="collapse-content">
    <p>{bio}</p>
  </div>
</div>

<div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-black border mx-auto w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 my-5 ">
  <div className="collapse-title text-lg sm:text-xl font-medium text-center">Early Life </div>
  <div className="collapse-content">
    <p>{earlyLife}</p>
  </div>
</div>


<div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-black border mx-auto w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 my-5">
  <div className="collapse-title text-lg sm:text-xl font-medium text-center">Work and life </div>
  <div className="collapse-content">
    <p>{workLife}</p>
  </div>
</div>

<div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-black border mx-auto w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 my-5">
  <div className="collapse-title text-lg sm:text-xl font-medium text-center">Background of the 1992 security fraud</div>
  <div className="collapse-content">
    <p>{fraud}</p>
  </div>
</div>

     </div>

    
    </>
  )
}

export default Bio