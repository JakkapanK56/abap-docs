---
title: "ABENOLE2"
description: |
  ABENOLE2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOLE2.htm"
abapFile: "ABENOLE2.html"
keywords: ["do", "if", "method", "class", "data", "ABENOLE2"]
---

ABAP can be used to process automation objects whose functions are available in the presentation layer in the form of an OLE automation server. Only automation objects for Windows are supported. Typical applications that offer an automation interface are Microsoft Office products Excel and Word, for which the published classes and their attributes and methods are found in the *object directory* of the *Visual Basic Editor* called using the *Macro* menu option.

All automation applications that can be used from ABAP are contained in the database table `TOLE`, which is maintained using transaction `SOLE`. This table contains the names of the classes and components supported by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html). It also contains type information for adapting different data formats. The automation command set consists of the following ABAP statements:

where `CREATE OBJECT` and `CALL METHOD` must not be confused with the identically named ABAP Objects statements.

The statements of the automation command set are passed from the ABAP runtime framework to the SAP GUI on the current presentation server, which performs the actual communication with the automation server. The statements are not passed directly and are first buffered in an automation queue and passed together to the SAP GUI during a flush. By default, a flush is triggered by the next ABAP statement that does not belong to the automation command set.

For processing some of the automation objects, the more general interfaces SAP Desktop Office Integration (DOI) and Control Framework (CFW) are now available. The statements of the automation command set should be used only to access automation applications for which there is no such wrapping.

-   [`CREATE OBJECT`](ABAPCREATE_OBJECT_OLE2.html)
-   [`CALL METHOD`](ABAPCALL_METHOD_OLE2.html)
-   [`GET PROPERTY`](ABAPGET_PROPERTY.html)
-   [`SET PROPERTY`](ABAPSET_PROPERTY.html)
-   [`FREE OBJECT`](ABAPFREE_OBJECT.html),

abenabap.html abenabap\_reference.html abenabap\_screens.html abenfrontend\_services.html