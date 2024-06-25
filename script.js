'use strict';

import places from './scripts/firebase/bridge.js';
import { placeMarkers } from './scripts/osm/bridge.js';

placeMarkers(places);
