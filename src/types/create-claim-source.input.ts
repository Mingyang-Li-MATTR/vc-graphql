import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsUrl } from 'class-validator';
import { ClaimSourceAuthInput } from './claim-source-auth.input';
import { ClaimSourceRequestParam } from './claim-source-request-param';
import { ClaimSourceRequestParamInput } from './claim-source-request-param.input';

@InputType()
export class CreateClaimSourceInput {
  @Field(() => String)
  @Type(() => String)
  name!: string;

  @Field(() => String)
  @Type(() => String)
  @IsUrl()
  url!: string;

  @Field(() => ClaimSourceAuthInput)
  @Type(() => ClaimSourceAuthInput)
  authorization!: ClaimSourceAuthInput;

  @Field(() => [ClaimSourceRequestParamInput])
  // @Type(() => ClaimSourceRequestParamInput[])
  requestParameters!: ClaimSourceRequestParamInput[];
}
