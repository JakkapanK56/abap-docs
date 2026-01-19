---
title: "ABENSTREAMING_CLASSES_INTERFACES"
description: |
  ABENSTREAMING_CLASSES_INTERFACES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTREAMING_CLASSES_INTERFACES.htm"
abapFile: "ABENSTREAMING_CLASSES_INTERFACES.html"
keywords: ["if", "case", "method", "class", "data", "internal-table", "ABENSTREAMING", "CLASSES", "INTERFACES"]
---

The classes and interfaces of streams are in the package `SABP_STREAMS_AND_LOCATORS`. Interfaces and classes that have been released for use are exposed in their package interface `SABP_STREAMS_AND_LOCATORS`. The following figure shows the hierarchy of the most important interfaces and classes for streams.

The classes for data streams and filter streams are the templates for data stream objects and filter stream objects.

The classes for the data stream category start with `CL_ABAP_`, followed by

The classes for the filter stream category start with `CL_ABAP_FILTER_`, followed by the IDs `type` and `direction` with the same meanings as for data stream classes. Currently, no filter streams are implemented.

All public methods of the data stream and filter stream classes are declared in interfaces which allow general access to the classes.

Data stream classes inherit `CL_ABAP_TYPE_direction` from abstract superclasses. In these classes, methods are implemented that are dependent on the stream type and stream direction but independent of the resource.

In the case of data streams, the following methods. The actual access to the [streaming data source](ABENSTREAMING_DATA_SOURCE_GLOSRY.html) or [streaming data sink](ABENSTREAMING_DATA_SINK_GLOSRY.html) is completed by the ABAP runtime framework.

Methods from the interface `IF_ABAP_READER`:

Methods from the interface `IF_ABAP_WRITER`:

Methods from the `IF_ABAP_CLOSE_RESOURCE` interface:

-   [LOBs](ABENLOB_GLOSRY.html) in database tables; the associated resource ID is *[DB](ABENABAP_SQL_STREAMING.html)*.
-   [Strings](ABENSTRING_GLOSRY.html); the associated resource ID is [*STRING*](ABENSTRING_STREAMS.html).
-   [Internal tables](ABENINTERNAL_TABLE_GLOSRY.html); the associated resource ID is [*ITAB*](ABENITAB_STREAMS.html).

-   The `IF_ABAP_direction` interface enables general access to all reader and writer streams.
-   The `IF_ABAP_TYPE_direction` interface enables a type-dependent access to reader and writer streams.
-   The `IF_ABAP_RESOURCE_direction` interface enables resource-dependent access to reader and writer streams.
-   The `IF_ABAP_CLOSE_RESOURCE` interface contains the `CLOSE` method, which is required by all stream kinds in order to close an open resource. This also applies to filter streams, since these are usually connected to data streams and the resource can then only be closed using the filter stream.

-   `DATA_AVAILABLE` returns *X* if there is still data in the reader stream.
-   `IS_X_READER` returns *X* if it is a binary stream.
-   `READ` returns a string with a predefined number of bytes or characters from the reader stream.
-   `SKIP` skips a predefined number of bytes or characters from the reader stream.

-   `WRITE` writes the content of a passed string to a writer stream.

-   `CLOSE` closes the stream.
-   `IS_CLOSED` returns *X* if the stream is closed.

1.  an ID `resource` for the resource that is used as a [streaming data source](ABENSTREAMING_DATA_SOURCE_GLOSRY.html) or a [streaming data sink](ABENSTREAMING_DATA_SINK_GLOSRY.html). Currently, data streams are supported for the following resources:

-   [LOBs](ABENLOB_GLOSRY.html) in database tables; the associated resource ID is *[DB](ABENABAP_SQL_STREAMING.html)*.
-   [Strings](ABENSTRING_GLOSRY.html); the associated resource ID is [*STRING*](ABENSTRING_STREAMS.html).
-   [Internal tables](ABENINTERNAL_TABLE_GLOSRY.html); the associated resource ID is [*ITAB*](ABENITAB_STREAMS.html).

3.  an ID `type` for the stream type. Here the IDs *C* and *X* are possible for the binary streams or character streams.
4.  an ID `direction` for the stream direction. Here the IDs *READER* and *WRITER* are possible for reader streams or writer streams.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenstreaming.html