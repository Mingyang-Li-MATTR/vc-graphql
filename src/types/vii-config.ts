import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

@InputType()
export class ViiConfig {
  @Field(() => String, {
    nullable: false,
  })
  @IsString()
  @Type(() => String)
  baseUrl!: string;

  @Field(() => String, {
    nullable: false,
  })
  @IsString()
  @Type(() => String)
  token!: string;
}
