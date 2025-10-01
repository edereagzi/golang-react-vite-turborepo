package router

import (
	"net/http"

	"api/internal/handlers"
	"api/internal/middleware"
)

func SetupRoutes() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/health", middleware.EnableCORS(handlers.HealthHandler))

	return mux
}