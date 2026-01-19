---
title: "ABENSQL_INJ_AMDP_SCRTY"
description: |
  ABENSQL_INJ_AMDP_SCRTY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_INJ_AMDP_SCRTY.htm"
abapFile: "ABENSQL_INJ_AMDP_SCRTY.html"
keywords: ["select", "update", "do", "if", "case", "try", "catch", "method", "class", "data", "ABENSQL", "INJ", "AMDP", "SCRTY"]
---

When [AMDP](ABENAMDP_GLOSRY.html) is used, database procedures are created and called that are currently usually implemented in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) for the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). The implementation of the database procedures in AMDP methods is managed by ABAP, but their content and security is not ABAP's responsibility. Risks are incurred whenever a database procedure contains dynamic parts or whenever it calls further database procedures whose functions are unknown in ABAP and cannot be checked there.

There are currently no test tools available for checking the security of the implementation of a AMDP methods. Developers of AMDP methods are themselves responsible for their security, with dual control (Code Inspections) being a useful principle here. This is partly why the use of dynamic programming techniques is strongly [discouraged](ABENAMDP.html). In cases where AMDP methods do contain dynamic parts that could produce SQL injections when combined with input from outside, they must be flagged accordingly to allow the caller to implement any checks needed.

Implementations of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) are not currently supported by ABAP test tools, which means the caller of a method is responsible for ensuring that only non-malicious content is passed to it. If the implementation of an AMDP method contains dynamic parts into which formal parameters are injected, no input from outside can be passed to these parameters that is not checked or escaped appropriately, to avoid SQL injections.

The statements about AMDP made here apply in principle to all places in which implementations made in other programming languages are called from ABAP.

An AMDP method is implemented as follows:

This method uses the SQLScript statement `EXEC` in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) to execute an SQL statement specified as a character string into which the input parameter `seats` is merged. A method like this should be classified as a potential risk, since the input parameter is not checked. If possible, an input check should be implemented in SQLScript directly before the statement `EXEC` is executed.

If the method is delivered without an appropriate check and the caller wants to pass value entered outside to it, the validity of the value must be checked first. In the case in question, only integers can be passed, which can be verified using the method `CHECK_INT_VALUE` of the class `CL_ABAP_DYN_PRG` in calls from ABAP. If not, input such as `2, seatsmax = seatsmax + 10` would be possible, which would change the column `SEATSMAX` and not just the column `SEATSOCC`.

An AMDP method is implemented as follows:

This method uses the SQLScript statement `APPLY_FILTER` in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), which sets a dynamic condition on a result set. This statement can also produce SQL injections when combined with input from outside if the input is not validated appropriately. As used in ABAP, methods of the class `CL_ABAP_DYN_PRG` can validate this input..

CLASS cl\_dyn\_amdp IMPLEMENTATION. \\n METHOD increase\_seatsocc BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT. \\n EXEC 'UPDATE sflight SET seatsocc = seatsocc + ' || :seats; \\n ENDMETHOD. \\nENDCLASS. DATA seats TYPE string. \\ncl\_demo\_input=>request( CHANGING field = seats ). \\nTRY. \\n NEW cl\_dyn\_amdp( )->increase\_seatsocc( \\n seats = |\\{ cl\_abap\_dyn\_prg=>check\_int\_value( seats ) \\}| ). \\n CATCH cx\_abap\_not\_an\_integer INTO DATA(exc). \\n cl\_demo\_output=>display( exc->get\_text( ) ). \\nENDTRY. CLASS cl\_dyn\_amdp IMPLEMENTATION. \\n METHOD get\_flights BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n USING spfli. \\n flights = SELECT \* FROM SPFLI WHERE mandt = :mandt; \\n flights = APPLY\_FILTER(:flights, :filter); \\n ENDMETHOD. \\nENDCLASS. DATA column TYPE string. \\ncl\_demo\_input=>add\_field( CHANGING field = column ). \\nDATA value TYPE string. \\ncl\_demo\_input=>request( CHANGING field = value ). \\nTRY. \\n DATA(filter) = cl\_abap\_dyn\_prg=>check\_column\_name( column ) && \\n \` = \` && \\n cl\_abap\_dyn\_prg=>quote( value ). \\n NEW cl\_dyn\_amdp( )->get\_flights( EXPORTING mandt = sy-mandt \\n filter = filter \\n IMPORTING flights = DATA(result) ). \\n CATCH cx\_abap\_invalid\_name cx\_amdp\_execution\_failed INTO DATA(exc). \\n cl\_demo\_output=>display( exc->get\_text( ) ). \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html abensql\_injections\_scrty.html