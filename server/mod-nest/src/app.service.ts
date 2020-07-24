import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  appRoot(): string {
    return 'mod-nest';
  }
}
