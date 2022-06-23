import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

import { events } from 'src/app/models/events';
@Component({
  selector: "catalog-listing",
  templateUrl: "./catalog-listing.component.html",
  styleUrls: ["./catalog-listing.component.scss"]
})
export class CatalogListingComponent implements OnInit {
  responseFromService: Array<events> = [];
  public headerTitle: string = "Catalog";
  constructor(private appService: AppService) { }

  async ngOnInit(): Promise<void> {
    this.appService.setNewHeaderTitle(this.headerTitle);
    (await this.appService.getAllEventsInFakeCall()).subscribe((resultList: any) => {
      this.responseFromService = this.getParsedEventsList(resultList);
    })
  }


  getParsedEventsList(unparsedEventList: any) {
    let newParsedEventList: Array<events> = [];
    unparsedEventList.forEach((unparsedEventObj: any) => {
      const startDateStr = new Date(parseInt(unparsedEventObj.startDate)).toLocaleDateString(
        "en-GB"
      );
      const finishDateStr = new Date(parseInt(unparsedEventObj.endDate)).toLocaleDateString(
        "en-GB"
      );

      let newParsedEventObj = new events(unparsedEventObj.id, unparsedEventObj.title, unparsedEventObj.subtitle, unparsedEventObj.image, unparsedEventObj.place, startDateStr, finishDateStr, unparsedEventObj.description);

      newParsedEventList.push(newParsedEventObj)
    })

    return newParsedEventList;
  }

}
