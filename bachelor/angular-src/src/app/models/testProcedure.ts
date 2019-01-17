import {TestSection} from "./testSection";

export class TestProcedure {

  public model: string;
  public version: string;
  public testSections: Array<TestSection> = new Array<TestSection>();


  constructor() {
  }

  validationCheck() {
    let result = true;
    for (let section of this.testSections) {
      if(section.validationCheck() == false) return false;
      if(section.validationCheck() == null) result = null;
    }
    return result;
  }

}
