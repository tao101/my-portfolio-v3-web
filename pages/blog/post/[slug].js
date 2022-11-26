import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useState } from 'react';
import { uid } from 'uid';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import { getBlockContent, urlFor } from '../../../lib/sanity';
import {
  getBlogBySlug,
  getBlogs,
  getIndexPage,
} from '../../../lib/sanityHelpers';
import timeSince from '../../../utils/timeSince';

export default function Post({ settings, slug, blog, publishedComments }) {
  //console.log('blog', blog);

  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addComment, setAddComment] = useState(false);

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
          <h1 className="mx-2 capitalize flex mb-2 text-secondary-400 antialiased font-bold text-4xl	pt-20">
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
            <div className="relative border-b pb-2 border-opacity-20 border-[#bfbecb]/20">
              <span className="border-b-8 pb-2 text-[#bfbecb] border-[#bfbecb]/90">
                {publishedComments?.length + ' '}{' '}
                {publishedComments?.length >= 2 ? 'Comments' : 'Comment'}
              </span>
            </div>
            <div className="mt-6 card hovercard circleprogress w-full p-4 md:p-5">
              {addComment && (
                <form className="w-full h-full flex flex-col justify-between  space-y-4">
                  <div className="flex flex-col w-full text-white text-sm	antialiased ">
                    <label className="mb-1.5">Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      id="name"
                      name="name"
                      className="flex-1 px-4 py-2 bg-transparent h-2 text-base text-[#bfbecb] hover:border-secondary-400 active:border-secondary-400 focus:outline-none focus:ring focus:ring-secondary-400"
                      placeholder="Enter your name..."
                    />
                  </div>
                  <div className="flex flex-col w-full text-white text-sm	antialiased">
                    <label className="mb-1.5">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="flex-1 px-4 py-2 bg-transparent h-2 text-base	 text-[#bfbecb] hover:border-secondary-400 focus:outline-none focus:ring focus:ring-secondary-400"
                      placeholder="Enter your email..."
                    />
                  </div>
                  <div className="flex flex-1  flex-col w-full text-white text-sm	antialiased ">
                    <label className="mb-1.5">Comment</label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      type="text"
                      id="comment"
                      name="comment"
                      required
                      cols="1"
                      rows="2"
                      className="flex-1 px-4  py-2 bg-transparent h-2 text-base text-[#bfbecb] hover:border-secondary-400 focus:outline-none focus:ring focus:ring-secondary-400"
                      placeholder="Enter your comment..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-secondary-400 py-2.5 px-5 rounded w-fit hover:scale-110 active:scale-90 "
                  >
                    POST COMMENT
                  </button>
                </form>
              )}
              {!addComment && (
                <div className="w-full h-full flex flex-col justify-between  space-y-4">
                  <button
                    onClick={() => setAddComment(true)}
                    className="bg-secondary-400 py-2.5 px-5 rounded w-fit hover:scale-110 active:scale-90 "
                  >
                    ADD A COMMENT
                  </button>
                </div>
              )}
            </div>
            {publishedComments?.length > 0 && (
              <div className="mt-6 card hovercard circleprogress w-full p-4 md:p-5 divide-y divide-secondary-100/20 ">
                {publishedComments?.map((comment) => {
                  console.log('commnet', comment);
                  let timeAgo = timeSince(new Date(comment?.date));
                  return (
                    <div key={uid()} className="flex gap-x-6 py-4  ">
                      <div className="text-secondary-400">
                        <svg
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-12 h-12"
                        >
                          <g>
                            <g>
                              <path
                                d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256c2.581,0,5.099-0.32,7.68-0.384l0.896,0.171
			c0.704,0.128,1.387,0.213,2.091,0.213c0.981,0,1.984-0.128,2.923-0.405l1.195-0.341C405.056,503.509,512,392.171,512,256
			C512,114.837,397.163,0,256,0z M408.149,434.325c-1.003-3.264-3.264-6.016-6.549-7.104l-56.149-18.688
			c-19.605-8.171-28.736-39.552-30.869-52.139c14.528-13.504,27.947-33.621,27.947-51.797c0-6.187,1.749-8.555,1.408-8.619
			c3.328-0.832,6.037-3.2,7.317-6.379c1.045-2.624,10.24-26.069,10.24-41.877c0-0.875-0.107-1.749-0.32-2.581
			c-1.344-5.355-4.48-10.752-9.173-14.123v-49.664c0-30.699-9.344-43.563-19.243-51.008c-2.219-15.275-18.581-44.992-76.757-44.992
			c-59.477,0-96,55.915-96,96v49.664c-4.693,3.371-7.829,8.768-9.173,14.123c-0.213,0.853-0.32,1.728-0.32,2.581
			c0,15.808,9.195,39.253,10.24,41.877c1.28,3.179,2.965,5.205,6.293,6.037c0.683,0.405,2.432,2.795,2.432,8.96
			c0,18.176,13.419,38.293,27.947,51.797c-2.112,12.565-11.157,43.925-30.144,51.861l-56.896,18.965
			c-3.264,1.088-5.611,3.776-6.635,7.04C53.376,391.189,21.291,327.317,21.291,256c0-129.387,105.28-234.667,234.667-234.667
			S490.624,126.613,490.624,256C490.667,327.339,458.56,391.253,408.149,434.325z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex gap-1">
                          <p className="text-[#bfbecb]">{comment?.name}</p>
                          <span
                            className="bullet time-ago-bullet text-[#bfbecb]"
                            ariaHidden="true"
                          >
                            •
                          </span>
                          <p className="text-[#bfbecb]">{`${timeAgo} ago`}</p>
                        </div>
                        <div>
                          <p className="text-white">{comment?.comment}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
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

  let publishedComments = blog?.comments?.filter((comment) => {
    return comment?.approved;
  });

  if (!publishedComments) {
    publishedComments = [];
  }

  publishedComments = publishedComments.sort(
    (a, b) => new Date(b?.date).getTime() - new Date(a?.date).getTime()
  );
  //console.log('blog', blog);

  return {
    props: {
      settings: websiteSettings,
      slug,
      blog,
      publishedComments: publishedComments,
    },
  };
}
