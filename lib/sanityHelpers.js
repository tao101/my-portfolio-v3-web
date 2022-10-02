import { sanityClient } from './sanity.server';

export async function getIndexPage() {
  try {
    const settingsQuery = `*[ _id =='websiteSettings' ][0]`;
    const homeQuery = `*[ _id =='homePage' ][0]`;
    let promises = [
      sanityClient.fetch(settingsQuery, {}),
      sanityClient.fetch(homeQuery, {}),
    ];
    promises = await Promise.all(promises);
    let websiteSettings = promises[0];
    let homePage = promises[1];

    return {
      websiteSettings,
      homePage,
    };
  } catch (error) {
    console.log('error in getIndexPage');
    return {};
  }
}
