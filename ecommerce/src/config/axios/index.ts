import axios, { AxiosInstance as AxiosType, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

class AxiosInstance {
    private axiosInstance: AxiosType;

    constructor(baseURL: string = '') {
        this.axiosInstance = axios.create({
            baseURL,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    private setupInterceptors(): void {
        this.axiosInstance.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('authToken');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                console.error('Request error:', error);
                return Promise.reject(error);
            }
        );

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response) {
                    const { status, data } = error.response;
                    console.error('Response error:', status, data);

                    switch (status) {
                        case 401:
                            toast.error(data.message || 'Unauthorized access. Redirecting to login...');
                            break;
                        case 404:
                            toast.error(data.message || 'Resource not found');
                            break;
                        case 500:
                            toast.error(data.message || 'Internal Server Error');
                            break;
                        default:
                            toast.error(data.message || 'An error occurred');
                            break;
                    }
                } else if (error.request) {
                    console.error('No response received:', error.request);
                    toast.error('No response from server');
                } else {
                    console.error('Error setting up request:', error.message);
                    toast.error(error.message || 'Request setup error');
                }
                return Promise.reject(error);
            }
        );
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.get<T>(url, config);
    }

    post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.post<T>(url, data, config);
    }

    put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.put<T>(url, data, config);
    }

    delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.delete<T>(url, config);
    }

    patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.patch<T>(url, data, config);
    }
}

const axiosInstance = new AxiosInstance(process.env.NEXT_PUBLIC_API_BASE_URL);

export default axiosInstance;
