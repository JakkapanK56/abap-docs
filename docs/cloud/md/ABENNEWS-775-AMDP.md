---
title: "ABENNEWS-775-AMDP"
description: |
  ABENNEWS-775-AMDP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-775-AMDP.htm"
abapFile: "ABENNEWS-775-AMDP.html"
keywords: ["if", "method", "data", "ABENNEWS", "775", "AMDP"]
---

[1. Specifying CDS Entities After `USING`](#ABAP_MODIFICATION_1@4@)

In the implementation of the AMDP method, the name of the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) can now be specified after the [`USING`](ABAPMETHOD_BY_DB_PROC.html) addition for [CDS views](ABENCDS_VIEW_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), and [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html). The name of the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a CDS view or of the [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html) of a CDS table function can still be specified, but is best replaced by specifying CDS entities. If a CDS entity is specified, all other database objects of CDS entities must be also be specified using this entity.

abenabap.html abennews.html abennews-77.html abennews-775.html