import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()

export class ColorService {

  constructor(private httpClient: HttpClient) { }

  private colorUrl= "api/colors";

  public getColors(): Observable<Array<object>> {
    return this.httpClient.get<object[]>(this.colorUrl);
  }
}
