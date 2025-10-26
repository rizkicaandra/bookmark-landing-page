'use client';
import { useState } from 'react';
import LogoArrow from '../../public/icons/logo-arrow';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  const faqItems = [
    {
      question: 'What is Bookmark?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
    },
    {
      question: 'How can I request a new browser?',
      answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
    },
    {
      question: 'Is there a mobile app?',
      answer: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum.`,
    },
    {
      question: 'What about other Chromium browsers?',
      answer: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.`,
    },
  ];
  return (
    <section
      id='faq'
      className='mt-32 flex flex-col items-center justify-center gap-14 text-blue-950 xl:mt-20'
    >
      {/* faq header */}
      <div className='max-w-77.75 text-center md:max-w-135'>
        <h2 className='text-preset-1-mobile md:text-preset-2-medium mb-4'>
          Frequently Asked Questions
        </h2>
        <p className='text-preset-2-mobile-regular md:text-preset-4-regular opacity-50'>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      {/* faq items */}
      <div className='flex flex-col items-center justify-center gap-4'>
        {faqItems.map((item, index) => (
          <details
            key={index}
            className='h-full w-77.75 cursor-pointer border-b border-blue-950/14 pb-4 md:w-135'
            onToggle={() => toggleItem(index)}
          >
            <summary className='text-preset-2-mobile-regular md:text-preset-4-regular flex items-center justify-between hover:text-red-400'>
              <span>{item.question}</span>
              <LogoArrow
                key={index}
                className={`rotate-icon h-4 w-4`}
                stroke={openItems.includes(index) ? '#FA5959' : '#5267DF'}
              />
            </summary>
            <p
              className={`text-preset-2-mobile-light md:text-preset-5-light mt-4 opacity-75`}
            >
              {item.answer}
            </p>
          </details>
        ))}
      </div>

      {/* more info */}
      <button
        type='button'
        aria-label='more-info'
        className='text-preset-2-mobile-medium rounded-5px md:text-preset-6-medium shadow-button-blue h-12 w-28.5 cursor-pointer bg-blue-600 text-center text-white hover:border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600'
      >
        More Info
      </button>
    </section>
  );
};

export default FAQ;
