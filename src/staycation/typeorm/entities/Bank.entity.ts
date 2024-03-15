import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'staycation_banks' })
export class StaycationBank {
  @PrimaryGeneratedColumn()
  id: number

  @Column({name: 'bank_name'})
  @IsNotEmpty()
  bank_name: string
  
  @Column({name: 'account_number'})
  @IsNotEmpty()
  account_number: string

  @Column()
  @IsNotEmpty()
  name: string

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}