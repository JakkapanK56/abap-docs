---
title: "ABENABAP_PROGRAM_STATEMENT"
description: |
  ABENABAP_PROGRAM_STATEMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_PROGRAM_STATEMENT.htm"
abapFile: "ABENABAP_PROGRAM_STATEMENT.html"
keywords: ["if", "case", "class", "types", "ABENABAP", "PROGRAM", "STATEMENT"]
---

The program-initiating statements are:

The initiating statement of each program depends on the [program type](ABENPROGRAM_TYPE_GLOSRY.html) specified in the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html).

All statements that follow the program-initiating statements in the source code or that are included as [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are handled as a single unit by ABAP Compiler.

The first statement of every standalone ABAP program must be a program-initiating statement, and each program can only contain one of these statements. The only other statement allowed at the first position instead of the initiating statement is the statement `INCLUDE`. In this case, a program-initiating statement must appear at the first position of the program after the include program is resolved when it is generated.

Class pools, interface pools, function pools, executable programs, module pools, subroutine pools, and type pools are independent [compilation units](ABENCOMPILATION_UNIT_GLOSRY.html). Include programs, on the other hand, are only used in the context of compilation units.

Type pools, also referred to as type groups, are logically independent programs in which no executable code can be stored, only type definitions and constant definitions. For this reason, type pools have their own program-initiating statement, `TYPE-POOL`.

The assignment of initiating statements to the program types defined in the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html) is not mandatory. However, the assignment described in the following sections should always be used. When a program is created, the appropriate statement is created automatically by the ABAP Workbench or ADT and should only be changed in the additions during editing. In particular, the keywords `FUNCTION-POOL`, `CLASS-POOL`, `INTERFACE-POOL`, and `TYPE-POOL` should only be created by the corresponding tools of the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) and never be entered manually in the source code in order to avoid unexpected system behavior.

-   [`REPORT`](ABAPREPORT.html)
-   [`PROGRAM`](ABAPPROGRAM.html)
-   [`FUNCTION-POOL`](ABAPFUNCTION-POOL.html)
-   [`CLASS-POOL`](ABAPCLASS-POOL.html)
-   [`INTERFACE-POOL`](ABAPINTERFACE-POOL.html)
-   [`TYPE-POOL`](ABAPTYPE-POOL.html).

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html