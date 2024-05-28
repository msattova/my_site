

export class SectionData {
  constructor(title, content, sectionNum, sectionType="normal", charaData=[]) {
    this.title = title;
    this.content = content;
    this.sectionNum = sectionNum;
    this.sectionType = sectionType;
    this.charaData = charaData;
  }
  viewContent(){
    console.log(this);
  }
}
