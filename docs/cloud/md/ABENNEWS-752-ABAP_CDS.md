---
title: "ABENNEWS-752-ABAP_CDS"
description: |
  ABENNEWS-752-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-752-ABAP_CDS.htm"
abapFile: "ABENNEWS-752-ABAP_CDS.html"
keywords: ["do", "if", "data", "ABENNEWS", "752", "ABAP", "CDS"]
---

[1\. Annotations as CDS Objects](#ABAP_MODIFICATION_1@4@)

[2. Cardinality in `LEFT OUTER JOIN`](#ABAP_MODIFICATION_2@4@)

[3\. Access Control](#ABAP_MODIFICATION_3@4@)

[4\. Extensions](#ABAP_MODIFICATION_4@4@)

From ABAP release 7.52, it is possible to define [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) as standalone [CDS objects](ABENCDS_OBJECT_GLOSRY.html).

A [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) dictates precisely how the annotation needs to be specified in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) in [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html).

In [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html), annotation definitions are covered by source code coloring and Code Completion. In [DDLA source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) and [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html), the definitions are also covered by the syntax check.

SAP delivers annotation definitions for the [SAP annotations](ABENSAP_ANNOTATION_GLOSRY.html). No other annotations should be used at present.

In a [`LEFT OUTER JOIN`](ABENCDS_JOINED_DATA_SOURCE_V1.html), an addition `TO ONE` or `TO MANY` can be specified for the cardinality. This addition is evaluated by an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) as a note for optimization.

This option exists in earlier releases in ABAP CDS, but has been documented only from ABAP release 7.52. In [ABAP SQL](ABENNEWS-752-ABAP_SQL.html), the corresponding syntax was introduced in ABAP release 7.52.

The following enhancements have been implemented in CDS access control:

[CDS DDIC-based view extensions](ABENCDS_VIEW_EXTEND_GLOSRY.html) are now connected to [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) whenever they are defined in a [package](ABENPACKAGE_GLOSRY.html) that is assigned a [switch](ABENSWITCH_GLOSRY.html).

-   [CDS roles](ABENCDS_ROLE_GLOSRY.html) can now also be defined for [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html). When a CDS table function is accessed in ABAP SQL. The access conditions are evaluated by default.
-   Extensions in DDL for defining CDS roles:

-   When [access conditions](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cond_expr`](ABENCDS_DCL_ROLE_COND_EXPR.html) are specified, there are no longer any restrictions on how Boolean operators and parentheses are used. The Boolean operator `NOT` can now also be used and any combination of parentheses is possible.
-   The operators [`BETWEEN`](ABENCDS_F1_COND_LITERAL.html) and [`IS NULL`](ABENCDS_F1_COND_LITERAL.html) are now available for literal conditions as part of an access condition.
-   When a path is specified for an element in an [access condition](ABENACCESS_CONDITION_GLOSRY.html), multivalue associations are now also tracked.
-   In a [literal condition](ABENCDS_F1_COND_LITERAL.html)\\ `[NOT] LIKE`, it is now possible to specify an escape character using `ESCAPE`.
-   Blanks are now no longer forced in certain positions.

abenabap.html abennews.html abennews-75.html abennews-752.html