export interface LoginFormValues{
    email: string
    password: string
}

export interface SignupFormValues{
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
}

export interface ForgotPasswordFormValues{
    email: string
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