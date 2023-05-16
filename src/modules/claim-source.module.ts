import { ClaimSourceResolver } from '@/resolvers/claim-source.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [ClaimSourceResolver],
})
export class ClaimSourceModule {}
