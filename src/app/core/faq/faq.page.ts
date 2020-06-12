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


// {
//   "faqs": [
//       {
//           "question": "Bilakah permohonan Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020?",
//           "answer": "Permohonan Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020 bermula pada 1 April 2020 hingga 24 Julai 2020."
//       },
//       {
//           "question": "Bagaimana cara untuk saya membuat Permohonan Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020?",
//           "answer": "Anda boleh membuat Permohonan Skim Rebat Cukai Taksiran Bagi Pemilik Rumah\r\nMesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020 melalui:\r\n\r\nPermohonan Secara Dalam Talian\r\na. Portal Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau\r\nBerkarbon Rendah Petaling Jaya 2020, https://; atau\r\nb. Aplikasi E-Rebate dengan memuat turun di Playstore / App Store pada telefon\r\nbimbit"
//       },
//       {
//           "question": "Siapakah yang layak memohon Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020?",
//           "answer": "Pemilik rumah di Petaling Jaya"
//       },
//       {
//           "question": "Apakah kriteria kelayakan bagi pemohon Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020?",
//           "answer": "Pemohon Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020 perlulah memenuhi kelayakan kriteria seperti berikut:\r\na. Rumah mesti diduduki oleh Pemilik Asal\r\nb. Rumah yang disewakan adalah TIDAK LAYAK untuk memohon\r\nc. Tiada tunggakan cukai taksiran\r\nd. Salinan bil cukai taksiran terkini yang telah dijelaskan"
//       },
//       {
//           "question": "Apakah dokumen yang perlu dikemukakan semasa membuat permohonan Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020?",
//           "answer": "Salinan dokumen sokongan pemohon yang perlu dikemukakan adalah seperti berikut:\r\na. Kad pengenalan pemilik rumah\r\nb. Bil Air 3 bulan Terkini\r\nc. Bil Elektrik 3 bulan terkini"
//       },
//       {
//           "id": "0747219e-9216-4892-ab9f-7efa3f8612b5",
//           "question": "Saya telah menghantar permohonan Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020. Sekiranya ada perubahan maklumat, adakah saya masih boleh membuat kemas kini permohonan?",
//           "answer": "Kemaskini maklumat permohonan tidak boleh dibuat setelah permohonan Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020 dihantar. Pemohon dikehendaki mengesahkan maklumat terlebih dahulu sebelum menghantar permohonan. Permohonan yang tidak lengkap akan ditolak."
//       },
//       {
//           "question": "Bagaimana cara untuk saya mengetahui status permohonan Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020?",
//           "answer": "Semakan Status permohonan Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020 boleh dibuat seperti berikut:\r\ni. Portal Rasmi Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020, https://\r\nii. Semakan secara Aplikasi Mobile E-Rebate di Playstore bagi platform Android dan di Apps Store bagi platform iOS"
//       },
//       {
//           "question": "Bagaimanan cara saya mendapatkan maklumat terkini, membuat pertanyaan atau aduan berkaitan Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020?",
//           "answer": "Anda boleh mendapatkan maklumat terkini, membuat pertanyaan atau aduan melalui saluran berikut:\r\ni. Portal Rasmi Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020, https://\r\nii. Aplikasi Mobile E-Rebate"
//       },
//       {
//           "question": "Jika seseorang memberi maklumat palsu, apakah tindakan yang akan dikenakan?",
//           "answer": "Permohonan akan ditolak dan pemohon boleh dikenakan tindakan undang-undang."
//       },
//       {
//           "question": "Bilakah panel penilai Skim Rebat Cukai Taksiran Bagi Pemilik Rumah Mesra Alam Hijau Berkarbon Rendah Petaling Jaya 2020 akan mengadakan lawatan ke rumah pemohon?",
//           "answer": "Panel penilai hanya akan mengadakan lawatan ke rumah pemohon sekiranya bukti yang dikemukakan adalah meragukan dan memerlukan on-site verification. Pemohon akan dimaklumkan tarikh lawatan ke rumah melalui portal skim rebat atau aplikasi E-Rebate dari semasa ke semasa."
//       },
//       {
//           "question": "Adakah rayuan boleh dibuat setelah keputusan diperolehi?",
//           "answer": "Sebarang rayuan untuk meminda keputusan kelayakan rebat adalah TIDAK DIBENARKAN."
//       },
//       {
//           "question": "Bilakah rebat cukai taksiran akan dikreditkan ke dalam akaun cukai taksiran pemohon?",
//           "answer": "Rebat cukai taksiran akan dikreditkan ke dalam akaun cukai taksiran selewat-lewatnya pada penggal ke-2 (Julai – Disember) tahun 2021."
//       },
//       {
//           "question": "Adakah bil cukai taksiran penggal pertama (Jan – Jun) 2021 perlu dijelaskan jika rebat cukai masih tidak dikreditkan?",
//           "answer": "Bil penggal pertama (Jan – Jun) 2021 masih perlu dijelaskan walaupun tiada rebat cukai dikreditkan."
//       },
//       {
//           "question": "Adakah permohonan yang gagal akan dimaklumkan?",
//           "answer": "Ya, pemohon akan menerima pemakluman melalui portal Skim Rebat atau Aplikasi E-Rebate."
//       },
//       {
//           "question": "Adakah boleh memohon sub-aspek yang sama setiap tahun?",
//           "answer": "Boleh memohon sub-aspek yang sama setiap tahun dengan syarat terdapat 50% penambahbaikan yang dibuat. Walaubagaimanapun pengesahan akhir akan dibuat oleh panel penilai MBPJ."
//       }
//   ]
// }