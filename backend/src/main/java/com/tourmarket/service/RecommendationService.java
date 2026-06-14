package com.tourmarket.service;

import com.tourmarket.model.Destination;
import com.tourmarket.repository.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendationService {

    @Autowired
    private DestinationRepository destinationRepository;

    public List<Destination> getRecommendations(Double budget, Double distance, List<String> categories) {
        if (categories == null || categories.isEmpty()) {
            return destinationRepository.findAll();
        }
        
        List<Destination> results = destinationRepository.findByAIPlannerFilters(budget, distance, categories);
        
        // Fallback to general spots if filters are too strict
        if (results.isEmpty()) {
            return destinationRepository.findAll().stream().limit(3).toList();
        }
        
        return results;
    }
}
