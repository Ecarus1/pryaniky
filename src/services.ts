import ApiService from "./api";
import { IConfig } from "./interface";

class Services {
  private readonly config: IConfig;
  private _api!: ApiService;

  constructor(config: IConfig) {
    this.config = config;
  }

  /**
   * Сервис АПИ
   * @returns {ApiService}
   */
  get api(){
    if (!this._api) {
      this._api = new ApiService(this, this.config.api);
    }
    return this._api;
  }
}

export default Services;