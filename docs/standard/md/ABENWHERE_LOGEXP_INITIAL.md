---
title: "ABENWHERE_LOGEXP_INITIAL"
description: |
  ABENWHERE_LOGEXP_INITIAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWHERE_LOGEXP_INITIAL.htm"
abapFile: "ABENWHERE_LOGEXP_INITIAL.html"
keywords: ["select", "do", "if", "try", "catch", "data", "types", "ABENWHERE", "LOGEXP", "INITIAL"]
---

[Short Reference](ABENSQL_COND_SHORTREF.html)

`... operand IS [NOT] INITIAL ...`

This relational expression is true if the value of the operand `operand` is (is not) the [initial value](ABENINITIAL_VALUE_GLOSRY.html) of its [built-in dictionary type](ABENDDIC_BUILTIN_TYPES.html).

The following applies to `operand`:

Reads the rows of the DDIC database table `DEMO_DDIC_TYPES` in which a dynamically specified column contains its type-dependent initial value.

-   [SQL expressions](ABAPSQL_EXPR.html) except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html) can be specified.
-   In a [`HAVING`](ABAPHAVING_CLAUSE.html) clause, [aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) can also be used.

-   The expression `IS [NOT] INITIAL` is suitable for checking the type-dependent initial value, regardless of its actual data type, instead of comparing it with a type-compliant operand that contains the initial value. This is of particular use in [dynamic conditions](ABENWHERE_LOGEXP_DYNAMIC.html).
-   The expression `IS [NOT] INITIAL` must not be confused with the expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html).
-   If used, the relational expression `IS [NOT] INITIAL` enforces [strict mode from ABAP release 7.72](ABENABAP_SQL_STRICTMODE_772.html).

DATA column TYPE string VALUE \`INT8\`. \\ncl\_demo\_input=>request( CHANGING field = column ). \\ncolumn = to\_upper( column ). \\n\\ \\nFINAL(components) = CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_name( 'DEMO\_DDIC\_TYPES' ) \\n )->components. \\n\\ \\nIF NOT line\_exists( components\[ name = column \] ). \\n cl\_demo\_output=>display( \`Invalid request\` ). \\n RETURN. \\nENDIF. \\n\\ \\nFINAL(cond) = column && \` IS INITIAL\`. \\n\\ \\nTRY. \\n SELECT \* \\n FROM demo\_ddic\_types \\n WHERE (cond) \\n INTO TABLE @FINAL(result). \\n CATCH cx\_sy\_dynamic\_osql\_semantics INTO FINAL(xref). \\n cl\_demo\_output=>display( xref->get\_text( ) ). \\nENDTRY. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html