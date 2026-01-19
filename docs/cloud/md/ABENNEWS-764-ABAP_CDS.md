---
title: "ABENNEWS-764-ABAP_CDS"
description: |
  ABENNEWS-764-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-764-ABAP_CDS.htm"
abapFile: "ABENNEWS-764-ABAP_CDS.html"
keywords: ["if", "data", "types", "ABENNEWS", "764", "ABAP", "CDS"]
---

[1\. Client Handling](#ABAP_MODIFICATION_1@4@)

[2\. Expressions and Functions](#ABAP_MODIFICATION_2@4@)

[3\. Session Variables](#ABAP_MODIFICATION_3@4@)

The new annotation `@ClientHandling` specifies the client handling of [CDS views](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) and [CDS table functions](ABENCDS_FUNC_CLIENT_HANDLING.html). It replaces the annotation `@ClientDependent` and makes it obsolete.

The following enhancements have been implemented:

When a [CDS view](ABENCDS_VIEW_GLOSRY.html) is accessed using ABAP SQL, it is possible to access the new session variable [`$session.system_date`](ABENCDS_SESSION_VARIABLE_V1.html) in which the values of the system field `sy-datum` are available.

-   In a [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html), operands of the types `CLNT`, `LANG`, `TIMS`, and `UNIT` can now be cast to the types `CHAR` and `SSTRING`. Here, the target type must be specified as a data element.

abenabap.html abennews.html abennews-76.html abennews-764.html