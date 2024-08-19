export function AdSense() {
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_ADSENSE}`}
      crossOrigin="anonymous"
    />
  );
}
