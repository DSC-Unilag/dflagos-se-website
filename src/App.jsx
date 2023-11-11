import Style from "./style"
import {Navbar, Hero, Sponsors, Tickets, Edition} from "./Components/Index"
import Speakers from './Components/Speakers';
import Countdown from './Components/Countdown';
import Involved from './Components/Involved';
import Faq from './Components/Faq';
import Footer from './Components/Footer';


function App() {
 return (
  <>

    <Speakers />
    <Countdown />
    <Involved />
    <Faq />
    <Footer />
  </>
 )
}

export default App
