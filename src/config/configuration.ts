export const config = () => {
  const postgresConfig = process.env.POSTGRES_CONFIG.split('|');
  const postgresHost = postgresConfig[0];
  const postgresPort = postgresConfig[1];
  const postgresUser = postgresConfig[2];
  const postgresPass = postgresConfig[3];
  const postgresDB = postgresConfig[4];
  const postgresSchema = postgresConfig[5];

  const config = {
    database: {
      name: 'default',
      host: postgresHost,
      port: parseInt(postgresPort),
      username: postgresUser,
      password: postgresPass,
      database: postgresDB,
      schema: postgresSchema || 'public',
      stringUrl: `postgresql://${postgresUser}:${postgresPass}@${postgresHost}/${postgresDB}`,
    },
  };

  console.log(config);

  return config;
};
