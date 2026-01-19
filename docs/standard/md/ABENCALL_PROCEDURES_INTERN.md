---
title: "ABENCALL_PROCEDURES_INTERN"
description: |
  ABENCALL_PROCEDURES_INTERN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALL_PROCEDURES_INTERN.htm"
abapFile: "ABENCALL_PROCEDURES_INTERN.html"
keywords: ["select", "if", "method", "class", "ABENCALL", "PROCEDURES", "INTERN"]
---

All procedures which are defined in the same ABAP program and are visible from the calling position can be called internally.

The required program is always already loaded for internal calls.

Internal program call of method `meth1` of a local class from the event block `START-OF-SELECTION` and the call of `meth2` from `meth1`.

-   In each ABAP program, and within a [class](ABENCLASS_GLOSRY.html), the visible [methods](ABENMETHOD_GLOSRY.html) of the class or visible methods of other local classes of the same program can be called. The calling of methods is the only procedure call which is recommended for the internal modularization.
-   In a [function pool](ABENFUNCTION_POOL_GLOSRY.html), a [function module](ABENFUNCTION_MODULE_GLOSRY.html) provided for external users can also be called internally.
-   In every ABAP program that still contains [subroutines](ABENSUBROUTINE_GLOSRY.html), these can also still be called internally. Subroutines are an obsolete form of internal modularization and should be replaced by methods if possible.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n METHODS meth1. \\n PRIVATE SECTION. \\n METHODS meth2. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth1. \\n ... \\n meth2( ). \\n ... \\n ENDMETHOD. \\n METHOD meth2. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nSTART-OF-SELECTION. \\n NEW cls( )->meth1( ). abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html