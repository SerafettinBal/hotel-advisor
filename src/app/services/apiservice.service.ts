import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"; 
import { GetCardResponseModel } from '../models/GetCardResponseModel';
import { GetCardDetailsModel } from '../models/GetCardDetailsModel';
@Injectable({
    providedIn: 'root'
})

export class ApiserviceService{
    baseURL: string="https://4001.hoteladvisor.net/"

    constructor(private http: HttpClient){}
    
    findCard(json:any): Observable<[[GetCardResponseModel]]>{
        return this.http.post<[[GetCardResponseModel]]>(this.baseURL,json);
    }

    findCardDetails(json:any): Observable<[[GetCardDetailsModel]]>{
        return this.http.post<[[GetCardDetailsModel]]>(this.baseURL,json);
    }
}