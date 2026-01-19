---
title: "ABENAMDP_CLASSES"
description: |
  ABENAMDP_CLASSES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_CLASSES.htm"
abapFile: "ABENAMDP_CLASSES.html"
keywords: ["select", "if", "method", "class", "data", "ABENAMDP", "CLASSES"]
---

An AMDP class is a global class in the [class library](ABENCLASS_LIBRARY_GLOSRY.html) that implements the following [tag interface](ABENTAG_INTERFACE_GLOSRY.html):

The suffix `_HDB` stands for the SAP HANA database and it is currently the only database system for which the ABAP Managed Database Procedures can be implemented in AMDP methods of the class.

An AMDP class can contain both regular methods and [AMDP methods](ABENAMDP_METHODS.html).

Simple example for an AMDP class. The class `CL_DEMO_AMDP_SCARR` implements the interface `IF_AMDP_MARKER_HDB` and contains an AMDP method `SELECT_SCARR` that reads data from the [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)\\ `DEMO_CDS_SCARR_ENTITY`:

The following program section calls the method and displays the result.

-   `IF_AMDP_MARKER_HDB` for the SAP HANA database.

METHOD select\_scarr \\n BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY \\n USING demo\_cds\_scarr\_entity. \\n scarr\_tab = \\n SELECT \* \\n FROM "DEMO\_CDS\_SCARR\_ENTITY" \\n WHERE mandt = clnt \\n ORDER BY carrid; \\nENDMETHOD. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA result TYPE cl\_demo\_amdp\_scarr=>scarr\_tab. \\n\\ \\nNEW cl\_demo\_amdp\_scarr( )->select\_scarr( \\n EXPORTING clnt = sy-mandt \\n IMPORTING scarr\_tab = result ). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html