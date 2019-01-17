export class Work {

  constructor(public service: string,
              public date: Date,
              public technician: string,
              public workload: number,
              public travelTime: number,
              public chargeable: boolean
              ){}
}
