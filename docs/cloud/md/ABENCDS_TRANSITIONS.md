---
title: "ABENCDS_TRANSITIONS"
description: |
  ABENCDS_TRANSITIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_TRANSITIONS.htm"
abapFile: "ABENCDS_TRANSITIONS.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "TRANSITIONS"]
---

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) can be changed into another [CDS source type](ABENDDL_SOURCE_TYPE_GLOSRY.html) by replacing the source code. This can be done even after the respective CDS entity has been activated and transported.

Example: You have an active [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) and want to change it into a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).

Steps:

Result: The entity is changed from CDS view entity to CDS custom entity.

The following type changes are supported:

The names of elements from the element list, associations, annotations, and clauses can be changed freely and without any restrictions, as long as consumers of the respective CDS entity are not affected.

Certain type changes are not supported, for example, a CDS view entity cannot be changed into a CDS hierarchy. As a workaround, the CDS view entity can first be changed into a CDS custom entity and as a second step, it can be changed into a CDS hierarchy.

-   CDS table functions, CDS external entities, and [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html) cannot be turned into any other entity type after activation.
-   Changing a [CDS view](ABENCDS_VIEW_GLOSRY.html) into a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) is possible only if there are no consumers. The reason is that view building on CDS custom entities and CDS abstract entities is not supported. Example: A CDS view entity which serves as data source of another CDS view entity must not be changed into a CDS custom entity.

1.  Replace the statement [`DEFINE VIEW ENTITY CDSEntityName AS SELECT FROM ...`](ABENCDS_DEFINE_VIEW_ENTITY.html) by [`DEFINE CUSTOM ENTITY EntityName...`](ABENCDS_F1_DEFINE_CUSTOM_ENTITY.html).
2.  Adapt the source code to comply with all rules for CDS custom entities.
3.  Activate the custom entity.

**From** **To**\\ CDS view entity - CDS custom entity \\
\- CDS abstract entity CDS projection view - CDS custom entity \\
\- CDS abstract entity CDS hierarchy - CDS custom entity \\
\- CDS abstract entity CDS custom entity - CDS view entity \\
\- CDS projection view \\
\- CDS abstract entity \\
\- CDS hierarchy \\
\- CDS DDIC-based view (obsolete) CDS abstract entity - CDS view entity \\
\- CDS projection view \\
\- CDS custom entity \\
\- CDS hierarchy \\
\- CDS DDIC-based view (obsolete) CDS DDIC-based view (obsolete) - CDS view entity \\
\- CDS projection view \\
\- CDS custom entity \\
\- CDS abstract entity [CDS DDIC-based view extension](ABENCDS_VIEW_EXTEND_GLOSRY.html) \\
(`EXTEND VIEW`) \\ [CDS view entity extensions](ABENCDS_VIEW_ENTITY_EXTEND_GLOSRY.html) \\
(`EXTEND VIEW ENTITY`) abenabap.html abencds.html abencds\_entities.html