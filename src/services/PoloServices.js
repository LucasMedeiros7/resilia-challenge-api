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
    const name = formatPoloName(poloName);
    const polos = await this.poloRepository.listAll();
    const poloAlreadyExists = polos.find(polo => polo.name === name);

    if (poloAlreadyExists) {
      throw new Error('Polo Already exists');
    }

    await this.studentRepository.save(name);
  }
}

export { PoloServices };
