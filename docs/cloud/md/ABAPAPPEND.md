---
title: "ABAPAPPEND"
description: |
  ABAPAPPEND - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPAPPEND.htm"
abapFile: "ABAPAPPEND.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "field-symbol", "ABAPAPPEND"]
---

``APPEND [`line_spec`](ABAPAPPEND_LINESPEC.html) TO itab [SORTED BY comp]\ [[`result`](ABAPAPPEND_RESULT.html)].``

[`... SORTED BY comp`](#ABAP_ONE_ADD@1@)

This statement appends one or more lines [`line_spec`](ABAPAPPEND_LINESPEC.html) to an internal index table `itab`. It is appended so that a new last line is created with regard to the primary table index.

If `itab` is a [standard table](ABENSTANDARD_TABLE_GLOSRY.html), `SORTED BY` can be used to sort the table in a specified way. [`result`](ABAPAPPEND_RESULT.html) can be used when inserting a single line to set a reference to the inserted line in the form of a field symbol or a data reference.

For the individual table types, appending is done as follows:

Exceptions are raised in the following cases:

The statement `APPEND` sets `sy-tabix` to the line number of the last appended line in the primary table index.

100 random numbers are appended to the internal table `itab` with line type `i`.

If used correctly, this addition can produce ranking lists in descending order. This only works if a value greater than 0 is specified in the declaration of the internal table in the addition [`INITIAL SIZE`](ABAPTYPES_ITAB.html). If the value 0 is specified for `INITIAL SIZE`, the statement `APPEND` is ignored when used with the addition `SORTED BY`.

The addition `SORTED BY` can be used only when a work area `wa` is specified and for a standard table. `wa` must also be [compatible](ABENCOMPATIBLE_GLOSRY.html) with the line type of the table. The component `comp` can be specified as shown in the section [Specifying Components](ABENITAB_COMPONENTS.html), however, only a single component can be addressed using the object component selector, and no attributes of classes.

Provided that the declaration of the internal table for `INITIAL SIZE` has a value greater than zero, the statement is executed in two steps:

When using only the statement `APPEND` with the addition `SORTED BY` to fill an internal table with a value no greater than 0 for `INITIAL SIZE`, this rule produces an internal table that contains as many lines as specified in its definition after `INITIAL SIZE` and that is sorted in descending order with respect to the primary table index by component `comp` (ranking list).

Creation of a ranking of the three flights of a connection showing the most free seats.

`CX_SY_ITAB_DUPLICATE_KEY`

-   To standard tables, lines are appended directly and without checking the content of the internal table.
-   Lines are appended to [sorted tables](ABENSORTED_TABLE_GLOSRY.html) only if they match the sort order and do not create duplicate entries if the primary table key is unique.
-   No lines can be appended to [hashed tables](ABENHASHED_TABLE_GLOSRY.html).

-   If a line to be appended would produce a duplicate entry in a unique primary table key, an uncatchable exception is raised.
-   If a line to be appended would produce a duplicate entry in a unique secondary table key, a catchable exception of the class `CX_SY_ITAB_DUPLICATE_KEY` is raised.
-   If a block of lines to be appended would produce a duplicate entry in a unique secondary table key, an uncatchable exception is raised.
-   If a line to be appended would destroy the sort sequence of sorted tables, an uncatchable exception is raised (the secondary index of a sorted secondary key, however, is updated before it is used again).

-   The administration of a unique secondary table key is updated immediately; the administration of a non-unique key is not updated until the secondary table key is next used explicitly (lazy update). Runtime costs for creating or updating a non-unique secondary table key are not incurred therefore until it is used for the first time.
-   The [value operator](ABENVALUE_OPERATOR_GLOSRY.html)\\ [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can also be used to [construct](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) the content of internal tables.

-   Starting from the final line, the table is searched for a line in which the value of the component `comp` is greater than or equal to the value of the component `comp` of `wa`. If a line like this exists, the work area `wa` is inserted after this line with respect to the primary index. In no such line is found, the work area `wa` is inserted in front of the first line with respect to the primary index. The line numbers of all lines after the inserted line are increased by 1 in the primary table index.
-   If the number of lines before the statement is executed is greater than or equal to the number specified in the declaration of the internal table in the addition `INITIAL SIZE`, the new final line is deleted with respect to the primary table index.

-   *Cause:* Duplicate key values in unique secondary key
    *Runtime error:*\\ `ITAB_DUPLICATE_KEY`

DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nFINAL(rnd) = cl\_abap\_random\_int=>create( \\n seed = CONV #( cl\_demo\_date\_time=>get\_utc\_time( ) ) \\n min = 1 \\n max = 100 ). \\n\\ \\nDO 100 TIMES. \\n APPEND rnd->get\_next( ) TO itab. \\nENDDO. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: carrid TYPE sflight-carrid VALUE 'LH', \\n connid TYPE sflight-connid VALUE '0400'. \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = connid )->request( ). \\n\\ \\nDATA: BEGIN OF seats, \\n fldate TYPE sflight-fldate, \\n seatsocc TYPE sflight-seatsocc, \\n seatsmax TYPE sflight-seatsmax, \\n seatsfree TYPE sflight-seatsocc, \\n END OF seats. \\n\\ \\nDATA seats\_tab LIKE STANDARD TABLE OF seats \\n INITIAL SIZE 3. \\n\\ \\nSELECT fldate, seatsocc, seatsmax, seatsmax - seatsocc AS seatsfree \\n FROM sflight \\n WHERE carrid = @carrid AND \\n connid = @connid \\n INTO @seats. \\n APPEND seats TO seats\_tab SORTED BY seatsfree. \\nENDSELECT. \\n\\ \\nout->write( seats\_tab ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html