---
title: "ABENNEWS-914-EML"
description: |
  ABENNEWS-914-EML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-914-EML.htm"
abapFile: "ABENNEWS-914-EML.html"
keywords: ["if", "method", "types", "ABENNEWS", "914", "EML"]
---

[1\. Runtime Type Service Method for BDEF Derived Types](#ABAP_MODIFICATION_1@4@)

[2\. Using Custom Secondary Table Keys in BDEF Derived Types](#ABAP_MODIFICATION_2@4@)

[3\. New Contract Checks](#ABAP_MODIFICATION_3@4@)

[Runtime Type Services](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) now offer a method to dynamically and type-safely create BDEF derived types. See the topic [here](ABAPDERIVED_TYPES_DYNAMIC.html).

It is possible to create your own secondary table keys for BDEF derived types, and use them in ABAP statements. Find more information [here](ABAPDERIVED_TYPES_SECONDARY_KEYS.html).

The following [contract checks](ABAPRAP_IMPL_RULES.html) have been added:

Violations result in the runtime error `BEHAVIOR_BAD_HANDLER_RESPONSE`.

-   Disallowed entries in the `failed` response parameter
-   Entries with wrong fail causes in the `failed` response parameter
-   Entries with non-initial `%state_area` components in the `reported` response in various contexts

abenabap.html abennews.html abennews-91.html abennews-914.html abennews-914-restful.html