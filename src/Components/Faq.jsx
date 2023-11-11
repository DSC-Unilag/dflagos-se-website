import { useState } from 'react';
import expand from "../assets/expand.svg"
import close from "../assets/close.svg";

const Faq = () => {
    const data = [
        {
            "question": "How much is the ticket For DevFest UNILAG Edition 2023? How much is the ticket For DevFest UNILAG Edition 2023?",
            "answer": "DevFestStudent Edition is totally FREE, but seeing that the venue can only contain a certain number of persons, only those registered will be allowed into the hall."
        },
        {
            "question": "How much is the ticket For DevFest UNILAG Edition 2023?",
            "answer": "DevFestStudent Edition is totally FREE, but seeing that the venue can only contain a certain number of persons, only those registered will be allowed into the hall."
        },
        {
            "question": "How much is the ticket For DevFest UNILAG Edition 2023?",
            "answer": "DevFestStudent Edition is totally FREE, but seeing that the venue can only contain a certain number of persons, only those registered will be allowed into the hall."
        },
        {
            "question": "How much is the ticket For DevFest UNILAG Edition 2023?",
            "answer": "DevFestStudent Edition is totally FREE, but seeing that the venue can only contain a certain number of persons, only those registered will be allowed into the hall."
        },
        {
            "question": "How much is the ticket For DevFest UNILAG Edition 2023?",
            "answer": "DevFestStudent Edition is totally FREE, but seeing that the venue can only contain a certain number of persons, only those registered will be allowed into the hall."
        },
        {
            "question": "How much is the ticket For DevFest UNILAG Edition 2023?",
            "answer": "DevFestStudent Edition is totally FREE, but seeing that the venue can only contain a certain number of persons, only those registered will be allowed into the hall."
        },
        {
            "question": "How much is the ticket For DevFest UNILAG Edition 2023?",
            "answer": "DevFestStudent Edition is totally FREE, but seeing that the venue can only contain a certain number of persons, only those registered will be allowed into the hall."
        },
        {
            "question": "How much is the ticket For DevFest UNILAG Edition 2023?",
            "answer": "DevFestStudent Edition is totally FREE, but seeing that the venue can only contain a certain number of persons, only those registered will be allowed into the hall."
        },
        {
            "question": "How much is the ticket For DevFest UNILAG Edition 2023?",
            "answer": "DevFestStudent Edition is totally FREE, but seeing that the venue can only contain a certain number of persons, only those registered will be allowed into the hall."
        },
    ]

    const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const FaqItem = ({ question, answer, isOpen, onClick }) => {
        return (
            <div onClick={onClick} className="qa">
                <div className="q-row">
                    <p className="q">{question}</p>
                    {isOpen ? <img src={close} alt="" /> : <img src={expand} alt="" />}
                </div>
                { isOpen && <p className="a">{answer}</p> }
            </div>
        )
    }

    return (
        <div id="faqs" className="faq">
            <h1>Lets answer some of your burning questions</h1>
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
        </div>
    )
}

export default Faq;