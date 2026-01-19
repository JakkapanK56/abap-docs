---
title: "ABAPGET_CURSOR_LIST"
description: |
  ABAPGET_CURSOR_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_CURSOR_LIST.htm"
abapFile: "ABAPGET_CURSOR_LIST.html"
keywords: ["if", "data", "field-symbol", "ABAPGET", "CURSOR", "LIST"]
---

[Short Reference](ABAPGET_CURSOR_SHORTREF.html)

``GET CURSOR \{\ \{FIELD field [[`field_properties`](ABAPGET_CURSOR_LIST_FIELD.html)]\}``\\ 
           ``|\ \{LINE line [[`line_properties`](ABAPGET_CURSOR_LIST_FIELD.html)]\}\ \}.``

[1. `GET CURSOR FIELD field [field_properties].`](#ABAP_VARIANT_1@1@)

[2. `GET CURSOR LINE line [line_properties].`](#ABAP_VARIANT_2@1@)

If this statement is specified in list processing, it passes the name of the output field or the number of the list line on which the screen cursor in the currently displayed list is positioned after the user action to the variables `field` or `line`, depending on how `FIELD` or `LINE` is specified. Further information on the cursor position can be read if required.

Returns the name of the output field in `field` after a user action on which the cursor is positioned in the currently displayed list. `field` expects a character-like variable. The addition [`field_properties`](ABAPGET_CURSOR_LIST_FIELD.html) can be used to read further information about the cursor position.

If the screen cursor is on a subarea of a structure that is output using an [offset/length](ABENOFFSET_LENGTH.html) specification, the following rules apply:

These rules also apply to substructures.

The addition `FIELD` can only be used to determine the names of global data objects of the ABAP program. If the cursor is positioned on the output of a data object that is not visible in the current context or a literal, `field` is initialized. This has no effect on the other additions or on `sy-subrc`.

If the cursor is on the output area of a data object that was accessed in the `WRITE` statement using a field symbol, the name of the data object is returned and not the name of the field symbol.

Returns the number of the list line in `line` after a user action. This line is where the cursor is positioned in the currently displayed list. `line` expects a variable of type `i`. The addition [`line_properties`](ABAPGET_CURSOR_LIST_LINE.html) can be used to read further information about the cursor position.

-   The subarea of the structure was output using the name of the structure:

-   If the subarea includes the entire structure, the name of the structure is returned.
-   If the subarea only includes a part of the structure, the name of the component is returned in which the subarea begins.

-   The subarea of the structure has been displayed using the name of a component of the structure:

-   The name of the component is returned in which the subarea begins.

`**sy-subrc**` **Meaning** 0 The cursor is on a field or a list line and the statement was executed successfully. 4 The cursor is not on any field or any list line. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html