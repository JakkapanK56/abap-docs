---
title: "ABAPDATA_SECONDARY_KEY"
description: |
  ABAPDATA_SECONDARY_KEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_SECONDARY_KEY.htm"
abapFile: "ABAPDATA_SECONDARY_KEY.html"
keywords: ["insert", "delete", "loop", "do", "if", "case", "class", "data", "types", "internal-table", "ABAPDATA", "SECONDARY", "KEY"]
---

[Short Reference](ABAPDATA_SHORTREF.html)\\ \\n

`... \{UNIQUE HASHED\}|\{UNIQUE SORTED\}|\{NON-UNIQUE SORTED\}`\\ 
    `KEY key_name [ALIAS alias_name] COMPONENTS comp1 comp2 ...`

Definition of a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) of an internal table. The syntax and semantics of the additions are the same as those for the statement [`TYPES`](ABAPTYPES_SECONDARY_KEY.html) for standalone table types.

[Use secondary keys in a way that benefits the table.](ABENSECONDARY_KEY_GUIDL.html)

Declaration of an internal table with one primary key and two secondary keys.

As in the previous example but with explicit naming of the primary key.

The program `DEMO_SECONDARY_KEYS` demonstrates the declaration and use of a secondary table key and the resulting performance gains.

-   When internal tables are accessed using the statements [`READ TABLE itab`](ABAPREAD_TABLE.html), [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html), [`MODIFY itab`](ABAPMODIFY_ITAB.html), and [`DELETE itab`](ABAPDELETE_ITAB.html) or using [table expressions](ABENTABLE_EXPRESSIONS.html) and in [mesh types](ABAPTYPES_MESH.html) and [mesh paths](ABENMESH_PATHES.html), a secondary key can be used to specify the lines to be processed or the processing order. To do this, the additions `WITH [TABLE] KEY ... COMPONENTS` or `USING KEY` must be specified in the statements and the addition [`KEY`](ABENTABLE_EXP_ITAB_LINE.html) must be used in table expressions. A secondary key is never used implicitly.
-   The statement [`INSERT itab`](ABAPINSERT_ITAB.html) determines the insert position using the primary key and primary index only. A secondary key can be specified only for the source table from which multiple lines are inherited. The latter also applies to the statement [`APPEND`](ABAPAPPEND.html).
-   If different table keys of an internal table contain the same components, a syntax check warning occurs, which can be hidden using a pragma. In the case of a reference to a non-generic table type defined using [`TYPES`](ABAPTYPES_SECONDARY_KEY.html), any pragma specified there is also applied to the `DATA` statement. In the case of a reference to a generic table type for which no primary table key is defined, the specified pragma is not applied to the `DATA` statement, since this statement uses a completed table type implicitly and the pragma must also be specified for `DATA`.
-   For more information, see [`TYPES`](ABAPTYPES_SECONDARY_KEY.html).
-   If a secondary key is defined, the obsolete addition [`WITH HEADER LINE`](ABAPDATA_HEADER_LINE.html) can no longer be specified, even outside classes.

DATA sbook\_tab \\n TYPE STANDARD TABLE \\n OF sbook \\n WITH NON-UNIQUE KEY carrid connid fldate bookid \\n WITH UNIQUE HASHED KEY hash\_key \\n COMPONENTS carrid connid fldate bookid \\n WITH NON-UNIQUE SORTED KEY sort\_key \\n COMPONENTS customid. DATA sbook\_tab \\n TYPE STANDARD TABLE \\n OF sbook \\n WITH NON-UNIQUE KEY primary\_key \\n COMPONENTS carrid connid fldate bookid \\n WITH UNIQUE HASHED KEY hash\_key \\n COMPONENTS carrid connid fldate bookid \\n WITH NON-UNIQUE SORTED KEY sort\_key \\n COMPONENTS customid. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html abapdata\_itab.html abapdata\_keydef.html