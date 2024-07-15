import * as graphql from "@nestjs/graphql";
import { ContactUsResolverBase } from "./base/contactUs.resolver.base";
import { ContactUs } from "./base/ContactUs";
import { ContactUsService } from "./contactUs.service";

@graphql.Resolver(() => ContactUs)
export class ContactUsResolver extends ContactUsResolverBase {
  constructor(protected readonly service: ContactUsService) {
    super(service);
  }
}
