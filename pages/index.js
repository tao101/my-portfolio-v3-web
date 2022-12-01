import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import { getIndexPage } from '../lib/sanityHelpers';
import styles from '../styles/Home.module.css';
import { NextSeo } from 'next-seo';
import Footer from '../components/footer';
import SocialIcons from '../components/socialIcons';
import { urlFor } from '../lib/sanity';
import { useContext, useState } from 'react';
import AppContext from '../lib/appContext';
import MobileMenu from '../components/mobileMenu.js';
import Home from '../components/home';
import About from '../components/about';
import Skills from '../components/skills';
import Services from '../components/services';
import Resume from '../components/resume';
import Works from '../components/works';
//import Reviews from '../components/reviews';
//import Blogs from '../components/blogs';
import Contact from '../components/contact';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Reviews = dynamic(() => import('../components/reviews'), {
  suspense: true,
});

const Blogs = dynamic(() => import('../components/blogs'), {
  suspense: true,
});

export default function Index({ settings, homePage, works, blogs }) {
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
      <Header settings={settings} />
      <div className="flex flex-col z-20 min-h-screen w-screen max-w-screen-xl mx-auto ">
        <main className="relative px-2 bg-white-100 flex-1 mx-2 ">
          <div className="absolute flex h-full z-0	 w-full justify-around">
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
          </div>
          <Home settings={settings} homePage={homePage} />
          <About homePage={homePage} />
          <Skills homePage={homePage} />
          <Services homePage={homePage} />
          <Resume homePage={homePage} />
          <Works homePage={homePage} works={works} />
          <Suspense fallback={`Loading...`}>
            <Reviews homePage={homePage} />
          </Suspense>
          <Suspense fallback={`Loading...`}>
            <Blogs blogs={blogs} />
          </Suspense>

          <Contact settings={settings} />
        </main>
      </div>
      <Footer settings={settings} />
    </>
  );
}

export async function getStaticProps(context) {
  const { websiteSettings, homePage, works, blogs } = await getIndexPage();

  return {
    props: {
      settings: websiteSettings,
      homePage,
      works,
      blogs,
    }, // will be passed to the page component as props
  };
}
