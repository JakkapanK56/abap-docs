---
title: "ABAPREFRESH_CONTROL"
description: |
  ABAPREFRESH_CONTROL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREFRESH_CONTROL.htm"
abapFile: "ABAPREFRESH_CONTROL.html"
keywords: ["if", "data", "ABAPREFRESH", "CONTROL"]
---

[Short Reference](ABAPREFRESH_CONTROL_SHORTREF.html)

`REFRESH CONTROL contrl FROM SCREEN dynnr.`

This statement initializes the properties of a [table control](ABENTABLE_CONTROL_GLOSRY.html) by assigning values to certain components of the associated structure `contrl`. For `contrl`, a structure must be specified that was created using the statement [`CONTROLS`](ABAPCONTROLS_TABLEVIEW.html) for a [table control](ABENTABLE_CONTROL_GLOSRY.html). The values are taken from the definition of the identically named table control whose [dynpro](ABENDYNPRO_GLOSRY.html) is specified in `dynnr`. The values of the components are set for which the [start values](ABENSTART_VALUE_GLOSRY.html) are also taken from the definition of a table control (see description of the structure `cxtab_control` in [`CONTROLS`](ABAPCONTROLS_TABLEVIEW.html)). `dynnr` expects a data object of the type `n` of length 4. It must contain the number of a dynpro on which a table control name `contrl` is defined.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html