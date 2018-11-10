import { Component, OnInit } from '@angular/core';
import { ColorService } from "../services/color.service";


@Component({
  selector: 'app-color-table',
  templateUrl: './color-table.component.html',
  styleUrls: ['./color-table.component.scss']
})
export class ColorTableComponent implements OnInit {
  public colors: Array<object>;

  constructor(public colorService: ColorService) {
    colorService.getColors()
      .subscribe(colors => this.colors = colors);
   }

  ngOnInit() {
  }

}
