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
             
             <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[40px]'>
                {speakers.map((item, index) => (
                    <div key={index}>
                     <img src={item.url} alt="" />
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