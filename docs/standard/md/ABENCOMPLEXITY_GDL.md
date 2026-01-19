---
title: "ABENCOMPLEXITY_GDL"
description: |
  ABENCOMPLEXITY_GDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCOMPLEXITY_GDL.htm"
abapFile: "ABENCOMPLEXITY_GDL.html"
keywords: ["do", "if", "case", "method", "class", "ABENCOMPLEXITY", "GDL"]
---

The aim of program complexity is to keep the source code as clear and readable as possible for the human reader. The computer has no problems with compiling or executing highly complex programs. Unformatted source code does also not constitute any problems. The human reader, however, is usually overwhelmed by the program complexity.

High complexity in this context means, for example, voluminous procedures ([methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)) and control structures with a very deep nesting or unclear classes without clearly defined tasks. The program complexity must not be confused with the complexity of the task that is handled by the program. Even if task complexity is very high, it is always possible to keep the program complexity manageable for individual procedures and classes by clearly [separating the tasks](ABENSEPARATION_CONCERNS_GUIDL.html).

To understand a program, the reader must be able to mentally trace the flow, and keep an eye on the different paths through the program that result from the control structure, under different external conditions. This is very difficult when dealing with voluminous procedures or deep nesting. In these situations, the program author may have been overwhelmed and consequently the program might contain errors. These situations increase the time required for corrections or further developments and the risk of errors. What makes the situation even more difficult is that testing complex procedures requires a great deal of time and effort, due to the high number of possible execution paths. Formulating a test case for every single execution path is often impossible due to the high number of paths.

-   [Expressions](ABENEXPRESSION_GUIDL.html)
-   [Nesting Depth](ABENNESTING_DEPTH_GUIDL.html)
-   [Procedure Volume](ABENPROC_VOLUME_GUIDL.html)
-   [Class Size](ABENCLASS_SIZE_GUIDL.html)
-   [Dead Code](ABENDEAD_CODE_GUIDL.html)

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html