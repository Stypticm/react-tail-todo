import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Типизация оригинальных хуков useDispatch, useSelector
// Созданные хуки понимают и знают как был создан store и какие типы используются
// useAppDispatch - понимает какой тип будет иметь action.payload