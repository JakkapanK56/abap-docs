---
title: "Dead Code - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendead_code_guidl.htm"
abapFile: "abendead_code_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Complexity](ABENCOMPLEXITY_GUIDL.md) → 

Dead Code

Background

Dead code is program parts that are never executed because they are no longer required or were never actually required at any time. This code can accumulate during the development (rejected prototypes) or maintenance (changeover to new code without deleting the old code) of programs.

Rule

Remove dead code

Completely remove any unused or inaccessible program parts from live programs.

Details

Although dead code does not affect the executed program parts directly, it still has a negative impact on the product. Program parts that cannot be accessed during program execution do not provide any benefit. Instead they cause increased costs in the course of a program lifecycle because they must be identified as unused for maintenance and further development purposes. The worst case scenario is that if these program parts are not immediately recognized as unused, they will be reused or modified during further developments or refactoring measures. A lot of time and effort is wasted making changes to unused code. In addition, these program parts increase the space required in the program buffer during program execution.

Dead code also interferes with the aim of maximum [test coverage](ABENCORRECTNESS_QUALITY_GUIDL.md "Guideline") by unit tests using ABAP Unit or scenario tests using eCATT. Code not used in the live system is either tested, which is very time-consuming, or is not tested, which results in poor test coverage. Unused and inaccessible program parts must therefore be identified and removed as quickly as possible.

Note

[Check tools](ABENCHECK_CORRECTNESS_GUIDL.md "Guideline") indicate dead code if it can be identified. Examples:

-   The syntax check warns you about unused private methods of local classes.

-   The extended program check warns you about unused declarations or statement blocks in control structures that can never be accessed.

However, these static checks can never be complete because not every use of a program part has to be known statically. Therefore, Coverage Analyzer is another important tool for isolating potential dead code.
