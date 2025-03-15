export interface LoginFormValues{
    email: string
    password: string
}

export interface SignupFormValues{
    name: string
    email: string
    password: string
}

export interface ForgotPasswordFormValues{
    email: string
}

export interface ResetPasswordFormValues{
    newPassword: string
}

export interface RegisterData {
    name: string
    email: string
    password: string 
}

export interface authResponse {
    accessToken: string;
    message?: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface ForgotpasswordData {
    email: string;
}

export interface ResetPasswordData {
    newPassword: string;
}