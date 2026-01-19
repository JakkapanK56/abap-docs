---
title: "ABENCDS_DEFINE_DELEGATED_BUFFER"
description: |
  ABENCDS_DEFINE_DELEGATED_BUFFER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DEFINE_DELEGATED_BUFFER.htm"
abapFile: "ABENCDS_DEFINE_DELEGATED_BUFFER.html"
keywords: ["ABENCDS", "DEFINE", "DELEGATED", "BUFFER"]
---

`...TYPE DELEGATED...`

Defines a [CDS delegated buffer](ABENCDS_DEL_BUFFER_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html).

A CDS delegated buffer is a [CDS view entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) that delegates the buffer usage of a CDS view entity to the buffer of its base object. This means that the buffer of the base entity is used and there aren't multiple buffers created for the same view stack, saving memory on the [AS ABAP](ABENAS_ABAP_GLOSRY.html).

A delegated buffer is defined as a CDS view entity buffer with the buffering type set to the value `TYPE DELEGATED`. The CDS view entity to be buffered must contain the annotation `@AbapCatalog.entityBuffer.definitionType: [#DELEGATED]`. Further prerequisites and limitations are described in the topic [CDS DDL - `DEFINE VIEW | TABLE ENTITY BUFFER`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html).

The following can be included in the buffered CDS view entity:

The following restrictions apply to the delegated buffered CDS view entity:

-   [CDS source fields](ABENCDS_FIELD_GLOSRY.html)
-   [Typed literals](ABENTYPED_LITERAL_GLOSRY.html)
-   [Session variables](ABENSESSION_VARIABLE_GLOSRY.html)
-   Cast function
-   `WHERE` clause with operators `AND`, `OR`, `NOT`, `>`, `<`, `>=`, `<=`, `<>`, `IS [NOT] NULL`, `LIKE`
-   Association definition and exposure, including filters

-   Only one base object is allowed
-   No `UNION`, no `GROUP-BY`
-   All generically-buffered key fields have to be unambiguously bound or exposed
-   For single buffered base objects: all key fields have to be bound or exposed

abenabap.html abencds.html abencds\_tuning\_objects.html abencds\_entity\_buffers.html abencds\_define\_view\_entity\_buffer.html