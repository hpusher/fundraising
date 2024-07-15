/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CustomerServiceService } from "../customerService.service";
import { CustomerServiceCreateInput } from "./CustomerServiceCreateInput";
import { CustomerService } from "./CustomerService";
import { CustomerServiceFindManyArgs } from "./CustomerServiceFindManyArgs";
import { CustomerServiceWhereUniqueInput } from "./CustomerServiceWhereUniqueInput";
import { CustomerServiceUpdateInput } from "./CustomerServiceUpdateInput";

export class CustomerServiceControllerBase {
  constructor(protected readonly service: CustomerServiceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomerService })
  async createCustomerService(
    @common.Body() data: CustomerServiceCreateInput
  ): Promise<CustomerService> {
    return await this.service.createCustomerService({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CustomerService] })
  @ApiNestedQuery(CustomerServiceFindManyArgs)
  async customerServices(
    @common.Req() request: Request
  ): Promise<CustomerService[]> {
    const args = plainToClass(CustomerServiceFindManyArgs, request.query);
    return this.service.customerServices({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CustomerService })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async customerService(
    @common.Param() params: CustomerServiceWhereUniqueInput
  ): Promise<CustomerService | null> {
    const result = await this.service.customerService({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CustomerService })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCustomerService(
    @common.Param() params: CustomerServiceWhereUniqueInput,
    @common.Body() data: CustomerServiceUpdateInput
  ): Promise<CustomerService | null> {
    try {
      return await this.service.updateCustomerService({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CustomerService })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCustomerService(
    @common.Param() params: CustomerServiceWhereUniqueInput
  ): Promise<CustomerService | null> {
    try {
      return await this.service.deleteCustomerService({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
