---
title: "ABENCDS_SELECT_LIST_ENTRY_V2"
description: |
  ABENCDS_SELECT_LIST_ENTRY_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SELECT_LIST_ENTRY_V2.htm"
abapFile: "ABENCDS_SELECT_LIST_ENTRY_V2.html"
keywords: ["select", "do", "if", "case", "try", "class", "data", "ABENCDS", "SELECT", "LIST", "ENTRY"]
---

``... \{\ [[`@element_annot1`](ABENCDS_ELEMENT_ANNOTATIONS_V2.html)]\        [[`@element_annot2`](ABENCDS_ELEMENT_ANNOTATIONS_V2.html)]\        ...          [KEY]   \{\ [`field`](ABENCDS_FIELD_V2.html)             [AS alias]\ \}\                |\ \{\ [`include aspect`](ABENCDS_INCLUDE_ASPECT.html)    [AS alias]\ \}\                |\ \{\ [`expose_assoc`](ABENCDS_SELECT_LIST_ASSOCIATION_V2.html)      [AS alias]\ \}\                |\ \{\ [`path_expr`](ABENCDS_PATH_EXPRESSION_V2.html).element [AS alias]\ \}\                |\ \{\ [`literal`](ABENCDS_LITERAL_V2.html)            AS alias  \}\                |\ \{\ [`parameter`](ABENCDS_PARAMETER_V2.html)          AS alias  \}\                |\ \{\ [`session_variable`](ABENCDS_SESSION_VARIABLE_V2.html)   AS alias  \}\                |\ \{\ [`aggr_expr`](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)          AS alias  \}\                |\ \{\ [`arith_expr`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)         AS alias  \}\                |\ \{\ [`builtin_func`](ABENCDS_BUILTIN_FUNCTIONS_V2.html)       AS alias  \}\                |\ \{\ [`SQL-based scalar function`](ABENCDS_SQL_SCALAR_FUNCTION.html)\                                       AS alias  \}\                |\ \{\ [`reuse_exp`](ABENCDS_REUSABLE_EXPRESSION_V2.html)          AS alias  \}\                |\ \{\ [`case_expr`](ABENCDS_CASE_EXPRESSION_V2.html)          AS alias  \}\                |\ \{\ [`cast_expr`](ABENCDS_CAST_EXPRESSION_V2.html)          AS alias  \}\                |\ \{\ [`EnumConstant`](ABENCDS_ENUM_FIELD_V2.html)       AS alias  \}\                    ...      \}``

[1. `... @element_annot ...`](#ABAP_ADDITION_1@3@)

[2. `... KEY`](#ABAP_ADDITION_2@3@)

[3. `... AS alias`](#ABAP_ADDITION_3@3@)

Specifies individual elements in the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The names of the elements in a `SELECT` list must be unique and they are in the same namespace as the [parameters](ABENCDS_PARAMETER_LIST_V2.html) of the view.

Elements with the type `CHAR` can have a maximum of 1333 characters. Elements with the type `LRAW` or `LCHR` must be at the end of the view. Only one such element is allowed per view. Furthermore, a field of type `INT2` or `INT4` must stand directly in front of such an element, representing the maximum length of the element.

`SELECT` list with all possible elements.

Specifies annotations for the element. The annotations must be specified before the element using `@element_annot`. All possible element annotations are listed in topic [element annotations](ABENCDS_ELEMENT_ANNOTATIONS_V2.html).

`KEY` is used to define the current element as a key element of the current [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). All key elements must be placed without gaps at the start of the `SELECT` list. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [`SELECT`](ABAPSELECT.html) statement in ABAP SQL:

Apart from that, the key elements of the CDS entity are mainly used to document the semantics of the data model. The addition `KEY` does not have any effect when the CDS view entity is activated and when other accesses are performed during program executions.

A CDS view entity without any to-child or to-parent association can be defined without any key fields.

If the CDS view entity defines any to-child or to-parent association, then it must contain at least one key field at the start of the `SELECT` list.

**Caution** The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

The following CDS view entity defines two elements as key elements:

Since those are not the same as the key fields of the underlying database table `SPFLI`, the result set of the view can contain duplicate entries in respect to the key elements. Class `CL_DEMO_CDS_ENTITY_KEY` shows the result of an ABAP SQL access to the view. The key elements are evaluated by the addition `ORDER BY PRIMARY KEY`, but apart from that, the key elements have no effect. When trying to select into a hashed table that uses the key elements for its unique key, a runtime error will occur most probably.

Defines an alternative element name for the current element. The alternative element name replaces the actual name of the element from the data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html). The alternative element name must comply with the general naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html): This means that it must also meet the following requirements:

Alternative element names can be used in the current CDS view entity to grant unique names for identically named elements from different entities of the data source. When the current CDS view entity is accessed, the alternative element names must be used instead of the actual name. Alternative element names cannot be used within the view entity, with one exception: alternative element names can be specified after `$projection` in the `ON` condition of a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html).

In particular, an alternative element name cannot be used as the operand of an [expression](ABENCDS_OPERANDS_AND_EXPR_V2.html).

-   [field](ABENCDS_FIELD_V2.html) defines an element of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity as an element. The field name can be prefixed with the name of the data source or its alternative name. The prefix is separated using a period (`.`). `AS` can be used to define an alternative element name `alias`.
-   If the view entity makes use of multiple [data sources](ABENCDS_DATA_SOURCE_V2.html) by using one or more join expressions, then all elements in the `SELECT` list **must** be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.
-   [`include aspect`](ABENCDS_INCLUDE_ASPECT.html) includes 1 to n elements of a CDS aspect.
-   [`expose_assoc`](ABENCDS_SELECT_LIST_ASSOCIATION_V2.html) exposes a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html), a [CDS to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), or a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) using a [path expression](ABENCDS_PATH_EXPRESSION_V2.html). If a CDS association with a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V2.html)\\ `cds_cond` is exposed, an alternative element name `alias` with `AS` must be defined. Otherwise, an alternative element name can be defined.
-   `[path_expr](ABENCDS_PATH_EXPRESSION_V2.html).element` specifies an element `element` of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association of the path expression [`path_expr`](ABENCDS_PATH_EXPRESSION_V2.html). This is referred to as [SQL path target field](ABENSQL_TARGET_FIELD_GLOSRY.html). The element defined in this way is part of the result set of the CDS view entity and a component of a type defined in ABAP with respect to the CDS view entity. If no alternative element name `alias` is defined, the element name is defined by the name of the element named by the path expression.
-   [`literal`](ABENCDS_LITERAL_V2.html) can be used to declare a literal. `AS` must be used to define an alternative element name `alias`.
-   [`parameter`](ABENCDS_PARAMETER_V2.html) can be used to specify a parameter from the [`parameter list`](ABENCDS_PARAMETER_LIST_V2.html). An alternative element name using the keyword `AS` must be defined, and it cannot be the name `pname` of the parameter.
-   [`session_variable`](ABENCDS_SESSION_VARIABLE_V2.html) can be used to specify a session variable. `AS` must be used to define an alternative element name `alias`.
-   [`reuse_exp`](ABENCDS_REUSABLE_EXPRESSION_V2.html) reuses an expression defined in the `SELECT` list in another operand position of the same CDS view entity. An alternative element name specified using `AS` is required.
-   An [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html) can be defined as an element. An alias name is mandatory.
-   [`aggr_expr`](ABENCDS_AGGREGATE_FUNCTIONS_V2.html), [`arith_expr`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html), [`builtin_func`](ABENCDS_BUILTIN_FUNCTIONS_V2.html),[`case_exp`](ABENCDS_CASE_EXPRESSION_V2.html), and [`cast_expr`](ABENCDS_CAST_EXPRESSION_V2.html) can be used to specify aggregate expressions, arithmetic expressions, calls of built-in functions, case distinctions, and cast expressions. The expressions and functions are evaluated by the database system when the CDS view entity is accessed. An alternative element name `alias` must be defined with the keyword `AS`.
-   [`EnumConstant`](ABENCDS_ENUM_FIELD_V2.html) defines an [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html) as an element. An alias name is mandatory.

-   An annotation can be used to assign further technical and semantic properties to an element for evaluation by the ABAP runtime framework. [Framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be used to give the element specific semantic properties that are evaluated by other SAP frameworks.

-   By the addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html).
-   In implicit [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the result set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.
-   In some scenarios, a [view entity buffer](ABENCDS_VIEW_ENTITY_B_GLOSRY.html) requires a unique key. Records with duplicate keys might lead to unexpected buffer behavior.

-   The naming conventions for [component names](ABENDDIC_STRUCTURES_TECH.html) of [DDIC structures](ABENDDIC_STRUCTURES.html) in ABAP Dictionary
-   It cannot be a reserved component name. The reserved names that cannot be used are specified in the database table `TRESE`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_SALES\_CDS\_SALES\_ORDER\_VE\\n with parameters\\n p\_delay : abap.int4\\n as select from\\n spfli\\n association of many to one scarr as \_scarr\\n on \_scarr.carrid = spfli.carrid\\n \\{\\n key carrid,\\n \_scarr.carrname,\\n 'abc' as literal,\\n $parameters.p\_delay as parameterExample,\\n $session.user\_date as currentDate,\\n count(\*) as cnt,\\n fltime + $parameters.p\_delay as fltime\_delayed,\\n concat(concat('"', \_scarr.carrname), '"') as carrname\_quoted,\\n case when fltime < 60 then 'short'\\n when fltime > 60 then 'long'\\n else 'medium'\\n end as duration,\\n cast(connid as int4) as connid\_number\\n \\}\\n group by\\n carrid,\\n \_scarr.carrname,\\n fltime,\\n connid\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_VIEW\_ENTITY\_KEY\\n as select from spfli\\n\\{\\n key cityfrom,\\n key cityto,\\n carrid,\\n connid\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_select\_list\_v2.html