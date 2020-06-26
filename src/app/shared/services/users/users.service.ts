import { Injectable } from '@angular/core';
import { User } from './users.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL
  private urlUser: string = environment.baseUrl + 'v1/users/'

  // Data
  public user: User
  public userCurrent: User
  public users: User[] = []
  public usersFiltered: User[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<User>(this.urlUser, body).pipe(
      tap((res) => {
        console.log('User: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<User[]>(this.urlUser).pipe(
      tap((res: User[]) => {
        this.users = res
        console.log('Users: ', this. users)
      })
    )
  }

  getSingle(id: string) {
    let urlTemp = this.urlUser + id + '/'
    return this.http.get<User>(urlTemp).pipe(
      tap((res: User) => {
        this.user = res
        console.log('User: ', this.user)
      })
    )
  }

  getCurrentUser(id: string) {
    let urlTemp = this.urlUser + id + '/'
    return this.http.get<User>(urlTemp).pipe(
      tap((res: User) => {
        this.userCurrent = res
        console.log('User: ', this.userCurrent)
      })
    )
  }

  update(id: string, body: Form) {
    let urlTemp = this.urlUser + id + '/'
    return this.http.patch<User>(urlTemp, body).pipe(
      tap((res: User) => {
        this.user = res
        console.log('User: ', this.user)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlUser + '?' + field + '/'
    return this.http.get<User[]>(urlTemp).pipe(
      tap((res: User[]) => {
        this.usersFiltered = res
        console.log('Users: ', this.usersFiltered )
      })
    )
  }
  
}
