---
title: "ABENCDS_DEFINE_ROOT_VIEW_V1"
description: |
  ABENCDS_DEFINE_ROOT_VIEW_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DEFINE_ROOT_VIEW_V1.htm"
abapFile: "ABENCDS_DEFINE_ROOT_VIEW_V1.html"
keywords: ["do", "if", "ABENCDS", "DEFINE", "ROOT", "VIEW"]
---

`... ROOT ...`

The addition `ROOT` defines the CDS view `ddic_based_view` as the root entity of a [RAP business object](ABENRAP_BO_GLOSRY.html) in the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html). The [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) is the top node of the hierarchical structure of a business object and represents the business object.

The following applies to a root entity:

-   There is exactly one root entity in the structure of a business object.
-   The definition of a root entity can use [`COMPOSITION`](ABENCDS_COMPOSITION_V1.html) to specify [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) to [child entities](ABENCHILD_ENTITY_GLOSRY.html) of the business object.
-   A root entity does not have a [parent entity](ABENPARENT_ENTITY_GLOSRY.html).

-   For more information about the ABAP RESTful Application Programming Model, see [ABAP RAP Business Objects](ABENABAP_RAP.html).
-   The statement [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html) can add to a root entity but cannot make a regular view into a root entity.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html