package com.crudspring.crudspring.controller;

import com.crudspring.crudspring.config.repository.CarRepository;
import com.crudspring.crudspring.config.repository.PersonRepository;
import com.crudspring.crudspring.models.Car;
import com.crudspring.crudspring.models.Person;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class PersonController {

    @Autowired
    private PersonRepository pr;

    @Autowired
    private CarRepository cr;

    @RequestMapping(value = "/person", method = RequestMethod.GET)
    public ModelAndView Index() {
        ModelAndView mod = new ModelAndView("/person/index");
        Iterable<Person> people = pr.findAll();
        mod.addObject("people", people); // O nome que vai tá no template.
        return mod;
    }

    @RequestMapping(value = "/person/create", method = RequestMethod.GET)
    public String Create() {
        return "/person/create";
    }

    @RequestMapping(value = "/person/save", method = RequestMethod.POST)
    public String Save(@Valid Person person, BindingResult result, RedirectAttributes attributes) {
        if (result.hasErrors()) {
            attributes.addFlashAttribute("message", "Verify the datas for person's inclusion.");
            return "/person/index";
        }
        pr.save(person);
        attributes.addFlashAttribute("message", "Successfully registered.");
        return "/person/index";
    }

    @RequestMapping(value = "/person/{id}", method = RequestMethod.GET)
    public ModelAndView Details(@PathVariable("id") long id) {
        Person person = pr.findById(id);
        ModelAndView mv = new ModelAndView("/person/details");
        mv.addObject("person", person);
        Iterable<Car> cars = cr.findByPersonId(id);
        if (cars != null) {
            mv.addObject("cars", cars);
        }
        return mv;
    }

    @RequestMapping(value = "/person/{id}/delete", method = RequestMethod.GET)
    public String Delete(@PathVariable("id") long id) {
        Person person = pr.findById(id);
        if (person != null) {
            pr.delete(person);
        }
        return "redirect:/person";
    }
}
