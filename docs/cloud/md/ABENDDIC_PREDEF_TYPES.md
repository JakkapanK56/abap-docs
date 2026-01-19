---
title: "ABENDDIC_PREDEF_TYPES"
description: |
  ABENDDIC_PREDEF_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_PREDEF_TYPES.htm"
abapFile: "ABENDDIC_PREDEF_TYPES.html"
keywords: ["if", "case", "method", "data", "types", "ABENDDIC", "PREDEF", "TYPES"]
---

The following predefined DDIC data types are delivered with an AS ABAP. They can be used in ABAP Dictionary, ABAP CDS, and ABAP programs.

The following data elements are available for [built-in DDIC types](ABENDDIC_BUILTIN_TYPES.html) of the same name with fixed length.

These data elements allow the built-in DDIC types to be referred by their name.

There is no built-in ABAP type for the truth values `true` or `false`. Instead, it is common to use a character field of length 1 with the meaning that a non-initial value means `true` and an initial value means `false`. The following predefined data element can be used to define these fields:

The [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `ABAP` contains the following constants to be used as truth values.

The following types are used for typing specific operand positions of ABAP statements or for special parameter passing.

-   `INT1`
-   `INT2`
-   `INT4`
-   `D16N`
-   `D34N`
-   `DATN`
-   `TIMN`
-   `UTCL` (for built-in type `UTCLONG`)
-   `GEOM_EWKB` and `GGM1` (for built-in type `GEOM_EWKB`)

-   Note that the respective built-in types cannot be specified directly in an ABAP program. In ABAP CDS however, there is a syntax `ABAP.type` to refer to built-in DDIC types.
-   There is no data element `INT8`, since the respective built-in ABAP type has the same name `int8` already.

-   `ABAP_BOOLEAN` of type `CHAR` with length 1.

-   `abap_true` with value *X*
-   `abap_false` with initial value

-   The type pool `ABAP` also contains a type `abap_bool` of type `c` and length 1. But in new programs, the data element `ABAP_BOOLEAN` should be used instead.
-   The disadvantage of using type `abap_bool` and the associated constants `abap_true` and `abap_false` of type pool `ABAP` is that the entire type pool must be loaded, even if only a few types and constants are needed.
-   Type pool `ABAP` also contains a third constant `abap_undefined` with value *\-*. However, this constant should not be used or in exceptional cases only.

-   Structures `MATCH_RESULT`, `SUBMATCH_RESULT`, `REPL_RESULT` and table types `MATCH_RESULT_TAB`, `SUBMATCH_RESULT_TAB`, `REPL_RESULT_TAB` for addition [`RESULT`](ABAPFIND_OPTIONS.html) of statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html).
-   Table type `ABAP_SORTORDER_TAB` for dynamic specification of the sort order in statement [`SORT itab`](ABAPSORT_ITAB.html).

-   `abap_parmbind_tab` and `abap_excbind_tab` of type pool `ABAP` for dynamic [parameter tables](ABAPCALL_METHOD_PARAMETER_TABLES.html) in the [`CALL METHOD`](ABAPCALL_METHOD_DYNAMIC.html) statement.
-   `abap_func_parmbind_tab` and `abap_func_excbind_tab` of type pool `ABAP` for dynamic [parameter tables](ABAPCALL_FUNCTION_DYNAMIC.html) in the [`CALL FUNCTION`](ABAPCALL_FUNCTION_GENERAL.html) statement.

abenabap.html abenabap\_dictionary.html