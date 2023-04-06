// export interface ApiOptions {
//   method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
//   headers?: Record<string, string>;
//   [key: string]: any;
// }

// export interface ApiGetOptions extends ApiOptions {
//   query?: Record<string, string | number | boolean>;
// }

// export interface ApiPostOptions extends ApiOptions {
//   data?: Record<string, any> | Array<any>;
// }

// export interface ApiServiceInterface {
//   get<T = any>(url: string, options?: ApiGetOptions): Promise<T>;
//   post<T = any>(url: string, options?: ApiPostOptions): Promise<T>;
//   put<T = any>(url: string, options?: ApiPostOptions): Promise<T>;
//   delete<T = any>(url: string, options?: ApiOptions): Promise<T>;
// }
import Services from "./services";

export interface IServicesProvider {
  services: Services
  children: React.ReactNode
}

export interface ApiServiceRequest {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: any;
  options?: any;
  body?: any;
}

export interface IApi {
  baseUrl: string
}

export interface IStoreRedux {

}


export interface IConfig {
  api: IApi;
  store: IStoreRedux;
}

export interface FetchTableData {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
  id: string
}

export interface IUser {
  username: string;
  password: string
}