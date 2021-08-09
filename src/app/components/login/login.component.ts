import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { GetCardModel, Parameters } from 'src/app/models/GetCardModel';
import { GetCardResponseModel } from 'src/app/models/GetCardResponseModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  requestModel: GetCardModel=new GetCardModel("Execute","SP_POS_FINDENTRYCARD",new Parameters())
  
  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
  }

  // getCard(cardNo:string){

  //   this.requestModel.Parameters.CARDNO= Number(cardNo)
  //   this.service.findCard(this.requestModel).subscribe(model=>{
  //     console.log(model)
  //   })
  // }

}