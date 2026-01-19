---
title: "ABENBDL_PROJECTION_BO"
description: |
  ABENBDL_PROJECTION_BO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_PROJECTION_BO.htm"
abapFile: "ABENBDL_PROJECTION_BO.html"
keywords: ["if", "ABENBDL", "PROJECTION"]
---

[RAP projection behavior definitions](ABENCDS_PROJ_BDEF_GLOSRY.html) are created using the behavior definition language [RAP BDL](ABENCDS_DDL_GLOSRY.html) in [BDL source code](ABENBDL_SOURCE_CODE_GLOSRY.html).

A [RAP projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html) prepares a business object for a specific business service. The projection enables flexible service consumption as well as role-based service design. In RAP, a projection BO consists of CDS projection views, [RAP projection behavior definitions](ABENCDS_PROJ_BDEF_GLOSRY.html), and, if needed, additional or consumption-specific implementations.

To obtain a RAP projection business object, a projection layer must be created for some or all of the nodes of the CDS view model. Afterwards, a projection behavior definition can be created for the CDS root projection view. This projection behavior definition represents a projection of the underlying base BDEF of type [managed](ABENMANAGED_RAP_BO_GLOSRY.html) or [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html). It exposes a subset of the base BO's elements.

The following image shows the role of RAP projection behavior definitions for a [business service](ABENBUSINESS_SERVICE_GLOSRY.html).

A RAP projection behavior definition can also be built on top of a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). See the topic [RAP - Interface Behavior Definition](ABENBDL_RAP_BO_INTERFACE.html) for further details.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html