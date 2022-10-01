import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import { getWebsiteSettings } from '../lib/sanityHelpers';
import styles from '../styles/Home.module.css';
import { NextSeo } from 'next-seo';
import Footer from '../components/footer';
import SocialIcons from '../components/socialIcons';
import { urlFor } from '../lib/sanity';
import { useContext, useState } from 'react';
import AppContext from '../lib/appContext';
import MobileMenu from '../components/mobileMenu.js';

export default function Home({ settings }) {
  const { mobileMenuVisibility, setMobileMenuVisibility } =
    useContext(AppContext);

  let seoTitle =
    settings?.seo?.title ??
    'Taoufiq Lotfi - Full-stack Javascript Developer Portfolio';
  let seoDescription =
    settings?.seo?.description ??
    "I'm a Full Stack JavaScript developer, and I like making applications of different varieties. I help founders add value to society by crafting software using JavaScript tools";

  let seoImage =
    settings?.seo?.image && urlFor(settings?.seo?.image)
      ? urlFor(settings?.seo?.image)
      : 'https://cdn.sanity.io/images/ib51129t/production/8a8d04fb88dc24e58751a213235a14ce88a84134-1912x884.png';

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical="https://taoufiqlotfi.tech/"
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          type: 'website',
          locale: 'en',
          url: 'https://taoufiqlotfi.tech/',
          images: [
            {
              url: seoImage,
              width: 1912,
              height: 884,
              alt: seoTitle,
            },
          ],
        }}
      />

      <div className="flex flex-col min-h-screen w-screen max-w-screen-2xl mx-auto ">
        <Header settings={settings} />
        <main className=" bg-white-100 flex-1">
          <div className="bglines fixed left-0 top-0 flex h-screen z-10	 w-full justify-around">
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
          </div>
          <section className="h-screen  flex flex-col justify-center items-center	  ">
            <p className="text-secondary-400 font-bold text-3xl">LOTFI</p>
            <p>2</p>

            <div className="z-20">
              <SocialIcons settings={settings} />
            </div>
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
