const fs = require ('fs')
const express = require('express');
const app = express()



class Contenedor {

    constructor() {
        this.productos = [];
    }

    save(producto) {
        producto.id = this.productos.length + 1;
        console.log('----- ID del producto guardado: ', producto.id, '-----')
        this.productos.push(producto);
        let productos = this.productos
        async function guardar_producto(productos) {
            try {
                await fs.promises.writeFile('./productos.txt', JSON.stringify(productos))
                // console.log('guardado')
                
               
            } catch (err) {
                console.log('error al guardar')
            }
        }
        guardar_producto(productos)
    }

    async getAll(){
        try {
            return JSON.parse(await fs.promises.readFile('./productos.txt', 'utf8'));
        } catch (error) {
            throw new Error(error);
        }}
    
        
    

}



(async function A () {
    let articulo = new Contenedor;
    await articulo.save( 
        {
            title: 'A',
            price: 100,
            thumbnail: 'http://www.google.com.ar'
         }
    )
    
    await articulo.save({
        title: 'B',
        price: 100,
        thumbnail: 'http://www.google.com.ar'
    })
    
    await articulo.save({
        title: 'C',
        price: 100,
        thumbnail: 'http://www.google.com.ar'
    })

    
   

})();


module.exports = Contenedor