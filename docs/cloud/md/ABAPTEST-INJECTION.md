---
title: "ABAPTEST-INJECTION"
description: |
  ABAPTEST-INJECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTEST-INJECTION.htm"
abapFile: "ABAPTEST-INJECTION.html"
keywords: ["select", "do", "while", "if", "method", "class", "data", "types", "ABAPTEST", "INJECTION"]
---

`TEST-INJECTION seam.`\\ 
  `[statement_block]`\\ 
`END-TEST-INJECTION.`

The statement `TEST-INJECTION` introduces an [injection](ABENINJECTION_GLOSRY.html) for a [test seam](ABENTEST_SEAM_GLOSRY.html)\\ `seam`, which is closed using `END-TEST-INJECTION`. The test seam `seam` must be defined in the production code of the current program using the statement [`TEST-SEAM`](ABAPTEST-SEAM.html). When a unit test is performed, the statement block `statement_block` of the injection replaces the statement block of the test seam `seam` in production code.

An injection can only be defined in the methods of test classes created in a [test include](ABENTEST_INCLUDE_GLOSRY.html). Injections have the following properties:

The test seam remains replaced by the injection until a new injection is encoutered for the test seam. This means that a test seam can be replaced more than once during a unit test and by different injections. All replacements are canceled at the end of an individual test or test method.

The `CL_DEMO_TEST_SEAMS============CCAU` of the class `CL_DEMO_TEST_SEAMS` is an example of a test class with injections:

The test method tests the method `CHANGE_PRICE` (see the example for [`TEST-SEAM`](ABAPTEST-SEAM.html)). Before the test method is executed, the injection replaces the injection in the `setup` method of the test seam `selection`. When the test method is executed,

-   Injections can be made only while a test method or the `setup` method is being executed.
-   Injections cannot be nested, which means that an injection cannot contain further injections.
-   An injection cannot extend beyond the limits of a [statement block](ABENSTATEMENT_BLOCK_GLOSRY.html) but can contain closed [control structures](ABENCONTROL_STRUCTURE_GLOSRY.html).
-   An injection can include local data declarations using the statement [`DATA`](ABAPDATA.html). These variables are visible below their declaration in the current injection and all following injections of the current test class. The data objects declared in an injection are not visible outside of injections, that is, neither in other parts of the test class nor in production code. Injections that access data objects declared in a different injection can only be assigned to test seams defined in the production source code below the test seam, that is, the test seam assigned to the declaring injection.
-   An injection can be empty, that is, it is does not contain any statements. The code of the specified test seam is removed when the injection is executed.
-   Injections can access all types and objects that are visible in the location of the specified test seam.
-   In an injection, it is not possible to access types and objects of the test method, in which the injection is defined. These types and objects are visible in the position of the statement `TEST-INJECTION`, but not in the injection.

-   When the test runs, any data objects declared in injections are preserved in their context, even if the declaring injection is replaced by a different injection in its test seam.
-   Apart from `DATA`, no declarative statements are possible in injections.
-   The injections for a test seam must be defined in the same [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html).
-   Test includes can currently only be created for class pools and function groups, which means that injections can only be created there as well.

-   the statements of the test seam `modification` are removed when replaced by an empty injection and the successful closing of the method is checked,
-   the statements of the test seam `modification` are replaced in such a way that an unsuccessful modification of the table content is simulated, and the associated return code checked,
-   the statements of the test seam `selection` are replaced in such a way that an unsuccessful selection of the table content is simulated, and the associated return code checked.
-   `CLASS test_demo_test_seam DEFINITION FOR TESTING RISK LEVEL HARMLESS DURATION SHORT FINAL. PRIVATE SECTION. METHODS: setup, test_change_price FOR TESTING, invoke_and_assert IMPORTING exp TYPE i. ENDCLASS. \ CLASS test_demo_test_seam IMPLEMENTATION. METHOD setup. TEST-INJECTION selection. wa-price = 100. END-TEST-INJECTION. ENDMETHOD. METHOD test_change_price. TEST-INJECTION modification. END-TEST-INJECTION. invoke_and_assert( 90 ). TEST-INJECTION modification. subrc = 4. END-TEST-INJECTION. invoke_and_assert( -2 ). TEST-INJECTION selection. subrc = 4. END-TEST-INJECTION. TEST-INJECTION modification. END-TEST-INJECTION. invoke_and_assert( -1 ). ENDMETHOD. METHOD invoke_and_assert. NEW cl_demo_test_seams( )->change_price( EXPORTING carrid = ' ' connid = '0000' fldate = '00000000' factor = 90 IMPORTING new_price = DATA(new_price) ). cl_abap_unit_assert=>assert_equals( EXPORTING exp = exp act = new_price ). ENDMETHOD. ENDCLASS.`

abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_unit.html abentest\_seams.html