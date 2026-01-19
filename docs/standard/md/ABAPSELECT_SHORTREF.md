---
title: "ABAPSELECT_SHORTREF"
description: |
  ABAPSELECT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_SHORTREF.htm"
abapFile: "ABAPSELECT_SHORTREF.html"
keywords: ["select", "update", "loop", "do", "if", "data", "internal-table", "ABAPSELECT", "SHORTREF"]
---

[Reference](ABAPSELECT.html)

``SELECT [SINGLE [FOR UPDATE]]\         \{\ [DISTINCT]\ \{ *                      |\ \{ ..., data_source~*, ..., [`sql_exp`](ABENSQL_EXP_SHORTREF.html)\}\ [AS alias], ... \}\                      | (column_syntax)           FROM \{\ \{\ \{data_source [WITH PRIVILEGED ACCESS]\ [AS tabalias]\}\                  |\ \{\ [(]\ \{data_source [WITH PRIVILEGED ACCESS]\ [AS tabalias]\}|join                        \{[INNER] JOIN\}|\{LEFT|RIGHT [OUTER [MANY TO ONE]] JOIN\}|\{CROSS JOIN\}\                           \{data_source [WITH PRIVILEGED ACCESS]\ [AS tabalias]\}|join [ON join_cond]  [)]\ \}\                  | (source_syntax) [WITH PRIVILEGED ACCESS]\ [AS tabalias]\ \}\                  [\ \{USING CLIENT clnt\}\                  |\ \{USING CLIENTS IN @client_range_tab\}\                  |\ \{USING CLIENTS IN T000\}\                  |\ \{USING ALL CLIENTS\}\                  |\ \{CLIENT SPECIFIED [entity1~clnt]\ [, entity2~clnt] ...\}\ ]\ \}\ \}\       |\ \{ FROM \{\ \{\ \{data_source [WITH PRIVILEGED ACCESS]\ [AS tabalias]\}\                  |\ \{\ [(]\ \{data_source [WITH PRIVILEGED ACCESS]\ [AS tabalias]\}|join                        \{[INNER] JOIN\}|\{LEFT|RIGHT [OUTER [MANY TO ONE]] JOIN\}|\{CROSS JOIN\}\                           \{data_source [WITH PRIVILEGED ACCESS]\ [AS tabalias]\}|join [ON join_cond]  [)]\ \}\                  | (source_syntax) [AS tabalias]\ \}\                  [\ \{USING CLIENT clnt\}\                  |\ \{CLIENT SPECIFIED [entity1~clnt]\ [, entity2~clnt] ...\}\ ]\ \}\           FIELDS [DISTINCT]\                  \{ *                  |\ \{ ..., data_source~*, ..., [`sql_exp`](ABENSQL_EXP_SHORTREF.html)\}\ [AS alias], ... \}\                  | (column_syntax) \}\         [[FOR ALL ENTRIES IN itab] WHERE [`sql_cond`](ABENSQL_COND_SHORTREF.html)]\         [GROUP BY \{[`sql_exp1`](ABENSQL_EXP_SHORTREF.html)|[`grouping_sets1`](ABAPGROUPING_SETS_CLAUSE.html), [`sql_exp2`](ABENSQL_EXP_SHORTREF.html)|[`grouping_sets2`](ABAPGROUPING_SETS_CLAUSE.html), ...\}|(column_syntax)]\         [HAVING [`sql_cond`](ABENSQL_COND_SHORTREF.html)]\         [\{UNION ALL|DISTINCT\}\         |\{INTERSECT DISTINCT\}\         |\{EXCEPT DISTINCT\} SELECT ...]\         [ORDER BY \{\ \{PRIMARY KEY\}\                   |\{\{\{col1|alias1\}\ [ASCENDING|DESCENDING],\}\                     \{\{col2|alias2\}\ [ASCENDING|DESCENDING],\}\                     ... \}\                   | (column_syntax) \}].         \{\ \{ INTO ([NEW] @dobj1|@DATA(dobj1), [NEW] @dobj2|@DATA(dobj2), ...) \}\         |\ \{ INTO [CORRESPONDING FIELDS OF]\ [NEW] @wa [INDICATORS \{[NOT] NULL STRUCTURE null_ind\}\                                                          | (indicator_syntax)]\ \}\         |\ \{ INTO|APPENDING [CORRESPONDING FIELDS OF] TABLE [NEW] @itab                            [INDICATORS \{[NOT] NULL STRUCTURE null_ind\}\                                      | (indicator_syntax)]\                            [PACKAGE SIZE n]\ \}\         |\ \{ INTO [NEW] @DATA(wa) [INDICATORS \{[NOT] NULL STRUCTURE null_ind\}\                                      | (indicator_syntax)]\}\         |\ \{ INTO TABLE [NEW] @DATA(itab) [INDICATORS \{[NOT] NULL STRUCTURE null_ind\}\                                              | (indicator_syntax)]\                                    [PACKAGE SIZE n]\ \}\ \}\         [ EXTENDED RESULT @oref ]\         [ CREATING \{  READER|LOCATOR FOR \{ COLUMNS col1 col2 ... \}\                                   |\ \{ ALL [OTHER]\ [BLOB|CLOB] COLUMNS \}\                      [READER|LOCATOR FOR ...]\ \}\                  |\ \{  (crea_syntax) \}\ ]\         [UP TO n ROWS]\         [OFFSET o]\         [BYPASSING BUFFER]\         [CONNECTION con|(con_syntax)]\    ...  [ENDSELECT.]``

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement. This statement reads data from one or more data sources into data objects. If the result set is not assigned in one step, a loop is opened which is closed using `ENDSELECT`. This loop provides the results in the target fields.

**Specifying the Rows**

**Structure of the result set**

**Specifying the Database Tables**

**Specifying a Condition**

**Specifying a Grouping**

**Specifying a Set Operator**

**Specifying a Sort**

**Specifying the Target Area**

**Specifying Additions**

-   [`SINGLE`](ABAPSELECT_SINGLE.html) - Defines a single row result set. The result set is multirow by default.
-   [`FOR UPDATE`](ABAPSELECT_SINGLE.html) - Sets an [exclusive lock](ABENEXCLUSIVE_LOCK_GLOSRY.html) on a single row in the database.
    

-   [`FIELDS`](ABAPSELECT.html) - Required if the [`FROM` clause](ABAPFROM_CLAUSE.html) was specified first.
-   [`DISTINCT`](ABAPSELECT_CLAUSE.html) - Removes duplicate rows from the result set.
-   [`*`](ABAPSELECT_LIST.html) - Reads all columns of all data sources.
-   [`data_source~*`](ABAPSELECT_LIST.html) - Reads all columns of the specified data source.
-   [`sql_exp`](ABAPSQL_EXPR.html)\\ [`[AS alias]`](ABAPSELECT_LIST.html) - Reads the result of an SQL expression and assigns an alias name `alias` (optional).
-   [`(column_syntax)`](ABAPSELECT_LIST.html) - Specifies the columns as the content of `column_syntax`.
    

-   [`FROM data_source [AS tabalias]`](ABAPFROM_CLAUSE.html)\\
    Specifies a data source [`data_source`](ABAPSELECT_DATA_SOURCE.html). Possible data sources are DDIC database tables, common table expressions, table functions, DDIC views, and [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html) of ABAP Dictionary. Parameters can be passed to CDS entities. Path specifications are possible after common table expressions and CDS views. An [internal table](ABAPSELECT_ITAB.html) can also be specified as a data source.
-   [`FROM [(]\ \{data_source [AS tabalias]\}|join \{[INNER] JOIN\}|\{LEFT|RIGHT [OUTER [MANY TO ONE]] JOIN\}|\{CROSS JOIN\}\ \{data_source [AS tabalias ]\}|join [ON join_cond]\ [)]`](ABAPSELECT_JOIN.html)\\
    \\
    Joins multiple data sources in a join expression. Inner and outer [joins](ABAPSELECT_JOIN.html) can be created with join conditions `join_cond` and [cross joins](ABAPSELECT_JOIN.html) without conditions.
-   [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html)\\
    Disables [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   [`(source_syntax)`](ABAPFROM_CLAUSE.html)\\
    Specifies the data sources as the content of `source_syntax`.
-   [`AS tabalias`](ABAPFROM_CLAUSE.html)\\
    Defines an alias name `tabalias` for the data source.
-   [`USING CLIENT clnt`](ABAPSELECT_CLIENT.html)\\
    Switches implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) to the [client](ABENCLIENT_GLOSRY.html) specified in `clnt`.
-   [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html)\\
    Switches implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) to multiple [clients](ABENCLIENT_GLOSRY.html).
-   [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html)\\
    **Obsolete:** Disables implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html).
    

-   [`FOR ALL ENTRIES IN itab`](ABENWHERE_ALL_ENTRIES.html)\\
    Enables a condition to be used after `WHERE` on all rows in an internal table `itab`.
-   [`WHERE sql_cond`](ABAPWHERE.html)\\
    Restricts the result set using the condition `sql_cond`. The condition can consist of different relational expressions.
    

-   [`GROUP BY \{\{sql_exp1|grouping_sets1, sql_exp2|grouping_sets2, ...\}\ | (column_syntax) \}`](ABAPGROUPBY_CLAUSE.html)\\
    Combines groups of rows that have the same content in the columns `col1`, `col2`, ... or in SQL expressions `sql_exp1`, `sql_exp2`, ... into a single row of the result set. Here, the columns can be specified dynamically in `column_syntax`. `grouping_sets` can be used to define multiple grouping sets under a `GROUP BY` clause.
-   [`HAVING sql_cond`](ABAPHAVING_CLAUSE.html)\\
    Restricts rows combined in groups in the result set using a condition `sql_cond`.
    

-   [`UNION ALL|DISTINCT SELECT ...`](ABAPUNION_CLAUSE.html)\\
    \\
    Creates a union of the rows of the result sets of two `SELECT` statements.
-   [`INTERSECT DISTINCT SELECT ...`](ABAPUNION_CLAUSE.html)\\
    \\
    Creates an intersection of the rows of the result sets of two `SELECT` statements.
-   [`EXCEPT DISTINCT SELECT ...`](ABAPUNION_CLAUSE.html)\\
    \\
    Creates a difference of the rows of the result sets of two `SELECT` statements.
    

-   [`ORDER BY \{PRIMARY KEY\}|\{\{\{col1|alais1\}\ [ASCENDING|DESCENDING],\}\ \{\{col2|alias2\}\ [ASCENDING|DESCENDING],\} ...\}|(column_syntax)`](ABAPORDERBY_CLAUSE.html)\\
    \\
    Sorts the result set by [primary key](ABENPRIMARY_KEY_GLOSRY.html), statically specified columns `col1`, `col2`, ... or `alias1`, `alias2`, ... or dynamically specified columns in `column_syntax`. The sort direction can be specified for individual columns.
    

-   [`INTO [NEW] @wa|([NEW] @dobj1, [NEW] @dobj2 ...)`](ABAPINTO_CLAUSE.html)\\
    Specifies a work area `wa` or a list of data objects `dobj1 dobj2 ...` as the target fields. With the addition [`NEW`](ABAPSELECT_INTO_TARGET.html), reference variables are used and anonymous data objects are created.
-   [`INTO|APPENDING TABLE itab [PACKAGE SIZE n]`](ABAPINTO_CLAUSE.html)\\
    Specifies an internal table `itab` as the target area. The result set is read into or attached to the table as a whole or in packages. With the addition [`NEW`](ABAPSELECT_INTO_TARGET.html), a reference variable is used and an anonymous data object is created.
-   [`CORRESPONDING FIELDS OF`](ABAPINTO_CLAUSE.html)\\
    Transports only the columns that have target fields with the same name.
-   [`[NEW] @DATA(wa)`](ABAPINTO_CLAUSE.html), [`[NEW] @DATA|@FINAL(itab)`](ABAPINTO_CLAUSE.html)\\
    Inline declaration of the target area or of reference variables.
-   [`INDICATORS ...`](ABAPSELECT_INDICATORS.html)\\
    Specifies indicators such as the [null indicator](ABENNULL_INDICATOR_GLOSRY.html).
-   [`EXTENDED RESULT @oref`](ABAPSELECT_EXTENDED_RESULT.html)\\
    Provides an extended result in a result object.
-   [`CREATING READER|LOCATOR FOR ... COLUMNS ...`](ABAPSELECT_CREATING.html)\\
    Specifies what type of [LOB handle](ABENLOB_HANDLE_GLOSRY.html) is created.
    

-   [`UP TO n ROWS`](ABAPSELECT_UP_TO_OFFSET.html)\\
    Restricts the number of rows read to `n`.
-   [`OFFSET o`](ABAPSELECT_UP_TO_OFFSET.html)\\
    Reads the rows from the offset `o`.
-   [`BYPASSING BUFFER`](ABAPSELECT_BYPASSING_BUFFER.html)\\
    Bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).
-   [`CONNECTION con|(con_syntax)`](ABAPSELECT_CONNECTION.html)\\
    Executes the statement on a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html).
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html