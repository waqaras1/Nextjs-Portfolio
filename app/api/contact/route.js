import nodemailer from "nodemailer";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Input validation
    if (
      !name ||
      !email ||
      !message ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !validateEmail(email)
    ) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid input data." }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Your Gmail address
      to: process.env.EMAIL_USER,
      replyTo: email, // Sender's email for replies
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    // Confirmation email to sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me!",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out. I received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        <p>Best,<br/>Waqar Ahmed<br/>Software Engineer (Backend) at Aykays</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Email failed to send.", error }),
      { status: 500 }
    );
  }
}
