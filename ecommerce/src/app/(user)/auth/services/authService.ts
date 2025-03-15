import axiosInstance from "@/config/axios";
import { authResponse, ForgotpasswordData, LoginData, RegisterData, ResetPasswordData } from "../lib/types/auth";


export const registerService = async (registerData: RegisterData): Promise<authResponse> => {
    const response = await axiosInstance.post<authResponse>("/auth/signup", registerData);
    return response.data;
};

export const loginService = async (loginData: LoginData): Promise<authResponse> => {
    const response = await axiosInstance.post<authResponse>("/auth/signin", loginData);
    return response.data;
};

export const forgotService = async (ForgotpasswordData: ForgotpasswordData): Promise<authResponse> => {
    const response = await axiosInstance.post<authResponse>("/auth/forgot-password", ForgotpasswordData);
    return response.data;
};

export const resetService = async (ResetpasswordData: ResetPasswordData, token: String): Promise<authResponse> => {
    const response = await axiosInstance.post<authResponse>("/auth/reset-password?token=" + token,  ResetpasswordData);
    return response.data;
};

export const verifyEmail = async (token: String): Promise<authResponse> => {
    const response = await axiosInstance.get<authResponse>("/auth/verify-email?token=" + token);
    return response.data;
};


