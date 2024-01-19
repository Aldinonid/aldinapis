import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { StaycationImage } from "../entities/Image.entity";

export default class StaycationDataSeeder implements Seeder {
  public async run(
    dataSource: DataSource, 
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    await dataSource.query('TRUNCATE "staycation_images" RESTART IDENTITY;')

    const repository = dataSource.getRepository(StaycationImage)
    await repository.insert({
      imageUrl: ''
    })
  }

}