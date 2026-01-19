---
title: "ABENLDB_SEARCH_HELP"
description: |
  ABENLDB_SEARCH_HELP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_SEARCH_HELP.htm"
abapFile: "ABENLDB_SEARCH_HELP.html"
keywords: ["select", "delete", "loop", "do", "if", "case", "data", "internal-table", "ABENLDB", "SEARCH", "HELP"]
---

A logical database can be assigned a suitable [search help](ABENSEARCH_HELP_GLOSRY.html). The best type of search help for a logical database depends on the content of the database. For example, if a logical database is created to read vendor records, one output field of the search help must be the vendor number. The logical database is provided with the content of the search help output fields at runtime for the actual access to the database tables.

To enable the user to use the search help, the a special parameter with the addition [`AS SEARCH PATTERN`](ABAPPARAMETERS_LDB.html) must be declared in the selection include. The selection screen then displays the *Selection by Search Help* box, including input fields for the search help ID and the search string. There is also a pushbutton for complex search helps and multiple selection is allowed for every individual field.

The runtime framework is responsible for interpreting the user input on the selection screen and reading the value list from the database. These lines are passed to the database program in the internal table `ldb_sp` and the subroutine `put_ldb_sp` is called for the root node instead of the subroutine `put_node`. Here, `ldb` is the name of the logical database. The value list in the internal table `ldb_sp` is used to enable this subroutine to read the actual data and raise the event `GET` for the root node using the statement `PUT`. It is often useful to call the subroutine `put_node` for the root node from `put_ldb_sp`. The subroutine then selects the data and raises the associated `GET` event using `PUT`. The structure of the internal table `ldb_sp` and other automatically generated tables is displayed as a comment in the database program source code. The source code also contains documentation about how to use these tables.

The options provided by [dynamic selections](ABENLDB_FREE_SELECTIONS.html) and [field selections](ABENLDB_FIELD_SELECTIONS.html) should also be exploited when using search helps to access the database. Search helps can also be used to improve performance. The internal tables `get_events`, `sp_fields`, and `sp_tables` plus the structure `sp_events` can be used to program different database reads in the database program, depending on which tables and fields are used and filled. For example, it is possible to use views or joins and collect the read records in internal tables and thereby process the internal tables later and raise the respective `GET` events.

An imaginary logical database `ZZF` with the root node `KNA1` is linked with the search help `DEBI`. The selection include `DBZZFSEL` contains the following lines:

The source text of the database program now contains further comment lines, indicating that the following tables and fields were created:

If the user selects all vendors in the search help on the selection screen whose sort field starts with *ABC* and this applies to the customer numbers 17, 125, and 230, the tables above are filled as follows:

Table `zzf_sp`

Table `sp_fields`

Table `sp_tables`

The subroutine `put_zzf_sp` (in comments) can now, for example, be modified and activated as follows to use the data records from the internal table `zzf_sp`:

The table `get_events` is used to check whether the application program contains a `GET` statement for `KNA1` or whether the search help has assigned appropriate values for key fields. If this is the case, `put_kna1_sp` is called, which executes a `SELECT` loop across `KNA1` to read the lines that match the key fields in `zzf_sp`. The statement `PUT kna1` is executed in the `SELECT` loop. Another option would be as follows:

This deletes the selection table `skunnr` for `KNA1` and fills it with values from `zzf_sp`. The table `get_events` is used to check whether the application program contains a `GET` statement for `KNA1`. If this is the case, the subroutine `put_kunnr` is called. Here, the data from `KNA1` is read as specified by the selection table `skunnr` and `PUT kna1` is executed.

-   Internal table `zzf_sp` in accordance with the following declaration:
-   `DATA: BEGIN OF zzf_sp OCCURS 1000, kunnr LIKE kna1-kunnr, END OF zzf_sp.`
-   The search help selections of the user create a hit list in the filled output fields of the search help. This hit list is passed to the database program in the table `zzf_sp`.
-   Internal table `sp_fields` in accordance with the following declaration:
-   `DATA: BEGIN OF sp_fields OCCURS 10. INCLUDE STRUCTURE rsspfields. DATA: END OF sp_fields.`
-   If a collective search help is assigned to the logical database, an elementary search help usually only fills some of the output fields of the collective search help. The table `sp_fields` tells the program which fields these are. The component `supplied` is non-initial whenever the search help passes a value to the field in `fieldname`.
-   Internal table `sp_tables` in accordance with the following declaration:
-   `DATA: BEGIN OF sp_tables OCCURS 10. INCLUDE STRUCTURE rssptabs. DATA: END OF sp_tables.`
-   If the search help contains fields from different tables, the table `sp_tables` tells the program which tables are respected by the search help. The component `supplied` is non-initial whenever the search help passes a value to the table in `tablename`.
-   Character-like data object `sp_events` with the length 200.
-   Each character in `sp_tables` stands for a node in the structure of the logical database (for example, the first character stands for the root node). The content of the individual items has the following meaning for the corresponding node:

-   *X2*: Node is addressed in the application program using the statement `GET` and the search help assigned values for the key fields to `sp_ldb`.
-   *R*: Node is addressed in the application program using the statement `GET`, but the search help did not assign values for the key fields to `sp_ldb`.
-   *M*: Node is not addressed in the application program using the statement `GET`, but the search help assigned values for the key fields to `sp_ldb`.
-   blank: Table is not addressed in the application program using the statement `GET` and the search help did not assign values for the key fields to `sp_ldb`.

SELECT-OPTIONS skunnr FOR kna1-kunnr. \\nPARAMETERS p\_sp AS SEARCH PATTERN FOR NODE kna1. FORM put\_zzf\_sp. \\n CASE sp\_events(1). \\n WHEN 'X' OR 'M'. \\n PERFORM put\_kna1\_Ssp \\n WHEN OTHERS. \\n PERFORM put\_kna1. \\n ENDCASE. \\nENDFORM. \\nFORM put\_kna1\_sp. \\n SELECT \* FROM kna1 FOR ALL ENTRIES IN zzf\_sp \\n WHERE kunnr = zzf\_sp\_kunnr. \\n PUT kna1. \\n ENDSELECT. \\nENDFORM. FORM put\_zzf\_sp. \\n IF sp\_everts(1) NE abap\_false \\n CLEAR skunnr. \\n REFRESH skunnr. \\n skunnr-sign = 'I'. \\n skunnr-option = 'EQ'. \\n LOOP AT zzf\_sp. \\n skunnt-low = zzf\_sp-kunnr. \\n APPEND skunnr TO skunnr. \\n ENDLOOP. \\n ENDIF. \\n READ TABLE GET\_EVENTS WITH KEY 'KNA1'. \\n IF sy-subrc = 0 AND get\_events-kind IS NOT INITIAL. \\n PERFORM put\_kunnr. \\n ENDIF. \\nENDFORM. `kunnr` *17* *125* *230* `fieldname` `supplied` `KUNNR` *X* `tablename` `supplied` `KNA1` *X* abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_oview.html abenldb\_others.html