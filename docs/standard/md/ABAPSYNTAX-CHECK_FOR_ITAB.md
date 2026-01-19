---
title: "ABAPSYNTAX-CHECK_FOR_ITAB"
description: |
  ABAPSYNTAX-CHECK_FOR_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSYNTAX-CHECK_FOR_ITAB.htm"
abapFile: "ABAPSYNTAX-CHECK_FOR_ITAB.html"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "ABAPSYNTAX", "CHECK", "FOR", "ITAB"]
---

[Short Reference](ABAPSYNTAX-CHECK_SHORTREF.html)

`SYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd`\\ 
                 `[PROGRAM prog]\ [DIRECTORY ENTRY dir]`\\ 
                 `[WITH CURRENT SWITCHSTATES]`\\ 
``\ [[`error_handling`](ABAPSYNTAX-CHECK_ERROR_HANDLING.html)].``

[1. `... PROGRAM prog`](#ABAP_ADDITION_1@3@)

[2. `... DIRECTORY ENTRY dir`](#ABAP_ADDITION_2@3@)

[3. `... WITH CURRENT SWITCHSTATES`](#ABAP_ADDITION_3@3@)

This statement executes a [syntax check](ABENSYNTAX_CHECK_GLOSRY.html) on the content of the internal table `itab`. The internal table `itab` must be a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) with a character-like line type.

If the internal table does not contain syntactically correct ABAP source code, then:

The additions `PROGRAM` and `DIRECTORY ENTRY` are used to set the properties for the syntax check. The addition `WITH CURRENT SWITCHSTATES` affects which switch configuration is used for the syntax check. The other [`error_handling`](ABAPSYNTAX-CHECK_ERROR_HANDLING.html) additions can be used to identify other properties of the first syntax error.

If a runtime error occurs during the syntax check (`sy-subrc` has the value 8), a database rollback is executed in the usual manner. As usual, the short dump of the runtime error can be found in the [ABAP Dump Analysis](ABENABAP_DUMP_ANALSYIS_GLOSRY.html).

If the internal addition [`ID`](ABAPSYNTAX-CHECK_INTERNAL.html) is specified with `ERR`, the value 6 can also occur for `sy-subrc`.

It is not necessary to execute the statement `SYNTAX-CHECK` directly before [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html) or [`GENERATE REPORT`](ABAPGENERATE_REPORT.html), since the syntax check is always performed when these statements are executed.

These additions are used to specify the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html) used for the syntax check.

At least one of the two additions `PROGRAM` or `DIRECTORY ENTRY` must be specified. If both additions are specified, the program properties are determined by the structure `dir`.

The [ABAP language version](ABENABAP_VERSION_GLOSRY.html) used for the syntax check is either taken from program `prog` or from component `UCCHECK` of structure `dir`. If a restricted language version like [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) or [ABAP for Key Users](ABENABAP_FOR_KEY_USERS_GLOSRY.html) is set, the syntax check leads to errors if:

Syntax check for source code in `itab`. By reading the properties of the current program from the database `TRDIR` into the structure `dir`, these can be used after `DIRECTORY ENTRY`. When the version ID in the component `dir-uccheck` is set, the first syntax check is performed in the same way as for programs with the obsolete language version [Non-Unicode ABAP](ABENNON_UNICODE_ABAP_GLOSRY.html). The second syntax check is executed as for programs with language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html). The first syntax check finds the error indicating that the program is not Unicode-enabled. The second syntax check always identifies the error when the addition `BYTE` or `CHARACTER MODE` is missing from the statement `DESCRIBE`.

This addition causes the syntax check to use the switch configuration of [Switch Framework](ABENSWITCH_GLOSRY.html) as it was when the current transaction was called. Without the addition, the switch configuration valid when the statement is executed is used.

-   The error message of the first syntax error is assigned to variable `mess`. `mess` must be a character-like data object.
-   The line number of the first syntax error, with reference to the program in which it occurs (either the source code in `itab` or an integrated [include program](ABENINCLUDE_PROGRAM_GLOSRY.html) included there) is assigned to the variable `lin`. `lin` expects the data type `i`.
-   The first token with errors is assigned to the variable `wrd`. `wrd` must be a character-like data object.

-   The `PROGRAM` addition is used to specify in `prog` the name of an ABAP program whose program properties are to be used for the syntax check. `prog` must be a character-like data object, whose content is not case-sensitive. If the specified program is not found, the program type is set to `1` and the other properties are set to general standard values.
-   After the `DIRECTORY ENTRY` addition, a data object `dir` must be specified, whose data type corresponds to the structure of database table `TRDIR` from the ABAP Dictionary. The required program properties can be specified in the components of this structure. Invalid values are replaced implicitly by internally defined standard values.

-   ABAP language elements are used that are [not allowed for that ABAP version](ABENRESTRICTED_ABAP_ELEMENTS.html).
-   [Repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) are accessed that are not part of the [released API](ABENRELEASED_API_GLOSRY.html) for that version.
-   This check depends on the software component to which the program specified by `prog` or `dir` is assigned. This assignment is done in database table `TDEVC` for the [package](ABENPACKAGE_GLOSRY.html) of the program. The statement `SYNTAX-CHECK` gets the package of the program from database table `TADIR`. It cannot be overridden by a component of structure `dir`.

-   It is advisable to use the addition `PROGRAM`, since the components of the structure `dir` and their valid values are only known to the ABAP runtime framework. If the addition `DIRECTORY ENTRY` is used in application programs nevertheless, the content of the structure `dir` should be set by reading the appropriate entry from the database table `TRDIR` and by modifying only such components that are identifiable.
-   Examples of program properties that are important for the syntax check are the program types and the [ABAP language version](ABENABAP_VERSION_GLOSRY.html).

-   This addition causes the syntax check to run with the same switch states from the Switch Framework as when the statement [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html) was executed.
-   Without the addition, the syntax check is performed in the same way as for any regular compilation of ABAP programs.

DATA: itab TYPE STANDARD TABLE OF string, \\n mess TYPE string, \\n lin TYPE i, \\n wrd TYPE string, \\n dir TYPE trdir. \\n\\ \\nitab = VALUE #( \\n ( \`PROGRAM test.\` ) \\n ( \`DATA dat TYPE d.\` ) \\n ( \`DATA len TYPE i.\` ) \\n ( \`DESCRIBE FIELD dat LENGTH len.\` ) ). \\n\\ \\nSELECT SINGLE \* \\n FROM trdir \\n WHERE name = @sy-repid \\n INTO @dir. \\n\\ \\ndir-uccheck = ' '. \\n\\ \\nSYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd \\n DIRECTORY ENTRY dir. \\n\\ \\nIF sy-subrc = 4. \\n MESSAGE mess TYPE 'I'. \\nENDIF. \\n\\ \\ndir-uccheck = 'X'. \\n\\ \\nSYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd \\n DIRECTORY ENTRY dir. \\n\\ \\nIF sy-subrc = 4. \\n MESSAGE mess TYPE 'I'. \\nENDIF. `**sy-subrc**` **Meaning** 0 The internal table `itab` contains a syntactically correct ABAP program. 4 The internal table `itab` does not contain a syntactically correct ABAP program. 8 A runtime error occurred in the syntax check. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html