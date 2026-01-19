---
title: "ABAPSELECT_INTO_TARGET"
description: |
  ABAPSELECT_INTO_TARGET - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT_INTO_TARGET.htm"
abapFile: "ABAPSELECT_INTO_TARGET.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABAPSELECT", "INTO", "TARGET"]
---

`... \{     @dobj       \}\    |\ \{     @DATA(dobj)|@FINAL(dobj) \}\    |\ \{ NEW @dref       \}\    |\ \{ NEW @DATA(dref)|@FINAL(dref) \} ...`

[1. `... @dobj`](#ABAP_ALTERNATIVE_1@2@)

[2. `... @DATA(dobj)|@FINAL(dobj)`](#ABAP_ALTERNATIVE_2@2@)

[3. `... NEW @dref`](#ABAP_ALTERNATIVE_3@2@)

[4. `... NEW @DATA(dref)|@FINAL(dref)`](#ABAP_ALTERNATIVE_4@2@)

Specifies a target area of the [`INTO`](ABAPINTO_CLAUSE.html) clause of an ABAP SQL query. The possible target areas of the [`INTO`](ABAPINTO_CLAUSE.html) clause are as follows:

Each target area can be specified as follows:

The addition `NEW` is used to create an [anonymous data object](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) to which data from the result set is written and to which a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html)\\ `dref` points. The data reference variable is one of the following:

All alternatives can occur combined in a comma-separated list for elementary data objects as target areas. One of these alternatives must be selected when a single work area or an internal table is specified.

Specifies a previously declared [host variable](ABENABAP_SQL_HOST_VARIABLES.html)\\ `@dobj` as a target area of the [`INTO`](ABAPINTO_CLAUSE.html) clause. The data in the result set is written directly to the host variable `dobj`. Depending on the operand position, the host variable can be one of the following:

Writes to the host variable are made as described in the [`INTO`](ABAPINTO_CLAUSE.html) clause.

Use of different existing host variables as target areas of `SELECT` statements.

Specifies a [host variable](ABENABAP_SQL_HOST_VARIABLES.html)\\ `@dobj` declared inline as the target area of the [`INTO`](ABAPINTO_CLAUSE.html) clause. The data in the result set is written directly to the host variable `dobj`. The inline declaration is made with one of the [declaration operators](ABENDECLARATION_OPERATOR_GLOSRY.html)\\ [`DATA`](ABENDATA_INLINE.html) or [`FINAL`](ABENFINAL_INLINE.html), which must be prefixed with the escape character `@` here. Depending on the operand position, the host variable is declared as follows:

The prerequisites for an inline declaration are as follows:

Reading of individual columns of a result set into different target areas declared inline. `carrname`, `carrid`, and `url` are elementary data objects. `wa` is a structure with elementary components. `itab` is a standard table with the corresponding row type.

Reading of all columns of a result set into an inner join in an internal table whose row type is declared as a nested structure with the same structure as the result set. The first component of the nested structure is called `SCARR` and includes all columns of this DDIC database table. The second component of the nested structure is called `SPFLI` and includes all columns of this DDIC database table. The content of the columns `MANDT` and `CARRID` in both tables is redundant. For the output, the internal table with a nested row type is converted to an output table without substructures.

The following example demonstrates how enumerated variables result from an inline declaration. The data source of the following `SELECT` statement is a CDS view entity. The elements `weekday` and `EnumConstant` are enumerated elements and have the data type `ENUM`. The variable `result` of the table declared inline also has the data type `enum`.

Screenshot of the `result` variable in the debugger:

[Inline Declarations](ABENSELECT_INLINE_DECL_ABEXA.html)

The addition `NEW` creates an [anonymous data object](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) as the target area of the [`INTO` clause](ABAPINTO_CLAUSE.html). `dref` expects a previously declared [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) that points to the data object after the object is created. The data of the result set is written to the new anonymous data object. The data reference variable `dref` can be typed completely or generically.

Unlike in inline declarations with `@DATA|FINAL(dobj)`, the type of the anonymous data object can also be created at runtime. This means that the addition `NEW` can also be specified in the following cases:

If possible, the type check takes place as part of the syntax check and otherwise at runtime. If an error is not detected until runtime, an exception of the class `CX_SY_DYNAMIC_OSQL_SEMANTICS` is raised.

The following restrictions apply:

Use of a generically typed and a completely typed data reference variable after `NEW`. The anonymous data objects created here both have the same type and the same content. The third `SELECT` statement writes to an anonymous data object created previously using the instance operator `NEW` demonstrating roughly how the `NEW` addition works.

In this example, three anonymous data objects of the type `string` are created. The columns of the result set are converted to `string`.

This example compares an `INTO` clause with an inline declaration of the target area (see above) with an `INTO` clause with the addition `NEW`. In both cases, the same data type is constructed, namely an internal table with a nested row structure. As long as individual components are not accessed, the exact data type does not need to be known in the program.

The addition `NEW` in front of an inline declaration with the [declaration operators](ABENDECLARATION_OPERATOR_GLOSRY.html)\\ [`@DATA`](ABENDATA_INLINE.html) or [`@FINAL`](ABENFINAL_INLINE.html) works like the previous variant, however the data reference variable `dref` that points to the new anonymous data object is declared inline. The [static type](ABENSTATIC_TYPE_GLOSRY.html) of the data reference variable `dref` is defined as follows:

The columns of the result set defined in the `SELECT` list must have unique names.

Creation of an anonymous data object as target area together with an inline declaration of the data reference variable. After `SELECT` with static tokens, the data reference variable `dref_scarr` has the static type of an internal table with the row type `SCARR` from the ABAP Dictionary. This is demonstrated using RTTI methods.

-   Elementary data objects `elem1`, `elem2`, ... in a comma-separated list.
-   Individual work areas `wa`.
-   Internal tables `itab` after `TABLE`.

-   If the addition `NEW` is not used, `dobj` specifies the data object directly to which the data from the result set is written. The target area is one of the following:

-   A previously declared [host variable](ABENHOST_VARIABLE_GLOSRY.html)\\ `@dobj`
-   A [host variable](ABENHOST_VARIABLE_GLOSRY.html)\\ `dobj` declared [inline](ABENINLINE_DECLARATION_GLOSRY.html) using `@DATA`

-   A previously declared [host variable](ABENHOST_VARIABLE_GLOSRY.html)\\ `@dref`
-   A [host variable](ABENHOST_VARIABLE_GLOSRY.html)\\ `dref` declared [inline](ABENINLINE_DECLARATION_GLOSRY.html) using `@DATA`

-   In the case of the variant `NEW @DATA(dref)|@FINAL(dref)`, the [`SELECT` list](ABAPSELECT_LIST.html), the [`FROM` clause](ABAPFROM_CLAUSE.html), and any [indicators](ABAPSELECT_INDICATORS.html) can be specified dynamically. This is the only way of combining a dynamically defined result set with inline declarations.

-   In the comma-separated list `elem1`, `elem2`, ..., an [elementary data object](ABENELEMENTARY_DATA_OBJECT_GLOSRY.html) that matches the type of the associated column of the result set or in other words: The type of the associated column of the result set can be converted to the data type of the data object.
-   As a single work area `wa`, a data object that meets the [prerequisites](ABENABAP_SQL_WA.html).
-   As an internal table, any table category whose row structure meets the [prerequisites](ABENABAP_SQL_WA.html).

-   In the comma-separated list `elem1`, `elem2`, ..., an elementary variable is declared. The data type of the variables is constructed as follows from the associated column of the result set:

-   The ABAP type to which the dictionary type of a [column](ABENABAP_SQL_COLUMNS.html) of a data source is [assigned](ABENDDIC_BUILTIN_TYPES.html) is used for this column.
-   The ABAP type to which the result type of an [SQL expression](ABAPSQL_EXPR.html) is [assigned](ABENDDIC_BUILTIN_TYPES.html) is used for this expression.
-   The ABAP type of a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) is used directly for this variable specified as a single SQL expression.

-   Work area and internal table:

-   For `INTO @DATA(wa)` or `INTO @FINAL(wa)`, a flat data object `wa` is declared as a single work area.
-   For `INTO TABLE @DATA(itab)` or `INTO TABLE @FINAL(itab)`, a [standard table](ABENSTANDARD_TABLE_GLOSRY.html)\\ `itab` with an [empty table key](ABENITAB_EMPTY_KEY.html) is declared as an internal table.

-   The data type of `wa` or the row type of the internal table is constructed as follows in accordance with the structure of the result set defined after `SELECT` and the number of data sources specified after [`FROM`](ABAPFROM_CLAUSE.html):

-   If the result set in the [`SELECT` list](ABAPSELECT_LIST.html) is defined using a single specified column [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html) for which no name can be identified, the data type of `wa` or the row type of `itab` is its elementary type.
-   If the result set in the [`SELECT` list](ABAPSELECT_LIST.html) is defined using a single specified column [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html) for which no name can be identified, the data type of `wa` or the row type of `itab` is a structure with a component, with its elementary type.
-   If the result set in the [`SELECT` list](ABAPSELECT_LIST.html) is defined using a single `data_source~*` or a list of multiple specified columns [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html), the data type of `wa` or the row type of `itab` is a structure with elementary components. The data types of the components are the elementary types of the columns in the result set in the order defined there.
-   If `data_source~*` is specified in the [`SELECT` list](ABAPSELECT_LIST.html) together with other elements, the data type of `wa` or the row type of `itab` is a nested structure. For each data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) specified in this way, a substructure is generated with the name or alias name of the table or view. The data types of the components of the substructures are the elementary types of the data source in the order defined there. If the data source is a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) declared using [`WITH`](ABAPWITH.html), the first character `+` of its name is ignored for the name of the substructure.
-   If the result set in the [`SELECT` list](ABAPSELECT_LIST.html) is defined using `*`, the data type depends on the number of [data sources](ABAPSELECT_DATA_SOURCE.html) specified after [`FROM`](ABAPFROM_CLAUSE.html):
-   In reads from a single [data source](ABAPSELECT_DATA_SOURCE.html)\\ `data_source`, the data type of `wa` or the row type of `itab` is the same as in a definition of the result set using a single `data_source~*` (see above), that is, a structure with elementary components.
-   In reads from multiple [data sources](ABAPSELECT_DATA_SOURCE.html)\\ `data_source1`, `data_source2`, ... using a [join](ABAPSELECT_JOIN.html), the data type of `wa` or the row type of `itab` is the same as in a definition of the result set using `data_source1~*, data_source2~*, ...`. (see above), that is, a structure with a substructure for each data source.
-   The names of the elementary components of a structure match the names of the associated columns from the [result set](ABAPSELECT_LIST.html). Any alias names defined there are respected.
-   As with an elementary data object in a comma-separated list, the elementary data type of an elementary data object or of an elementary component of a structure is constructed from the type of the associated column of the result set (see above).
-   If the addition [`INDICATORS`](ABAPSELECT_INDICATORS.html) is used, a substructure called `null_ind` is added at the end of the structure or row structure declared inline. For each column in the result set, this substructure contains an identically named component of type `x` and length 1 in the same order. If preceding components of the structure declared inline are substructures, the substructure `null_ind` is also structured accordingly.

-   The result set can be specified dynamically only when combined with the addition `NEW`. If the addition `NEW` is not specified, the structure of the result set must be known statically. The [`SELECT` list](ABAPSELECT_LIST.html) and any [indicators](ABAPSELECT_INDICATORS.html) must be specified statically.
-   The result set defined in the [`SELECT` list](ABAPSELECT_LIST.html) cannot have multiple columns with the same name. This can be bypassed using alias names.
-   In a [result set](ABAPSELECT_LIST.html) with multiple rows or if the addition [`INDICATORS`](ABAPSELECT_INDICATORS.html) is specified, every [SQL expression](ABAPSQL_EXPR.html) and every [aggregate expression](ABAPSELECT_AGGREGATE.html) must have an alias name.
-   Alias names of the [`SELECT` list](ABAPSELECT_LIST.html) must comply with the [naming conventions](ABENNAMING_CONVENTIONS.html) for internal program names. More specifically, they cannot contain a minus sign `-`.
-   The addition [`CORRESPONDING FIELDS OF`](ABAPINTO_CLAUSE.html) cannot be used.

-   Column specifications for which no name can be identified are SQL expressions and aggregate expressions without alias name.
-   When an inline declaration `@DATA(itab)` or `@FINAL(itab)` is specified after `APPENDING TABLE`, this addition usually works like `INTO TABLE` and is therefore pointless in this combination.
-   When accessing a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) with a [CDS enumerated element](ABENCDS_ENUM_ELEMENT_GLOSRY.html), an [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html) is generated in ABAP.
-   Currently, only standard tables with an empty key and without secondary keys can be declared inline as internal tables in the `INTO` clause of a `SELECT` statement.

-   If the data reference variable `dref` is typed completely, its [static type](ABENSTATIC_TYPE_GLOSRY.html) must follow the same rules as for a directly specified data object `@dobj`:

-   In a comma-separated list `(..., dref, ...)`, it must be an elementary data type to which the type of the associated column of the result set can be converted.
-   In a single work area `wa`, the type must meet the [prerequisites](ABENABAP_SQL_WA.html) for work areas.
-   In an internal table, it must be a table type with any table category whose row structure meets the [prerequisites](ABENABAP_SQL_WA.html).

-   The anonymous data object is created with the type of the data reference variable. The [static type](ABENSTATIC_TYPE_GLOSRY.html) of the data reference variable matches the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html). Writes to the anonymous data object are made as described in the [`INTO`](ABAPINTO_CLAUSE.html) clause.
-   If the data reference variable `dref` is typed generically with [`data`](ABENBUILT_IN_TYPES_GENERIC.html), the data type of the anonymous data object or the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of `dref` is constructed depending on the operand position in exactly the same way as the data type of `dobj` in the inline declaration `@DATA|FINAL(dobj)` described above. This means the following:

-   In a comma-separated list `(..., dref, ...)`, an elementary data object is created whose type is determined by the type of the associated column of the result set.
-   For a single work area in `INTO NEW @dref`, a flat data object is created. The type of the new data object is constructed in the same way as in an inline declaration using `@DATA|FINAL(dobj)`.
-   For `INTO TABLE NEW @dref`, a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with an [empty table key](ABENITAB_EMPTY_KEY.html) is created as an internal table. The row type of the internal table is constructed in the same way as in an inline declaration using `@DATA|FINAL(dobj)`.

-   The anonymous data object is created with this type. The [static type](ABENSTATIC_TYPE_GLOSRY.html) of the data reference variable is more general than the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html). Writes to the anonymous data object are made as described in the [`INTO`](ABAPINTO_CLAUSE.html) clause. The columns of the result set defined in the `SELECT` list must have unique names.

-   If the structure of the result set cannot be known statically due to the use of dynamic tokens.

-   The addition `NEW` can only be specified after [`INTO`](ABAPINTO_CLAUSE.html) and not after [`APPENDING`](ABAPINTO_CLAUSE.html).

-   The addition `NEW` works in a similar way as creating an anonymous data object with the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) directly in front of the ABAP SQL statement and using the dereferenced reference variable as a target area. The addition `NEW` has the advantage that the data type of the anonymous data object is constructed in a suitable way and this works especially for dynamic tokens as well.

-   If the data type of the new anonymous data object is known statically, `dref` is also typed with this type.
-   If the data type of the new anonymous data object cannot be known until runtime, `dref` is typed with the generic type [`data`](ABENBUILT_IN_TYPES_GENERIC.html).

-   The addition `NEW` can also be used to make an inline declaration together with dynamic tokens. The data reference variable that points to the target area created as an anonymous data object is declared, however, instead of the direct target area.

-   [Create Structure as Target Area](ABENSELECT_INTO_NEW_WA_ABEXA.html)
-   [Create Internal Table as Target Area](ABENSELECT_INTO_NEW_TABLE_ABEXA.html)

DATA: \\n carrid TYPE scarr-carrid, \\n carrname TYPE scarr-carrname, \\n url TYPE scarr-url, \\n carrier TYPE scarr, \\n carriers TYPE SORTED TABLE OF scarr WITH UNIQUE KEY carrid. \\n\\ \\nSELECT SINGLE carrid, carrname, url \\n FROM scarr \\n WHERE carrid = 'UA' \\n INTO (@carrid, @carrname, @url). \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'LH' \\n INTO @carrier. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @carriers. SELECT SINGLE \\n FROM scarr \\n FIELDS carrname, \\n carrid, \\n url \\n WHERE carrid = 'LH' \\n INTO (@FINAL(carrname),@FINAL(carrid),@FINAL(url)). \\n\\ \\nSELECT SINGLE \\n FROM scarr \\n FIELDS carrname, \\n carrid, \\n url \\n WHERE carrid = 'LH' \\n INTO @FINAL(wa). \\n\\ \\nSELECT FROM scarr \\n FIELDS carrname, \\n carrid, \\n url \\n INTO TABLE @FINAL(itab). \\n\\ \\nASSERT wa-carrname = carrname. \\nASSERT wa-carrid = carrid. \\nASSERT wa-url = url. \\n\\ \\ncl\_demo\_output=>new( \\n )->write( wa \\n )->write( itab )->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n\\ \\nTYPES BEGIN OF output\_wa. \\nINCLUDE TYPE scarr AS scarr RENAMING WITH SUFFIX \_scarr. \\nINCLUDE TYPE spfli AS spfli RENAMING WITH SUFFIX \_spfli. \\nTYPES END OF output\_wa. \\nTYPES output TYPE SORTED TABLE OF output\_wa \\n WITH NON-UNIQUE KEY carrid\_scarr connid\_spfli. \\n\\ \\nSELECT \* \\n FROM scarr \\n INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n INTO TABLE @FINAL(itab). \\n\\ \\nout->write( CONV output( itab ) ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n\*fill database table \\nDELETE FROM demo\_ddic\_types. \\nINSERT demo\_ddic\_types FROM TABLE @( VALUE #( \\n ( id = 'A' int1 = 1 ) \\n ( id = 'B' int1 = 6 ) \\n) ). \\n\\ \\n\*SELECT from cds view entity \\nSELECT \* \\nFROM demo\_cds\_enum\_2 \\nINTO TABLE @DATA(result). \\n\\ \\n\*display result \\nout->write( result ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES scarr\_tab TYPE STANDARD TABLE OF scarr WITH EMPTY KEY. \\n\\ \\nDATA dref\_data TYPE REF TO data. \\nSELECT FROM scarr \\n FIELDS \* \\n INTO TABLE NEW @dref\_data. \\n\\ \\nDATA dref\_scarr\_tab TYPE REF TO scarr\_tab. \\nSELECT FROM scarr \\n FIELDS \* \\n INTO TABLE NEW @dref\_scarr\_tab. \\n\\ \\nASSERT dref\_data->\* = dref\_scarr\_tab->\*. \\n\\ \\nout->write( dref\_data->\* ). \\n\\ \\ndref\_scarr\_tab = NEW #( ). \\nSELECT FROM scarr \\n FIELDS \* \\n INTO TABLE @dref\_scarr\_tab->\*. \\nASSERT dref\_data->\* = dref\_scarr\_tab->\*. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n dref1 TYPE REF TO string, \\n dref2 TYPE REF TO string, \\n dref3 TYPE REF TO string. \\n\\ \\nSELECT SINGLE carrid, carrname, url \\n FROM scarr \\n WHERE carrid = 'UA' \\n INTO (NEW @dref1, NEW @dref2, NEW @dref3). \\n\\ \\nout->write( |\\{ dref1->\* \\}, \\{ dref2->\* \\}, \\{ dref3->\* \\}| ). \\n\\ \\nout->display( ). SELECT \* \\n FROM scarr \\n INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n INTO TABLE @FINAL(itab). \\n\\ \\nDATA dref TYPE REF TO data. \\nSELECT \* \\n FROM scarr \\n INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n INTO TABLE NEW @dref. \\n\\ \\nASSERT dref->\* = itab. SELECT \* \\n FROM scarr \\n INTO TABLE NEW @FINAL(dref\_scarr). \\n\\ \\ncl\_demo\_output=>new( \\n\\ \\n )->write( |dref\_scarr: \\{ \\n CAST cl\_abap\_tabledescr( \\n CAST cl\_abap\_refdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( dref\_scarr ) \\n )->get\_referenced\_type( \\n ) )->get\_table\_line\_type( \\n )->absolute\_name \\} | \\n )->display( dref\_scarr->\* ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapinto\_clause.html