---
title: "ABENNEWS-793-CDS_BDL"
description: |
  ABENNEWS-793-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-793-CDS_BDL.htm"
abapFile: "ABENNEWS-793-CDS_BDL.html"
keywords: ["if", "data", "ABENNEWS", "793", "CDS", "BDL"]
---

[1. Interface BDEF, `use event`](#ABAP_MODIFICATION_1@4@)

[2\. RAP Derived Events](#ABAP_MODIFICATION_2@4@)

[3\. Draft Action Activate Optimized](#ABAP_MODIFICATION_3@4@)

[4. `with managed instance filter`](#ABAP_MODIFICATION_4@4@)

[5\. Redefined Parameters, Projection or Interface BDEF](#ABAP_MODIFICATION_5@4@)

[6. Draft Action `AdditionalSave`](#ABAP_MODIFICATION_6@4@)

In [RAP interface behavior definitions](ABENCDS_INTERFACE_BDEF_GLOSRY.html), [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) can be reused using the syntax [`use event`](ABENBDL_USE_PROJECTION.html).

[RAP derived events](ABENRAP_DERIVED_EVENT_GLOSRY.html) allow the reuse of existing [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) with a custom payload. RAP derived events are available in managed and unmanaged RAP BOs and in [base BDEF extensions](ABENRAP_BASE_BDEF_EXT_GLOSRY.html). They are defined using the syntax [`managed event`](ABENBDL_MANAGED_EVENT.html).

The optional addition [`optimized`](ABENBDL_DRAFT_ACTION.html) is now available for the [draft action `Activate`](ABENBDL_DRAFT_ACTION.html). SAP recommends always using this addition, since it speeds up the activation of draft instances.

The optional addition [`with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html) is available for [projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html) and [interface BDEFs](ABENCDS_INTERFACE_BDEF_GLOSRY.html). If specified, the [`WHERE`](ABENCDS_PROJ_VIEW_COND_EXPR.html) condition of the underlying [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) or [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) is evaluated when the BDEF is accessed with [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) requests from Web clients.

The input or output parameter of a [RAP action](ABENRAP_ACTION_GLOSRY.html), [RAP function](ABENRAP_FUNCTION_GLOSRY.html), or a [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html) that is [reused](ABENBDL_USE_PROJECTION.html) in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) or an [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html) can optionally be replaced with its own projection-specific structure using the syntax additions [`deep parameter`](ABENBDL_REDEFINE_PARAM.html) or [`deep result`](ABENBDL_REDEFINE_PARAM.html).

A new [draft action](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) is available, [`draft action AdditionalSave`](ABENBDL_DRAFT_ACTION.html). This draft action allows users to define a custom saving strategy for draft instances. It is intended in particular for draft actions with a user-defined implementation, defined using the addition [`with additional implementation`](ABENBDL_DRAFT_ACTION.html).

abenabap.html abennews.html abennews-79.html abennews-793.html abennews-793-restful.html