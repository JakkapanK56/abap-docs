---
title: "ABAPREAD_TABLE_TRANSPORT_OPTIONS"
description: |
  ABAPREAD_TABLE_TRANSPORT_OPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPREAD_TABLE_TRANSPORT_OPTIONS.htm"
abapFile: "ABAPREAD_TABLE_TRANSPORT_OPTIONS.html"
keywords: ["select", "loop", "while", "if", "case", "class", "data", "ABAPREAD", "TABLE", "TRANSPORT", "OPTIONS"]
---

\\ ``... [COMPARING \{\ \{[`comp1 comp2 ...`](ABENITAB_COMPONENTS.html)\}|\{ALL FIELDS\}|\{NO FIELDS\}\ \}]\      [TRANSPORTING \{\ \{[`comp1 comp2 ...`](ABENITAB_COMPONENTS.html)\}|\{ALL FIELDS\}\ \}] ...``

The addition `COMPARING` compares the specified components `comp1 comp2 ...` or their subareas or attributes in a found line before they are transported with the corresponding components of the work area. If `ALL FIELDS` is specified, all components are compared. If no `NO FIELDS` is specified, no components are compared. If the content of the compared components is identical, `sy-subrc` is set to 0 and otherwise to 2. The line found is assigned to the work area independently of the result of the comparison.

If the addition `TRANSPORTING` is specified, only the specified components `comp1 comp2 ...` or their subareas in the found line are assigned to the corresponding components of the work area or its subareas. If `ALL FIELDS` is specified, all components are assigned.

`COMPARING` must be specified in front of `TRANSPORTING`. The components `comp1 comp2 ...` are specified according to the rules in the section [Specifying Components](ABENITAB_COMPONENTS.html), with the restriction that after `TRANSPORTING`, no attributes of classes can be addressed using the object component selector.

The `READ` statement uses a [`WHILE`](ABAPWHILE.html) loop to read all lines of the table `sflight_tab` one after the other using the primary table index in the work area `sflight_wa`. Only fields that are also in the output are transported. The `COMPARING` addition is used to select all flights in which no seats have yet been booked.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: sflight\_tab TYPE SORTED TABLE OF sflight \\n WITH UNIQUE KEY carrid connid fldate, \\n sflight\_wa LIKE LINE OF sflight\_tab, \\n output TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nDATA subrc TYPE sy-subrc. \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = 'LH' \\n INTO TABLE @sflight\_tab. \\n\\ \\nsubrc = sy-subrc. \\nWHILE subrc = 0. \\n sflight\_wa-seatsocc = 0. \\n READ TABLE sflight\_tab \\n INDEX sy-index \\n INTO sflight\_wa COMPARING seatsocc \\n TRANSPORTING carrid \\n connid \\n fldate \\n seatsocc. \\n CASE sy-subrc. \\n WHEN 0. \\n APPEND |\\{ sflight\_wa-carrid \\} \\{ sflight\_wa-connid \\} \\{ \\n sflight\_wa-fldate \\} \\{ sflight\_wa-seatsocc \\} <----!| \\n TO output. \\n subrc = sy-subrc. \\n WHEN 2. \\n APPEND |\\{ sflight\_wa-carrid \\} \\{ sflight\_wa-connid \\} \\{ \\n sflight\_wa-fldate \\} \\{ sflight\_wa-seatsocc \\}| \\n TO output. \\n subrc = 0. \\n WHEN 4 OR 8. \\n EXIT. \\n ENDCASE. \\nENDWHILE. \\nout->write( output ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapread\_table.html abapread\_table\_outdesc.html