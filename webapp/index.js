sap.ui.define([
    "sap/m/Text",
], (Text) => {
    "use strict";

    new Text({
        text: "Hello World from SAP UI5!"
    }).placeAt("content");
});