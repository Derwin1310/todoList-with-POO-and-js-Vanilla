import '/src/css/componentes.css';
import webpackimg from '/src/assets/img/webpack-logo.png'

export const saludo = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1')
    h1.innerText = `Hola, ${nombre}!`

    document.body.append(h1)

    //Img
    const img = document.createElement('img')
    img.src = webpackimg
    document.body.append(img);
}
