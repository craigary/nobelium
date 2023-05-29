import Mailchimp from 'mailchimp-api-v3';

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

export default async (req, res) => {
  const { email } = req.body;
  try {
    const response = await mailchimp.post(`/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
      email_address: email,
      status: 'subscribed'
    });
    res.status(200).json({ success: true, message: 'Thanks for subscribing!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};