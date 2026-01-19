---
title: "ABENAMDP_MACROS"
description: |
  ABENAMDP_MACROS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_MACROS.htm"
abapFile: "ABENAMDP_MACROS.html"
keywords: ["do", "if", "case", "method", "data", "types", "ABENAMDP", "MACROS"]
---

`... "$ABAP.macro( ... )" ...`

Specifies an [AMDP macro](ABENAMDP_MACRO_GLOSRY.html) in an AMDP method, which is implemented in [SQLScript](ABENAMDP_HDB_SQLSCRIPT.html). An AMDP macro is specified in double quotation marks and always introduced with `$ABAP`. The macro itself is specified with `macro`. The relevant parameters for the chosen macro can be specified in the parentheses. The format for `$ABAP` is case-sensitive. The format for `macro` is not case-sensitive.

The ABAP runtime framework replaces an AMDP macro, including the quotation marks, during the implementation on the database in accordance with the rule for the relevant macro. The following macros are currently predefined:

No other macros can be specified. In particular, no custom macros can be defined.

-   [`$ABAP.type`](ABENAMDP_ABAP_TYPES.html) for ABAP types
-   [`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html) for logical schemas

-   The syntax for macros is currently only possible in the implementation language [SQLScript](ABENAMDP_HDB_SQLSCRIPT.html).
-   Macros that are specified in comments or in single quotation marks are not replaced.

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html