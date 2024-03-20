export const config = () => ({
  port: Number(process.env.PORT),
  database: {
    type: 'postgres',
    host: process.env.PGHOST,
    port: 5432,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: false,
    autoLoadEntities: true,
    ssl: (process.env.SSL == 'true'),
    entities: [`dist/**/**/*.entity{.ts,.js}`],
    migrations: [`dist/**/migration/*.{.ts,.js}`],
    migrationsTableName: `${process.env.PGDATABASE}_migrations`
  },
  secretKey: `${process.env.SECRET_KEY}`
});