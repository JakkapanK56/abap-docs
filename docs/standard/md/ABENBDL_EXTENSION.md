---
title: "ABENBDL_EXTENSION"
description: |
  ABENBDL_EXTENSION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTENSION.htm"
abapFile: "ABENBDL_EXTENSION.html"
keywords: ["delete", "do", "if", "types", "ABENBDL", "EXTENSION"]
---

A [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) is a transportable extension of a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). BDEF extensions can be added to the [BDEF implementation types](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ [managed](ABENMANAGED_RAP_BO_GLOSRY.html), [unmanaged](ABENMANAGED_RAP_BO_GLOSRY.html), [projection](ABENCDS_PROJ_BDEF_GLOSRY.html), and [abstract](ABENCDS_ABSTRACT_BDEF_GLOSRY.html). A BDEF extension itself can be extended. This is referred to as [extension layering](ABENRAP_EXT_LAYERING_GLOSRY.html).

A BDEF extension can make additions to the original BDEF, but it cannot modify, overwrite, or delete elements from it. The following extensions are possible: field extensibility, [behavior extensibility](ABENRAP_BEHAVIOR_EXTENSION_GLOSRY.html), [node extensibility](ABENRAP_EXT_ENTITY_BEHAVIOR_GLOSRY.html).

A note on the terminology: the following topics use the terms *base RAP BO* and *base BDEF* to refer to RAP behavior definitions of type `managed` and `unmanaged`. A [base BDEF extension](ABENDEVELOPMENT_OBJECT_GLOSRY.html) is a BDEF extension that extends a RAP behavior definition of type `managed` or `unmanaged`.

*Original* is used as synonym for *extended* or to refer to BDEF components that belong to the extended RAP BO. For example, *original field* and *original operation* refers to fields and operations from the extended RAP BO. The term *original* can refer to BDEFs of any type or layer. It focuses on the contrast between *extended object* and *extension*.

Each BDEF extension automatically inherits the [release contract](ABENRELEASE_CONTRACT_GLOSRY.html) of the original RAP BO. Therefore, BDEF extensions must also meet the specifications of the release contract and need to be kept stable.

-   Section [Extensibility Enablement](ABENBDL_EXTENSIBILITY_ENABLING.html): As a prerequisite for BDEF extensions, the behavior definition or BDEF extension to be extended must be explicitly enabled for RAP extensibility.
-   Section [Base BDEF Extension](ABENBDL_EXTENSIBILITY_MANAGED_UNM.html): All available extension features for RAP BOs of type managed and unmanaged are described.
-   Section [BDEF Projection Extension](ABENBDL_EXTENSIBILITY_PROJECTION.html): All available extension features for BDEF projections are described.
-   Section [Abstract BDEF Extension](ABENBDL_EXTENSIBILITY_ABSTRACT.html): All available extension features for abstract BDEFs are described.

-   BDEF extensions themselves and each single extension element should use a separate [namespace](ABENNAMESPACE_GLOSRY.html) to avoid naming conflicts with extended elements. BDEF extensions created in non-SAP and non-partner development systems should use the [customer namespace](ABENCUSTOMER_NAMESPACE_GLOSRY.html) prefix `Z` or `ZZ`.
-   BDEF extensions are connected to the [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) whenever they are defined in a [package](ABENPACKAGE_GLOSRY.html) that is assigned a [switch](ABENSWITCH_GLOSRY.html).

-   Development guide for the ABAP RESTful Application Programming Model, section [Extend](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/492d88ed89f640e5b18dd1c57f6817b1?version=sap_cross_product_abap).
-   [DDIC - Extensions](ABENDDIC_ENHANCEMENTS.html)
-   [ABAP CDS - CDS Entity Extension](ABENCDS_VIEW_EXTENSION.html)
-   CDS Service Definition Extensions ([`EXTEND SERVICE`](ABENSRVD_EXTEND_SERVICE.html)).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html