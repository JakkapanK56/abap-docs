---
title: "ABAPTYPES_REFERRING"
description: |
  ABAPTYPES_REFERRING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPES_REFERRING.htm"
abapFile: "ABAPTYPES_REFERRING.html"
keywords: ["do", "if", "class", "data", "types", "internal-table", "field-symbol", "ABAPTYPES", "REFERRING"]
---

`TYPES dtype \{\ \{TYPE [LINE OF] type\}`\\ 
            `|\ \{LIKE [LINE OF] dobj\}  \}.`

[`... LINE OF ...`](#ABAP_ONE_ADD@1@)

By specifying a data type `type` or a data object `dobj`, `dtype` inherits all properties of the specified data type or data object.

If a reference is made to a data type in the ABAP Dictionary, its elementary components are transformed to built-in ABAP types in accordance with the [tables](ABENDDIC_BUILTIN_TYPES.html) of built-in types in the ABAP Dictionary.

Definition of a local type `also_my_struct_type` based on the type `my_struct_type` using `LIKE`.

The optional addition `LINE OF` can be used if `type` is a table type or if `dobj` is an internal table. This means that `dtype` inherits the properties of the line type of the internal table.

These `TYPES` statements define two data types local to the program. The first inherits a table type from a [type pool](ABENTYPE_POOL_GLOSRY.html) of the ABAP Dictionary, and the second corresponds to the line type of this table type.

-   The following can be specified for `type`:

-   A non-generic data type from the ABAP Dictionary or ABAP CDS allowed by the package check, particularly including the structure of a DDIC database table, or a [CDS type](ABENCDS_TYPE_GLOSRY.html).
-   A non-generic public type of a global class allowed by the package check
-   A non-generic data type of the same program defined previously using `TYPES`

-   A data object that is [visible](ABENLIFETIME_AND_VISIBILITY.html) at this point can be [specified](ABENDATA_OBJECTS_USAGE_READING.html) for `dobj`. If a field symbol or formal parameter is specified for `dobj`, this must be [completely typed](ABENTYPING_COMPLETE.html). The declared type is inherited. No data object must be bound when the statement is evaluated.

-   A data type that is defined by a `TYPE` reference to another data type is a copy of this data type (possibly in a different context and with a different name). If the original type is defined in the [ABAP Dictionary](ABENDDIC_DATA_TYPES.html) or is a CDS simple type, its semantic properties are preserved.
-   The data objects that can be referred to with `LIKE` also include the public attributes of global classes.
-   A data type that is declared by a direct `TYPE` or `LIKE` reference to a [boxed component](ABENBOXED_COMPONENT_GLOSRY.html) inherits its data type but is not a boxed component.
-   A data type that is declared by a `TYPE` or `LIKE` reference to an [enumerated type](ABAPTYPES_ENUM.html) has exactly the same meaning as the enumerated type itself. The value set defined for the enumerated type is not duplicated.

TYPES: BEGIN OF struct\_type, \\n s1 TYPE i, \\n s2 TYPE i, \\n END OF struct\_type. \\nDATA my\_struct TYPE struct\_type. \\n\\ \\nTYPES also\_my\_struct\_type LIKE my\_struct. DATA: event\_table TYPE cntl\_simple\_events, \\n event LIKE LINE OF event\_table. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html