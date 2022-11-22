import { NextSeo } from 'next-seo';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { urlFor } from '../../lib/sanity';
import { getIndexPage } from '../../lib/sanityHelpers';

export default function Blog({ settings, homePage, works, blogs }) {
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
      <div className="flex flex-col min-h-screen w-screen max-w-screen-xl mx-auto ">
        <Header settings={settings} />
        <main className="px-2 bg-white-100 flex-1 mx-2"></main>
        <Footer settings={settings} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { websiteSettings, blogs } = await getIndexPage();

  return {
    props: {
      settings: websiteSettings,
      blogs,
    }, // will be passed to the page component as props
  };
}
