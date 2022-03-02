import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Places from '../components/Places';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Travelo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
