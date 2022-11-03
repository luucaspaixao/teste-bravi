import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
class Person {
  @PrimaryColumn()
  id: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  age: number;

  @Column({
    nullable: false,
  })
  email: string;

  @Column()
  phone: string;

  @Column()
  whatsapp: string;

  @Column()
  photo_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany((type) => Person)
  @JoinTable()
  contacts: Person[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Person };
