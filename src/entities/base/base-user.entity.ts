import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';
import { LanguageEnum } from 'src/enums';
import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

export class BaseUser extends BaseEntity {
  @IsString({ always: true })
  @Index()
  @Column({ type: 'text' })
  firstName: string;

  @IsString({ always: true })
  @Index()
  @Column({ type: 'text' })
  lastName: string;

  @IsEmail({}, { always: true })
  @MaxLength(300, { always: true })
  @Index()
  @Column({ type: 'text', unique: true })
  email: string;

  @IsString({ always: true })
  @Column({ type: 'text' })
  password: string;

  @IsString({ always: true })
  @Index()
  @Column({ type: 'text', unique: true })
  userName: string;

  @IsString({ always: true })
  @Matches(/^[^a-zA-Z:@.\-*/!"£$%^&*_#';|>?<]\+?\d/, {
    message: 'Entered phone number contains invalid characters',
  })
  @Column({ type: 'text' })
  phone: string;

  @IsString({ always: true })
  @MaxLength(300, { always: true })
  @Column({ type: 'text' })
  address?: string;

  @IsString({ always: true })
  @Column({ type: 'text', nullable: true })
  country?: string;

  @IsString({ always: true })
  @Column({ type: 'text', nullable: true })
  city?: string;

  @IsEnum(LanguageEnum, { always: true })
  @Column({ type: 'text', default: LanguageEnum.TR })
  language?: LanguageEnum;
}
