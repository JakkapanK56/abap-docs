---
title: "ABENABAP_SQL_HOST_VARIABLES"
description: |
  ABENABAP_SQL_HOST_VARIABLES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_HOST_VARIABLES.htm"
abapFile: "ABENABAP_SQL_HOST_VARIABLES.html"
keywords: ["select", "do", "while", "if", "try", "catch", "class", "data", "types", "field-symbol", "ABENABAP", "SQL", "HOST", "VARIABLES"]
---

`... @dobj ...`

Specifying a [host variable](ABENHOST_VARIABLE_GLOSRY.html) in an ABAP SQL statement. Host variables are global or local data objects `dobj` declared in the ABAP program that are used in operand positions of ABAP SQL statements. Instead of the data object itself, a field symbol to which the data object is assigned can also be specified. Dereferenced data reference variables can also be specified. Depending on the operand position, the data objects can be [variables](ABENVARIABLE_GLOSRY.html) or [constants](ABENVARIABLE_GLOSRY.html). Constant host variables are [host constants](ABENHOST_CONSTANT_GLOSRY.html).

To identify a host variable, the names of [named](ABENNAMED_DATA_OBJECT_GLOSRY.html) data objects or field symbols should always be directly prefixed by the escape character `@`. The escape character can only be used in programs, in which the program property [*fixed point arithmetic*](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) is activated. When the escape character is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

The content of host variables in read positions is passed to the database system together with the SQL statement before it is executed. The content of host variables in write positions is taken from the database system after the SQL statement is ended.

Host variables can have a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html) but not an [ABAP enumerated type](ABENENUMERATED_TYPE_GLOSRY.html).

Specification of different host variables, whereby the escape character `@` is always used.

Use of a host variable `prefix` with the type `c` and a host variable `name` of the type `string`. The host variable `name` is used on the right-hand side of the `WHERE` condition. A string is possible, and since the introduction of ABAP SQL expressions on the right side of a condition, also an SQL expression.

The following `SELECT` statement raises an exception because the content of the host variable `carrid` cannot be assigned in a lossless manner. If `carrid` were a constant, there would be an additional syntax warning.

Specifies a host variable typed with a CDS enumerated type in an ABAP SQL statement. Host variables typed with a CDS enumerated type can be specified in all operand positions that are documented in the table above.

The [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html)\\ `fri` is specified as host variable in different operand positions.

-   Read positions in which host variables are handled as [elementary SQL expressions](ABENSQL_ELEM.html) are subject to the corresponding rules and any mappings are made to a dictionary type. The content is evaluated on the database in accordance with this type.
-   In operand positions in which host variables are not handled as SQL expressions, a [type conversion](ABENCONVERSION_RULES.html) into the appropriate data type takes place if required. In read positions, it must be possible to convert the content of a host variable to the data type required in the operand position in a [lossless](ABAPMOVE_EXACT.html) manner. Any unsuitable [host constants](ABENHOST_CONSTANT_GLOSRY.html) produce syntax warnings or syntax errors, depending on the [syntax check mode](ABENABAP_SQL_STRICT_MODES.html). Host variables that cannot be converted in a lossless manner produce a catchable exception of class `CX_SY_OPEN_SQL_DATA_ERROR`.

-   In some operand positions in which host variables are allowed and [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html) are prohibited, a host variable can nevertheless be specified with the syntax `@( dobj )` and is handled as a host variable and not as an expression.
-   ABAP data objects that are specified as enclosed dynamic tokens do not belong to the host variables and cannot be prefixed by the escape character `@`.
-   The escape character for host variables is independent of the general escape character for names [`!`](ABENNAMES_ESCAPING.html). The escape character `!` can also be written in front of host variables that are already prefixed by the escape character `@`. However, this is not recommended.
-   In addition to host variables, [literals](ABENABAP_SQL_LITERALS.html) can also be specified at the respective read positions in ABAP SQL statements. A literal, however, cannot and does not need to be prefixed by the escape character `@`. While [untyped literals](ABENABAP_SQL_UNTYPED_LITERALS.html) are usually handled as host variables, [typed literals](ABENABAP_SQL_TYPED_LITERALS.html) are always handled as elementary SQL expressions.
-   If host variables are used as [elementary SQL expressions](ABENSQL_ELEM.html), in particular as operands of other SQL expressions, they are mapped to a fixed dictionary type and the corresponding rules apply. This is different from their use in other operand positions, for which conversions to different dictionary types are generally possible.
-   A CDS [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html) is specified as usual by using the name of the CDS enumerated type, followed by a [component selector](ABENCOMPONENT_SELECTOR_GLOSRY.html) and the name of a CDS enumerated constant `@enumtype-enumconstant`.
-   Specifying host variables without the escape character `@` is [obsolete](ABENABAP_SQL_HOSTVAR_OBSOLETE.html). The escape character `@` must be specified in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05.
-   When host variables with an escape character `@` are specified, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.

DATA carrid TYPE spfli-carrid. \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\nDATA: BEGIN OF result, \\n carrid TYPE sflight-carrid, \\n connid TYPE sflight-connid, \\n END OF result. \\nSELECT carrid, connid \\n FROM sflight \\n WHERE carrid = @carrid \\n INTO CORRESPONDING FIELDS OF @result. \\nENDSELECT. \\n\\ \\nFIELD-SYMBOLS LIKE result. \\nSELECT carrid, connid \\n FROM sflight \\n WHERE carrid = @carrid \\n INTO CORRESPONDING FIELDS OF @. \\nENDSELECT. \\n\\ \\nDATA dref LIKE REF TO result. \\nSELECT carrid, connid \\n FROM sflight \\n WHERE carrid = @carrid \\n INTO CORRESPONDING FIELDS OF @dref->\*. \\nENDSELECT. DATA: \\n prefix TYPE c LENGTH 5, \\n name TYPE string. \\n\\ \\nSELECT FROM scarr \\n FIELDS @prefix && carrid AS carrid, \\n carrname \\n WHERE carrname = @name \\n INTO TABLE @FINAL(result). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(carrid) = \`LH \`. \\n\\ \\nTRY. \\n SELECT \* \\n FROM scarr \\n WHERE carrid = @carrid \\n INTO TABLE @FINAL(itab). \\n CATCH cx\_sy\_open\_sql\_data\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). DATA fri TYPE demo\_cds\_enum\_weekday. \\nSELECT char1 && '\_' && char2 AS group, \\n num1, \\n @fri AS EnumField \\n FROM demo\_expressions \\n WHERE @fri = @demo\_cds\_enum\_weekday-fri \\n ORDER BY @fri \\n INTO TABLE @FINAL(itab). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abensql\_operands.html