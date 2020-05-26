import { Injectable } from '@angular/core';
import { House } from './houses.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  // URL
  private urlHouse: string = environment.baseUrl + 'v1/houses/'

  // Data
  public house: House
  public houses: House[] = []
  public housesFiltered: House[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<House>(this.urlHouse, body).pipe(
      tap((res) => {
        console.log('House: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<House[]>(this.urlHouse).pipe(
      tap((res: House[]) => {
        this.houses = res
        console.log('House: ', this. houses)
      })
    )
  }

  getSingle(id: string) {
    let urlTemp = this.urlHouse + id + '/'
    return this.http.get<House>(urlTemp).pipe(
      tap((res: House) => {
        this.house = res
        console.log('House: ', this.house)
      })
    )
  }

  update(id: string) {
    let urlTemp = this.urlHouse + id + '/'
    return this.http.get<House>(urlTemp).pipe(
      tap((res: House) => {
        this.house = res
        console.log('House: ', this.house)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlHouse + '?' + field + '/'
    return this.http.get<House[]>(urlTemp).pipe(
      tap((res: House[]) => {
        this.housesFiltered = res
        console.log('House: ', this.housesFiltered )
      })
    )
  }

}
