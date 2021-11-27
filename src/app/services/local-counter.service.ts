import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
  counter = 0

  increase() {
    this.counter++
  }

  decrease() {
    if (this.counter > 0) this.counter--
  }
}
