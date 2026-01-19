---
title: "ABENNEWS-30-OLE"
description: |
  ABENNEWS-30-OLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-OLE.htm"
abapFile: "ABENNEWS-30-OLE.html"
keywords: ["method", "ABENNEWS", "OLE"]
---

In ABAP release 3.0, the ABAP interpreter command set has been expanded to include key words that allow application programmers to edit external objects. OLE2 was supported as the first object model. The new language elements

make it possible to address all applications that provide functions in the form of an OLE2 Automation Server from ABAP. Examples of this are Microsoft products such as EXCEL or WINWORD.

All applications addressed from ABAP must be entered in a table edited using the transaction `SOLE`. This table defines whether type information exists for an application. The type information describes all the objects that an application can handle, all their methods and properties, and their parameters. It can be loaded into an [AS ABAP](ABENAS_ABAP_GLOSRY.html) so that the ABAP processor can perform the necessary type conversions and is not dependent on the language of the OLE application.

SAP recommends that only the English names of the methods and object properties are used in ABAP. In this way, the ABAP program can edit the applications, regardless of the language in which they were installed.

The transaction `OLE` makes it possible to activate 3 OLE servers and to test methods and properties by pressing certain keys.

Apart from the ABAP enhancements, an OLE-compatible `SAP GUI` for 3.0 must also be active.

Conversely, an [AS ABAP](ABENAS_ABAP_GLOSRY.html) can itself be used as an automation server, which makes it possible to call function modules remotely from any OLE Automation Controller. For this purpose, the server program `RFCSRV.EXE` must be installed on the front end. For further information, see the `RFC Automation User's Guide`.

-   [`CREATE OBJECT`](ABAPCREATE_OBJECT_OLE2.html)
-   [`SET PROPERTY`](ABAPSET_PROPERTY.html)
-   [`GET PROPERTY`](ABAPGET_PROPERTY.html)
-   [`CALL METHOD`](ABAPCALL_METHOD_OLE2.html)
-   [`FREE OBJECT`](ABAPFREE_OBJECT.html)

abenabap.html abennews.html abennews-30.html