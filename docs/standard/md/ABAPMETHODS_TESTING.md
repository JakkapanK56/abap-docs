---
title: "ABAPMETHODS_TESTING"
description: |
  ABAPMETHODS_TESTING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMETHODS_TESTING.htm"
abapFile: "ABAPMETHODS_TESTING.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABAPMETHODS", "TESTING"]
---

[Short Reference](ABAPMETHODS_TESTING_SHORTREF.html)

``[`METHODS`](ABAPMETHODS.html) meth [[`ABSTRACT|FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\               [[`AMDP OPTIONS [READ-ONLY]`](ABAPMETHODS_AMDP_OPTIONS.html)\                 [[`client_handling`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)]]\    FOR TESTING    [RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...].``

This statement is only possible in a [test class](ABENTEST_CLASS_GLOSRY.html). It declares a [test method](ABENTEST_METHOD_GLOSRY.html) that is called as a single test during a [test run](ABENTEST_RUN_GLOSRY.html). A test can be programmed in the method implementation. To check the test assumptions, static methods from the class `CL_ABAP_UNIT_ASSERT` are used, such as:

The data is evaluated using the [ABAP Unit](ABENABAP_UNIT_GLOSRY.html) Framework.

The same applies to the additions `ABSTRACT`, `FINAL`, and `RAISING` as to the [general instance methods](ABAPMETHODS_GENERAL.html). Furthermore, the addition [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html) can be specified for test methods, since these methods can also be implemented as [AMDP methods](ABENAMDP_METHOD_GLOSRY.html).

Test methods are usually used to call units of production code and to check the result. Production code units that are called from a test method must be exited [regularly](ABENEND_PROCESSING_BLOCKS.html) or by a dedicated statement like [`RETURN`](ABAPRETURN.html). The statements [`LEAVE PROGRAM`](ABAPLEAVE_PROGRAM.html)\\ [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html) and [`SUBMIT`](ABAPSUBMIT.html) without `AND RETURN` that exit the complete program are not allowed in production code called during a unit test.

Definition of a test class `mytest` with a test method `mytest` that checks the value of the `text` attribute after the method `set_text_to_x` of the class `myclass` has been called. In this example, the ABAP Unit test reports an error since the value *X* is expected instead of *U*.

-   `ASSERT_EQUALS`
-   `ASSERT_BOUND`
-   `ASSERT_NOT_BOUND`
-   `ASSERT_INITIAL`
-   `ASSERT_NOT_INITIAL`
-   `ASSERT_SUBRC`
-   `FAIL`

-   Test methods should be private or protected if the methods are inherited. Since test classes implicitly offer friendship to the test driver in the runtime framework, the driver can call them. Test methods only need to be public in rare cases where a test executes tests from other test classes.
-   When a test method is executed, the same applies to [resumable exceptions](ABENRESUMABLE_EXCEPTION_GLOSRY.html) as to all other methods. If processing can be resumed successfully, the interrupted test can be resumed.
-   The special methods `setup`, `teardown`, `class_setup`, and `class_teardown` of the [fixture](ABENFIXTURE_GLOSRY.html) are not test methods and the addition `FOR TESTING` cannot be used for this methods.
-   The special [ABAP Doc comment](ABENABAP_DOC_COMMENT_GLOSRY.html)\\ [`"! @testing`](ABENTEST_RELATIONS.html) can be written in front of the declaration of a test method in order to define a [test relation](ABENTEST_RELATION_GLOSRY.html) for that method. This allows repository objects to be tested that do not support test classes themselves.
-   To prevent inaccurate test results, the [rule](ABENUSE_ACTUAL_PARAMETERS_GUIDL.html) that no system fields are passed as actual parameters must be observed, especially for the `ASSERT` methods of the class `CL_ABAP_UNIT_ASSERT`. The special method `ASSERT_SUBRC` is only used for checking the return value.

\* Production classes \\n\\ \\nCLASS myclass DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA text TYPE string. \\n CLASS-METHODS set\_text\_to\_x. \\nENDCLASS. \\n\\ \\nCLASS myclass IMPLEMENTATION. \\n METHOD set\_text\_to\_x. \\n text = 'U'. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Test classes \\n\\ \\nCLASS mytest DEFINITION FOR TESTING RISK LEVEL HARMLESS. \\n PRIVATE SECTION. \\n METHODS mytest FOR TESTING. \\nENDCLASS. \\n\\ \\nCLASS mytest IMPLEMENTATION. \\n METHOD mytest. \\n myclass=>set\_text\_to\_x( ). \\n cl\_abap\_unit\_assert=>assert\_equals( act = myclass=>text \\n exp = 'X' ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_unit.html