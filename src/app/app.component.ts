import {Component} from '@angular/core';
import {AppCounterServices} from "./services/app-counter.services";
import {LocalCounterService} from "./services/local-counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})

export class AppComponent {
  constructor(
    public appCounterService: AppCounterServices,
    public localCounterService: LocalCounterService
  ) {

  }
}
