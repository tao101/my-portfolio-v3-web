import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import { getWebsiteSettings } from '../lib/sanityHelpers';
import styles from '../styles/Home.module.css';
import { NextSeo } from 'next-seo';
import Footer from '../components/footer';

export default function Home({ settings }) {
  return (
    <>
      <NextSeo
        title="Taoufiq Lotfi - Full-stack Javascript Developer Portfolio"
        description="I'm a Full Stack JavaScript developer, and I like making applications of different varieties. I help founders add value to society by crafting software using JavaScript tools"
        canonical="https://taoufiqlotfi.tech/"
        openGraph={{
          title: 'Taoufiq Lotfi - Full-stack Javascript Developer Portfolio',
          description:
            "I'm a Full Stack JavaScript developer, and I like making applications of different varieties. I help founders add value to society by crafting software using JavaScript tools",
          type: 'website',
          locale: 'en',
          url: 'https://taoufiqlotfi.tech/',
          images: [
            {
              url: 'https://cdn.sanity.io/images/ib51129t/production/8a8d04fb88dc24e58751a213235a14ce88a84134-1912x884.png',
              width: 1912,
              height: 884,
              alt: 'Lotfi Taoufiq - Full Stack JavaScript Developer',
            },
          ],
        }}
      />
      <div className="flex flex-col min-h-screen w-screen max-w-screen-2xl mx-auto ">
        <Header settings={settings} />
        <main className=" bg-red-900 flex-1">
          <div className="bglines fixed left-0 top-0 z-20 flex h-screen w-full justify-around">
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
          </div>
          <section className="h-screen flex flex-col justify-center items-center	 bg-blue-500 ">
            <p>dsad</p>
            <p>2</p>
          </section>
        </main>
        <Footer settings={settings} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const settings = await getWebsiteSettings();

  return {
    props: {
      settings,
    }, // will be passed to the page component as props
  };
}
