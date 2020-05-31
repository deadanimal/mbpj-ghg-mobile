import { Injectable } from '@angular/core';
import { Ticket } from './tickets.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  // URL
  private urlTicket: string = environment.baseUrl + 'v1/tickets/'
  private urlTicketMessage: string = environment.baseUrl + 'v1/tickets/'

  // Data
  public ticket: Ticket
  public tickets: Ticket[] = []
  public ticketsFiltered: Ticket[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<Ticket>(this.urlTicket, body).pipe(
      tap((res) => {
        console.log('Ticket: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<Ticket[]>(this.urlTicket).pipe(
      tap((res: Ticket[]) => {
        this.tickets = res
        console.log('Tickets: ', this. tickets)
      })
    )
  }

  getSingle(id: string) {
    let urlTemp = this.urlTicket + id + '/'
    return this.http.get<Ticket>(urlTemp).pipe(
      tap((res: Ticket) => {
        this.ticket = res
        console.log('Ticket: ', this.ticket)
      })
    )
  }

  update(id: string) {
    let urlTemp = this.urlTicket + id + '/'
    return this.http.get<Ticket>(urlTemp).pipe(
      tap((res: Ticket) => {
        this.ticket = res
        console.log('Ticket: ', this.ticket)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlTicket + '?' + field + '/'
    return this.http.get<Ticket[]>(urlTemp).pipe(
      tap((res: Ticket[]) => {
        this.ticketsFiltered = res
        console.log('Tickets: ', this.ticketsFiltered )
      })
    )
  }

}
