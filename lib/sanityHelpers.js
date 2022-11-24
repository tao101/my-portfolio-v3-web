import { sanityClient } from './sanity.server';

export async function getIndexPage() {
  try {
    const settingsQuery = `*[ _id =='websiteSettings' ][0]`;
    const homeQuery = `*[ _id =='homePage' ][0]`;
    const worksQuery = `*[_type=='works' && !(_id in path('drafts.**')) ]{Categories[]->,_createdAt,_id,description,githubUrl,liveUrl,mainImage,photoGallery,title,youtubeUrl}`;
    const blogsQuery = `*[_type=='blogPost' && !(_id in path('drafts.**')) ]{Categories[]->,_createdAt,_id,description,_updatedAt,slug,title,image}`;
    let promises = [
      sanityClient.fetch(settingsQuery, {}),
      sanityClient.fetch(homeQuery, {}),
      sanityClient.fetch(worksQuery, {}),
      sanityClient.fetch(blogsQuery, {}),
    ];
    promises = await Promise.all(promises);
    let websiteSettings = promises[0];
    let homePage = promises[1];
    let works = promises[2];
    let blogs = promises[3];

    return {
      websiteSettings,
      homePage,
      works,
      blogs,
    };
  } catch (error) {
    console.log('error in getIndexPage');
    return {};
  }
}

export async function getCategories() {
  try {
    const categoriesQuery = `*[_type=='category' && !(_id in path('drafts.**'))  ]`;
    let categories = await sanityClient.fetch(categoriesQuery, {});
    return { categories };
  } catch (error) {
    console.log('error in getCategories');
    return {};
  }
}

export async function getBlogs() {
  try {
    const blogsQuery = `*[_type=='blogPost' && !(_id in path('drafts.**'))  ]`;
    let blogs = await sanityClient.fetch(blogsQuery, {});
    return { blogs };
  } catch (error) {
    console.log('error in getBlogs');
    return {};
  }
}

export async function getBlogBySlug(slug) {
  try {
    const blogQuery = `*[_type=='blogPost' && slug.current == '${slug}' && !(_id in path('drafts.**')) ][0]{Categories[]->,_createdAt,_id,description,_updatedAt,slug,title,image}`;
    let blog = await sanityClient.fetch(blogQuery, {});
    return { blog };
  } catch (error) {
    console.log('error in getBlogBySlug');
    return {};
  }
}
