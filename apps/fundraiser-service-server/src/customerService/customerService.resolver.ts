import * as graphql from "@nestjs/graphql";
import { CustomerServiceResolverBase } from "./base/customerService.resolver.base";
import { CustomerService } from "./base/CustomerService";
import { CustomerServiceService } from "./customerService.service";

@graphql.Resolver(() => CustomerService)
export class CustomerServiceResolver extends CustomerServiceResolverBase {
  constructor(protected readonly service: CustomerServiceService) {
    super(service);
  }
}
