import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CampaignService } from "./campaign.service";
import { CampaignControllerBase } from "./base/campaign.controller.base";

@swagger.ApiTags("campaigns")
@common.Controller("campaigns")
export class CampaignController extends CampaignControllerBase {
  constructor(protected readonly service: CampaignService) {
    super(service);
  }
}
