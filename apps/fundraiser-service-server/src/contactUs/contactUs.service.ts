import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactUsServiceBase } from "./base/contactUs.service.base";

@Injectable()
export class ContactUsService extends ContactUsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
