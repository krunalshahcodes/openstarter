import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { registerSchemaType } from "../schemas";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: registerSchemaType) =>
      axios.post(`/api/auth/register`, data),
  });
};
