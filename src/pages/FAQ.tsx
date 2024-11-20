import { FC } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Where is the event being held?",
    answer: "Denver, CO at the Limelight Hotel"
  },
  {
    question: "What are the dates and times of the event?",
    answer: "Arrive on Tuesday January 14, 2025 and depart on Friday January 17, 2025"
  },
  {
    question: "Who is required to attend?",
    answer: "All GTM + Invited attendees. This is an invite only event."
  },
  {
    question: "How do I register for the event?",
    answer: "Go to the registration page"
  },
  {
    question: "Will travel and accommodation be covered?",
    answer: "Yes, if traveling within the approved dates. Team members in Europe are able to arrive +1 day early and depart +1 day later as needed. Any exceptions must be approved by SKO team in advance. Travel & lodging outside of the approved dates will be the responsibility of the attendee and will not be reimbursed."
  },
  {
    question: "What is the agenda for the event?",
    answer: "Visit the agenda page"
  },
  {
    question: "Will meals be provided during the event?",
    answer: "Yes, Dinner Tuesday and all meals Wednesday and Thursday will be covered. No other expenses will be approved."
  },
  {
    question: "Are there any planned social or networking activities?",
    answer: "Yes, each evening we will have a group dinner (Tuesday, Wednesday and Thursday)"
  },
  {
    question: "What should I bring to the event?",
    answer: "Your computer, chargers and warm clothing"
  },
  {
    question: "What is the dress code for the event?",
    answer: "Business casual, warm jackets recommended and shoes with grip (snow & ice outside)"
  },
  {
    question: "What is the deadline to register for the event?",
    answer: "All travel and registration must be complete by November 20, 2024"
  },
  {
    question: "Will there be breakout sessions or workshops?",
    answer: "Yes, day 2 will be focused on interactive breakouts and workshops"
  },
  {
    question: "Can I opt out of certain sessions or activities?",
    answer: "No, this is a work event and we're investing time and energy to bring the field together."
  },
  {
    question: "Will transportation be provided between the airport and hotel?",
    answer: "No, but please share Ubers/Lyfts from DIA to the airport and back. Denver also has a train that runs directly from the airport to Union Station in downtown Denver, CO"
  },
  {
    question: "Are there any pre-event materials or assignments I need to complete?",
    answer: "Yes, to be announced soon!"
  },
  {
    question: "How can I share feedback or suggestions for the event?",
    answer: "In Slack, #sko-2025 or email sko2025@netlify.com"
  },
  {
    question: "Will Wi-Fi be available at the venue?",
    answer: "Yes"
  },
  {
    question: "Are there any prizes, awards, or recognitions planned during the event?",
    answer: "TBD"
  },
  {
    question: "Can I bring a plus-one to any part of the event?",
    answer: "No, this is an employee only event."
  },
  {
    question: "What happens if there's inclement weather?",
    answer: "Denver is likely to have snow but airports and transportation are well prepared for inclement weather. Our event is within the hotel, however dinner may be offsite. Bring warm clothing and warm shoes with good grip/soles."
  },
  {
    question: "What time should I arrive each day?",
    answer: "Each day will start at 8AM"
  },
  {
    question: "Will there be opportunities to meet with senior leadership?",
    answer: "Yes, lots! They'll all be there!"
  },
  {
    question: "Can I update my registration details after submitting them?",
    answer: "Yes, please reach out to sko2025@netlify.com"
  },
  {
    question: "Will there be opportunities for Q&A during the sessions?",
    answer: "Yes"
  },
  {
    question: "Is there a mobile app or tool to help navigate the event?",
    answer: "No, this website will house all information and please remember to check Slack #sko-2025"
  },
  {
    question: "Who can I contact for technical support during the event?",
    answer: "Normal Netlify IT"
  }
];

const FAQItem: FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="mb-8 bg-white rounded-lg shadow-md p-6 lodge-bg-pattern border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-200">
    <h3 className="text-xl font-semibold mb-3 text-blue-900">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

const FAQ: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about the Netlify SKO 2025
        </p>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;