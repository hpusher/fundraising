/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerServiceWhereInput } from "./CustomerServiceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CustomerServiceCountArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerServiceWhereInput,
  })
  @Field(() => CustomerServiceWhereInput, { nullable: true })
  @Type(() => CustomerServiceWhereInput)
  where?: CustomerServiceWhereInput;
}

export { CustomerServiceCountArgs as CustomerServiceCountArgs };
