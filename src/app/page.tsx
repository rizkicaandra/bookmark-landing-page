import Download from '@/components/Download';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main className='mb-32 md:mb-39.5 xl:mb-45.5'>
        <Hero />
        <Features />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
