import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


export class Event {
  constructor(public id: number,
              public title: string,
              public description: string,
              public userDto: string,
              public start: string,
              public end: string,
              public participants: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEvents() {
    console.log('test call');
    return this.httpClient.get<Event[]>('http://localhost:8080/events');
  }
}
