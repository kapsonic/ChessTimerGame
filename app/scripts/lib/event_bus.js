class Listeners {

  constructor() {
    this.list = {};
  }

  create(eventName, id, cb) {
    if (!this.list[eventName]) {
      this.list[eventName] = {};
    }
    this.list[eventName][id] = cb;
  }

  destroy(eventName, id) {
    delete this.list[eventName][id];
  }

  fire(eventName, args) {
    for (let key in this.list[eventName]) {
      this.list[eventName][key](args);
    }
  }

}
let obj = Symbol();
class EventBus {

  static getInstance() {
    if (!this[obj]) {
      this[obj] = new EventBus();
    }

    return this[obj];
  }

  constructor() {
    this.listeners = new Listeners();
  }


  subscribe(eventName, id, cb, once) {
    this.listeners.create(eventName, id, cb);

    if (once) {
      this.unsubscribe(eventName, id);
    }
  }

  once(eventName, id, cb) {
    this.subscribe(eventName, id, cb, true);
  }

  unsubscribe(eventName, id) {
    this.listeners.destroy(eventName, id);
  }

  broadcast(eventName, args) {
    this.listeners.fire(eventName, args);
  }
}
