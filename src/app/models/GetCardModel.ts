export class GetCardModel {
    Action: string
    Object : string
    Parameters: Parameters

    constructor(Action: string, Object: string, Parameters: Parameters){
        this.Action = Action
        this.Object = Object
        this.Parameters = Parameters
    }
    

}

export class Parameters {
    HOTELID : number = 20854
    CARDNO : number = 112233
}