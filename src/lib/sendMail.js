import emailjs from "emailjs-com";

export default function sendMail({ date, name, email, phone, amount }) {
  const data = {
    service_id: 'default_service',
    template_id: 'template_erpnyug',
    template_params: {
      Date: date,
      Name: name,
      Email: email,
      Phone: phone,
      Amount: amount,
    },
    user_id: 'yjjW4xoIjof6tIreN',
  };
  
  return emailjs
  .send(data)
  .then(
    () => {
      console.log("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error.text);
    }
  );
}
