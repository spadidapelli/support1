import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  KBArticleList$ = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }


  getKBProductInfo() {
    return this.http.get('/assets/mocks/KB-product-info.json');
  }

  getKBArticleList() {
    this.http.get('/assets/kbList.json').subscribe((data) => {
      if (data) {
        this.KBArticleList$.next(data);
      }
    });
  }
}
