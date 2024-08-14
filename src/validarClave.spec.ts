import { ValidacionClave, commonPasswords, caracteresEspeciales } from './modelo';
import { validarClave } from './validarClave';

describe('validarClave', () => {
  it('Deberá devolver si la clave es válida o no mediante un booleano. Si viene a false, devolverá el error correspondiente', () => {
    const nombreDeUsuario: string = 'Rebeca';
    const clave: string = 'Password123?';

    const resultado = validarClave(nombreDeUsuario, clave, commonPasswords, caracteresEspeciales);

    const resultadoEsperado = {
      esValida: false,
      error: 'La clave no debe de contener palabras comunes',
    };
    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it('Deberá devolver si la clave es válida o no mediante un booleano. Si viene a false, devolverá el error correspondiente', () => {
    const nombreDeUsuario: string = 'Rebeca';
    const clave: string = 'Lemon123?';

    const resultado = validarClave(nombreDeUsuario, clave, commonPasswords, caracteresEspeciales);

    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };

    expect(resultado).toStrictEqual(resultadoEsperado);
  });
});
