import { CustomerServiceWhereInput } from "./CustomerServiceWhereInput";
import { CustomerServiceOrderByInput } from "./CustomerServiceOrderByInput";

export type CustomerServiceFindManyArgs = {
  where?: CustomerServiceWhereInput;
  orderBy?: Array<CustomerServiceOrderByInput>;
  skip?: number;
  take?: number;
};
