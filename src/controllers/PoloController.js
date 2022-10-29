import { PrismaPoloRepository } from '../infra/repositories/PrismaPoloRepository.js';
import { PoloServices } from '../services/PoloServices.js';

export function PoloController() {
  const poloRepository = new PrismaPoloRepository();
  const poloServices = new PoloServices(poloRepository);

  return {
    async create(request, response) {
      const { name } = request.body;
      try {
        await poloServices.create(name);
        return response.status(201).json({ name });
      } catch (err) {
        return response.status(400).json({ message: err.message });
      }
    },

    async list(_request, response) {
      const polos = await poloServices.list();
      if (!polos) {
        return response.status(404).json({ message: 'Polos not found' });
      }
      return response.json(polos);
    }
  };
}
