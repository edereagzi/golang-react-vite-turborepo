import { Button } from "@workspace/ui/components/button";
import { useHealthCheck } from "./hooks/useHealthCheck";

function App() {
  const { data, isLoading, isError, error, refetch } = useHealthCheck();

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Golang React Vite Turborepo</h1>

        <Button size="sm" onClick={() => refetch()}>
          Test API Connection
        </Button>

        {isLoading && (
          <div className="rounded-lg border p-4">
            <p className="text-sm text-gray-600">Loading...</p>
          </div>
        )}

        {isError && (
          <div className="rounded-lg border border-red-300 bg-red-50 p-4">
            <p className="text-sm text-red-600">Error:</p>
            <p className="font-medium text-red-700">
              {error?.message || "Failed to connect to API"}
            </p>
          </div>
        )}

        {data && (
          <div className="rounded-lg border p-4">
            <p className="text-sm text-gray-600">API Response:</p>
            <p className="font-medium">{data.message}</p>
            <p className="text-xs text-green-600">Status: {data.status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
