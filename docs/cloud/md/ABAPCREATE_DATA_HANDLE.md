---
title: "ABAPCREATE_DATA_HANDLE"
description: |
  ABAPCREATE_DATA_HANDLE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCREATE_DATA_HANDLE.htm"
abapFile: "ABAPCREATE_DATA_HANDLE.html"
keywords: ["if", "method", "class", "data", "types", "internal-table", "ABAPCREATE", "DATA", "HANDLE"]
---

`CREATE DATA dref```\ [`area_handle`]``\\ 
                 `TYPE HANDLE handle.`

The statement `CREATE DATA` uses the addition `HANDLE` to create a data object whose data type is described by an [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html)\\ [type description object](ABENTYPE_OBJECT_GLOSRY.html). For `handle`, a reference variable of the static type of class `CL_ABAP_DATADESCR` or its subclasses that points to a type description object must be specified. The type description object may have been created by using the RTTS methods on existing data objects or by using the dynamic definition of a new data type.

The type description object must describe a non-generic type. Only type description objects for the generic ABAP types `c`, `n`, `p`, and `x` create and use a new [bound data type](ABENBOUND_DATA_TYPE_GLOSRY.html) with the [standard values](ABENBUILT_IN_TYPES_COMPLETE.html). Similarly, a type description object for a standard table with a generic table type creates and uses a new bound table type with a standard key.

Creation of an anonymous data object using a type description object for a dictionary structure that is obtained using [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html).

[Creating a Structure Using RTTC](ABENCREATE_DATA_VIA_RTTC_ABEXA.html)

-   The following are important methods for the dynamic definition of data types:

-   `GET_C`, `GET_D`, `GET_F` ... of the class `CL_ABAP_ELEMDESCR` for type description objects of elementary data types. These create either a new type description object in accordance with the input parameters or reuse an existing type object.
-   `GET` of the classes `CL_ABAP_STRUCTDESCR`, `CL_ABAP_TABLEDESCR`, and `CL_ABAP_REFDESCR` as well as `GET_BY_NAME` of the class `CL_ABAP_REFDESCR` for type description objects of structures, internal tables, and reference variables. These return the type description object that was specified by the input parameters. Either a new type description object is created or an existing one is used again.
-   `CREATE` of the classes `CL_ABAP_STRUCTDESCR`, `CL_ABAP_TABLEDESCR`, and `CL_ABAP_REFDESCR` for creating type description objects for structures, internal tables, and reference variables. These return the type description object that was specified by the input parameters. A new type description object is always created.

-   It is recommended that the `GET` methods are used instead of `CREATE` to avoid creating multiple type description objects for a single type.

DATA dref TYPE REF TO data. \\n\\ \\nFINAL(type) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_name( 'SCARR' ) ). \\n\\ \\nCREATE DATA dref TYPE HANDLE type. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html