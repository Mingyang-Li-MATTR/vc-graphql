import { Module } from '@nestjs/common';
import { ClaimSourceModule } from '@/modules/claim-source.module';
import { GqlModule } from '@/modules/gql.module';

@Module({
  imports: [GqlModule, ClaimSourceModule],
})
export class AppModule {}
