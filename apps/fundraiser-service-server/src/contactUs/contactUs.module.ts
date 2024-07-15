import { Module } from "@nestjs/common";
import { ContactUsModuleBase } from "./base/contactUs.module.base";
import { ContactUsService } from "./contactUs.service";
import { ContactUsController } from "./contactUs.controller";
import { ContactUsResolver } from "./contactUs.resolver";

@Module({
  imports: [ContactUsModuleBase],
  controllers: [ContactUsController],
  providers: [ContactUsService, ContactUsResolver],
  exports: [ContactUsService],
})
export class ContactUsModule {}
