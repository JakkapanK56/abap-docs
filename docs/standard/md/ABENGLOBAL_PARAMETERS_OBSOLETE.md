---
title: "ABENGLOBAL_PARAMETERS_OBSOLETE"
description: |
  ABENGLOBAL_PARAMETERS_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENGLOBAL_PARAMETERS_OBSOLETE.htm"
abapFile: "ABENGLOBAL_PARAMETERS_OBSOLETE.html"
keywords: ["select", "if", "case", "data", "field-symbol", "ABENGLOBAL", "PARAMETERS", "OBSOLETE"]
---

The formal parameters of the [interface](ABENFUNCTION.html) of a function module can be made known globally by choosing *Edit -> Interface -> Globalize Parameters* in the Function Builder. Then the field *Global* is selected in the properties of the function module. The formal parameters of a global interface have the following properties:

In the function pool, no global data objects with the same name as a global parameter may be created. If multiple function modules in a function pool have global interfaces, identically named parameters must have identical definitions.

The use of global interface parameters is obsolete and interfaces should generally not be globalized in new function modules.

-   All parameters that are completely typed and for which pass by value is defined are handled as if identically named global data objects were declared in the top include. This means they are visible in the entire function pool and, when the function module is exited, they retain their value.
-   All other parameters are handled as if identically named data objects were declared in the top include (two in each case for [table parameters](ABAPTABLES_PARAMETERS_OBSOLETE.html), one for the table body and one for the header line). They can however only be used during execution of the function module. If a parameter of this type is accessed when the function module is not executed, the runtime error `GETWA_NOT_ASSIGNED` occurs, since these parameters are implemented internally by field symbols. A data object is only assigned to these field symbols during the execution of the function module.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenfunction\_modules\_obsolete.html