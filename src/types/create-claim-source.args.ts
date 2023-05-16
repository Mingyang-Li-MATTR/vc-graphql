import { Field, InputType } from '@nestjs/graphql';
import { CreateClaimSourceInput } from './create-claim-source.input';
import { ViiConfig } from './vii-config';

@InputType()
export class CreateClaimSourceArgs {
  @Field(() => ViiConfig, { nullable: false })
  config!: ViiConfig;

  @Field(() => CreateClaimSourceInput, { nullable: false })
  data!: CreateClaimSourceInput;
}
