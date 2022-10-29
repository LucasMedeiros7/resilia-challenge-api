import { prisma } from '../db/database.js';

class PrismaPoloRepository {
  constructor() {
    this.database = prisma;
  }

  async listAll() {
    const polos = await this.database.polo.findMany();
    return polos;
  }

  async create(name) {
    await this.database.polo.create({ data: { name } });
  }
}

export { PrismaPoloRepository };
