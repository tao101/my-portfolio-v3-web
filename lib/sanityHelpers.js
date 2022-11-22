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
    //console.log('error in getIndexPage');
    return {};
  }
}
