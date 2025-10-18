'use client';
import Image from 'next/image';
import LogoBookMark from '../../public/icons/logo-bookmark';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <header className='relative z-20 flex w-full items-center justify-center'>
      {/* mobile navigation */}
      {isOpen && (
        <div className='animate-fade-in fixed top-0 flex h-screen w-full flex-col items-center justify-between bg-blue-950 opacity-95 backdrop-blur-xl'>
          <div className='mt-10 w-full max-w-77.25 md:max-w-152'>
            {/* logo and close */}
            <div className='mb-10 flex items-center justify-between'>
              <LogoBookMark
                textColor='#fff'
                circleColor='#fff'
                circleIconColor='#242a45'
                className='h-full w-37'
                aria-label='logo'
              />

              <button
                type='button'
                aria-label='close'
                onClick={() => setIsOpen(!isOpen)}
              >
                <Image
                  src='/icon-close.svg'
                  alt='close'
                  width={18}
                  height={15}
                  className='h-3.5 w-3.5'
                />
              </button>
            </div>

            {/* navigation */}
            <nav className='mb-6 border-t border-white/15 md:mb-8'>
              {navbarItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className='text-preset-3-medium block border-b border-white/15 py-6 text-center font-normal tracking-widest text-white uppercase md:py-8'
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* login button */}
            <button
              type='button'
              aria-label='login'
              className='text-preset-3-medium min-h-12 w-full rounded-sm border-2 border-white text-center text-white uppercase'
            >
              login
            </button>
          </div>

          <div className='mb-12 flex items-center justify-center gap-10'>
            <Image
              src={'/icon-facebook.svg'}
              alt={'facebook'}
              width={24}
              height={24}
              className='h-full w-6'
            />
            <Image
              src={'/icon-twitter.svg'}
              alt={'twitter'}
              width={24}
              height={24}
              className='h-full w-6'
            />
          </div>
        </div>
      )}

      <div className='flex min-h-25 min-w-77.75 items-center justify-between md:mb-10 md:min-w-152 xl:mt-12 xl:mb-28.5 xl:min-h-10 xl:min-w-276'>
        <Image
          src='/logo-bookmark.svg'
          alt='logo'
          width={144}
          height={32}
          className='h-full w-37'
        />

        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='hamburger'
          className='block xl:hidden'
        >
          <Image
            src='/icon-hamburger.svg'
            alt='hamburger'
            width={18}
            height={15}
            className='h-full w-4.5'
          />
        </button>

        {/* navigation */}
        <nav className='text-preset-6-regular hidden items-center gap-12 text-blue-950 xl:flex'>
          {navbarItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className='cursor-pointer uppercase hover:text-red-400'
            >
              {item.title}
            </a>
          ))}

          <button
            type='button'
            aria-label='login'
            className='shadow-button-blue rounded-5px h-10 w-27.75 cursor-pointer border-2 bg-red-400 text-white hover:bg-white hover:text-red-400'
          >
            LOGIN
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
