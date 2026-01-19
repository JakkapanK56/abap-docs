---
title: "ABENOS_QUERY_FILTER_COND"
description: |
  ABENOS_QUERY_FILTER_COND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_QUERY_FILTER_COND.htm"
abapFile: "ABENOS_QUERY_FILTER_COND.html"
keywords: ["select", "do", "if", "case", "method", "class", "ABENOS", "QUERY", "FILTER", "COND"]
---

A query condition is a logical expression that compares the attributes of a persistent class with free parameters or values. The syntax of a query condition is based on the syntax of the ABAP SQL `WHERE` condition, where reference variables for object references are also supported. Like a `WHERE` condition, a query condition is made up of elementary comparisons that can be combined using the Boolean operators `AND`, `OR`, and `NOT`, where grouping using parentheses is supported.

When a query is executed using a class agent, the query is bound exactly to its persistent class. The attributes specified in a query condition must exist in the persistent class as public persistent attributes. If not, an exception is raised. On the other hand, a query that has been created can certainly be executed consecutively by class agents of different persistent classes, as long as the specified attributes exist. When a query is executed, a `SELECT` statement is created internally with a `WHERE` condition, in which the attributes are replaced by concrete column identifiers and the free parameters are replaced by current values.

The elementary comparison operators below are supported in a query condition. An attribute, `attr`, of a persistent class must be specified as the first operand of a condition. The second operand `operand` or `pattern` of a comparison may be an attribute, a parameter `par`, or a literal value.

The names of parameters can be defined freely by specifying a parameter list. The parameter list is a list of parameter names that can be used in the query condition. The position of the parameter in the parameter list defines the index of the parameter in the parameter table. If no parameter list is specified, a predefined parameter list with the three parameter names `PAR1`, `PAR2`, and `PAR3` is used.

Literal values are generally enclosed by quotation marks. The semantics of the comparison operators are defined by the corresponding ABAP SQL language element into which the logical expression is converted.

The query condition and its parameter list are analyzed when a query is executed and transformed into an internal representation. To bypass parsing each time the query is executed, the methods of the interface `IF_OS_QUERY_EXPR_FACTORY` can be used to create reusable query conditions in the internal representation.

`attr =|<>|<|>|<=|>= \{ operand \}`

`attr [NOT] LIKE \{ pattern \}\ [ESCAPE escape]`

`attr IS [NOT] NULL`

`attr EQUALSREF par`

Comparison of two object references. When the query is executed, the parameter `par` must be bound to a reference variable that refers to a persistent instance of a persistent class.

`NOT expr`

`expr AND expr`

`expr OR expr`

The semantics of the Boolean operators `AND`, `OR`, and `NOT` are also defined by their semantics in ABAP SQL. Explicit parentheses are possible. If no parentheses are specified, the ABAP SQL priority rules apply.

Example for `AND`:

Example for `AND`:

Example for all cases:

-   The layout of a query condition in a program is one of the dynamic programming techniques. If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).
-   To avoid [SQL injections](ABENSQL_INJECTION_GLOSRY.html), the use of parameters from the parameter list of a concatenation is recommended, where dynamic values are represented as literals.
-   See also [SQL Injections Using Object Services](ABENSQL_INJ_OS_QUERY_SCRTY.html).

price < '100' AND currency = 'EUR' name LIKE PAR1 AND age > '45' AND age < '65' ( department EQUALSREF DEP1 OR department EQUALSREF DEP2 ) AND NOT \\n( salary > '50000' AND currency = 'EUR' ) ) abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_query.html