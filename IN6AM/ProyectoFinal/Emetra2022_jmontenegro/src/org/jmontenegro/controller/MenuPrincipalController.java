
package org.jmontenegro.controller;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.fxml.Initializable;
import org.jmontenegro.system.Principal;


public class MenuPrincipalController implements Initializable{
    private Principal escenarioPrincipal;

    
    public Principal getEscenarioPrincipal() {
        return escenarioPrincipal;
    }

    public void setEscenarioPrincipal(Principal escenarioPrincipal) {
        this.escenarioPrincipal = escenarioPrincipal;
    }
    
    public void ventanaVecinos(){
        escenarioPrincipal.ventanaVecinos();
    }
    
    public void ventanaVehiculos(){
        escenarioPrincipal.ventanaVehiculos();
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
    }
}
