import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCardResponseModel } from 'src/app/models/GetCardResponseModel';
import { GetCardDetailsModel } from 'src/app/models/GetCardDetailsModel';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


  model: GetCardResponseModel = new GetCardResponseModel;
  baseURL: string = "https://4001.hoteladvisor.net/"

  model2: Array<GetCardDetailsModel> = [];
  cardno: String = "";

  constructor(private route: ActivatedRoute, private service: ApiserviceService, private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe( i => {
      this.cardno = i["cardNo"]
    })

    var request = {
      "Action": "Execute",
    "Object":"SP_POS_FINDENTRYCARD",
        "Parameters": {
            "HOTELID": 20854,
            "CARDNO": this.cardno
      }
    };

    

    this.service.findCard(request).subscribe(model => {
      this.model = model[0][0];

    })




  }

  step = 0;

 

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  getCardDetails() {

    var request = {
      "Action": "Execute",
      "Object": "SP_POS_SHOWFOLIO_ENTRYCARD",
      "Parameters": {
        "RESNAMEID": this.model.RESNAMEID
      }
    };

    this.service.findCardDetails(request).subscribe(model2 => {
      this.model2 = model2[0];
      

    })

  }

  getTotalCost() {
    return this.model2.map(t => t.TOTAL).reduce((acc, value) => acc + value, 0);
  }

}
