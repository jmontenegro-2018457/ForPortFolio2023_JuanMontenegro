/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.jmontenegro.db;

import com.mysql.jdbc.Connection;
import java.sql.DriverManager;

public class Conexion {
    private Connection conexion;
    private static Conexion instancia;
    
    private Conexion(){
        try{
        Class.forName("com.mysql.jdbc.Driver").newInstance();
        conexion = (Connection)DriverManager.getConnection("jdbc:mysql://localhost:3306/DBEmetra2022?useSSL=false","root","admin");
        }catch(Exception e){
            e.printStackTrace();
        }
    }
    
    public static Conexion getIntance(){
        if(instancia ==null)
            instancia = new Conexion();
        return instancia;
    }

    public Connection getConexion() {
        return conexion;
    }

    public void setConexion(Connection conexion) {
        this.conexion = conexion;
    }
    
    
}
