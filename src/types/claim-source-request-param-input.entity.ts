import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ObjectType()
export class ClaimSourceRequestParamInputEntity {
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  mapFrom?: string | null;

  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  defaultValue?: string | null;

  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  required?: boolean | null;
}
