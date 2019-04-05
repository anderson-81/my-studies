package com.project.connections;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class ConnectionFactory {

    public static EntityManagerFactory emf = Persistence.createEntityManagerFactory("appPU");
    
    public EntityManager getConnection() {
        try {
            return emf.createEntityManager();
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            return null;
        }
    }
}
