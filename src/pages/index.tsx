import { useEffect } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Places from '../components/Places';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home: NextPage = () => {
  useEffect(() => {
    async function animate() {
      const scrollreveal = (await import('scrollreveal')).default;
      const sr = scrollreveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true,
      });
      sr.reveal(
        `nav,
      #home,
      #about,
      #recommend,
      #testimonials,
      footer`,
        {
          opacity: 0,
          interval: 300,
        }
      );
    }
    animate();
  }, []);

  return (
    <>
      <Head>
        <title>Travelo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Places />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
