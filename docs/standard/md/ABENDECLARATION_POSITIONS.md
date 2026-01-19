---
title: "ABENDECLARATION_POSITIONS"
description: |
  ABENDECLARATION_POSITIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDECLARATION_POSITIONS.htm"
abapFile: "ABENDECLARATION_POSITIONS.html"
keywords: ["select", "insert", "loop", "do", "if", "try", "catch", "method", "data", "types", "internal-table", "field-symbol", "ABENDECLARATION", "POSITIONS"]
---

Declaration positions are [write-only positions](ABENWRITE_ONLY_POSITION_GLOSRY.html) in which a [declaration expression](ABENDECLARATION_EXPRESSION_GLOSRY.html) can be specified for an [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html). There are no declaration positions within expressions.

Declaration positions include the following:

Unlike in [standalone method calls](ABAPCALL_METHOD_STATIC_SHORT.html), inline declarations cannot be specified as actual parameters for output parameters in a [functional method call](ABAPCALL_METHOD_FUNCTIONAL.html).

Declaration expression [`DATA`](ABENDATA_INLINE.html) for the declaration of an internal table `itab` after the addition [`INTO TABLE`](ABAPINTO_CLAUSE.html) of a [`SELECT`](ABAPSELECT.html) statement.

-   Positions for the inline declaration of variables with [`DATA(var)`](ABENDATA_INLINE.html) and [`FINAL(var)`](ABENFINAL_INLINE.html). These are the following [write positions](ABENWRITE_POSITION_GLOSRY.html), where the operand type can be determined completely and where the content of the operand is not evaluated but completely overwritten.

-   Left side of an assignment with the [assignment operator `=`](ABENEQUALS_OPERATOR.html)
-   [`lhs = ...`](ABENEQUALS_OPERATOR.html)
-   Actual parameters for output parameters and return values of methods for [standalone method calls](ABAPCALL_METHOD_STATIC_SHORT.html):
-   `meth( [IMPORTING p1 = a1 p2 = a2...](ABAPCALL_METHOD_PARAMETERS.html)`
-   `[RECEIVING r = a](ABAPCALL_METHOD_PARAMETERS.html) )`
-   If a method call is located to the right side of an assignment or is part of an expression, these actual parameters are not declaration positions.
-   Target fields when catching an exception:
-   `CATCH EXCEPTION [INTO oref](ABAPCATCH_TRY.html)`
-   `CLEANUP [INTO oref](ABAPCLEANUP.html)`
-   Target fields in statements for string processing and byte string processing:
-   `FIND ... [MATCH COUNT mcnt](ABAPFIND_OPTIONS.html)`\\
    `[MATCH OFFSET moff](ABAPFIND_OPTIONS.html)`\\
    `[MATCH LENGTH mlen](ABAPFIND_OPTIONS.html)`\\
    `[RESULTS result_tab|result_wa](ABAPFIND_OPTIONS.html)`\\
    `[SUBMATCHES s1 s2 ...](ABAPFIND_OPTIONS.html)`\\
    \\
    `REPLACE ... [REPLACEMENT COUNT rcnt](ABAPREPLACE_OPTIONS.html)`\\
    `[REPLACEMENT OFFSET moff](ABAPREPLACE_OPTIONS.html)`\\
    `[REPLACEMENT LENGTH mlen](ABAPREPLACE_OPTIONS.html)`\\
    `[RESULTS result_tab|result_wa](ABAPREPLACE_OPTIONS.html)`\\
    \\
    `CONCATENATE ... [INTO result](ABAPCONCATENATE.html)`\\
    \\
    `SPLIT ... [INTO result1 result2 ...](ABAPSPLIT.html)`\\
    `[INTO TABLE result_tab](ABAPSPLIT.html)`\\
    \\
    `CONVERT TEXT ... [INTO SORTABLE CODE hex](ABAPCONVERT_TEXT.html)`\\
    \\
    `GET BIT ... [INTO val](ABAPGET_BIT.html)`.
-   Target fields in statements for UTC time stamps:
-   `CONVERT UTCLONG ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](ABAPCONVERT_UTCLONG.html)`
-   `CONVERT ... [INTO UTCLONG time_stamp](ABAPCONVERT_DATE_UTCLONG.html)`
-   `GET TIME STAMP [time_stamp](ABAPGET_TIME-STAMP.html)`
-   `CONVERT TIME STAMP ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](ABAPCONVERT_TIME-STAMP.html)`
-   `CONVERT ... [INTO TIME STAMP time_stamp](ABAPCONVERT_DATE_TIME-STAMP.html)`
-   Target fields in statements for internal tables:
-   `READ TABLE ... [[REFERENCE] INTO dobj](ABAPREAD_TABLE_OUTDESC.html)`
-   `LOOP AT ... [[REFERENCE] INTO dobj](ABAPLOOP_AT_ITAB_RESULT.html)`
-   `INSERT ... [[REFERENCE] INTO dobj](ABAPINSERT_ITAB_RESULT.html)`
-   `COLLECT ... [[REFERENCE] INTO dobj](ABAPCOLLECT_ITAB_RESULT.html)`
-   `APPEND ... [[REFERENCE] INTO dobj](ABAPAPPEND_RESULT.html)`
-   `MODIFY ... [[REFERENCE] INTO dobj](ABAPMODIFY_ITAB_RESULT.html)`
-   `FIND ... IN TABLE [MATCH COUNT mcnt](ABAPFIND_ITAB_OPTIONS.html)`\\
    `IN TABLE [MATCH LINE mlin](ABAPFIND_ITAB_OPTIONS.html)`\\
    `IN TABLE [MATCH OFFSET moff](ABAPFIND_ITAB_OPTIONS.html)`\\
    `IN TABLE [MATCH LENGTH mlen](ABAPFIND_ITAB_OPTIONS.html)`\\
    `IN TABLE [RESULTS result_tab|result_wa](ABAPFIND_ITAB_OPTIONS.html)`\\
    `IN TABLE [SUBMATCHES s1 s2 ...](ABAPFIND_ITAB_OPTIONS.html)`
-   `REPLACE ... IN TABLE [REPLACEMENT COUNT rcnt](ABAPREPLACE_ITAB_OPTIONS.html)`\\
    `IN TABLE [REPLACEMENT LINE rlin](ABAPREPLACE_ITAB_OPTIONS.html)`\\
    `IN TABLE [REPLACEMENT OFFSET moff](ABAPREPLACE_ITAB_OPTIONS.html)`\\
    `IN TABLE [REPLACEMENT LENGTH mlen](ABAPREPLACE_ITAB_OPTIONS.html)`\\
    `IN TABLE [RESULTS result_tab|result_wa](ABAPREPLACE_ITAB_OPTIONS.html)`
-   Target fields of the ABAP SQL statement `SELECT`:
-   `SELECT ... [INTO (elem1, elem2, ... )](ABAPINTO_CLAUSE.html)`
-   `SELECT ... [INTO wa](ABAPINTO_CLAUSE.html)`
-   `SELECT ... [INTO TABLE itab](ABAPINTO_CLAUSE.html)`
-   Cursor field of the ABAP SQL statement `OPEN CURSOR`:
-   `OPEN CURSOR [dbcur](ABAPOPEN_CURSOR.html)`
-   Here, only `DATA` but not `FINAL` can be used.
-   Target fields of the statement `DESCRIBE`:
-   `DESCRIBE FIELD ... [TYPE typ [COMPONENTS com] LENGTH ilen DECIMALS dec](ABAPDESCRIBE_FIELD.html)`\\
    `[OUTPUT-LENGTH olen HELP-ID hlp EDIT MASK mask](ABAPDESCRIBE_FIELD.html)`
-   `DESCRIBE TABLE ... [KIND knd LINES lin OCCURS n](ABAPDESCRIBE_TABLE.html)`
-   `DESCRIBE DISTANCE ... [INTO dst](ABAPDESCRIBE_DISTANCE.html)`
-   Target fields of various `GET` statements:
-   `GET PARAMETER ... [FIELD dobj](ABAPGET_PARAMETER.html)`
-   `GET PF-STATUS [status](ABAPGET_PF.html)`
-   `GET REFERENCE [INTO dref](ABAPGET_REFERENCE.html)`
-   `GET RUN TIME FIELD [rtime](ABAPGET_RUN_TIME.html)`
-   `GET TIME [FIELD tim](ABAPGET_TIME.html)`
-   Work area in statement for dynpros:
-   `LOOP AT SCREEN ... [INTO wa](ABAPLOOP_AT_SCREEN.html)`
-   Target field for message output:
-   `MESSAGE ... [INTO text](ABAPMESSAGE.html)`
-   Target fields in file interface statements:
-   `READ DATASET ... [LENGTH alen](ABAPREAD_DATASET.html)`
-   `GET DATASET ... [POSITION pos](ABAPGET_DATASET.html)\ [ATTRIBUTES attr](ABAPGET_DATASET.html)`
-   Target field for a serialization:
-   `CALL TRANSFORMATION ... [RESULT XML rxml](ABAPCALL_TRANSFORMATION.html)`
-   All write positions during program generation:
-   `GENERATE SUBROUTINE POOL ... [NAME prog](ABAPGENERATE_SUBROUTINE_POOL.html)\ [error_handling](ABAPGENERATE_SUBR_ERROR_HANDLING.html)`
-   [RAP](ABENRAP_GLOSRY.html) response structures and internal tables typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html):
-   ``MODIFY [ENTITY|ENTITIES] ... [[`response_param`](ABAPEML_RESPONSE.html)].``
-   ``COMMIT ENTITIES ... [[`response_param`](ABAPEML_RESPONSE.html)].``
-   ``GET PERMISSIONS ... [[`response_param`](ABAPEML_RESPONSE.html)].``
-   ``READ [ENTITY|ENTITIES] ... [[`response_param`](ABAPEML_RESPONSE.html)].``
-   ``SET LOCKS ... [[`response_param`](ABAPEML_RESPONSE.html)].``

-   Positions for the inline declaration of field symbols with [`FIELD-SYMBOL(<fs>)`](ABENFIELD-SYMBOL_INLINE.html). These are all places where a memory area can be assigned to a field symbol.

-   Field symbol in the statement `ASSIGN`:
-   `ASSIGN... [TO <fs>](ABAPASSIGN.html)`
-   Field symbols in statements for internal tables:
-   `READ TABLE ... [ASSIGNING <fs>](ABAPREAD_TABLE_OUTDESC.html)`
-   `LOOP AT ... [ASSIGNING <fs>](ABAPLOOP_AT_ITAB_RESULT.html)`
-   `INSERT ... [ASSIGNING <fs>](ABAPINSERT_ITAB_RESULT.html)`
-   `COLLECT ... [ASSIGNING <fs>](ABAPCOLLECT_ITAB_RESULT.html)`
-   `APPEND ... [ASSIGNING <fs>](ABAPAPPEND_RESULT.html)`
-   `MODIFY ... [ASSIGNING <fs>](ABAPMODIFY_ITAB_RESULT.html)`

SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab). abenabap.html abenabap\_reference.html abenabap\_syntax.html abenabap\_statements.html abenoperand\_positions.html abenexpression\_positions.html abenexpression\_positions\_write.html