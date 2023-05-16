import { AppConfig } from '@/schemas/env.schema';
import { CreateClaimSourceArgs } from '@/types/create-claim-source.args';
import { GetClaimSourcesArgs } from '@/types/get-claim-sources.args';
import {
  GetClaimSourcesResBody,
  getClaimSourcesResBodySchema,
} from '@/types/get-claim-sources.res.body';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';

@Injectable()
export class MattrService {
  private logger = new Logger(MattrService.name);

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService<AppConfig>,
  ) {}

  private get URL() {
    return this.config.get('MATTR_BASE_URL');
  }

  private get TOKEN() {
    return this.config.get('MATTR_AUTH_TOKEN');
  }

  public buildConfig(token: string): AxiosRequestConfig {
    return {
      headers: { Authorization: `Bearer ${token}` },
    };
  }

  public async getClaimSources(
    args: GetClaimSourcesArgs,
  ): Promise<AxiosResponse<GetClaimSourcesResBody>> {
    const url = `${this.URL}/v1/claimsources`;
    const config = this.buildConfig(args.config.token);
    const res = this.http
      .get(url, config)
      .pipe(
        map((res) => ({
          ...res,
          data: getClaimSourcesResBodySchema.parse(res.data),
        })),
      )
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(
            `getClaimSources - ${JSON.stringify(error.response.data)}`,
          );
          throw 'An error happened!';
        }),
      );
    return await firstValueFrom(res);
  }

  public async createClaimSource(
    args: CreateClaimSourceArgs,
  ): Promise<AxiosResponse<any>> {
    const url = `${this.URL}/core/v1/claimsources`;
    const body = args.data;
    const config = this.buildConfig(args.config.token);
    const res = this.http
      .post(url, body, config)
      .pipe(
        map((res) => ({
          ...res,
          data: res.data,
        })),
      )
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(
            `createClaimSource - ${JSON.stringify(error.response.data)}`,
          );
          throw 'An error happened!';
        }),
      );
    return await firstValueFrom(res);
  }
}
