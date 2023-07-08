<%-- 
    Document   : editar
    Created on : 21/08/2022, 03:39:55 PM
    Author     :
--%>

<%@page import="model.Persona"%>
<%@page import="modelDAO.PersonaDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Editar Persona</title>
        <link rel="stylesheet" type="text/css" href="./Css/AddEdit.css">
    </head>
    <body>
        <div>
            <div class="container"><center>
                <%
                    PersonaDAO nuevaPersonaDAO =new PersonaDAO();
                    int codPersona = Integer.parseInt((String)request.getAttribute("codPer"));
                    Persona nuevaPersona = (Persona)nuevaPersonaDAO.list(codPersona);
                %>
                <h1>Editar una persona</h1>
                <form action="Controlador">
                    <strong>DPI:</strong><br>
                    <input type="text" name="txtDPI" value="<%=nuevaPersona.getDPI()%>"><br><br>
                    <strong>Nombres:</strong><br>
                    <input type="text" name="txtNombre" value="<%=nuevaPersona.getNombrePersona()%>"><br>
                    <input type="hidden" name="txtCodigoPersona" value="<%=nuevaPersona.getCodigoPersona()%>"><br>
                    <input type="submit" name="accion" value="Actualizar">
                    
                </form>
                </center></div>
        </div>
        
    </body>
</html>
