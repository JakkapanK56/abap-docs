---
title: "ABENTEST_SEAMS"
description: |
  ABENTEST_SEAMS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTEST_SEAMS.htm"
abapFile: "ABENTEST_SEAMS.html"
keywords: ["do", "while", "if", "method", "class", "data", "ABENTEST", "SEAMS"]
---

Test seams are language constructs designed especially for [unit tests](ABENUNIT_TEST_GLOSRY.html) and are implemented using the following statements:

Test seams have the following properties:

-   [`TEST-SEAM` - `END-TEST-SEAM`](ABAPTEST-SEAM.html)
-   Defines a test seam as a replaceable area in the production code of a program.
-   [`TEST-INJECTION` - `END-TEST-INJECTION`](ABAPTEST-INJECTION.html)
-   Replaces the executable statements of a test seam with the statements of an injection in a [test class](ABENTEST_CLASS_GLOSRY.html) of the same program.

-   Test seams do not affect the use of programs in production. No injection takes place, rather the original code is executed.
-   A program can contain multiple test seams.
-   Multiple injections can be defined for a single test seam.
-   Injections can only be created in test classes that are defined in a [test include](ABENTEST_INCLUDE_GLOSRY.html). Test seams can be used in all executable units of a master program that includes a test include.
-   Unit tests can make injections while [test methods](ABENTEST_METHOD_GLOSRY.html) or the `setup` method are being executed.
-   If injections are repeated in the same test seam, the last injection is performed as an active injection.

-   Test seams are a simple way of replacing or expanding source code in the production parts of a program for test purposes. If, for example, the behavior of certain statements prevents tests from running, the unit test can replace them with suitable alternatives. Typical scenarios are:

-   Authorization checks
-   Reading persistent data
-   Modifying persistent data
-   Creating test doubles

abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_unit.html