'use client';
import { useState } from 'react';
import Image from 'next/image';
import LogoBookMark from '../../public/icons/logo-bookmark';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
      // Handle valid email submission
      console.log('Valid email:', email);
      setEmail('');
      // message browser
      alert('Thanks for subscribing!');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError(false); // Clear error when user starts typing
    }
  };
  const navbarItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'Contact',
      link: '#contact',
    },
  ];

  return (
    <footer id='contact'>
      {/* newsletter */}
      <div className='flex min-h-90 w-full flex-col items-center justify-center gap-8 bg-blue-600'>
        <div className='max-w-77.75 text-center text-white md:max-w-102'>
          <span className='text-preset-3-mobile-medium md:text-preset-6-semibold'>
            35,000+ already joined
          </span>
          <h2 className='text-preset-1-mobile md:text-preset-2-medium text-white md:mt-6'>
            Stay up-to-date with what we’re doing
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className='max-w-77.75 md:flex md:min-w-110.5 md:items-start md:justify-center md:gap-4'
        >
          <div
            className={`relative ${error ? 'rounded-5px bg-red-400 px-1 py-1' : ''}`}
          >
            <input
              type='email'
              value={email}
              onChange={handleInputChange}
              placeholder='Enter your email address'
              className={`rounded-5px placeholder:text-preset-2-mobile-regular h-12 border-none bg-white px-4 placeholder:text-black/25 focus:outline-none ${
                error
                  ? 'w-75.75 focus:outline-2 focus:outline-red-400'
                  : 'w-77.75 md:w-75'
              }`}
            />

            {error && (
              <Image
                src={'/icon-error.svg'}
                alt={'icon-error'}
                width={20}
                height={20}
                className='absolute top-4.5 right-5'
              />
            )}

            {error && (
              <p className='mt-1 ml-4 w-77.75 text-sm text-white md:ml-0 md:w-75 md:pl-4'>
                Whoops, make sure it&apos;s an email
              </p>
            )}
          </div>

          <button
            type='submit'
            aria-label='contact us'
            className='text-preset-2-mobile-medium rounded-5px shadow-button-red mt-4 min-h-12 w-full cursor-pointer border-2 border-red-400 bg-red-400 text-white hover:bg-white hover:text-red-400 md:mt-0 md:max-w-31.5'
          >
            Contact Us
          </button>
        </form>
      </div>

      {/* footer */}
      <div className='grid min-h-86 w-full grid-cols-1 place-items-center justify-items-center bg-blue-950 md:min-h-22 md:grid-cols-3 xl:grid-cols-4 xl:px-41.5'>
        <LogoBookMark textColor='#fff' />

        {/* navigation */}
        <nav className='text-preset-2-mobile-regular md:text-preset-6-regular flex flex-col gap-6 text-white md:flex-row'>
          {navbarItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className='cursor-pointer text-center uppercase hover:text-red-400'
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className='flex items-center justify-center gap-10 xl:col-span-2 xl:justify-self-end'>
          <Image
            src={'/icon-facebook.svg'}
            alt={'facebook'}
            width={24}
            height={24}
            className='h-full w-6 hover:opacity-50'
          />
          <Image
            src={'/icon-twitter.svg'}
            alt={'twitter'}
            width={24}
            height={24}
            className='h-full w-6 hover:opacity-50'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
