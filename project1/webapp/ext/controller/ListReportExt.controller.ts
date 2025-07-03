
import Dialog from "sap/m/Dialog";
import Event from "sap/ui/base/Event";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { Overrides } from "sap/ui/core/mvc/ControllerExtension";
import controllerFrameworkExtensions from "sap/suite/ui/generic/template/ListReport/controllerFrameworkExtensions";

// Imports from my reusable library
import Example from "com/myorg/library1/Example";
import { ExampleColor } from "com/myorg/library1/library";

interface ListReportOverrides extends
    Overrides,
    Partial<Omit<typeof controllerFrameworkExtensions, "onInit">>{}


export default class ListReportExt extends ControllerExtension {
    // The overridden methods go here
    static overrides: ListReportOverrides = {
        onInit() {
            console.log("### onInit method is invoked ####");
        },
        onAfterRendering() {
            console.log("### onAfterRendering method is invoked ####");
        },
		onBeforeRebindTableExtension: function (oEvent: Event) {
        }
    }
    // Custom methods

    // Click handler for "Show Reusable Component" button
    onShowReusableComponent(oEvent: Event): void {
        const dialog = new Dialog({
            title: "Dialog"
        });
        const exampleComponent = new Example({
            text: "Sample text",
            color: ExampleColor.Highlight
        });
        dialog.addContent(exampleComponent);
        dialog.open();
    }
    
}