import emailjs from "@emailjs/browser";

export default function sendMail({ date, name, email, phone, amount }) {
  
  return emailjs
    .send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      {
        Date: date,
        Name: name,
        Email: email,
        Phone: phone,
        Amount: amount,
      },
      process.env.USER_ID
    )
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
}
