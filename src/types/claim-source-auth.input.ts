import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class ClaimSourceAuthInput {
  @Field(() => String, {
    nullable: false,
  })
  @Type(() => String)
  type!: string;

  @Field(() => String, {
    nullable: false,
  })
  @Type(() => String)
  value!: string;
}
