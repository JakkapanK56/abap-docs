---
title: "ABENCALL_TRANSACTION_BDC_ABEXA"
description: |
  ABENCALL_TRANSACTION_BDC_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALL_TRANSACTION_BDC_ABEXA.htm"
abapFile: "ABENCALL_TRANSACTION_BDC_ABEXA.html"
keywords: ["try", "catch", "method", "class", "data", "internal-table", "ABENCALL", "TRANSACTION", "BDC", "ABEXA"]
---

This example demonstrates a transaction call using a [batch input table](ABENBATCH_INPUT_TABLE_GLOSRY.html).

Call of the Class Builder (transaction `SE24`) and display of the class `CL_ABAP_BROWSER`. The required authorization is checked by using the addition `WITH AUTHORITY-CHECK`. The internal table `bdcdata_tab` contains the entry for the processing of the first dynpro (`1000`) of the transaction. The structure `opt` is used to configure processing to skip the first screen and display the subsequent screen in standard size.

\* Public class definition \\nCLASS cl\_demo\_call\_transaction\_bdc DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_call\_transaction\_bdc IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA class\_name TYPE c LENGTH 30 VALUE 'CL\_ABAP\_BROWSER'. \\n\\ \\n DATA bdcdata\_tab TYPE TABLE OF bdcdata WITH EMPTY KEY. \\n bdcdata\_tab = VALUE #( \\n ( program = 'SAPLSEOD' dynpro = '1000' dynbegin = 'X' ) \\n ( fnam = 'BDC\_CURSOR' fval = 'SEOCLASS-CLSNAME' ) \\n ( fnam = 'SEOCLASS-CLSNAME' fval = class\_name ) \\n ( fnam = 'BDC\_OKCODE' fval = '=WB\_DISPLAY' ) ). \\n\\ \\n FINAL(opt) = VALUE ctu\_params( dismode = 'E' \\n defsize = 'X' ). \\n\\ \\n TRY. \\n CALL TRANSACTION 'SE24' WITH AUTHORITY-CHECK \\n USING bdcdata\_tab OPTIONS FROM opt. \\n CATCH cx\_sy\_authorization\_error ##NO\_HANDLER. \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_call\_transaction\_bdc DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_call\_transaction\_bdc IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA class\_name TYPE c LENGTH 30 VALUE 'CL\_ABAP\_BROWSER'. \\n\\ \\n DATA bdcdata\_tab TYPE TABLE OF bdcdata WITH EMPTY KEY. \\n bdcdata\_tab = VALUE #( \\n ( program = 'SAPLSEOD' dynpro = '1000' dynbegin = 'X' ) \\n ( fnam = 'BDC\_CURSOR' fval = 'SEOCLASS-CLSNAME' ) \\n ( fnam = 'SEOCLASS-CLSNAME' fval = class\_name ) \\n ( fnam = 'BDC\_OKCODE' fval = '=WB\_DISPLAY' ) ). \\n\\ \\n FINAL(opt) = VALUE ctu\_params( dismode = 'E' \\n defsize = 'X' ). \\n\\ \\n TRY. \\n CALL TRANSACTION 'SE24' WITH AUTHORITY-CHECK \\n USING bdcdata\_tab OPTIONS FROM opt. \\n CATCH cx\_sy\_authorization\_error ##NO\_HANDLER. \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_call\_transaction.html abapcall\_transaction.html abentransactions\_abexas.html