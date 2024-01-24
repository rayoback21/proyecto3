/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

const axios = require('axios');
const nodeFetch = require('node-fetch');


async function axiosRequest(url) {
  const response = await axios.get(url);
  return response.data;
}


async function fetchRequest(url) {
  const response = await nodeFetch(url);
  return await response.json();
}

async function makeHttpRequest(requestFunction, url) {
  try {
    const result = await requestFunction(url);
    console.log(result);
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
  }
}

const apiUrl = 'https://rickandmortyapi.com/';


makeHttpRequest(axiosRequest, apiUrl);


makeHttpRequest(fetchRequest, apiUrl);

 
}

es un ejemplo de cómo realizar solicitudes HTTP en NestJS. El código comienza desactivando el formateo automático del código por Prettier. Luego, importa los decoradores y servicios necesarios de NestJS.

El siguiente paso es definir la clase AppController, que actúa como un controlador en NestJS. La clase AppController tiene un constructor que recibe un servicio AppService como parámetro.

A continuación, se importan las bibliotecas axios y node-fetch. axios se utiliza para realizar solicitudes HTTP utilizando Promesas, mientras que node-fetch es un módulo de Node.js que implementa la interfaz de la función fetch, comúnmente utilizada en el navegador.

Luego, se definen dos funciones asincrónicas: axiosRequest y fetchRequest. Estas funciones realizan una solicitud GET utilizando axios y node-fetch, respectivamente.

Finalmente, se define una función asincrónica makeHttpRequest que realiza una solicitud utilizando la función proporcionada y maneja cualquier error que pueda ocurrir durante la solicitud.

El código utiliza las funciones definidas anteriormente para realizar dos solicitudes HTTP a la API de Rick and Morty. Los resultados de las solicitudes se registran en la consola, y cualquier error que ocurra durante la solicitud se maneja e imprime en la consola.

Aquí hay una explicación más detallada de cada línea de código:

/* eslint-disable prettier/prettier */
Esta línea desactiva el formateo automático del código por Prettier.

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
Estas líneas importan decoradores y servicios necesarios de NestJS. Controller es un decorador para definir un controlador, y Get se utiliza para especificar que el método manejará solicitudes HTTP GET. Además, se importa el servicio AppService, que probablemente se use para realizar operaciones específicas en la lógica de la aplicación.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
Aquí se define la clase AppController, que actúa como un controlador en NestJS. Se utiliza el decorador @Controller() para indicar que esta clase es un controlador.

const axios = require('axios');
const nodeFetch = require('node-fetch');
Se importan las bibliotecas axios y node-fetch. axios se utiliza para realizar solicitudes HTTP utilizando Promesas, mientras que node-fetch es un módulo de Node.js que implementa la interfaz de la función fetch, comúnmente utilizada en el navegador.

async function axiosRequest(url) {
  const response = await axios.get(url);
  return response.data;
}
Se define una función asincrónica axiosRequest que toma una URL como parámetro, realiza una solicitud GET utilizando axios y devuelve los datos de la respuesta.

async function fetchRequest(url) {
  const response = await nodeFetch(url);
  return await response.json();
}
Se define una función asincrónica fetchRequest que toma una URL como parámetro, realiza una solicitud utilizando node-fetch y devuelve los datos de la respuesta en formato JSON.

async function makeHttpRequest(requestFunction, url) {
  try {
    const result = await requestFunction(url);
    console.log(result);
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
  }
}
Se define una función asincrónica makeHttpRequest que toma una función de solicitud (requestFunction) y una URL como parámetros. La función realiza la solicitud utilizando la función proporcionada y maneja cualquier error que pueda ocurrir durante la solicitud.

const apiUrl = 'https://rickandmortyapi.com/';
Se define una constante apiUrl que contiene la URL base para realizar las solicitudes a la API de Rick and Morty.

makeHttpRequest(axiosRequest, apiUrl);
makeHttpRequest(fetchRequest, apiUrl);
Se realizan dos solicitudes HTTP utilizando las funciones definidas anteriormente (axiosRequest y fetchRequest). Los resultados de las solicitudes se registran en la consola, y cualquier error que ocurra durante la solicitud se maneja e imprime en la consola.
