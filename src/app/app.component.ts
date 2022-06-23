import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  headerTitleString: string = '';

  constructor(private mainService: AppService) { }

  ngOnInit() {
    this.mainService.headerTitle.subscribe(newTitleStr => (this.headerTitleString = newTitleStr));
  }
}
