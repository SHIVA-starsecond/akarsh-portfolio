import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Example using Gmail
  auth: {
    user: 'siddharthasingh.workspace@gmail.com',
    pass: 'ixkc yqtn tnia wbcp' // Use an App Password for Gmail (see below)
  }
});

const mailOptions = {
  from: 'siddharthasingh.workspace.com',
  to: 'bidhuripriyanshu351@gmail.com',
  subject: 'Request from siddhu',
  text: 'hello bhaiya!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
