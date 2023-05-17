import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class ClaimSourceRequestParamInput {
  @Field(() => String, {
    nullable: false,
  })
  @Type(() => String)
  fieldName!: string;

  @Field(() => String, {
    nullable: false,
  })
  @Type(() => String)
  mapFrom?: string | null;

  @Field(() => String, {
    nullable: false,
  })
  @Type(() => String)
  defaultValue?: string | null;

  @Field(() => Boolean, {
    nullable: false,
  })
  @Type(() => Boolean)
  required?: boolean | null;
}
