---
title: "ABAPSELECT_DECLARE_CLIENT"
description: |
  ABAPSELECT_DECLARE_CLIENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT_DECLARE_CLIENT.htm"
abapFile: "ABAPSELECT_DECLARE_CLIENT.html"
keywords: ["select", "do", "if", "data", "types", "internal-table", "ABAPSELECT", "DECLARE", "CLIENT"]
---

`... DECLARE CLIENT clnt_col`

The optional addition `DECLARE CLIENT` declares the data source as client-dependent for the current read access and the column specified by the operand `clnt_col` as its [client column](ABENCLIENT_COLUMN_GLOSRY.html). ABAP SQL's [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) takes place for that data source as it does for any [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) data source.

The addition `DECLARE CLIENT` can be specified for all [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) data sources [`data_source`](ABAPSELECT_DATA_SOURCE.html) that have a column with a name specified by the operand `clnt_col`. The column must have type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-3--of-length-3---the-following--select--statements-read-data-for-the-current-client-from-an-internal-table--in-the-first--select--statement--the-column--col2--is-declared-as-the-client-column-and-implicit-client-handling-takes-place---select--statement-uses-an-explicit--where--condition-------the-addition--declare-client--can-be-used-in-any-positions-where-data-sources-can-be-specified--as-for-example-in-join-expressions-and-for-all-kinds-of-data-sources-including--sql-hierarchies--abenselect-hierarchy-html---the-column--clnt-col--should-be-specified-in-a-way-to-produce-meaningful-results------examples-for--client-independent--abenclient-independent-glosry-html--data-sources-are--------ddic-database-table--abenddic-db-table-glosry-html--without--client-column--abenclient-column-glosry-html--as-the-first-key-field-------cds-view-entities--abencds-v2-view-glosry-html--that-are-implicitly-or-declared-as-client-independent------any--common-table-expression--abencommon-table-expression-glosry-html---ctes-------any-internal-table-specified-with---from-itab`](ABAPSELECT_ITAB.html)

-   The addition `DECLARE CLIENT` enables client handling for data sources that otherwise are never client-dependent (CTEs, internal tables).
-   The column specified by `client_col` can have any position in the data source. It is not required to be in the first position.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF struc, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE c LENGTH 3, \\n col3 TYPE i, \\n END OF struc, \\n itab TYPE STANDARD TABLE OF struc WITH EMPTY KEY. \\n\\ \\nDATA(itab) = VALUE itab( \\n ( col1 = 'A' col2 = '000' col3 = 1 ) \\n ( col1 = 'B' col2 = '100' col3 = 2 ) \\n ( col1 = 'C' col2 = '200' col3 = 3 ) \\n ( col1 = 'D' col2 = '400' col3 = 4 ) \\n ). \\n\\ \\nSELECT \* \\n FROM @itab AS itab DECLARE CLIENT col2 \\n INTO TABLE @FINAL(result\_current). \\n\\ \\nout->write( result\_current ). \\n\\ \\nSELECT \* \\n FROM @itab AS itab \\n WHERE col2 = @sy-mandt \\n INTO TABLE @FINAL(result\_sy\_mandt). \\n\\ \\nASSERT result\_sy\_mandt = result\_current. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html