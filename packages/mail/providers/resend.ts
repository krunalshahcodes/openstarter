import { SendMailProps } from "..";
import { Resend } from "resend";

export const sendMail = async ({ to, from, subject, html }: SendMailProps) => {
  const resend = new Resend(process.env.RESEND_API_KEY as string);

  try {
    await resend.emails.send({
      to,
      from,
      subject,
      html,
    });
  } catch (e) {
    console.error(`Error sending mail using resend.`, e);
  }
};
