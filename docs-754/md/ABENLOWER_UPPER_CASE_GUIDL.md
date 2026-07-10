---
title: "Case - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlower_upper_case_guidl.htm"
abapFile: "abenlower_upper_case_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Formatting the Source Code](ABENFORMATTING_CODE_GUIDL.md) → 

Case

Background

In contrast to many other modern programming languages, ABAP is not case-sensitive for ABAP words (tokens of an ABAP statement that express its semantics; either ABAP keywords or additions) nor for operators and names of operands. The only exception is [dynamic programming](ABENREF_TYPES_OBJECTS_GUIDL.md "Guideline"), where the names of operands usually have to be specified in uppercase.

Rule

Do not mix uppercase and lowercase in names

Use only lowercase or uppercase in an individual token. Use uppercase for keywords and lowercase for operands.

Details

The usage of uppercase or lowercase for tokens, that is ABAP words and names, used to be a very important aspect for the formatting of the source code. Uniform case-sensitivity made it easier for the reader to distinguish keywords from names. Due to the source code coloring in the syntax in ABAP Editor, this aspect has become less important; however, the above rule is still valid because of the following reasons:

-   Source code coloring in the syntax is generally not visible when source code is printed. Therefore, uniform case-sensitivity is useful here for emphasizing the difference between keywords and names.

-   Since case-sensitivity in ABAP source code is not significant in the syntax outside of character literals (that is, text field literals in inverted commas (‘), string literals in backquotes (\`), and character string templates in vertical bars (|)), the ABAP development environment is not designed to maintain it permanently outside the mentioned constructs. Pretty Printer only offers the alternatives to use only lowercase or only uppercase, or to use either uppercase or lowercase for keywords and lowercase or uppercase respectively for names in operand positions.

Because of the second point, it does not make sense in ABAP to use uppercase and lowercase as a self-defined means of style. In other words, the names should not be written in mixed case style (also referred to as camel case style; see the following example), as is very popular in languages that are case-sensitive. A consistent notation cannot be ensured due to the missing relevance in the syntax. A mixed notation will be lost sooner or later when Pretty Printer is used, even if this is unintentional. Moreover, it possibly prevents other developers from using Pretty Printer after changes have been made to the source code. Use of [Pretty Printer](ABENUSE_PRETTY_PRINTER_GUIDL.md "Guideline") is explicitly recommended.

Note

The built-in character string functions, to\_mixed and from\_mixed, allow conversions between names in ABAP style with underscores and names in mixed case style or camel case style, which can be helpful for data exchange with external systems.

Example

When the program PGL\_UPPER\_LOWER\_CASE is executed, source code is displayed in ABAP Editor; the upper part shows the declaration of a class with names in mixed case style or camel case style. Here, uppercase marks the beginnings of words within a combined name.

The code provided here as a bad example approximately follows the Java convention, and in the eyes of many beholders it might look better than the following good example. However, its appearance is less important than the technical restrictions mentioned, which do not currently allow naming like this. Executing Pretty Printer would irreversibly spoil the code's appearance because the names would then be illegible.

The lower part of the source code shows the declaration of a class in ABAP style, where which words within combined names are separated by underscores (\_). These separations cannot get lost when Pretty Printer is used.

Once the program has been called, the example is formatted according to the proposed Pretty Printer [setting](ABENUSE_PRETTY_PRINTER_GUIDL.md "Guideline"), with ABAP words in uppercase and operands in lowercase. Regardless of its configuration, the separation of the words in the names would be preserved after each execution of Pretty Printer.
