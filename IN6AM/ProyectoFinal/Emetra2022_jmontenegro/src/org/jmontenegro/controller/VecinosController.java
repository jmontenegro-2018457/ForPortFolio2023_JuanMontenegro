
package org.jmontenegro.controller;

import java.net.URL;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.ResourceBundle;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.control.cell.PropertyValueFactory;
import org.jmontenegro.bean.Vecinos;
import org.jmontenegro.db.Conexion;
import org.jmontenegro.system.Principal;


public class VecinosController implements Initializable{
     private Principal escenarioPrincipal;
     private ObservableList<Vecinos> listaVecinos;
     @FXML private Button btnAgregar;
     @FXML private Button btnEditar;
     @FXML private Button btnEliminar;
     @FXML private TextField txtNIT;
     @FXML private TextField txtDPI;
     @FXML private TextField txtNom;
     @FXML private TextField txtApe;
     @FXML private TextField txtDir;
     @FXML private TextField txtMun;
     @FXML private TextField txtCP;
     @FXML private TextField txtTel;
     @FXML private TableView tblVecinos;
     @FXML private TableColumn colNIT;
     @FXML private TableColumn colDPI;
     @FXML private TableColumn colNombres;
     @FXML private TableColumn colApellidos;
     @FXML private TableColumn colDir;
     @FXML private TableColumn colMun;
     @FXML private TableColumn colCP;
     @FXML private TableColumn colTel;
     
     
     
     
     
    public Principal getEscenarioPrincipal() {
        return escenarioPrincipal;
    }

    public void setEscenarioPrincipal(Principal escenarioPrincipal) {
        this.escenarioPrincipal = escenarioPrincipal;
    }
    
    public void seleccionarElemento(){
        
    }
    
    public void cargarDatos(){
       tblVecinos.setItems(getVecinos());
       colNIT.setCellValueFactory(new PropertyValueFactory<Vecinos,String> ("NIT"));
       colDPI.setCellValueFactory(new PropertyValueFactory<Vecinos,String> ("DPI"));
       colNombres.setCellValueFactory(new PropertyValueFactory<Vecinos,String> ("nombres"));
       colApellidos.setCellValueFactory(new PropertyValueFactory<Vecinos,String> ("apellidos"));
       colDir.setCellValueFactory(new PropertyValueFactory<Vecinos,String> ("direccion"));
       colMun.setCellValueFactory(new PropertyValueFactory<Vecinos,String> ("municipalidad"));
       colCP.setCellValueFactory(new PropertyValueFactory<Vecinos,String> ("codigoPostal"));
       colTel.setCellValueFactory(new PropertyValueFactory<Vecinos,String> ("telefono"));
    }
    
    public ObservableList<Vecinos> getVecinos(){
       ArrayList<Vecinos> lista = new ArrayList<Vecinos>();
        try {
            PreparedStatement procedimiento = Conexion.getIntance().getConexion().prepareCall("{call sp_ListarVecinos}");
            ResultSet resultado = procedimiento.executeQuery();
            while(resultado.next()){
                lista.add(new Vecinos(resultado.getString("NIT"),
                                      resultado.getLong("DPI"),
                                      resultado.getString("nombres"),
                                      resultado.getString("apellidos"),
                                      resultado.getString("direccion"),
                                      resultado.getString("municipalidad"),
                                      resultado.getInt("codigoPostal"),
                                      resultado.getString("telefono")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listaVecinos = FXCollections.observableArrayList(lista);
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
        txtNIT.setEditable(true);
        txtDPI.setEditable(true);
        txtNom.setEditable(true);
        txtApe.setEditable(true);
        txtDir.setEditable(true);
        txtMun.setEditable(true);
        txtCP.setEditable(true);
        txtTel.setEditable(true);
    }
    
    public void desactivarControles(){
        btnEliminar.setDisable(true);
        btnEditar.setDisable(true);
        txtNIT.setEditable(false);
        txtDPI.setEditable(false);
        txtNom.setEditable(false);
        txtApe.setEditable(false);
        txtDir.setEditable(false);
        txtMun.setEditable(false);
        txtCP.setEditable(false);
        txtTel.setEditable(false);
    }
    
    public void menuPrincipal(){
        escenarioPrincipal.menuPrincipal();
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        cargarDatos();
    }
}
