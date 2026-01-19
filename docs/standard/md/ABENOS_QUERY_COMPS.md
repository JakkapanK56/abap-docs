---
title: "ABENOS_QUERY_COMPS"
description: |
  ABENOS_QUERY_COMPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_QUERY_COMPS.htm"
abapFile: "ABENOS_QUERY_COMPS.html"
keywords: ["do", "if", "method", "class", "ABENOS", "QUERY", "COMPS"]
---

A query is represented by a query object, which is managed by a query manager (also an object). The query manager represents the query service with respect to the ABAP program.

To create a query manager, the static method `GET_QUERY_MANAGER` of the general system service class `CL_OS_SYSTEM` is required.

An ABAP program does not work with the query manager and queries using class reference variables. Instead, it uses the interfaces `IF_OS_QUERY_MANAGER`, `IF_OS_QUERY`, and `IF_OS_QUERY_EXPR_FACTORY` to access them.

A query is not executed directly, but using the method `GET_PERSISTENT_BY_QUERY` of the interface `IF_OS_CA_PERSISTENCY` of a class agent. This searches for persistent objects of the associated persistent class that match the [query condition](ABENOS_QUERY_FILTER_COND.html).

The options for executing a query are controlled using the interface `IF_OS_QUERY_OPTIONS`. To do this, a structure of the type `IF_OS_QUERY_OPTIONS=>OPTIONS` can be passed to the method `GET_PERSISTENT_BY_QUERY`.

Most of the components of the system service class `CL_OS_SYSTEM` are used internally by the Object Services. A method must be used in an application program to be able to work explicitly with object-oriented queries.

The query manager manages the object-oriented queries of the ABAP program and is executed from interface `IF_OS_QUERY_MANAGER`.

Queries are executed from interfaces `IF_OS_QUERY` and `IF_OS_QUERY_EXPR_FACTORY`.

-   `GET_QUERY_MANAGER`
-   This static method returns the return value `RESULT` of type `IF_OS_QUERY_MANAGER` containing a reference to the Query Manager. The query manager is created when the Object Services are initialized.

-   `IF_OS_QUERY_MANAGER~CREATE_QUERY`
-   Creates a query and returns a reference to the query object in the return value `RESULT` of type `IF_OS_QUERY`. The [query condition](ABENOS_QUERY_FILTER_COND.html) is passed to the parameter `I_FILTER` of type `string`. The [sort condition](ABENOS_QUERY_SORT_COND.html) is passed to the parameter `I_ORDERING` of type `string`. If the parameters of the query are specified using a parameter list, they must be passed to the parameter `I_PARAMETERS` of type `string`.

-   `IF_OS_QUERY~GET_EXPR_FACTORY`
-   Returns a reference to a query expression factory in the return parameter `RESULT` of type `IF_OS_QUERY_EXPR_FACTORY`. Technically speaking, a query expression factory is part of a query object, although it is executed using the interface `IF_OS_QUERY_EXPR_FACTORY`, like a separate object.
-   `IF_OS_QUERY~SET_FILTER_EXPR`
-   Sets the [query condition](ABENOS_QUERY_FILTER_COND.html). The internal representation of the query condition that is created with a query expression factory is passed to the parameter `I_FILTER_EXPR` of type `IF_OS_QUERY_FILTER_EXPR`.
-   `IF_OS_QUERY~SET_PARAMETERS_EXPR`
-   Sets the parameter list of the [query condition](ABENOS_QUERY_FILTER_COND.html). The internal representation of the parameter list that is created with a query expression factory is passed to the parameter `I_PARAMETERS_EXPR` of type `IF_OS_QUERY_PARAMETERS_EXPR`.
-   `IF_OS_QUERY~SET_ORDERING_EXPR`
-   Sets the [sort condition](ABENOS_QUERY_SORT_COND.html). The internal representation of a sort condition created with the query expression factory is passed to the parameter `I_ORDERING_EXPR` of type `IF_OS_QUERY_ORDERING_EXPR`.
-   `IF_OS_QUERY~PARSE`
-   Creates the internal representation of the query condition, the parameter list, and the sort condition if these have not yet been created or set.

-   `IF_OS_QUERY_EXPR_FACTORY~CREATE_OPERATOR_EXPR`
-   Creates either a [query condition](ABENOS_QUERY_FILTER_COND.html) of the form
    `attr1 operator attr2`,
    where `attr1`, `operator`, and `attr2` are the values of the parameters `I_ATTR`, `I_OPERATOR`, and `I_ATTR2` or a query condition of the form
    `attr1 operator 'val'` or
    `attr1 operator val_w_quotes`\\
    where `val` and `val_w_quotes` are the values of the parameters `I_VAL` and `I_VAL_W_QUOTES`.
-   If the parameter `I_IDX` of type `i` is passed, `val` is the value of the parameter from the parameter list, for which the index when the query is executed is determined by the value of the parameter `I_IDX`.
-   The query condition that is created is returned in the return value `RESULT` of type `IF_OS_QUERY_FILTER_EXPR`.
-   `IF_OS_QUERY_EXPR_FACTORY~CREATE_LIKE_EXPR`
-   Depending on the value of the parameter `I_NOT`, creates a [query condition](ABENOS_QUERY_FILTER_COND.html) of the form
    `attr [NOT] LIKE 'pattern'` or
    `attr [NOT] LIKE pattern_w_quotes`,
    where `attr`, `pattern`, and `pattern_w_quotes` are the values of the parameters `I_ATTR`, `I_PATTERN` and `I_PATTERN_W_QUOTES`.
-   If the parameter `I_IDX` of type `i` is passed, `pattern` is the value of the parameter from the parameter list, for which the index when the query is executed is determined by the value of the parameter `I_IDX`.
-   Passing one of the parameters `I_ESCAPE` or `I_ESCAPE_W_QUOTES` appends the definition of an escape character of the form `... ESCAPE 'escape' or ... ESCAPE escape_w_quotes` where `escape` and `escape_w_quotes` are the values of the parameters `I_ESCAPE` and `I_ESCAPE_W_QUOTES`.
-   The query condition that is created is returned in the return value `RESULT` of type `IF_OS_QUERY_FILTER_EXPR`.
-   `IF_OS_QUERY_EXPR_FACTORY~CREATE_ISNULL_EXPR`
-   Depending on the value of the parameter `I_NOT`, creates a [query condition](ABENOS_QUERY_FILTER_COND.html) of the form
    `attr IS [NOT] NULL`,
    where `attr` is the value of the parameter `I_ATTR`.
-   The query condition that is created is returned in the return value `RESULT` of type `IF_OS_QUERY_FILTER_EXPR`.
-   `IF_OS_QUERY_EXPR_FACTORY~CREATE_REF_EXPR`
-   Creates a [query condition](ABENOS_QUERY_FILTER_COND.html) of the form
    `attr EQUALSREF ref`,
    where `attr` is the value of the parameter `I_ATTR` and `ref` is the value of the parameter from the parameter list whose index when the query is executed is determined by the value of the parameter `I_IDX`.
-   Instead of using a parameter to set the persistent object reference, the instance GUID and class GUID can be specified using the parameters `I_GUID` and `I_CLSGUID` of type `OS_GUID`.
-   The query condition that is created is returned in the return value `RESULT` of type `IF_OS_QUERY_FILTER_EXPR`.
-   `IF_OS_QUERY_EXPR_FACTORY~CREATE_NOT_EXPR`
-   Creates a [query condition](ABENOS_QUERY_FILTER_COND.html) of the form
    `NOT ( expr ),`\\
    where `expr` is a query condition that already exists and was passed to the parameter `I_EXPR`.
-   The new query condition is returned in the return value `RESULT`.
-   `IF_OS_QUERY_EXPR_FACTORY~CREATE_AND_EXPR`
-   Creates a [query condition](ABENOS_QUERY_FILTER_COND.html) of the form
    `( expr1 ) AND ( expr2 )`\\
    where `expr1` or `expr2` are query conditions that already exist and were passed to the parameters `I_EXPR1` or `I_EXPR2`.
-   The new query condition is returned in the return value `RESULT`.
-   `IF_OS_QUERY_EXPR_FACTORY~CREATE_OR_EXPR`
-   Creates a [query condition](ABENOS_QUERY_FILTER_COND.html) of the form
    `( expr1 ) OR ( expr2 )`\\
    where `expr1` or `expr2` are query conditions that already exist and were passed to the parameters `I_EXPR1` or `I_EXPR2`.
-   The new query condition is returned in the return value `RESULT`.
-   `IF_OS_QUERY_EXPR_FACTORY~CREATE_PARAMETERS_EXPR`
-   Creates a parameter list. The parameter list that is created is returned in return value `RESULT` of type `IF_OS_QUERY_PARAMETERS_EXPR`.
-   The parameters are appended consecutively when the method `APPEND` of an additional interface `IF_OS_QUERY_PARAMETERS_EXPR` is called. The parameter name is passed to the parameter `I_PAR`.
-   `IF_OS_QUERY_EXPR_FACTORY~CREATE_ORDERING_EXPR`
-   Creates a [sort condition](ABENOS_QUERY_SORT_COND.html). The sort condition is returned in the return value `RESULT` of type `IF_OS_QUERY_ORDERING_EXPR`.
-   The attributes used for the sort are appended consecutively when the method `APPEND_ASCENDING` or `APPEND_DESCENDING` of the additional interface `IF_OS_QUERY_ORDERING_EXPR` is called. The parameter name is passed to the parameter `I_ATTR`.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_query.html