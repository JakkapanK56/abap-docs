---
title: "ABENSYNTAX_CONVENTIONS"
description: |
  ABENSYNTAX_CONVENTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSYNTAX_CONVENTIONS.htm"
abapFile: "ABENSYNTAX_CONVENTIONS.html"
keywords: ["do", "if", "case", "ABENSYNTAX", "CONVENTIONS"]
---

The ABAP keyword documentation documents use the following syntax conventions:

The syntax diagrams of the ABAP keyword documentation show the language elements in a syntactically correct order. In many statements, other orders are also possible, but are not mentioned. For the documentation, the order is chosen that best suits the semantics of a statement and which describes the different variants of a statement the most consistently.

-   ABAP words are displayed in uppercase letters.
-   **Example:**\\
    `APPEND, NON-UNIQUE, INTO`
-   Operands are displayed in lowercase letters.
-   **Example:**\\
    `dobj, dbtab`
-   Parts of statements whose syntax diagrams are displayed elsewhere, are shown as pseudo syntax.
-   **Example:**\\
    `selscreen_options, list_options`
-   Periods, commas, colons, and parentheses are displayed as normal. They are part of the ABAP syntax.
-   **Example:**\\
    `. : , ()`
-   Operators are displayed as normal. They are part of the ABAP syntax.
-   **Example:**\\
    `+, -, *, /`
-   Parts of statements that are optional are displayed in italic square brackets `[\ ]`. A list of statement parts in such brackets means that some or all of the parts can be used. If at least one part has to be used, this is noted in the text. Square brackets `[ ]` that are part of the ABAP syntax are shown in the same color as all other language elements and are not shown in italics.
-   **Example:**\\
    `[NO-GROUPING]\ [NO-SIGN]\ [NO-ZERO]`
-   Italic vertical bars (`|`) between parts of statements mean that only one of the listed parts can be used within a statement. A vertical bar like this always binds immediate neighbors. Vertical bars `|` that are part of the ABAP syntax are shown in the same color as all other language elements.
-   **Example:**\\
    `DDMMYY | MMDDYY | YYMMDD`
-   Italic curly brackets (`\{\ \}`) group together related parts of statements, for example those on the right or left of vertical bars. Curly brackets `\{ \}` that are part of the ABAP syntax are shown in the same color as all other language elements and are not shown in italics.
-   **Example:**\\
    `\{NO EDIT MASK\}|\{EDIT MASK mask\}`
-   A string of dots `...` means that other parts of the statement can be included at this point.
-   **Example:**\\
    `... AS CHECKBOX`

abenabap.html