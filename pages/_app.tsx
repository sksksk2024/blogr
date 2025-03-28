import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blogr Landing Page</title>
        <meta
          name="description"
          content="Layout from where you can get inspiration"
        />
        <meta property="og:title" content="Blogr Landing Page" />
        <meta property="og:description" content="Cool" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
