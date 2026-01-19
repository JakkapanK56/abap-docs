---
title: "ABENLOB_INTERFACES"
description: |
  ABENLOB_INTERFACES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOB_INTERFACES.htm"
abapFile: "ABENLOB_INTERFACES.html"
keywords: ["select", "insert", "update", "if", "class", "ABENLOB", "INTERFACES"]
---

ABAP SQL supports access to [LOBs](ABENLOB_GLOSRY.html) using [streams](ABENABAP_SQL_STREAMING.html) and [locators](ABENLOCATORS.html). For similar reads on these streams and locators, there are the interfaces

which both include the superordinate interface

which then also includes the interface `IF_ABAP_CLOSE_RESOURCE`.

The connection to streams and locators is as follows:

The instances of the system classes that implement the interface `IF_ABAP_DB_LOB_HANDLE` are called [LOB handles](ABENLOB_HANDLE_GLOSRY.html).

-   `IF_ABAP_DB_BLOB_HANDLE` and
-   `IF_ABAP_DB_CLOB_HANDLE`,

-   `IF_ABAP_DB_LOB_HANDLE`

-   The system classes `CL_ABAP_DB_C_READER` and `CL_ABAP_DB_C_LOCATOR` both implement the interface `IF_ABAP_DB_CLOB_HANDLE`.
-   The system classes `CL_ABAP_DB_X_READER` and `CL_ABAP_DB_X_LOCATOR` both implement the interface `IF_ABAP_DB_BLOB_HANDLE`.
-   The interface `IF_ABAP_DB_READER` includes `IF_ABAP_DB_LOB_HANDLE`.

-   The LOB interfaces shown here can only be used for reads. Reference variables for LOB handles that are specified as read targets of the [`INTO` clause](ABAPINTO_CLAUSE.html) in the [`SELECT`](ABAPSELECT.html) statement can be typed statically using these interfaces. The class used to create the object must then be specified using the special addition [`CREATING`](ABAPSELECT_CREATING.html) in the statement `SELECT`. For writes with the statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), or [`MODIFY`](ABAPMODIFY_DBTAB.html), the reference variables that are used as a source must be typed using the classes for writer streams or locators.
-   The LOB interfaces shown here cannot be used in combination with SQL expressions. To use streaming and locators on SQL expressions, the system classes for handling LOBs must be used directly.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenstreams\_locators.html