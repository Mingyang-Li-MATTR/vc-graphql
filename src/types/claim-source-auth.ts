import { ObjectType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';

@ObjectType()
export class ClaimSourceAuth {
  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  type?: string | null;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  value?: string | null;
}
