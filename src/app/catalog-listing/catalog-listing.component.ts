import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "catalog-listing",
  templateUrl: "./catalog-listing.component.html",
  styleUrls: ["./catalog-listing.component.scss"]
})
export class CatalogListingComponent implements OnInit {
  responseFromService: any;
  public headerTitle: string = "Catalog";
  constructor(private appService: AppService) { }

  async ngOnInit(): Promise<void> {
    this.appService.setNewHeaderTitle(this.headerTitle);
    (await this.appService.getAllEventsInFakeCall()).subscribe((resultList: any) => {
      this.responseFromService = this.getParsedEventsList(resultList);
    })
  }


  getParsedEventsList(unparsedEventList: any) {
    let newParsedEventList: Array<any> = [];
    unparsedEventList.forEach((unparsedEventObj: any) => {
      let newParsedEventObj: any = {};
      newParsedEventObj['idStr'] = unparsedEventObj.id;
      newParsedEventObj['titleStr'] = unparsedEventObj.title;
      newParsedEventObj['subtitleStr'] = unparsedEventObj.subtitle;
      newParsedEventObj['imageStr'] = unparsedEventObj.image;
      newParsedEventObj['placeStr'] = unparsedEventObj.place;
      newParsedEventObj['startDateStr'] = new Date(parseInt(unparsedEventObj.startDate)).toLocaleDateString(
        "en-GB"
      );;
      newParsedEventObj['endDateStr'] = new Date(parseInt(unparsedEventObj.endDate)).toLocaleDateString(
        "en-GB"
      );;;
      newParsedEventObj['descriptionStr'] = unparsedEventObj.description;
      newParsedEventList.push(newParsedEventObj)
    })

    return newParsedEventList;
  }

}
