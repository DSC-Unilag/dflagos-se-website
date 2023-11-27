import { useState } from 'react';
import expand from "../assets/expand.svg"
import close from "../assets/close.svg";
import doodle1 from "../assets/doodle-1.png";
import doodle2 from "../assets/doodle-2.png";
import doodle3 from "../assets/doodle-3.png";
import doodle4 from "../assets/doodle-4.png";
import doodle5 from "../assets/doodle-5.png";

const Faq = () => {
    const data = [
        {
            "question": " What is DevFest Student Edition about?🧐",
            "answer": "DevFest is an annual tech conference organized by the Google Developer Groups (GDG) community. The Community hosts these events in different countries around the globe.If you’re enthusiastic about seeking and finding new opportunities, increasing your knowledge on the latest Google developer tools, leverage the DevFest platform as it offers opportunities for developers to connect, learn and build using Google's tools."
        },
        {
            "question": "Why should I attend DevFest?🗿",
            "answer": "DevFest is an annual tech conference organized by the Google Developer Groups (GDG) community. The Community hosts these events in different countries around the globe. If you’re enthusiastic about seeking and finding new opportunities, increasing your knowledge on the latest Google developer tools, leverage the DevFest platform as it offers opportunities for developers to connect, learn and build using Google's tools."
        },
        {
            "question": "What is Unique about the Student Edition?🦻",
            "answer": "DevFest is Google’s annual globally distributed conference. It is radically different from a meetup or speaker session, and hosts successful Tech experts who have built successful companies.. DevFest events happen during the end of the year where new innovations from Google are launched, so you have the opportunity to engage with these products"
        },
        {
            "question": " What Date will DevFest Student be holding? 💁",
            "answer": "The Student edition of DevFest 2023 will be held on Saturday 10th December 2023 by 9am."
        },
        {
            "question": "How much is the ticket For DevFest Student Edition 2023?💸",
            "answer": "DevFestStudent Edition is totally FREE,  but seeing that the venue can only contain a certain number of persons, only those registered  will be allowed into the hall. We recommend you reserve your ticket as fast as possible to secure your seat at the event.  But you must RSVP to be allowed into the hall. You can get your ticket.."
        },
        {
            "question": "Who will be speaking at the Events📢",
            "answer": "Leading Tech experts and Developers in Nigeria and from around the world. Hence you should come listen and learn and have all questions you may have answered by them."
        },
        {
            "question": "What kind of topics will be covered at the Event?🎥 ",
            "answer": "Topics covered will include, Design, Technical Writing, Cloud Development, Web development,  Big Data, Cyber security, AI/ Machine learning and a lot more. It will also cover opportunities and topics on how non techies could get into the Tech space."
        },
        {
            "question": "Can I get access to the speakers' slides after their presentations and where?",
            "answer": "Yes, you can download the Speakers slides on their bio after the event. The slides will be annexed to each speaker’s profile on the GDSC website."
        },
        {
            "question": "I am a student developer with experience and would love to   speak at the event. Can I speak? And if Yes, How can I apply to speak?",
            "answer": "Yes. But you must first apply and submit your proposal to ……"
        },
        {
            "question": "How can I become a member of the Google Developer Student Community UNILAG chapter?",
            "answer": " Follow this link to GDSC Unilag whatsapp group Google Developer Student Clubs University Of Lagos ."
        },
        {
            "question": "Can I be a volunteer to make DevFestStudent Edition a success?",
            "answer": "Of course you can. We welcome volunteers who are passionate about contributing to the success of DevFest Lagos 2023. To join our volunteer team, please follow us on our social media channels for updates and information on how to get involved"
        },
        {
            "question": "How can I RSVP for sessions?",
            "answer": "Here's how you can RSVP for sessions. Visit our website (input website link) click on the free registration for the event. You'll then get a ticket ID sent to your mail along with a list of the available sessions you can RSVP for"
        },
    ]

    const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const FaqItem = ({ question, answer, isOpen, onClick }) => {
        console.log(isOpen)
        return (
            <div onClick={onClick} className="qa font-sans italic">
                <div className="q-row">
                    <p className={`${isOpen ? "text-yellow-500 mb-[10px]" : ""  } q`}>{question}</p>
                    {isOpen ? <img src={close} alt="" /> : <img src={expand} alt="" />}
                </div>
                { isOpen && <p className="a">{answer}</p> }
            </div>
        )
    }

    return (
        <div id="faqs" className="faq font-sans italic">
            <h1 className='font font-bold text-[30px] z-50'>Lets answer some of your burning questions</h1>
            <p className="sub-heading">Check out our most asked questions here, mfjpm 😑🤚🏾</p>
            <div className="column">
                {data.map((item, index) => (
                    <FaqItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={index === openIndex}
                      onClick={() => handleItemClick(index)}
                    />
                  ))
                }
            </div>
            <img className='doodle doodle-1' src={doodle1} alt="" />
            <img className='doodle doodle-2' src={doodle2} alt="" />
            <img className='doodle doodle-3' src={doodle3} alt="" />
            <img className='doodle doodle-4' src={doodle4} alt="" />
            <img className='doodle doodle-5' src={doodle5} alt="" />
        </div>
    )
}

export default Faq;