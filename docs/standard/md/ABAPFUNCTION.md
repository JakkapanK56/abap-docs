---
title: "ABAPFUNCTION"
description: |
  ABAPFUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFUNCTION.htm"
abapFile: "ABAPFUNCTION.html"
keywords: ["select", "if", "data", "types", "ABAPFUNCTION"]
---

[Short Reference](ABAPFUNCTION_SHORTREF.html)

`FUNCTION func.`\\ 
`*"---------------------------------------------------------`\\ 
`*" Local Interface:`\\ 
``*" [`parameter_interface`](ABENFUNCTION.html)``\\ 
`*"---------------------------------------------------------`\\ 
  `...`\\ 
`ENDFUNCTION.`

Between the statements `FUNCTION` and `ENDFUNCTION`, the functionality of a [function module](ABENFUNCTION_MODULE_GLOSRY.html)\\ `func` is implemented in a function pool. The function module and its interface are defined in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html) or in the [Function Builder](ABENFUNCTION_BUILDER_GLOSRY.html) tool. The function module interface defined in the Function Builder is automatically displayed in comment lines below the statement `FUNCTION` as [`parameter_interface`](ABENFUNCTION.html).

Within the function module, local data types and data objects can be declared. There is also access to the formal parameters of the function module and to the global data types and data objects of the function pool. A function module is called using the statement [`CALL FUNCTION`](ABAPCALL_FUNCTION.html).

The [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`IS SUPPLIED`](ABENLOGEXP_SUPPLIED.html) can be used in the function module to determine whether an actual parameter has been specified for when a formal parameter is called.

Implements a function module that reads data in a table-like formal parameter `flight_tab` under the condition of an elementary formal parameter `id`. The [parameter interface](ABENFUNCTION.html) defined in Function Builder is visible as a comment.

FUNCTION read\_spfli\_into\_table. \\n\*"--------------------------------------------------------- \\n\*" Local Interface: \\n\*" IMPORTING \\n\*" VALUE(ID) LIKE SPFLI-CARRID DEFAULT 'LH ' \\n\*" EXPORTING \\n\*" FLIGHT\_TAB TYPE SPFLI\_TAB \\n\*"--------------------------------------------------------- \\n SELECT \* \\n FROM spfli \\n WHERE carrid = @id \\n INTO TABLE @flight\_tab. \\nENDFUNCTION. abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenabap\_language\_procedures.html abenabap\_functions.html