import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { uid } from 'uid';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import { getBlockContent, urlFor } from '../../../lib/sanity';
import {
  getBlogBySlug,
  getBlogs,
  getIndexPage,
} from '../../../lib/sanityHelpers';

export default function Post({ settings, slug, blog }) {
  console.log('blog', blog);

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
      <div className="realative  w-full h-64 breadcrumb-bg">
        <div className="w-screen max-w-screen-xl mx-auto">
          <Header settings={settings} />
        </div>

        <div className="relative flex flex-col justify-center items-center h-full w-full">
          <div
            className="absolute  flex justify-center items-center h-full w-full pt-20 herosection-bg"
            style={{
              background: 'url("/herosection-bg.png")',
              opacity: 0.5,
            }}
          ></div>
          <h1 className="capitalize flex mb-2 text-secondary-400 antialiased font-bold text-4xl	pt-20">
            {blog?.title}
          </h1>
        </div>
      </div>
      <div className="relative flex flex-col min-h-screen w-screen max-w-screen-xl mx-auto ">
        <main className=" px-2 bg-white-100 z-0 flex-1 py-28 mx-2">
          <div className="absolute top-0 flex h-[100%] -z-10	 w-full justify-around">
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
          </div>
          <div className="z-20">
            {blog?.image?.image && (
              <img
                className="mb-5 rounded border border-white border-opacity-20"
                src={urlFor(blog?.image?.image)}
                alt={blog?.image?.alt}
              />
            )}
            <div className="mb-5 flex justify-between">
              <div className="flex items-center">
                <h6 className="text-white">Category :</h6>
                <div className="ml-2 flex z-20 gap-1.5">
                  {blog?.Categories?.map((category) => {
                    return (
                      <span
                        key={uid()}
                        className="after:content-[','] last:after:hidden text-[#bfbecb] hover:text-secondary-400"
                      >
                        <Link
                          href={'/blog/category/' + category?.slug?.current}
                        >
                          <a className=" ">{category?.title}</a>
                        </Link>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center">
                <h6 className="text-white">Published on :</h6>
                <div className="z-20 ml-2 ">
                  <span className=" text-[#bfbecb]">
                    {new Date(blog?._updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="">{getBlockContent(blog?.Content)}</div>
          </div>
        </main>
      </div>

      <Footer settings={settings} />
    </>
  );
}

export async function getStaticPaths() {
  let { blogs } = await getBlogs();

  let paths = blogs?.map((blog) => {
    return {
      params: { slug: blog?.slug?.current },
    };
  });
  //console.log('paths ', paths);

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  let { slug } = context?.params;
  let { blog } = await getBlogBySlug(slug);
  let { websiteSettings } = await getIndexPage();

  //console.log('blog', blog);

  return {
    props: {
      settings: websiteSettings,
      slug,
      blog,
    },
  };
}
