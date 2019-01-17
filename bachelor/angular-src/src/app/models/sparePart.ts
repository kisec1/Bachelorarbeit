export class SparePart {

  constructor(public articleNr: string,
              public description: string,
              public serial: string,
              public supplier: string,
              public amount: number,
              public price: number,
              public chargeable: boolean
  ){}
}
