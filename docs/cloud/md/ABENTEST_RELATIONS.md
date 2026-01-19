---
title: "ABENTEST_RELATIONS"
description: |
  ABENTEST_RELATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTEST_RELATIONS.htm"
abapFile: "ABENTEST_RELATIONS.html"
keywords: ["do", "if", "case", "method", "class", "ABENTEST", "RELATIONS"]
---

`"! @testing [kind:]name`

This special [ABAP Doc comment](ABENABAP_DOC_COMMENT_GLOSRY.html) can be used in front of the declaration of a [test class](ABENTEST_CLASS_GLOSRY.html) or a [test method](ABENTEST_METHOD_GLOSRY.html) to define a [test relation](ABENTEST_RELATION_GLOSRY.html) that links the test class or test method with the repository object specified after `@testing`.

Defining a test relation between a test class or test method and a repository object has the effect that the test can be displayed and executed for this object in [ADT](ABENADT_GLOSRY.html).

Defining test relations between a test class and its test methods and various repository objects.

-   `name` is used to specify the name of a repository object and is not case-sensitive.
-   `kind` must be used to specify the type of some repository objects and must be omitted for others. The following can be used for `kind`:

-   `FUNC` for [function modules](ABENFUNCTION_MODULE_GLOSRY.html) in function pools
-   `FUGR` for [function pools](ABENFUNCTION_POOL_GLOSRY.html)
-   `XSLT` for [XSLT programs](ABENXSLT_PROGRAM_GLOSRY.html) and [Simple Transformations](ABENSIMPLE_TRANSFORMATION_GLOSRY.html)
-   `BDEF` for [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)

-   `kind` cannot and must not be specified for other repository objects such as global classes and [CDS entities](ABENCDS_ENTITY_GLOSRY.html). They are addressed by their names alone.

-   Test relations are to be understood more as an annotation in an ABAP program than as ABAP Doc comment.
-   Test relations are used to link repository objects with external [unit tests](ABENUNIT_TEST_GLOSRY.html). This is especially useful for repository objects that do not support test classes themselves.
-   The current program of the test class or test method cannot be specified.
-   Multiple test relations can be specified for a single test class or test method.
-   For more information, see [Writing ABAP Unit with Test Relations](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/12104d8c73224af78f5a04885809b30e).

"! @testing cl\_demo1 \\n"! @testing cl\_demo2 \\nCLASS test\_demo\_cds\_association DEFINITION FOR TESTING. \\n PRIVATE SECTION. \\n METHODS: \\n test\_class1 FOR TESTING, \\n test\_class2 FOR TESTING, \\n "! @testing demo\_cds\_view \\n test\_cds\_view FOR TESTING, \\n "! @testing XSLT:demo\_trafo \\n test\_transformation FOR TESTING. \\nENDCLASS. \\n\\ \\nCLASS test\_demo\_cds\_association IMPLEMENTATION. \\n METHOD test\_cds\_view. \\n ... \\n ENDMETHOD. \\n METHOD test\_class1. \\n ... \\n ENDMETHOD. \\n METHOD test\_class2. \\n ... \\n ENDMETHOD. \\n METHOD test\_transformation. \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_unit.html