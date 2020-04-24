export class DataValue {
    Timestamp: string
    Value: number
}

export interface DataAll {
    result : DataValue[],
    message : string
}
