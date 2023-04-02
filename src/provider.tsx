import {createContext} from "react";

import { IServicesProvider } from "./interface";

/**
 * Контекст для Services
 * @type {React.Context<{}>}
 */
export const ServicesContext = createContext({});

/**
 * Провайдер Services.
 */
function ServicesProvider({services, children}: IServicesProvider) {
  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
}

export default ServicesProvider;