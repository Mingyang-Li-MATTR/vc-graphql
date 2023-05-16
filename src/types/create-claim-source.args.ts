import { Field, InputType } from '@nestjs/graphql';
import { CreateClaimSourceInput } from './create-claim-source.input';

@InputType()
export class CreateClaimSourceArgs {
  @Field(() => CreateClaimSourceInput, { nullable: false })
  data!: CreateClaimSourceInput;
}
