import React,{useState} from 'react'
import { AiFillCaretRight } from "react-icons/ai"
import {HiMinus} from "react-icons/hi"
const Accordion = ({ title, content }) => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
      <>
          <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h6>{title}</h6>
        <span class="sign">{isOpen ? <HiMinus/> : <AiFillCaretRight/>}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
          </div>
          <hr></hr>
      </>
  )
}

export default Accordion