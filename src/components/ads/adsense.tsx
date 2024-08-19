import Script from "next/script";

export function AdSense() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.pID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
