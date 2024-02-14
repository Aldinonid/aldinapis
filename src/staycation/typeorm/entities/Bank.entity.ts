import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'staycation_banks' })
export class StaycationBank {
  @PrimaryGeneratedColumn()
  id: number

  @Column({name: 'bank_name'})
  @IsNotEmpty()
  bankName: string
  
  @Column({name: 'account_number'})
  @IsNotEmpty()
  accountNumber: string

  @Column()
  @IsNotEmpty()
  name: string
}