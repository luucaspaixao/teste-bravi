import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Person } from "../../person/entities/Person";

@Entity()
class Contact {
  @PrimaryColumn()
  id: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column()
  photo_url: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Person, (person) => person.contacts, {
    onDelete: "CASCADE",
    orphanedRowAction: "delete",
  })
  person: Person;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Contact };
