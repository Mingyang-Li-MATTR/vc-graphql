import { Field, ObjectType } from '@nestjs/graphql';
import { ViiConfig } from './vii-config';

@ObjectType()
export class CreateClaimSourceArgs {
  @Field(() => ViiConfig, { nullable: false })
  config!: ViiConfig;

  body!: unknown;
}
