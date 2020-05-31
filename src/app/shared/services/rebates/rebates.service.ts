import { Injectable } from '@angular/core';
import { Rebate } from './rebates.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RebatesService {

  // URL
  private urlRebate: string = environment.baseUrl + 'v1/rebates/'

  // Data
  public rebate: Rebate
  public rebates: Rebate[] = []
  public rebatesFiltered: Rebate[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<Rebate>(this.urlRebate, body).pipe(
      tap((res) => {
        console.log('Rebate: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<Rebate[]>(this.urlRebate).pipe(
      tap((res: Rebate[]) => {
        this.rebates = res
        console.log('Rebates: ', this. rebates)
      })
    )
  }

  getSingle(id: string) {
    let urlTemp = this.urlRebate + id + '/'
    return this.http.get<Rebate>(urlTemp).pipe(
      tap((res: Rebate) => {
        this.rebate = res
        console.log('Rebate: ', this.rebate)
      })
    )
  }

  update(id: string) {
    let urlTemp = this.urlRebate + id + '/'
    return this.http.get<Rebate>(urlTemp).pipe(
      tap((res: Rebate) => {
        this.rebate = res
        console.log('Rebate: ', this.rebate)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlRebate + '?' + field + '/'
    return this.http.get<Rebate[]>(urlTemp).pipe(
      tap((res: Rebate[]) => {
        this.rebatesFiltered = res
        console.log('Rebate: ', this.rebatesFiltered )
      })
    )
  }

}
