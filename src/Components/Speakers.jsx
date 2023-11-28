import '../App.css';
import PlaceHolder from "../assets/ph1.png";
import PlaceHolder2 from "../assets/ph2.png";
import PlaceHolder3 from "../assets/ph3.png";
import {
    Goodness,
    Chinaza,
    Idris,
    Olayinka,
    Mileke,
    Adejoke,
    Jesus,
    Ijeoma,
    Salim } from '../assets';
import { speakers } from '../constants';

const Speakers = () => {
    return (
        <div className="speakers font-sans italic">
            <h1>Featured Speakers</h1>
            <div className="container">
             
             <div className='grid px-[30px] lg:px-[134px] grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px]'>
                {speakers.map((item, index) => (
                    <div key={index}>
                     <img style={{width: 380, height: 420}} className='' src={item.url} alt="" />
                     <div className='meta mt-[5px]'>
                         {item.name}
                     </div>
                    </div>
                ))}
             </div>

    
            </div>
        </div>
    )
}

export default Speakers;