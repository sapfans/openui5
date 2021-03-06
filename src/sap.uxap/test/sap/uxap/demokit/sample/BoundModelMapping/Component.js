sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
	"use strict";

	return UIComponent.extend("sap.uxap.sample.BoundModelMapping.Component", {
		metadata: {
			rootView: {
				"viewName": "sap.uxap.sample.BoundModelMapping.BoundModelMapping",
				"type": "XML",
				"async": true
			},
			dependencies: {
				libs: [
					"sap.m"
				]
			},
			config: {
				sample: {
					stretch: true,
					files: [
						"BoundModelMapping.view.xml",
						"BoundModelMapping.controller.js",
						"ModelMappingBlock.js",
						"ModelMappingBlock.view.xml"
					]
				}
			}
		}
	});
});
