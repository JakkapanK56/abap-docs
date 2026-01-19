---
title: "ABENDDIC_TYPE_GROUPS"
description: |
  ABENDDIC_TYPE_GROUPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_TYPE_GROUPS.htm"
abapFile: "ABENDDIC_TYPE_GROUPS.html"
keywords: ["do", "class", "data", "types", "ABENDDIC", "TYPE", "GROUPS"]
---

A [type pool](ABENTYPE_POOL_GLOSRY.html) is an ABAP program managed by the ABAP Dictionary that starts with the statement [`TYPE-POOL`](ABAPTYPE-POOL.html) and that contains ABAP statements for defining globally visible [data types](ABENDATA_TYPE_GLOSRY.html), [constants](ABENCONSTANT_GLOSRY.html), and [macros](ABENMACRO_GLOSRY.html). For more information about type pools, see [ABAP Program Types](ABENPROGRAM_TYPE_OVIEW.html) and the statement [`TYPE-POOL`](ABAPTYPE-POOL.html). A type pool and its types, constants, and macros do not have any semantic properties except for a short text and optionally [comments](ABENCOMMENT_GLOSRY.html) in the source code. The name of a type pool can have a maximum of five characters, can only consist of letters, numbers, and underscores, and must start with a letter.

A type pool that is frequently used in ABAP programs is `ABAP`, which contains many types and constants predefined for [common usage](ABENDDIC_PREDEF_TYPES.html).

-   Types in type pools are the predecessors for general type definitions in the ABAP Dictionary. Types in type pools can be elementary data types, reference data types, or table types.
-   Since it is possible to also define data types and constants in the public visibility section of global [classes](ABENCLASS_GLOSRY.html) or in [interfaces](ABENOO_INTF_GLOSRY.html), type pools are obsolete and should no longer be created. Existing type pools can still be used.
-   A disadvantage of type pools are their missing semantic properties when compared to the other dictionary objects. These properties can also be defined in global classes.
-   The name of a type pool can also be prefixed with a [namespace prefix](ABENNAME_SPACE_PREFIX_GLOSRY.html) (`/.../`) of a [prefix namespace](ABENPREFIX_NAME_SPACE_GLOSRY.html). This prefix can have a maximum of four characters.

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html