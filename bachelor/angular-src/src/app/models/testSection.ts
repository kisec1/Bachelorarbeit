import {TestPoint} from "./testPoint";

export class TestSection {

  public sectionTitle: TestPoint;
  public testPoints: TestPoint[] = new Array<TestPoint>();

  public validationCheck() {
    let result = true;
    for(let testPoint of this.testPoints){
      if(testPoint.validationCheck() == false){
        return false
      }
      if(testPoint.validationCheck() == null){
        result = null;
      }
    }
    return result;
  }

  constructor(testSection) {
    this.sectionTitle = new TestPoint(testSection.sectionTitle);
    for(let testPoint of testSection.testPoints){
      this.testPoints.push(new TestPoint(testPoint));
    }
  }
}
