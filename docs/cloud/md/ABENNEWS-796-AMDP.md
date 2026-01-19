---
title: "ABENNEWS-796-AMDP"
description: |
  ABENNEWS-796-AMDP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-796-AMDP.htm"
abapFile: "ABENNEWS-796-AMDP.html"
keywords: ["if", "method", "class", "ABENNEWS", "796", "AMDP"]
---

[1. New AMDP Option `CDS SESSION CLIENT DEPENDENT`](#ABAP_MODIFICATION_1@4@)

[2\. Client Safety of AMDP Methods](#ABAP_MODIFICATION_2@4@)

The new addition [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) can be used after [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html) to set the HANA session variable `CDS_CLIENT` to its default value and to declare the [AMDP method](ABENAMDP_METHOD_GLOSRY.html) explicitly as [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) and to make it [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

The addition can be also used as an option after [`FOR DDL`](ABAPCLASS-METHODS_FOR_DDL_OBJECT.html).

In order to support the concept of [client isolation](ABENCLIENT_ISOLATION_GLOSRY.html), AMDP methods can be made [client-safe](ABENAMDP_CLIENT_SAFETY.html). This is mandatory for [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).

abenabap.html abennews.html abennews-79.html abennews-796.html