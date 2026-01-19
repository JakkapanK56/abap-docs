---
title: "ABENCDS_DYNAMIC_EE_GLOSRY"
description: |
  ABENCDS_DYNAMIC_EE_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DYNAMIC_EE_GLOSRY.htm"
abapFile: "ABENCDS_DYNAMIC_EE_GLOSRY.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "DYNAMIC", "GLOSRY"]
---

A [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) that does not specify a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) in its [data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html), but instead uses the addition [`PROVIDED AT RUNTIME`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html). The logical external schema for a dynamic external entity must be provided as a part of the [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ `SELECT` statement when accessing the external entity, using a `PROVIDED BY` clause. Dynamic external entities can only be accessed by ABAP SQL; they cannot be used as a data source for other [CDS entities](ABENCDS_ENTITY_GLOSRY.html).

[**\-> More about**](ABENCDS_DEFINE_EXTERNAL_ENTITY.html)

ABENCDS\_GLOSSARY.html