import { sanityClient } from '../../lib/sanity.server';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request

    try {
      const { name, email, message, subject } = JSON.parse(req.body);

      if (email) {
        let doc = {
          status: 'NEW',
          name: name,
          email: email,
          subject: subject,
          message,
        };

        let newDoc = await sanityClient.create(doc);

        return res.status(200).json({ status: true });
      } else {
        return res.status(200).json({
          status: false,
          error: 'Email is required',
          message: 'Email is required',
        });
      }
    } catch (error) {
      console.log('error');
      console.log(error);
      return res.status(200).json({
        status: false,
        error: JSON.stringify(error),
        message: 'Did Catch an error',
      });
    }
  } else {
    // Handle any other HTTP method
    return res
      .status(200)
      .json({ status: false, error: 'Wrong Method', message: 'Wrong Method' });
  }
}
