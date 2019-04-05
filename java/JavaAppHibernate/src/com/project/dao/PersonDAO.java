package com.project.dao;

import com.project.connections.ConnectionFactory;
import com.project.models.Person;
import java.util.List;
import javax.persistence.EntityManager;

public class PersonDAO {

    public Person Create(Person p) {
        EntityManager em = new ConnectionFactory().getConnection();
        try {
            em.getTransaction().begin();
            em.persist(p);
            em.getTransaction().commit();
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return p;
    }

    public Person Edit(Person p) {
        EntityManager em = new ConnectionFactory().getConnection();
        try {
            em.getTransaction().begin();
            em.merge(p);
            em.getTransaction().commit();
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return p;
    }

    public Person FindByID(Integer id) {
        EntityManager em = new ConnectionFactory().getConnection();
        Person p = null;
        try {
            p = em.find(Person.class, id);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
        } finally {
            em.close();
        }
        return p;
    }

    public List<Person> FindAll() {
        EntityManager em = new ConnectionFactory().getConnection();
        List<Person> list = null;
        try {
            list = em.createQuery("From Person p").getResultList();
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
        } finally {
            em.close();
        }
        return list;
    }

    public Person Delete(Integer id) {
        EntityManager em = new ConnectionFactory().getConnection();
        Person p = null;
        try {
            p = em.find(Person.class, id);
            if (p != null) {
                em.getTransaction().begin();
                em.remove(p);
                em.getTransaction().commit();
            } else {
                System.out.println("Registro não encontrado.");
            }
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return p;
    }
}
