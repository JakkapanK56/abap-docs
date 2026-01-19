---
title: "ABENUSE_ACTUAL_PARAMETERS_GUIDL"
description: |
  ABENUSE_ACTUAL_PARAMETERS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSE_ACTUAL_PARAMETERS_GUIDL.htm"
abapFile: "ABENUSE_ACTUAL_PARAMETERS_GUIDL.html"
keywords: ["loop", "do", "if", "method", "class", "data", "ABENUSE", "ACTUAL", "PARAMETERS", "GUIDL"]
---

The structure `sy` exists once in an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) and is shared by all programs in this internal session. The components of `sy` represent the system fields. System fields are global for all programs of an internal session and their procedures.

**Do not use system fields as actual parameters**

Never use system fields as actual parameters - especially not for passing by reference.

This rule reinforces the rule [do not pass global data to local contexts by reference](ABENREF_TRANSF_GLOBAL_DATA_GUIDL.html). Since system fields are set implicitly, it is important to be even more careful. If the value of a system field changes implicitly within a procedure, the value of the parameter passed by reference, which refers to this system field, also changes. Procedures are never prepared for this behavior.

Even pass by value should be avoided for system fields. This is because a procedure might be switched to pass by reference in an enhancement process, without the consumer of the procedure being notified. The only secure method is to assign the value of a system field to a regular variable and then use this variable as the actual parameter when calling the program.

Looking at the method `do_something` in the following source code, it could be expected that the parameter `index` in the loop to contain the unchanged value that was passed to the procedure. In fact, `index` references `sy-index`, which is set to the current loop counter in the `DO` loop.

The following source code corrects the call of the method `do_something`. A helper variable is passed with the corresponding value instead of `sy-index`.

CLASS class DEFINITION. \\n PUBLIC SECTION. \\n METHODS main. \\n PRIVATE SECTION. \\n METHODS do\_something IMPORTING index TYPE i. \\nENDCLASS. \\nCLASS class IMPLEMENTATION. \\n METHOD main. \\n DO 2 TIMES. \\n do\_something( sy-index ). \\n ENDDO. \\n ENDMETHOD. \\n METHOD do\_something. \\n DO 3 TIMES. \\n ... index ... . \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. ... \\nCLASS class IMPLEMENTATION. \\n METHOD main. \\n DATA index TYPE sy-index. \\n DO 2 TIMES. \\n index = sy-index. \\n do\_something( index ). \\n ENDDO. \\n ENDMETHOD. \\n ... \\nENDCLASS. \\n... abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abensystem\_fields\_gdl.html