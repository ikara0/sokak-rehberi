import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const config: TypeOrmModuleOptions = {
      type: 'postgres',
      host: this.configService.get('database.host'),
      port: this.configService.get('database.port'),
      username: this.configService.get('database.username'),
      password: this.configService.get('database.password'),
      database: this.configService.get('database.databse'),
      schema: this.configService.get('database.schema'),
      namingStrategy: new SnakeNamingStrategy(),
      autoLoadEntities: true,
      maxQueryExecutionTime: 2000,
      migrationsTableName: 'migration',
      migrations: [
        join(__dirname, '/migration/*.ts'),
        join(__dirname, '../../migrations/*.js'),
        join(__dirname, '/dist/migrations/*.js'),
      ],
      keepConnectionAlive: true,
      retryAttempts: 10,
      cache: true,
      synchronize: false,
      migrationsRun: true,
    };
    return config;
  }
}
