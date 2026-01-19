---
title: "ABENTABLE_EXP_RESULT"
description: |
  ABENTABLE_EXP_RESULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_EXP_RESULT.htm"
abapFile: "ABENTABLE_EXP_RESULT.html"
keywords: ["select", "delete", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENTABLE", "EXP", "RESULT"]
---

``... \{             itab[ [`itab_line`](ABENTABLE_EXP_ITAB_LINE.html) ][`[...]`](ABENTABLE_EXP_CHAINING.html)\ \}``\\ 
  ``|\ \{ VALUE type( itab[ [`itab_line`](ABENTABLE_EXP_ITAB_LINE.html) ][`[...]`](ABENTABLE_EXP_CHAINING.html)\ [[`default`](ABENTABLE_EXP_OPTIONAL_DEFAULT.html)] ) \}``\\ 
  ``|\ \{ REF   type( itab[ [`itab_line`](ABENTABLE_EXP_ITAB_LINE.html) ][`[...]`](ABENTABLE_EXP_CHAINING.html)\ [[`default`](ABENTABLE_EXP_OPTIONAL_DEFAULT.html)]  ) \} ...``

[1. `... itab[ ... ][...]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... VALUE type( itab[ ... ][...]\ [default] )`](#ABAP_ALTERNATIVE_2@2@)

[3. `... REF type( itab[ ... ][...]\ [default] )`](#ABAP_ALTERNATIVE_3@2@)

If a [table expression](ABENTABLE_EXPRESSIONS.html) is specified in a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html) or in a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html), the read line can be passed to this position in three different ways:

The result of a table expression is only available temporarily. It is used as an operand of a statement and then deleted again. It is deleted when the current statement is closed or after the evaluation of a relational expression once the truth value is determined.

The ways of how a table expression is specified shown here determine how the table line is returned. A default value [`default`](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) can be specified for the result in two alternatives.

Both alternatives can be specified in all read positions for table expressions in which the line type matches the operand type (see also [Chainings](ABENTABLE_EXP_CHAINING.html)). The result is either a temporary field symbol, a temporary work area, or the value is assigned directly to a target variable. If the value operator `VALUE` is used, an optional default value [`default`](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) can be specified for cases where no table line is found.

In most cases, it is transparent and irrelevant, whether the result exists as a field symbol or as a work area. In some cases, however, performance reasons or to avoid side effects, it may be beneficial if the standard behavior is suspended and data is written explicitly to a temporary work area instead.

The following program excerpt shows table expression with field symbols and work areas as a result.

[Table Expressions, Side Effects](ABENTABLE_EXP_SIDE_EFFECT_ABEXA.html)

This alternative can be specified in all read positions for table expressions in which a data reference variable with a suitable type is expected. If a table expression is used as an operand of a constructor expression with the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html), the result is a temporary data reference variable that points to the found table line. If no table line is found, an optional default value [`default`](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) can be specified.

The [static type](ABENSTATIC_TYPE_GLOSRY.html) of the reference variable is determined by specifying [`type`](ABENCONSTRUCTOR_EXPRESSION_REF.html) for the constructor expression:

If the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) is specified in front of a [chaining](ABENTABLE_EXP_CHAINING.html) whose result is a component of a structured table line, it creates a reference to this component. In this case, no substring accesses [`+off(len)`](ABENOFFSET_LENGTH.html) can be specified after the component.

The following program corresponds to the example for [`READ TABLE REFERENCE INTO`](ABAPREAD_TABLE_OUTDESC.html), but the statement `READ` has been replaced by a table expression in the constructor expression `REF`.

-   As a [field symbol](ABENFIELD_SYMBOL_GLOSRY.html) to which the table line is assigned.
-   As a [work area](ABENWORK_AREA_GLOSRY.html) that contains the content of the table line.
-   As a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) that points to the table line.

-   If the table expression is not specified as an operand of the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) or of the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html), the result is usually a temporary field symbol typed with the line type of the internal table and to which the table line found is assigned. For performance reasons, there are exceptions to this rule in the following cases:

-   If the table expression is specified as the right side of an [assignment](ABENEQUALS_OPERATOR.html), the content of the table line or a [component](ABENTABLE_EXP_CHAINING.html) is assigned directly to the target variable instead of a temporary result being produced.
-   If the line type of the internal table is flat and narrow and used directly in the operand position, for example as an operand of an arithmetic expression or as a formal parameter for an actual parameter where pass by value is declared, the result is a temporary work area.

-   If the table expression is specified as an operand of the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html), the result is always a temporary work area, unless the expression is specified as the right side of an [assignment](ABENEQUALS_OPERATOR.html). The data type of the work area is determined by specifying [`type`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) for the constructor expression:

-   If the `#` character is specified for `type` and the data type required in an operand position is known uniquely and completely, the operand type is used. Otherwise the line type of the internal table or of a [chaining](ABENTABLE_EXP_CHAINING.html) specified here is applied.
-   If a non-generic data type `dtype` is specified for `type`, the line type of the internal table must be compatible with this data type or be convertible to this data type. In this case, the temporary work area has the data type `dtype` and the data of the line found is converted to this data type, if necessary, in accordance with the [conversion rules](ABENCONVERSION_RULE_GLOSRY.html).

-   If the expression is specified as the right side of an [assignment](ABENEQUALS_OPERATOR.html), the content of the table line or [component](ABENTABLE_EXP_CHAINING.html) is also assigned directly when using `VALUE`.

-   For notes about performance, see the programming guideline [Output Behavior](ABENTABLE_OUTPUT_GUIDL.html). This guideline should also be respected when using table expressions. In the [extended program checks](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html), a syntax check warning, that can be hidden by a pragma occurs if the rule appears to be violated.
-   Side effects can occur if the line of the internal table to which the temporary field symbol points is modified while the binding to the field symbol persists.

-   A table expression whose result is a temporary field symbol can be viewed as a short form of the statement [`READ TABLE`](ABAPREAD_TABLE.html) with the addition [`ASSIGNING`](ABAPREAD_TABLE_OUTDESC.html) and a table expression whose result is a temporary work area can be viewed as a short form of this statement with the addition [`INTO`](ABAPREAD_TABLE_OUTDESC.html). The corresponding rules and notes apply.
-   More specifically, [restrictions](ABAPREAD_TABLE_OUTDESC.html) regarding the modification of key fields must be respected in write positions in the case of table expressions whose result is a temporary field symbol.
-   In variant 1, the compilation decides whether the result is a field symbol or a work area, not the table content at runtime.
-   [Chainings](ABENTABLE_EXP_CHAINING.html) of table expressions can also be specified as an operand of the value operator `VALUE`. This operand then controls the final result of the chaining.
-   Unlike when using the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) for constructing values, elementary types or reference types can also be specified for table expressions for `type`.

-   Temporary work areas are passed in the assignments to `number` and `text`. The `VALUE` operator of the second assignment expresses this explicitly, but is not necessary.
-   In the passes to the formal parameter of the method `meth`, the results are temporary field symbols by default. In two cases, the `VALUE` operator forces a work area explicitly. In the extended program checks, all passes produces syntax check warnings that can be hidden here using the pragma `##operator`.

-   In the pass to the formal parameter `p1`, using a field symbol by default is bad for performance, since the line is a flat narrow table line. The `VALUE` operator is recommended instead.
-   In the pass to the formal parameter `p2`, specifying a work area explicitly is bad for performance, since the line is a deep table line. The `VALUE` operator is not recommended here.
-   In the pass to the formal parameter `p3`, specifying a work area explicitly is bad for performance, since the line is a deep table line. The `VALUE` operator is not recommended here.

-   When specifying the internal table using a generically typed field symbol `itab`, using the temporary field symbol by default does not produce a syntax check warning, since no fixed work area can be derived here.

-   If the `#` character is specified for `type`, the line type of the internal table is used as the static type.
-   If a non-generic data type `dtype` or the generic data type [`data`](ABENBUILT_IN_TYPES_GENERIC.html) is specified for `type`, they determine the static type of the result. A non-generic data type, `dtype`, must be compatible with the line type of the internal table.

-   A table expression whose result is a temporary data reference variable can be viewed as a short form of the statement [`READ TABLE`](ABAPREAD_TABLE.html) with the addition [`REFERENCE INTO`](ABAPREAD_TABLE_OUTDESC.html). The corresponding rules and notes apply.
-   More specifically, in the case of a table expression whose result is a temporary data reference variable, the [restrictions](ABAPREAD_TABLE_OUTDESC.html) on the modification of key fields are respected when dereferencing write positions.
-   The static type of the temporary data reference variable can only be the line type of the internal table or be completely generic.
-   [Chainings](ABENTABLE_EXP_CHAINING.html) of table expressions can also be specified as an operand of the reference operator `REF`, which then controls the final result of the chaining.

CLASS class DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth IMPORTING p1 TYPE i OPTIONAL \\n p2 TYPE string OPTIONAL \\n p3 TYPE c OPTIONAL. \\nENDCLASS. \\n\\ \\nCLASS class IMPLEMENTATION. \\n METHOD meth. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n TYPES text TYPE c LENGTH 1000. \\n DATA itab TYPE TABLE OF i. \\n DATA jtab TYPE TABLE OF string. \\n DATA ktab TYPE TABLE OF text. \\n\\ \\n FIELD-SYMBOLS TYPE INDEX TABLE. \\n\\ \\n itab = VALUE #( ( 1 ) ). \\n jtab = VALUE #( ( CONV string( abcde ) ) ). \\n ktab = VALUE #( ( abcde ) ). \\n\\ \\n FINAL(number) = itab\[ 1 \]. \\n FINAL(text) = VALUE #( jtab\[ 1 \] ). \\n\\ \\n class=>meth( p1 = itab\[ 1 \] ) ##operator. \\n class=>meth( p2 = VALUE #( jtab\[ 1 \] ) ) ##operator. \\n class=>meth( p3 = VALUE #( ktab\[ 1 \] ) ) ##operator. \\n\\ \\n ASSIGN itab TO . \\n class=>meth( p1 = \[ 1 \] ). \\n ENDMETHOD. \\nENDCLASS. DATA: carrid TYPE sflight-carrid, \\n connid TYPE sflight-connid, \\n fldate TYPE sflight-fldate. \\n\\ \\n... \\n\\ \\nDATA sflight\_tab TYPE SORTED TABLE OF sflight \\n WITH UNIQUE KEY carrid connid fldate. \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = @carrid AND \\n connid = @connid \\n INTO TABLE @sflight\_tab. \\n\\ \\nIF sy-subrc = 0. \\n TRY. \\n FINAL(sflight\_ref) = \\n REF #( sflight\_tab\[ KEY primary\_key \\n COMPONENTS carrid = carrid \\n connid = connid \\n fldate = fldate \] ). \\n sflight\_ref->price \*= '0.9'. \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n ... \\n ENDTRY. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html