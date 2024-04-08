export interface SendMailProps {
  to: string;
  from: string;
  subject: string;
  html: string;
}

export { sendMail } from "./providers";
