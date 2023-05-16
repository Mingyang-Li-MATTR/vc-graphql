import { GetClaimSourcesArgs } from '@/types/get-claim-sources.args';
import { GetClaimSourcesResBody } from '@/types/get-claim-sources.res.body';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';

@Injectable()
export class MattrService {
  private logger = new Logger(MattrService.name);

  constructor(private readonly http: HttpService) {}

  public buildConfig(token: string): AxiosRequestConfig {
    return {
      headers: { Authorization: `Bearer ${token}` },
    };
  }

  public async getClaimSources(
    args: GetClaimSourcesArgs,
  ): Promise<AxiosResponse<GetClaimSourcesResBody>> {
    const url = `${args.config.baseUrl}/v1/claimsources`;
    const config = this.buildConfig(args.config.token);
    const res = this.http
      .get(url, config)
      .pipe(
        map((res) => ({
          ...res,
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
}
