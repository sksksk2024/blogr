'use client';

import Head from 'next/head';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogr Landing Page</title>
        <meta name="Blogr Landing Page" content="Home Page" />
        <meta property="og:title" content="Home Page" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
