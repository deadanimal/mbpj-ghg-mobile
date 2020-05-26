import { Injectable } from '@angular/core';
import { Application } from './applications.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  // URL
  private urlApplication: string = environment.baseUrl + 'v1/applications/'

  // Data
  public application: Application
  public applications: Application[] = []
  public applicationsFiltered: Application[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<Application>(this.urlApplication, body).pipe(
      tap((res) => {
        console.log('Application: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<Application[]>(this.urlApplication).pipe(
      tap((res: Application[]) => {
        this.applications = res
        console.log('Application: ', this. applications)
      })
    )
  }

  getSingle(id: string) {
    let urlTemp = this.urlApplication + id + '/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        this.application = res
        console.log('Application: ', this.application)
      })
    )
  }

  update(id: string) {
    let urlTemp = this.urlApplication + id + '/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        this.application = res
        console.log('Application: ', this.application)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlApplication + '?' + field + '/'
    return this.http.get<Application[]>(urlTemp).pipe(
      tap((res: Application[]) => {
        this.applicationsFiltered = res
        console.log('Application: ', this.applicationsFiltered)
      })
    )
  }

  draft(id: string) {
    let urlTemp = this.urlApplication + id + '/draft/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        console.log('Application: ', res)
      })
    )
  }

  submit(id: string) {
    let urlTemp = this.urlApplication + id + '/submit/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        console.log('Application: ', res)
      })
    )
  }

  evaluate(id: string) {
    let urlTemp = this.urlApplication + id + '/evaluate/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        console.log('Application: ', res)
      })
    )
  }

}
