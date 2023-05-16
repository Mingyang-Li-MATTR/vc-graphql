import { ObjectType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsObject } from 'class-validator';
import { ClaimSourceAuth } from './claim-source-auth';

@ObjectType()
export class ClaimSource {
  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  id?: string | null;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  url?: string | null;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  name?: string | null;

  @Field(() => ClaimSourceAuth, {
    nullable: true,
  })
  @IsObject()
  @IsOptional()
  @Type(() => ClaimSourceAuth)
  authorization?: ClaimSourceAuth | null;
}
