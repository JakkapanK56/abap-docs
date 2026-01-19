---
title: "ABAPGENERATE_REPORT"
description: |
  ABAPGENERATE_REPORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGENERATE_REPORT.htm"
abapFile: "ABAPGENERATE_REPORT.html"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "ABAPGENERATE", "REPORT"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`GENERATE REPORT prog [error_handling].`

[1. `... MESSAGE f1`](#ABAP_ADDITION_1@3@)

[2. `... INCLUDE f2`](#ABAP_ADDITION_2@3@)

[3. `... LINE f3`](#ABAP_ADDITION_3@3@)

[4. `... WORD f4`](#ABAP_ADDITION_4@3@)

[5. `... OFFSET f5`](#ABAP_ADDITION_5@3@)

[6. `... TRACE-FILE f6`](#ABAP_ADDITION_6@3@)

[7. `... DIRECTORY ENTRY f7`](#ABAP_ADDITION_7@3@)

[8. `... WITHOUT SELECTION-SCREEN`](#ABAP_ADDITION_8@3@)

[9. `... MESSAGE-ID f8`](#ABAP_ADDITION_9@3@)

[10.`... SHORTDUMP-ID f9`](#ABAP_ADDITION_10@3@)

[11.`... WITH PRECOMPILED HEADERS`](#ABAP_ADDITION_11@3@)

[12.`... WITH TEST CODE`](#ABAP_ADDITION_12@3@)

The program specified in the `prog` field is generated in the current work process. If the program is an executable program, that is, a program of internal type 1, the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) is also generated automatically.

For the syntax check, the switch configuration of [Switch Framework](ABENSWITCH_GLOSRY.html) is used in its current status when the statement is executed.

[Inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) can be specified for the same operands, as in the statement [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html).

If a runtime error occurs during generation (`sy-subrc` has the value 8 or 16), a database rollback is executed as usual.

When a syntax error occurs, the error message is stored in this field.

When a syntax error occurs, the name of the [include program](ABENINCLUDE_PROGRAM_GLOSRY.html) in which the error occurred is stored in this field.

When a syntax error occurs, the number of the incorrect line is stored in this field.

When a syntax error occurs, the incorrect word is stored in this field.

When a syntax error occurs, the position of the incorrect word in the incorrect line is stored in this field.

Trace output is stored in this file. This addition automatically activates trace mode.

The program properties required for checking are read from field `f7`. This field must match the structure of table `TRDIR`.

The [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) is not generated.

If a syntax error occurs, the key of the corresponding error message is returned in field `f8`. This key has the same structure as the key of table `TRMSG`.

If a [short dump](ABENSHORT_DUMP_GLOSRY.html) occurs, the key of the corresponding short dump is returned in the `f9` field. This key has a maximum length of 30 characters.

This addition allows precompiled headers to be regenerated when generating the ABAP program `prog`. Precompiled headers are used to increase the translation speed of the ABAP Compiler by buffering the declaration data of global classes, interfaces, and [type pools](ABENTYPE_POOL_GLOSRY.html) in formatted form for the ABAP Compiler.

If this addition is used, it must be ensured that the application performs a [`COMMIT WORK`](ABAPCOMMIT.html) or [`ROLLBACK WORK`](ABAPROLLBACK.html) within a short period of time. This ensures that the [database locks](ABENDATABASE_LOCK_GLOSRY.html) that are set when the precompiled headers are regenerated, are held for a short time only and therefore do not block generation of other ABAP programs.

With this addition, the [test classes](ABENTEST_CLASS_GLOSRY.html) of the program are generated independently of the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `abap/test_generation`.

-   If the profile parameter `abap/pxa` has the value *develop*, a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) is triggered after generation.
-   The static method `GET_VALUES` of the system class `CL_ABAP_GEN_LIMITS` returns the generation limits of an ABAP program. In the ABAP Workbench, these can be determined by choosing *Program -> Check -> Generation Limits*. The generation limits of an ABAP program are technical maximum values that must not be exceeded for a successful generation. The values affected include:

-   Number of variables
-   Jumping distance
-   etc.

`**sy-subrc**` **Meaning** 0 Program was generated successfully. <> 0 Program could not be generated. 4 A syntax error occurred. 8 A generation error occurred. 16 Error while generating the selection screen. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html abengeneric\_internal.html