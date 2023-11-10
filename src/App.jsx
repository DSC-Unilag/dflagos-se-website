import Style from "./style"
import  {Navbar, Hero, Sponsors, Tickets, Edition, 
 Footer} from "./Components/Index"


function App() {
 return (
  <>
    <div className="bg-[#fff] font-sans w-full overflow-hidden">
    <div className={`${Style.paddingX} ${Style.flexCenter}`}>
      <div className={`${Style.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
    </div>

<hr className="text-[#4285F4] border border-[#4285F4]"/>

    <div className={`${Style.flexStart } bg-[#fff]`}>
      <div className={`${Style.boxWidth}`}>
          <Hero/>
      </div>
    </div>

  <hr className="text-[#4285F4] border-[1px] border-[#000000]"/>

    <div className={`${Style.paddingX} ${Style.flexStart} text-white lg:pb-[53px]`}>
      <div className={`${Style.boxWidth}`}>
           <Sponsors/>
           
      </div>
    </div> 
    
    <div className={`${Style.paddingX} ${Style.flexStart} text-white bg-blue-500`}>
      <div className={`${Style.boxWidth}`}>
       <Tickets/>
      </div>
    </div>

    <div className={`${Style.paddingX} ${Style.flexStart} bg-[#0D0D0D]`}>
     <div className={`${Style.boxWidth}`}>
       <Edition/>
     </div>
    </div>
  </>
 ) 
   
  
}

export default App
