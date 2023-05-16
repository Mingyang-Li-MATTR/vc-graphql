import { Module } from '@nestjs/common';
import { ClaimSourceModule } from '@/modules/claim-source.module';
import { GqlModule } from '@/modules/gql.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './schemas/env.schema';

@Module({
  imports: [
    GqlModule,
    ClaimSourceModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      validate,
    }),
  ],
})
export class AppModule {}
