
$(document).ready(function(){
  var url="inicio";
  if (localStorage.getItem("url") == null){
    localStorage.setItem("url", url);
  }
  else{
    url=localStorage.getItem("url");
  }



  ubicacion();


	$("#opcInicio" ).click(function() {
      ajaxMain("inicio");
	});
	$("#opcActos" ).click(function() {
      ajaxMain("actos");
	});
	$("#opcGacetas" ).click(function() {
    ajaxMain("gacetas");
	});
	$("#opcVenta" ).click(function() {
    ajaxMain("venta");
	});
	$("#opcPlanCuenta" ).click(function() {
    ajaxMain("plan-cuenta");
	});
  $('#ajaxMain').on('click', '#opcInicio', function(){
    ajaxMain("inicio");
  });
  $("#opcNuevaGaceta").click(function() {
    ajaxMain("nuevaGaceta");
    });
  $("#opcNuevoActo").click(function() {
    ajaxMain("nuevoActo");
    });
   $("#opcUsuario").click(function() {
    ajaxMain("usuario");
    });




  //Opciones dentro del DOM ajaxMain

  $('#ajaxMain').on('click', '#ButtonNuevaGaceta', function(){
    ajaxMain("nuevaGaceta");
  });
  $('#ajaxMain').on('click', '#regresarGaceta', function(){
    ajaxMain("gacetas");
  });
  $('#ajaxMain').on('click', '#ButtonNuevoActo', function(){
    ajaxMain("nuevoActo");
  });
  $('#ajaxMain').on('click', '#regresarActo', function(){
    ajaxMain("actos");
  });
  $('#ajaxMain').on('click', '#regresarVenta', function(){
    ajaxMain("venta");
  });

});

function ajaxMain(direccion){
  url=direccion;
  console.log(url);
    $.get(url,function(data){ 
        $('#ajaxMain').empty().html(data);
      }); 
  //Desactivar opción del menu
  desmarcar(url);
  //Activar opción del menu
  menu(url);
  localStorage.setItem("url", url);
}

function menu(url){
	switch (url) {
    case 'ventas':
      $('#opcVentas').addClass('active');
      break;
    case 'actos':
      $('#opcActos').addClass('active');
      break;
    case 'index':
      $('#opcInicio').addClass('active');
      break;
     case 'inicio':
      $('#opcInicio').addClass('active');
      break;

    case 'gacetas':
      $('#opcGacetas').addClass('active');
      break;

    case 'venta':
      $('#opcVenta').addClass('active');
      break;

    case 'plan-cuenta':
      $('#opcPlanCuenta').addClass('active');
      break;

    case 'nuevaGaceta':
      $('#opcNuevaGaceta').addClass('active');
      break;
    case 'nuevoActo':
      $('#opcNuevoActo').addClass('active');
      break;
    case 'usuario':
      $('#opcUsuario').addClass('active');
      break;

    default:
     // alert(url);
      break;
  }
}

function desmarcar(url){
    if(url!='ventas')
      $('#opcVentas').removeClass('active');
    if(url!='actos')
      $('#opcActos').removeClass('active');
    if(url!='index')
      $('#opcInicio').removeClass('active');
    if(url!='inicio')
      $('#opcInicio').removeClass('active');

    if(url!='gacetas')
      $('#opcGacetas').removeClass('active');

    if(url!='venta')
      $('#opcVenta').removeClass('active');

    if(url!='plan-cuenta')
      $('#opcPlanCuenta').removeClass('active');

    if(url!='nuevaGaceta')
      $('#opcNuevaGaceta').removeClass('active');
    if(url!='nuevoActo')
      $('#opcNuevoActo').removeClass('active');
    if(url!='usuario')
      $('#opcUsuario').removeClass('active');
}

function ubicacion(){
  url=localStorage.getItem("url");
  desmarcar(url);
  console.log(url);
  switch (url) {
    case 'ventas':
        $.get(url,function(data){ 
            $('#ajaxMain').empty().html(data);
          }); 
      //Activar opción del menu
      menu(url);
      break;
    case 'actos':
      $.get(url,function(data){ 
          $('#ajaxMain').empty().html(data);
        }); 
      //Activar opción del menu
      menu(url);
      break;
    case 'index':
        $.get(url,function(data){ 
            $('#ajaxMain').empty().html(data);
          }); 
      //Activar opción del menu
      menu(url);
      break;
    case 'inicio':
        $.get(url,function(data){ 
            $('#ajaxMain').empty().html(data);
          }); 
      //Activar opción del menu
      menu(url);
      break;

    case 'gacetas':
        $.get(url,function(data){ 
            $('#ajaxMain').empty().html(data);
          }); 
      //Activar opción del menu
      menu(url);
      break;

    case 'venta':
        $.get(url,function(data){ 
            $('#ajaxMain').empty().html(data);
          }); 
      //Activar opción del menu
      menu(url);
      break;

    case 'plan-cuenta':
        $.get(url,function(data){ 
            $('#ajaxMain').empty().html(data);
          }); 
      //Activar opción del menu
      menu(url);
      break;

    case 'nuevaGaceta':
        $.get(url,function(data){ 
            $('#ajaxMain').empty().html(data);
          }); 
      //Activar opción del menu
      menu(url);
      break;

    case 'nuevoActo':
        $.get(url,function(data){ 
            $('#ajaxMain').empty().html(data);
          }); 
      //Activar opción del menu
      menu(url);
      break;

    case 'usuario':
        $.get(url,function(data){ 
            $('#ajaxMain').empty().html(data);
          }); 
      //Activar opción del menu
      menu(url);
      break;

    default:
      //alert(url);
      break;
  }
}