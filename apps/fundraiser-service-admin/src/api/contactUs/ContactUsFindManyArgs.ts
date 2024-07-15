import { ContactUsWhereInput } from "./ContactUsWhereInput";
import { ContactUsOrderByInput } from "./ContactUsOrderByInput";

export type ContactUsFindManyArgs = {
  where?: ContactUsWhereInput;
  orderBy?: Array<ContactUsOrderByInput>;
  skip?: number;
  take?: number;
};
