<%-- 
    Document   : Principal
    Created on : Aug 29, 2022, 9:35:03 AM
    Author     : informatica
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>Menú principal</title>
    </head>
    <body>
        
        <nav class="navbar navbar-expand-lg" style="background-color:#fbc454 ">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a style="margin-left:10px; border:none" class="btn btn-outline-light" href="Controlador?menu=Home">Home</a>
                </li>
                <li class="nav-item">
                  <a style="margin-left:10px; border:none" class="btn btn-outline-light" href="Controlador?menu=Producto" target="myFrame">Producto</a>
                </li>
                <li class="nav-item">
                  <a style="margin-left:10px; border:none" class="btn btn-outline-light" href="Controlador?menu=Empleado&accion=Listar" target="myFrame">Empleado</a>
                </li>
                <li class="nav-item">
                    <a style="margin-left:10px; border:none" class="btn btn-outline-light" href="Controlador?menu=Cliente" target="myFrame">Cliente</a>
                </li>
                <li class="nav-item">
                  <a style="margin-left:10px; border:none" class="btn btn-outline-light" href="Controlador?menu=RegistrarVenta" target="myFrame">Registrar Venta</a>
                </li>
                
              </ul>
            </div>
            <div class="dropdown">
                <button style="border: none" class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ${usuario.getNombresEmpleado()}
                </button>
                <div class="dropdown-menu text-center" aria-labellebdy="dropdownMenuButton">
                    <a class="dropdown-item" href="#">
                        <img src="img/usuario.png" alt="" width="50" />
                    </a>
                  <a class="dropdown-item" href="#">${usuario.getUsuario()}</a>
                  <a class="dropdown-item" href="#">usuario@gmail.com</a>
                  <div class="dropdown-divider"></div>
                  <form action="Validar" method="POST">
                      <button name="accion" name="Salir" class="dropdown-item" href="#">Salir</button>
                  </form>
                </div>
             </div>
        </nav>
                  <div class="m-4" style="height: 680px">
                      <iframe name="myFrame" style="height: 100%; width: 100%; border:none"></iframe>
                      
                  </div>
                  
                  
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
</html>
