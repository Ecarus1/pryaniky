import {Store} from "redux";

import createStoreRedux from "./store";
import ApiService from "./api";
import { IConfig } from "./interface";

class Services {
  private readonly config: IConfig;
  private _api!: ApiService;
  private _store!: Store;

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

  /**
   * Redux store
   */
    get store(): Store{
      if (!this._store) {
        this._store = createStoreRedux(this, this.config.store);
      }
      return this._store;
    }
}

export default Services;