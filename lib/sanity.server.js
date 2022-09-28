import { createClient } from 'next-sanity';
import { config } from './sanityConfig';

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts

// Helper function for easily switching between normal client and preview client
