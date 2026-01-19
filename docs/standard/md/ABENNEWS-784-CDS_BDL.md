---
title: "ABENNEWS-784-CDS_BDL"
description: |
  ABENNEWS-784-CDS_BDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-784-CDS_BDL.htm"
abapFile: "ABENNEWS-784-CDS_BDL.html"
keywords: ["if", "types", "ABENNEWS", "784", "CDS", "BDL"]
---

[1\. BDEF Strict Mode](#ABAP_MODIFICATION_1@4@)

[2\. Projection BDEF, New Actions and Functions](#ABAP_MODIFICATION_2@4@)

[3\. Projection BDEF, Authorization Concept](#ABAP_MODIFICATION_3@4@)

[4\. Projection BDEF, Augmented Fields](#ABAP_MODIFICATION_4@4@)

[5\. Projection BDEF, New Field Characteristic](#ABAP_MODIFICATION_5@4@)

[BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) is now available. It can be enabled using the syntax addition [`strict`](ABENBDL_STRICT_1.html) and it applies additional syntax checks to [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

It is now possible to define and implement [new actions and functions](ABENBDL_NONSTANDARD_PROJECTION.html) in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html).

It is now possible to define an [authorization concept](ABENBDL_AUTHORIZATION_PROJECTION.html) in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) that controls access to the newly defined actions and functions in a projection BDEF.

[Field characteristics](ABENBDL_FIELD_PROJECTION.html) can be specified for [augmented fields](ABENBDL_AUGMENT_PROJECTION.html) in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html).

In [projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html), a new field characteristic is available: [`field(suppress)`](ABENBDL_FIELD_PROJECTION.html). It removes the field in question from the BDEF derived types and all RAP APIs.

abenabap.html abennews.html abennews-78.html abennews-784.html abennews-784-restful.html