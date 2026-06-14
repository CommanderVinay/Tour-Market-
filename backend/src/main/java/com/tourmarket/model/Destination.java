package com.tourmarket.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "destinations")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Destination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String category; // Beach, Hill Station, Adventure, etc.

    @Column(columnDefinition = "TEXT")
    private String shortSummary;

    @Column(columnDefinition = "TEXT")
    private String fullSummary;

    private String imageUrl;
    
    private Double budgetEstimate;
    
    private Double distanceKm;
    
    private Double rating;
    
    private Integer reviewCount;
    
    private String bestSeason;

    private Double latitude;
    
    private Double longitude;
}
