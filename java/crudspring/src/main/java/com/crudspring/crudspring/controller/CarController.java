package com.crudspring.crudspring.controller;

import com.crudspring.crudspring.config.repository.CarRepository;
import com.crudspring.crudspring.config.repository.PersonRepository;
import com.crudspring.crudspring.models.Car;
import com.crudspring.crudspring.models.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CarController {

    @Autowired
    private PersonRepository pr;

    @Autowired
    private CarRepository cr;

    @RequestMapping(value = "/person/{id}/car/create", method = RequestMethod.GET)
    public ModelAndView Create(@PathVariable("id") long id) {
        ModelAndView mv = new ModelAndView();
        Person person = pr.findById(id);
        if (person != null) {
            mv.setViewName("car/create");
            mv.addObject("person", person);
        } else {
            mv.setViewName("person/index");
        }
        return mv;
    }

    @RequestMapping(value = "/person/{id}/car/create", method = RequestMethod.POST)
    public String Save(@PathVariable("id") long id, Car car) {
        Person person = pr.findById(id);
        if (person != null) {
            car.setPerson(person);
            cr.save(car);
        }
        return "redirect:/person/{id}";
    }

    @RequestMapping(value = "/person/{id}/car/{id_car}/delete", method = RequestMethod.GET)
    public String Delete(@PathVariable("id_car") long id) {
        Car car = cr.findById(id);
        if (car != null) {
            cr.delete(car);
        }
        return "redirect:/person/{id}";
    }
}
