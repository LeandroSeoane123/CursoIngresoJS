function mostrar()
{
var precio;
var descuento;
var precioFinal;

precio = prompt("Ingrese el precio.");

parseInt(precio);

descuento = prompt("Ingrese el descuento");

parseInt(descuento);

descuento = precio * descuento / 100;

precioFinal = precio - descuento;

document.getElementById("elPrecioFinal").value = precioFinal;



}
