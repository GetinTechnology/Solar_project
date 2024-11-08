import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    { question: "What is solar energy?", answer: "Solar energy is the energy from the sun that is converted into thermal or electrical energy." },
    { question: "How does solar power work?", answer: "Solar power works by converting sunlight into electricity using photovoltaic (PV) cells." },
    { question: "Is solar energy environmentally friendly?", answer: "Yes, solar energy is a clean and renewable resource that reduces carbon emissions." },
    { question: "How long do solar panels last?", answer: "Most solar panels have a lifespan of 25-30 years, depending on the brand and maintenance." },
    { question: "What are the benefits of solar energy?", answer: "Solar energy reduces energy bills, lowers carbon footprint, and provides energy independence." },
  ];

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
    <div className="faq-item" onClick={toggleFAQ}>
      <div className="faq-question">
        <h3>{question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQ;
