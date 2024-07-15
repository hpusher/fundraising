import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerServiceService } from "./customerService.service";
import { CustomerServiceControllerBase } from "./base/customerService.controller.base";

@swagger.ApiTags("customerServices")
@common.Controller("customerServices")
export class CustomerServiceController extends CustomerServiceControllerBase {
  constructor(protected readonly service: CustomerServiceService) {
    super(service);
  }
}
