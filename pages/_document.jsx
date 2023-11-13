import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://mybajet.ir",
    logo: "https://mybajet.ir/logo.png",
  };

  return (
    <Html dir="rtl" lang="fa">
      <Head>
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="apple-touch-icon" href="/icon.png"></link>

        <meta
          name="description"
          content="دانلود برنامه باجت سامانه تسهیلات خرد، خرید اعتباری BNPL و تسهیلات غیرحضوری ازدواج (وام ازدواج) بانک تجارتmybajet.ir"
        />
        <meta
          name="keyword"
          content="باجت، اپلیکیشن باجت، باجت تجارت، دانلود باجت، دانلود bajet، سامانه باجت، تسهیلات غیرحضوری، وام ازدواج تجارت، ثبت نام وام ازدواج، سامانه وام
      ازدواج"
        />

        <link rel="apple-touch-icon" href="logo.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="logo152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="logo180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="logo167.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.RAYCHAT_TOKEN = "ee7e4c61-194c-42e4-8309-874ec9bcde19";
          (function () {
            d = document;
            s = d.createElement("script");
            s.src = "https://widget-react.raychat.io/install/widget.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
          `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-TP78R5D');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function (t, e, n) { t.yektanetAnalyticsObject = n, t[n] = t[n] || function () { t[n].q.push(arguments) }, t[n].q = t[n].q || []; var a = new Date, r = a.getFullYear().toString() + "0" + a.getMonth() + "0" + a.getDate() + "0" + a.getHours(), c = e.getElementsByTagName("script")[0], s = e.createElement("script"); s.id = "ua-script-nysfas6L"; s.dataset.analyticsobject = n; s.async = 1; s.type = "text/javascript"; s.src = "https://cdn.yektanet.com/rg_woebegone/scripts_v3/nysfas6L/rg.complete.js?v=" + r, c.parentNode.insertBefore(s, c) }(window, document, "yektanet");`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
