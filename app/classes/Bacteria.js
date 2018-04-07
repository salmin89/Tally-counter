class Bacteria {
  constructor(name, hotkey = null) {
    this.name = name;
    this.counter = 0;
    // if hotkey, this.setHotKey(hotkey)
  }

  increment() {
    console.log("incrementing");
    this.counter++;
  };

  decrement() {
    if (this.counter == 0) return;
    this.counter--;
  };

  setHotKey(key) {
    // Doesn't affect this instance, it only points to the global hotkey object
  }

}

// export default Bacteria;