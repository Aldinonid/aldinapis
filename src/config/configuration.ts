export const config = () => ({
  port: Number(process.env.PORT),
  database: {
    type: 'postgres',
    host: process.env.PGHOST,
    port: 5432,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    entities: [`dist/**/**/*.entity{.ts,.js}`],
    synchronize: true,
    autoLoadEntities: true,
    ssl: (process.env.SSL == 'true')
  }
});