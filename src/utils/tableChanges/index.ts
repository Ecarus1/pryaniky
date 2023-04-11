import {Dispatch, SetStateAction} from "react";
import {Dayjs} from "dayjs";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export function onInputChange<T extends Object>(
  event: InputChangeEvent, 
  name: keyof T, 
  setState: Dispatch<SetStateAction<T>>) {
  const value = event.target.value;
  setState((prevState) => ({ ...prevState, [name]: value }));
};

export function onDateChange<T extends Object>(
  value: Dayjs | null, 
  name: keyof T,
  setState: Dispatch<SetStateAction<T>>) {
  value && setState(prevState => ({...prevState, [name]: value}))
}