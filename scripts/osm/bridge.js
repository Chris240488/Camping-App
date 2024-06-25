'use strict';

import {
  startLat,
  startLon,
  startScale,
  elementID,
  markerOptions,
  markerDescriptionClassName,
  markerTitleClassName,
  tileSetProvider,
} from './config.js';

const map = L.map(elementID).setView([startLon, startLat], startScale);

L.tileLayer(tileSetProvider, { maxZoom: 19 }).addTo(map);
L.control.scale({ imperial: false, metric: true }).addTo(map);

const buildPopUp = (title, description) => {
  const titleElement = `<h2 class="${markerTitleClassName}">${title.stringValue}</h2>`;
  const descriptionElement = `<p class="${markerDescriptionClassName}">${description.stringValue}</p>`;
  return `${titleElement}${descriptionElement}`;
};

export const placeMarkers = (places) => {
  places
    .forEach(({ coordinates: { geoPointValue: { latitude, longitude } }, title, description }) => {
      L.marker([latitude, longitude], markerOptions)
       .bindPopup(buildPopUp(title, description))
       .addTo(map);
    });
};
