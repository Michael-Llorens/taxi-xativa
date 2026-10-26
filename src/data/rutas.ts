// Trayectos con página propia (/taxi-…/). Generadas por src/pages/[ruta].astro
export interface Ruta {
  slug: string;
  /** Texto de enlace (pie, zonas, otras rutas) y miga de pan */
  nombre: string;
  /** "a Gandia", "al aeropuerto de Valencia"… para construir frases */
  aDestino: string;
  km: number;
  duracion: string;
  /** Duración abreviada para la ficha del trayecto */
  tiempo: string;
  aeropuerto: boolean;
  title: string;
  h1: string;
  h2: string;
  intro: string;
}

export const rutas: Ruta[] = [
  {
    slug: 'taxi-aeropuerto-valencia',
    nombre: 'Taxi al aeropuerto de Valencia',
    aDestino: 'al aeropuerto de Valencia',
    km: 70,
    duracion: 'unos 50 minutos',
    tiempo: '50 min',
    aeropuerto: true,
    title: 'Taxi Xàtiva → Aeropuerto de Valencia | Traslados directos',
    h1: 'Taxi de Xàtiva al Aeropuerto de Valencia',
    h2: 'Traslado directo al aeropuerto de Valencia',
    intro:
      'El aeropuerto de Valencia (Manises) está a unos 70 km de Xàtiva, alrededor de 50 minutos de viaje. Realizo traslados directos, sin paradas innecesarias, para que llegues con tiempo de sobra a tu vuelo. Reserva con antelación y deja que me ocupe de todo.',
  },
  {
    slug: 'taxi-aeropuerto-alicante',
    nombre: 'Taxi al aeropuerto de Alicante',
    aDestino: 'al aeropuerto de Alicante-Elche',
    km: 115,
    duracion: 'alrededor de 1 hora y 15 minutos',
    tiempo: '1 h 15 min',
    aeropuerto: true,
    title: 'Taxi Xàtiva → Aeropuerto de Alicante | Traslados directos',
    h1: 'Taxi de Xàtiva al Aeropuerto de Alicante',
    h2: 'Traslado directo al aeropuerto de Alicante',
    intro:
      'El aeropuerto de Alicante-Elche está a unos 115 km de Xàtiva, alrededor de 1 hora y 15 minutos de viaje. Te llevo y te recojo de forma directa y puntual, sin transbordos ni esperas inesperadas. Reserva con antelación para asegurar la disponibilidad.',
  },
  {
    slug: 'taxi-gandia',
    nombre: 'Taxi Xàtiva a Gandia',
    aDestino: 'a Gandia',
    km: 47,
    duracion: 'unos 35–40 minutos',
    tiempo: '35–40 min',
    aeropuerto: false,
    title: 'Taxi Xàtiva → Gandia | Ricardo Llorens — Traslados directos',
    h1: 'Taxi de Xàtiva a Gandia',
    h2: 'Traslado directo de Xàtiva a Gandia',
    intro:
      'El trayecto de Xàtiva a Gandia son aproximadamente 47 km, unos 35–40 minutos de viaje. Traslado puerta a puerta, sin paradas, cómodo y puntual para que llegues sin estrés a tu destino, ya sea la ciudad, la playa o la estación.',
  },
  {
    slug: 'taxi-alicante',
    nombre: 'Taxi Xàtiva a Alicante',
    aDestino: 'a Alicante',
    km: 110,
    duracion: 'alrededor de 1 hora y 10 minutos',
    tiempo: '1 h 10 min',
    aeropuerto: false,
    title: 'Taxi Xàtiva → Alicante | Ricardo Llorens — Traslados directos',
    h1: 'Taxi de Xàtiva a Alicante',
    h2: 'Traslado directo de Xàtiva a Alicante',
    intro:
      'El trayecto de Xàtiva a Alicante son aproximadamente 110 km por la A-7, alrededor de 1 hora y 10 minutos de viaje. Traslado directo puerta a puerta, sin transbordos, con total tranquilidad durante todo el recorrido.',
  },
  {
    slug: 'taxi-ontinyent',
    nombre: 'Taxi Xàtiva a Ontinyent',
    aDestino: 'a Ontinyent',
    km: 27,
    duracion: 'unos 25–30 minutos',
    tiempo: '25–30 min',
    aeropuerto: false,
    title: 'Taxi Xàtiva → Ontinyent | Ricardo Llorens — Traslados directos',
    h1: 'Taxi de Xàtiva a Ontinyent',
    h2: 'Traslado directo de Xàtiva a Ontinyent',
    intro:
      'El trayecto de Xàtiva a Ontinyent son aproximadamente 27 km, unos 25–30 minutos de viaje. Un traslado rápido, cómodo y sin complicaciones para moverte entre ambas localidades cuando lo necesites.',
  },
];
