const functions = require('firebase-functions');
const nodemailer = require('nodemailer');



const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'braindanceperu@gmail.com',
    pass: 'vfvffyewozrpirva',
  },
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendMail = functions.firestore.document('/contact_info/{formId}').onCreate((snapshot)=>{

    data = snapshot.data();

    async function main() {

        // send mail with defined transport object
        let info = await mailTransport.sendMail({
          from: 'emailer@braindance.pe', // sender address
          to: "braindanceperu@gmail.com", // list of receivers
          subject: "New entry - Braindance Client", // Subject line
          text: `Datos del contacto: nombre: ${data.name},correo: ${data.email},cel: ${data.cel},curso: ${data.course}`,
          html: `<div>
          <h1>Name: ${data.name}</h1>
          <h3>Company: ${data.company}</h3>
          <h3>Email: ${data.email}</h3>
          <h3>Celular: ${data.cel}</h3>
          <h3>Message: ${data.message}</h3>
      </div>` // html body
        });
        
        return(info);
      }

      
      
      main().catch(console.error);
});
