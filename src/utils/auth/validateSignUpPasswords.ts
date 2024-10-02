/**
 * Valida si las contraseñas coinciden.
 *
 * @param password - La contraseña ingresada.
 * @param confirmPassword - La confirmación de la contraseña ingresada.
 * @returns Un string con el mensaje de error o `null` si no hay error.
 */
export default function validateSignUpPasswords (
  password: string,
  confirmPassword: string
): string | null {
  if (password !== confirmPassword) {
    return "Las contraseñas no coinciden. Por favor, inténtalo de nuevo.";
  }
  return null;
};