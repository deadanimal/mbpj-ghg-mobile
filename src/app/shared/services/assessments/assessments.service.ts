import { Injectable } from '@angular/core';
import { Assessment } from './assessments.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AssessmentsService {

   // URL
   private urlAssessment: string = environment.baseUrl + 'v1/assessments/'

   // Data
   public assessment: Assessment
   public assessments: Assessment[] = []
   public assessmentsFiltered: Assessment[] = []
 
   constructor(
     private http: HttpClient
   ) { }
 
   create(body: Form) {
     return this.http.post<Assessment>(this.urlAssessment, body).pipe(
       tap((res) => {
         console.log('Assessment: ', res)
       })
     )
   }
 
   getAll() {
     return this.http.get<Assessment[]>(this.urlAssessment).pipe(
       tap((res: Assessment[]) => {
         this.assessments = res
         console.log('Assessment: ', this. assessments)
       })
     )
   }
 
   getSingle(id: string) {
     let urlTemp = this.urlAssessment + id + '/'
     return this.http.get<Assessment>(urlTemp).pipe(
       tap((res: Assessment) => {
         this.assessment = res
         console.log('Assessment: ', this.assessment)
       })
     )
   }
 
   update(id: string) {
     let urlTemp = this.urlAssessment + id + '/'
     return this.http.get<Assessment>(urlTemp).pipe(
       tap((res: Assessment) => {
         this.assessment = res
         console.log('Assessment: ', this.assessment)
       })
     )
   }
 
   filter(field: string) {
     let urlTemp = this.urlAssessment + '?' + field + '/'
     return this.http.get<Assessment[]>(urlTemp).pipe(
       tap((res: Assessment[]) => {
         this.assessmentsFiltered = res
         console.log('Assessment: ', this.assessmentsFiltered)
       })
     )
   }

}
