package com.tourmarket.repository;

import com.tourmarket.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.param.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DestinationRepository extends JpaRepository<Destination, Long> {

    @Query("SELECT d FROM Destination d WHERE d.budgetEstimate <= :budget AND d.distanceKm <= :distance AND d.category IN :categories")
    List<Destination> findByAIPlannerFilters(
        @Param("budget") Double budget, 
        @Param("distance") Double distance, 
        @Param("categories") List<String> categories
    );
}
