import { MattrService } from '@/services/mattr.service';
import { ClaimSource } from '@/types/claim-source';
import { GetClaimSourcesArgs } from '@/types/get-claim-sources.args';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ClaimSourceResolver {
  constructor(private readonly mattrService: MattrService) {}

  @Query(() => [ClaimSource])
  public async getClaimSources(
    @Args('args') args: GetClaimSourcesArgs,
  ): Promise<ClaimSource[]> {
    console.log(args);
    const res = await this.mattrService.getClaimSources(args);
    return res.data.data;
  }
}
