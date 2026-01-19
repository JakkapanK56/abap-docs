---
title: "ABENTEST_SEAMS"
description: |
  ABENTEST_SEAMS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTEST_SEAMS.htm"
abapFile: "ABENTEST_SEAMS.html"
keywords: ["select", "do", "while", "if", "method", "class", "data", "ABENTEST", "SEAMS"]
---

Test seams are language constructs designed especially for [unit tests](ABENUNIT_TEST_GLOSRY.html) and are implemented using the following statements:

Test seams have the following properties:

An injection can replace the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) to bypass the dependency of a unit test on the authorizations of the current user by setting a suitable return code.

It is often not possible to make assumptions about the content of database tables or other repositories in unit tests. Test seams enable unit tests to bypass the dependencies of persistent data by replacing it with self-constructed data.

The execution of unit tests must not modify content of database tables or other repositories used in production. Using test seams, unit tests can record the operands of modifying database operations or compare them with expected changes instead of actual changes. In the following source code section compares, the injection compares the change values with a public static attribute.

In the following source code section, the production source code of a class that depends on database content is instantiated. The unit test injects the instantiated test double instead of the production object.

See also the class `CL_AU_SAMPLE_TEST_SEAMS` in the package `SABP_UNIT_SAMPLE`.

-   [`TEST-SEAM` - `END-TEST-SEAM`](ABAPTEST-SEAM.html)
-   Defines a test seam as a replaceable area in the production code of a program.
-   [`TEST-INJECTION` - `END-TEST-INJECTION`](ABAPTEST-INJECTION.html)
-   Replaces the executable statements of a test seam with the statements of an injection in a [test class](ABENTEST_CLASS_GLOSRY.html) of the same program.

-   Test seams do not affect the use of programs in production. No injection takes place, rather the original code is executed.
-   A program can contain multiple test seams.
-   Multiple injections can be defined for a single test seam.
-   Injections can only be created in test classes that are defined in a [test include](ABENTEST_INCLUDE_GLOSRY.html). Test seams can be used in all executable units of a master program that includes a test include, including methods of local classes and subroutines.
-   Unit tests can make injections while [test methods](ABENTEST_METHOD_GLOSRY.html) or the `setup` method are being executed.
-   If injections are repeated in the same test seam, the last injection is performed as an active injection.

-   Test seams are a simple way of replacing or expanding source code in the production parts of a program for test purposes. If, for example, the behavior of certain statements prevents tests from running, the unit test can replace them with suitable alternatives. Typical scenarios are:

-   Authorization checks
-   Reading persistent data
-   Modifying persistent data
-   Creating test doubles

-   Test seams are intended mainly for use with legacy code that, due to insufficient [separation of concerns](ABENSEPARATION_CONCERNS_GUIDL.html), is not suitable for unit tests. New programs, on the other hand, should be modularized in such a way that test seams are made unnecessary.

**Test Seam** **Injection**\\ `TEST-SEAM authorization_seam.\ AUTHORITY-CHECK OBJECT 'S_CTS_ADMI'\ ID 'CTS_ADMFCT' FIELD 'TABL'.\ END-TEST-SEAM.\ \ IF sy-subrc = 0.\ is_authorized = abap_true.\ ENDIF.` `TEST-INJECTION authorization_seam.\ sy-subrc = 0.\ END-TEST-INJECTION.` **Test Seam** **Injection**\\ `TEST-SEAM read_content_seam.\ SELECT *\ FROM sflight\ WHERE carrid IN @carrid_range AND\ fldate EQ @sy-datum\ INTO TABLE @flights.\ END-TEST-SEAM.` `TEST-INJECTION read_content_seam.\ flights =\ VALUE #( ( carrid = 'LHA'\ connid = 100 )\ ( carrid = 'AFR'\ connid = 900 ) ).\ END-TEST-INJECTION.` **Test Seam** **Injection**\\ `TEST-SEAM store_content_seam.\ MODIFY sflight\ FROM TABLE @new_flights.\ END-TEST-SEAM.` `TEST-INJECTION store_content_seam.\ cl_abap_unit_assert=>assert_equals(\ act = new_flights\ exp = global_buffer=>exp_flights ).\ END-TEST-INJECTION.` **Test Seam** **Injection**\\ `TEST-SEAM instantiation_seam.\ me->oref = NEW #( ).\ END-TEST-SEAM.` `TEST-INJECTION instantiation_seam.\ me->oref = NEW dummy_class( ).\ END-TEST-INJECTION.` abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_unit.html