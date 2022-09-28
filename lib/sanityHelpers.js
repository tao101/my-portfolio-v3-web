import { sanityClient } from './sanity.server';

export async function getWebsiteSettings() {
  try {
    const query = `*[ _id =='websiteSettings' ][0]`;
    const websiteSettings = await sanityClient.fetch(query, {});

    return websiteSettings;
  } catch (error) {
    console.log('error in getWebsiteSettings');
    return {};
  }
}
