 //  Función para validar codigo postal y provincia

 function Validacp() {
   const input = document.getElementById("cpostal").value;

   var cp_provincias = {
     1: "\u00C1lava",
     2: "Albacete",
     3: "Alicante",
     4: "Almer\u00EDa",
     5: "\u00C1vila",
     6: "Badajoz",
     7: "Baleares",
     08: "Barcelona",
     09: "Burgos",
     10: "C\u00E1ceres",
     11: "C\u00E1diz",
     12: "Castell\u00F3n",
     13: "Ciudad Real",
     14: "C\u00F3rdoba",
     15: "Coruña",
     16: "Cuenca",
     17: "Gerona",
     18: "Granada",
     19: "Guadalajara",
     20: "Guip\u00FAzcoa",
     21: "Huelva",
     22: "Huesca",
     23: "Ja\u00E9n",
     24: "Le\u00F3n",
     25: "L\u00E9rida",
     26: "La Rioja",
     27: "Lugo",
     28: "Madrid",
     29: "M\u00E1laga",
     30: "Murcia",
     31: "Navarra",
     32: "Orense",
     33: "Asturias",
     34: "Palencia",
     35: "Las Palmas",
     36: "Pontevedra",
     37: "Salamanca",
     38: "Santa Cruz de Tenerife",
     39: "Cantabria",
     40: "Segovia",
     41: "Sevilla",
     42: "Soria",
     43: "Tarragona",
     44: "Teruel",
     45: "Toledo",
     46: "Valencia",
     47: "Valladolid",
     48: "Vizcaya",
     49: "Zamora",
     50: "Zaragoza",
     51: "Ceuta",
     52: "Melilla"
   };
   if (input.length === 0) {
     document.getElementById("demo").innerHTML = "Escribe el codigo postal !";
   } else if (input.length == 5 && parseInt(input) >= 1000 && parseInt(input) <= 52999) {
     document.getElementById("demo").innerHTML = " </br> </br>  Código valido!";
     document.getElementById("demo").className = "green";
     document.getElementById("localidad").value = cp_provincias[parseInt(input.substring(0, 2))];;
     if (!(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s\w+)*$/.test(document.getElementById("localidad").value))) {
       document.getElementById("validador").innerHTML = "</br> </br> La provincia no tiene el formato valido";
       document.getElementById("validador").className = "rojo";
     } else {
       document.getElementById("validador").innerHTML = "</br> </br> La provincia tiene el formato valido";
       document.getElementById("validador").className = " </br> </br> green";
     }
   } else {
     document.getElementById("demo").innerHTML = "</br> </br> Codigo invalido!";
     document.getElementById("demo").className = "rojo";
   }
 }






 //    Funcion para indicar al usuario que el formulario se ha enviado        



 function limpiarFormulario() {


   document.getElementById("formulario").reset();




 }
 window.addEventListener('DOMContentLoaded', () => {
   let txtName = document.getElementById('txtName');
   txtName.addEventListener('keyup', (ev) => {
     updateAvatar(ev.target.value);
   });

 });


 function updateAvatar(name) {
   let divSvgContainer = document.getElementById('divSvgContainer');

   if (name.length === 0) {
     divSvgContainer.innerHTML = '';

   } else {

     var svgEl = multiavatar(name);
     divSvgContainer.innerHTML = svgEl;

   }
 }

 //    data functions


 var Glob;
 Glob = "";

 function myFunction() {

   var skills;
   if (Glob == "") {
     Glob = "<span class=tag>" + document.getElementById('skills').value + "</span>";
   } else {
     Glob = "<span class=tag2>" + Glob + "</span>" + "</br>" + "</br> " + "<span class=tag>" + document.getElementById('skills').value + "</span>";

   }
   document.getElementById('display').innerHTML = Glob;
   document.getElementById('skiperfil').innerHTML = Glob;
   document.getElementById('skills').value = "";

 }

 function todas() {
 
   experiencia();
   myObtener();


   function experiencia() {
     var v2 = parseFloat(document.getElementById('number').value);
     document.getElementById('experienciaperfil').innerHTML = v2 + "  años ";
   }

   function myObtener() {
     var nombre;
     nombre = "";
     var email;
     email = "";
     var descripcion;
     descripcion = "";
     var cpostal;
     cpostal = "";
     var localidad;
     localidad = "";


     if (nombre == "") {
       nombre = document.getElementById('txtName').value;
       email = document.getElementById('email').value;
       descripcion = document.getElementById('descripcion').value;
       cpostal = document.getElementById('cpostal').value;
       localidad = document.getElementById('localidad').value;


     } else {
       nombre = document.getElementById('txtName').value;
       email = document.getElementById('email').value;
       descripcion = document.getElementById('descripcion').value;
       cpostal = document.getElementById('cpostal').value;
       localidad = document.getElementById('localidad').value;

     }

     document.getElementById('nombrecreado').innerHTML = nombre;
     document.getElementById('txtName').value = "";
     document.getElementById('emailperfil').innerHTML = email;
     document.getElementById('email').value = "";
     document.getElementById('descripcionperfil').innerHTML = descripcion;
     document.getElementById('descripcion').value = "";
     document.getElementById('cperfil').innerHTML = cpostal;
     document.getElementById('cpostal').value = "";
     document.getElementById('localidadperfil').innerHTML = localidad;
     document.getElementById('localidad').value = "";
     document.getElementById('formulario').style.display="none";
     document.getElementById('titulo').innerHTML = 'Tu perfil ha sido creado';
     

   }

 }