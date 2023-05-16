import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsUrl } from 'class-validator';
import { ClaimSourceAuthInput } from './claim-source-auth.input';

@InputType()
export class CreateClaimSourceInput {
  @Field(() => String, { nullable: false })
  @Type(() => String)
  name!: string;

  @Field(() => String, { nullable: false })
  @Type(() => String)
  @IsUrl()
  url!: string;

  @Field(() => ClaimSourceAuthInput, {
    nullable: true,
  })
  @Type(() => ClaimSourceAuthInput)
  authorization!: ClaimSourceAuthInput;

  @Field(() => ClaimSourceAuthInput, {
    nullable: true,
  })
  @Type(() => ClaimSourceAuthInput)
  requestParameters!: Record<string, unknown>;
}
