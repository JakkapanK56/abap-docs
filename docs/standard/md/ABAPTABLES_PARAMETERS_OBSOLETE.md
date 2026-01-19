---
title: "ABAPTABLES_PARAMETERS_OBSOLETE"
description: |
  ABAPTABLES_PARAMETERS_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTABLES_PARAMETERS_OBSOLETE.htm"
abapFile: "ABAPTABLES_PARAMETERS_OBSOLETE.html"
keywords: ["if", "case", "data", "types", "internal-table", "ABAPTABLES", "PARAMETERS", "OBSOLETE"]
---

`... TABLES p1  \{TYPE itab_type\}\ |\ \{[STRUCTURE struc](ABAPFUNCTION_TYPING_OBSOLETE.html)\}\ [OPTIONAL]`\\ 
           `p2  \{TYPE itab_type\}\ |\ \{[STRUCTURE struc](ABAPFUNCTION_TYPING_OBSOLETE.html)\}\ [OPTIONAL]`\\ 
           `...`

Defines the [table parameters](ABENTABLE_PARAMETER_GLOSRY.html)\\ `t1 t2 ...` in the [function module interface](ABENFUNCTION.html) display in the source code of function modules. Table parameters are obsolete `CHANGING` parameters that are typed as internal [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) with a [header line](ABENHEADER_LINE_GLOSRY.html). If an internal table without a header line or a [table body](ABENTABLE_BODY_GLOSRY.html) is passed as an actual parameter to a formal parameter of this type, an empty local header line is generated in the function module. If an internal table with a header line is used as an actual parameter, both the table body and the header line are passed to the function module. Pass by value is not possible in formal parameters defined using `TABLES`.

For information about `TYPE`, `STRUCTURE`, and `OPTIONAL`, see [Properties of the Interface Parameters](ABENFUNCTION_PARAMETERS.html). The following special rules apply to table parameters:

When `TABLES` parameters are accessed to which no type-friendly actual parameters are bound, a special [exception situation](ABENTABLES_PARAMETERS_RESTRICTIONS.html) can occur.

-   Only [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html) is allowed in `TABLES` parameters.
-   Only the following types can be specified after `TYPE`:

-   A table type `itab_type` from the ABAP Dictionary (including type pools) with the table category standard table with a flat line type. The table type can be complete or generic.
-   The generic type `STANDARD TABLE`.

-   If no type is specified explicitly, `STANDARD TABLE` is used implicitly.
-   A type with `TYPE REF TO` is not allowed.

-   The table key of a table parameter is either defined completely in the typing or it is taken from the actual parameter in the case of generic typing. This means that the table key of a table parameter is not necessarily the [standard key](ABENITAB_STANDARD_KEY.html).
-   Formal parameters defined with `TABLES` can be replaced by formal parameters defined with `CHANGING`. A local work area can be created for the internal table in the function module by using the addition `LIKE LINE OF itab` of the statement `DATA`.
-   **Exception:** Provided that [basXML](ABENBASXML_GLOSRY.html) is not set as the [RFC log](ABENRFC_PROTOCOL.html), using `TABLES` parameters for [remote-enabled function modules](ABENREMOTE_ENABLED_FM_GLOSRY.html) for [RFC](ABENRFC_GLOSRY.html) can be significantly faster than passing by means of the `CHANGING` parameter.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenfunction\_modules\_obsolete.html