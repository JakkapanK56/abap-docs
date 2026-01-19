---
title: "ABENSQL_OPERANDS"
description: |
  ABENSQL_OPERANDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_OPERANDS.htm"
abapFile: "ABENSQL_OPERANDS.html"
keywords: ["select", "do", "while", "if", "case", "try", "catch", "class", "data", "types", "ABENSQL", "OPERANDS"]
---

``... [`col`](ABENABAP_SQL_COLUMNS.html)\    |\ [`literal`](ABENABAP_SQL_LITERALS.html)\ |\ [`@dobj`](ABENABAP_SQL_HOST_VARIABLES.html)\ |\ [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html) ...``

Specifies a column [`col`](ABENABAP_SQL_COLUMNS.html), a literal [`literal`](ABENABAP_SQL_LITERALS.html), a host variable [`@dobj`](ABENABAP_SQL_HOST_VARIABLES.html), or a host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html) as an elementary [SQL operand](ABENSQL_OPERAND_GLOSRY.html) in an ABAP SQL operand position.

These elementary operands can have the following properties:

To operand positions in which host variables are handled as SQL expressions, the associated rules for the expressions apply. The rules of the respective position apply in operand positions in which no SQL expressions are possible.

While the value of a column `col` or a [typed literal](ABENABAP_SQL_TYPED_LITERALS.html) is determined on the database, the values of [untyped literals](ABENABAP_SQL_UNTYPED_LITERALS.html), host variables, and host expressions are passed from ABAP to the database system before the SQL statement is executed or copied from the database system after it is executed. The operand position determines how the value of such an ABAP object is handled:

[Typed literals](ABENABAP_SQL_TYPED_LITERALS.html) are always handled as elementary SQL expressions, while [untyped literals](ABENABAP_SQL_UNTYPED_LITERALS.html) can also be handled as host variables, depending on the operand position.

SQL expressions are possible on the left and right side of the [`WHERE`](ABAPWHERE.html) condition. The specified column `carrid` can be placed in parentheses as an elementary SQL expression. General SQL expressions are also possible on the right side of the condition. The literal `` CHAR`UA` `` as an elementary SQL expression can be used and also be set in parentheses.

In the first `SELECT` statement, the host variable `@field` is in an [operand position](ABENWHERE_LOGEXP_OPERAND_IN.html) in which it is not handled as an elementary SQL expression. Their content must comply with the [rules for lossless assignments](ABAPMOVE_EXACT.html), which is not the case here. This is why an exception of the class `CX_SY_OPEN_SQL_DATA_ERROR` is raised. In the second `SELECT` statement, the same host variable is in an [operand position](ABENWHERE_LOGEXP_LIST_IN.html) in which it is evaluated as an elementary SQL expression and a [mapping](ABENSQL_ELEM.html) takes place to a dictionary type and the value is evaluated using this type on the database. No exception is raised in this case.

-   They can be specified as [elementary SQL expressions](ABENSQL_ELEM.html) in all operand positions in which [SQL expressions](ABAPSQL_EXPR.html) are possible.
-   They can also occur in specific operand positions in which no SQL expressions or restricted SQL expressions are possible.

-   An ABAP object specified as an [elementary SQL expression](ABENSQL_ELEM.html) in a read position is mapped to a dictionary type as described there, passed to the database with this type, and handled accordingly. The database rules apply.
-   In operand positions in which an ABAP object is not handled as an SQL expression, a conversion between the respective types takes place according to [ABAP conversion rules](ABENCONVERSION_RULES.html) if necessary. The mapping of [ABAP Dictionary types](ABENDDIC_BUILTIN_TYPES.html) to [ABAP types](ABENBUILT_IN_TYPES_COMPLETE.html) is respected if necessary. If an [untyped literal](ABENABAP_SQL_UNTYPED_LITERALS.html), a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), or a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) is read, conversions are subject to the [rules for lossless assignments](ABAPMOVE_EXACT.html). If the assignment cannot be lossless, an exception is raised. Literals and [host constants](ABENHOST_CONSTANT_GLOSRY.html) produce syntax warnings or syntax errors.

SELECT \* \\n FROM scarr \\n WHERE ( carrid ) = CHAR\`UA\` \\n INTO TABLE @FINAL(itab). DATA field TYPE c LENGTH 100 VALUE 'XXXXXXXXXXXXXXX'. \\n\\ \\nTRY. \\n SELECT \* \\n FROM scarr \\n WHERE carrid IN ( @field ) \\n INTO TABLE @FINAL(rtab1). \\n CATCH cx\_sy\_open\_sql\_data\_error. \\n cl\_demo\_output=>write( 'Data loss in conversion' ). \\nENDTRY. \\n\\ \\nTRY. \\n SELECT \* \\n FROM scarr \\n WHERE ( carrid, carrname ) IN ( ( @field, CHAR\` \` ) ) \\n INTO TABLE @FINAL(rtab2). \\n CATCH cx\_sy\_open\_sql\_error. \\n cl\_demo\_output=>write( 'Error in mapping' ). \\nENDTRY. \\n\\ \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html