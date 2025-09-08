export const handleContact = (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  // sementara console log, nanti bisa integrasi ke Nodemailer/DB
  console.log("📩 New Contact Form Submission:");
  console.log({ name, email, subject, message });

  res.json({ success: true, message: "Message received successfully" });
};
