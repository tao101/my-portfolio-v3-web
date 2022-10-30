import { sanityClient } from './sanity.server';

export async function getIndexPage() {
  try {
    const settingsQuery = `*[ _id =='websiteSettings' ][0]`;
    const homeQuery = `*[ _id =='homePage' ][0]`;
    const worksQuery = `*[_type=='works' && !(_id in path('drafts.**')) ]{Categories[]->,_createdAt,_id,description,githubUrl,liveUrl,mainImage,photoGallery,title,youtubeUrl}`;
    let promises = [
      sanityClient.fetch(settingsQuery, {}),
      sanityClient.fetch(homeQuery, {}),
      sanityClient.fetch(worksQuery, {}),
    ];
    promises = await Promise.all(promises);
    let websiteSettings = promises[0];
    let homePage = promises[1];
    let works = promises[2];

    return {
      websiteSettings,
      homePage,
      works,
    };
  } catch (error) {
    console.log('error in getIndexPage');
    return {};
  }
}
