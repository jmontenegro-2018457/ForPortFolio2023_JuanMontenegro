/*
    Nombre: Juan Francisco Montenegro Aguirre
    Carné: 2018457
    Código Técnico: IN5AM
    Fecha de Creación: 26/09/2022
    Fechas de modificaciones: 26/09/2022, 27/09/2022
 */
package org.jmontenegro.system;

import java.io.InputStream;
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.fxml.JavaFXBuilderFactory;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import org.jmontenegro.controller.MenuPrincipalController;
import org.jmontenegro.controller.VecinosController;
import org.jmontenegro.controller.VehiculosController;

/**
 *
 * @author informatica
 */
public class Principal extends Application {
    private final String PAQUETE_VISTA = "/org/jmontenegro/views/";
    private Stage escenarioPrincipal;
    private Scene escena;
    
    
    @Override
    public void start(Stage escenarioPrincipal) throws Exception{
    this.escenarioPrincipal = escenarioPrincipal;
    escenarioPrincipal.setTitle("Gestión Emetra");
    menuPrincipal();
    escenarioPrincipal.show();
    }
    
    public void menuPrincipal(){
        try {
            MenuPrincipalController ventanaMenu = (MenuPrincipalController) cambiarEscena("VistaMenu.fxml", 600,500 );
            ventanaMenu.setEscenarioPrincipal(this);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    public void ventanaVecinos(){
        try{
            VecinosController ventanaVecinos = (VecinosController) cambiarEscena("VistaVecinos.fxml", 1205, 600);
            ventanaVecinos.setEscenarioPrincipal(this);
        }catch(Exception e){
            e.printStackTrace();
        }
    }
    
    public void ventanaVehiculos(){
        try{
            VehiculosController ventanaVehiculos = (VehiculosController)cambiarEscena("VistaVehiculos.fxml", 1050, 600);
            ventanaVehiculos.setEscenarioPrincipal(this);
        }catch(Exception e){
            e.printStackTrace();
        }
    }

  
    public static void main(String[] args) {
        launch(args);
    }
    
    public Initializable cambiarEscena(String fxml, int ancho, int alto) throws Exception{
    Initializable resultado = null;
    FXMLLoader cargadorFXML = new FXMLLoader();
    InputStream archivo = Principal.class.getResourceAsStream(PAQUETE_VISTA+fxml);
    cargadorFXML.setBuilderFactory(new JavaFXBuilderFactory());
    cargadorFXML.setLocation(Principal.class.getResource(PAQUETE_VISTA+fxml));
    escena = new Scene((AnchorPane)cargadorFXML.load(archivo),ancho,alto);
    escenarioPrincipal.setScene(escena);
    escenarioPrincipal.sizeToScene();
    resultado = (Initializable)cargadorFXML.getController();
    return resultado;
    }
    
}
