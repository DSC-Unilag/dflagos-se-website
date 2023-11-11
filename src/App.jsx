import Style from "./style"
import  {Navbar, Hero, Sponsors, Tickets, Edition, About, EventSchedule, Footer} from "./Components/Index"


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

    <div className={`font-sans bg-[#fff]`}>
      <div className={`${Style.boxWidth}`}>
          <Hero/>
      </div>
    </div>

  <hr className="text-[#4285F4] border-[1px] border-[#000000]"/>

    <div className={`${Style.paddingX}text-white font-sans lg:pb-[53px]`}>
      <div className={`${Style.boxWidth}`}>
        <Sponsors/>
      </div>
    </div> 
    
    <div className={`${Style.paddingX} ${Style.flexStart} font-sans text-white ticket-background`}>
      <div className={`${Style.boxWidth}`}>
       <Tickets/>
      </div>
    </div>

    <div className={`${Style.paddingX} ${Style.flexStart} font-sans bg-[#0D0D0D]`}>
     <div className={`${Style.boxWidth}`}>
       <Edition/>
     </div>
    </div>

    <div className={`flex px-6 lg:px-0 sm:pl-[124px] lg:pl-0 lg:justify-end font-sans bg-[#fff] mb-[120px]`}>
     <div className={`${Style.boxWidth}`}>
       <About/>
     </div>
    </div>

    <div className={`${Style.paddingX} ${Style.flexCenter} font-sans bg-[#fff] mb-[120px]`}>
     <div className={`${Style.boxWidth}`}>
     <EventSchedule/>
     </div>
    </div>
     
  </>
 ) 
   
  
}

export default App
