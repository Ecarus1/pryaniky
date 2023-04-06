import { ApiServiceRequest } from "../interface";
import { IApi } from "../interface";
import Services from "../services";

class ApiService {
  private services: Services;
  private config: IApi;
  private defaultHeaders: any;

  /**
   * @param services {Services} Менеджер сервисов
   * @param config {Object}
   */
  constructor(services: Services, config = {}) {
    this.services = services;
    this.config = {
      baseUrl: '',
      ...config
    }
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  /**
   * HTTP запрос
   * @param url
   * @param method
   * @param headers
   * @param options
   * @returns {Promise<any>}
   */
  public async request({url, method = 'GET', headers = {}, ...options}: ApiServiceRequest) {
    if (!url.match(/^(http|\/\/)/)) url = this.config.baseUrl + url;

    try {
      const res = await fetch(url, {
        method,
        headers: {...this.defaultHeaders, ...headers},
        ...options,
      });

      if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      const data = await res.json();

      return data;
    } catch (err) {
      return err;
    }
  }

  /**
   * Установка или сброс заголовка
   * @param name {String} Название заголвока
   * @param value {String|null} Значение загововка
   */
  public setHeader(name: string, value = '') {
    if (value) {
      this.defaultHeaders[name] = value;
    } else if (this.defaultHeaders[name]) {
      delete this.defaultHeaders[name];
    }
  }
}


export default ApiService;