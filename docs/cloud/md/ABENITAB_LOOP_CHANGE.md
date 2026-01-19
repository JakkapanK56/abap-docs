---
title: "ABENITAB_LOOP_CHANGE"
description: |
  ABENITAB_LOOP_CHANGE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENITAB_LOOP_CHANGE.htm"
abapFile: "ABENITAB_LOOP_CHANGE.html"
keywords: ["insert", "delete", "loop", "while", "if", "case", "method", "class", "data", "types", "internal-table", "ABENITAB", "LOOP", "CHANGE"]
---

In the statement block of a [`LOOP`](ABAPLOOP_AT_ITAB_VARIANTS.html) control statement, the content of the currently processed internal table can be changed by inserting or deleting lines. The position of inserted or deleted lines with regard to the current line is determined by the line numbers in the corresponding [table index](ABENTABLE_INDEX_GLOSRY.html) in the case of loops across index tables or when using a sorted key. In the case of loops on hashed tables and when using a hash key, the position depends on the order of insertion or the order of lines that might have been established by a previous [`SORT`](ABAPSORT_ITAB.html) statement for the table.

As a rule the replacement or clearing of the entire table body of the currently processed internal table is not allowed in the statement block of a [`LOOP`](ABAPLOOP_AT_ITAB_VARIANTS.html) statement. Such a write access to the table body can be achieved with statements such as [`CLEAR`](ABAPCLEAR.html), [`FREE`](ABAPFREE_DATAOBJECT.html), `LOCAL`, [`SORT`](ABAPSORT_ITAB.html), [`DELETE ... WHERE`](ABAPDELETE_ITAB_LINES.html), and with all types of assignments.

**Caution** Since the result of replacing or clearing the entire table body within a loop can result in unpredictable program behavior, the exceptions to the rule should not be exploited.

Replacing the table body of an internal table within a loop over that table. The syntax check reports errors in classes and warnings outside classes. While the loop with `ASSIGNING` results in the runtime error `TABLE_FREE_IN_LOOP`, the loop with `INTO` is executed without runtime error. The latter is shown for demonstration purposes, but not recommended.

Deleting all lines of an internal table within a loop over that table. while the loop with `ASSIGNING` results in runtime error `TABLE_FREE_IN_LOOP` the loop with `INTO` is executed without runtime error. The latter is shown for demonstration purposes, but not recommended. Since the deletion happens in a method, it is not detected by the syntax check.

-   Inserting lines after the current line causes these new lines to be processed in the subsequent loop passes, which can produce an endless loop.
-   Deleting lines after the current line causes the deleted lines to no longer be processed in the subsequent loop passes.
-   Inserting lines in front of the current line causes the internal loop counter to be increased by one with each inserted line. This affects `sy-tabix` in the subsequent loop pass in the case of loops across index tables or when using a sorted key, and `sy-tabix` is increased accordingly.
-   Deleting the current line or lines in front of the current line causes the internal loop counter to be decreased by one with each deleted line. In the case of loops across index tables or when using a sorted key, this affects `sy-tabix` in the subsequent loop pass, and `sy-tabix` is decreased accordingly.

-   If known statically, clearing or replacing the table body inside a loop results in a syntax error in classes and for `LOOP` statements with a statically known secondary key. Outside classes and for tables without secondary key, the syntax check gives only a warning for compatibility reasons.
-   If it is not known statically, clearing or replacing the table body inside a loop raises the runtime error `TABLE_FREE_IN_LOOP` with the following exception: If the [output behavior](ABAPLOOP_AT_ITAB_RESULT.html) is defined with `INTO` or `TRANSPORTING NO FIELDS`, or with the obsolete short form, for compatibility reasons there is no runtime error and the loop is exited in an undefined way.

DATA itab TYPE TABLE OF i. \\n\\ \\nitab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ). \\n\\ \\nDATA jtab TYPE TABLE OF i. \\n\\ \\njtab = VALUE #( ( 4 ) ( 5 ) ). \\n\\ \\n"Syntax error in a method, syntax warning otherwise \\n"No runtime error, but undefined behavior \\nLOOP AT itab INTO DATA(wa). \\n IF sy-tabix = 2. \\n itab = jtab. \\n ENDIF. \\nENDLOOP. \\n\\ \\nitab = VALUE #( ( 1 ) ( 2 ) ). \\n\\ \\n"Syntax error in a method, syntax warning otherwise \\n"Runtime error \\nLOOP AT itab ASSIGNING FIELD-SYMBOL(). \\n IF sy-tabix = 2. \\n itab = jtab. \\n ENDIF. \\nENDLOOP. CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS clear\_itab CHANGING itab TYPE ANY TABLE. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD clear\_itab. \\n CLEAR itab. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA itab TYPE TABLE OF i. \\n\\ \\n itab = VALUE #( ( 1 ) ( 2 ) ). \\n\\ \\n "No runtime error, but undefined behavior \\n LOOP AT itab INTO FINAL(wa). \\n demo=>clear\_itab( CHANGING itab = itab ). \\n ENDLOOP. \\n\\ \\n itab = VALUE #( ( 1 ) ( 2 ) ). \\n\\ \\n "Runtime error \\n LOOP AT itab ASSIGNING FIELD-SYMBOL(). \\n demo=>clear\_itab( CHANGING itab = itab ). \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html