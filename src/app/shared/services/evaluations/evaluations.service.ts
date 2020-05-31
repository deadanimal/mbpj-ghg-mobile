import { Injectable } from '@angular/core';
import { Evaluation } from './evaluations.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  // URL
  private urlEvaluation: string = environment.baseUrl + 'v1/evaluations/'

  // Data
  public evaluation: Evaluation
  public evaluations: Evaluation[] = []
  public evaluationsFiltered: Evaluation[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<Evaluation>(this.urlEvaluation, body).pipe(
      tap((res) => {
        console.log('Evaluation: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<Evaluation[]>(this.urlEvaluation).pipe(
      tap((res: Evaluation[]) => {
        this.evaluations = res
        console.log('Evaluation: ', this. evaluations)
      })
    )
  }

  getSingle(id: string) {
    let urlTemp = this.urlEvaluation + id + '/'
    return this.http.get<Evaluation>(urlTemp).pipe(
      tap((res: Evaluation) => {
        this.evaluation = res
        console.log('Evaluation: ', this.evaluation)
      })
    )
  }

  update(id: string) {
    let urlTemp = this.urlEvaluation + id + '/'
    return this.http.get<Evaluation>(urlTemp).pipe(
      tap((res: Evaluation) => {
        this.evaluation = res
        console.log('Evaluation: ', this.evaluation)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlEvaluation + '?' + field + '/'
    return this.http.get<Evaluation[]>(urlTemp).pipe(
      tap((res: Evaluation[]) => {
        this.evaluationsFiltered = res
        console.log('Evaluation: ', this.evaluationsFiltered)
      })
    )
  }

}
