const { resolve } = require("path");
const fractal = require("@frctl/fractal").create();
const helpers = require("handlebars-helpers");

fractal.set("project.title", "AHCS - Fractal Session");

fractal.components.set("path", resolve(__dirname, "src/components"));

helpers({ handlebars: fractal.components.engine().handlebars });

module.exports = fractal;