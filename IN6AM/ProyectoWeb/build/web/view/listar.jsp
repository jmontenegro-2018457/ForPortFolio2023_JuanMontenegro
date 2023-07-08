<%-- 
    Document   : listar
    Created on : 21/08/2022, 03:40:35 PM
    Author     : 
--%>

<%@page import="java.util.Iterator"%>
<%@page import="model.Persona"%>
<%@page import="java.util.List"%>
<%@page import="modelDAO.PersonaDAO"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" charset="utf-8" content="text/html; charset=UTF-8">
        <title>Listar Personas</title>
        <link rel="stylesheet" type="text/css" href="./Css/Lista.css">
    </head>
    <body bgColor="#2B2927">
        <div>
            <center>
                <h1>Registro de Personas</h1><br>
                <a href="Controlador?accion=add"> <input type="button" id="Agregar" value="Agregar Nueva Persona"> </a><br><br>
                <table border="1">
                    <thead>
                            <th>CODIGO PERSONA</th>
                            <th> DPI</th>
                            <th>NOMBRES</th>
                            <th>ACCIONES</th>
                    </thead>
                    <%
                        PersonaDAO dao = new PersonaDAO();
                        List<Persona> listaPersona = dao.listar();
                        Iterator<Persona> iterator = listaPersona.iterator();
                        Persona per = null;
                        while (iterator.hasNext()){
                            per = iterator.next();
                    %>
                    <tbody>
                        <tr>
                            <td><center><%= per.getCodigoPersona()%></center></td>
                            <td><%= per.getDPI()%></td>
                            <td><%= per.getNombrePersona()%></td>
                            <td id="control">
                                <a href="Controlador?accion=editar&codigoPersona=<%=per.getCodigoPersona()%>" id="edit">Editar&nbsp;</a>
                                <a href ="Controlador?accion=eliminar&codigoPersona=<%=per.getCodigoPersona()%>" id="delete">Eliminar</a>
                            </td>
                        </tr>
                        <%}%>
                    </tbody>

                </table>
            </center>
        </div>
    </body>
</html>
