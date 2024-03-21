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

  @Column({name: 'image_url'})
  @IsNotEmpty()
  image_url: string
  
  @Column({name: 'account_holder'})
  @IsNotEmpty()
  account_holder: string

  @CreateDateColumn({name: 'created_at'})
  created_at: Date
  
  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date
}