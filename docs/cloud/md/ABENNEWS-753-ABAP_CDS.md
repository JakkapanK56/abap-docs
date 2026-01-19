---
title: "ABENNEWS-753-ABAP_CDS"
description: |
  ABENNEWS-753-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-753-ABAP_CDS.htm"
abapFile: "ABENNEWS-753-ABAP_CDS.html"
keywords: ["if", "data", "ABENNEWS", "753", "ABAP", "CDS"]
---

[1\. CDS Hierarchies](#ABAP_MODIFICATION_1@4@)

[2. New Condition `IS INITIAL`](#ABAP_MODIFICATION_2@4@)

[3\. Literals](#ABAP_MODIFICATION_3@4@)

[4\. CDS Abstract Entities](#ABAP_MODIFICATION_4@4@)

[5\. Metadata Extensions for CDS Entities](#ABAP_MODIFICATION_5@4@)

[6\. Access Control](#ABAP_MODIFICATION_6@4@)

The new statement [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) can be used to create [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html) that are accessed as [hierarchies](ABENHIERARCHY_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) read statements.

The new condition [`IS INITIAL`](ABENCDS_COND_EXPR_INITIAL_V1.html) can be used to check the initial value of operands.

A [literal](ABENCDS_LITERAL_V1.html) of a respective value is now always handled as a field of the type `INT8`, including in the definition of associations.

An [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) defines the type properties of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) without creating an instance of a database object. An abstract CDS entity is defined using [`DEFINE ABSTRACT ENTITY`](ABENCDS_F1_DEFINE_ABSTRACT_ENTITY.html) in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html).

The variant [`ANNOTATE ENTITY`](ABENCDS_F1_ANNOTATE_VIEW.html) was added to the previous statement [`ANNOTATE VIEW`](ABENCDS_F1_ANNOTATE_VIEW.html). This makes it possible to define [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html) for any [CDS entities](ABENCDS_ENTITY_GLOSRY.html) with the exception of [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html). Metadata extensions of this type can contain entity annotations, parameter annotations, and element annotations.

The following enhancements have been implemented in [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html):

-   New Boolean predicates [`TRUE`](ABENCDS_DCL_ROLE_CONDITIONS.html) and [`FALSE`](ABENCDS_DCL_ROLE_CONDITIONS.html) can now be used as part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html).
-   In a [PFCG condition](ABENCDS_F1_COND_PFCG.html), a [PFCG mapping](ABENCDS_PFCG_MAPPING_GLOSRY.html) can be [mapped](ABENCDS_F1_COND_PFCG_MAPPING.html) to an element list. This mapping assigns the CDS elements to the authorization fields of an authorization object. A PFCG mapping is defined in a [CDS access policy](ABENCDS_ACCESS_POLICY_GLOSRY.html) using [`DEFINE PFCG_MAPPING`](ABENCDS_F1_DEFINE_PFCG_MAPPING.html).

abenabap.html abennews.html abennews-75.html abennews-753.html