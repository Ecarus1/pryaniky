import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import * as reducers from './exports';
import Services from "../services";
import { RootState } from "./interface";

export default function createStoreRedux(services: Services, config: any){
  return legacy_createStore<RootState, any, any, any>(combineReducers(reducers), undefined, applyMiddleware(
    thunk.withExtraArgument(services)
  ));
}