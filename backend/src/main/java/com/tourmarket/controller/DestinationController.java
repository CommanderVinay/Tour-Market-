package com.tourmarket.controller;

import com.tourmarket.model.Destination;
import com.tourmarket.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/destinations")
@CrossOrigin(origins = "http://localhost:5173")
public class DestinationController {

    @Autowired
    private RecommendationService recommendationService;

    @GetMapping("/recommend")
    public ResponseEntity<List<Destination>> getRecommendations(
            @RequestParam Double budget,
            @RequestParam Double distance,
            @RequestParam(required = false) List<String> categories) {
        
        List<Destination> recommendations = recommendationService.getRecommendations(budget, distance, categories);
        return ResponseEntity.ok(recommendations);
    }
}
