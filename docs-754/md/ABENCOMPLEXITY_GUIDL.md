---
title: "Complexity - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomplexity_guidl.htm"
abapFile: "abencomplexity_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) → 

Complexity

The aim of program complexity is to keep the source code as clear and readable as possible for the human reader. The computer has no problems with compiling or executing highly complex programs. Unformatted source code does also not constitute any problems. The human reader, however, is usually overwhelmed by the program complexity.

High complexity in this context means, for example, voluminous procedures ([methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline")) and control structures with a very deep nesting or unclear classes without clearly defined tasks. The program complexity must not be confused with the complexity of the task that is handled by the program. Even if task complexity is very high, it is always possible to keep the program complexity manageable for individual procedures and classes by clearly [separating the tasks](ABENSEPERATION_CONCERNS_GUIDL.md "Guideline").

To understand a program, the reader must be able to mentally trace the flow, and keep an eye on the different paths through the program that result from the control structure, under different external conditions. This is very difficult when dealing with voluminous procedures or deep nesting. In these situations, the program author may have been overwhelmed and consequently the program might contain errors. These situations increase the time required for corrections or further developments and the risk of errors. What makes the situation even more difficult is that testing complex procedures requires a great deal of time and effort, due to the high number of possible execution paths. Formulating a test case for every single execution path is often impossible due to the high number of paths.

-   [Expressions](ABENEXPRESSION_GUIDL.md "Guideline")

-   [Nesting Depth](ABENNESTING_DEPTH_GUIDL.md "Guideline")

-   [Procedure Volume](ABENPROC_VOLUME_GUIDL.md "Guideline")

-   [Class Size](ABENCLASS_SIZE_GUIDL.md "Guideline")

-   [Dead Code](ABENDEAD_CODE_GUIDL.md "Guideline")

Continue
[Expressions](ABENEXPRESSION_GUIDL.md)
[Nesting Depth](ABENNESTING_DEPTH_GUIDL.md)
[Procedure Volume](ABENPROC_VOLUME_GUIDL.md)
[Class Size](ABENCLASS_SIZE_GUIDL.md)
[Dead Code](ABENDEAD_CODE_GUIDL.md)
