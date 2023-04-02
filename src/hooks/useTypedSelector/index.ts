import {useSelector, TypedUseSelectorHook} from "react-redux";

import { RootState } from "../../store/interface";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;