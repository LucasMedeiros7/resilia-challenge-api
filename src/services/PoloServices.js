import formatPoloName from '../utils/formatPoloName.js';
import normalizeName from '../utils/normalizeName.js';

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
      polo => normalizeName(polo.name) === normalizeName(poloName)
    );
    if (poloAlreadyExists) {
      throw new Error('Polo Already exists');
    }
    const poloNameFormatted = formatPoloName(poloName);
    await this.poloRepository.save(poloNameFormatted);
  }
}

export { PoloServices };
