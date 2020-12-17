import { IAstr, ISAstr } from "./types";

export const GET_LIST = "GET_LIST";
export const REQUESTED_LOAD_LIST = "REQUESTED_LOAD_LIST";
export const REQUESTED_SUCCEEDED_LIST = "REQUESTED_SUCCEEDED_LIST";
export const REQUESTED_FAILED_LIST = "REQUESTED_FAILED_LIST";

export const getListAction = (): { type: string } => ({
  type: GET_LIST,
});

export const requestLoadList = (): { type: string } => ({
  type: REQUESTED_LOAD_LIST,
});

export const requestSuccesList = (
  data: IAstr[]
): { type: string; payload: IAstr[] } => {
  return {
    type: REQUESTED_SUCCEEDED_LIST,
    payload: data,
  };
};

export const setErrorList = (): { type: string } => ({
  type: REQUESTED_FAILED_LIST,
});

export const GET_ASTR = "GET_ASTR";
export const REQUESTED_LOAD_ASTR = "REQUESTED_LOAD_ASTR";
export const REQUESTED_SUCCEEDED_ASTR = "REQUESTED_SUCCEEDED_ASTR";
export const REQUESTED_FAILED_ASTR = "REQUESTED_FAILED_ASTR";

export const getAstr = (id: number): { type: string; payload: number } => ({
  type: GET_ASTR,
  payload: id,
});

export const requestLoadAstr = (): { type: string } => ({
  type: REQUESTED_LOAD_ASTR,
});

export const requestSuccesAstr = (
  data: ISAstr
): { type: string; payload: ISAstr } => {
  return {
    type: REQUESTED_SUCCEEDED_ASTR,
    payload: data,
  };
};

export const setErrorAstr = (): { type: string } => ({
  type: REQUESTED_FAILED_ASTR,
});
