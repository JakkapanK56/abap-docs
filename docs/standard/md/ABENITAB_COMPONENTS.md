---
title: "ABENITAB_COMPONENTS"
description: |
  ABENITAB_COMPONENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_COMPONENTS.htm"
abapFile: "ABENITAB_COMPONENTS.html"
keywords: ["select", "do", "if", "case", "catch", "data", "internal-table", "ABENITAB", "COMPONENTS"]
---

Addresses individual components of internal table lines in a range of statements for processing internal tables and in [table expressions](ABENTABLE_EXPRESSIONS.html). If not stated otherwise, the following syntax applies to `comp1 comp2...`:

`... \{ comp_name[-sub_comp][\{+off(len)\}|\{->attr\}]\ \}\ |\ \{ (name) \} ...`

The following alternatives are available for specifying components:

Sorting by a dynamically specified component. An incorrect name produces a runtime error.

-   Directly specifying the name `comp_name` of a component.

-   If the data type of the components is character-like and [flat](ABENFLAT_GLOSRY.html), an offset/length `+off(len)` can be appended to the name of the component, as in [substring access](ABENOFFSET_LENGTH.html), to access subareas of the component. Only directly specified numbers or constants can be specified for `off` and `len`.
-   If the component is structured, the structure component selector `-` can be used to access the `sub_comp` components of the substructure.
-   If the component has a reference type, the object component selector `->` can be used to access all visible attributes `attr` of the referenced object. In this case, a table component can be specified more than once.

-   Specifying a parenthesized [character-like data object](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html)\\ `name`, which contains the name of the component when the statement is executed.

-   The name of the component in `name` can contain an offset/length specification.
-   The object component selector `->` can be specified in `name` to access attributes, but only those attributes can be addressed that are known statically.
-   `name` is not case-sensitive. If `name` only contains blanks, this component specification is ignored when the statement is executed. If `name` contains a nonexistent component, an uncatchable exception is raised.

-   Specifying the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` to address the whole table line as a component.

-   A component can only be specified more than once if it has a reference type. Further components, however, can be specified alongside `table_line`. This is necessary, for example, if the line type of the internal table is an object reference and the value of the reference and the value of an attribute of the object are to be specified at the same time.
-   If the table has a non-structured line type, the pseudo comment `table_line` can be addressed as the only component.
-   The pseudo component `table_line` is a reserved name. In ABAP and in the ABAP Dictionary, no structure components called `table_line` can be declared.
-   If the line type of the internal table cannot be statically identified, the components can usually only be specified dynamically and not directly.
-   The components specified do not have to be elementary.
-   If the data type allows it (character-like and flat), an offset/length specification can also include adjacent components
-   A [customizing include](ABENCUSTOMIZING_INCLUDE_GLOSRY.html) must not be specified as a component if it is empty.

DATA(column) = \`carrid\`. \\ncl\_demo\_input=>request( CHANGING field = column ). \\n\\ \\nDATA itab TYPE TABLE OF spfli WITH EMPTY KEY. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @itab. \\n\\ \\nSORT itab BY (column). \\n\\ \\ncl\_demo\_output=>display( itab ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html