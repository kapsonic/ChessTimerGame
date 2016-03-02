/**
 * Created by Kapil on 26/2/16.
 */
// Player Super class
class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  harm() {
    console.error('Not defined');
  }

  play() {
    console.error('Move not defined');
    return false;
  }

  reset() {
    console.error('Not defined');
  }
}
