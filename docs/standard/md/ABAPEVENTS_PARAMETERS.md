---
title: "ABAPEVENTS_PARAMETERS"
description: |
  ABAPEVENTS_PARAMETERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEVENTS_PARAMETERS.htm"
abapFile: "ABAPEVENTS_PARAMETERS.html"
keywords: ["if", "method", "class", "ABAPEVENTS", "PARAMETERS"]
---

[Short Reference](ABAPEVENTS_SHORTREF.html)

``... VALUE(p1) [`typing`](ABENTYPING_SYNTAX.html)``\\ `[OPTIONAL|\{DEFAULT def1\}]`\\ 
    ``VALUE(p2) [`typing`](ABENTYPING_SYNTAX.html)``\\ `[OPTIONAL|\{DEFAULT def2\}]`\\ 
    `...`

The syntax of the additions `VALUE`, `OPTIONAL`, and `DEFAULT` and the typing using [`typing`](ABENTYPING_SYNTAX.html) corresponds to the [definition of formal parameters](ABAPMETHODS_PARAMETERS.html) in the interface of methods.

When an event is raised using `RAISE EVENT`, suitable actual parameters must be specified for all non-optional output parameters; these actual parameters are optional for all optional output parameters. Optional parameters for which no actual parameter has been specified are set to their type-dependent [initial value](ABENINITIAL_VALUE_GLOSRY.html) or to the replacement parameter `def1 def2 ...`

Declaration of an instance event with an output parameter in the class `CL_DEMO_OUTPUT_STREAM`.

CLASS cl\_demo\_output\_stream DEFINITION. \\n ... \\n PUBLIC SECTION. \\n ... \\n EVENTS completed \\n EXPORTING \\n VALUE(ev\_output) TYPE xstring. \\n ... \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenevents.html