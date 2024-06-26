'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index.js');
var tour$1 = require('./src/tour.js');
var step = require('./src/step.js');
var tour = require('./src/tour2.js');
var install = require('../../utils/vue/install.js');

const ElTour = install.withInstall(tour$1["default"], {
  TourStep: step["default"]
});
const ElTourStep = install.withNoopInstall(step["default"]);

exports.tourEmits = tour.tourEmits;
exports.tourProps = tour.tourProps;
exports.ElTour = ElTour;
exports.ElTourStep = ElTourStep;
exports["default"] = ElTour;
//# sourceMappingURL=index.js.map
