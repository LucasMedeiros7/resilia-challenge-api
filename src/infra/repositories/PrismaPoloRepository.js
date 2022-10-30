import { prisma } from '../db/database.js';

class PrismaPoloRepository {
  constructor() {
    this.database = prisma;
  }

  async listAll() {
    const polos = await this.database.polo.findMany({
      include: { students: true }
    });
    return polos;
  }

  async save(name) {
    await this.database.polo.create({ data: { name } });
  }
}

export { PrismaPoloRepository };
