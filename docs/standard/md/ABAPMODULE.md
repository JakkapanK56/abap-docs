---
title: "ABAPMODULE"
description: |
  ABAPMODULE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODULE.htm"
abapFile: "ABAPMODULE.html"
keywords: ["if", "method", "data", "ABAPMODULE"]
---

[Short Reference](ABAPMODULE_SHORTREF.html)

`MODULE mod \{OUTPUT|[INPUT]\}.`\\ 
  `...`\\ 
`ENDMODULE.`

[`... OUTPUT|[INPUT]`](#ABAP_ONE_ADD@1@)

The statement `MODULE` defines a [dialog module](ABENDIALOG_MODULE_GLOSRY.html)\\ `mod`. The [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `mod`. The functions of a dialog module `mod` are implemented between the statements `MODULE` ad `ENDMODULE`.

A dialog module is called using the identically named statement [`MODULE`](MODULE.html) of the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html) of any [dynpro](ABENDYNPRO_GLOSRY.html) in the ABAP program.

The additions `OUTPUT` and `INPUT` determine whether the dialog module can be called at the [`PBO`](ABENPBO_GLOSRY.html) or [PAI](ABENPAI_GLOSRY.html) event. The addition `INPUT` is the default and could therefore also be omitted, although this is not recommended for reasons of program readability. Two dialog modules with the same name can be defined in a program, if one of them has the addition `OUTPUT` and the other has the addition `INPUT`. However, this is also not recommended for reasons of readability.

For reasons of data encapsulation, it is recommended that very little functionality is implemented in dialog modules and that [procedures](ABENPROCEDURE_GLOSRY.html) are called instead.

PAI module for a dynpro with the dynpro number 100. In the PAI module, no functionality is implemented and an instance method of an object is called instead.

MODULE user\_command\_0100 INPUT. \\n screen\_handler->user\_command( ). \\nENDMODULE. abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abendialog\_module.html