export interface LoginFormValues{
    Email: string
    Password: string
}

export interface SignupFormValues{
    FirstName: string
    LastName: string
    Email: string
    Password: string
    PhoneNumber: string
}

export interface ForgotPasswordFormValues{
    Email: string
}

export interface ResetPasswordFormValues{
    Password: string
    ConfirmPassword: string
}

export interface RegisterData {
    Email: string;
    Password: string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    [key: string]: any; 
}

export interface authResponse {
    status: boolean;
    path: string;
    statusCode: number;
    message: string;
    timestamp: string;
    user: {
        _id: string;
        Role: string;
        IsCompanyVerified: boolean;
        SleepScoreUserId: string;
        ExternalUserId: string;
        Provider: string;
        ProviderId: string;
        StripeCustomerId: string;
        Premium: boolean;
        SubscriptionStatus: string;
        Email: string;
        Password: string;
        FirstName: string;
        LastName: string;
        Gender: string;
        Height: number | null;
        Weight: number | null;
        TimeZone: string;
        Bedtime: number;
        WakeUpTime: number;
        GoalId: number;
        isFirstTimeLogin: boolean;
        SleepGoal: string;
        TimeToWakeUp: string | null;
        TimeToGoToSleep: string | null;
        Status: string;
        FcmTokens: string[];
        LinkedProviders: string[];
        DateOfBirth: string;
        BedtimeDate: string;
        createdAt: string;
        updatedAt: string;
        CompanyName?: string | null;
    };
    token: string;
}

export interface LoginData {
    Email: string;
    Password: string;
}

export interface ForgotpasswordData {
    Email: string;
}

export interface ResetPasswordData {
    token: string;
    newPassword: string;
}