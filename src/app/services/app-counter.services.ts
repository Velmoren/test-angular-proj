import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({ providedIn: 'root' })
export class AppCounterServices {
  counter = 0

  constructor(private logService: LogService) {

  }

  increase() {
    this.logService.log('increase counter...')
    this.logService.log(this.logService.str)
    this.counter++
  }

  decrease() {
    this.logService.log('decrease counter...')
    if (this.counter > 0) this.counter--
  }
}
