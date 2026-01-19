---
title: "ABENDEREFERENCING_OPERATOR"
description: |
  ABENDEREFERENCING_OPERATOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDEREFERENCING_OPERATOR.htm"
abapFile: "ABENDEREFERENCING_OPERATOR.html"
keywords: ["select", "if", "catch", "method", "data", "types", "internal-table", "field-symbol", "ABENDEREFERENCING", "OPERATOR"]
---

The content of a data object pointed to by a [data reference](ABENDATA_REFERENCE_TYPE.html) is accessed using the dereferencing operator:

`dref->*`

The dereferencing operator `->*` can be specified after a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html)\\ `dref`.

If the data reference variable contains the [null reference](ABENNULL_REFERENCE_GLOSRY.html), the uncatchable exception `DATREF_NOT_ASSIGNED` is raised when the dereferencing operator is used. The exception to this is the dereferencing in the statement `ASSIGN`.

Uses the dereferencing operator in a general operand position and in the statement `ASSIGN`. Only in `ASSIGN` can `dref` be initial without raising an uncatchable exception.

-   If the static type of the data reference variable is not generic, the expression `dref->*` can be specified at any operand position.
-   For data reference variables with the generic static type `data`, it can be specified at any operand position except for:

-   Replacement parameters behind `DEFAULT` for methods, functions or events.
-   [Components](ABENITAB_COMPONENTS.html) of internal tables.
-   Operand positions where an [index table](ABENINDEX_TABLE_GLOSRY.html) is expected.

-   The dereferencing operator uses the [object component selector](ABENOBJECT_COMPONENT_SELECTOR.html).
-   For an index access to an internal table referenced by a generically typed data reference variable, it must be assigned to a field symbol typed with [`index table`](ABENBUILT_IN_TYPES_GENERIC.html) first.

DATA dref TYPE REF TO data. \\ndref = NEW i( 111 ). \\n\\ \\ncl\_demo\_output=>write( |dref->\* \\{ dref->\* \\}| ). \\n\\ \\nCLEAR dref. \\nASSIGN dref->\* TO FIELD-SYMBOL(). \\ncl\_demo\_output=>write( |sy-subrc \\{ sy-subrc \\}| ). \\n\\ \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html abenoperands\_names.html