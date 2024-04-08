import { SendMailProps } from "..";
import { sendMail as provider } from "./resend";

export const sendMail = (props: SendMailProps) => provider(props);
