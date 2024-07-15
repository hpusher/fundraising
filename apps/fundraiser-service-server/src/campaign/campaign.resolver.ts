import * as graphql from "@nestjs/graphql";
import { CampaignResolverBase } from "./base/campaign.resolver.base";
import { Campaign } from "./base/Campaign";
import { CampaignService } from "./campaign.service";

@graphql.Resolver(() => Campaign)
export class CampaignResolver extends CampaignResolverBase {
  constructor(protected readonly service: CampaignService) {
    super(service);
  }
}
