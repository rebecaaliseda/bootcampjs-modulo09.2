import { ValidacionClave } from '../validarClave/modelo';

const esClaveValida = () => {
  return {
    esValida: true,
  };
};

const noEsClaveValida = (msgError: string) => {
  return {
    esValida: false,
    error: msgError,
  };
};

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('Alguno de los parámetros introducidos no es válido');
  }

  if (clave.toLowerCase() === clave || clave.toUpperCase() === clave) {
    return noEsClaveValida('La clave debe de tener mayúsculas y minúsculas');
  } else {
    return esClaveValida();
  }
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('Alguno de los parámetros introducidos no es válido');
  }

  let claveArray = clave.split('');

  const tieneNumeros = claveArray.some((letra: string) => !isNaN(parseInt(letra)));

  return tieneNumeros ? esClaveValida() : noEsClaveValida('La clave debe de tener números');
};

export const tieneCaracteresEspeciales = (
  clave: string,
  caracteresEspeciales: string[]
): ValidacionClave => {
  if (!clave || !caracteresEspeciales) {
    throw new Error('Alguno de los parámetros introducidos no es válido');
  }

  const tieneCaracteresEspeciales = caracteresEspeciales.some((caracter) =>
    clave.includes(caracter)
  );

  return tieneCaracteresEspeciales
    ? esClaveValida()
    : noEsClaveValida('La clave debe de tener caracteres especiales (@,#,+, _, ...)');
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('Alguno de los parámetros introducidos no es válido');
  }

  return clave.length >= 8
    ? esClaveValida()
    : noEsClaveValida('La clave debe de tener una longitud mínima de 8 caracteres');
};

export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
  if (!nombreUsuario || !clave) {
    throw new Error('Alguno de los parámetros introducidos no es válido');
  }

  const txtoClave = clave.toLowerCase();
  const txtoNombreUsuario = nombreUsuario.toLowerCase();

  return !txtoClave.includes(txtoNombreUsuario)
    ? esClaveValida()
    : noEsClaveValida('La clave no debe tener el nombre del usuario');
};

export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
  if (!commonPasswords || !clave) {
    throw new Error('Alguno de los parámetros introducidos no es válido');
  }

  const tienePalabrasComunes = commonPasswords.some((password) =>
    clave.toLowerCase().includes(password.toLowerCase())
  );

  return !tienePalabrasComunes
    ? esClaveValida()
    : noEsClaveValida('La clave no debe de contener palabras comunes');
};
