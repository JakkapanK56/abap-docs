---
title: "ABENLOCATORS"
description: |
  ABENLOCATORS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOCATORS.htm"
abapFile: "ABENLOCATORS.html"
keywords: ["select", "loop", "if", "method", "class", "data", "types", "ABENLOCATORS"]
---

ABAP SQL supports [locators](ABENLOCATOR_GLOSRY.html) for [LOBs](ABENLOB_GLOSRY.html) in data sources.

The associated [system classes](ABENSYSTEM_CLASS_GLOSRY.html) for the two types of LOBs are:

The instances of the classes are [LOB handles](ABENLOB_HANDLE_GLOSRY.html) and implement the [corresponding interfaces](ABENLOB_INTERFACES.html). Their use in ABAP SQL involves reference variables that point to LOB handles of this type.

Locators contain the following methods that are implemented as [kernel methods](ABENKERNEL_METHOD_GLOSRY.html). The actual access to LOBs is performed by the ABAP runtime framework.

Methods from the `IF_ABAP_CLOSE_RESOURCE` interface:

A locator bound to an LOB, that is, an instance of the class `CL_ABAP_DB_C_LOCATOR` or `CL_ABAP_DB_X_LOCATOR`, can only be created by assigning a LOB from the result set to a reference variable for a locator in the [`INTO`](ABAPINTO_CLAUSE.html) clause of the statement [`SELECT`](ABAPINTO_CLAUSE.html).

See [`SELECT` - LOB Handles](ABENSELECT_INTO_LOB_HANDLES.html).

Locators cannot be created in modifying ABAP SQL statements. Locators created in a read statement can, however, be used to make changes.

Due to high resource consumption, locators must always be closed as soon as possible using their `CLOSE` method. Especially when creating locators in `SELECT` loops, it must be ensured that locators are not closed implicitly using `ENDSELECT`, unlike reader streams, and must be closed explicitly. Furthermore, locators are closed implicitly at the end of a database LUW.

-   `CL_ABAP_DB_C_LOCATOR` for [CLOBs](ABENCLOB_GLOSRY.html).
-   `CL_ABAP_DB_X_LOCATOR` for [BLOBs](ABENBLOB_GLOSRY.html).

-   `GET_LENGTH` returns the length of the LOB that is bound to a locator.
-   `FIND` searches from an offset for a substring of an LOB which is bound to a locator, and returns its position. The length of a character-like substring that can be found using `FIND` is limited to 1333 characters. The length of a binary substring is limited to 2666 bytes.

-   `CLOSE` closes the locator.
-   `IS_CLOSED` returns *X*, if the locator is closed.

-   `GET_SUBSTRING` returns the substring specified using offset and length, of a CLOB which is bound to a locator.

-   `GET_BYTES` returns the substring, specified using offset and length, of a BLOB which is bound to a locator.

-   [Locator, copy column](ABENDB_COPY_ABEXA.html)
-   [Locator, access to column content](ABENDB_LOCATOR_ABEXA.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenstreams\_locators.html