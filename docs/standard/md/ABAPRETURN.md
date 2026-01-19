---
title: "ABAPRETURN"
description: |
  ABAPRETURN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRETURN.htm"
abapFile: "ABAPRETURN.html"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABAPRETURN"]
---

[Short Reference](ABAPRETURN_SHORTREF.html)

`RETURN [expr].`

[`... [expr]`](#ABAP_ONE_ADD@1@)

This statement immediately terminates the current processing block. It can appear at any point in a [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) and terminates this block regardless of the statement block or control structure in which the statement appears.

After the processing block has been exited, the runtime framework behaves as when the [processing block is exited in a regular way](ABENEND_PROCESSING_BLOCKS.html), with the exception of [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) and the [reporting event blocks](ABENREPORTING_EVENT_GLOSRY.html)\\ `START-OF-SELECTION` and `GET`. In particular, the output parameters of procedures are passed on to the bound actual parameters.

\\ [Only use `RETURN` to exit procedures](ABENEXIT_PROCEDURE_GUIDL.html)

Exit of the method `show_list` using `RETURN` if one of the formal parameters required (`structure` or `data_tab`) is initial.

In [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html), that is methods with one [return value](ABENRETURN_VALUE_GLOSRY.html)\\ `r`, a data object or an expression `expr` can be placed behind `RETURN` where `expr` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). The statement

RETURN expr.

acts as a short form of the statements:

r = expr. \\nRETURN.

That means:

A [conditional iteration](ABENFOR_CONDITIONAL.html) with `FOR` is used behind `RETURN` to fill a tabular return value. In case of an error (overflow), the exception is caught and an empty table is constructed behind `RETURN`.

-   The event block `LOAD-OF-PROGRAM` cannot be exited using `RETURN`.
-   After the reporting event block `START-OF-SELECTION` is terminated using `RETURN`, the runtime framework does not raise any more reporting events and instead calls the list processor directly to display the basic list.
-   After the reporting event block `GET` is terminated using `RETURN`, subordinate nodes in the hierarchical structure of the linked [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

-   The statement `RETURN` is generally intended for early but proper returns from processing blocks.
-   Especially in [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html), the actual value of the [return value](ABENRETURN_VALUE_GLOSRY.html) is passed to the caller.
-   Since `RETURN` behaves differently in [`GET`](ABAPGET-.html) events than when the event block is terminated as usual, the statement [`REJECT`](ABAPREJECT_SHORTREF.html) should be used there, which was designed especially for this purpose.

-   The result of the expression `expr` is passed as the return value `r` of the method to the caller.
-   The result of the expression `expr` must be [convertible](ABENCONVERTIBLE_GLOSRY.html) to the return value `r` of the method.
-   For `expr`, a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) with the specification `#` for the type can be used. Then the type is inferred from the return value `r`.

-   It is possible to write
-   `RETURN r.`
-   where `r` is the return value. In this case, the assignment `r = r` is skipped internally.
-   If `RETURN` is the last statement in front of `ENDMETHOD`, it is skipped internally and `RETURN expr` works in the same way as `r = expr`.
-   In any other context than a functional method, the `RETURN` statement has no addition.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n TYPES table\_type TYPE STANDARD TABLE OF i. \\n METHODS show\_list \\n IMPORTING structure TYPE c \\n CHANGING data\_tab TYPE ANY TABLE. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD show\_list. \\n DATA alv\_list TYPE REF TO cl\_gui\_alv\_grid. \\n IF structure IS INITIAL OR \\n data\_tab IS INITIAL. \\n RETURN. \\n ENDIF. \\n CREATE OBJECT alv\_list \\n EXPORTING \\n i\_parent = cl\_gui\_container=>screen0. \\n alv\_list->set\_table\_for\_first\_display( \\n EXPORTING i\_structure\_name = structure \\n CHANGING it\_outtab = data\_tab ). \\n ENDMETHOD. \\nENDCLASS. CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n TYPES: \\n BEGIN OF line, \\n num TYPE i, \\n square TYPE i, \\n END OF line, \\n squares TYPE SORTED TABLE OF line WITH UNIQUE KEY num. \\n CLASS-METHODS main \\n IMPORTING limit TYPE i \\n RETURNING VALUE(r) TYPE squares. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n RETURN VALUE #( FOR i = 1 UNTIL i > limit \\n ( num = i square = ipow( base = i exp = 2 ) ) ). \\n CATCH cx\_sy\_arithmetic\_error. \\n RETURN VALUE #( ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_processing\_blocks.html