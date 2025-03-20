import Image from 'next/image';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  return (
    <>
      <h1 className="absolute right-0 w-[100vw] h-[100vh] text-2xl text-center mx-auto button-sm cursor-pointer hover:text-3xl hover:underline">
        HOME
      </h1>
    </>
  );
}
