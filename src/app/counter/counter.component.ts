import { Component } from '@angular/core';
import {AppCounterServices} from "../services/app-counter.services";
import {LocalCounterService} from "../services/local-counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService]
})
export class CounterComponent {

  constructor(
    public appCounterService: AppCounterServices,
    public localCounterService: LocalCounterService
  ) { }
}
