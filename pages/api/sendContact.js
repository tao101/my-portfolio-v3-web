import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request

    try {
      const { name, email, message, subject } = JSON.parse(req.body);

      if (email) {
        const Mailjet = require('node-mailjet');

        const mailjet = new Mailjet({
          apiKey: process.env.MJ_APIKEY_PUBLIC || 'your-api-key',
          apiSecret: process.env.MJ_APIKEY_PRIVATE || 'your-api-secret',
        });

        const request = mailjet.post('send', { version: 'v3.1' }).request({
          Messages: [
            {
              From: {
                Email: 'admin@taoufiqlotfi.tech',
                Name: 'taoufiqlotfi.tech',
              },
              To: [
                {
                  Email: 'admin@taoufiqlotfi.tech',
                  Name: 'MY Portfolio',
                },
              ],
              TemplateID: 4377989,
              TemplateLanguage: true,
              Subject: 'TaoufiqLotfi.tech: New Contact From Portfolio',
              Variables: {
                name: '',
                email: '',
                subject: '',
                message: '',
              },
            },
          ],
        });
        let result = await request;

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
