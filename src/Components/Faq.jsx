import { useState } from "react";
import expand from "../assets/expand.svg";
import close from "../assets/close.svg";
import doodle1 from "../assets/doodle-1.png";
import doodle2 from "../assets/doodle-2.png";
import doodle3 from "../assets/doodle-3.png";
import doodle4 from "../assets/doodle-4.png";
import doodle5 from "../assets/doodle-5.png";

const Faq = () => {
  const data = [
    {
      question: "What is DevFest Lagos Student Edition about?🧐",
      answer:
        "This is the first edition of the DevFest Lagos Student Edition, an initiative of GDSC communities across Unilag, LASU, Caleb University, Babcock University, Yaba Tech, and Pan Atlantic University. It is a one-day tech conference aimed at students across Lagos state to network, connect, and learn about Google technologies from experts.",
    },
    {
      question: "Why should I attend DevFest Lagos Student Edition 2023?🗿",
      answer:
        "If you’re enthusiastic about seeking and finding new opportunities, increasing your knowledge on the latest Google developer tools, leverage the DevFest Lagos Student Edition event as it offers opportunities for developers to connect, learn and build using Google's tools then you should attend.",
    },
    {
      question:
        "How much is the ticket For DevFest Lagos Student Edition 2023?💸",
      answer:
        "DevFest Lagos Student Edition is totally FREE,  but seeing that the venue can only contain a certain number of persons, only those registered will be allowed into the hall. You can get your free ticket ",
      link: "https://dscunilag.dev/df_lagos",
    },
    {
      question: "What kind of topics will be covered at the Event?🎥",
      answer:
        "Topics covered will include, Design, Technical Writing, Cloud Development, Web development,  Product Design, Product Management, , AI/ Machine learning and a lot more. It will cover opportunities and topics on how both techies and non-techies could get into the Tech space.",
    },
    {
      question:
        "Can I be a volunteer to make DevFest Lagos Student Edition a success?💯",
      answer:
        "Of course you can. We welcome volunteers who are passionate about contributing to the success of DevFest Lagos Student Edition 2023. To join our volunteer team, apply ",
      link: "https://dscunilag.dev/dflagos-se-cfv",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FaqItem = ({ question, answer, isOpen, onClick, link }) => {
    return (
      <div onClick={onClick} className="qa">
        <div className="q-row">
          <p className={`${isOpen ? "text-yellow-500 mb-[10px]" : ""} q`}>
            {question}
          </p>
          {isOpen ? <img src={close} alt="" /> : <img src={expand} alt="" />}
        </div>
        {isOpen && (
          <p className="a">
            {answer}{" "}
            {link && (
              <a className="text-blue-500" href={link}>
                here.
              </a>
            )}
          </p>
        )}
      </div>
    );
  };

  return (
    <div id="faqs" className="faq">
      <div className="z-10 relative">
        <h1 className="font font-bold text-[30px] z-50">
          Lets answer some of your burning questions
        </h1>
        <p className="sub-heading">
          Check out our most asked questions here, mfjpm 😑🤚🏾
        </p>
        <div className="column">
          {data.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              link={item.link}
              isOpen={index === openIndex}
              onClick={() => handleItemClick(index)}
            />
          ))}

          <div onClick={() => handleItemClick(data.length)} className="qa">
            <div className="q-row">
              <p
                className={`${
                  data.length == openIndex ? "text-yellow-500 mb-[10px]" : ""
                } q`}
              >
                How can I RSVP for sessions?🤷🏽‍♂️
              </p>
              {data.length == openIndex ? (
                <img src={close} alt="" />
              ) : (
                <img src={expand} alt="" />
              )}
            </div>
            {data.length == openIndex && (
              <p className="a">
                Here's how you can RSVP for sessions. Get your free ticket here,
                then visit our{" "}
                <a
                  className="text-blue-500"
                  href="https://devfest.dscunilag.dev/workshops"
                >
                  website
                </a>{" "}
                to RSVP for breakout sessions you’ll like to attend. You'll get
                a confirmation notification with a list of the
                sessions you RSVP’d for
              </p>
            )}
          </div>
        </div>
      </div>
      <img className="doodle doodle-1" src={doodle1} alt="" />
      <img className="doodle doodle-2" src={doodle2} alt="" />
      <img className="doodle doodle-3" src={doodle3} alt="" />
      <img className="doodle doodle-4" src={doodle4} alt="" />
      <img className="doodle doodle-5" src={doodle5} alt="" />
    </div>
  );
};

export default Faq;
