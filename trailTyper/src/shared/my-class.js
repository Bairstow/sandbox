class MyClass {
  constructor(name) {
    this.name = name;
  }

  echo() {
    return `myClass echo call for ${this.name}`;
  }

  echoInConsole() {
    /* eslint-disable no-console */
    console.log(this.echo());
    /* eslint-enable no-console */
  }
}

export default MyClass;
