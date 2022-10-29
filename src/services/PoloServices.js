import formatPoloName from '../utils/formatPoloName.js';

class PoloServices {
  constructor(poloRepository) {
    this.poloRepository = poloRepository;
  }

  async list() {
    const polos = await this.poloRepository.listAll();
    return polos;
  }

  async create(poloName) {
    const polos = await this.poloRepository.listAll();
    const poloAlreadyExists = polos.find(
      polo => polo.name.toLowerCase() === poloName.toLowerCase()
    );

    if (poloAlreadyExists) {
      throw new Error('Polo Already exists');
    }

    const poloNameFormatted = formatPoloName(poloName);
    await this.poloRepository.save(poloNameFormatted);
  }
}

export { PoloServices };
