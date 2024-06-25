// Base
export const elementID = 'map';

// Start
export const startLat = 10.5;
export const startLon = 51.5;
export const startScale = 5.5;

// Marker (https://leafletjs.com/reference.html#marker)
export const markerOptions = {};
export const markerTitleClassName = 'marker__title';
export const markerDescriptionClassName = 'marker__description';

// Tile Sets
const tileSets = {
  WIKIMEDIA: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
  GOOGLE: 'https://mt0.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
  OPEN_STREET_MAPS: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
};

export const tileSetProvider = tileSets.GOOGLE;
