import { commonPasswords, caracteresEspeciales } from './modelo';

import { validarClave } from './validarClave';

// Errores
console.log(validarClave('Rebeca', '123456789', commonPasswords, caracteresEspeciales));
console.log(validarClave('Rebeca', 'Abcdefghi', commonPasswords, caracteresEspeciales));
console.log(validarClave('Rebeca', 'Abcd1234', commonPasswords, caracteresEspeciales));
console.log(validarClave('Rebeca', 'Abcd12?', commonPasswords, caracteresEspeciales));
console.log(validarClave('Rebeca', 'Rebeca12?', commonPasswords, caracteresEspeciales));
console.log(validarClave('Rebeca', 'Password12?', commonPasswords, caracteresEspeciales));

// Clave fuerte
console.log(validarClave('Rebeca', 'Lemon123?', commonPasswords, caracteresEspeciales));
