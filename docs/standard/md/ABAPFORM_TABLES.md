---
title: "ABAPFORM_TABLES"
description: |
  ABAPFORM_TABLES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFORM_TABLES.htm"
abapFile: "ABAPFORM_TABLES.html"
keywords: ["if", "case", "types", "internal-table", "ABAPFORM", "TABLES"]
---

[Short Reference](ABAPFORM_SHORTREF.html)

`... t1 [\{TYPE itab_type\}|\{LIKE itab\}|\{STRUCTURE struc\}]`\\ 
    `t2 [\{TYPE itab_type\}|\{LIKE itab\}|\{STRUCTURE struc\}]`\\ 
    `...`

Defines [table parameters](ABENTABLE_PARAMETER_GLOSRY.html)\\ `t1 t2 ...` for subroutines. A table parameter is typed as follows:

The additions `TYPE` and `LIKE` type the formal parameter either generically or completely. The addition `STRUCTURE` applies the structure `struc` to the line type. The table key remains generic. In generic typings, the formal parameter takes the non-fixed technical type properties from the actual parameter and the usual [typing](ABENTYPING.html) rules apply.

When `TABLES` parameters are accessed to which no type-friendly actual parameters are bound, the same [exception situation](ABENTABLES_PARAMETERS_RESTRICTIONS.html) can occur as in function modules.

-   A table type `itab_type` of the table category [standard table](ABENSTANDARD_TABLE_GLOSRY.html) can be specified after the addition `TYPE`. Both complete and generic table types are possible, as well as the built-in generic type `STANDARD TABLE`.
-   An internal table `itab` of the table category [standard table](ABENSTANDARD_TABLE_GLOSRY.html) can be specified after the addition `LIKE`. The technical properties of this internal type are applied completely.
-   A [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html)\\ `struc` can be specified after the obsolete addition [`STRUCTURE`](ABAPFORM_STRUCTURE.html).
-   If nothing is specified explicitly, `TYPE STANDARD TABLE` is used implicitly as the typing.

-   The definition of table parameters is obsolete and can be replaced by general [formal parameters](ABAPFORM_PARAMETERS.html) defined using `USING` and `CHANGING`.
-   The table key of a table parameter is either defined completely in the typing or it is taken from the actual parameter in the case of generic typing. This means that the table key of a table parameter is not necessarily the [standard key](ABENITAB_STANDARD_KEY.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenabap\_subroutines.html abapform.html