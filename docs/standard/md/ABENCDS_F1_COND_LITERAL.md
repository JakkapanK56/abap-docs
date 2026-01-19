---
title: "The access condition"
description: |
  toSetVal.F1 = 'A' and toSetVal.F2 = 'D' intuitively would be considered to be true, because for each constituent, the condition is true. However, at runtime, the association `toSetVal` will be realized by the database interface as a single join operation (exceptions apply when path filters are used
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_COND_LITERAL.htm"
abapFile: "ABENCDS_F1_COND_LITERAL.html"
keywords: ["select", "do", "if", "class", "data", "types", "ABENCDS", "COND", "LITERAL"]
---

``... [ALL|EXISTS]\ \{\      \{ element [BYPASS WHEN bypass_condition]\ [`operator`](ABENCDS_F1_DCL_COND_EXPRESSION.html)\ \{\ [']value[']\ | session_variable | enumeration_constant \}\ \}\    |\ \{ element [BYPASS WHEN bypass_condition]\ [NOT] BETWEEN \{\ [']value1[']\ | enumeration_constant \} AND \{\ [']value2[']\ |  enumeration constant \}\ \}\    |\ \{ element [BYPASS WHEN bypass_condition]\ [NOT] LIKE 'value' [ESCAPE 'esc']\ \}\    |\ \{ element [BYPASS WHEN bypass_condition] IS [NOT] NULL \}\    |\ \{ element [BYPASS WHEN bypass_condition] IS [NOT] INITIAL \}\ \} ...``

[1. `... ALL`](#ABAP_ADDITION_1@3@)

[2. `... EXISTS`](#ABAP_ADDITION_2@3@)

[3. `... BYPASS WHEN ...`](#ABAP_ADDITION_3@3@)

Literal condition as part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html) in an [access rule](ABENCDS_DCL_ROLE_RULES.html) of the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in [CDS DCL](ABENCDS_DCL_GLOSRY.html). A literal condition can be one of the following relational expressions for an element `element` of the CDS entity for which the access condition is defined.

The element `element` can be specified directly or by using a path expression [`path_expr`](ABENSQL_PATH_EXPRESSION_GLOSRY.html) and must have one of the valid [data types](ABENCDS_F1_DCL_COND_DATA_TYPES.html). A numeric literal value can be specified in quotation marks but this is not mandatory. A character-like literal value must be specified in quotation marks. In a set-valued path expression, it is sufficient for the condition to be true for just one of the values.

When a literal condition is evaluated by CDS access control, only those rows are selected in which the content of the [CDS element](ABENCDS_ELEMENT_GLOSRY.html)\\ `element` meets the condition.

When `element` contains at least one set-valued association, the basic form of the condition will allow access when it is fulfilled for any of the resulting values.

For example, when the values are *A*, *B* and *C*, the condition `element = 'B'` will give access.

When access is only granted when the condition is fulfilled for all values, this can be specified by the `ALL` quantifier.

In the example above, `ALL element = 'B'` will not give access due to the existence of *A* and *C*.

However, `ALL element < 'D'` will give access.

The basic form of the statement already implements `EXISTS` like semantics, however, it provides a coupling of multiple set-valued elements in the same entity row.

For example, we consider an association `toSetVal` stemming from an entity row and with the following value in two of its columns:

The access condition

toSetVal.F1 = 'A' and toSetVal.F2 = 'D'

intuitively would be considered to be true, because for each constituent, the condition is true.

However, at runtime, the association `toSetVal` will be realized by the database interface as a single join operation (exceptions apply when path filters are used or in [CDS DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html) using annotation `compareFilter`), so there is a coupling between `F1` and `F2`.

Due to this coupling, the condition will not be fulfilled.

This situation can be resolved by introduction of the explicit `EXISTS` quantifier, which breaks-up this coupling and lets the condition be evaluated for each `EXISTS` condition individually:

EXISTS toSetVal.F1 = 'A' and EXISTS toSetVal.F2 = 'D'

The addition `BYPASS WHEN bypass_condition` can be used to specify that the element is not used for authorization filtering if it meets the specified condition.

The following are possible for `bypass_condition`:

This addition is useful when using quantifier `ALL` to express that some of the association values may have this value and still satisfy the condition.

For example, when these are the values of a set-valued association

This condition

ALL toSetVal.F = 'A'

will not return the entity row, but this condition will:

ALL toSetVal.F BYPASS WHEN IS NULL = 'A'

The following CDS role defines an access condition for the CDS view entity `demo_cds_authority_literal_2`. A single literal condition is specified for the element `carrid` in the CDS view.

CDS or DDIC source code was not found

The CDS view entity is as follows:

The class `CL_DEMO_CDS_AUTH_LITERAL` uses [`SELECT`](ABAPSELECT.html) to access the view. CDS access control selects only that data that matches the literal condition. This means that a maximum of one row is selected regardless of any other conditions in the view.

-   Comparison with a literal value `value` using a logical operator [`operator`](ABENCDS_F1_DCL_COND_EXPRESSION.html).
-   Comparison with the runtime value of a session variable `session_variable`
-   The following session variables are supported:

-   `$session.user`
-   `$session.user_date`
-   `$session.user_timezone`
-   `$session.system_date`
-   `$session.system_language`

-   The syntax check will issue an error message when `element` is not compatible with all possible runtime values of the session variable.
-   When `element` has a CDS enumerated type, an explicit enumeration constant `enumeration_constant` must be used instead of a literal value. Operators that make use of an element order determine their result based on the constant value in the base type.
-   Check using `[NOT] BETWEEN` to verify whether the value on the left side is (or is not) within the interval limits specified by two literal values `value1` and `value2`. When `element` has a CDS enumerated type, both boundaries must be specified as enumeration constant `enumeration_constant` and the inclusion of `element` into the boundaries is determined by the order of the values in the base type.
-   Check using `[NOT] LIKE` to verify whether a string on the left side matches (or does not match) the pattern on the right side. The percent sign (`%`) can be used as a placeholder for any string and the underscore character (`_`) for any single character. The addition `ESCAPE` can be used to define a single character escape character `'esc'` in quotation marks for the placeholders.
-   Check using `IS [NOT] NULL` to verify whether the left side is (or is not) the [null value](ABENNULL_VALUE_GLOSRY.html).
-   `IS [NOT] INITIAL`, check to verify whether the value of the left side matches (does not match) the initial value of the ABAP data type of the element.
-   When `element` is declared as optional and does not exist at runtime, the effect of the condition matches the `DEFAULT` value of the element (logical true or false). To avoid that a safe default of `FALSE` is flipped to `TRUE` accidentally, the use of an element marked as optional inside of a `NOT` operator leads to an error.

-   Within the definition of an access rule, literal conditions can be used together with [PFCG conditions](ABENCDS_F1_COND_PFCG.html), [user conditions](ABENCDS_F1_COND_USER.html), [inheritance conditions](ABENCDS_F1_COND_INHERIT.html), or as individual conditions.
-   The character `#` is recommended as the escape character `esc` for the operator `LIKE`.
-   For `element`, some variants of this condition type support the function `CONTEXT_NODE_VALUES`. This function is reserved for use by SAP.

-   The `ALL` quantifier results in an additional `EXISTS` statement on the database, formulated on the protected entity. It cannot be guaranteed that the database optimizer recognizes this constellation properly as self-join. The performance of the database selection can therefore be impacted.
-   The quantifier `ALL` can be applied to a condition regardless of whether element contains a set-valued association at all. However, it will then not have an effect but lead to the potential performance degradation when applied unnecessarily.
-   An association with an empty result set is handled in the same way as a single result with a null value.

-   `IS NULL`
-   `IS INITIAL`
-   `IS INITIAL OR NULL`

@AccessControl.authorizationCheck: #CHECK\\ndefine view entity demo\_cds\_authority\_literal\_2\\n as select from\\n scarr\\n \\{\\n key carrid,\\n carrname,\\n currcode,\\n url\\n \\}\\n `**toSetVal Row Number**` `**toSetVal.F1**` `**toSetVal.F2**`\\ `1` *A* `B`\\ `2` `C` `D` `**toSetVal Row Number**` `**F**`\\ `1` *A*\\ `2` `<NULL>`\\ `3` *A* abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html