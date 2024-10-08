import { ValidacionClave } from './modelo';
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from '../helpers/validarClave.helpers';

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[],
  caracteresEspeciales: string[]
): ValidacionClave => {
  if (!nombreUsuario || !clave || !commonPasswords || !caracteresEspeciales) {
    throw new Error('Alguno de los parámetros introducidos no es válido');
  }
  let claveFinal: ValidacionClave = { esValida: false };

  claveFinal = tieneMayusculasYMinusculas(clave);

  if (claveFinal.esValida === true) {
    claveFinal = tieneNumeros(clave);
  }

  if (claveFinal.esValida === true) {
    claveFinal = tieneCaracteresEspeciales(clave, caracteresEspeciales);
  }

  if (claveFinal.esValida === true) {
    claveFinal = tieneLongitudMinima(clave);
  }

  if (claveFinal.esValida === true) {
    claveFinal = tieneNombreUsuario(nombreUsuario, clave);
  }

  if (claveFinal.esValida === true) {
    claveFinal = tienePalabrasComunes(clave, commonPasswords);
  }

  return claveFinal;
};
