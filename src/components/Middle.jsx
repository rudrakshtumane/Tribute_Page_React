
import bg from '../assets/images/bg_img.png';
import profile from '../assets/images/harshad.jpg';


const Middle = ({quote}) => {
  
  return (
    <>
    <div
  className="hero min-h-screen w-full "
  style={{
    backgroundImage: `url(${bg})`,
  }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  
      src={profile}
      className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/2 rounded-lg shadow-2xl mb-6 lg:mb-0" />
    <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ff0084]">{quote}</h1><br/>
        
    </div>
  </div>
  </div>


    </>
  )
} 

export default Middle


