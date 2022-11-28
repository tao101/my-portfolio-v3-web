import { sanityClient } from '../../lib/sanity.server';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, comment, id } = JSON.parse(req.body);

      if (name && email && comment && id) {
        console.log({
          name,
          email,
          comment,
          id,
        });

        let addComment = await sanityClient
          .patch(id)
          .setIfMissing({ comments: [] })
          .append('comments', [
            {
              name,
              email,
              comment,
              date: new Date(),
            },
          ])
          .commit({ autoGenerateArrayKeys: true });

        return res.status(200).json({
          status: true,
        });
      } else {
        return res.status(200).json({
          status: false,
          error: 'name, email, comment is required',
          message: 'name, email, comment is required',
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // Handle any other HTTP method
    return res
      .status(200)
      .json({ status: false, error: 'Wrong Method', message: 'Wrong Method' });
  }
}
