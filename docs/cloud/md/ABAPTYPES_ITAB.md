---
title: "ABAPTYPES_ITAB"
description: |
  ABAPTYPES_ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPES_ITAB.htm"
abapFile: "ABAPTYPES_ITAB.html"
keywords: ["do", "if", "case", "class", "data", "types", "internal-table", "ABAPTYPES", "ITAB"]
---

``TYPES table_type \{\ \{TYPE [`tabkind`](ABAPTYPES_TABCAT.html) OF [REF TO] type\}``\\ 
                 ``|\ \{LIKE [`tabkind`](ABAPTYPES_TABCAT.html) OF dobj\}\ \}``\\ 
                 ``[[`tabkeys`](ABAPTYPES_KEYDEF.html)]``\\ 
                 `[INITIAL SIZE n].`\\ 

[`... INITIAL SIZE n`](#ABAP_ONE_ADD@1@)

This statement defines a table type `table_type` with a specific line type, a table category `tabkind`, and table keys `tabkeys`.

The line type is determined by entering the data type `type` after `TYPE` and data type `dobj` after `LIKE`:

Definition of a non-generic sorted table type. The line type corresponds to the structure of the database table `SPFLI`. Two key fields are defined for the primary table key.

The optional addition `INITIAL SIZE` has two meanings:

-   `type` can be a non-generic data type from ABAP Dictionary, a non-generic public data type of a public data type of a global class, a non-generic data type local to a program, a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html), or any ABAP type from the [tables](ABENBUILT_IN_TYPES_COMPLETE.html) of [built-in ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html). The generic ABAP types `c`, `n`, `p`, and `x` are extended implicitly to the standard length without [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) from the [tables](ABENBUILT_IN_TYPES_COMPLETE.html) of built-in ABAP types.
-   If the addition `REF TO` is specified before `type` or `dobj`, the line type is a reference type. The information specified in the section [reference types](ABAPTYPES_REFERENCES.html) can then be specified for `type` and `dobj`.
-   The same applies to `dobj` as to [`TYPES ... LIKE`](ABAPTYPES_REFERRING.html).

-   **Initial Memory Requirement**
-   The addition `INITIAL SIZE` affects the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) of an internal table of the table type. A number of lines `n` can be specified directly as a positive number without +/- sign or as a numeric constant to give the ABAP runtime framework a hint for the size of the initial memory requirement. In the following cases, the ABAP runtime framework allocates the initial memory area implicitly by itself:

-   The addition `INITIAL SIZE` is not used.
-   A value of 0 is specified for `n`.
-   If the value of `n` would cause the initial blocks to become too big.

-   **Size of Ranking Lists**
-   To create a ranking list in the internal table using the addition [`SORTED BY`](ABAPAPPEND.html) of the statement [`APPEND`](ABAPAPPEND.html), a value greater than 0 must be specified after `INITIAL SIZE`. This value determines the size of the ranking list.

-   Specifying the initial memory requirement is only recommended if the number of entries in the table has been determined in advance and the initial main memory requirement is to be dimensioned in the most suitable way. This can be especially important for internal tables that are components of table types and only contain a few lines.
-   Instead of `APPEND SORTED BY`, the statement `SORT` should be used so that the addition `INITIAL SIZE` is no longer necessary.

TYPES spfli\_sort TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html