---
title: "ABENLDB_FIELD_SELECTIONS"
description: |
  ABENLDB_FIELD_SELECTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_FIELD_SELECTIONS.htm"
abapFile: "ABENLDB_FIELD_SELECTIONS.html"
keywords: ["select", "if", "data", "internal-table", "ABENLDB", "FIELD", "SELECTIONS"]
---

The statement [`SELECTION-SCREEN FIELD SELECTION FOR NODE|TABLE node`](ABAPSELECTION-SCREEN_LDB_FIELD.html) defines a node `node` of a logical database in the selection include for field selections. This means that individual columns can be named in the `SELECT` list in the `SELECT` statements of the corresponding subroutine `put_node`, instead of just all columns with an asterisk `*`. This option is used to keep the amount of data passed from the database at a minimum and can have better performance than always reading the data from all columns in a database table.

The columns read for each node predefined for field selections can be specified using the `FIELD` addition of the statement `GET` in the linked executable program or in the parameter `FIELD_SELECTION` of the function module `LDB_PROCESS`. The database program of the logical database has access to the names of the columns in the data object `select_fields`. This data object is generated automatically in the logical database program with reference to the type `rsfs_fields` of the type pool `RSFS`. The data object can also be used in every application program linked with the logical database program.

`select_fields` is a deep internal table with the components `tablename` and `fields`. In each line, the column `tablename` contains the name of a node for which field selection is defined. For each of these nodes, the table-like component `fields` contains the columns specified in the `GET` statements of the application program. The table `fields` is defined so that it can be used directly to specify columns dynamically in a `SELECT` statement.

The database table `SCARR` is the root node of the logical database `DEMO` and the table `SPFLI` is the only successor. The selection include `DBDEMOSEL` contains the following lines:

The subroutine `put_spfli` of the database program `SAPDBDEMO` uses the field selections as follows:

The line of the internal table `select_fields` for which the column `tablename` contains the value *SCARR* is read to the local helper structure `fieldlists`. The `STATICS` statements and the field `flag_read` ensure that the table `select_fields` only needs to be read once each time the program is executed. The table `fieldlists-fields` is used in the dynamic `SELECT` list. An executable program that is linked with the logical database can now contain the following lines:

The `FIELDS` addition of the statement `GET` defines which fields of the database table, except the primary key, are to be read by the logical database. Internally, the runtime framework fills `select_fields` with the appropriate values. These values can be checked in the ABAP Debugger.

SELECT-OPTIONS s\_carrid FOR scarr-carrid. \\nSELECT-OPTIONS s\_connid FOR spfli-connid. \\nSELECTION-SCREEN FIELD SELECTION FOR TABLE spfli. FORM put\_spfli. \\n STATICS: fieldlists TYPE rsfs\_tab\_fields, \\n flag\_read TYPE abap\_bool. \\n IF flag\_read = abap\_false. \\n fieldlists-tablename = 'SPFLI'. \\n READ TABLE select\_fields WITH KEY fieldlists-tablename \\n INTO fieldlists. \\n flag\_read = abap\_true. \\n ENDIF. \\n SELECT (fieldlists-fields) \\n FROM spfli \\n INTO CORRESPONDING FIELDS OF spfli \\n WHERE carrid = scarr-carrid \\n AND connid IN s\_connid. \\n PUT spfli. \\n ENDSELECT. \\nENDFORM. NODES spfli. \\n... \\nGET spfli FIELDS cityfrom cityto. \\n... abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_oview.html abenldb\_others.html