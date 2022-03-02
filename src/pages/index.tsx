import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';

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
    </>
  );
};

export default Home;
