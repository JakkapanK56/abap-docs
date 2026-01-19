---
title: "ABENUPDATE_SET_ABEXA"
description: |
  ABENUPDATE_SET_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUPDATE_SET_ABEXA.htm"
abapFile: "ABENUPDATE_SET_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "if", "method", "class", "ABENUPDATE", "SET", "ABEXA"]
---

The example demonstrates how the addition `SET` of the statement `UPDATE` is used.

It modifies the content of four columns of a row of the CDS table entity `DEMO_CDS_UPDATE_TE`:

-   The column `COL1` is assigned the value 200.
-   The value of the column `COL2` is raised by 10.
-   The value of the column `COL3` is reduced by 10.
-   The value of the column `COL4` is reduced dynamically by the value of the column `COL1` as it was before the execution of the statement.

\* Public class definition \\nCLASS cl\_demo\_update DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_update IMPLEMENTATION. \\n METHOD main. \\n CONSTANTS id TYPE demo\_cds\_update\_te-id VALUE 'X'. \\n\\ \\n DELETE FROM demo\_cds\_update\_te WHERE id = @id. \\n INSERT demo\_cds\_update\_te FROM @( VALUE demo\_cds\_update\_te( \\n id = id \\n col1 = 100 \\n col2 = 100 \\n col3 = 100 \\n col4 = 100 ) ). \\n\\ \\n FINAL(num) = 200. \\n FINAL(diff) = 10. \\n FINAL(token) = \`col4 = col4 - demo\_cds\_update\_te~col1\`. \\n UPDATE demo\_cds\_update\_te \\n SET col1 = @num, \\n col2 = col2 + @diff, \\n col3 = col3 - @diff, \\n (token) \\n WHERE id = @id. \\n\\ \\n SELECT SINGLE \* \\n FROM demo\_cds\_update\_te \\n WHERE id = @id \\n INTO @FINAL(wa). \\n out->write( wa ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_update DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_update IMPLEMENTATION. \\n METHOD main. \\n CONSTANTS id TYPE demo\_cds\_update\_te-id VALUE 'X'. \\n\\ \\n DELETE FROM demo\_cds\_update\_te WHERE id = @id. \\n INSERT demo\_cds\_update\_te FROM @( VALUE demo\_cds\_update\_te( \\n id = id \\n col1 = 100 \\n col2 = 100 \\n col3 = 100 \\n col4 = 100 ) ). \\n\\ \\n FINAL(num) = 200. \\n FINAL(diff) = 10. \\n FINAL(token) = \`col4 = col4 - demo\_cds\_update\_te~col1\`. \\n UPDATE demo\_cds\_update\_te \\n SET col1 = @num, \\n col2 = col2 + @diff, \\n col3 = col3 - @diff, \\n (token) \\n WHERE id = @id. \\n\\ \\n SELECT SINGLE \* \\n FROM demo\_cds\_update\_te \\n WHERE id = @id \\n INTO @FINAL(wa). \\n out->write( wa ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapupdate.html abapupdate\_source.html abapupdate\_set\_expression.html