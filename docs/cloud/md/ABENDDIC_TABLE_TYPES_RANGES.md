---
title: "ABENDDIC_TABLE_TYPES_RANGES"
description: |
  ABENDDIC_TABLE_TYPES_RANGES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_TABLE_TYPES_RANGES.htm"
abapFile: "ABENDDIC_TABLE_TYPES_RANGES.html"
keywords: ["select", "do", "if", "data", "types", "ABENDDIC", "TABLE", "TYPES", "RANGES"]
---

A ranges table type is a table type for a [ranges table](ABENRANGES_TABLE_GLOSRY.html). A ranges table is a standard table with a standard key. Its line type is structured specifically to be used in general logical expressions with the relational expression [`IN range tab`](ABENLOGEXP_SELECT_OPTION.html) or used after `WHERE` in ABAP SQL with the relational expression [`IN range tab`](ABENWHERE_LOGEXP_SELTAB.html). In the ABAP Dictionary, ranges table types are created in the same way as with the statement [`TYPES ... RANGE OF`](ABAPTYPES_RANGES.html).

The data types of the components `SIGN` and `OPTION` are the data elements `DDSIGN` and `DDOPTION`. The data type for the components `LOW` and `HIGH` must be elementary and can be specified directly as a [built-in data type](ABENDDIC_BUILTIN_TYPES.html) or using a [data element](ABENDDIC_DATA_ELEMENTS.html).

The structure of a ranges table must be a standalone ABAP Dictionary object. It can be generated from the type specifications for the components `LOW` and `HIGH` when the ranges table type is defined.

-   In ABAP programs, ranges tables can also be defined with reference to data types other than elementary data types.
-   In ABAP programs, the structure of a ranges table does not need to be a standalone structure.

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_table\_types.html