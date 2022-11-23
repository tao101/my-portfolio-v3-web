import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useState } from 'react';
import { uid } from 'uid';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { urlFor } from '../../lib/sanity';
import { getIndexPage } from '../../lib/sanityHelpers';

export default function Blog({ settings, categories, categoriesCount, blogs }) {
  const [index, setIndex] = useState(0);
  const [postPerPage, setPostPerPage] = useState(6);

  console.log('blogs ', blogs.length);
  console.log('index ', index);

  let visibleBlogs = blogs.slice(index, index + postPerPage);

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

        <div className="relative flex justify-center items-center h-full w-full">
          <div
            className="absolute  flex justify-center items-center h-full w-full pt-20 herosection-bg"
            style={{
              background: 'url("/herosection-bg.png")',
              opacity: 0.5,
            }}
          ></div>
          <h1 className="capitalize text-secondary-400 antialiased font-bold text-4xl	pt-20">
            Blogs
          </h1>
        </div>
      </div>
      <div className="relative flex flex-col min-h-screen w-screen max-w-screen-xl mx-auto ">
        <main className=" px-2 bg-white-100 z-0 flex-1 py-28 mx-2">
          <div className="absolute top-0 flex h-[100%] z-0	 w-full justify-around">
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
          </div>
          <div className="flex gap-7 z-20 flex-col lg:flex-row  ">
            <div className="flex-[9_9_0%]  z-20  w-full ">
              <div className="flex flex-wrap gap-x-7 gap-y-7 justify-start  ">
                {visibleBlogs?.map((blog) => {
                  return (
                    <div
                      key={uid()}
                      className="flex-[1_1_100%] lg:flex-[2_2_45%] card hovercard circleprogress p-4 md:p-5  w-full  "
                    >
                      <div className="flex-1 rounded-lg overflow-hidden ">
                        <Link href={'/blog/post/' + blog?.slug?.current}>
                          <a className="flex-1 rounded-lg overflow-hidden ">
                            <img
                              className=" hover:scale-125 ease-in duration-500 hover:cursor-pointer"
                              src={urlFor(blog?.image?.image)}
                              alt={blog?.image?.alt}
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white mt-6 hover:text-secondary-400 mb-3">
                          <Link href={'/blog/post/' + blog?.slug?.current}>
                            <a> {blog?.title}</a>
                          </Link>
                        </h5>
                        <p className="text-[#bfbecb] hover:text-secondary-400 hover:cursor-pointer">
                          {blog?.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pt-10 flex gap-7 text-center ">
                {index > 0 && (
                  <button
                    onClick={() => {
                      let newIndex = index - postPerPage;
                      setIndex(newIndex > 0 ? newIndex : 0);
                    }}
                    className="py-1.5 px-4 bg-secondary-400 rounded text-sm	font-medium	antialiased cursor-pointer hover:scale-110 active:scale-90 "
                  >
                    PREV
                  </button>
                )}
                {index + postPerPage < blogs.length && (
                  <button
                    onClick={() => {
                      let newIndex = index + postPerPage;
                      setIndex(newIndex);
                    }}
                    className="py-1.5 px-4 bg-secondary-400 rounded text-sm	font-medium	antialiased cursor-pointer hover:scale-110 active:scale-90"
                  >
                    NEXT
                  </button>
                )}
              </div>
            </div>
            <div className="flex-[3_3_0%] z-20 card hovercard circleprogress p-4 md:p-5  w-full h-fit ">
              <h5 className="border-b border-white border-opacity-20 pb-2 font-medium text-secondary-400 mb-3">
                Categories
              </h5>
              <ul className="categories">
                {categories?.map((category) => {
                  return (
                    <li
                      key={uid()}
                      className="mb-2   hover:cursor-pointer flex text-secondary-400  "
                    >
                      <Link href={'/blog/category/' + category?.slug?.current}>
                        <a className="flex flex-1 justify-between items-center hover:text-secondary-400 text-[#bfbecb] mt-px ">
                          <h6>{category?.title} </h6>
                          <span>
                            ({categoriesCount[category?.slug?.current]})
                          </span>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </main>
      </div>

      <Footer settings={settings} />
    </>
  );
}

export async function getStaticProps(context) {
  let { websiteSettings, blogs } = await getIndexPage();

  let reversedblog = blogs.concat([]);
  reversedblog.reverse();

  let categoriesCount = {};
  let categories = [];
  blogs.forEach((blog) => {
    let blogCategories = blog?.Categories;
    blogCategories.forEach((category) => {
      let slug = category?.slug?.current;
      if (!categoriesCount.hasOwnProperty(slug)) {
        categoriesCount[slug] = 1;
        categories.push(category);
      } else {
        categoriesCount[slug] = categoriesCount[slug] + 1;
      }
    });
    console.log('blog ', blog);
  });

  return {
    props: {
      settings: websiteSettings,
      blogs,
      categories,
      categoriesCount,
    }, // will be passed to the page component as props
  };
}
