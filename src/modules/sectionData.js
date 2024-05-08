

export class SectionData {
  constructor(title, content, isPreplay = false, charaData=[]) {
    this.title = title;
    this.isPreplay = isPreplay;
    this.content = content;
    this.charaData = charaData;
  }
  viewContent(){
    console.log(this);
  }
}
