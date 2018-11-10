import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const colors = [{
      "colorName":"red",
      "hexValue":"#f00"
      },
      {
      "colorName":"green",
      "hexValue":"#0f0"
      },
      {
      "colorName":"blue",
      "hexValue":"#00f"
      },
      {
      "colorName":"cyan",
      "hexValue":"#0ff"
      },
      {
      "colorName":"magenta",
      "hexValue":"#f0f"
      },
      {
      "colorName":"yellow",
      "hexValue":"#ff0"
      },
      {
      "colorName":"black",
      "hexValue":"#000"
      }
    ];
    return {colors};
  }
  constructor() { }
}
