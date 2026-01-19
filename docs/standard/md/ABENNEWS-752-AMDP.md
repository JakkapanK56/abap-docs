---
title: "ABENNEWS-752-AMDP"
description: |
  ABENNEWS-752-AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-752-AMDP.htm"
abapFile: "ABENNEWS-752-AMDP.html"
keywords: ["if", "method", "class", "data", "types", "ABENNEWS", "752", "AMDP"]
---

[1\. Reference to ABAP Types](#ABAP_MODIFICATION_1@4@)

[2\. AMDP Options](#ABAP_MODIFICATION_2@4@)

[3\. Logical HDI Containers](#ABAP_MODIFICATION_3@4@)

When an [AMDP method](ABENAMDP_METHOD_GLOSRY.html) is implemented in an AMDP class with SQLScript, the following new [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)

[`"$ABAP.type( [name =] abap_type )"`](ABENAMDP_ABAP_TYPES.html)

can be used to reference ABAP types. The ABAP runtime environment replaces these schemas on the database with the associated database types.

The new addition [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html) for [`METHODS`](ABAPMETHODS.html) and [`CLASS-METHODS`](ABAPCLASS-METHODS.html) statements can be used to define attributes of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) in their declaration:

Alongside the existing [logical local database schemas](ABENLOGICAL_DATABASE_SCHEMA_GLOSRY.html), [logical HDI containers](ABENLOGICAL_HDI_CONTAINER_GLOSRY.html) can now be used as further [logical schemas](ABENLOGICAL_SCHEMA_GLOSRY.html) in the [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)\\ [`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html). The mapping of a physical database schema to a logical HDI container is made in the definition of an [ABAP-managed HDI container](ABENAMHC_GLOSRY.html), which itself links [HDI objects](ABENHDI_OBJECT_GLOSRY.html) to the [Change and Transport System (CTS)](ABENCTS_GLOSRY.html).

-   The [`READ-ONLY`](ABAPMETHODS_AMDP_OPTIONS.html) option only allows reads in the implementation of the AMDP methods.
-   The [`CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) option sets the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `CDS_CLIENT` of the database that can be addressed under the name[`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the [ABAP CDS](ABENABAP_CDS_GLOSRY.html) to a particular value when the method is called from ABAP. It avoids the warning from the syntax check and the exception `CX_AMDP_CDS_CLIENT_MISMATCH` when an AMDP method accesses the [CDS managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS view](ABENCDS_VIEW_GLOSRY.html) whose [client handling](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) is determined by the annotation [`@ClientHandling.algorithm: #SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html).

abenabap.html abennews.html abennews-75.html abennews-752.html