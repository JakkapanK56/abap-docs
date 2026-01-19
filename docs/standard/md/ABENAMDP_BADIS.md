---
title: "ABENAMDP_BADIS"
description: |
  ABENAMDP_BADIS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_BADIS.htm"
abapFile: "ABENAMDP_BADIS.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENAMDP", "BADIS"]
---

In addition to the option of implementing [BAdI methods](ABENBADI_METHOD_GLOSRY.html) of a regular [BAdI](ABENBADI_GLOSRY.html) as [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHODS.html) and making these methods callable by using [`CALL BADI`](ABAPCALL_BADI.html), it is also possible to create special AMDP BAdIs. An AMDP BAdI is a BAdI that is labeled accordingly in [BAdI Builder](ABENBADI_BUILDER_GLOSRY.html) and has the following properties:

-   Definition and implementation

-   An AMDP BAdI does not have any filters.
-   Fallback [BAdI implementation classes](ABENBADI_IMPLEMENT_CLASS_GLOSRY.html) must be specified.
-   Every [BAdI method](ABENBADI_METHOD_GLOSRY.html) of an AMDP BAdI must be an AMDP procedure implementation.
-   Every AMDP method must be implemented for the same database system.

-   Call BAdI methods

-   The AMDP procedure implementations of an AMDP BAdI can be called like regular [BAdI methods](ABENBADI_METHOD_GLOSRY.html) with [`GET BADI`](ABAPGET_BADI.html) and [`CALL BADI`](ABAPCALL_BADI.html).
-   The AMDP procedures of an AMDP BAdI created on the database can be called, like all AMDP procedures, from other AMDP methods in the same database system. These AMDP procedures are specified using the name of a [BAdI implementation class](ABENBADI_IMPLEMENT_CLASS_GLOSRY.html). The usage must be declared after the addition [`USING`](ABAPMETHOD_BY_DB_PROC.html) of the calling method.

-   In both cases, execution takes place in accordance with the rules of the [ABAP Enhancement Framework](ABENENHANCEMENT_FRAMEWORK_GLOSRY.html) and the corresponding switch in [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html). If no enhancement is available, the mandatory fallback implementation class is implemented.

-   AMDP BAdIs are primarily used to execute calls of AMDP procedures from AMDP procedures or functions, in accordance with the rules of the switch-based ABAP Enhancement Framework. Switch-based calls of AMDP procedure implementations are possible from ABAP programs without AMDP BAdIs. However, switch-based calls of AMDP procedure implementations from AMDP procedures or functions are only possible using AMDP BAdIs. The AMDP framework ensures that the relevant database procedure for the current database switch setting is created on the database.
-   Before the AMDP procedure of an AMDP BAdI can be called from other AMDP procedures or functions without syntax errors, it must already exist on the database when the calling method is created. For this reason, fallback BAdI implementation classes are mandatory for AMDP BAdIs, whose AMDP procedures can be created on the database whenever required.
-   AMDP BADIs do not currently support [AMDP function implementations](ABENAMDP_FUNCTION_METHODS.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html