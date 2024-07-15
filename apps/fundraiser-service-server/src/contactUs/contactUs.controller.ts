import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactUsService } from "./contactUs.service";
import { ContactUsControllerBase } from "./base/contactUs.controller.base";

@swagger.ApiTags("contactuses")
@common.Controller("contactuses")
export class ContactUsController extends ContactUsControllerBase {
  constructor(protected readonly service: ContactUsService) {
    super(service);
  }
}
