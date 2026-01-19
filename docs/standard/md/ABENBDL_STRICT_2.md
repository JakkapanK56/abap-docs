---
title: "ABENBDL_STRICT_2"
description: |
  ABENBDL_STRICT_2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_STRICT_2.htm"
abapFile: "ABENBDL_STRICT_2.html"
keywords: ["update", "delete", "do", "if", "method", "class", "ABENBDL", "STRICT"]
---

`... strict(2); ...`

The addition `strict(2)` enables [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html), version 2. When strict mode is switched on, outdated syntax which normally produces a syntax check warning leads to a syntax check error. Strict mode version 2 introduces mainly stricter checks for the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). Contract violations lead to [runtime errors](ABENRUNTIME_ERROR_GLOSRY.html), instead of failed [assertions](ABENASSERTION_GLOSRY.html). Strict mode version 2 is a prerequisite for releasing a RAP BO under the [C0 contract for extensibility](ABENC0_CONTRACT_GLOSRY.html).

Strict mode version 2 must always appear as the second line in a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

Strict mode version 2 applies all checks from strict mode version 1, plus some additional syntax checks.

A complete list of additional syntax requirements in BDEF strict mode version 2 is provided in the development guide for the ABAP RESTful Application Programming Model, section [Strict Mode - Implementation Requirements](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/761d389302e8463a9c3509907f22f22f?version=sap_cross_product_abap).

Related information:

[RAP BDL - BDEF Strict Mode](ABENBDL_STRICT.html)

[RAP BDL - `strict`](ABENBDL_STRICT_1.html)

The following RAP behavior definition `DEMO_RAP_BASE_DET_VAL` is based on the CDS view entity `DEMO_RAP_BASE_DET_VAL`. It is intended to be released as API for extensibility under the C0 contract. Therefore, it uses `strict(2)`.

**Note** This RAP behavior definition demonstrates the design of a released API, but it is not actually released for C0. **Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) of the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) are not implemented here. managed implementation in class bp\_demo\_rap\_base\_det\_val unique;\\nstrict(2);\\nextensible\\n\\{ with determinations on modify;\\n with determinations on save;\\n with validations on save; \\}\\n\\ndefine behavior for DEMO\_RAP\_BASE\_DET\_VAL\\npersistent table DEMO\_DBTAB\_ROOT\\nlock master\\nauthorization master ( instance, global )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n field(readonly:update) key\_field;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html abenbdl\_strict.html