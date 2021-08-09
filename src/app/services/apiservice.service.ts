import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {GetCardModel, Parameters} from '../models/GetCardModel';
import { GetCardResponseModel } from '../models/GetCardResponseModel';

@Injectable({
    providedIn: 'root'
})

export class ApiserviceService{
    baseURL: string="https://4001.hoteladvisor.net/"

    constructor(private http: HttpClient){}
    
    // findCard(model: GetCardModel): Observable<[[GetCardResponseModel]]>{
    //     return this.http.post<[[GetCardResponseModel]]>(this.baseURL,model);
    // }
}
export interface RootObject {
    Success: number;
    RESNAMEID: number;
    GUESTNAME: string;
    GUESTSURNAME: string;
    AGENCYID: number;
    AGENCY: string;
    ROOMTYPEID: number;
    ROOMTYPE: string;
    BOARDTYPEID: number;
    BOARDTYPE: string;
    POSDISCOUNTGROUPID?: any;
    POSDISCOUNTGROUP?: any;
    BALANCE: number;
    LOADED: number;
    REFUND: number;
    SPENT: number;
    CURRENCYID: number;
    CARDNO: string;

    
}
export interface ApiSPOptions{
    Action:string;
    Object:string;
    Parameters?:{
        [CARDNO: string]: any,
        [HOTELID: number]: any
    };
    

}
