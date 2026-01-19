---
title: "ABENABAP_PROGRAM_STATEMENT"
description: |
  ABENABAP_PROGRAM_STATEMENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_PROGRAM_STATEMENT.htm"
abapFile: "ABENABAP_PROGRAM_STATEMENT.html"
keywords: ["if", "case", "class", "ABENABAP", "PROGRAM", "STATEMENT"]
---

The program-initiating statements are:

The initiating statement of each program depends on the program type specified in the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html).

All statements that follow the program-initiating statements in the source code or that are included as [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are handled as a single unit by ABAP Compiler.

The first statement of every standalone ABAP program must be a program-initiating statement, and each program can only contain one of these statements. The only other statement allowed at the first position instead of the initiating statement is the statement `INCLUDE`. In this case, a program-initiating statement must appear at the first position of the program after the include program is resolved when it is generated.

Class pools, interface pools, function pools are independent [compilation units](ABENCOMPILATION_UNIT_GLOSRY.html). Include programs, on the other hand, are only used in the context of compilation units.

-   [`FUNCTION-POOL`](ABAPFUNCTION-POOL.html)
-   [`CLASS-POOL`](ABAPCLASS-POOL.html)
-   [`INTERFACE-POOL`](ABAPINTERFACE-POOL.html)

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html