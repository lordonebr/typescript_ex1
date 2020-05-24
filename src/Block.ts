export interface IBlock {
  add(): void;
  remove(): void;
}

export class Block implements IBlock {
  add() {}
  remove() {}
}
