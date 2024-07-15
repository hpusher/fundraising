import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerServiceServiceBase } from "./base/customerService.service.base";

@Injectable()
export class CustomerServiceService extends CustomerServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
