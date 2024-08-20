import { TemplateModel } from './Template';

class TemplateManager {
  public template: TemplateModel;

  updateTemplate(template: TemplateModel): void {
    this.template = {
      id: template.id,
      title: template.title,
      helper: template.helper,
      leftContent: template.leftContent,
      rightContent: template.rightContent,
    };
  }
  getTemplate(): TemplateModel {
    return this.template;
  }
}

export default new TemplateManager();
