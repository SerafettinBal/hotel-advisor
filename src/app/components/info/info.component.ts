import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCardResponseModel } from 'src/app/models/GetCardResponseModel';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  model: GetCardResponseModel = new GetCardResponseModel;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 

    this.route.paramMap.subscribe(i => { 
      let x = i.get("model")
      if(x != null) {
        this.model = JSON.parse(x)
      }  
      console.log(this.model) 
    })
    
  }
}
 