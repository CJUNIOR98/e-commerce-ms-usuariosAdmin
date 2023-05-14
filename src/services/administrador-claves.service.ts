import {/* inject, */ BindingScope, injectable} from '@loopback/core';
const generator = require('generate-password');
const CryptoJS = require('crypto-js');

@injectable({scope: BindingScope.TRANSIENT})
export class AdministradorClavesService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
  crearClaveAleatoria(): string {
    const password = generator.generate({
      length: 8,
      numbers: true,
      Uppercase: true,
    });
    return password;
  }

  cifrarTexto(texto: string) {
    const textoCifrado = CryptoJS.MD5(texto).toString();
    return textoCifrado;
  }
}
