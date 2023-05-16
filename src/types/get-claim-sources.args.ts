import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ViiConfig } from './vii-config';

@InputType()
export class GetClaimSourcesArgs {
  @Field(() => ViiConfig, { nullable: false })
  @Type(() => ViiConfig)
  config!: ViiConfig;
}
