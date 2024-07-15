import { CustomerService as TCustomerService } from "../api/customerService/CustomerService";

export const CUSTOMERSERVICE_TITLE_FIELD = "id";

export const CustomerServiceTitle = (record: TCustomerService): string => {
  return record.id?.toString() || String(record.id);
};
