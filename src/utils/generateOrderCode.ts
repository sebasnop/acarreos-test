/**
 * Genera un código de pedido / servicio usando la fecha actual
 * y un número aleatorio.
 *
 * @returns El número de código de pedido.
 */
export default function generateOrderCode(): string {

  // Generar la fecha actual en formato YYYYMMDD
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateStr = `${year}${month}${day}`;

  // Generar un número aleatorio de 3 dígitos
  const randomNumber = Math.floor(Math.random() * 900) + 100;

  return `${dateStr}${randomNumber}`;
}