/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CustomerService } from "./CustomerService";
import { CustomerServiceCountArgs } from "./CustomerServiceCountArgs";
import { CustomerServiceFindManyArgs } from "./CustomerServiceFindManyArgs";
import { CustomerServiceFindUniqueArgs } from "./CustomerServiceFindUniqueArgs";
import { DeleteCustomerServiceArgs } from "./DeleteCustomerServiceArgs";
import { CustomerServiceService } from "../customerService.service";
@graphql.Resolver(() => CustomerService)
export class CustomerServiceResolverBase {
  constructor(protected readonly service: CustomerServiceService) {}

  async _customerServicesMeta(
    @graphql.Args() args: CustomerServiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CustomerService])
  async customerServices(
    @graphql.Args() args: CustomerServiceFindManyArgs
  ): Promise<CustomerService[]> {
    return this.service.customerServices(args);
  }

  @graphql.Query(() => CustomerService, { nullable: true })
  async customerService(
    @graphql.Args() args: CustomerServiceFindUniqueArgs
  ): Promise<CustomerService | null> {
    const result = await this.service.customerService(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CustomerService)
  async deleteCustomerService(
    @graphql.Args() args: DeleteCustomerServiceArgs
  ): Promise<CustomerService | null> {
    try {
      return await this.service.deleteCustomerService(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
