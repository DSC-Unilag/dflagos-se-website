import { useState, useEffect } from 'react';
import ArrowRight from '../assets/ArrowRight.svg'
import {useNavigate} from "react-router-dom"

const Countdown = () => {

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/workshops")
  }

    const targetDate = new Date('2023-12-09T08:00:00');

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = new Date(targetDate) - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    /* eslint-disable-next-line */
    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, [targetDate]);

    return (
        <div className="countdown font-sans italic">
            <div className="container">
                <h1>Are you ready?</h1>
                <div className="row">
                    <div className="time">
                        <p>{timeLeft.days}</p>
                        <span>Days</span>
                    </div>
                    <div className="time">
                        <p>{timeLeft.hours}</p>
                        <span>Hours</span>
                    </div>
                    <div className="time">
                        <p>{timeLeft.minutes}</p>
                        <span>Minute</span>
                    </div>
                    <div className="time">
                        <p>{timeLeft.seconds}</p>
                        <span>Seconds</span>
                    </div>
                </div>
                <a href='https://dscunilag.dev/df_lagos' onClick={handleNavigate} className='hover:bg-blue-600'>
                    <p>Grab A Free Ticket</p>
                    <img src={ArrowRight} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Countdown;