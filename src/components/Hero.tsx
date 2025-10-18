import Image from 'next/image';

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-12 overflow-x-hidden md:gap-18 xl:ml-28.5 xl:flex-row-reverse xl:gap-0'>
      <div className='relative flex min-h-75 items-center justify-center md:min-h-121.5 md:items-start'>
        {/* illustration hero image */}
        <div className='z-10 mt-8 md:mt-0'>
          <Image
            src={'/illustration-hero.svg'}
            alt={'illustration-hero'}
            width={310}
            height={205}
            className={'h-full w-90 md:w-170'}
          />
        </div>

        {/* background illustration */}
        <div className='absolute right-0 bottom-0 left-17.75 min-h-50.75 w-75 rounded-tl-full rounded-bl-full bg-blue-600 md:left-44 md:min-h-88 md:w-182.75 md:rounded-tr-full md:rounded-br-full xl:w-182.75'></div>
      </div>

      <div className='flex max-w-78.25 flex-col items-center justify-center gap-6 text-blue-950 md:max-w-135 xl:items-start'>
        <h1 className='text-preset-1-mobile md:text-preset-1-medium text-center xl:text-start'>
          A Simple Bookmark Manager
        </h1>

        <p className='text-preset-2-mobile-regular md:text-preset-4-regular -mx-1 text-center opacity-50 xl:text-start'>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className='text-preset-2-mobile-medium md:text-preset-6-medium flex gap-4'>
          <button
            type='button'
            aria-label='Get it on Chrome'
            className='rounded-5px shadow-button-blue h-12 w-37.75 cursor-pointer border-2 bg-blue-600 text-white hover:bg-white hover:text-blue-600 md:w-41.5'
          >
            Get it on Chrome
          </button>

          <button
            type='button'
            aria-label='Get it on Firefox'
            className='rounded-5px bg-grey-50 shadow-button-blue md:41.5 hover:text-grey-600 hover:border-grey-600 h-12 w-36.5 cursor-pointer text-blue-950 hover:border-2 hover:bg-white'
          >
            Get it on Firefox
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
