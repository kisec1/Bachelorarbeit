export class TestPoint {

  public nr: string;
  public description_de: string;
  public description_en: string;
  public dimension?: string;
  public minValue?: any;
  public maxValue?: any;
  public result: any;
  public comment: string;

  public validationCheck(): boolean{
    if(this.result == null || !this.result) return null;
    if(this.dimension == 'i.O.'){
      return this.result == 'i.O.' || this.result == 'N.V.';
    }
    return this.result >= this.minValue && this.result <= this.maxValue;
  }

  constructor(testPoint) {
    this.nr = testPoint.nr;
    this.dimension = testPoint.dimension;
    this.description_en = testPoint.description_en;
    this.description_de = testPoint.description_de;
    this.minValue = testPoint.minValue;
    this.maxValue = testPoint.maxValue;
    if(testPoint.result) this.result = testPoint.result;
    if(testPoint.comment) this.comment = testPoint.comment;
  }
}
