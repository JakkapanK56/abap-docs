---
title: "ABENABAP_DYNPROS_FIELD_HELP"
description: |
  ABENABAP_DYNPROS_FIELD_HELP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS_FIELD_HELP.htm"
abapFile: "ABENABAP_DYNPROS_FIELD_HELP.html"
keywords: ["select", "do", "if", "case", "data", "ABENABAP", "DYNPROS", "FIELD", "HELP"]
---

There are three ways of displaying field help for screen elements on dynpros:

If a screen element in the Screen Painter was defined by copying a field from the ABAP Dictionary, the [documentation](ABENDDIC_DATA_ELEMENTS_SEMA.html) of the associated data element is displayed automatically when the `F1` help is selected for this field, unless this step is overridden in the dynpro flow logic.

The documentation of some data elements has supplementary [documentation](ABENDDIC_DATA_ELEMENTS_SEMA.html). The supplementary documentation for a dynpro field is created in the Screen Painter and not in the ABAP Dictionary in the ABAP Workbench. Here, the supplementary documentation is defined for the data element using a number.

Supplementary documentation of this type is specific to a program and to a dynpro. Any supplementary documentation with the same number defined in the ABAP Dictionary is overridden by any dynpro-specific supplementary documentation. Supplementary documentation defined in ABAP Dictionary can still be linked with a dynpro field in table `THLPF`. This requires a new line in table `THLPF` containing the program name, dynpro number, field name, and the number of the supplementary documentation.

To be able to display the supplementary documentation, the dynpro flow logic must respond to the POH event as follows:

`PROCESS ON HELP-REQUEST. ... [FIELD field [MODULE mod] WITH hlp](ABENDYNP_FIELD_HELP.html). ...`

Only [`FIELD`](FIELD.html) statements are allowed after [`PROCESS ON HELP-REQUEST`](PROCESS.html). If the flow logic of a dynpro does not contain the event keyword `PROCESS ON HELP-REQUEST`, `F1` displays either the data element documentation of the field on which the cursor is positioned or no help documentation is displayed. In other cases, the following `FIELD` statement is executed on whose field `field` the cursor is positioned.

If dynpro-specific supplementary documentation exists for the field `field`, this is displayed by specifying its number `hlp`. A variable `hlp` can be filled before the help is displayed, for example, by calling the dialog module `mod`. At the event POH, the `FIELD` statement does not, however, transport the content of the dynpro field `field` to the ABAP program.

Any help text can be displayed by calling dialog modules at POH:

`PROCESS ON HELP-REQUEST. ... [FIELD field MODULE mod.](ABENDYNP_FIELD_HELP.html)\ ...`

After [`PROCESS ON HELP-REQUEST`](PROCESS.html), the `MODULE` statement can only be used in combination with the `FIELD` statement. When `F1` is selected, the dialog module `mod` of the `FIELD` statement on whose field `field` the cursor is positioned. If multiple `FIELD` statements are specified for the same field `field`, only the first statement is executed. The dialog module `mod` does not provide the content of the dynpro field `field`, since this content is not transported by the `FIELD` statement at `PROCESS ON HELP-REQUEST` time.

The dialog module `mod` is defined like a regular PAI module in the ABAP program. The processing logic of the module must ensure that adequate help is displayed for the selected field. Function modules such as `HELP_OBJECT_SHOW_FOR_FIELD` or `HELP_OBJECT_SHOW` can be used to do this.

[Field Help](ABENDYNPRO_F1_HELP_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_help.html