/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.juanmontenegro.system;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;


/**
 *
 * @author informatica
 */
public class FXMLDocumentController implements Initializable {
    double dato1=0, dato2=0, result=0,ac=0;
   int op,b=1;
    @FXML
    private Button btnUno;
    @FXML
    private Button btnDos;
    @FXML
    private Button btnTres;
    @FXML
    private Button btnCuatro;
    @FXML
    private Button btnCinco;
    @FXML
    private Button btnSeis;
    @FXML
    private Button btnSiete;
    @FXML
    private Button btnOcho;
    @FXML
    private Button btnNueve;
    @FXML
    private Button btnCero;
    @FXML
    private Button btnMasMenos;
    @FXML
    private Button btnIgual;
    @FXML
    private Button btnMenos;
    @FXML
    private Button btnMas;
    @FXML
    private Button btnPor;
    @FXML
    private Button btnPunto;
    @FXML
    private Button btnDivi;
    @FXML
    private Button btnUnoX;
    @FXML
    private Button btnCuadrado;
    @FXML
    private Button btnRaiz;
    @FXML
    private Button btnPorcent;
    @FXML
    private Button btnCE;
    @FXML
    private Button btnC;
    @FXML
    private Button btnBack;
    
    @FXML
    private TextField txtPantalla;
          
    
    
    
    
    @FXML
    private void handleButtonAction(ActionEvent event) {
        
        //*-- Botones 0 al 9 ----------------------------------------
        
       if(event.getSource() == btnUno )
           txtPantalla.setText(txtPantalla.getText()+"1");
       else if(event.getSource() == btnDos )
           txtPantalla.setText(txtPantalla.getText()+"2");
       else if(event.getSource() == btnTres )
           txtPantalla.setText(txtPantalla.getText()+"3");
       else if(event.getSource() == btnCuatro )
           txtPantalla.setText(txtPantalla.getText()+"4");
       else if(event.getSource() == btnCinco )
           txtPantalla.setText(txtPantalla.getText()+"5");
       else if(event.getSource() == btnSeis )
           txtPantalla.setText(txtPantalla.getText()+"6");
       else if(event.getSource() == btnSiete )
           txtPantalla.setText(txtPantalla.getText()+"7");
       else if(event.getSource() == btnOcho )
           txtPantalla.setText(txtPantalla.getText()+"8");
       else if(event.getSource() == btnNueve )
           txtPantalla.setText(txtPantalla.getText()+"9");
       else if(event.getSource() == btnCero )
           txtPantalla.setText(txtPantalla.getText()+"0");
       else if (event.getSource()== btnPunto){
      //* -----------------------------------------------------------
           
       // Punto    
         if(txtPantalla.getText().length() == 0){
            txtPantalla.setText(txtPantalla.getText()+"0.");
            btnPunto.setDisable(true);
         }else {
             txtPantalla.setText(txtPantalla.getText()+".");
             btnPunto.setDisable(true);
         }
       }
       // ----------------------------------------------------------
       
       //  --------------------Suma---------------------------------
       else if(event.getSource()== btnMas){
          
           dato1 = Double.parseDouble(txtPantalla.getText());
               result=dato1+result;
           txtPantalla.clear();
           op=1;
           btnPunto.setDisable(false);
       }
       //---------------------------------------------------------
       
       // -------------------Resta-------------------------------
       //Funciona suscesivamente, solo que si el primer dato se 
       //quiere declarar como negativo utilizar el botón +/- de lo contrario dara
       //un error(ejemplo: si la primer resta quiere ser -4-2 dara 2 por que no reconoce el primer -).
       //Si el primer dato es un resultado que ya es
       //negativo(ó igual a 0) si se puede seguir restando y funcionará perfectamente.
       else if(event.getSource()== btnMenos){
               
               dato1 = Double.parseDouble(txtPantalla.getText());
               if(b==1){
               result=dato1;
               }else if(b==0)
                ac=dato1+ac;
               txtPantalla.clear();
               op=2;
               btnPunto.setDisable(false);
             b=0;
       }
       //-------------------------------------------------------
       
       // -----------------Multiplicación ----------------------
       else if(event.getSource()== btnPor){
           dato1 = Double.parseDouble(txtPantalla.getText());
           txtPantalla.clear();
           op=3;
           btnPunto.setDisable(false);
       }
       //-------------------------------------------------------
       
       // ------------------ División --------------------------
       else if(event.getSource()== btnDivi){
           dato1 = Double.parseDouble(txtPantalla.getText());
           txtPantalla.clear();
           op=4;
           btnPunto.setDisable(false);
       }
       //------------------------------------------------------
       
       //-----------------Igual --------------------------------
       else if(event.getSource()== btnIgual){
           dato2 = Double.parseDouble(txtPantalla.getText());
            btnPunto.setDisable(true);
           txtPantalla.clear();
          
           switch(op){
               case 1:
                result = result+dato2;
                break;
               case 2:
                   result = result-(dato2+ac);
               break;
               case 3:
                   result = dato1*dato2;
               break;
               case 4:
                   result = dato1/dato2;
               break;
           }
           txtPantalla.setText(String.valueOf(result));
           dato1=0; 
           result=0;
           ac=0;
           b=1;
       }
       //-----------------------------------------------
       
       //-----------------CE ---------------------------
       else if(event.getSource()== btnCE){
           btnPunto.setDisable(false);
           txtPantalla.clear();
       }
       //-----------------------------------------------
       
       //-------------------C---------------------------
       else if(event.getSource()== btnC){
           txtPantalla.clear();
           btnPunto.setDisable(false);
           dato1=0;
           dato2=0;
           result=0;}
       //----------------------------------------------
       
       //-----------------Cambio de signo -------------
       else if(event.getSource()== btnMasMenos){
           btnPunto.setDisable(false);
           dato1 = Double.parseDouble(txtPantalla.getText());
           result=dato1*-1;
           txtPantalla.clear();
           txtPantalla.setText(String.valueOf(result));
       }
       //---------------------------------------------
       
       //------------------Número al cuadrado --------
       else if(event.getSource()== btnCuadrado){
           btnPunto.setDisable(false);
           dato1 = Double.parseDouble(txtPantalla.getText());
           result=dato1*dato1;
           txtPantalla.clear();
           txtPantalla.setText(String.valueOf(result));
       }
       //---------------------------------------------
       
       // -----------------Raíz cuadrada -------------
       else if(event.getSource()== btnRaiz){
           btnPunto.setDisable(false);
           dato1 = Double.parseDouble(txtPantalla.getText());
           txtPantalla.clear();
           result= Math.sqrt(dato1);
           txtPantalla.setText(String.valueOf(result));
       }
       //---------------------------------------------
       
       //-----------Dividir 1/n ----------------------
       else if(event.getSource()== btnUnoX){
           btnPunto.setDisable(false);
           dato1 = Double.parseDouble(txtPantalla.getText());
           txtPantalla.clear();
           result=1/dato1;
           txtPantalla.setText(String.valueOf(result));
       }
       //------------------------------------------------
       
       //-------------------BackSpace -------------------
         //-----------Quedó muy bien, es funcional y habilita el punto si se llegá a borrar--------------------
       else if(event.getSource()== btnBack){
           
           StringBuilder pantalla = new StringBuilder(txtPantalla.getText());
            txtPantalla.clear();
           pantalla = pantalla.deleteCharAt(pantalla.length()-1);
           
            txtPantalla.setText(String.valueOf(pantalla));
            if(txtPantalla.getText().contains("."))
                btnPunto.setDisable(true);
            else  btnPunto.setDisable(false);
       }
       //---------------------------------------------
       
       //----------------Porcentaje-------------------
       else if(event.getSource() == btnPorcent){
           btnPunto.setDisable(false);
           double valPorcent=0 ,valPantalla= 0;
           valPantalla = Double.parseDouble(txtPantalla.getText());
           txtPantalla.clear();
           valPorcent = valPantalla/100;
           txtPantalla.setText(String.valueOf(valPorcent));
           valPorcent=0;
       }
       
    }
    
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
    }    
    
}
