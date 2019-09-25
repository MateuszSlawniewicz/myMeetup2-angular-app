import {Component, OnInit} from '@angular/core';
import {HttpClientService, Event} from '../service/httpclient.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
})
export class EventComponent implements OnInit {
  events: Event[];

  constructor(
    private httpClientService: HttpClientService
  ) {
  }

  ngOnInit() {
    this.httpClientService.getEvents().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.events = response;
  }

}
