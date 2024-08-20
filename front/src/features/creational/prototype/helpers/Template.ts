export interface TemplateModel {
  id: string;
  title: string;
  helper: string;
  leftContent: string;
  rightContent: string;
}

export class Template {
  public _id: string;
  public _title: string;
  public _helper: string;
  public _leftContent: string;
  public _rightContent: string;

  public getTemplate(): TemplateModel {
    return {
      id: this._id,
      title: this._title,
      helper: this._helper,
      leftContent: this._leftContent,
      rightContent: this._rightContent,
    };
  }

  public setTemplate({
    id,
    title,
    helper,
    leftContent,
    rightContent,
  }: TemplateModel): void {
    this._id = id;
    this._title = title;
    this._helper = helper;
    this._leftContent = leftContent;
    this._rightContent = rightContent;
  }
}
