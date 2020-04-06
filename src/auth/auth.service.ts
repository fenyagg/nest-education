import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {
    const mongoConnectionString = this.configService.get<string>(
      'MONGODB_WRITE_CONNECTION_STRING',
    );
    console.log(`qq mongoConnectionString`, mongoConnectionString);
  }
}
