package main

import (
	"fmt"
	"log"
	"net/http"

	"api/internal/config"
	"api/internal/router"
)

func main() {
	cfg := config.Load()
	mux := router.SetupRoutes()

	fmt.Printf("Server starting on port %s\n", cfg.Port)
	log.Fatal(http.ListenAndServe(cfg.Port, mux))
}