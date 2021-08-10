import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service'; 
import { GetCardResponseModel } from 'src/app/models/GetCardResponseModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  baseURL: string="https://4001.hoteladvisor.net/" 
  model: GetCardResponseModel | undefined
  
  constructor(private service: ApiserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  getCard(cardNo:string){
   
  var request =  {
      "Action": "Execute",
      "Object":"SP_POS_FINDENTRYCARD",
      "Parameters": {
              "HOTELID": 20854,
              "CARDNO": cardNo
      }
  };
 
    this.service.findCard(request).subscribe(model=>{
      this.model = model[0][0]
      this.router.navigate(['/info', this.model]);
    })
    


  }


}