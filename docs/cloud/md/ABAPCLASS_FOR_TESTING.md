---
title: "ABAPCLASS_FOR_TESTING"
description: |
  ABAPCLASS_FOR_TESTING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLASS_FOR_TESTING.htm"
abapFile: "ABAPCLASS_FOR_TESTING.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABAPCLASS", "FOR", "TESTING"]
---

``[`CLASS class DEFINITION`](ABAPCLASS_DEFINITION.html) FOR TESTING [RISK LEVEL \{CRITICAL|DANGEROUS|HARMLESS\}]\                                     [DURATION \{SHORT|MEDIUM|LONG\}].``

[1. `... RISK LEVEL \{CRITICAL|DANGEROUS|HARMLESS\}`](#ABAP_ADDITION_1@3@)

[2. `... DURATION \{SHORT|MEDIUM|LONG\}`](#ABAP_ADDITION_2@3@)

The `FOR TESTING` addition defines a class to be used in [ABAP Unit](ABENABAP_UNIT_GLOSRY.html). A class with the `FOR TESTING` addition can have different purposes:

A test class and its components cannot be addressed in the production code of the program; therefore, only in other test classes. In particular, a subclass of a test class must be a test class itself and be declared using the `FOR TESTING` addition. The only exception to this rule is that test classes can be specified as [friends](ABENFRIEND_GLOSRY.html) in the definition of production classes to make it possible to test private components.

A local test class can contain special private methods that implement the [fixture](ABENFIXTURE_GLOSRY.html) for the tests of the class. These methods have the following predefined names:

The source code of a test class is not part of the production code of its program and is not generated in production systems. The code of such a class is not counted in code coverage measurements.

These additions assign test properties to a test class.

During test execution, the test properties are checked against values that are maintained by administration.

See the class `CL_DEMO_ABAP_UNIT`.

-   [Test class](ABENTEST_CLASS_GLOSRY.html) in a narrower sense. A test class contains [test methods](ABENTEST_METHOD_GLOSRY.html) that are called by the ABAP Unit framework during a [test run](ABENTEST_RUN_GLOSRY.html).
-   Represent a test double for use as dependent-on component in unit tests. For more information, see [Managing Dependencies with ABAP Unit](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/04a2d0fc9cd940db8aedf3fa29e5f07e).
-   Provide helper functions (test infrastructure) for writing ABAP unit tests.

-   An [instance method](ABENINSTANCE_METHOD_GLOSRY.html)\\ `setup`, which is executed before each individual test that is before each execution of a test method of a class.
-   An instance method `teardown`, which is executed after each individual test that is after each execution of a test method of the class.
-   A [static method](ABENSTATIC_METHOD_GLOSRY.html)\\ `class_setup`, which is executed once before all tests of the class.
-   A static method `class_teardown`, which is executed once after all tests of the class.

-   Local test classes of class pools and function pools should only be created in the [test includes](ABENTEST_INCLUDE_GLOSRY.html) designed for them. In other programs, these tests should located at the end of the program.
-   In addition to the test methods and special methods for the fixture, a test class can also contain other components. These components can be used in a user's own test class only or in other test classes, depending on the visibility. In this way, help methods can be defined for tests.
-   All components required for tests in the context of ABAP Unit should be defined exclusively in test classes. This ensures that they cannot be generated in production systems and cannot be addressed by production code. In addition to test classes with test methods, this also includes test doubles and other helper classes that do not contain test methods.
-   Test classes can inherit from any other classes, especially global classes. This allows general global tests to be implemented that can be used in local test classes.
-   Global test classes (in a narrower sense) always have to define the code under test by means of a [test relation](ABENTEST_RELATION_GLOSRY.html).
-   In test classes, the addition [`PARTIALLY IMPLEMENTED`](ABAPINTERFACES_PARTIALLY.html) of the statement `INTERFACES` can be specified, which allows interfaces to be implemented only partially. This is particularly useful in test doubles.
-   The addition `FOR TESTING` in a local class created in the area for *local types* of the class pool of a global test class. The addition is not needed in auxiliary classes for the global test class, since its property *test class* affects the entire class pool with regard to its generation. In rare cases in which a global test class is to be tested itself, local test classes can be created as recommended for other global classes in the area *local test classes*.
-   The methods of the [fixture](ABENFIXTURE_GLOSRY.html) are not test methods and the addition [`FOR TESTING`](ABAPMETHODS_TESTING.html) cannot be specified for their declaration.
-   Global test classes can also contain [AMDP method](ABENAMDP_METHOD_GLOSRY.html) as test methods. In this case, they must include the corresponding tag interface [`IF_AMDP_MARKER_...`](ABENAMDP_CLASSES.html) for [AMDP classes](ABENAMDP_CLASS_GLOSRY.html).

-   `RISK LEVEL` defines the risk level for a test.
-   `DURATION` specifies the expected execution time.

-   The meaning of the risk levels is as follows:

-   `CRITICAL` - a test changes system settings or customizing data (default)
-   `DANGEROUS` - a test changes persistent data
-   `HARMLESS` - a test does not change system settings or persistent data

-   Tests whose risk level is higher than specified by administration are not executed.
-   The meaning of the expected execution time is as follows:

-   `SHORT` - an imperceptible execution time of some few seconds is expected.
-   `MEDIUM` - a noticeable execution time of around a minute is expected.
-   `LONG` - a very noticeable execution time of more than one minute is expected.

-   For each of these expected execution times, upper limits are specified by administration. These limits are usually greater than the expected execution times in order to include processes, for example compilations, that are not part of the test itself. If a test exceeds the upper limit associated with the expected time, the system behavior depends on the execution mode of the test and whether the ABAP Unit runtime monitoring is switched on or off.

-   The global class itself represents the production part of the source code. A method `get_sum` adds the values of the fields of a row of a DDIC database table and assigns the result to the private attribute `sum`.
-   The class `test_demo` in the `CCAU` include is a test class for the global class.

-   In the method `setup`, an object of the global class is created and the DDIC database table is prepared with test data. Therefore, the addition `DANGEROUS` is specified for `RISK LEVEL`.
-   The method `test_sum` calls `get_sum` and compares the private attribute `sum` with the expected value. For this reason, `test_demo` must be a local friend of the global class.
-   In the method `teardown`, the test data is removed from the DDIC database table again.

-   The test method is called when the unit test of `CL_DEMO_ABAP_UNIT` is executed and should not report an error.

abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_unit.html