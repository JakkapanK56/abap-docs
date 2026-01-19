---
title: "ABENABAP_LANGUAGE_DYNAMIC"
description: |
  ABENABAP_LANGUAGE_DYNAMIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_LANGUAGE_DYNAMIC.htm"
abapFile: "ABENABAP_LANGUAGE_DYNAMIC.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENABAP", "LANGUAGE", "DYNAMIC"]
---

In addition to static program development in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) or the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html), the following components of ABAP programs can be dynamically created and maintained using language elements:

This type of program development is called dynamic program development.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

-   [ABAP Source Code](ABENABAP_GENERIC_PROGRAM.html)
-   [Text Elements](ABENTEXTPOOL.html)
-   [Dynpro](ABENABAP_GENERIC_DYNPRO.html)

-   On the one hand, the statements for dynamic program development provide a powerful and flexible method of dynamic programming, but on the other hand this type of programming is very elaborate, and the created programs are difficult to maintain. Therefore, it is recommended that other dynamic programming options for application programs are used first, before using dynamic program development. In ABAP, dynamic programming is enabled by:

-   [Generic data types](ABENGENERIC_DATA_TYPE_GLOSRY.html) for [typing](ABENTYPING_GLOSRY.html)
-   Data objects, whose size is not statically defined ([internal tables](ABENINTERNAL_TABLE_GLOSRY.html), [strings](ABENSTRING_GLOSRY.html))
-   [Field symbols](ABENFIELD_SYMBOL_GLOSRY.html) and [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html)
-   Dynamic creation of data types using [runtime time creation](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html)
-   Dynamic creation of data types using [`CREATE DATA`](ABAPCREATE_DATA.html)
-   Dynamic token specification, that is, the dynamic specification of operands or entire clauses as data objects in parentheses

-   The statements for dynamic program development do not perform authorization checks or other checks. These must be programmed separately. The following special function modules can be used for the required checks in addition to the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html):

-   The function module `RS_ACCESS_PERMISSION` performs all authorization checks that are also performed when the ABAP Editor is called.
-   The function module `TR_SYS_PARAMS` and other function modules of the function pool `STR9` determine whether [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) can be changed.

-   See [ABAP Command Injections](ABENGENERIC_PROG_SCRTY.html).

abenabap.html abenabap\_reference.html abenprogram\_editing.html