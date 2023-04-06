import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hook";

interface IProtected {
  children: React.ReactElement;
  redirect: string;
}

function Protected({children, redirect}: IProtected) {

  const navigate = useNavigate();
  const location = useLocation();

  const select = useAppSelector(state => ({
    exists: state.auth.exists,
    waiting: state.auth.waiting
  }));

  useEffect(() => {
    if (!select.exists && !select.waiting) {
      navigate(redirect, {state: { back: location.pathname }});
    }
  }, [select.exists, select.waiting]);
  console.log(location)

  return !select.exists || select.waiting ? <div>Проверка доступа...</div> : children ;
}

export default Protected;