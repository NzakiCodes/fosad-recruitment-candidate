export interface IResponse<T = null> {
  success: boolean;
  data: T;
  code?: number;
}
