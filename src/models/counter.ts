import {
  action,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
} from 'mobx';

export class Counter {
  value: number = 0;

  constructor() {
    // tell explicitly which one is observavle, action and computed using
    // makeObservable(this, {
    //   value: observable,
    //   increment: action,
    //   decrement: action,
    //   square: computed,
    // });

    // Make the value observable and increment and decrement as action automatically using
    makeAutoObservable(this)
  }

  increment = () => {
    this.value++;
  };

  decrement = () => {
    this.value--;
  };

  get square() {
    return this.value * this.value;
  }
}
