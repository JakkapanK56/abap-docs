---
title: "ABENCDS_DEFINE_ROOT_VIEW_V2"
description: |
  ABENCDS_DEFINE_ROOT_VIEW_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DEFINE_ROOT_VIEW_V2.htm"
abapFile: "ABENCDS_DEFINE_ROOT_VIEW_V2.html"
keywords: ["do", "if", "ABENCDS", "DEFINE", "ROOT", "VIEW"]
---

`... ROOT ...`

The addition `ROOT` defines the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) in question as the root entity of a [RAP business object](ABENRAP_BO_GLOSRY.html) in the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html). The [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) is the top node of the hierarchical structure of a business object and represents the business object.

The following applies to a root entity:

-   There is exactly one root entity in the structure of a business object.
-   A root entity does not have a [parent entity](ABENPARENT_ENTITY_GLOSRY.html).
-   A root entity can specify [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) to [child entities](ABENCHILD_ENTITY_GLOSRY.html) of the business object using the keyword [`COMPOSITION`](ABENCDS_COMPOSITION_V2.html). This is not mandatory, a root node can also be a [leaf entity](ABENLEAF_ENTITY_GLOSRY.html).

-   For more information about the ABAP RESTful Application Programming Model, see [ABAP RAP Business Objects](ABENABAP_RAP.html).
-   The statement [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html) can add to a root entity but cannot turn a regular view entity into a root entity.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html