import { Component, OnInit } from '@angular/core';
import { ColorService } from "../services/color.service";


@Component({
  selector: 'app-color-table',
  templateUrl: './color-table.component.html',
  styleUrls: ['./color-table.component.scss']
})
export class ColorTableComponent implements OnInit {

  public toSort: boolean;

  public colors: Array<object>;

  constructor(public colorService: ColorService) {
  this.toSort = true;
    colorService.getColors()
      .subscribe(colors => {
        this.colors = colors;
      });

    
   }

  ngOnInit() {
  }
  
  sorting(){
    if(this.toSort) {
      this.colors.sort((a, b) => (a.hexValue.slice(1) > b.hexValue.slice(1)) ? -1 : 1);
      this.toSort = !this.toSort;
    } else {
      this.colors = this.colors.reverse();

    }
  }

}
