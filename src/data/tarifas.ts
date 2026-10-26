// Tarifas oficiales usadas en la calculadora y en los precios orientativos de cada ruta
export const TARIFA_NORMAL = 1.37; // €/km, día laborable
export const TARIFA_FESTIVO = 1.59; // €/km, nocturno (21:00–8:00) o festivo
export const BAJADA = 1.75; // bajada de bandera, incluida en el total (no se muestra)

export const precioOrientativo = (km: number, tarifa = TARIFA_NORMAL) => Math.round(BAJADA + km * tarifa);

export const eur = (n: number) =>
  n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
