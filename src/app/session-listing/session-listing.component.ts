import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { AppService } from "../app.service";
import { singleEvent, eventInfo, eventSession } from 'src/app/models/singleEvent';

@Component({
  selector: "session-listing",
  templateUrl: "./session-listing.component.html",
  styleUrls: ["./session-listing.component.css"]
})
export class SessionListingComponent implements OnInit {

  public id: number = 0;
  public responseFromService: any;
  public titleFromPage: string = "Session";
  public componentLoaded: boolean = false;
  private sub: any;

  constructor(
    private location: Location,
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.sub = this.route.queryParams.subscribe(
      params => (this.id = +params["id"])
    );

    this.appService.getEventInfoInFakeCall(this.id).subscribe(
      async resultObj => {
        this.responseFromService = await this.getParsedEventObj(resultObj);
        this.componentLoaded = true;
      },
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getParsedEventObj(unparsedEventObj: any) {
    let newSessionEventArray: Array<eventSession> = [];

    unparsedEventObj.sessions.forEach((sessionObj: any) => {
      let newDateStr = new Date(parseInt(sessionObj.date)).toLocaleDateString("en-GB");
      let newSessionObj = new eventSession(newDateStr, sessionObj.availability, 0)
      newSessionEventArray.push(newSessionObj)
    })

    newSessionEventArray.sort((dataA: any, dataB: any) => {
      return dataA.dateStr - dataB.dateStr;
    })

    const eventInfoObj = new eventInfo(unparsedEventObj.event.id, unparsedEventObj.event.title, unparsedEventObj.event.subtitle, unparsedEventObj.event.image)

    const response = new singleEvent(eventInfoObj, newSessionEventArray);

    return response
  }


  onclick() {
    this.location.back();
  }


  findSession(sessionId: number): any {
    return this.responseFromService.sessionsList.filter(
      (eventObj: any) => {
        return eventObj.dateStr === sessionId;
      }
    );
  }

  restOneTicket(newValueInt: number): void {
    const eventObj = this.findSession(newValueInt);
    if (eventObj && eventObj[0].buyTicketNumber > 0) {
      eventObj[0].buyTicketNumber--;
    }
  }

  addOneTicket(newValueInt: number): void {
    const eventObj = this.findSession(newValueInt);
    if (eventObj && eventObj[0].availabilityNumber > eventObj[0].buyTicketNumber) {
      eventObj[0].buyTicketNumber++;
    }
  }
}
