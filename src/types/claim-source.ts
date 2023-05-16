import { ObjectType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsObject } from 'class-validator';

@ObjectType()
class Authorization {
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

  @Field(() => Authorization, {
    nullable: true,
  })
  @IsObject()
  @IsOptional()
  @Type(() => Authorization)
  authorization?: Authorization | null;
}
