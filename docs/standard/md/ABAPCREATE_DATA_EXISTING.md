---
title: "ABAPCREATE_DATA_EXISTING"
description: |
  ABAPCREATE_DATA_EXISTING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_DATA_EXISTING.htm"
abapFile: "ABAPCREATE_DATA_EXISTING.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "internal-table", "field-symbol", "ABAPCREATE", "DATA", "EXISTING"]
---

[Short Reference](ABAPCREATE_DATA_SHORTREF.html)

`CREATE DATA dref`  ``[[`area_handle`](ABAPCREATE_DATA_AREA_HANDLE.html)]``\\ 
                 `\{\ \{TYPE [LINE OF]\ \{type|(name)\}\}\                   |\ \{LIKE [LINE OF] dobj\}\                   |\ \{LIKE struct-\{comp_name|(comp_name)\}\}\}.`

The type of the created data object is defined by a type or data object specification.

The optional addition `LINE OF` can be used if `type` or the name in `name` is a table type, or if `dobj` is an internal table. As a result, the generated data object inherits the properties of the line type of the internal table.

Creation of an anonymous data object of type `SCARR`.

The following example uses the `LIKE` addition and specifies a component name to refer to statically and dynamically.

[Creating Structured Data Objects](ABENCREATE_STRUCTURED_DATA_ABEXA.html)

-   For `type`, any data type can be specified from the ABAP Dictionary, particularly the DDIC structure of a DDIC database table, a [DDIC view](ABENDDIC_VIEW_GLOSRY.html), a [CDS type](ABENCDS_TYPE_GLOSRY.html) or a public data type of a global class, or any data type of the same program already defined using `TYPES` and that is either more specific than or identical to the static type of `dref`. Alternatively, a character-like data object `name`, which is not case-sensitive, can be specified in parentheses that contains the name of the existing data type when the statement is executed. The name in `name` can also be an [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html). If a standard table type with a generic primary table key is specified after `TYPE`, a new [bound](ABENBOUND_DATA_TYPE_GLOSRY.html) table type with standard key is created and used.
-   A data object that is [visible](ABENLIFETIME_AND_VISIBILITY.html) at this point can be [specified](ABENDATA_OBJECTS_USAGE_READING.html) for `dobj`. The generated data object inherits the current data type. If `dobj` is specified as a formal parameter or field symbol, it can be completely or partially generic. When the statement `CREATE DATA` is executed, a data object must be bound to a generically typed field symbol or parameter and its type is used. In the case of a completely typed field symbol or parameter, the declared type is used and no data object must be bound.
-   Structure components can be referred to using the structure followed by the [component selector](ABENCOMPONENT_SELECTOR_GLOSRY.html) and the component name `comp_name`. The component name can also be specified dynamically within parentheses.

-   The data objects which can be referred to using `LIKE` include the public attributes of global classes.
-   If an anonymous data object is created with an [enumerated type](ABAPTYPES_ENUM.html), the same rules apply to this object as to every other data object of this type.
-   If a data type `type` is used, the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) acts like the statement `CREATE DATA dref TYPE type` and can be used in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). The dynamic specification of `name` is not possible here.
-   If a type of another program is specified using an [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html) in `name`, this program is loaded into a new [additional program group](ABENADDITIONAL_PROG_GROUP_GLOSRY.html) or into the current [program group](ABENPROGRAM_GROUP_GLOSRY.html), depending on the program type, if it was not already loaded.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\nCREATE DATA dref TYPE scarr. \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'LH' \\n INTO @dref->\*. \\n\\ \\nASSIGN dref->\*-('CARRID') TO FIELD-SYMBOL(). \\nASSIGN dref->\*-('CARRNAME') TO FIELD-SYMBOL(). \\n\\ \\nout->write( |\\{ \\}, \\{ \\}| ). \\n\\ \\nout->display( ). DATA: BEGIN OF struct, \\n num TYPE i, \\n str Type string, \\n END OF struct. \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\nCREATE DATA dref LIKE struct-num. \\nCREATE DATA dref LIKE struct-num. \\n\\ \\nCREATE DATA dref LIKE struct-('NUM'). \\nDATA comp\_name TYPE string VALUE \`STR\`. \\nCREATE DATA dref LIKE struct-(comp\_name). abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html