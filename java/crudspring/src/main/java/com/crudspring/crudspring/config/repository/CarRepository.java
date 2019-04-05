package com.crudspring.crudspring.config.repository;

import com.crudspring.crudspring.models.Car;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends CrudRepository<Car, String> {
    Car findByPlate(String plate);
    Car findById(long id);
    List<Car> findByPersonId(long person_id);
    
    // Posso passar o objeto person direto para trazer os carros relacionados.
}
