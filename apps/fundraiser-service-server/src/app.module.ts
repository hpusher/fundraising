import { Module } from "@nestjs/common";
import { CampaignModule } from "./campaign/campaign.module";
import { DonationModule } from "./donation/donation.module";
import { ReportModule } from "./report/report.module";
import { CustomerServiceModule } from "./customerService/customerService.module";
import { EventModule } from "./event/event.module";
import { AdminModule } from "./admin/admin.module";
import { PaymentMethodModule } from "./paymentMethod/paymentMethod.module";
import { ContactUsModule } from "./contactUs/contactUs.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CampaignModule,
    DonationModule,
    ReportModule,
    CustomerServiceModule,
    EventModule,
    AdminModule,
    PaymentMethodModule,
    ContactUsModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}