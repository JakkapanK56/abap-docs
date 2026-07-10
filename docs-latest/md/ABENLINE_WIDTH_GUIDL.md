---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLINE_WIDTH_GUIDL.html"
abapFile: "ABENLINE_WIDTH_GUIDL.html"
type: "abap-reference"
---

## Background

The maximum line width of an ABAP program is restricted to 255 characters.

## Rule

**Do not use full line width**

Limit the width of a line in the source code to a reasonable size. As a rule of thumb, you should be able to print a program on common paper formats without truncation or line breaks.

## Details

Whereas the old restriction to 72 characters was too strict, the full utilization of the 255 characters that are now available would not make a program any more legible. Although very large monitors are now available, it can still be necessary, for example, for code inspections or reviews, to print a program or program section. It is therefore advisable to break long [statements](ABENSTATEMENT_GUIDL.md) at suitable positions and to distribute long literals across multiple lines using the literal operator (`&`) or the concatenation operator (`&&`).

The example programs in the documentation are restricted in width in a natural way, which makes them legible at the same time. Unfortunately this sometimes means using shorter [names](ABENTELLING_NAMES_GUIDL.md) than would actually be possible.

## Example

In the first method of the program `PGL_PROGRAM_LINE_WIDTH`, a very long literal is assigned to the return value. The literal is not displayed completely even on very wide screens, and in the printout it will be broken up or even truncated.

The second method uses a literal whose content is identical to the one of the previous method; here, however, it is composed of multiple shorter literals using the literal operator `&`. The literal is split at appropriate positions, and the method becomes more legible both on the screen and the printout.
