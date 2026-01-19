---
title: "In the statement"
description: |
  `CREATE DATA dref TYPE REF TO (name).`(ABAPCREATE_DATA_REFERENCE.html) it is now also possible to specify a data type in `name`. Previously, it was only possible to specify classes and interfaces. This change was also transported to ABAP release 6.20. Previously, only non-generic table types could
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-CREATE.htm"
abapFile: "ABENNEWS-640-CREATE.html"
keywords: ["if", "case", "method", "class", "data", "types", "ABENNEWS", "640", "CREATE"]
---

[1. Reference to a Type Description Object in `CREATE DATA`](#ABAP_MODIFICATION_1@4@)

[2. Any Reference Type in `CREATE DATA`](#ABAP_MODIFICATION_2@4@)

[3. Reference to a Generic Table Type in `CREATE DATA`](#ABAP_MODIFICATION_3@4@)

The new addition [`HANDLE`](ABAPCREATE_DATA_HANDLE.html) of the statement [`CREATE DATA`](ABAPCREATE_DATA.html) makes it possible to reference [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html)\\ [type description objects](ABENTYPE_OBJECT_GLOSRY.html) when data objects are created.

From ABAP release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for ABAP release 6.40](ABENNEWS-640-RTTI.html)). Together with the addition `HANDLE`, this allows the dynamic construction of any type of data objects for the program runtime.

In the statement

[`CREATE DATA dref TYPE REF TO (name).`](ABAPCREATE_DATA_REFERENCE.html)

it is now also possible to specify a data type in `name`. Previously, it was only possible to specify classes and interfaces.

This change was also transported to ABAP release 6.20.

Previously, only non-generic table types could be specified in [`CREATE DATA - TYPE`](ABAPCREATE_DATA_EXISTING.html). As of ABAP release 6.40, table types with generic keys can also be specified. In this case, a new linked table type with a standard key is created and used.

abenabap.html abennews.html abennews-6.html abennews-640.html