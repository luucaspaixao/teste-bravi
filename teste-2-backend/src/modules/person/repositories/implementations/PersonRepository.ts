import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database";
import { Person } from "../../entities/Person";
import { ICreatePersonDTO, IPersonRepository } from "../IPersonRepository";

class PersonRepository implements IPersonRepository {
  private repository: Repository<Person>;

  constructor() {
    this.repository = AppDataSource.getRepository(Person);
  }

  async create({
    name,
    age,
    email,
    photo_url,
    contacts,
    phone,
    whatsapp,
  }: ICreatePersonDTO) {
    const person = this.repository.create({
      name,
      age,
      email,
      photo_url,
      contacts,
      phone,
      whatsapp,
    });

    await this.repository.save(person);

    return person;
  }

  async update(body: ICreatePersonDTO, id: string) {
    const person = await this.repository.findOne({
      where: {
        id,
      },
      relations: {
        contacts: true,
      },
    });

    body.contacts = body.contacts.map((contact) => {
      if (!contact.id) return this.repository.create(contact);
      return contact;
    });

    Object.assign(person!, body);

    const updatedPerson = await this.repository.save(person!);

    return updatedPerson;
  }

  async delete(id: string) {
    const person = await this.repository.findOne({
      where: {
        id,
      },
    });

    await this.repository.remove(person!);
  }

  async findAll() {
    const people = await this.repository.find();

    return people;
  }

  async findById(id: string) {
    const person = await this.repository.findOne({
      where: {
        id,
      },
      relations: {
        contacts: true,
      },
    });

    return person;
  }

  async findByName(name: string) {
    const person = await this.repository.findOne({
      where: {
        name,
      },
    });

    return person;
  }
}

export { PersonRepository };
