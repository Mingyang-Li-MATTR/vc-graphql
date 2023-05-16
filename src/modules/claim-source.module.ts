import { ClaimSourceResolver } from '@/resolvers/claim-source.resolver';
import { MattrService } from '@/services/mattr.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [ClaimSourceResolver, MattrService],
})
export class ClaimSourceModule {}
