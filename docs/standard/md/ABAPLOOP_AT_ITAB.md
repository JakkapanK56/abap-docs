---
title: "ABAPLOOP_AT_ITAB"
description: |
  ABAPLOOP_AT_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOOP_AT_ITAB.htm"
abapFile: "ABAPLOOP_AT_ITAB.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "method", "data", "types", "internal-table", "field-symbol", "ABAPLOOP", "ITAB"]
---

[Short Reference](ABAPLOOP_AT_ITAB_SHORTREF.html)

``LOOP AT itab [`result`](ABAPLOOP_AT_ITAB_RESULT.html)\ [[`cond`](ABAPLOOP_AT_ITAB_COND.html)].``\\ 
  `...`\\ 
  ``[[`AT ...`](ABAPAT_ITAB.html)\      [`...`](ABAPAT_ITAB.html)\    [`ENDAT.`](ABAPAT_ITAB.html)]``\\ 
  `...`\\ 
[`ENDLOOP.`](ABAPENDLOOP.html)

This variant of the statement [`LOOP AT itab`](ABAPLOOP_AT_ITAB_VARIANTS.html) sequentially reads lines of the internal table `itab` and executes the statement block between `LOOP` and `ENDLOOP` once for each line. Either all lines are read or a subset specified by one or more conditions [`cond`](ABAPLOOP_AT_ITAB_COND.html).

The order in which the lines are read can depend on:

If none of the additions is specified, the standard order depends on the table category as follows:

The loop is executed until all the table lines of the table or the subset as specified in the [`cond`](ABAPLOOP_AT_ITAB_COND.html) condition have been read or until it is exited with a [statement](ABENLEAVE_PROGRAM_UNITS.html). If no corresponding lines are found or if the internal table is empty, the loop is not executed at all.

If the internal table is specified as the return value or result of a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html), a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), or a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html), the value is persisted for the duration of the loop. Afterwards, the internal table can no longer be accessed.

**Caution**\\ [Special rules apply](ABENITAB_LOOP_CHANGE.html) when changing the internal table within a loop. In particular you should never perform write accesses on a complete table body.

This variant of the statement `LOOP AT` sets the value of the system field `sy-tabix`:

The loop entry `LOOP AT` does not modify `sy-subrc`. After exiting the loop, behind `ENDLOOP`, `sy-tabix` is set to the value that it had before entering the loop and `sy-subrc` is set as follows:

The system fields `sy-tfill` and `sy-tleng` are also filled.

Loop across an internal table constructed using the [value operator](ABENVALUE_OPERATOR_GLOSRY.html)\\ [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html), where each line is assigned to a field symbol declared inline using [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html).

Nested `LOOP` loops without explicit key declaration. The content of the current line for the outer loop is evaluated in the `WHERE` condition for the inner loop.

`CX_SY_ITAB_DYN_LOOP`

-   The output behavior [`result`](ABAPLOOP_AT_ITAB_RESULT.html) determines how and to where the line content is read.
-   The conditions [`cond`](ABAPLOOP_AT_ITAB_COND.html) can consist of the following optional additions:

-   The table key with which the loop is executed can be determined with an addition [`USING KEY`](ABAPLOOP_AT_ITAB_COND.html). The table key affects the order in which the lines are processed.
-   Using the additions [`FROM`](ABAPLOOP_AT_ITAB_COND.html) and [`TO`](ABAPLOOP_AT_ITAB_COND.html) for index tables and [`WHERE`](ABAPLOOP_AT_ITAB_COND.html) for all table categories, the loop processing can be restricted to a subset of lines.
-   An addition [`STEP`](ABAPLOOP_AT_ITAB_COND.html) allows a step size and the direction of the loop processing to be defined.

-   The control statements [`AT ... ENDAT`](ABAPAT_ITAB.html) can be used to define control structures for [group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html).

-   The [table category](ABENTABLE_CATEGORY_GLOSRY.html)
-   The addition [`USING KEY`](ABAPLOOP_AT_ITAB_COND.html)
-   The addition [`STEP`](ABAPLOOP_AT_ITAB_COND.html)

-   **Standard tables and sorted tables**
-   The lines are read by ascending line numbers in the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html). In each loop pass, the system field `sy-tabix` contains the line number of the current line in the primary table index.
-   **Hashed tables**
-   The lines are processed in the order in which they were inserted into the table, and after a sort using the statement `SORT` in the sort order. In each loop pass, the system field `sy-tabix` contains the value 0.

-   In each loop pass for [index tables](ABENINDEX_TABLE_GLOSRY.html) and when using a [sorted key](ABENSORTED_KEY_GLOSRY.html) on the line number of the current table line in the associated table index.
-   In [hashed tables](ABENHASHED_TABLE_GLOSRY.html) and when using a [hash key](ABENHASH_KEY_GLOSRY.html) on the value 0.

-   If the internal table `itab` is specified using a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html), the loop is executed completely using the table referenced at entry. Any changes to the reference variable do not have an effect on the loop. The associated object cannot be deleted by the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html) until the loop has been completed. The same thing applies if the table is represented by a field symbol. After the implementation of the field symbol in the loop, iteration still takes place using the table linked to the field symbol when `LOOP` is entered.
-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. A syntax check warning occurs if there is a suitable [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) available but not used. This warning should be removed by using the key. However, in exceptional cases, it can also be bypassed using a [pragma](ABENPRAGMA_GLOSRY.html).
-   It is generally better to read multiple lines in a `LOOP` than making multiple individual line reads using the statement [`READ TABLE`](ABAPREAD_TABLE.html) or [table expressions](ABENTABLE_EXPRESSIONS.html).
-   For compatibility reasons, when a table body is replaced in the loop, a runtime error only occurs when a directly specified table is read without a specified secondary key and when a work area `wa` is specified for the output behavior [`result`](ABAPLOOP_AT_ITAB_RESULT.html).
-   Using a special variant [`LOOP AT mesh_path`](ABENMESH_LOOP.html), a loop can be executed across the last node of a [mesh path](ABENMESH_PATH_GLOSRY.html).
-   Another form of [table iterations](ABENTABLE_ITERATION_GLOSRY.html) is possible using [iteration expressions](ABENITERATION_EXPRESSION_GLOSRY.html) and [`FOR`](ABENFOR_ITAB.html) in certain constructor expressions.

-   *Cause:* Error in a dynamic `WHERE` condition
    *Runtime error:*\\ `DYN_WHERE_PARSE_ERROR`

-   *Cause:* Illegal parsing of the `LOOP` field symbol in the body of the loop.
    *Runtime error:*\\ `ITAB_ILLEGAL_REG`
-   *Cause:* Illegal assignment to the `LOOP` reference in the body of the loop.
    *Runtime error:*\\ `MOVE_TO_LOOP_REF`
-   *Cause:* Invalid change of entire table body in the loop
    *Runtime error:*\\ `TABLE_FREE_IN_LOOP`
-   *Cause:* Invalid access to table index when using a hash key.
    *Runtime error:*\\ `ITAB_ILLEGAL_INDEX_OP`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nLOOP AT VALUE t\_itab( ( 1 ) ( 2 ) ( 3 ) ) ASSIGNING FIELD-SYMBOL(). \\n out->write( |\\{ \\}| ). \\nENDLOOP. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA name TYPE scarr-carrname VALUE '\*'. \\ncl\_demo\_input=>request( CHANGING field = name ). \\n\\ \\nDATA: scarr\_tab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrname, \\n spfli\_tab TYPE SORTED TABLE OF spfli \\n WITH NON-UNIQUE KEY carrid. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @scarr\_tab. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n\\ \\nLOOP AT scarr\_tab ASSIGNING FIELD-SYMBOL() \\n WHERE carrname CP name. \\n LOOP AT spfli\_tab INTO FINAL(spfli\_line) \\n WHERE carrid = \-carrid. \\n out->write\_data( spfli\_line ). \\n ENDLOOP. \\nENDLOOP. \\n\\ \\nout->display( ). `**sy-subrc**` **Meaning** 0 At least one loop pass was executed. 4 No loop pass was executed. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html