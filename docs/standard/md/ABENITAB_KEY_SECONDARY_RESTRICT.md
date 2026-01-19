---
title: "ABENITAB_KEY_SECONDARY_RESTRICT"
description: |
  ABENITAB_KEY_SECONDARY_RESTRICT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_KEY_SECONDARY_RESTRICT.htm"
abapFile: "ABENITAB_KEY_SECONDARY_RESTRICT.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "data", "types", "internal-table", "ABENITAB", "KEY", "SECONDARY", "RESTRICT"]
---

Internal tables with secondary keys can be used in all [processing statements for internal tables](ABENTABLE_PROCESSING_STATEMENTS.html) and other statements that work with internal tables. However, there are also operand positions for internal tables where the use of secondary keys does not make sense and is therefore not supported there.

The use of tables with secondary keys causes syntax or runtime errors for the following operand positions:

-   Internal tables of any table type but without secondary keys are possible for the following:

-   `itab` in [`SEARCH itab for ...`](ABAPSEARCH_ITAB.html) (only index tables, no hashed tables).
-   Actual parameters for a [`TABLES`](ABAPCALL_FUNCTION_DESTINATION_PARA.html) parameter for RFC.

-   Only standard tables without secondary keys are possible for the following:

-   `rspar` in [`SUBMIT WITH rspar`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html) and `range_tab` in [`SUBMIT WITH sel IN range_tab`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html)
-   `itab` in [`FIND IN TABLE itab`](ABAPFIND_ITAB.html) and [`REPLACE IN TABLE itab`](ABAPREPLACE_ITAB.html)
-   `result_tab` in [`SPLIT INTO TABLE result_tab`](ABAPSPLIT.html)
-   `column_syntax` in the [`SELECT` list](ABAPSELECT_LIST.html), in [`GROUP BY`](ABAPGROUPBY_CLAUSE.html), and in [`ORDER BY`](ABAPORDERBY_CLAUSE.html)
-   `cond_syntax` in [`WHERE`](ABENWHERE_LOGEXP_DYNAMIC.html)
-   `source_syntax` in [`SELECT`](ABAPFROM_CLAUSE.html)
-   `target_syntax` in [`INSERT`](ABAPIUMD_TARGET.html), [`UPDATE`](ABAPIUMD_TARGET.html), [`MODIFY`](ABAPIUMD_TARGET.html), and [`DELETE`](ABAPIUMD_TARGET.html)
-   `expr_syntax` in [`UPDATE`](ABAPUPDATE_SET_EXPRESSION.html)
-   `IN`, `OUT`, `INOUT` parameters in [`EXEC SQL - EXECUTE`](ABAPEXEC_PROCEDURE.html)
-   `itab` in [`EXPORT TO INTERNAL TABLE itab`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) and [`IMPORT FROM INTERNAL TABLE itab`](ABAPIMPORT_MEDIUM.html)
-   `itab` in [`GENERATE SUBROUTINE POOL itab`](ABAPGENERATE_SUBROUTINE_POOL.html), [`READ REPORT INTO itab`](ABAPREAD_REPORT.html), [`INSERT REPORT FROM itab`](ABAPINSERT_REPORT.html), and [`SYNTAX-CHECK FOR itab`](ABAPSYNTAX-CHECK_FOR_ITAB.html).
-   `itab` in [`EDITOR-CALL FOR itab`](ABAPEDITOR-CALL_FOR_ITAB.html)
-   `itab` in [`WRITE TO itab`](ABAPWRITE_TO_ITAB.html)

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html abenitab\_key.html abenitab\_key\_secondary.html