import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimSourceRequestParamInput } from './claim-source-request-param.input';

@InputType()
export class ClaimSourceRequestParam {
  @Field(() => ClaimSourceRequestParamInput)
  @Type(() => ClaimSourceRequestParamInput)
  email?: ClaimSourceRequestParamInput | null;
}
