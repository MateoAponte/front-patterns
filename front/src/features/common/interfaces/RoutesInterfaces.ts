export interface RoutesModel {
  path: string;
  alias: string;
  nested?: RoutesModel[];
  component?: React.FC;
}
