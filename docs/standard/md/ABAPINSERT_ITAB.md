---
title: "ABAPINSERT_ITAB"
description: |
  ABAPINSERT_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_ITAB.htm"
abapFile: "ABAPINSERT_ITAB.html"
keywords: ["insert", "update", "delete", "loop", "do", "if", "catch", "class", "data", "types", "internal-table", "field-symbol", "ABAPINSERT", "ITAB"]
---

[Short Reference](ABAPINSERT_ITAB_SHORTREF.html)

``INSERT [`line_spec`](ABAPINSERT_ITAB_LINESPEC.html) INTO [`itab_position`](ABAPINSERT_ITAB_POSITION.html)\ [[`result`](ABAPINSERT_ITAB_RESULT.html)].``

This statement adds one or more lines [`line_spec`](ABAPINSERT_ITAB_LINESPEC.html) at a position [`itab_position`](ABAPINSERT_ITAB_POSITION.html) in an internal table. The position can be specified using the primary table key or a table index. [`result`](ABAPINSERT_ITAB_RESULT.html) can be used when appending a single line to set a reference to the appended line in the form of a field symbol or a data reference.

When the line is inserted, all existing unique table keys are checked. These can be a unique [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) and multiple unique [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). The system handles any duplicates of the different keys according to the following hierarchy:

The system field `sy-tabix` is not set.

Insertion of single lines into a [standard table](ABENSTANDARD_TABLE_GLOSRY.html)\\ `int_tab` using the table index and insertion of references to these lines in a [hashed table](ABENHASHED_TABLE_GLOSRY.html)\\ `ref_tab` using the table key. The output in the [`LOOP`](ABAPLOOP_AT_ITAB.html) loops produces the numbers 10 to 1 for `int_tab` and the numbers 1 to 10 for `ref_tab`.

`CX_SY_ITAB_DUPLICATE_KEY`

-   The [value operator](ABENVALUE_OPERATOR_GLOSRY.html)\\ [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can also be used to [construct](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) the content of internal tables.
-   A special variant [`INSERT mesh_path`](ABENMESH_INSERT.html) can be used to insert lines into the last node of a [mesh path](ABENMESH_PATH_GLOSRY.html).
-   The administration of an unique secondary table key is updated immediately ([direct update](ABENDIRECT_UPDATE_GLOSRY.html)) and the administration of a non-unique secondary table key is updated at the next explicit use of the secondary table key ([lazy update](ABENLAZY_UPDATE_GLOSRY.html)). Runtime costs for creating or updating a non-unique secondary table key are not incurred therefore until it is used for the first time.
-   For the latter see the [executable example](ABENDELETE_ITAB_USING_KEY_ABEXA.html).

-   *Cause:* Duplicate key values in unique secondary key
    *Runtime error:*\\ `ITAB_DUPLICATE_KEY`

-   *Cause:* When inserting a set of lines, entries with an identical key were produced (the target table is defined by `UNIQUE`).
    *Runtime error:*\\ `ITAB_DUPLICATE_KEY`
-   *Cause:* Sort order violated when using an `INSERT` with index in a sorted table.
    *Runtime error:*\\ `ITAB_ILLEGAL_SORT_ORDER`
-   *Cause:* Invalid index value (<= 0) when `FROM`, `TO`, or `INDEX` specified
    *Runtime error:*\\ `TABLE_INVALID_INDEX`

1.  If attempting to insert a single line using a primary key would produce duplicates with respect to the unique primary key, no line is inserted and `sy-subrc` is set to 4.
2.  If attempting to insert a single line using the key or the index would result in duplicates with respect to a unique secondary key, a catchable exception of the class `CX_SY_ITAB_DUPLICATE_KEY` is raised.
3.  If attempting to insert a single line using an index or multiple lines as a block would result in duplicates with respect to a unique primary or secondary key, a runtime error occurs.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES intref type REF TO i. \\n\\ \\nDATA: int\_tab TYPE STANDARD TABLE OF i, \\n ref\_tab TYPE HASHED TABLE OF intref \\n WITH UNIQUE KEY table\_line. \\n\\ \\nDO 10 TIMES. \\n INSERT sy-index \\n INTO int\_tab INDEX 1 \\n REFERENCE INTO DATA(dref). \\n INSERT dref \\n INTO TABLE ref\_tab. \\nENDDO. \\n\\ \\nout->begin\_section( \`Integer Table\` ). \\nLOOP AT int\_tab INTO FINAL(int). \\n out->write( |\\{ int \\}| ). \\nENDLOOP. \\nout->next\_section( \`Reference Table\` ). \\nLOOP AT ref\_tab INTO dref. \\n out->write( |\\{ dref->\* \\}| ). \\nENDLOOP. \\n\\ \\nout->display( ). `**sy-subrc**` **Meaning** 0 One or more lines were inserted. 4 No line was inserted because either a line with the same unique key already existed when inserting single lines using the primary key or the specified index was greater than the current number of lines plus 1 when inserting the lines using the table index. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html