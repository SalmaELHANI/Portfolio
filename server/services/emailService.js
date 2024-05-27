import db from '../models/index.js';

const transporter = db.nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: db.gmailUser,
        pass: db.gmailPass,
    },
});

const sendEmail = async (recipient, subject, htmlContent) => {
    try {
        await transporter.sendMail({
            from: db.gmailUser,
            to: recipient,
            subject: subject,
            html: htmlContent
        });
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendEmail;
