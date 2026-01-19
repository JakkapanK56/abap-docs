---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBULK_MODIFY_ABEXA.htm"
abapFile: "ABENBULK_MODIFY_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "internal-table", "ABENBULK", "MODIFY", "ABEXA"]
---

This example demonstrates the statement [`MODIFY`](ABAPMODIFY_DBTAB.html)\\ `...`\\ [`FROM TABLE`](ABAPMODIFY_SOURCE.html).

The DDIC database table `DEMO_BULK_MODIFY` has two key fields, `K1` and `K2`, and a regular field `V1`. A unique secondary index `IDX` comprises the fields `K1` and `V1`. The DDIC database table is filled with a row 1, 1, 1, and then the statement `MODIFY ... FROM TABLE` is used with an internal table with the rows 1, 2, 1 and 1, 1, 2. The result is platform-dependent:

-   In database systems with row-by-row `MODIFY`, like the SAP HANA database, the first row of the internal table cannot be inserted because of the unique secondary index. The second row of the internal table overwrites the existing row and the result is a row with the content 1, 1, 2.
-   In database systems with row-by-row `MODIFY` and termination after a failed insert, such as SAP MaxDB, no change is made and the result is a row with the content 1, 1, 1.
-   In database systems with block-by-block `UPDATE` and `INSERT`, such as ORACLE DB, the existing row is overwritten with the second row of the internal table and then the first row of the internal table is inserted. The result is two rows 1, 1, 2 and 1, 2, 1.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_bulk\_modify DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_bulk\_modify IMPLEMENTATION. \\n METHOD main. \\n "has a unique secondary index k1, v1 \\n DELETE FROM demo\_bulk\_modify. "#EC CI\_NOWHERE \\n "has a unique secondary index k1, v1 \\n INSERT demo\_bulk\_modify FROM @( VALUE #( k1 = 1 k2 = 1 v1 = 1 ) ). \\n\\ \\n DATA itab TYPE STANDARD TABLE OF demo\_bulk\_modify WITH EMPTY KEY. \\n itab = VALUE #( ( k1 = 1 k2 = 2 v1 = 1 ) \\n ( k1 = 1 k2 = 1 v1 = 2 ) ). \\n\\ \\n MODIFY demo\_bulk\_modify FROM TABLE @itab. "platform dependent! \\n\\ \\n SELECT \* \\n FROM demo\_bulk\_modify \\n INTO TABLE @FINAL(result). \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_bulk\_modify DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_bulk\_modify IMPLEMENTATION. \\n METHOD main. \\n "has a unique secondary index k1, v1 \\n DELETE FROM demo\_bulk\_modify. "#EC CI\_NOWHERE \\n "has a unique secondary index k1, v1 \\n INSERT demo\_bulk\_modify FROM @( VALUE #( k1 = 1 k2 = 1 v1 = 1 ) ). \\n\\ \\n DATA itab TYPE STANDARD TABLE OF demo\_bulk\_modify WITH EMPTY KEY. \\n itab = VALUE #( ( k1 = 1 k2 = 2 v1 = 1 ) \\n ( k1 = 1 k2 = 1 v1 = 2 ) ). \\n\\ \\n MODIFY demo\_bulk\_modify FROM TABLE @itab. "platform dependent! \\n\\ \\n SELECT \* \\n FROM demo\_bulk\_modify \\n INTO TABLE @FINAL(result). \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapmodify\_dbtab.html