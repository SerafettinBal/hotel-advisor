import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCardResponseModel } from 'src/app/models/GetCardResponseModel';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  model: GetCardResponseModel | undefined
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {  
    console.log(this.route.snapshot.params) 
  }
}
 