'use client';
import Image from 'next/image';
import { useState } from 'react';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const featureItems = [
    'Simple Bookmarking',
    'Speedy Searching',
    'Easy Sharing',
  ];

  const featureImages = [
    '/illustration-features-tab-1.svg',
    '/illustration-features-tab-2.svg',
    '/illustration-features-tab-3.svg',
  ];

  const featuresDescriptions = [
    {
      title: 'Bookmark in one click',
      description:
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    },
    {
      title: 'Intelligent search',
      description:
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    },
    {
      title: 'Share your bookmarks',
      description:
        'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    },
  ];

  return (
    <section
      id='features'
      className='mt-32 flex flex-col items-center justify-center text-blue-950 xl:mt-20'
    >
      {/* header and description */}
      <div className='mb-8 max-w-77.75 text-center md:mb-18 md:max-w-135'>
        <h2 className='text-preset-1-mobile md:text-preset-2-medium mb-4'>
          Features
        </h2>
        <p className='text-preset-2-mobile-regular md:text-preset-4-regular opacity-50'>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <ul className='text-preset-2-mobile-regular md:text-preset-5-regular flex min-w-77.75 flex-col border-t border-blue-50 text-center md:min-w-135 md:flex-row md:border-none'>
        {featureItems.map((item, index) => (
          <li
            key={`${index}-${activeIndex === index ? 'active' : 'inactive'}`}
            className={`relative cursor-pointer border-b border-blue-50 py-4 hover:text-red-400 md:w-50.75 md:pt-0 md:pb-7 xl:w-61 ${index === activeIndex ? 'tab-active before-line-enter' : ''}`}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* features content and illustration */}
      <div className='flex flex-col items-center justify-center xl:flex-row xl:gap-30'>
        {/* illustration */}
        <div
          key={`illustration-${activeIndex}`}
          className='illustration-animate relative mb-8 flex min-h-70.5 items-center justify-center md:min-h-119.5 xl:mb-0 xl:min-h-126.75 xl:min-w-134'
        >
          {/* illustration image */}
          <Image
            src={featureImages[activeIndex]}
            alt={'illustration-features-tab-1'}
            width={310}
            height={205}
            priority
            className={`z-10 h-full ${activeIndex === 0 ? 'w-77.75 md:w-134' : 'w-65.5 md:w-117'}`}
          />

          {/* background illustration */}
          <div className='absolute bottom-4 -left-17.75 min-h-50.75 w-85 rounded-tr-full rounded-br-full bg-blue-600 md:-left-50 md:min-h-88 md:w-155 2xl:rounded-tl-full 2xl:rounded-bl-full'></div>
        </div>

        <div
          key={`content-${activeIndex}`}
          className='content-animate flex min-h-65.5 max-w-77.75 flex-col items-center justify-center gap-4 text-center md:max-w-112.5 md:gap-6 xl:items-start xl:text-start'
        >
          <h2 className='text-preset-1-mobile md:text-preset-2-medium'>
            {featuresDescriptions[activeIndex].title}
          </h2>
          <p className='text-preset-2-mobile-regular md:text-preset-4-regular opacity-50'>
            {featuresDescriptions[activeIndex].description}
          </p>
          <button
            type='button'
            aria-label='more-info'
            className='text-preset-2-mobile-medium rounded-5px md:text-preset-6-medium shadow-button-blue h-12 w-28.5 cursor-pointer bg-blue-600 text-center text-white hover:border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600'
          >
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
