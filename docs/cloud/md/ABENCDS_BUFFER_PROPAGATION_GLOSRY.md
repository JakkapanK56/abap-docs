---
title: "ABENCDS_BUFFER_PROPAGATION_GLOSRY"
description: |
  ABENCDS_BUFFER_PROPAGATION_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_BUFFER_PROPAGATION_GLOSRY.htm"
abapFile: "ABENCDS_BUFFER_PROPAGATION_GLOSRY.html"
keywords: ["data", "ABENCDS", "BUFFER", "PROPAGATION", "GLOSRY"]
---

Buffer propagation means that the joins defined by a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) are processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) on data stored in the [table buffer](ABENTABLE_BUFFER_GLOSRY.html). Instead of using joins instantiated on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), temporary joins for processing the table buffer are established on the [AS ABAP](ABENAS_ABAP_GLOSRY.html). This can lead to performance gains.

[**\-> More about**](ABENCDS_PROPAGATE_BUFFER.html)

ABENCDS\_GLOSSARY.html