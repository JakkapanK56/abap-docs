---
title: "ABAPCREATE_OBJECT_FOR_TESTING"
description: |
  ABAPCREATE_OBJECT_FOR_TESTING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCREATE_OBJECT_FOR_TESTING.htm"
abapFile: "ABAPCREATE_OBJECT_FOR_TESTING.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABAPCREATE", "OBJECT", "FOR", "TESTING"]
---

`CREATE OBJECT ... FOR TESTING.`

RAP-specific variant of [`CREATE OBJECT`](ABAPCREATE_OBJECT.html).

For [unit tests](ABENUNIT_TEST_GLOSRY.html) of an [ABAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html), an [object](ABENOBJECT_GLOSRY.html) of the corresponding [class](ABENABP_HANDLER_CLASS_GLOSRY.html) needs to be created using a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html) declared beforehand. The `FOR TESTING` addition enables the instantiation of [RAP handler classes](ABENABP_HANDLER_CLASS_GLOSRY.html).

Development guide for the ABAP RESTful Application Programming Model, section [Test](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1fa88de357464d98a08165cb5830c0ad?version=sap_cross_product_abap).

The [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html)\\ `BP_DEMO_MANAGED_ROOT_2` contains a `BP_DEMO_MANAGED_ROOT_2========CCAU`. The variable `class_under_test` is defined in the private section of the class `ltc_managed` as follows:

The method `class_setup` includes a `CREATE OBJECT ... FOR TESTING.` statement:

Find more details on the unit test implementation, the methods used in this test include, and so on, via the link to the development guide for the ABAP RESTful Application Programming Model provided above.

The `BP_DEMO_MANAGED_ROOT_2========CCIMP` contains the validation `validate_field`. This validation checks the value of a specific field. If the value is greater than specified in the validation implementation, a [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) cannot be saved. The test class contains a basic [unit test](ABENUNIT_TEST_GLOSRY.html) which includes the method `validate_field`. The method is provided with mock data. In this case, the field value that is checked with the validation `validate_field` is set that the saving of an instance does not fail.

To show the unit test result, execute the unit test.

**Note** To show a failed unit test, you can set the value of *data\_field4\_root* provided in the *validate\_field* method implementation to a value greater than the specified threshold in the behavior pool or uncomment the definition and implementation of method *validate\_field\_fails*.

CLASS-DATA: class\_under\_test TYPE REF TO lhc\_demo\_managed\_root2, \\n... CREATE OBJECT class\_under\_test FOR TESTING. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abenrpm\_testing.html