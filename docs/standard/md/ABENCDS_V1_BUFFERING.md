---
title: "ABENCDS_V1_BUFFERING"
description: |
  ABENCDS_V1_BUFFERING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_V1_BUFFERING.htm"
abapFile: "ABENCDS_V1_BUFFERING.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "BUFFERING"]
---

The following [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) can define [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) for a CDS view linked with a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html):

Table buffering of CDS views is done for the associated [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) and the same prerequisites apply as for [DDIC database views](ABENDDIC_DATABASE_VIEWS.html) in ABAP Dictionary. To meet these prerequisites, a CDS view can only be buffered if the following applies:

Only the key fields of the CDS-managed DDIC view (obsolete) are respected in SAP buffering of [CDS-managed DDIC views (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html). Since ABAP release 7.90, the key fields of the CDS entity and the CDS-managed DDIC views (obsolete) are identical by default.

Enables full buffering for a CDS view.

-   [`@AbapCatalog.buffering.status`](ABENCDS_VIEW_ANNO_V1.html) defines whether and how [table buffering](ABENSAP_PUFFERING.html) is allowed.
-   [`@AbapCatalog.buffering.type`](ABENCDS_VIEW_ANNO_V1.html) determines the [buffering type](ABENBUFFER_TYPE.html).
-   [`@AbapCatalog.buffering.numberOfKeyFields`](ABENCDS_VIEW_ANNO_V1.html) determines the number of key fields covered if [generic buffering](ABENBUFFER_GENERIC_BUFFERING.html) is used.

-   It cannot contain any views
-   (DDIC database views or CDS views) and no [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) as [data sources](ABENCDS_DATA_SOURCE_V1.html).
-   It cannot have any [input parameters](ABENCDS_PARAMETER_LIST_V1.html).
-   A [client-dependent view](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) can use `$session.client` as the only [session variable](ABENCDS_SESSION_VARIABLE_V1.html) and must use it directly. This also allows the annotation `@ClientHandling.algorithm:#SESSION_VARIABLE` to be specified to [determine client handling](ABENCDS_VIEW_CLIENT_HANDLING_V1.html). A client-independent view must not use any session variables.
-   Key fields cannot contain [null values](ABENNULL_VALUE_GLOSRY.html).
-   The required key fields must be listed directly in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html). Key fields that only occur as operands of expressions cannot be evaluated.
-   No database tables can be accessed where [data aging](ABENDATA_AGING_GLOSRY.html) is enabled.

-   In [client-dependent views](ABENCDS_VIEW_CLIENT_HANDLING_V1.html), the client column must be explicitly included or added to the number in the specification for the annotation `@AbapCatalog.buffering.numberOfKeyFields`.
-   For [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), table buffering is [defined](ABENCDS_V2_VIEW_BUFFERING.html) directly for the CDS entity. A client column is not counted as a key field here.
-   In contrast to [table buffering of CDS view entities](ABENCDS_V2_VIEW_BUFFERING.html), where the prerequisites are real restrictions for the view, for DDIC-based views that do not meet the prerequisites buffering is bypassed implicitly by ABAP SQL.

@AbapCatalog.sqlViewName: '...' \\n@AbapCatalog.Buffering.status: #ACTIVE \\n@AbapCatalog.Buffering.type: #FULL \\n define view ... \\n as select from ... \\n \\{ ... \\} abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html