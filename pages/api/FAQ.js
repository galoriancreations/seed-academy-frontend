// pages/api/FAQ.js
export default function handler(req, res) {
  const faqs = [
    {
      question: "Who is this program for?",
      answer: "Our program is designed for a wide audience, including young people seeking career guidance, budding and experienced entrepreneurs, high school and university students, and anyone looking to discover their purpose and enhance their leadership skills."
    },
    {
      question: "How does the personalized learning path work?",
      answer: "Using AI technology, each participant receives a customized learning experience. Based on initial assessments and ongoing performance, AI tailors the curriculum to individual needs, strengths, and areas for improvement, ensuring an effective and personalized learning journey."
    },
    {
      question: "Can I choose an avatar for the program?",
      answer: "Yes, you can choose from a variety of avatars, including digital twins, characters from the TWIN SingularityNET project, celebrities, and influencers. Each avatar option comes with a different cost and allows you to personalize your learning experience."
    },
    {
      question: "What kind of support will I receive during the program?",
      answer: "Participants benefit from AI-based mentorship, interactive discussions and feedback, as well as support from a global peer community. Our collaborative learning networks also offer opportunities for hands-on project-based learning."
    },
    {
      question: "Are there any prerequisites for joining the program?",
      answer: "There are no mandatory prerequisites, but an interest in personal development and leadership, along with an openness to learning with AI technology, will significantly contribute to your success in the program."
    },
    {
      question: "What is the duration of the program?",
      answer: "The program is tailored to an individual pace, but most participants complete the core program within 6 months. However, continuous learning and community support allow you to keep going as long as you find value in the resources and connections created."
    },
    {
      question: "What is the cost of the program?",
      answer: "The program includes a free one-month trial. After that, the cost is $18 per month. Selecting unique AI avatars incurs additional fees, with details provided when selecting the avatar."
    },
    {
      question: "Are there any scholarships or financial aid available?",
      answer: "Yes, we offer scholarships for young leaders from developing countries and financial aid options to ensure the program is accessible to a wide audience. Please contact us for more information on eligibility and application process."
    },
    {
      question: "What is the refund policy?",
      answer: "Since the first month is free, we encourage participants to start and evaluate the value of the program during this time. After the first month, you can cancel your subscription at any time, but no refunds will be provided for subsequent months."
    },
    {
      question: "How can I apply for the Ting Global Academy AI-enhanced Leadership Training Program?",
      answer: "You can apply directly through our website. The registration process includes a short questionnaire to understand your goals and how we can support your leadership journey. After submitting, you'll receive instructions on how to activate your free month and start the learning path."
    },
    {
      question: "Can I earn academic credits or receive certificates through the program?",
      answer: "Yes, we offer collaborations with academic institutions that allow participants to earn academic credits. Upon completing the program, you will also receive a certificate reflecting your achievements and commitment to leadership excellence."
    }
  ];
  
    // מחזיר את השאלות כ-JSON
    res.status(200).json(faqs);
  }
  