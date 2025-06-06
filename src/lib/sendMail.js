import emailjs from "@emailjs/browser";

export const dynamic = "force-dynamic";

export default function sendMail({ date, name, email, phone, amount }) {
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_USER_ID;
  
  console.log("Sending email with:", {
    serviceID,
    templateID,
    userID,
    date,
    name,
    email,
    phone,
    amount,
  });
  
  return emailjs
    .send(
      serviceID,
      templateID,
      {
        Date: date,
        Name: name,
        Email: email,
        Phone: phone,
        Amount: amount,
      },
      userID
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
