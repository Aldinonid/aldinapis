import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { OtodyduckLevel } from "src/utils/enums";

@Entity({ name: 'otodyduck_flows' })
export class OtodyduckFlow {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({unique: true})
  @IsNotEmpty()
  name: string

  @Column()
  @IsNotEmpty()
  slug: string

  @Column()
  image: string

  @Column({
    type: 'enum',
    enum: OtodyduckLevel
  })
  @IsNotEmpty()
  level: OtodyduckLevel

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}