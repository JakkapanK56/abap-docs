---
title: "ABENUSE_PRETTY_PRINTER_GUIDL"
description: |
  ABENUSE_PRETTY_PRINTER_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSE_PRETTY_PRINTER_GUIDL.htm"
abapFile: "ABENUSE_PRETTY_PRINTER_GUIDL.html"
keywords: ["select", "insert", "loop", "do", "if", "case", "method", "class", "data", "ABENUSE", "PRETTY", "PRINTER", "GUIDL"]
---

The alignment of ABAP statements in the source code is not defined in the syntax. There should be a [maximum of one statement per line](ABENSTATEMENT_GUIDL.html), which can be technically indented and wrapped as required. This makes control structures visible. By inserting blank lines, related source code sections can be grouped, which makes the code easier to read. Note that, in ABAP statements, blanks cannot be added or left out at random. For example, tokens must be separated by at least one blank (especially with operands and operators). In a method call, no blanks are allowed between the name of the method and the opening parenthesis.

Languages with a C-like syntax (where statement blocks within control structures are delimited by curly brackets) provide an inexhaustible source for discussions on how to best make indentations. However, for ABAP the solution is obvious: Every initiating statement (such as `IF`) has an associated concluding statement (in this case, `ENDIF`). Event blocks for ABAP runtime framework events are the only exception here. They are introduced by a statement (such as `START-OF-SELECTION`) but are not concluded with the associated concluding statement. Instead, they are concluded with the next event block. However, [event blocks](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html) should only be used in exceptional cases. Initiating and concluding statements are aligned at the same level; the block content is indented.

Pretty Printer can modify the indentation of control structures and the capitalization of keywords and names in the source code at any time (even in display mode).

**Use Pretty Printer consistently and universally**

Use Pretty Printer to format source code consistently. If Pretty Printer cannot format the code as required, manual changes are necessary.

We recommend that the use of Pretty Printer to make indentations required to make the source code easy to read. This guarantees that the indentations are consistently based on the logical control structure and that the indentation depth is identical for each program. Implementing this type of formatting by hand is prone to errors and not recommended.

Even though Pretty Printer can be used to adapt the source code to any other style (using the available settings), a consistent and universal style should be selected. The reason for this is that version management and the correction workbench are not designed to ignore purely stylistic differences between source code versions. Therefore, the following Pretty Printer settings are recommended for consistent source code formatting. These settings cover the expectations and working habits of most ABAP developers:

The code needs to be edited manually, to ensure the correct use of blank lines between related source code blocks. Syntax units, such as classes, methods, control blocks, or semantic units of a program, should be separated from one another with one or two blank lines (depending on their size and meaning). However, there should not be more than two blank lines in succession.

We recommend that the use of the *Keyword Lowercase* setting in Pretty Printer, for reasons of visual clarity. This is because repository object names and data objects names in the ABAP Debugger are displayed in uppercase, in all tools required for ABAP development. With the *Keyword Lowercase* setting, the source code format matches this display format. For example, reading `COLUMN` columns form a `DBTAB` database table:

select COLUMN1 COLUMN2 ... \\n       from DBTAB \\n       into corresponding fields of ITAB \\n       where COLUMN = FIELD.

Names in uppercase are also more suitable because many dynamic operand positions in ABAP still require uppercase. A good example is an almost static call of function modules. Using the *Keyword Lowercase* setting, the call of a function module `FUNCTION_MODULE` would be as follows:

call function 'FUNCTION\_MODULE' exporting PARAMETER = FIELD.

However, the *Keyword Lowercase* setting was added to Pretty Printer relatively late and could not compete against the more common setting *Keyword Uppercase*. In addition, the ABAP syntax diagrams and sample programs in ABAP documentation, as well as all relevant publications, are formatted with the Keyword Uppercase setting. If we recommended the use of the Keyword Lowercase setting, this would lead to confusion and would not help the programming guidelines to be universally accepted.

The following source code shows the above example, but without indentations and only with lowercase. The highlighted ABAP words (shown in bold here and in color in the ABAP Editor) might not appear in a program printout. This would make the program even less legible.

-   **Indent statements**
-   Absolutely essential for a logical program structure that is clearly visible. A [maximum of one statement per program line](ABENSTATEMENT_GUIDL.html) is allowed.
-   **Do not insert standard comments**
-   The standard comment only contains redundant information and it is not adapted, if the source code is changed.
-   **Uppercase keywords**
-   Makes it easier to [understand the source code](ABENLOWER_UPPER_CASE_GUIDL.html) in printed form. In this case, syntax color-coding is usually not visible.

class class definition. \\npublic section. \\nmethods meth. \\nendclass. \\nclass class implementation. \\nmethod meth. \\ndata: itab type table of dbtab, \\nwa type dbtab. \\nselect \* \\nfrom dbtab \\ninto table itab \\nwhere column = ' '. \\nif sy-subrc <> 0. \\nreturn. \\nendif. \\nloop at itab into wa. \\n... \\nendloop. \\nendmethod. \\nendclass. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abenformatting\_code\_gdl.html