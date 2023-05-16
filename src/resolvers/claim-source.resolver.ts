import { ClaimSource } from '@/types/claim-source';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ClaimSourceResolver {
  @Query(() => ClaimSource)
  public async getClaimSource(): Promise<ClaimSource> {
    return { id: 'id' };
  }
}
