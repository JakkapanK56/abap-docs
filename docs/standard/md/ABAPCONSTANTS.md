---
title: "ABAPCONSTANTS"
description: |
  ABAPCONSTANTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONSTANTS.htm"
abapFile: "ABAPCONSTANTS.html"
keywords: ["select", "do", "if", "try", "class", "data", "types", "internal-table", "ABAPCONSTANTS"]
---

[Short Reference](ABAPCONSTANTS_SHORTREF.html)

``CONSTANTS const [[`options`](ABAPDATA.html)].``

This statement declares a constant data object or a constant `const` for short. Its content cannot be changed at runtime of an ABAP program. It can only be used as an operand in [read positions](ABENREAD_POSITION_GLOSRY.html) of ABAP statements. Constants declared in the declaration part of a class or an interface belong to their [static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html).

The [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `const`. The syntax of the additions `options` of the statement `CONSTANTS` for declaring constants matches the statement [`DATA`](ABAPDATA.html) for declaring variables. Only the additions [`READ-ONLY`](ABAPDATA_OPTIONS.html) and [`BOXED`](ABAPDATA_BOXED.html), and declarations of [LOB handle structures](ABAPDATA_LOB_HANDLE.html) are not possible. In addition, the statement `INCLUDE` cannot be used within the declaration of a structure.

Unlike the statement `DATA`, an [initial value](ABENSTART_VALUE_GLOSRY.html) with the addition [`VALUE`](ABAPDATA_OPTIONS.html) must be specified in the statement `CONSTANTS`. The same restrictions as for `DATA` apply. This has the following implications for the declaration of constants with [deep](ABENDEEP_GLOSRY.html) data types:

The statements below declare a numeric constant, a constant structure, and a constant reference. The latter can be used in comparisons or in passing to [procedures](ABENPROCEDURE_GLOSRY.html).

-   A start value `val` can only be specified for the ABAP types `string` and `xstring` only.
-   Constant internal tables, reference variables, and structures with non-character-like and flat components can only be assigned their [initial value](ABENINITIAL_VALUE_GLOSRY.html) by `IS INITIAL` only, and are therefore always initial.

-   If the class component selector is used, the interface name can also be used to access static attributes of interfaces declared using `CONSTANTS`.
-   The values of constants are stored in the [PXA](ABENPXA_GLOSRY.html) memory area.
-   Constants cannot be declared with [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) and results of expressions cannot be assigned to constants. For such purposes, ABAP supports [immutable variables](ABENIMMUTABLE_VARIABLE_GLOSRY.html) that can be declared with the declaration operator [`FINAL(var)`](ABENFINAL_INLINE.html).

CONSTANTS pi TYPE p LENGTH 8 DECIMALS 14 \\n VALUE '3.14159265358979'. \\n\\ \\nCONSTANTS: BEGIN OF sap\_ag, \\n zip\_code TYPE n LENGTH 5 VALUE '69189', \\n city TYPE string VALUE \`Walldorf\`, \\n country TYPE string VALUE \`Germany\`, \\n END OF sap\_ag. \\n\\ \\nCONSTANTS null\_pointer TYPE REF TO object VALUE IS INITIAL. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html