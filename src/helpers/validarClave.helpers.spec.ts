import { ValidacionClave, commonPasswords, caracteresEspeciales } from '../validarClave/modelo';
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from './validarClave.helpers';

describe('tieneMayusculasYMinusculas', () => {
  it('Deberá devolver error si no existe combinación de mayúsculas y minúsculas', () => {
    const clave: string = 'ABCDEF';

    const resultado: ValidacionClave = tieneMayusculasYMinusculas(clave);

    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: 'La clave debe de tener mayúsculas y minúsculas',
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it('Deberá devolver error si no existe combinación de mayúsculas y minúsculas', () => {
    const clave: string = 'abcdef';

    const resultado: ValidacionClave = tieneMayusculasYMinusculas(clave);

    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: 'La clave debe de tener mayúsculas y minúsculas',
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it('Deberá devolver error si no existe combinación de mayúsculas y minúsculas', () => {
    const clave: string = 'AbcDef';

    const resultado = tieneMayusculasYMinusculas(clave);

    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });
});

describe('tieneNumeros', () => {
  it('Deberá devolver error si no existe al menos un caracter numérico', () => {
    const clave: string = 'AbcDef';

    const resultado = tieneNumeros(clave);

    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: 'La clave debe de tener números',
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it('Deberá devolver error si no existe al menos un caracter numérico', () => {
    const clave: string = 'AbcDef1';

    const resultado = tieneNumeros(clave);

    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });
});

describe('tieneCaracteresEspeciales', () => {
  it('Deberá devolver error si no existe al menos un caracter especial', () => {
    const clave: string = 'AbcDef1';
    const resultado = tieneCaracteresEspeciales(clave, caracteresEspeciales);

    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: 'La clave debe de tener caracteres especiales (@,#,+, _, ...)',
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it('Deberá devolver error si no existe al menos un caracter especial', () => {
    const clave: string = 'AbcDef1,';

    const resultado = tieneCaracteresEspeciales(clave, caracteresEspeciales);

    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });
});

describe('tieneLongitudMinima', () => {
  it('Deberá devolver error si no existen al menos 8 caracteres', () => {
    const clave: string = '12345';

    const resultado = tieneLongitudMinima(clave);

    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: 'La clave debe de tener una longitud mínima de 8 caracteres',
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it('Deberá devolver error si no existen al menos 8 caracteres', () => {
    const clave: string = '12345678';

    const resultado = tieneLongitudMinima(clave);

    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });
});

describe('tieneNombreUsuario', () => {
  it('Deberá devolver error si la clave contiene el nombre de usuario', () => {
    const nombreUsuario: string = 'Rebeca';

    const clave: string = 'Rebeca456';

    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    const resultadoEsperado = {
      esValida: false,
      error: 'La clave no debe tener el nombre del usuario',
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it('Deberá devolver error si la clave contiene el nombre de usuario', () => {
    const nombreUsuario: string = 'Rebeca';

    const clave: string = 'Lemon456';

    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    const resultadoEsperado = {
      esValida: true,
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });
});

describe('tienePalabrasComunes', () => {
  it('Deberá devolver error si la clave contiene alguna de las palabras comunes', () => {
    const clave = 'Password123';

    const resultado = tienePalabrasComunes(clave, commonPasswords);

    const resultadoEsperado = {
      esValida: false,
      error: 'La clave no debe de contener palabras comunes',
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it('Deberá devolver error si la clave contiene alguna de las palabras comunes', () => {
    const clave = 'qwerty123';

    const resultado = tienePalabrasComunes(clave, commonPasswords);

    const resultadoEsperado = {
      esValida: false,
      error: 'La clave no debe de contener palabras comunes',
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it('Deberá devolver error si la clave contiene alguna de las palabras comunes', () => {
    const clave = 'Lemon123?';

    const resultado = tienePalabrasComunes(clave, commonPasswords);

    const resultadoEsperado = {
      esValida: true,
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });
});
