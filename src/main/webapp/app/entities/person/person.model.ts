export interface IPerson {
  id?: number;
  address?: string;
  email?: string;
  password?: string;
  name?: string;
}

export class Person implements IPerson {
  constructor(public id?: number, public address?: string, public email?: string, public password?: string, public name?: string) {}
}

export function getPersonIdentifier(person: IPerson): number | undefined {
  return person.id;
}
