import { useCallback, useEffect, useReducer } from "react";
import { api } from "../services/api";

type FetchState = {
  isLoading: boolean;
  data: any;
  error: string;
};

type FetchAction = {
  type: "startLoading" | "data" | "error" | "mutate";
  payload: any;
};

const fetchReducer = (state: FetchState, action: FetchAction) => {
  switch (action.type) {
    case "data":
      return {
        data: action.payload,
        error: "",
        isLoading: false,
      };
    case "startLoading":
      return {
        ...state,
        isLoading: true,
      };
    case "error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "mutate":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {
        ...state,
        [action.type]: action.payload,
      };
  }
};

const initialState = {
  isLoading: false,
  data: null,
  error: "",
};

function useFetch(endpoint: string) {
  const [{ data, error, isLoading }, dispatch] = useReducer(
    fetchReducer,
    initialState
  );

  const startLoading = () => {
    dispatch({ type: "startLoading", payload: !isLoading });
  };

  const mutate = (mutatedData: any) => {
    dispatch({ type: "mutate", payload: mutatedData });
  };

  const fetch = useCallback(async () => {
    startLoading();

    try {
      const response = await api.get(endpoint);
      dispatch({ type: "data", payload: response.data });
    } catch (e: any) {
      dispatch({
        type: "error",
        payload: e.response.data.message ?? e.message,
      });
    }
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return { data, error, isLoading, mutate, refetch: fetch };
}

export { useFetch };
