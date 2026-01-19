---
title: "ABAPDATA_REFERRING"
description: |
  ABAPDATA_REFERRING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDATA_REFERRING.htm"
abapFile: "ABAPDATA_REFERRING.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABAPDATA", "REFERRING"]
---

`DATA var \{\ \{TYPE [LINE OF] type\}`\\ 
         `|\ \{LIKE [LINE OF] dobj\}\ \}`\\ 
         ``[`[VALUE  val|\{IS INITIAL\}]`](ABAPDATA_OPTIONS.html)``\\ 
         ``[`[READ-ONLY]`](ABAPDATA_OPTIONS.html).``

When a `type` data type or a `dobj` data object is specified, the data type of variable `var` is already fully defined before the declaration. The syntax and meaning of the additions `TYPE` and `LIKE` are exactly the same as the definition of the data types with [`TYPES`](ABAPTYPES_REFERRING.html), with the following exceptions:

If neither `TYPE` nor `LIKE` is specified, a data object with the bound data type `c` of length 1 is created.

Use of the `TYPE` addition to declare a work area for a [`SELECT`](ABAPSELECT.html) statement. Use of the `LIKE` addition to declare a further data object of the same type.

-   In the case of `DATA`, a standard table type with [generic primary table key](ABAPTYPES_KEYDEF.html) can be specified after `TYPE`. This creates a bound table type with a [standard key](ABENSTANDARD_KEY_GLOSRY.html).
-   In the case of `DATA`, a table type can be specified after `TYPE` that is generic with respect to its [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) because of the explicit addition [`WITH FURTHER SECONDARY KEYS`](ABAPTYPES_KEYDEF.html). This type property is not relevant for the declared data object.

-   For internal tables, the declaration of the primary table key as a [standard key](ABENITAB_STANDARD_KEY.html) can be critical for various reasons. It is best to define the key fields explicitly instead. For this reason, in the case of the statement above, it must be ensured that a table with a standard key is not created by mistake if a generic standard table type is used.
-   If an [enumerated type](ABENENUM_TYPE_GLOSRY.html) is specified after `TYPE` or a data object with this type is specified after `LIKE`, an [enumerated variable](ABAPDATA_ENUM.html) is created.
-   When referring to data types defined in the ABAP Dictionary, the [initial value](ABENINITIAL_VALUE_GLOSRY.html) of elementary data types is not the initial value assigned to the [built-in dictionary types](ABENDDIC_BUILTIN_TYPES.html) and is the initial value of the mapped [built-in ABAP types](ABENBUILT_IN_TYPES_COMPLETE.html) instead.

DATA wa TYPE scarr. \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'BA' \\n INTO @wa. \\n\\ \\nDATA buffer LIKE wa. \\nbuffer = wa. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html