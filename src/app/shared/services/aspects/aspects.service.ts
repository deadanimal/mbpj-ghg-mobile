import { Injectable } from '@angular/core';
import { Aspect } from './aspects.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AspectsService {

  // URL
  private urlAspect: string = environment.baseUrl + 'v1/aspects/'

  // Data
  public aspect: Aspect
  public aspects: Aspect[] = []
  public aspectsFiltered: Aspect[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<Aspect>(this.urlAspect, body).pipe(
      tap((res) => {
        console.log('Aspect: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<Aspect[]>(this.urlAspect).pipe(
      tap((res: Aspect[]) => {
        this.aspects = res
        console.log('Aspect: ', this. aspects)
      })
    )
  }

  getSingle(id: string) {
    let urlTemp = this.urlAspect + id + '/'
    return this.http.get<Aspect>(urlTemp).pipe(
      tap((res: Aspect) => {
        this.aspect = res
        console.log('Aspect: ', this.aspect)
      })
    )
  }

  update(id: string) {
    let urlTemp = this.urlAspect + id + '/'
    return this.http.get<Aspect>(urlTemp).pipe(
      tap((res: Aspect) => {
        this.aspect = res
        console.log('Aspect: ', this.aspect)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlAspect + '?' + field + '/'
    return this.http.get<Aspect[]>(urlTemp).pipe(
      tap((res: Aspect[]) => {
        this.aspectsFiltered = res
        console.log('Aspect: ', this.aspectsFiltered)
      })
    )
  }

}
