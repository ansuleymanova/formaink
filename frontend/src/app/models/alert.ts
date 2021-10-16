export class Alert {
  id: string;
  type: AlertType;
  message: string;
  autoClose: boolean;
  keepAfterRouteChange?: boolean;
  fade: boolean;

  constructor(init?:Partial<Alert>) {
    Object.assign(this, init);
  }
}

export enum AlertType {
  Success = 'Success',
  Info = 'Info',
  Warn = 'Warn',
  Error = 'Error'
}
