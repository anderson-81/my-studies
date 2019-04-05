package com.project.dao;

import com.project.connections.ConnectionFactory;
import com.project.models.Profession;
import javax.persistence.EntityManager;


public class ProfessionDAO {
    
    private final EntityManager em = new  ConnectionFactory().getConnection();

    public Profession Create(Profession profession){
        try{
            em.getTransaction().begin();
            em.persist(profession);
            em.getTransaction().commit();
        }catch(Exception ex){
            System.err.println(ex.getMessage());
            em.getTransaction().rollback();
        }finally{
            em.close();
        }
        return profession;
    }
    
     public Profession FindProfessionByID(Integer id){
        Profession p = null;
        try {
            p = em.find(Profession.class, id);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
        } finally {
            em.close();
        }
        return p;
    }
}
