import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { config } from './sanityConfig';
const BlockContent = require('@sanity/block-content-to-react');

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const getBlockContent = (source) => {
  return (
    <BlockContent
      className="post-body mb-4 z-20"
      blocks={source}
      imageOptions={{ w: '100%', h: 240, fit: 'max' }}
      serializers={serializers}
    />
  );
};

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};
