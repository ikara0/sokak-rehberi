import { IsDate, IsOptional } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseUser } from '../base';

@Entity()
export class User extends BaseUser {
  @IsDate({ always: true })
  @IsOptional({ always: true })
  @Column({ type: 'timestamptz', nullable: true })
  lastVisit?: Date;
}
