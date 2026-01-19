---
title: "ABENCDS_PROPAGATE_BUFFER"
description: |
  ABENCDS_PROPAGATE_BUFFER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PROPAGATE_BUFFER.htm"
abapFile: "ABENCDS_PROPAGATE_BUFFER.html"
keywords: ["select", "do", "if", "try", "data", "types", "ABENCDS", "PROPAGATE", "BUFFER"]
---

`PROPAGATE VIEW ENTITY BUFFER ON cds_entity  \{    propagated_field1[,    propagated_field2][,    ...]\  \}[;]`

Defines a [CDS propagated buffer](ABENCDS_PROP_BUFFER_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) for a [CDS entity](ABENCDS_ENTITY_GLOSRY.html).

A CDS propagated buffer is a [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) that defines [SQL path target fields](ABENSQL_TARGET_FIELD_GLOSRY.html) for [buffer propagation](ABENCDS_BUFFER_PROPAGATION_GLOSRY.html) for a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html). Buffer propagation means that the joins defined by a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) are processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) on data stored in the [table buffer](ABENTABLE_BUFFER_GLOSRY.html). Instead of using joins instantiated on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), temporary joins are created on [AS ABAP](ABENAS_ABAP_GLOSRY.html) to process the table buffer. This can result in performance gains.

As a prerequisite, the definition of the CDS view entity or CDS transactional interface must contain the following annotation: [`@AbapCatalog.entityBuffer.propagationAllowed:true`](ABENCDS_1859277801_ANNO.html).

This annotation entails additional syntax checks. It is only allowed if the CDS entity in question meets certain prerequisites. These prerequisites are described in topic [ABAP CDS - Table Buffering of CDS View Entities](ABENCDS_V2_VIEW_BUFFERING.html).

If a CDS propagated buffer is active for a CDS entity, the annotation cannot be removed there.

`cds_entity` can be a CDS view entity or a [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html).

A propagated buffer must define at least one field `propagated_field1`, `propagated_field2`, ... in curly brackets. A maximum of ten fields is possible. The fields must be [SQL path target fields](ABENSQL_TARGET_FIELD_GLOSRY.html) that are defined in the [select list](ABENCDS_SELECT_LIST_ENTRY_V2.html) or [projection list](ABENCDS_PROJ_VIEW_ELEMENT.html) of the CDS entity `cds_entity` for which buffer propagation is defined. In addition, the [CDS association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) must consist of at least one association, for example: `_assoc.field`. A longer association path is also possible. For the propagated fields, the following rules apply:

The following rules apply to the CDS association path that is used to specify the propagated fields:

**Note** In the following, the terms *first association*, *intermediate association*, and *last association* are used to specify the place of an association in an association path. For example, if an association path consists of four CDS associations \_assoc1.\_assoc2.\_assoc3.\_assoc4.field, the terms are used as follows: 
\- assoc1 is the first association 
\- assoc2 and assoc3 are the intermediate associations 
\- assoc4 is the last association. The last association is the origin of the [SQL path target field](ABENSQL_TARGET_FIELD_GLOSRY.html).

One or more propagated buffers can be specified for a CDS entity `cds_entity`. If more than one propagated buffer is specified, the distinct union set of all buffer propagations is used. This means that the fields from all buffer propagations are combined and duplicates are removed. The distinct union set can have a maximum of ten fields.

ABAP Data Models guide, section about [CDS Propagated Buffers](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/6c69199817ce41f4a6201ca943c6d81a?version=sap_cross_product_abap).

The following definition demonstrates the syntax for a CDS propagated buffer.

The propagated buffer refers to the CDS transactional query `DEMO_SALES_PV_MATERIAL`. This transactional query contains the annotation `@AbapCatalog.entityBuffer.propagationAllowed: true`. Additionally, the original data source of the propagated field, `DEMO_SALES_CDS_MAT_TEXT`, is fully buffered.

-   `propagated_field1`, `propagated_field2`, ... must not be the result of a calculation in the CDS entity `cds_entity` for which buffer propagation is defined. This means, they must not be used as operands of expressions and functions. The only exception to this rule is a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html) with the addition `PRESERVING TYPE`. `propagated_field1`, `propagated_field2` can be used as operands of a cast expression with the addition `PRESERVING TYPE`.
-   `propagated_field1`, `propagated_field2`, ... must not be defined as key fields [`KEY`](ABENCDS_SELECT_LIST_ENTRY_V2.html) in the CDS entity `cds_entity` for which buffer propagation is defined. Key fields are not allowed to be propagated.
-   `propagated_field1`, `propagated_field2`, ... must not be used in a `WHERE`, `GROUP BY`, or `HAVING` clause, not in the `ON` condition of a join, or the `ON` condition of an association in the CDS entity `cds_entity` for which buffer propagation is defined.
-   Each propagated field can be specified only once and must have a unique name.

-   The [source cardinality](ABENSOURCE_CARDINALITY_GLOSRY.html) of the first association is irrelevant. The [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html) of the first association must be `TO EXACT ONE`.
-   The source and target cardinalities of the intermediate associations must be `[TO] EXACT ONE`.
-   The source cardinality of the last association must be `EXACT ONE`. The target cardinality of the last association must be `TO ONE` or `TO EXACT ONE`.
-   If the CDS association path consists of exactly one association, the source cardinality of that association is irrelevant and the target cardinality can be `TO ONE` or `TO EXACT ONE`.
-   The data source that is the origin of the propagated field must have the buffering type [full buffering](ABENBUFFER_COMPLETE_BUFFERING.html). No other buffering types are currently supported.
-   If the association path consists of more than one association, the `ON` conditions and all filter conditions of all associations involved must be compatible to each other. This means that the same number of fields must be used in the `ON` conditions, the fields used must be compatible and the filter conditions, if any, must be identical.
-   The first association of the association path of the propagated field must bind all of the key fields of the association target in its `ON` condition using the [comparison operator](ABENCDS_COND_EXPR_COMP_V2.html)\\ `=`. All of the fields of the `ON` condition of this first association must be specified in the `SELECT` list.
-   If the association to the original data source of the propagated field has a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V2.html), the filter condition must not have any input parameters as operands.
-   Fields from [CDS entity extensions](ABENCDS_ENTITY_EXTEND_GLOSRY.html) can be propagated fields as long as they meet all the prerequisites.
-   The path expression must be instantiated as a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) in the SQL statement generated on the database. No other [join type](ABENJOIN_TYPE_GLOSRY.html) type is supported. For details on associations and joins, see [CDS DDL - CDS View Entity, Associations and Joins](ABENCDS_ASSOC_JOIN_V2.html).

-   For technical reasons, CDS buffer propagation must be explicitly triggered using an [ABAP tuning object](ABENABAP_TUNING_OBJECT_GLOSRY.html). An implicit and automatic join with the existing table buffer on AS ABAP is not possible.
-   The name of a CDS propagated buffer is not reflected in its definition. It only occurs as the name of the repository object in ADT.
-   The propagated fields defined in a CDS propagated buffer are typically fields that are not changed, such as localized text fields.
-   In the language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), SAP customers and partners cannot define CDS propagated buffers for CDS entities delivered by SAP. Buffer propagation is not covered by any [release contract](ABENRELEASE_CONTRACT_GLOSRY.html) and SAP does not guarantee stable elements for buffer propagation.
-   If not all the fields of an association are propagated, the join to the respective entity is executed on the SAP HANA database and there is no performance gain.
-   Buffer propagation does not have any effect on [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html). If there is access control defined for a CDS entity, it is applied as usual.
-   Buffer propagation is available only for SQL path target fields defined using a CDS association path. Joins or associations defined in ABAP SQL are not covered.

propagate view entity buffer on DEMO\_SALES\_PV\_MATERIAL \\n\\{ \\n MaterialName \\n\\} abenabap.html abencds.html abencds\_tuning\_objects.html abencds\_entity\_buffers.html