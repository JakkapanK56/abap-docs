---
title: "ABENCDS_USE_ENUM_TYPE"
description: |
  ABENCDS_USE_ENUM_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_USE_ENUM_TYPE.htm"
abapFile: "ABENCDS_USE_ENUM_TYPE.html"
keywords: ["select", "if", "case", "class", "data", "types", "ABENCDS", "USE", "ENUM", "TYPE"]
---

This section summarizes the use of [CDS elements](ABENCDS_ELEMENT_GLOSRY.html) with an enumerated type.

[CDS Enumerated Type, Use](ABENCDS_ENUM_ABEXA.html)

The following enumerated operands are available:

The technical storage type of the content of an operand of an enumerated element is the [base type](ABENBASE_TYPE_GLOSRY.html) of the CDS enumerated type. However, in the code element information in ADT or in the debugger, the data type of CDS enumerated elements is displayed as `ENUM`. The possible content is defined by the [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html)\\ `EnumValue1`, `EnumValue2`, ..., of which exactly one value must have the type-specific initial value.

The following CDS view entity demonstrates operands of an enumerated type.

The following image of the code element information of the CDS view entity `DEMO_CDS_ENUM_TYPE_USAGE_2` shows that the input parameter `p1` and all the fields, except for the key field `Id`, are typed with an enumerated type.

CDS enumerated elements are currently available in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html), [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) and [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) in the following operand positions:

A CDS enumerated type `EnumType` can be used in the following places:

A CDS enumerated constant can be used in the following places:

A CDS enumerated element can be used in the following places:

The following CDS view entity defines a `WHERE` condition with the CDS enumerated element `WEEKDAY` and the parameter `P_WEEKDAY`. The parameter is also typed with a CDS enumerated type.

The following code snippet accesses the view entity displayed above, passes an actual parameter to the input parameter `P_WEEKDAY`, and displays the result.

The following code snippet defines an enumerated variable with reference to a CDS enumerated type in ABAP. It assigns an enumerated constant from the same enumerated type to the variable.

CDS enumerated elements can be used in [simple case expressions](ABENCDS_SIMPLE_CASE_EXPRESSION_V2.html) in CDS entities. The following rules apply:

When [casting](ABENCDS_CAST_EXPRESSION_V2.html) to a CDS enumerated type, the operand of the cast expression must be compatible with the base type of the CDS enumerated type. The [cast matrix](ABENCDS_CAST_EXPRESSION_V2.html) and the [conversion rules](ABENCDS_CAST_EXPRESSION_RULES_V2.html) for casting apply with respect to the base type.

If the addition `PRESERVING TYPE` is specified, the data type and length of the operand and the base type of the CDS enumerated type must match exactly.

Enumerated operands can be used in logical expressions in the following clauses:

The following rules apply:

The following CDS enumerated type `DEMO_CDS_ENUM_STACK` is based on the CDS enumerated type `DEMO_CDS_ENUM_WEEKDAY`. It inherits the definition and the annotations of the referenced type.

`DEMO_CDS_ENUM_STACK` and `DEMO_CDS_ENUM_WEEKDAY` are compatible with each other and can be used in comparisons. Example:

Input parameters that are typed with a CDS enumerated type can have the following actual parameters:

In [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html), enumerated operands are described by objects of the class `CL_ABAP_ENUMDESCR`. This class can be used for [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) and [RTTC](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) purposes. Like any enumerated type, an enumerated type created using RTTC is only compatible with itself.

The following attributes exist in a type description of the class `CL_ABAP_ENUMDESCR`:

[Enumerated Elements, Type Description](ABENCDS_ENUM_DESCRIPTION_ABEXA.html)

-   **CDS enumerated type**
-   The [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html)\\ `EnumType` itself.
-   **CDS enumerated constant**
-   An [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html)\\ `EnumConstant` defines a value of the value set of an enumerated type. A CDS enumerated constant is specified using the name of the enumerated type `EnumType`, followed by a period (.), a hash character (#), and the name of an enumerated constant `EnumConstant`.
-   Example: `EnumType.#EnumConstant`
-   **CDS enumerated element**
-   A [CDS enumerated element](ABENCDS_ENUM_ELEMENT_GLOSRY.html) contains one of the enumerated values of the respective enumerated type. CDS enumerated elements can be defined as follows:

1.  Using a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html).
2.  Exposing an [input parameter](ABENINPUT_PARAMETER_GLOSRY.html), defined in the parameter list after [`WITH PARAMETERS`](ABENCDS_PARAMETER_LIST_V2.html) and typed with an enumerated type `EnumType` as an element in the `SELECT` list of a CDS entity.
3.  Exposing a field typed with an enumerated type from a [data source](ABENCDS_DATA_SOURCE_V2.html) or from an [association target](ABENASSOCIATION_TARGET_GLOSRY.html).
4.  Using a [case expression](ABENCDS_CASE_EXPRESSION_V2.html) with operands of an enumerated type.
5.  Reusing an expression from the `SELECT` list via [`$projection`](ABENCDS_REUSABLE_EXPRESSION_V2.html).
6.  Using an enumerated constant in the element list of a CDS entity.

-   To type another CDS enumerated type as described in the topic [CDS TDL - `DEFINE TYPE ENUM`](ABENCDS_DEFINE_ENUM_TYPE.html).
-   **Note** The maximum nesting depth is five. This means that a stack of enumerated types can have a maximum of five layers, from base to top-most.
-   In [cast expressions in CDS view entities](ABENCDS_CAST_EXPRESSION_V2.html).
-   In [cast expressions in CDS projection views](ABENCDS_PROJ_VIEW_ELEMENT.html).
-   **Note** Remember that casting in CDS projection views is only possible with the addition `PRESERVING TYPE`.
-   **Example**: `cast(ProjField as MyEnumType preserving type) as NewProjField`
-   For [typing](ABENCDS_TYPING.html) of elements in [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) and in [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).
-   For [typing](ABENCDS_TYPING.html) of parameters in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), CDS custom entities, and CDS abstract entities
-   In ABAP for typing data objects with the statement `TYPE`.

-   As a CDS element in the `SELECT` list of a CDS view entity
-   Syntax: `MyEnum.#EnumConstant as FieldName`
-   As actual parameters for input parameters of CDS view entities and [CDS analytical queries](ABENCDS_ANALYTIC_QUERY_GLOSRY.html).
-   **Note** An enumerated constant of an enumerated type `EnumType` can be passed to an input parameter that is typed with the same CDS enumerated type `EnumType`.
-   In a simple case expression in the `WHEN`, `THEN`, and `ELSE` branches. However, an enumerated constant is not valid as an operand after `CASE`.
-   In a complex case expression as a right-hand operand of the `WHEN` condition and as operand after `THEN`.
-   As an operand (left or right) in a [`WHERE`](ABENCDS_WHERE_CLAUSE_V2.html) clause in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html), and [CDS analytical query](ABENCDS_ANALYTIC_QUERY_GLOSRY.html).
-   In a [path filter](ABENCDS_PATH_EXPRESSION_FILTER_V2.html) of a path expression as left-hand operand.
-   In ABAP for value assignments and in comparisons as described in topic [Enumerated Objects (enum)](ABENENUMERATED_TYPES_USAGE.html).

-   As an element in the `SELECT` list of a CDS entity.
-   As an element in the projection list of a [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html).
-   In a simple case expression of a CDS view entity.
-   In a complex case expression of a CDS view entity.
-   In a reuse expression using `$projection` in the `SELECT` list of a CDS view entity and a CDS analytical query.
-   As an operand (left or right) of a `WHERE` clause in a CDS entity.
-   As a field of the [`GROUP BY`](ABENCDS_GROUP_BY_V2.html) clause of a CDS entity.
-   As an operand of a [`HAVING`](ABENCDS_HAVING_CLAUSE_V2.html) clause in a CDS entity.
-   As an operand of an association `ON` condition of a CDS association and of a to-parent association in a CDS view entity, CDS custom entity, CDS abstract entity and CDS transactional query.
-   As an operand of a join `ON` condition of a join between two data sources in a CDS view entity.
-   In a default filter condition of a CDS association, defined using [`WITH DEFAULT FILTER`](ABENCDS_SIMPLE_ASSOCIATION_V2.html).
-   In a path filter of a path expression as left or right-hand operand.
-   In ABAP for value assignments and in comparisons as described in topic [Enumerated Objects (enum)](ABENENUMERATED_TYPES_USAGE.html).

-   The operand after `CASE` must be a CDS enumerated element. CDS enumerated constants and CDS enumerated types are not possible.
-   The operands after `WHEN`, `THEN`, and `ELSE` can be CDS fields with an enumerated data type or CDS enumerated constants.
-   The operands after `CASE` and `WHEN` must have the same CDS enumerated type and the operands after `THEN` and `ELSE` must also have the same CDS enumerated type.

-   `WHERE` clause
-   `HAVING` clause
-   Association `ON` condition
-   Join `ON` condition
-   Path filter of a path expression
-   Default filter condition of an association
-   Complex case distinction

-   CDS enumerated elements can be used as a left or right hand operand. As relational operators, comparison operators, `IS INITIAL`, and `IS NULL` are supported. The Boolean operator `NOT` is supported.
-   For comparisons between operands of an enumerated data type, the rule applies that an operand can only be compared with an operand with the same enumerated type. The values of the operands are compared in accordance with their base type. An exception to this rule are type stacks. If an enumerated type is defined with reference to another CDS enumerated type, these two types are compatible with each other.
-   Enumerated constants are supported as operands of a `WHERE` clause, as an operand of a complex case distinction, as an operand of a path filter, or as operand of a default filter of an association. As relational operators, comparison operators are supported. Each enumerated type has an initial enumerated value, which makes checks with the predicate expression [`IS INITIAL`](ABENCDS_COND_EXPR_INITIAL_V2.html) possible. `IS [NOT] NULL` is not supported.

-   A CDS enumerated constant of the same CDS enumerated type.
-   An input parameter that is typed with the same CDS enumerated type.

-   `KIND` always has the value *E* for the elementary base type.
-   `TYPE_KIND` always has the value *k*.
-   `BASE_TYPE_KIND` describes the base type.
-   `MEMBERS` is a table of the enumerated constants and the associated enumerated values.

-   CDS enumerated types cannot be used in [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).
-   CDS enumerated types cannot be used for typing in DDIC objects such as [DDIC data types](ABENDDIC_DATA_TYPES.html), [DDIC views](ABENDDIC_VIEW_GLOSRY.html), and [DDIC extensions](ABENDDIC_EXTENSION_GLOSRY.html).

-   An enumerated type is always an elementary data type. Likewise, the associated type description class `CL_ABAP_ENUMDESCR` is a subclass of `CL_ABAP_ELEMDESCR`.
-   The base type describes how each enumerated value of the value set is stored internally, but it is not the type of the associated enumerated constant that can be used in a program. Its type is the enumerated type `ENUM` itself.

1.  Using a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html).
2.  Exposing an [input parameter](ABENINPUT_PARAMETER_GLOSRY.html), defined in the parameter list after [`WITH PARAMETERS`](ABENCDS_PARAMETER_LIST_V2.html) and typed with an enumerated type `EnumType` as an element in the `SELECT` list of a CDS entity.
3.  Exposing a field typed with an enumerated type from a [data source](ABENCDS_DATA_SOURCE_V2.html) or from an [association target](ABENASSOCIATION_TARGET_GLOSRY.html).
4.  Using a [case expression](ABENCDS_CASE_EXPRESSION_V2.html) with operands of an enumerated type.
5.  Reusing an expression from the `SELECT` list via [`$projection`](ABENCDS_REUSABLE_EXPRESSION_V2.html).
6.  Using an enumerated constant in the element list of a CDS entity.

@AbapCatalog.viewEnhancementCategory: \[#NONE\]\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, enum demo'\\n\\ndefine view entity DEMO\_CDS\_ENUM\_TYPE\_USAGE\_2\\n\\n with parameters\\n p1 : DEMO\_CDS\_ENUM\_CHAR\\n as select from DEMO\_CDS\_ENUM\_TYPE\_USAGE\_1\\n\\{\\n key Id,\\n friday,\\n\\n cast(abap.char'A' as DEMO\_CDS\_ENUM\_CHAR) as CastExp,\\n\\n $parameters.p1 as EnumParameterField,\\n\\n DEMO\_CDS\_ENUM\_CHAR.#second\_value as EnumConstantField,\\n\\n case friday\\n when DEMO\_CDS\_ENUM\_STACK.#FRI\\n then DEMO\_CDS\_ENUM\_STACK.#SAT\\n else null\\n end as EnumCase,\\n\\n $projection.EnumCase as ReuseField\\n\\}\\n @AbapCatalog.viewEnhancementCategory: \[#NONE\]\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, enum'\\n\\ndefine view entity DEMO\_CDS\_ENUM\_3\\n with parameters\\n p\_weekday : DEMO\_CDS\_ENUM\_WEEKDAY\\n as select from DEMO\_CDS\_ENUM\_1\\n\\{\\n key carrid,\\n key connid,\\n key fldate,\\n weekday\\n\\}\\nwhere\\n weekday = $parameters.p\_weekday\\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\nFROM demo\_cds\_enum\_3( p\_weekday = @demo\_cds\_enum\_weekday-fri ) \\nINTO TABLE @DATA(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). DATA wd\_cds TYPE demo\_cds\_enum\_weekday. \\n\\ \\nwd\_cds = demo\_cds\_enum\_weekday-tue. @EndUserText.label: 'CDS enum typed with another enum' \\ndefine type DEMO\_CDS\_ENUM\_STACK: DEMO\_CDS\_ENUM\_WEEKDAY IF demo\_cds\_enum\_stack-mon = demo\_cds\_enum\_weekday-fri. ENDIF. abenabap.html abencds.html abencds\_tdl.html abencds\_types.html abencds\_define\_type.html abencds\_enumeration\_types.html abencds\_define\_enum\_type.html