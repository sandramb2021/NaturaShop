# NaturaShop

Es una aplicación creada utilizando [Create React App](https://github.com/facebook/create-react-app), para vender productos cosméticos de la marca Natura.

## Guía de instalación

Puedes descargar el proyecto y ejecutar:

### `npm start`

La aplicación iniciará y podrás accederla a través de tu navegador, con la dirección:\
[http://localhost:3000](http://localhost:3000) .

Se carga inicialmente en el Home del sitio, donde podrás acceder a TODOS los productos de la marca\

## Más acerca de NaturaShop

Puedes acceder al catálogo de productos, en función de su categoría: Cabellos, Cosméticos y Perfumería, haciendo click en la barra de navegación, en el link respectivo. 

Si te interesa algún producto de los visualizados, puedes hacer click sobre él para ver algunos detalles más del mismo.\
Si así lo haces, te mostrará una breve descripción, su precio y la posibilidad de comprar las unidades que desees, siempre que haya stock.\
Desde allí mismo puedes ir al carrito, para ver todas tus compras, del mismo modo que si hacés click en el carrito de la barra de menú de navegación.\

Cuando accedes a tu carrito, verás la lista de productos que deseas, con las cantidades elegidas, un cálculo total por producto, y un total por todo el carrito. Tendrás posibilidad de eliminar un producto si así lo deseas, como también,\ modificar la cantidad de algún producto de tu carrito, siempre que haya stock, si agregas, como eliminarlo del carrito si eliges 0 como cantidad.

Desde el carrito, podrás:
* Volver a la tienda, con todos los productos\
* Vaciar el carrito\
* Terminar la compra, lo que te mostrará un mensaje del éxito de tu compra, y limpiará el carrito, por si quieres seguir comprando nuestros productos.

### Repositorio de Datos

Para el almacenamiento y manejo de la información de los productos, se usó Firestore de Firebase.\

### Seguridad

Está en fase de desarrollo un esquema de seguridad para ingresar al sitio con un usuario de autenticación.\

### Pago de la compra

No está implementado el cobro. Momentáneamente se maneja vía transferencia bancaria o contra entrega personalmente.