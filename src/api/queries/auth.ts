import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../axios';
import { endpoints } from '../endpoints';
import { queryKeys } from '../queryKeys';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ProfileResponse,
  UpdateProfileRequest,
  ChangePasswordRequest,
} from '../types';

/**
 * Login mutation
 */
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: LoginRequest): Promise<LoginResponse> => {
      const response = await axiosInstance.post<LoginResponse>(
        endpoints.auth.login,
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      // Store tokens
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // Invalidate auth queries
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.all });
    },
  });
};

/**
 * Register mutation
 */
export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: RegisterRequest): Promise<RegisterResponse> => {
      const response = await axiosInstance.post<RegisterResponse>(
        endpoints.auth.register,
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      // Store tokens
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // Invalidate auth queries
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.all });
    },
  });
};

/**
 * Logout mutation
 */
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (): Promise<void> => {
      await axiosInstance.post(endpoints.auth.logout);
    },
    onSuccess: () => {
      // Clear tokens
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      // Clear all queries
      queryClient.clear();

      // Redirect to login
      window.location.href = '/login';
    },
  });
};

/**
 * Get user profile query
 */
export const useProfile = (enabled = true) => {
  return useQuery({
    queryKey: queryKeys.auth.profile(),
    queryFn: async (): Promise<ProfileResponse> => {
      const response = await axiosInstance.get<ProfileResponse>(
        endpoints.auth.profile
      );
      return response.data;
    },
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Update profile mutation
 */
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdateProfileRequest): Promise<ProfileResponse> => {
      const response = await axiosInstance.put<ProfileResponse>(
        endpoints.auth.updateProfile,
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.profile() });
    },
  });
};

/**
 * Change password mutation
 */
export const useChangePassword = () => {
  return useMutation({
    mutationFn: async (data: ChangePasswordRequest): Promise<void> => {
      await axiosInstance.post(endpoints.auth.changePassword, data);
    },
  });
};
