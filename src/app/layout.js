
//src/app/layout.js
import { Open_Sans, Cormorant } from "next/font/google";



import '../styles/styles.scss';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const open_Sans = Open_Sans({ subsets: ["latin"] });
const cormorant = Cormorant({ subsets: ["latin"]});



export const metadata = {
  title: "TealuxE",
  description: "TealuxE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=IM+FELL+Great+Primer+SC&display=swap" rel="stylesheet" />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={open_Sans.className}>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

//  https://realfavicongenerator.net/
// https://favicon.io/
