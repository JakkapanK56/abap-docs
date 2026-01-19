---
title: "The special interfaces"
description: |
  are used to access the reader and writer streams independently of the stream type(ABENSTREAM_TYPE_GLOSRY.html). For further resource-independent classes and interfaces, as well as for the hierarchy of the object types, see the figure and explanation under Streaming(ABENSTREAMING.html). The metho
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_STREAMING.htm"
abapFile: "ABENABAP_SQL_STREAMING.html"
keywords: ["select", "insert", "update", "loop", "if", "method", "class", "data", "types", "ABENABAP", "SQL", "STREAMING"]
---

ABAP SQL supports [streaming](ABENSTREAMING_GLOSRY.html) for [LOBs](ABENLOB_GLOSRY.html) in data sources.

The [system classes](ABENSYSTEM_CLASS_GLOSRY.html) for the various types of [data streams](ABENDATA_STREAM_GLOSRY.html) are:

The special interfaces

are used to access the reader and writer streams independently of the [stream type](ABENSTREAM_TYPE_GLOSRY.html). For further resource-independent classes and interfaces, as well as for the hierarchy of the object types, see the figure and explanation under [Streaming](ABENSTREAMING.html).

The methods for streaming in ABAP SQL are the same as for general [streaming](ABENSTREAMING.html).

Any [LOBs](ABENLOB_GLOSRY.html) declared in DDIC database tables can be considered as data sources or data sinks. The instances of the classes above are [data streams](ABENDATA_STREAM_GLOSRY.html) bound to LOBs. These are [LOB handles](ABENLOB_HANDLE_GLOSRY.html) and implement the [corresponding interfaces](ABENLOB_INTERFACES.html). Their use in ABAP SQL involves reference variables that point to the relevant LOB handles.

A reader stream that is bound to an LOB, that is, an instance of the class `CL_ABAP_DB_C_READER` or `CL_ABAP_DB_X_READER`, can only be created by assigning a LOB from the result set to a reference variable for a reader stream in the [`INTO`](ABAPINTO_CLAUSE.html) clause of the statement [`SELECT`](ABAPINTO_CLAUSE.html).

See [`SELECT` - LOB Handles](ABENSELECT_INTO_LOB_HANDLES.html).

A writer stream that is bound to an LOB, that is, an instance of the class `CL_ABAP_DB_C_WRITER` or `CL_ABAP_DB_X_WRITER`, can only be created by specifying a reference variable for a reader stream as a source in the statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), or [`MODIFY`](ABAPMODIFY_DBTAB.html). It is not possible to specify more general reference variables.

See [`INSERT`, `UPDATE`, `MODIFY dbtab` - LOB Handles](ABENIUM_LOB.html).

Since the number of simultaneously opened data streams is limited to 16, they should be closed as soon as possible using the `CLOSE` method. Regardless of this, reader streams are closed implicitly at the end of a `SELECT` loop and at the end of a database LUW. An open writer stream is closed implicitly only by using a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). In [database commits](ABENDATABASE_COMMIT_GLOSRY.html), on the other hand, an open writer stream produces the runtime error `COMMIT_STREAM_ERROR`.

-   `CL_ABAP_DB_C_READER` for character-like reader streams. The [streaming data source](ABENSTREAMING_DATA_SOURCE_GLOSRY.html) is a [CLOB](ABENCLOB_GLOSRY.html).
-   `CL_ABAP_DB_X_READER` for binary reader streams. The [streaming data source](ABENSTREAMING_DATA_SOURCE_GLOSRY.html) a [BLOB](ABENBLOB_GLOSRY.html).
-   `CL_ABAP_DB_C_WRITER` for character-like writer streams. The [streaming data sink](ABENSTREAMING_DATA_SINK_GLOSRY.html) is a [CLOB](ABENCLOB_GLOSRY.html).
-   `CL_ABAP_DB_X_WRITER` for binary writer streams. The [streaming data sink](ABENSTREAMING_DATA_SINK_GLOSRY.html) a [BLOB](ABENBLOB_GLOSRY.html).

-   `IF_ABAP_DB_READER`
-   `IF_ABAP_DB_WRITER`

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenstreams\_locators.html