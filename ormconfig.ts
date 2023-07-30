// import { ConfigService } from '@nestjs/config';
// import { config as dotenvConfig } from 'dotenv';
// import { config, DatabaseConnectionService } from 'src/config';

// dotenvConfig({
//   path: '.env',
// });

// const configService = new ConfigService(config());
// const dbConnectionService = new DatabaseConnectionService(configService);
// const dbconfig = dbConnectionService.createTypeOrmOptions();

// export default {
//   ...dbconfig,
//   migrationTableName: 'migration',
//   migrations: ['./migrations/*.ts'],
//   cli: {
//     migrationsDir: './migrations',
//   },
//   entities: ['./src/entities/**/*.entity{.ts,.js}'],
// };
