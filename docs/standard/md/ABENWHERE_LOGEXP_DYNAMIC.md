---
title: "ABENWHERE_LOGEXP_DYNAMIC"
description: |
  ABENWHERE_LOGEXP_DYNAMIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWHERE_LOGEXP_DYNAMIC.htm"
abapFile: "ABENWHERE_LOGEXP_DYNAMIC.html"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "ABENWHERE", "LOGEXP", "DYNAMIC"]
---

[Short Reference](ABENSQL_COND_SHORTREF.html)

`... (cond_syntax) ...`

A relational expression can be specified dynamically as a parenthesized data object `cond_syntax` that contains the syntax of a logical expression [`sql_cond`](ABENASQL_COND.html) valid here or is initial when the statement is executed. The result of the relational expression `(cond_syntax)` is determined by the result of the contained logical expression. If `cond_syntax` is initial when the statement is executed, the relational expression is true.

The data object `cond_syntax` can be a character-like data object or a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a character-like line type. The syntax in `cond_syntax` is not case-sensitive as in the static syntax. When specifying an internal table, the syntax can be distributed across multiple rows. Invalid syntax raises a catchable exception from the class `CX_SY_DYNAMIC_OSQL_ERROR`.

The logical expression in `cond_syntax` can be joined using `AND` or `OR` or negated using `NOT` and a dynamic logical expression `(cond_syntax)` can be specified as a single relational expression of a composite logical expression. [Host expressions](ABENHOST_EXPRESSION_GLOSRY.html) are not allowed in dynamic logical expressions.

If a dynamic SQL condition `(cond_syntax)` is used for a read, the content of `cond_syntax` is evaluated once for each [query](ABENASQL_QUERY_GLOSRY.html). Any changes made to the content of `cond_syntax` in a `SELECT` loop or `WITH` loop are ignored by the relational expression.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

Creation of a dynamic comparison from user input. In the case of incorrect syntax or incorrect semantics, exceptions are raised that are handled using the common superclass. Any [SQL injections](ABENSQL_INJECTION_GLOSRY.html) are prevented by checks on the specified column name. If this were not the case, a user could, for example, enter *CARRID <> value OR CARRID* in the field `column`, producing a condition *CARRID <> value OR CARRID = value*, which would be true regardless of the entry made in the field `value`.

The following creation of a dynamic `WHERE` condition by concatenating the values of user input as shown below is even more risky than the previous example. Any [SQL injections](ABENSQL_INJECTION_GLOSRY.html) must be prevented by transforming quotation marks in the entry `value`. A user can, for example, enter *CARRID* in `column` and *LH' OR CARRID <> 'LH* in `value`, which would produce the always true condition *CARRID = 'LH' OR CARRID <> 'LH'* if the quotation marks were not transformed. After the conversion using the method `QUOTE` of the class `CL_ABAP_DYN_PRG`, which also adds quotation marks at the beginning and end, the condition *CARRID = 'LH'' OR CARRID <> ''LH'* is created. The handling of consecutive quotation marks in [text field literals](ABENUNTYPED_CHARACTER_LITERALS.html) results in the column `CARRID` being compared exactly with the entered value, making the result of the condition always false.

-   It is also possible to evaluate an internal table specified after the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) of a [main query](ABENMAINQUERY_GLOSRY.html) in a dynamic relational expression.
-   It is possible to check a [ranges table](ABENRANGES_TABLE_GLOSRY.html) in a dynamic relational expression.
-   If `cond_syntax` is an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), the [table body](ABENTABLE_BODY_GLOSRY.html) is evaluated, and not the header line.
-   Dynamic relational expressions can also be created interactively using [dynamic selections](ABENFREE_SELECTIONS.html).
-   When a condition is specified dynamically, the syntax check can take place only at runtime. Therefore, specifying a relational expression at runtime requires more execution time than a corresponding specification specified in the program text.
-   The data objects specified in a dynamic condition should be declared in the same context, if possible, since searches in higher contexts at runtime are more time-consuming.
-   The class `CL_ABAP_DYN_PRG` contains methods that support the creation of correct and secure dynamic SQL conditions.
-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.
-   When specified dynamically, ABAP SQL statements can contain the comment characters [`*`](ABENCOMMENT.html) and [`"`](ABENCOMMENT.html) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character `"`.
-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character `*`. In the row, all content is ignored from the first comment character `"`.

-   Comment characters placed within literals are, however, part of the literal.
-   In dynamic SQL conditions, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor was not yet executed.
-   When a [subquery](ABENSUBQUERY_GLOSRY.html) is specified dynamically, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.
-   If the conditions in `(cond_syntax)` are to be expressed statically, they should be embedded in [parentheses](ABENWHERE_LOGEXP_ANDORNOT.html) in order to preserve the priority of processing.
-   The dynamic forms of the statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) enable fully dynamic `SELECT` statements, where all clauses except the `INTO` clause and the ABAP-specific additions can be specified in one dynamic token.

DATA: column TYPE c LENGTH 30, \\n value TYPE c LENGTH 30. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = column \\n )->add\_field( CHANGING field = value )->request( ). \\n\\ \\nTRY. \\n cl\_abap\_dyn\_prg=>check\_column\_name( column ). \\n CATCH cx\_abap\_invalid\_name. \\n cl\_demo\_output=>display( 'Invalid column name' ). \\n RETURN. \\nENDTRY. \\n\\ \\nFINAL(cond\_syntax) = column && \` = @value\`. \\nTRY. \\n SELECT \* \\n FROM spfli \\n WHERE (cond\_syntax) \\n INTO TABLE @FINAL(spfli\_tab). \\n CATCH cx\_sy\_dynamic\_osql\_error cx\_sy\_open\_sql\_data\_error. \\n cl\_demo\_output=>display( \`Wrong WHERE condition!\` ). \\n RETURN. \\nENDTRY. \\n\\ \\ncl\_demo\_output=>display( spfli\_tab ). DATA: column TYPE c LENGTH 30, \\n value TYPE c LENGTH 30. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = column \\n )->add\_field( CHANGING field = value )->request( ). \\n\\ \\nTRY. \\n cl\_abap\_dyn\_prg=>check\_column\_name( column ). \\n CATCH cx\_abap\_invalid\_name. \\n cl\_demo\_output=>display( 'Invalid column name' ). \\n RETURN. \\nENDTRY. \\n\\ \\nFINAL(cond\_syntax) = column && \` = \` && cl\_abap\_dyn\_prg=>quote( value ). \\n\\ \\nTRY. \\n SELECT \* \\n FROM spfli \\n WHERE (cond\_syntax) \\n INTO TABLE @FINAL(spfli\_tab). \\n CATCH cx\_sy\_dynamic\_osql\_error cx\_sy\_open\_sql\_data\_error. \\n cl\_demo\_output=>display( \`Wrong WHERE condition!\` ). \\n RETURN. \\nENDTRY. \\n\\ \\ncl\_demo\_output=>display( spfli\_tab ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html