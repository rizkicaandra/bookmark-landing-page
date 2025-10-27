import Image from 'next/image';

const Download = () => {
  const downloadItems = [
    {
      name: 'Chrome',
      logo: '/logo-chrome.svg',
      version: '62',
      align: 'xl:self-start',
    },
    {
      name: 'Firefox',
      logo: '/logo-firefox.svg',
      version: '55',
      align: 'xl:self-center',
    },
    {
      name: 'Opera',
      logo: '/logo-opera.svg',
      version: '46',
      align: 'xl:self-end',
    },
  ];

  return (
    <section className='mt-33 flex flex-col items-center gap-10 text-blue-950 md:gap-16 xl:gap-12'>
      {/* download header */}
      <div className='max-w-77.75 text-center md:max-w-135.25'>
        <h2 className='text-preset-1-mobile md:text-preset-2-medium mb-4'>
          Download the extension
        </h2>
        <p className='text-preset-2-mobile-regular md:text-preset-4-regular opacity-50'>
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.
        </p>
      </div>

      {/* download items */}
      <div className='content-animate flex flex-col gap-10 md:flex-row md:gap-2 xl:min-h-112.75 xl:items-end xl:gap-6'>
        {downloadItems.map((item) => (
          <div
            key={item.name}
            className={`rounded-15px shadow-card-blue ${item.align} flex flex-col items-center justify-center gap-6 bg-[#fff] pt-7 pb-8 md:gap-4 md:pt-8 md:pb-6 xl:gap-6 xl:pt-12.25 xl:pb-8`}
          >
            <div className='flex flex-col items-center gap-8 md:gap-4 xl:gap-8'>
              <div className='h-25 w-25.5 md:h-18 md:w-18 xl:h-25 xl:w-25.5'>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={102}
                  height={100}
                />
              </div>
              <div className='text-center'>
                <p className='text-preset-2-mobile-medium md:text-preset-3-medium mb-2 text-2xl leading-12 md:mb-0 md:leading-6 xl:mb-2'>
                  Add to {item.name}
                </p>
                <p className='text-preset-2-mobile-regular md:text-preset-6-regular opacity-50'>
                  Minimum version {item.version}
                </p>
              </div>
            </div>

            <div className='h-0.5 w-full border-t-2 border-dotted border-blue-50'></div>

            <button
              type='button'
              aria-label='add-and-install'
              className='text-preset-2-mobile-medium bg shadow-button-blue rounded-5px md:text-preset-6-medium mx-6 cursor-pointer border-2 bg-blue-600 px-8 py-2 leading-8 text-white hover:border-blue-600 hover:bg-white hover:text-blue-600 md:mx-2.5 md:px-2.25 md:py-0.25 xl:mx-6 xl:px-8.75 xl:py-1.5'
            >
              Add & Install Extension
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Download;
