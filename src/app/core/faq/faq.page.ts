import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  faqs: any[] = []
  autoClose = false

  constructor(
    private http: HttpClient
  ) {
    this.getData()
  }

  ngOnInit() {
  }

  getData() {
    this.http.get('assets/data/faq.json').subscribe(
      (res) => {
        this.faqs = res['faqs']
      }
    )
  }

  toggleSelection(index) {
    this.faqs[index].open = !this.faqs[index].open

    if (this.autoClose && this.faqs[index].open) {
        this.faqs
        .filter((faq, faqIndex) => {
           faqIndex != index
        })
        .map(
          faq => {
            faq.open = false
          }
        )
    }
  }
}
