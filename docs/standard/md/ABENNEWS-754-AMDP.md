---
title: "ABENNEWS-754-AMDP"
description: |
  ABENNEWS-754-AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-754-AMDP.htm"
abapFile: "ABENNEWS-754-AMDP.html"
keywords: ["if", "method", "data", "ABENNEWS", "754", "AMDP"]
---

[1. Specifying CDS Entities After `USING`](#ABAP_MODIFICATION_1@4@)

[2\. Quotation Marks for Logical Schemas](#ABAP_MODIFICATION_2@4@)

In the implementation of the AMDP method, the name of the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) can now be specified after the [`USING`](ABAPMETHOD_BY_DB_PROC.html) addition for [CDS views](ABENCDS_VIEW_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), and [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html). The name of the [CDS managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a CDS view or of the [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html) of a CDS table function can still be specified, but is best replaced by specifying CDS entities. If a CDS entity is specified, all other database objects of CDS entities must be also be specified using this entity.

If the predefined [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)\\ [`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html) is specified for a [logical schema](ABENLOGICAL_SCHEMA_GLOSRY.html), the optional addition `quote` can now be used to define which quotation marks are used when the macro is replaced.

abenabap.html abennews.html abennews-75.html abennews-754.html