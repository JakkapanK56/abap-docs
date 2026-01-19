---
title: "ABENNEWS-780-ABAP_SQL"
description: |
  ABENNEWS-780-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-780-ABAP_SQL.htm"
abapFile: "ABENNEWS-780-ABAP_SQL.html"
keywords: ["select", "if", "data", "types", "ABENNEWS", "780", "ABAP", "SQL"]
---

[1\. Further Data Types Allowed in Elementary SQL Expressions](#ABAP_MODIFICATION_1@4@)

[2. New Type Conversion Function `to_blob`](#ABAP_MODIFICATION_2@4@)

[3\. Hierarchy Load Options](#ABAP_MODIFICATION_3@4@)

[4\. Typed Literals](#ABAP_MODIFICATION_4@4@)

[Elementary SQL expressions](ABENSQL_ELEM.html) can now also have the dictionary data types `STRING` and `RAWSTRING`.

ABAP SQL now supports the new [type conversion function](ABENSQL_TYPE_CONV_FUNC.html)\\ [`to_blob`](ABENSQL_TYPE_CONV_FUNC.html).

The [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) can now use the new addition `LOAD BULK|INCREMENTAL|load_option` to specify the load policy for a generated hierarchy.

[Typed literals](ABENABAP_SQL_TYPED_LITERALS.html) for many ABAP Dictionary types are now available in ABAP SQL.

abenabap.html abennews.html abennews-78.html abennews-780.html