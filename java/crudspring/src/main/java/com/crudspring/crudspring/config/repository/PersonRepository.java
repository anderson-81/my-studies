package com.crudspring.crudspring.config.repository;

import com.crudspring.crudspring.models.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends CrudRepository<Person, String> {
    Person findById(long id);
}