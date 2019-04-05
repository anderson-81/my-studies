package com.project.test;

import com.project.dao.PersonDAO;
import com.project.dao.ProfessionDAO;
import com.project.models.Person;
import com.project.models.Profession;
import java.util.Date;

public class Test {

    public static void main(String[] args) {
        CreatePerson();
        FindAll();
    }

    public static void CreatePerson() {
        try {
            PersonDAO pdao = new PersonDAO();
            Person p = new Person();
            p.setName("Anderson");
            p.setSalary(3333.77);
            p.setBirthday(new Date("November 12, 2000"));
            p.setProfession(new ProfessionDAO().FindProfessionByID(1));
            p = pdao.Create(p);
            System.out.print("Cadastrado com sucesso.");
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }

    public static void EditPerson() {
        try {
            PersonDAO pdao = new PersonDAO();
            Person p = new Person();
            p.setId(2);
            p.setName("Anderson da Conceição");
            p.setSalary(5333.33);
            p.setBirthday(new Date("November 12, 1981"));
            p = pdao.Edit(p);
            System.out.print("Editado com sucesso.");
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }

    public static void FindPersonByID() {
        try {
            PersonDAO pdao = new PersonDAO();
            Person p = pdao.FindByID(1);
            if (p != null) {
                System.out.println("ID: " + p.getId());
                System.out.println("Name: " + p.getName());
                System.out.println("Salary: " + p.getSalary());
                System.out.println("Birthday: " + p.getBirthday());
                System.out.println("Profession: " + p.getProfession().getProfession());
            }
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }

    public static void FindAll() {
        try {
            PersonDAO pdao = new PersonDAO();
            pdao.FindAll().stream().map((p) -> {
                System.out.println("ID: " + p.getId());
                return p;
            }).map((p) -> {
                System.out.println("Name: " + p.getName());
                return p;
            }).map((p) -> {
                System.out.println("Salary: " + p.getSalary());
                return p;
            }).map((p) -> {
                System.out.println("Profession: " + p.getProfession().getProfession());
                return p;
            }).forEachOrdered((p) -> {
                System.out.println("Birthday: " + p.getBirthday());
            });

        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }

    public static void DeletePerson() {
        try {
            PersonDAO pdao = new PersonDAO();
            Person p = null;
            p = pdao.Delete(1);
            System.out.print("Deletado com sucesso.");
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }

    /**
     * **************
     */
    public static void CreateProfession() {
        try {
            ProfessionDAO pfdao = new ProfessionDAO();
            Profession pf = new Profession();
            pf.setProfession("Programador");
            pfdao.Create(pf);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }

    public static Profession findProfessionByID(Integer id) {
        Profession pf = null;
        try {
            ProfessionDAO pfdao = new ProfessionDAO();
            pf = pfdao.FindProfessionByID(id);
            System.out.println("PROFESSION: " + pf.getProfession());
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        return pf;
    }
}
