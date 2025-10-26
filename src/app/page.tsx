import Download from '@/components/Download';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main className='mb-40'>
        <Hero />
        <Features />
        <Download />
        <FAQ />
      </main>
    </>
  );
}
