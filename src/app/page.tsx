import Script from "next/script";
import Head from "next/head";
export default function Home() {
  return (
    <main className="w-full px-24">
      <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6712931388415461"
          crossOrigin="anonymous"
        ></Script>
      </Head>
      <h1 className="text-blue-500 dark:text-orange-400">felipene</h1>
    </main>
  );
}
