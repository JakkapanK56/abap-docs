---
title: "ABENSELECT_INTO_LOB_HANDLES"
description: |
  ABENSELECT_INTO_LOB_HANDLES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_INTO_LOB_HANDLES.htm"
abapFile: "ABENSELECT_INTO_LOB_HANDLES.html"
keywords: ["select", "while", "if", "case", "method", "class", "data", "ABENSELECT", "INTO", "LOB", "HANDLES"]
---

In a standalone [`SELECT`](ABAPSELECT.html) statement or a [`WITH`](ABAPWITH.html) statement, but not in a [`FETCH`](ABAPFETCH.html) statement, [LOB handles](ABENLOB_HANDLE_GLOSRY.html) can be created as [reader streams](ABENREADER_STREAM_GLOSRY.html) and as [locators](ABENLOCATOR_GLOSRY.html) in the [`INTO`](ABAPINTO_CLAUSE.html) clause.

An [LOB](ABENLOB_GLOSRY.html) from the result set can be assigned to an [LOB handle component](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) of a work area, or to an individual reference variable for an LOB handle. The static type of all LOB handle components must contain the [interface](ABENOO_INTF_GLOSRY.html)\\ `IF_ABAP_DB_LOB_HANDLE` and match the corresponding [data source](ABAPSELECT_DATA_SOURCE.html) component, that is, they must be less specific or the same as one of the following system classes for [streaming](ABENABAP_SQL_STREAMING.html) or [locators](ABENLOCATORS.html):

The [stream type](ABENSTREAM_TYPE_GLOSRY.html) or [locator type](ABENLOCATOR_TYPE_GLOSRY.html) must match the data type of the LOBs.

If an [LOB](ABENLOB_GLOSRY.html) from the result set of a selection is assigned to an LOB handle component of a work area or to an individual reference variable for an [LOB handle](ABENLOB_HANDLE_GLOSRY.html), either

and after the execution of the `SELECT` statement the reference variable points to the object. The class used is determined using the data type of the column of the result sets and the static type of the target variable, or using the addition [`CREATING`](ABAPSELECT_CREATING.html) if required. The LOB to be read can be evaluated or forwarded using LOB handle methods.

An LOB handle created in this way, that is, a reader stream or a locator, exists until it:

Reader streams, but not locators, are also closed implicitly by the statement [`ENDSELECT`](ABAPENDSELECT.html).

Accessing a closed LOB handle produces a runtime error.

Special properties of open reader streams and locators:

The following restrictions apply:

A LOB handle should always be closed as soon as possible using its method `CLOSE`. See also [Streaming and Locators](ABENSTREAMS_LOCATORS.html).

Reading of a BLOB to a reader stream.

-   `CL_ABAP_DB_C_READER` or `CL_ABAP_DB_C_LOCATOR` in the case of [CLOBs](ABENCLOB_GLOSRY.html).
-   `CL_ABAP_DB_X_READER` or `CL_ABAP_DB_X_LOCATOR` in the case of [BLOBs](ABENBLOB_GLOSRY.html).

-   a [reader stream](ABENREADER_STREAM_GLOSRY.html) is created as an instance of one of the classes `CL_ABAP_DB_C_READER`, `CL_ABAP_DB_X_READER` or,
-   a [locator](ABENLOCATOR_GLOSRY.html) is created as an instance of one of the classes `CL_ABAP_DB_C_LOCATOR` or `CL_ABAP_DB_X_LOCATOR`

-   is closed explicitly using its `CLOSE` method from the `IF_ABAP_CLOSE_RESOURCE` interface, or
-   is closed implicitly at the end of the current [database LUW](ABENDATABASE_LUW_GLOSRY.html).

-   As long as a reader stream for an ABAP SQL statement is still open, the associated database is not closed. This state can only occur with [`SELECT SINGLE`](ABAPSELECT_SINGLE.html), since there is no implicit termination of the reader stream using `ENDSELECT`. In this case, a reference to an object of the class `CL_ABAP_SQL_SELECT_STATEMENT`, a subclass of `CL_ABAP_SQL_STATEMENT_HANDLE`, can be obtained from the interface `IF_ABAP_DB_READER` using the method `GET_STATEMENT_HANDLE` before closing the reader stream. The methods of the abstract superclass implemented there can be used to check the state of the ABAP SQL statement, and all streams that are still open can be closed.
-   It is guaranteed that, once created, a locator always works with the same LOB data. If the associated LOB column is modified while a locator is open, an internal copy of the LOB data for the locator is created on the database first.

-   A maximum of 16 data streams can be opened for an ABAP SQL statement.
-   In a [database LUW](ABENDATABASE_LUW_GLOSRY.html) there can be a maximum of 16 ABAP SQL statements whose data streams are open at the same time.
-   A maximum of 1000 LOB handles can be open in a [database LUW](ABENDATABASE_LUW_GLOSRY.html).
-   If LOB handles are created together with the addition [`SINGLE`](ABAPSELECT_SINGLE.html), all primary key fields in logical expressions joined using `AND` in the [`WHERE` condition](ABAPWHERE.html) are checked for equality.

-   [Reader stream, read database table](ABENDB_READER_ABEXA.html)
-   [Locator, copy column](ABENDB_COPY_ABEXA.html)
-   [Locator, access to column content](ABENDB_LOCATOR_ABEXA.html)

DATA reader TYPE REF TO cl\_abap\_db\_x\_reader. \\n\\ \\nSELECT SINGLE picture \\n FROM demo\_blob\_table \\n WHERE name = '...' \\n INTO @reader. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapinto\_clause.html