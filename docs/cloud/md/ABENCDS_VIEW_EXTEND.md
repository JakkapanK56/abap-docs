---
title: "ABENCDS_VIEW_EXTEND"
description: |
  ABENCDS_VIEW_EXTEND - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_VIEW_EXTEND.htm"
abapFile: "ABENCDS_VIEW_EXTEND.html"
keywords: ["do", "if", "ABENCDS", "VIEW", "EXTEND"]
---

There are currently two different statements that can be used to extend a [CDS view](ABENCDS_VIEW_GLOSRY.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html):

-   [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html)

-   This variant is used to define a [CDS view entity extension](ABENCDS_VIEW_ENTITY_EXTEND_GLOSRY.html) for a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html).
-   Available since release 7.78.

-   [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html)

-   This variant is used to define a [CDS view extension](ABENCDS_VIEW_EXTEND_GLOSRY.html) that is also linked with a [DDIC append view](ABENDDIC_APPEND_VIEW_GLOSRY.html) in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).
-   Available since release 7.40, SP08.
-   Recommended for extending [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), defined using the statement [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html).

-   A view entity extension does not have a DDIC append view.
-   For a view entity extension, no name is specified after `WITH`. A view entity extension has only one name, which is the name of the [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html). This name is assigned in the wizard for creating a new repository object.
-   In view entity extensions, no [header annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) are allowed. That means that no annotations are allowed in front of the statement `EXTEND VIEW ENTITY`.
-   View entity extensions were developed for CDS view entities and they have the same advantages, for example, a better performance during activation. The advantages of CDS view entities over DDIC-based views is explained in topic [ABAP CDS - DDIC-Based Entities](ABENCDS_DDIC_ENTITY.html).

-   For compatibility and migration reasons, `EXTEND VIEW` can also be used to extend CDS view entities and CDS projection views. Activation is possible without errors. However, the syntax elements specific to CDS view entities and CDS projection views are not supported in this variant of view extensions. It is recommended that the statement `EXTEND VIEW ENTITY` is used for CDS view entities and CDS projection views.
-   CDS DDIC-based views (obsolete) are [obsolete](ABENCDS_DDIC_ENTITY.html). If new CDS views are required, CDS view entities should be used.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_extension.html