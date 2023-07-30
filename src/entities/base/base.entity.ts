import {
  Column,
  CreateDateColumn,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  createdAt?: Date;

  @Index()
  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  updatedAt?: Date;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date;

  @Column({ type: 'text', nullable: true, default: 'System' })
  createdBy?: string;

  @Column({ type: 'text', nullable: true, default: 'System' })
  updatedBy?: string;
}
