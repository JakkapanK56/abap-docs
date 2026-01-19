---
title: "ABENABAP_UNIT"
description: |
  ABENABAP_UNIT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_UNIT.htm"
abapFile: "ABENABAP_UNIT.html"
keywords: ["do", "if", "method", "class", "ABENABAP", "UNIT"]
---

ABAP Unit is a test framework for [unit tests](ABENUNIT_TEST_GLOSRY.html). ABAP Unit can be used to:

Single tests can be started directly in the tool for the corresponding program. More comprehensive test runs are executed by using the ABAP Test Cockpit.

In ABAP programs, unit tests are performed as [test methods](ABENTEST_METHOD_GLOSRY.html) in local [test classes](ABENTEST_CLASS_GLOSRY.html). They are not part of the production code of a program, but are transported in the same way. Test methods of this type are executed and evaluated using the ABAP Unit Framework. The test methods generally call the units of the production code to be tested and then check the results using methods of the class `CL_ABAP_UNIT_ASSERT`. Test classes and test methods are defined using the following language elements. Special [test includes](ABENTEST_INCLUDE_GLOSRY.html) are used to define test classes in class pools and function pools.

If test classes implement interfaces, not all interface methods generally need to be implemented there. The error message or warning that otherwise occurs can be hidden in test classes by using an addition of the statement `INTERFACES`.

If production code contains parts that are not suitable for unit tests, sections of code can be flagged as [test seams](ABENTEST_SEAMS.html). [Injections](ABENINJECTION_GLOSRY.html) can be defined in methods of test classes. Injections replace the test seams with test-friendly code when a unit test is executed.

In order to test repository objects that do not support test classes themselves in [ADT](ABENADT_GLOSRY.html), the special [ABAP Doc comment](ABENABAP_DOC_COMMENT_GLOSRY.html)\\ [`"! @testing ...`](ABENTEST_RELATIONS.html) can be used to define a [test relation](ABENTEST_RELATION_GLOSRY.html) that links a test class or a test method with such a repository object.

-   run single tests or mass tests
-   evaluate test results

-   [`CLASS ... DEFINITION FOR TESTING`](ABAPCLASS_FOR_TESTING.html)
-   [`METHODS ... FOR TESTING`](ABAPMETHODS_TESTING.html)

-   [`INTERFACES ... PARTIALLY IMPLEMENTED`](ABAPINTERFACES_PARTIALLY.html)

-   All components required for tests in the context of ABAP Unit should be defined exclusively in test classes. This ensures that they are not generated in production systems and cannot be addressed by production code. In addition to test classes with test methods, this also includes test doubles and other helper classes that do not contain test methods.
-   The [ABAP Test Double Framework](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/804c251e9c19426cadd1395978d3f17b) based on class `CL_ABAP_TESTDOUBLE` simplifies and standardizes the creation and configuration of test doubles.
-   For more information, see the documentation [ABAP Unit](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ba879a6e2ea04d9bb94c7ccd7cdac446/491cfd8926bc14cde10000000a42189b) in SAP Help Portal.

abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html