---
title: "ABENNEWS-816-AMDP"
description: |
  ABENNEWS-816-AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-816-AMDP.htm"
abapFile: "ABENNEWS-816-AMDP.html"
keywords: ["if", "method", "class", "ABENNEWS", "816", "AMDP"]
---

[1. New AMDP Option `CDS SESSION CLIENT DEPENDENT`](#ABAP_MODIFICATION_1@4@)

[2\. Client Safety of AMDP Methods](#ABAP_MODIFICATION_2@4@)

[3. `FOR SQL SERVICE`](#ABAP_MODIFICATION_3@4@)

The new addition [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) can be used after [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html) to set the HANA session variable `CDS_CLIENT` to its default value and to declare the [AMDP method](ABENAMDP_METHOD_GLOSRY.html) explicitly as [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) and to make it [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

The addition can be also used as an option after [`FOR DDL`](ABAPCLASS-METHODS_FOR_DDL_OBJECT.html).

In order to support the concept of [client isolation](ABENCLIENT_ISOLATION_GLOSRY.html), AMDP methods can be made [client-safe](ABENAMDP_CLIENT_SAFETY.html). This is mandatory for [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).

A new addition [`FOR SQL SERVICE`](ABAPCLASS-METHODS_FOR_SQL_SERVICE.html) to the statement `CLASS-METHODS` specifies that an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) is intended to be exposed for external SQL access using an [SQL service](ABENABAP_SQL_SERVICES_GLOSRY.html).

abenabap.html abennews.html abennews-81.html abennews-816.html