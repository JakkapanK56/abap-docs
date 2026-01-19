---
title: "ABENUPDATE_SET_INDICATORS_ABEXA"
description: |
  ABENUPDATE_SET_INDICATORS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUPDATE_SET_INDICATORS_ABEXA.htm"
abapFile: "ABENUPDATE_SET_INDICATORS_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "if", "method", "class", "data", "types", "ABENUPDATE", "SET", "INDICATORS", "ABEXA"]
---

The example demonstrates how the addition [`SET INDICATORS`](ABAPUPDATE_SET_INDICATOR.html) of the statement `UPDATE` is used.

It modifies the content of three fields of the CDS table entity `DEMO_CDS_UPDATE_TE`:

As a result, only these three fields are updated with new values.

-   The rows with the `ID` values D, E, and F are selected.
-   Within these rows, the column `COL4` is indicated for change.

\* Public class definition \\nCLASS cl\_demo\_update\_set\_indicator DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_update\_set\_indicator IMPLEMENTATION. \\n METHOD main. \\n DELETE FROM demo\_update. "#EC CI\_NOWHERE \\n INSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'A' col1 = '1' col2 = '10' col3 = '100' ) \\n ( id = 'B' col1 = '2' col2 = '20' col3 = '200' ) \\n ( id = 'C' col1 = '3' col2 = '30' col3 = '300' ) \\n ( id = 'D' col1 = '4' col2 = '40' col3 = '400' ) \\n ( id = 'E' col1 = '5' col2 = '50' col3 = '500' ) \\n ( id = 'F' col1 = '6' col2 = '60' col3 = '600' ) ) ). \\n\\ \\n TYPES ind\_wa TYPE demo\_update WITH INDICATORS col\_ind \\n TYPE abap\_boolean. \\n DATA ind\_tab TYPE TABLE OF ind\_wa. \\n\\ \\n ind\_tab = VALUE #( \\n ( id = 'D' col4 = 4000 col\_ind-col4 = abap\_true ) \\n ( id = 'E' col4 = 5000 col\_ind-col4 = abap\_true ) \\n ( id = 'F' col4 = 6000 col\_ind-col4 = abap\_true ) ). \\n\\ \\n UPDATE demo\_update FROM TABLE @ind\_tab \\n INDICATORS SET STRUCTURE col\_ind. \\n\\ \\n SELECT \* FROM demo\_update \\n ORDER BY id \\n INTO TABLE @FINAL(result1). \\n\\ \\n out->write( result1 ). \\n\\ \\n UPDATE demo\_update FROM TABLE @ind\_tab. \\n\\ \\n SELECT \* FROM demo\_update \\n ORDER BY id \\n INTO TABLE @FINAL(result2). \\n\\ \\n out->write( result2 ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_update\_set\_indicator DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_update\_set\_indicator IMPLEMENTATION. \\n METHOD main. \\n DELETE FROM demo\_update. "#EC CI\_NOWHERE \\n INSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'A' col1 = '1' col2 = '10' col3 = '100' ) \\n ( id = 'B' col1 = '2' col2 = '20' col3 = '200' ) \\n ( id = 'C' col1 = '3' col2 = '30' col3 = '300' ) \\n ( id = 'D' col1 = '4' col2 = '40' col3 = '400' ) \\n ( id = 'E' col1 = '5' col2 = '50' col3 = '500' ) \\n ( id = 'F' col1 = '6' col2 = '60' col3 = '600' ) ) ). \\n\\ \\n TYPES ind\_wa TYPE demo\_update WITH INDICATORS col\_ind \\n TYPE abap\_boolean. \\n DATA ind\_tab TYPE TABLE OF ind\_wa. \\n\\ \\n ind\_tab = VALUE #( \\n ( id = 'D' col4 = 4000 col\_ind-col4 = abap\_true ) \\n ( id = 'E' col4 = 5000 col\_ind-col4 = abap\_true ) \\n ( id = 'F' col4 = 6000 col\_ind-col4 = abap\_true ) ). \\n\\ \\n UPDATE demo\_update FROM TABLE @ind\_tab \\n INDICATORS SET STRUCTURE col\_ind. \\n\\ \\n SELECT \* FROM demo\_update \\n ORDER BY id \\n INTO TABLE @FINAL(result1). \\n\\ \\n out->write( result1 ). \\n\\ \\n UPDATE demo\_update FROM TABLE @ind\_tab. \\n\\ \\n SELECT \* FROM demo\_update \\n ORDER BY id \\n INTO TABLE @FINAL(result2). \\n\\ \\n out->write( result2 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapupdate.html abapupdate\_source.html abapupdate\_set\_indicator.html