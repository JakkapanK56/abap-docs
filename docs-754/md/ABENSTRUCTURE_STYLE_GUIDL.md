---
title: "Structure and Style - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_guidl.htm"
abapFile: "abenstructure_style_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) → 

Structure and Style

This section covers all aspects of a program that have no direct influence on its functionality. These aspects remain hidden to users when they use the program. However, structure and style are very significant for the traceability of the program flow by a human viewer. The source code must be designed in such a way that a person other than the program developer can work with it properly. There are many situations in which this is necessary, for example:

-   A review or code inspection is taking place.

-   Another developer needs to examine the program in order to process an error message (hotline, development support).

-   The program has been completely transferred from the development department to the maintenance department, where it is maintained and possibly developed further.

-   A program that was delivered by an organization (for example, SAP) is to be modified or developed further in other organizations (for example, at SAP partners or customers).

A sound program structure and programming style is very important beyond these situations as well, because developers need to be able to quickly orient themselves in their code even if they have not worked on the program for a while.

Source code needs to be read and understood time and time again during the software lifecycle. In practice, it is not realistic for any program that contains more than a few lines that source code can be delivered just once and will require no further maintenance. As well as complying with general standards such as functional correctness and performance, a program must be developed in such a way that its source code meets the requirements of the human reader.

The following guidelines help produce comprehensible and traceable ABAP source codes. Of course, since #beauty is in the eye of the beholder#, opinions on style vary from individual to individual and are the topic of much discussion. For this reason, the following recommendations are limited to those issues for which there is general consensus. These are mostly generally accepted guidelines that often apply to any programming language. The aim here is not to dictate a specific programming style, but rather to ensure an appropriate programming style. A developer must feel at home with his own sources so that he can work efficiently. Stringent style specifications can sometimes do more harm than good.

-   [Source Code Formatting](ABENFORMATTING_CODE_GUIDL.md "Guideline")

-   [Naming](ABENNAMING_GUIDL.md "Guideline")

-   [Comments](ABENCOMMENTS_GUIDL.md "Guideline")

-   [Program and Procedure Structure](ABENPROGR_PROC_STRUCTURE_GUIDL.md "Guideline")

-   [Source Code Organization](ABENSOURCE_CODE_ORGA_GUIDL.md "Guideline")

-   [Alternative Spellings](ABENALTERNATIVE_SPELLING_GUIDL.md "Guideline")

-   [Complexity](ABENCOMPLEXITY_GUIDL.md "Guideline")

Continue
[Formatting the Source Code](ABENFORMATTING_CODE_GUIDL.md)
[Naming](ABENNAMING_GUIDL.md)
[Comments](ABENCOMMENTS_GUIDL.md)
[Program Structure and Procedure Structure](ABENPROGR_PROC_STRUCTURE_GUIDL.md)
[Source Code Organization](ABENSOURCE_CODE_ORGA_GUIDL.md)
[Alternative Spellings](ABENALTERNATIVE_SPELLING_GUIDL.md)
[Complexity](ABENCOMPLEXITY_GUIDL.md)
