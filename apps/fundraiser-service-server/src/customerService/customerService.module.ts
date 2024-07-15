import { Module } from "@nestjs/common";
import { CustomerServiceModuleBase } from "./base/customerService.module.base";
import { CustomerServiceService } from "./customerService.service";
import { CustomerServiceController } from "./customerService.controller";
import { CustomerServiceResolver } from "./customerService.resolver";

@Module({
  imports: [CustomerServiceModuleBase],
  controllers: [CustomerServiceController],
  providers: [CustomerServiceService, CustomerServiceResolver],
  exports: [CustomerServiceService],
})
export class CustomerServiceModule {}
