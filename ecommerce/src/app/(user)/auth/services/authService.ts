import axiosInstance from "@/config/axios";
import { authResponse, LoginData, RegisterData } from "../lib/types/auth";


export const registerService = async (registerData: RegisterData): Promise<authResponse> => {
    const response = await axiosInstance.post<authResponse>("/auth/register", registerData);
    return response.data;
};

export const loginService = async (loginData: LoginData): Promise<authResponse> => {
    const response = await axiosInstance.post<authResponse>("/auth/login", loginData);
    return response.data;
};


