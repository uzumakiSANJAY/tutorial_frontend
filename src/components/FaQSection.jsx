import React from 'react';
import '../styles/FaQSection.css';

const faqsLeft = [
  {
    question: 'I am interested to attend online demo class first. Do I have to pay anything?',
    answer: 'No amount is required to pay for the demo class. It is completely free of cost'
  },
  {
    question: 'What is the duration of a demo class?',
    answer: 'The duration of a demo class is 30 - 40 min.'
  },
  {
    question: 'How to schedule my class timing?',
    answer: 'We will share with you some weekly time slots options. You can choose any of the slots as per your preference.'
  }
];

const faqsRight = [
  {
    question: 'How much is the tuition fee?',
    answer: 'Fees are most affordable. The fee also varies according to the number of classes you are opting per week. Moreover tuition fee is payable monthly, half-yearly and yearly. Kindly get in touch with us @8100644540 for more information'
  },
  {
    question: 'Do I have to pay fee in advance?',
    answer: 'Tuition fee is payable in advance'
  },
  {
    question: 'Do I have to pay whole month tuition fee even if I am joining in the mid of the month or last week of the month?',
    answer: 'The classes are counted with class number. Your class counting begins from the day you start your class. So it does not matter when you are starting your tuition. You can join any time and for this there is no loss of class or no monetary loss.'
  }
];

const FaqSection = () => {
  return (
    <section className="faq-section">
      <h2 className="faq-title">faqs</h2>
      <p className="faq-subtitle">Most common questions asked by parents</p>
      <div className="faq-columns">
        <div className="faq-column left">
          {faqsLeft.map((faq, idx) => (
            <div className="faq-item" key={idx}>
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
        <div className="faq-column right">
          {faqsRight.map((faq, idx) => (
            <div className="faq-item" key={idx}>
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
