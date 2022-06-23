import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private httpClient: HttpClient) { }

  public headerTitle = new BehaviorSubject("Catalog");

  getAllEventsInFakeCall() {
    const urlToGetDataStr: string = "./assets/data/events.json";
    return this.httpClient.get(urlToGetDataStr);
  }

  getEventInfoInFakeCall(eventId: number) {
    const urlToGetDataStr: string = "./assets/data/event-info-" + eventId + ".json";
    return this.httpClient.get(urlToGetDataStr);
  }

  setNewHeaderTitle(newHeaderTitle: string): void {
    this.headerTitle.next(newHeaderTitle);
  }
}
