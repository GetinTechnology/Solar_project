import React, { useState } from 'react';

const FAQ = ({faqs}) => {


  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggleFAQ}>
      <div className="faq-question">
        <h3>{question}</h3>
        <span>{isOpen ? '+' : '+'}</span>
      </div>
      <div className="faq-answer">{answer}</div>
    </div>
  );
};

export default FAQ;
