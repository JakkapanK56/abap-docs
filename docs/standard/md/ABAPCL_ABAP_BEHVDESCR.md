---
title: "ABAPCL_ABAP_BEHVDESCR"
description: |
  ABAPCL_ABAP_BEHVDESCR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCL_ABAP_BEHVDESCR.htm"
abapFile: "ABAPCL_ABAP_BEHVDESCR.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABAPCL", "ABAP", "BEHVDESCR"]
---

The `CL_ABAP_BEHVDESCR` class includes methods for [Runtime Type Creation (RTTI)](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) and [Runtime Type Creation (RTTC)](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) in the context of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) in RAP. This means that BDEF derived type information can be retrieved at runtime. Derived types can also be defined at runtime.

The following list shows some of the available methods:

For more information, see the class documentation and the [Runtime Type Services (RTTS)](ABENRTTI.html) topic.

[Getting Type Information Using `CL_ABAP_BEHVDESCR`](ABENRAP_TYPE_INFO_ABEXA.html)

-   `GET_ROOT`, `GET_ROOTS_OF_ENTITIES`: Getting the root entity or entities for a given entity
-   `GET_TYPE`: Getting runtime type information for entities and operations
-   `CREATE_DATA`: Creating data objects typed with BDEF derived types (CRUD or action)
-   `GET_ABS_TYPENAME`: Getting the [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html) for entities and operations
-   `SET_CONTROL_FLAG`, `GET_CONTROL_FLAG`, `GET_CONTROL_FIELDS`: Filling or getting [`%control`](ABAPDERIVED_TYPES_CONTROL.html) fields
-   `GET_FOREIGN_ENTITIES`: Getting [RAP foreign entities](ABENRAP_FOREIGN_ENTITY_GLOSRY.html) and aliases
-   `GET_CONTRACTS`: Getting [API classification](ABAPAPI_CLASSIFICATION.html)

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_rap\_other.html abaprap\_system\_classes.html