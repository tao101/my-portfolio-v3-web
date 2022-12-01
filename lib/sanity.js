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
export const urlFor = (source) =>
  createImageUrlBuilder(config).image(source).format('webp');

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
    seoImage: (props) => {
      return (
        <img
          src={urlFor(props?.node?.image)}
          alt={props?.node?.alt}
          className="mx-auto "
          style={{
            marginTop: 24,
            marginBottom: 24,
          }}
        />
      );
    },
    codeSnippet: (props) => {
      //console.log('codeSnippet', props);
      return (
        <div
          style={{
            marginTop: 24,
            marginBottom: 24,
          }}
          className="card hovercard circleprogress w-full p-4 md:p-5 "
        >
          <pre className="text-white " data-language={props.node.Code.language}>
            <code className="">{props.node.Code.code}</code>
          </pre>
        </div>
      );
    },

    quote: (props) => {
      return (
        <blockquote
          className="text-xl  card hovercard circleprogress w-full p-4 md:p-5  "
          style={{
            borderLeft: '5px #33ccff solid',
          }}
        >
          <p className="">{props.node.quote}</p>
        </blockquote>
      );
    },
  },
};
