---
title: "ABENHANA_VIRTUAL_TABLE_GLOSRY"
description: |
  ABENHANA_VIRTUAL_TABLE_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENHANA_VIRTUAL_TABLE_GLOSRY.htm"
abapFile: "ABENHANA_VIRTUAL_TABLE_GLOSRY.html"
keywords: ["do", "if", "data", "ABENHANA", "VIRTUAL", "TABLE", "GLOSRY"]
---

A named, SAP HANA-local proxy object that represents a database object, such as a table or a view, in an external system. A virtual table can be accessed and queried as a normal table or view, allowing you to access data from a remote object in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) as if the data were stored in local tables. The [SAP HANA Smart Data Access](ABENSAP_HANA_SDA_GLOSRY.html) technology uses virtual tables to communicate with external systems.

For [dynamic external entities](ABENCDS_DYNAMIC_EE_GLOSRY.html), a virtual table is created as a representation of the remote database object to be read. This is done implicitly by the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) of [AS ABAP](ABENAS_ABAP_GLOSRY.html) as soon as the external entity is accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html) under the precondition that a configured [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) is available.

ABENTECHNO\_GLOSSARY.html