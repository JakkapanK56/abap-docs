---
title: "Statements per Program Line - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatement_guidl.htm"
abapFile: "abenstatement_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Formatting the Source Code](ABENFORMATTING_CODE_GUIDL.md) → 

Statements per Program Line

Background

An ABAP statement (declaration or executable statement) is closed with a period. This statement can be followed by further statements in the same line. Statements can also span multiple lines.

Rule

Maximum of one statement per program line

Write a maximum of one statement in every source code line. Long statements can and should be split at suitable places. This means the statements can be divided up across consecutive lines.

Details

Using multiple statements in one line makes the source code harder to read. If a line contains an entire control structure, the lack of indentations makes it especially difficult to identify the logical structure. Therefore you should try to avoid using more than one statement in a program line.

Besides reduced readability, using multiple statements in one line can also make the code more difficult to debug. Even in single steps, ABAP Debugger stops a maximum of once per executable program line. This makes it impractical for the debugging process if there is more than one statement in a line.

If a statement spans [multiple lines](ABENLINE_WIDTH_GUIDL.md "Guideline") (which occurs frequently due to the potential length of complex ABAP statements), there should be no empty lines between the parts of the statement. The breaks in the statement should occur at semantically suitable places so that groups with a similar semantic meaning are next to each other, if possible. Indentations should be used to ensure that the statement is as well structured and readable as possible.

Bad Example

The following source code shows a program section with correct syntax but that is poorly laid out and difficult to understand. Even the [Pretty Printer](ABENUSE_PRETTY_PRINTER_GUIDL.md "Guideline") can barely improve the layout of the template displayed here.

CLASS class DEFINITION.
  PUBLIC SECTION. METHODS meth. ENDCLASS.

CLASS class IMPLEMENTATION. METHOD meth.
  DATA: itab TYPE TABLE OF dbtab, wa TYPE dbtab.
  SELECT \* FROM dbtab WHERE column = ' ' INTO TABLE @itab.
  IF sy-subrc <> 0. RETURN. ENDIF.
  LOOP AT itab INTO wa. ... ENDLOOP.
  ENDMETHOD. ENDCLASS.

Good Example

The following source code shows the same code as above but with the recommended limit of one statement per line. The complex SELECT statement contains numerous clauses and hence spans multiple consecutive lines.

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS meth.
ENDCLASS.

CLASS class IMPLEMENTATION.
  METHOD meth.
    DATA: itab TYPE TABLE OF dbtab,
          wa   TYPE dbtab.
    SELECT \*
           FROM dbtab
           WHERE column = ' '
           INTO TABLE @itab.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    LOOP AT itab INTO wa.
       ...
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
