import { useQuery } from "@tanstack/react-query";

interface HealthResponse {
  message: string;
  status: string;
}

const fetchHealth = async (): Promise<HealthResponse> => {
  const response = await fetch("/api/health");

  if (!response.ok) {
    throw new Error("Failed to fetch health status");
  }

  return response.json();
};

export const useHealthCheck = () => {
  return useQuery({
    queryKey: ["health"],
    queryFn: fetchHealth,
    refetchInterval: 30000, // Refetch every 30 seconds
    retry: 2,
  });
};