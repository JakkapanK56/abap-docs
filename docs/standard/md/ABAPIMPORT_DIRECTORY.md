---
title: "ABAPIMPORT_DIRECTORY"
description: |
  ABAPIMPORT_DIRECTORY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIMPORT_DIRECTORY.htm"
abapFile: "ABAPIMPORT_DIRECTORY.html"
keywords: ["if", "case", "data", "types", "internal-table", "ABAPIMPORT", "DIRECTORY"]
---

[Short Reference](ABAPIMPORT_DIRECTORY_SHORTREF.html)

`IMPORT DIRECTORY INTO itab`\\ 
  `FROM DATABASE dbtab(ar) [TO wa]\ [CLIENT cl] ID id.`

This statement passes a table of contents of all data objects of a [data cluster](ABENDATA_CLUSTER_GLOSRY.html) that was written to the database table `dbtab` in the area `ar` and under the ID specified in `id` using the statement `EXPORT` to the internal table `itab`. The database table `dbtab` must be [structured](ABENEXPORT_DATA_CLUSTER_INDX.html) in the same way as described for the [`EXPORT`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) statement as an [export/import table](ABENEXPORT_IMPORT_TABLE_GLOSRY.html). `id` expects a [flat](ABENFLAT_GLOSRY.html)\\ [character-like data object](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) that contains the ID of the data cluster and the two-character area `ar` must be specified directly. The additions `TO` and `CLIENT` have the same meaning as described in the statement [`IMPORT`](ABAPIMPORT_MEDIUM.html) for important data from the data cluster.

For `itab`, index tables whose line type matches the structure `CDIR` in the ABAP Dictionary are allowed. The following table shows the components of the structure `CDIR` and their meaning.

Storing three data objects in a data cluster and reading the directory. Afterwards, the content of the table `itab` is as follows:

-   *Cause:* Target table has an invalid structure.
    *Runtime error:*\\ `IMPORT_DIR_WRONG_TABLE_STRUC`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: f1 TYPE decfloat16, \\n f2 TYPE TABLE OF i, \\n f3 TYPE spfli. \\n\\ \\nDATA itab TYPE STANDARD TABLE OF cdir. \\n\\ \\nf2 = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n\\ \\nEXPORT par1 = f1 \\n par2 = f2 \\n par3 = f3 TO DATABASE demo\_indx\_blob(hk) ID 'HK'. \\n\\ \\nIMPORT DIRECTORY INTO itab FROM DATABASE demo\_indx\_blob(hk) ID 'HK'. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). **Component** **Type** **Meaning** `**sy-subrc**` **Meaning** `**NAME**` `**OTYPE:**` `**FTYPE**` `**TFILL**` `**FLENG**` `NAME` `CHAR`(30) Name of the parameter under which a data object was stored. `OTYPE` `CHAR`(1) General type of the stored data object. The following values are allowed: *F* for elementary flat data objects, *G* for strings, *R* for [flat structures](ABENFLAT_STRUCTURE_GLOSRY.html), *S* for [deep structures](ABENDEEP_STRUCTURE_GLOSRY.html), *T* for internal tables with flat line type and *C* for tables with a deep line type. `FTYPE` `CHAR`(1) More specific type of the stored data object. For elementary data objects and internal tables with a elementary line type, the data type or line type is returned in accordance with the tables of the return values from [`DESCRIBE FIELD ... TYPE`](ABAPDESCRIBE_FIELD.html). In the case of flat structures and internal tables with flat structured line types, *C* is returned. In the case of [deep](ABENDEEP_GLOSRY.html) structures and internal tables with deep structured line types, *v* is returned. In the case of a table that has an internal table as a line type, *h* is returned. `TFILL` `INT4` Length filled of the stored data object. For strings the length of the content in bytes is returned and for internal tables the number of rows is returned. The value 0 is returned for other data objects. `FLENG` `INT2` Length of stored data object or stored table line in bytes. The value 8 is returned for strings. 0 The specified data cluster was found and a list of the exported data objects was passed to the internal table `itab`. 4 The specified data cluster was not found. *PAR1* *F* *a* 0 8 *PAR2* *T* *I* 10 4 *PAR3* *R* *C* 0 168 abenabap.html abenabap\_reference.html abendata\_cluster.html