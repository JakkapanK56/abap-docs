---
title: "ABENNEWS-756-ABAP_CDS"
description: |
  ABENNEWS-756-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-756-ABAP_CDS.htm"
abapFile: "ABENNEWS-756-ABAP_CDS.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENNEWS", "756", "ABAP", "CDS"]
---

[1\. CDS Abstract Entity Extensions](#ABAP_MODIFICATION_1@4@)

[2\. CDS Abstract Entity, To-Parent Association](#ABAP_MODIFICATION_2@4@)

[3\. CDS Hierarchy, Caching Policy](#ABAP_MODIFICATION_3@4@)

[4\. Using CDS-Managed DDIC Views is Obsolete](#ABAP_MODIFICATION_4@4@)

[5\. CDS View Entity, Reusing Expressions](#ABAP_MODIFICATION_5@4@)

[6. CDS View Entity, `UNION` Clause](#ABAP_MODIFICATION_6@4@) 

[7. CDS View Entity, `DISTINCT`](#ABAP_MODIFICATION_7@4@)

[8\. CDS View Entity, New Set Operators](#ABAP_MODIFICATION_8@4@)

[9\. CDS View Entity, New Conversion Functions](#ABAP_MODIFICATION_9@4@)

[10\. CDS View Entity, Typed Literals](#ABAP_MODIFICATION_10@4@)

[11\. CDS View Entity, Handling of Amounts and Quantities](#ABAP_MODIFICATION_11@4@)

[12\. CDS View Entity, Extended Expression Matrix](#ABAP_MODIFICATION_12@4@)

[13. CDS Projection View, `REDEFINE ASSOCIATION`](#ABAP_MODIFICATION_13@4@)

[14. CDS Projection View, `PROVIDER CONTRACT`](#ABAP_MODIFICATION_14@4@)

[15. New `AbapCatalog` Annotations](#ABAP_MODIFICATION_15@4@)

The new statement [`EXTEND ABSTRACT ENTITY`](ABENCDS_EXTEND_ABSTRACT_ENTITY.html) of the DDL of ABAP CDS makes it possible to add new elements to existing [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) by using [CDS abstract entity extensions](ABENCDS_ABS_ENTITY_EXTEND_GLOSRY.html).

In [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), it is now possible to define [to-parent associations](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) without `ON` condition. The `ON` condition can be left out if the association target is also a CDS abstract entity.

A hierarchy definition [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) can now use the new addition `CACHE ON|OFF|FORCE` to specify the caching policy for a generated hierarchy.

For each [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is created in ABAP Dictionary upon activation. Using this [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html), for example for typing or for accessing the CDS entity in question, is [obsolete](ABENCDS_ACCESS_OBSOLETE.html) from now on. The reason is the release of a new type of CDS entity, the [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), which will replace [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) in the future. CDS view entities do not have a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) attached and in case of a migration from CDS DDIC-based view (obsolete) to CDS view entity, each usage of a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) leads to a syntax error.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), it is now possible to reuse expressions defined in the `SELECT` list in other operand positions of the same CDS view entity by using the syntax [`$projection.reuse_exp`](ABENCDS_REUSABLE_EXPRESSION_V2.html).

[`UNION`](ABENCDS_UNION_V2.html) clauses are now supported in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html). There are a few differences to `UNION` clauses in [CDS DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html). The most important difference is that branches of union clauses can be nested within each other in CDS view entities.

The addition [`DISTINCT`](ABENCDS_SELECT_STATEMENT_V2.html) is now available for `SELECT` statements in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html).

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), two new [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html) are available:

Two new conversion functions are available in CDS view entities:

[Typed literals](ABENCDS_TYPED_LITERAL_V2.html) are now available for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html). Typed literals allow an explicit type declaration and they are available for many built-in ABAP Dictionary data types.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), special handling for [CDS amount fields](ABENCDS_AMOUNT_FIELD.html) and [CDS quantity fields](ABENCDS_QUANTITY_FIELD.html) has been implemented. It differs from the handling of amount fields and quantity fields in DDIC, for example, more data types are possible and the currency key/unit key reference is considered in expressions.

Moreover, a new type is available: the [CDS calculated quantity](ABENCDS_CALCULATED_QUANTITY.html). A CDS calculated quantity is the result type of a calculation using amount and/or quantity fields.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), the expression matrix has been extended:

In CDS projection views, it is now possible to redefine the CDS associations from the projected entity in the header part. This is done using the keyword [`REDEFINE ASSOCIATION`](ABENCDS_PROJ_VIEW_REDEFINED_ASSOC.html). Redefinition can include a new filter, alias name, and redirection to a new association target, which must also be a CDS projection view, thus moving the complete data model to the projection layer.

It is now possible to specify a provider contract for [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html) using the keyword [`PROVIDER CONTRACT`](ABENCDS_PV_PROVIDER_CONTRACT.html). The provider contract specifies in which scenario a CDS projection view is used, and the scenario in turn determines in which runtime the view is executed and which features are available.

In this release, there is only one provider contract option available: `TRANSACTIONAL_QUERY`.

The following new `AbapCatalog.extensibility` annotations have been released:

-   [`EXCEPT`](ABENCDS_EXCEPT_V2.html)
-   [`INTERSECT`](ABENCDS_INTERSECT_V2.html)

-   [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html)
-   [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html)

-   In the [`WHERE`](ABENCDS_WHERE_CLAUSE_V2.html) clause, arithmetic expressions and case expressions are supported as operands.
-   In the [`HAVING`](ABENCDS_HAVING_CLAUSE_V2.html) clause, arithmetic expressions and case expressions are supported as operands.
-   In a [searched case expression](ABENCDS_SEARCHED_CASE_EXPR_V2.html), arithmetic expressions and case expressions are supported as operands.

-   [`AbapCatalog.extensibility.allowNewdataSources`](ABENCDS_VIEW_ENTITY_ANNO.html)
-   [`AbapCatalog.extensibility.dataSources`](ABENCDS_VIEW_ENTITY_ANNO.html)
-   [`AbapCatalog.extensibility.elementSuffix`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)
-   [`AbapCatalog.extensibility.extensible`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)
-   [`AbapCatalog.extensibility.quota.maximumBytes`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)
-   [`AbapCatalog.extensibility.quota.maximumFields`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)

abenabap.html abennews.html abennews-75.html abennews-756.html