import { MattrService } from '@/services/mattr.service';
import { ClaimSource } from '@/types/claim-source';
import { CreateClaimSourceArgs } from '@/types/create-claim-source.args';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ClaimSourceResolver {
  constructor(private readonly mattrService: MattrService) {}

  @Query(() => [ClaimSource])
  public async getClaimSources(): Promise<ClaimSource[]> {
    const res = await this.mattrService.getClaimSources();
    return res.data.data;
  }

  @Mutation(() => ClaimSource)
  public async createClaimSource(@Args('args') args: CreateClaimSourceArgs) {
    // const res = await this.mattrService.createClaimSource(args);
    // console.log(`res -> ${JSON.stringify(res.data)}`);
    const res: ClaimSource = {
      id: 'some-uuid',
      ...args.data,
    };
    return res;
  }
}
