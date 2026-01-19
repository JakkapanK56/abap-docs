---
title: "ABENCDS_DATABASE_VIEW"
description: |
  ABENCDS_DATABASE_VIEW - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DATABASE_VIEW.htm"
abapFile: "ABENCDS_DATABASE_VIEW.html"
keywords: ["select", "try", "data", "types", "ABENCDS", "DATABASE", "VIEW"]
---

For [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) defined using the statement [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html) without the addition [`ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html), a [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is created alongside the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) when the CDS view is activated. The CDS entity represents the actual CDS view. Properties, such as [access controls](ABENCDS_ACCESS_CONTROL_GLOSRY.html) defined in CDS, can be defined for the CDS entity only. The CDS-managed DDIC view is used as a technical foundation for CDS DDIC-based views (obsolete). It is a read-only [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html) in ABAP Dictionary.

The name `CDS_DB_VIEW` of the DDIC database view is defined in the [definition](ABENCDS_DEFINE_VIEW_V1.html) of a CDS DDIC-based view (obsolete) with the [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ `@AbapCatalog.sqlViewName`, and is located in the same namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. When the CDS view is activated, the corresponding [SQL view](ABENSQL_VIEW_GLOSRY.html) is created with the same name.

As a data type in ABAP Dictionary, the CDS-managed DDIC view represents like all DDIC database views a flat [DDIC structure](ABENDDIC_STRUCTURES.html) with the [elements of the CDS](ABENCDS_SELECT_LIST_ENTRY_V1.html) view as components. The CDS-managed DDIC view of a [client-dependent](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) CDS view always has a client column, unlike the CDS entity.

-   In ABAP Dictionary, the CDS-managed DDIC view can be used like any [DDIC structure](ABENDDIC_STRUCTURES.html), such as the type of a substructure, as an include structure, or as the row type of a table type.
-   The CDS-managed DDIC view should not, however, be used in ABAP.
-   In CDS DDL too, only the CDS entity should be accessed using its name `ddic_based_view` and not the CDS-managed DDIC view using the name `CDS_DB_VIEW`.

-   Accessing a CDS-managed DDIC view is [obsolete](ABENCDS_ACCESS_OBSOLETE.html). Instead, the CDS entity should be accessed directly.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html