<%-- 
    Document   : add
    Created on : 21/08/2022, 03:39:18 PM
    Author     : 
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Agregar Persona</title>
         <link rel="stylesheet" type="text/css" href="./Css/AddEdit.css">
    </head>
    <body>
        <div>
            <div class="container"><center>
                <h1>Agregar nueva persona</h1>
                <form action="Controlador">
                    <strong>DPI:</strong> <br>
                    <input type="text" name="txtDPI"><br><br>
                    <strong>Nombres:</strong><br>
                    <input type="text" name="txtNombre"><br><br>
                    <input type="submit" name="accion" value="Agregar"><br>
                </form>
                </center></div>
        </div>
        
    </body>
</html>
