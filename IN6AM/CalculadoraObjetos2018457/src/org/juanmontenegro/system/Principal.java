/*
 *Documentación CalculadoraObjetos2018457

    Nombre Completo: Juan Francisco Montenegro Aguirre 
    
    Carné:2018457
    
    Código Técnico: IN5AM 

    Fecha de Creación:21/03/2022 

    Fechas de modificación: 29/03/2022
 */
package org.juanmontenegro.system;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

/**
 *
 * @author informatica
 */
public class Principal extends Application {
    
    @Override
    public void start(Stage escenarioPrincipal) throws Exception {
        Parent root = FXMLLoader.load(getClass().getResource("Calculadora.fxml"));
        
        Scene escena = new Scene(root);
        escenarioPrincipal.setScene(escena);
        escenarioPrincipal.show();
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}
