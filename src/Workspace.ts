@SelfName("teste")
export class Workspace<T> {
  blocks: Array<T>;

  constructor() {
    this.blocks = new Array<T>();
  }
}

function SelfName(nameInit: string) {
  return function(classFn: Function) {
    classFn.prototype.name = nameInit;
  };
}
