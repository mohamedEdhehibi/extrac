import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-band-cass',
  templateUrl: './band-cass.component.html',
  styleUrls: ['./band-cass.component.css']
})
export class BandCassComponent implements OnInit {
  date_E!: Date;
 heure_d!:number;
 qte_o!:number;
 qte_hkl!:number;
  ajou!:[{}];
  empty=true;
  bandCass =[{date_E:this.date_E, heure_d:this.heure_d, qte_o:this.qte_o, qte_hkl:this.qte_hkl }];
  constructor() { }

  ngOnInit(): void {
  }
  addbandres() {
    this.bandCass.push ({ date_E:this.date_E, heure_d:this.heure_d, qte_o:this.qte_o, qte_hkl:this.qte_hkl});
    this.empty=false;
    return this.bandCass;
  }
    addaff() {
      return this.bandCass;
    }
}
