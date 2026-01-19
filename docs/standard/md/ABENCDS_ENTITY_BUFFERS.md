---
title: "ABENCDS_ENTITY_BUFFERS"
description: |
  ABENCDS_ENTITY_BUFFERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ENTITY_BUFFERS.htm"
abapFile: "ABENCDS_ENTITY_BUFFERS.html"
keywords: ["do", "types", "ABENCDS", "ENTITY", "BUFFERS"]
---

A [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) is an [ABAP tuning object](ABENABAP_TUNING_OBJECT_GLOSRY.html) that defines [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) settings for [CDS entities](ABENCDS_ENTITY_GLOSRY.html). The following types of CDS entity buffers are available:

CDS entity buffers are defined with the following special [CDS DDL](ABENCDS_DDL_GLOSRY.html) statements in [ADT](ABENADT_GLOSRY.html):

-   [CDS view entity buffer](ABENCDS_VIEW_ENTITY_B_GLOSRY.html)
-   [CDS propagated buffer](ABENCDS_PROP_BUFFER_GLOSRY.html)

-   [CDS DDL - `DEFINE VIEW | TABLE ENTITY BUFFER`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html)
-   [CDS DDL - `PROPAGATE VIEW ENTITY BUFFER`](ABENCDS_PROPAGATE_BUFFER.html)

-   The source code of entity buffers has its own editor in [ADT](ABENADT_GLOSRY.html), which is documented there.
-   Table buffering only takes place when the CDS entity is accessed by ABAP SQL and the same [restrictions](ABENBUFFER_RESTRICTIONS.html) apply.

abenabap.html abencds.html abencds\_tuning\_objects.html