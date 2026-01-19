---
title: "ABENNEWS-640-FIELD_SYMBOLS"
description: |
  ABENNEWS-640-FIELD_SYMBOLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-FIELD_SYMBOLS.htm"
abapFile: "ABENNEWS-640-FIELD_SYMBOLS.html"
keywords: ["method", "class", "types", "field-symbol", "ABENNEWS", "640", "FIELD", "SYMBOLS"]
---

The new addition [`HANDLE`](ABAPASSIGN_CASTING.html) of the statement [`ASSIGN`](ABAPASSIGN.html) can be used to refer to the [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html)\\ [type description objects](ABENTYPE_OBJECT_GLOSRY.html) when [casting](ABENCAST_CASTING_GLOSRY.html) field symbols.

From ABAP release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for ABAP release 6.40](ABENNEWS-640-RTTI.html)). Together with the addition `HANDLE`, this makes it possible to cast to any existing or dynamically created types at program runtime.

abenabap.html abennews.html abennews-6.html abennews-640.html