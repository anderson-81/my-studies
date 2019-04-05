package com.crudspring.crudspring.models;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import org.hibernate.validator.constraints.NotEmpty;

@Entity
public class Person implements Serializable {
    
    private static final long serialVersionUID = 1L;
    
    @Id
    @NotEmpty
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    @NotEmpty
    private String name;
    private Double salary;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date birthday;

    @OneToMany
    private List<Car> car;
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Car> getCar() {
        return car;
    }

    public void setCar(List<Car> car) {
        this.car = car;
    }
}
