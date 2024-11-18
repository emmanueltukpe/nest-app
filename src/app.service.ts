import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/dev.config';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG')
    private config: { port: string },
  ) {}
  getHello(): string {
    return `This is ${this.devConfigService.getDBHost()} PORT = ${this.config.port}`;
  }
}
