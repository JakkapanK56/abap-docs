---
title: "ABENRUNTIME_ERROR_DYN_PROC_GUIDL"
description: |
  ABENRUNTIME_ERROR_DYN_PROC_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRUNTIME_ERROR_DYN_PROC_GUIDL.htm"
abapFile: "ABENRUNTIME_ERROR_DYN_PROC_GUIDL.html"
keywords: ["delete", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "field-symbol", "ABENRUNTIME", "ERROR", "DYN", "PROC", "GUIDL"]
---

When dynamic techniques are used, various exception situations can arise that can never occur when the corresponding static techniques are used because they can be checked statically.

**Prevent runtime errors in dynamic processing**

Respond appropriately to all possible error situations when using dynamic techniques.

The different dynamic techniques also require different reactions to the possible exception situations. Examples:

These examples illustrate how the use of dynamic techniques can lead to more complex and less clear code due to the numerous possible exception situations. Of course, the more the mentioned techniques are combined, the more complex and less clear the code becomes. Therefore, [dynamic programming techniques must always be used with care](ABENUSE_DYNAMIC_PROGR_TECH_GUIDL.html).

If it is not possible to particular error situations, for example, because no exception that can be handled exists, it must be ensured that this error situation never occurs and this then verified in extensive test scenarios.

The seemingly legible source code section uses almost only dynamic operands and tokens. Neither ABAP Compiler nor the reader can know the content of the specified variables at runtime. An error in one of these variables results in a termination of the program.

The following source code corrects the above example with an appropriate error handling - this reduces the legibility, of course. Here, the fact that an initial dynamic `WHERE` condition means that no restrictions are imposed is also taken into account. As shown here, this case must be explicitly avoided. Otherwise, the entire table content will be deleted.

-   When *dynamic data objects* are accessed, [their limitations must not be violated](ABENRUNTIME_ERROR_DATA_OBJ_GUIDL.html). For internal tables, for example, no line numbers must be specified for which no line exists.
-   Before data objects are *accessed dynamically* by using data references or field symbols, it must be ensured, before execution, that these are bound to a data object and this binding checked using `IS BOUND` or `IS`\\ `ASSIGNED`, if necessary. Afterwards, the return code should be checked to see whether execution was successful.
-   In *dynamic calls*, exceptions must be caught that are raised due to nonexistent programs, classes, or procedures, or due to inappropriate parameters.
-   In the case of a dynamically specified token, for example, a dynamic `WHERE` condition in ABAP SQL or internal tables, possible exceptions must be caught and responded to accordingly.
-   If programs are developed generically, the programs in question must checked using the statement `SYNTAX-CHECK`.

READ TABLE where\_clauses ASSIGNING WITH ... \\nDELETE FROM (dbtab\_name) WHERE (). \\nIF sy-subrc = 0. \\n CALL METHOD (class\_name)=>(method\_name). \\nENDIF. UNASSIGN . \\nASSIGN where\_clauses\[ ... \] TO . \\nIF sy-subrc <> 0. \\n RAISE EXCEPTION ... \\nENDIF. \\nASSERT IS ASSIGNED. \\nIF IS NOT INITIAL. \\n TRY. \\n DELETE FROM (dbtab\_name) WHERE (). \\n CATCH cx\_sy\_dynamic\_osql\_error. \\n ... \\n ENDTRY. \\n IF sy-subrc = 0. \\n TRY. \\n CALL METHOD (class\_name)=>(method\_name). \\n CATCH cx\_sy\_dyn\_call\_error. \\n ... \\n ENDTRY. \\n ENDIF. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendynamic\_prog\_technique\_gdl.html