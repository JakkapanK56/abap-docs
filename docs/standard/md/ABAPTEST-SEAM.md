---
title: "ABAPTEST-SEAM"
description: |
  ABAPTEST-SEAM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTEST-SEAM.htm"
abapFile: "ABAPTEST-SEAM.html"
keywords: ["select", "insert", "do", "if", "method", "class", "data", "ABAPTEST", "SEAM"]
---

[Short Reference](ABAPTEST-SEAM_SHORTREF.html)

`TEST-SEAM seam.`\\ 
  `[statement_block]`\\ 
`END-TEST-SEAM.`

The statement `TEST-SEAM` introduces a [test seam](ABENTEST_SEAM_GLOSRY.html) called `seam`, which is closed by `END-TEST-SEAM`. A [test class](ABENTEST_CLASS_GLOSRY.html) of the current program can use the statement [`TEST-INJECTION`](ABAPTEST-INJECTION.html) to replace the statement block `statement_block` with an [injection](ABENINJECTION_GLOSRY.html) defined there. If no injection is performed for the test seam, the original code is executed.

Test seams have the following properties:

Here, the class `CL_DEMO_TEST_SEAMS` is an example of production code. The method `CHANGE_PRICE` multiplies the price of a flight in the database table `SFLIGHT` by a factor and, if successful, returns the modified price. If a database access fails, a specific invalid value is returned instead of the price.

Test seams are defined for both database accesses. This makes it possible to run a unit test without accessing actual data. See the example for [`TEST-INJECTION`](ABAPTEST-INJECTION.html).

-   Multiple test seams can be defined in a single [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html), but each must have a unique name.
-   The general [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `seam`.
-   Test seams cannot be nested, which means that a test seam cannot contain further test seams.
-   A test seam cannot extend beyond the limits of a [statement block](ABENSTATEMENT_BLOCK_GLOSRY.html) but can contain closed [control structures](ABENCONTROL_STRUCTURE_GLOSRY.html).
-   A test seam can include data declarations. These declarations are not replaced when an injection is performed and remain visible in their context.
-   Test seams can be defined in the [global declaration part](ABENGLOBAL_DECLARATION_SECT_GLOSRY.html) of a program but not in the [declaration part](ABENDECLARATION_PART_GLOSRY.html) of a class.
-   A test seam can be empty, that is, it does not contain any statements. An injection is inserted instead.
-   Test seams cannot be defined in test classes.

-   The [injections](ABENINJECTION_GLOSRY.html) for a test seam must be defined in the same [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html).
-   [Injections](ABENINJECTION_GLOSRY.html) can only be created in test classes that are defined in a [test include](ABENTEST_INCLUDE_GLOSRY.html) of the current program. Test includes are currently only possible in [class pools](ABENCLASS_POOL_GLOSRY.html) and [function pools](ABENFUNCTION_POOL_GLOSRY.html). This means that test seams are only feasible in class pools and function pools.

METHOD change\_price. \\n DATA wa TYPE sflight. \\n TEST-SEAM selection. \\n SELECT SINGLE \* \\n FROM sflight \\n WHERE carrid = @carrid AND \\n connid = @connid AND \\n fldate = @fldate \\n INTO @wa. \\n subrc = sy-subrc. \\n END-TEST-SEAM. \\n IF subrc <> 0. \\n new\_price = -1. \\n RETURN. \\n ENDIF. \\n wa-price = wa-price \* factor / 100. \\n TEST-SEAM modification. \\n MODIFY sflight FROM @wa. \\n subrc = sy-subrc. \\n END-TEST-SEAM. \\n IF subrc = 0. \\n new\_price = wa-price. \\n ELSE. \\n new\_price = -2. \\n ENDIF. \\nENDMETHOD. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_unit.html abentest\_seams.html