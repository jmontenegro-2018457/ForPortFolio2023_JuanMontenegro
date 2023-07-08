
package org.jmontenegro.controller;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import org.jmontenegro.system.Principal;


public class VehiculosController implements Initializable {
     private Principal escenarioPrincipal;
     private ObservableList listaVehiculos,listaVecinos;
     @FXML private Button btnAgregar;
     @FXML private Button btnEditar;
     @FXML private Button btnEliminar;
     @FXML private TextField txtPlaca;
     @FXML private TextField txtMarca;
     @FXML private TextField txtModelo;
     @FXML private TextField txtTipo;
     @FXML private ComboBox cmbNIT;
     @FXML private TableView tblVehiculos;
     @FXML private TableColumn colPlaca;
     @FXML private TableColumn colMarca;
     @FXML private TableColumn colModelo;
     @FXML private TableColumn colTipo;
     @FXML private TableColumn colNIT;
     
    public Principal getEscenarioPrincipal() {
        return escenarioPrincipal;
    }

    public void setEscenarioPrincipal(Principal escenarioPrincipal) {
        this.escenarioPrincipal = escenarioPrincipal;
    }
    
    public void seleccionarElemento(){
        
    }
    
    public void cargarDatos(){
        
    }
    
    public void agregar(){
        activarControles();
    }
    
    public void editar(){
        
    }
    
    public void eliminar(){
        
    }
    
    public void guardar(){
        
    }
    
    public void actualizar(){
        
    }
    
    
    
    public void limpiarControles(){
        
    }
    
    
    
    public void activarControles(){
       btnEliminar.setDisable(false);
       btnEditar.setDisable(false);
       txtPlaca.setEditable(true);
       txtMarca.setEditable(true);
       txtModelo.setEditable(true);
       txtTipo.setEditable(true);
       cmbNIT.setDisable(false);
    }
    
    public void desactivarControles(){
       btnEliminar.setDisable(true);
       btnEditar.setDisable(true);
       txtPlaca.setEditable(false);
       txtMarca.setEditable(false);
       txtModelo.setEditable(false);
       txtTipo.setEditable(false);
       cmbNIT.setDisable(true);
    }
    
    public void menuPrincipal(){
        escenarioPrincipal.menuPrincipal();
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
    }
}
