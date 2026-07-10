---
title: "Line Width - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenline_width_guidl.htm"
abapFile: "abenline_width_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Formatting the Source Code](ABENFORMATTING_CODE_GUIDL.md) → 

Line Width

Background

The maximum line width of an ABAP program is restricted to 255 characters. The editor allows you to write more than 255 characters, but it breaks a line that contains more than 255 characters between two tokens when you press Enter.

Rule

Do not use full line width

Limit the width of a line in the source code to a reasonable size. As a rule of thumb, you should be able to print a program on common paper formats without truncation or line breaks.

Details

Whereas the old restriction to 72 characters was too strict, the full utilization of the 255 characters that are now available would not make a program any more legible. Although very large monitors are now available, it can still be necessary, for example, for code inspections or reviews, to print a program or program section. It is therefore advisable to break long [statements](ABENSTATEMENT_GUIDL.md "Guideline") at suitable positions and to distribute long literals across multiple lines using the literal operator (&) or the concatenation operator (&&).

Note

The example programs in the documentation are restricted in width in a natural way, which makes them legible at the same time. Unfortunately this sometimes means using shorter [names](ABENTELLING_NAMES_GUIDL.md "Guideline") than would actually be possible.

Example

In the first method of the program PGL\_PROGRAM\_LINE\_WIDTH, a very long literal is assigned to the return value. The literal is not displayed completely even on very wide screens, and in the printout it will be broken up or even truncated.

The second method uses a literal whose content is identical to the one of the previous method; here, however, it is composed of multiple shorter literals using the literal operator &. The literal is split at appropriate positions, and the method becomes more legible both on the screen and the printout.
