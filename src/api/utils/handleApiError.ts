import { AxiosError } from "axios";

interface ApiErrorResponse {
  message?: string;
}

export const handleApiError = (error: AxiosError): Promise<never> => {
  if (error.response) {
    const { status, data } = error.response;

    switch (status) {
      case 401:
        window.location.href = "/login";
        break;

      default:
        console.log((data as ApiErrorResponse)?.message || "Ocorreu um erro inesperado.");
        break;
    }
  }

  return Promise.reject(error);
};
