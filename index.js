import express from "express";
import bodyParser from "body-parser";
import nodemailer from 'nodemailer';
import path from 'path';

const app = express();
const port = 3000;

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static("public"));
//app.set("view engine", "ejs");
//app.set('views', path.join(path.resolve(), 'views'));  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

// Route to handle form submission
app.post('/send', (req, res) => {
    const { name, email, message , subject } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'siddharthasingh.workspace@gmail.com',
        pass: 'ixkc yqtn tnia wbcp', // Use App Password for Gmail
      },
    });


    const mailOptions = {
        from: email,
        to: 'akarshshukla1202@gmail.com', // Your email to receive enquiries
        subject: subject,
        text: `You have a new enquiry from:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Thank you! Your enquiry has been sent.');
        }
      });
    });    


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});