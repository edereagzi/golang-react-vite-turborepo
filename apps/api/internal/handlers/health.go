package handlers

import (
	"encoding/json"
	"net/http"
)

type Response struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

func HealthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	response := Response{
		Message: "API is running",
		Status:  "healthy",
	}
	json.NewEncoder(w).Encode(response)
}