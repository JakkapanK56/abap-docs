---
title: "ABENCDS_FDL"
description: |
  ABENCDS_FDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_FDL.htm"
abapFile: "ABENCDS_FDL.html"
keywords: ["do", "if", "data", "types", "ABENCDS", "FDL"]
---

[CDS function definitions](ABENCDS_FUNCTION_DEFINITION_GLOSRY.html) are defined in the CDS function definition language ([CDS FDL](ABENCDS_FDL_GLOSRY.html)) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html). CDS function definitions allow the definition of user-defined [CDS functions](ABENCDS_FUNCTION_GLOSRY.html) that encapsulate algorithms into reusable code which can be used operand positions of [CDS entities](ABENCDS_ENTITY_GLOSRY.html). CDS function definitions can be used to define the following [CDS functions](ABENCDS_FUNCTION_GLOSRY.html):

-   [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html)

-   [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) are [CDS data definitions](ABENCDS_DATA_DEFINITION_GLOSRY.html) defined in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html). CDS table functions encapsulate AMDP functions, but they are [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and they belong to the technical category of [CDS data definitions](ABENCDS_DATA_DEFINITION_GLOSRY.html). CDS table functions have the characteristics of CDS data definitions: they can be used as data source in other CDS entities and for typing in ABAP using the `TYPE` statement. Despite the name, a CDS table function is not a CDS function definition.
-   The FDL source code of a function definition for a CDS function is edited in a different editor than the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html), the [DDLA source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) of a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html), the [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) of a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html), and the [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) of a [CDS role](ABENCDS_ROLE_GLOSRY.html) for [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html). The [ADT](ABENADT_GLOSRY.html) documentation describes how to create the different types of source code.

abenabap.html abencds.html