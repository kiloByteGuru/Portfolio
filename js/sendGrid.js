// Define the send function
function send() {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
            to: 'jasenkobozinovic@gmail.com',
            from: 'jasenkobozinovic@gmail.com',
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };

      sgMail
            .send(msg)
            .then(() => {
                  console.log('Email sent');
            })
            .catch((error) => {
                  console.error(error);
            });
}

// Call the send function
send();
// Define the send function
function send() {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
            to: 'jasenkobozinovic@gmail.com',
            from: 'jasenkobozinovic@gmail.com',
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };

      sgMail
            .send(msg)
            .then(() => {
                  console.log('Email sent');
            })
            .catch((error) => {
                  console.error(error);
            });
}

// Call the send function
send();
