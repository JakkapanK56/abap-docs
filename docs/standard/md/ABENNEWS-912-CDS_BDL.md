---
title: "ABENNEWS-912-CDS_BDL"
description: |
  ABENNEWS-912-CDS_BDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-912-CDS_BDL.htm"
abapFile: "ABENNEWS-912-CDS_BDL.html"
keywords: ["if", "class", "ABENNEWS", "912", "CDS", "BDL"]
---

[1\. ABP Auxiliary Class](#ABAP_MODIFICATION_1@4@)

[2. Abstract BDEF, `with hierarchy like entity`](#ABAP_MODIFICATION_2@4@)

[3\. BDEF Alternative Keys for Managed and Unmanaged Behavior Definitions](#ABAP_MODIFICATION_3@4@)

The new statement [`auxiliary class`](ABENBDL_AUXILIARY_CLASS.html) can be used to specify one or more [ABP auxiliary classes](ABENABP_AUX_CLASS_GLOSRY.html) that allow the outsourcing of functionality from an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The primary purpose of an ABP auxiliary class is to allow developers to concurrently implement [RAP behavior](ABENRAP_BEHAVIOR_GLOSRY.html).

The new addition [`with hierarchy like entity`](ABENBDL_BDEF_ABSTRACT_HEADER.html) can now be used in the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) of an [abstract behavior definition](ABENCDS_ABSTRACT_BDEF_GLOSRY.html). It imposes stricter syntax checks to ensure compatibility between the hierarchical BDEF derived type of the abstract BDEF in question and the structured type of the underlying CDS entity.

[BDEF pure keys](ABENRAP_PURE_KEY_GLOSRY.html) and [BDEF secondary keys](ABENRAP_SECONDARY_KEY_GLOSRY.html) are now available. They define the signature of a [RAP key function](ABENRAP_KEY_FUNCTION_GLOSRY.html).

abenabap.html abennews.html abennews-91.html abennews-912.html abennews-912-restful.html