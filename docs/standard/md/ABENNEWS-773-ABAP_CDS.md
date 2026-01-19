---
title: "ABENNEWS-773-ABAP_CDS"
description: |
  ABENNEWS-773-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-773-ABAP_CDS.htm"
abapFile: "ABENNEWS-773-ABAP_CDS.html"
keywords: ["select", "insert", "if", "ABENNEWS", "773", "ABAP", "CDS"]
---

[1\. CDS Hierarchies](#ABAP_MODIFICATION_1@4@)

[2. New Condition `IS INITIAL`](#ABAP_MODIFICATION_2@4@)

[3\. Access Control](#ABAP_MODIFICATION_3@4@)

The new statement [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) can be used to create [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html) that are accessed as [ABAP SQL hierarchies](ABENSQL_HIERARCHY_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) read statements.

The new condition [`IS INITIAL`](ABENCDS_COND_EXPR_INITIAL_V1.html) can be used to check the initial value of operands.

The following enhancements have been implemented in [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html):

-   New Boolean predicates [`TRUE`](ABENCDS_DCL_ROLE_CONDITIONS.html) and [`FALSE`](ABENCDS_DCL_ROLE_CONDITIONS.html) can now be used as part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html).
-   The following is now possible in an [inheritance condition](ABENINHERIT_CONDITION_GLOSRY.html) defined using [`INHERITING`](ABENCDS_F1_COND_INHERIT.html):

-   The new additions `DEFAULT TRUE` and `DEFAULT FALSE` can be specified.
-   `ROOT WITH` can be used to insert CDS elements in front of SQL path expressions.

-   The syntax of [`DEFINE PFCG_MAPPING`](ABENCDS_F1_DEFINE_PFCG_MAPPING.html) was modified to make it possible to define the PFCG mapping using a freely selectable CDS entity `mapping_entity`.

abenabap.html abennews.html abennews-77.html abennews-773.html