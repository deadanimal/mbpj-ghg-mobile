import { Injectable } from '@angular/core';
import { EvaluationSchedule } from './evaluation-schedules.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class scheduleschedulesService {

  // URL
  private urlSchedule: string = environment.baseUrl + 'v1/evaluation-schedules/'

  // Data
  public schedule: EvaluationSchedule
  public schedules: EvaluationSchedule[] = []
  public schedulesFiltered: EvaluationSchedule[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<EvaluationSchedule>(this.urlSchedule, body).pipe(
      tap((res) => {
        console.log('Evaluation schedule: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<EvaluationSchedule[]>(this.urlSchedule).pipe(
      tap((res: EvaluationSchedule[]) => {
        this.schedules = res
        console.log('Evaluation schedule: ', this. schedules)
      })
    )
  }

  getSingle(id: string) {
    let urlTemp = this.urlSchedule + id + '/'
    return this.http.get<EvaluationSchedule>(urlTemp).pipe(
      tap((res: EvaluationSchedule) => {
        this.schedule = res
        console.log('Evaluation schedule: ', this.schedule)
      })
    )
  }

  update(id: string) {
    let urlTemp = this.urlSchedule + id + '/'
    return this.http.get<EvaluationSchedule>(urlTemp).pipe(
      tap((res: EvaluationSchedule) => {
        this.schedule = res
        console.log('Evaluation schedule: ', this.schedule)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlSchedule + '?' + field + '/'
    return this.http.get<EvaluationSchedule[]>(urlTemp).pipe(
      tap((res: EvaluationSchedule[]) => {
        this.schedulesFiltered = res
        console.log('Evaluation schedules: ', this.schedulesFiltered)
      })
    )
  }

}
