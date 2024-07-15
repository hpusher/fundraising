import { ContactUs as TContactUs } from "../api/contactUs/ContactUs";

export const CONTACTUS_TITLE_FIELD = "id";

export const ContactUsTitle = (record: TContactUs): string => {
  return record.id?.toString() || String(record.id);
};
