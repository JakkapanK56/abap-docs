---
title: "ABAPGENERATE_SUBROUTINE_POOL"
description: |
  ABAPGENERATE_SUBROUTINE_POOL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGENERATE_SUBROUTINE_POOL.htm"
abapFile: "ABAPGENERATE_SUBROUTINE_POOL.html"
keywords: ["select", "delete", "loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABAPGENERATE", "SUBROUTINE", "POOL"]
---

[Short Reference](ABAPGENERATE_SHORTREF.html)

``GENERATE SUBROUTINE POOL itab NAME prog [[`error_handling`](ABAPGENERATE_SUBR_ERROR_HANDLING.html)].``

This statement generates a temporary [subroutine pool](ABENSUBROUTINE_POOL_GLOSRY.html). The source code of the subroutine pool is taken from the internal table `itab`. The generated subroutine pool is stored internally in the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html). The eight-character name of the temporary subroutine pool is assigned to the variable `prog`. The following can be specified for `prog`:

For `itab`, only a standard table without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is allowed. The line type of `itab` must be character-like. A line of source code in `itab` can have no more than 255 characters. For line types with a fixed length, trailing blanks are ignored. In an internal session, a maximum of 36 temporary subroutine pools can be created.

If the source code in `itab` has a syntax error, the subroutine pool is not generated and `prog` is initialized. The addition [`error_handling`](ABAPGENERATE_SUBR_ERROR_HANDLING.html) can be used to analyze syntax errors and generation errors. For the syntax check, the switch configuration of [Switch Framework](ABENSWITCH_GLOSRY.html) is used as it was when the current transaction was called.

If an exception is raised when the subroutine pool is generated, the runtime error is handled internally so that no programs are terminated and `sy-subrc` is set to the value 8 instead. However, there is still a [database rollback](ABENDATABASE_COMMIT_GLOSRY.html) and the corresponding [short dump](ABENSHORT_DUMP_GLOSRY.html) is saved as regular. The addition [`SHORTDUMP-ID`](ABAPGENERATE_SUBR_ERROR_HANDLING.html) can be used to determine the ID of the runtime error.

Subroutines defined in the source code of the subroutine pool can be called from all programs that are loaded in the same internal session by specifying the program name `prog` using the statement [`PERFORM`](ABAPPERFORM.html). When a subroutine is called for the first time in the subroutine pool, this is loaded into the internal session, and the event [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) is raised.

If a runtime error occurs during the generation process (`sy-subrc` has the value 8), a database rollback is executed as usual.

[Generic Programming](ABENGENERIC_PROGR_GUIDL.html)

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

Creates and dynamically generates a subroutine pool that implements the event block `LOAD-OF-PROGRAM` and two subroutines. Depending on the return code `sy-subrc`, a subroutine is called, or a [message](ABENMESSAGE_GLOSRY.html) is issued.

Creates and dynamically generates a subroutine pool that implements a local class. The static method `meth` of the class can be called using the [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html) of the class.

Creates and dynamically generates a subroutine pool that implements a local class. The class is instantiated using its [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html), and the instance method `meth` is called dynamically.

`CX_SY_GENERATE_SUBPOOL_FULL`

`CX_SY_GEN_SOURCE_TOO_WIDE`

-   An existing character-like variable
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `PROGNAME` is declared.

-   Since subroutines are now obsolete as a method of program modularization, a temporary subroutine pool created using `GENERATE SUBROUTINE POOL` should only contain a single initial subroutine that calls a method of a local class and does not contain any other functional code.
-   The syntax rules of the [ABAP language version](ABENABAP_VERSION_GLOSRY.html) of the creating program also apply to the subroutine pool created.
-   Using the switch configuration available when the transaction was called for the syntax check ensures that the entire transaction is executed using the same switch configuration (guaranteed by Switch Framework).
-   The source code in the internal table `itab` must contain a complete ABAP program, including the [program-initiating statement](ABENPROGRAM_INIT_STATEMENT_GLOSRY.html).
-   In a temporary subroutine pool, the same global declarations and processing blocks can be defined as in the static subroutine pool of the repository (see [table of program types](ABENPROGRAM_TYPE_OVIEW.html)).
-   The addition `REDUCED FUNCTIONALITY` of the statement that introduces the program [`PROGRAM`](ABAPPROGRAM.html) also works in temporary subroutine pools and its use is recommended in order to reduce their resource consumption.
-   Temporarily created subroutine pools can be executed in the ABAP Debugger in single steps.
-   A temporary subroutine pool created for an internal session cannot be deleted explicitly. It remains available from the time it is created up to the point where the internal session is closed.
-   The eight-character internal name of a temporary subroutine pool begins with `%_T`. This prefix is reserved for temporary subroutine pools.
-   `GENERATE SUBROUTINE POOL` should only be used in exceptional cases in application programs. ABAP provides many other means of dynamic programming, which generally make creating source code dynamically unnecessary (see the list in [dynamic program processing](ABENABAP_LANGUAGE_DYNAMIC.html)).

-   *Cause:* No further temporary subroutine pools can be generated.
    *Runtime error:*\\ `GENERATE_SUBPOOL_DIR_FULL`

-   *Cause:* The source code is in a table consisting of strings and the table contains lines with more than 255 characters.
    *Runtime error:*\\ `GEN_SOURCE_TOO_WIDE`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA tab TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\ntab = VALUE #( \\n ( \`PROGRAM subpool.\` ) \\n ( \`DATA spfli\_tab TYPE TABLE OF spfli.\` ) \\n ( \`LOAD-OF-PROGRAM.\` ) \\n ( \` SELECT \*\` & \\n \` FROM spfli\` & \\n \` INTO TABLE @spfli\_tab.\` ) \\n ( \`FORM loop\_at\_tab\` & \\n \`USING out TYPE REF TO if\_demo\_output.\` ) \\n ( \` DATA spfli\_wa TYPE spfli.\` ) \\n ( \` LOOP AT spfli\_tab INTO spfli\_wa.\` ) \\n ( \` PERFORM evaluate\_wa\` & \\n \`USING spfli\_wa\` & \\n \`out TYPE REF TO if\_demo\_output.\` ) \\n ( \` ENDLOOP.\` ) \\n ( \`ENDFORM.\` ) \\n ( \`FORM evaluate\_wa\` & \\n \`USING l\_wa TYPE spfli\` & \\n \`out TYPE REF TO if\_demo\_output.\` ) \\n ( \` out->write\_data( l\_wa ).\` ) \\n ( \`ENDFORM.\` ) ). \\n\\ \\nGENERATE SUBROUTINE POOL tab NAME FINAL(prog) \\n MESSAGE FINAL(mess) \\n SHORTDUMP-ID FINAL(sid). \\n\\ \\nIF sy-subrc = 0. \\n PERFORM ('LOOP\_AT\_TAB') IN PROGRAM (prog) IF FOUND \\n USING out. \\nELSEIF sy-subrc = 4. \\n MESSAGE mess TYPE 'I'. \\nELSEIF sy-subrc = 8. \\n MESSAGE sid TYPE 'I'. \\nENDIF. \\n\\ \\nout->display( ). DATA itab TYPE TABLE OF string. \\nDATA class TYPE string. \\n\\ \\nitab = VALUE #( \\n ( \`program.\` ) \\n ( \`class main definition.\` ) \\n ( \` public section.\` ) \\n ( \` class-methods meth.\` ) \\n ( \`endclass.\` ) \\n ( \`class main implementation.\` ) \\n ( \` method meth.\` ) \\n ( \` message 'Test' type 'I'.\` ) \\n ( \` endmethod.\` ) \\n ( \`endclass.\` ) ). \\n\\ \\nGENERATE SUBROUTINE POOL itab NAME FINAL(prog). \\n\\ \\nclass = \`\\\\PROGRAM=\` && prog && \`\\\\CLASS=MAIN\`. \\n\\ \\nCALL METHOD (class)=>meth. DATA itab TYPE TABLE OF string. \\nDATA class TYPE string. \\nDATA oref TYPE REF TO object. \\n\\ \\nitab = VALUE #( \\n ( \`program.\` ) \\n ( \`class main definition.\` ) \\n ( \` public section.\` ) \\n ( \` methods meth.\` ) \\n ( \`endclass.\` ) \\n ( \`class main implementation.\` ) \\n ( \` method meth.\` ) \\n ( \` message 'Test' type 'I'.\` ) \\n ( \` endmethod.\` ) \\n ( \`endclass.\` ) ). \\n\\ \\nGENERATE SUBROUTINE POOL itab NAME FINAL(prog). \\n\\ \\nclass = \`\\\\PROGRAM=\` && prog && \`\\\\CLASS=MAIN\`. \\n\\ \\nCREATE OBJECT oref TYPE (class). \\n\\ \\nCALL METHOD oref->('METH'). `**sy-subrc**` **Meaning** 0 Generation was successful. 4 The source code contains a syntax error. 8 A generation error occurred. The resulting runtime error was handled internally. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html