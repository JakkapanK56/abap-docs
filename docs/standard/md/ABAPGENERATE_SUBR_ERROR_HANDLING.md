---
title: "ABAPGENERATE_SUBR_ERROR_HANDLING"
description: |
  ABAPGENERATE_SUBR_ERROR_HANDLING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGENERATE_SUBR_ERROR_HANDLING.htm"
abapFile: "ABAPGENERATE_SUBR_ERROR_HANDLING.html"
keywords: ["select", "do", "if", "data", "ABAPGENERATE", "SUBR", "ERROR", "HANDLING"]
---

[Short Reference](ABAPGENERATE_SHORTREF.html)

`... [MESSAGE mess]`\\ 
    `[INCLUDE incl]`\\ 
    `[LINE lin]`\\ 
    `[WORD wrd]`\\ 
    `[OFFSET off]`\\ 
    `[MESSAGE-ID mid]`\\ 
    `[SHORTDUMP-ID sid] ...`

[1. `... MESSAGE mess`](#ABAP_ADDITION_1@3@)

[2. `... INCLUDE incl`](#ABAP_ADDITION_2@3@)

[3. `... LINE lin`](#ABAP_ADDITION_3@3@)

[4. `... WORD wrd`](#ABAP_ADDITION_4@3@)

[5. `... OFFSET off`](#ABAP_ADDITION_5@3@)

[6. `... MESSAGE-ID mid`](#ABAP_ADDITION_6@3@)

[7. `... SHORTDUMP-ID sid`](#ABAP_ADDITION_7@3@)

These additions can be used to analyze syntax and generation errors of the [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html) statement. Syntax errors can either occur in the source code specified in `itab`, or in the [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) included using the [`INCLUDE`](ABAPINCLUDE_PROG.html) statement. Generation errors can occur, for example, if the program contains errors in declaration statements that are not identified in the static syntax check.

The following can be specified in all operand positions behind these additions:

If the subroutine pool contains one or more syntax errors, the text of the error message for the first syntax error is assigned to the variable `mess`. A character-like variable or an [inline declaration](ABENDATA_INLINE.html) that creates a variable of type `string` can both be specified for `mess`.

If a generation error occurs (see the addition `SHORTDUMP-ID`), `mess` is also filled with the corresponding error message. If the subroutine pool can be generated, the content of `mess` remains unchanged.

If one or more include programs are included in the subroutine pool and one of these contains the first syntax error of the subroutine pool, the name of this include program is assigned to the variable `incl`. A character-like variable or an [inline declaration](ABENDATA_INLINE.html) that creates a variable of type `PROGNAME` can both be specified for `incl`.

If the first syntax error in the source code occurs in `itab`, `incl` is assigned the internal name that would have been returned if generation in `prog` had been successful. This name always begins with *%\_*.

If a generation error occurs (see the addition `SHORTDUMP-ID`), `incl` is also filled with the name of the corresponding [include program](ABENINCLUDE_PROGRAM_GLOSRY.html). If the subroutine pool can be generated, the content of `incl` is not changed.

If the subroutine pool contains one or more syntax errors, the line number of the first syntax error in relation to the program in which it occurs (either the source code in `itab` or an integrated include program), is assigned to the variable `lin`. A variable of type `i` or an [inline declaration](ABENDATA_INLINE.html) that creates a variable of this type can both be specified for `lin`.

If a generation error occurs (see the addition `SHORTDUMP-ID`), `lin` is also filled with the corresponding line number. If the subroutine pool can be generated, the content of `lin` is not changed.

If the subroutine pool contains one or more syntax errors, the first token with an error is assigned to the variable `wrd`. A character-like variable or an [inline declaration](ABENDATA_INLINE.html) that creates a variable of type `string` can be specified for `wrd`.

If a generation error occurs (see the addition `SHORTDUMP-ID`), `wrd` is also filled with the corresponding token. If the subroutine pool can be generated, the content of `wrd` is not changed.

If the subroutine pool contains one or more syntax errors, the offset of the first token with errors, with reference to the line in the source code, is assigned to the variable `off`. A variable of type `i` or an [inline declaration](ABENDATA_INLINE.html) that creates a variable of this type can both be specified for `off`.

If a generation error occurs (see the addition `SHORTDUMP-ID`), `off` is also filled with the corresponding offset. If the subroutine pool can be generated, the content of `off` is not changed.

If the subroutine pool contains one or more syntax errors, the key under which the first error message is stored in the database table `TRMSG` is assigned to the variable `mid`.

If a generation error occurs (see the addition `SHORTDUMP-ID`), `mid` is also filled with the corresponding key. If the subroutine pool can be generated, the content of `mid` is not changed.

The key of the database table `TRMSG` consists of the components `SPRAS` of length 1, `KEYWORD` of length 20, and `MSGNUMBER` of length 4. The component `MSGNUMBER` is used for a three-character ID. The fourth position can contain a blank character or a letter. For error messages with multiple parts that fill more than one line in the database table `TRMSG`, all parts have the same three-character ID. The fourth character indicates the part of the message.

The data object `mid` must have the data type `TRMSG_KEY` from the ABAP Dictionary, which consists of the components `SPRAS` with length 1, `KEYWORD` with length 20, and `MSGNUMBER` with length 3. An [inline declaration](ABENDATA_INLINE.html) creates a structure like this.

The return value in `mid` only contains the three-character ID of a syntax error message. For example, to use `SELECT` to read all parts of an error message from table `TRMSG`, the key component `MSGNUMBER` must be specified generically in the [`WHERE` condition](ABENABAP_SQL_STMT_LOGEXP.html), for example, by using `LIKE` and the wildcard character *%*.

If the subroutine pool does not contain any statically known syntax errors, but an exception is raised during generation, the ID of the runtime error that is assigned to the exception is assigned to the variable `sid`. A character-like variable or an [inline declaration](ABENDATA_INLINE.html) that creates a variable of type `string` can be specified for `sid`.

If the subroutine pool can be generated, the content of `sid` is not changed.

Detection and display of any syntax and generation errors that occur when a subroutine pool with errors is generated.

-   An existing variable that matches the operand type.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable that matches the operand type is declared.

-   An exception during generation interrupts the generation but does not terminate the program. The runtime error is handled internally, but still causes a [database rollback](ABENDATABASE_COMMIT_GLOSRY.html) and the [short dump](ABENSHORT_DUMP_GLOSRY.html) to be saved.
-   The IDs of runtime errors are contained in the key column `ERRID` of the database table `SNAPT`. Texts are assigned to the errors here.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA tab TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\ntab = VALUE #( \\n ( \`PROGRAM subpool.\` ) \\n ( \`FRM form.\` ) \\n ( \` ...\` ) \\n ( \`ENDFORM.\` ) ). \\n\\ \\nGENERATE SUBROUTINE POOL tab NAME FINAL(prog) \\n MESSAGE FINAL(mess) \\n INCLUDE FINAL(incl) \\n LINE FINAL(line) \\n WORD FINAL(wrd) \\n OFFSET FINAL(off) \\n MESSAGE-ID FINAL(mid) \\n SHORTDUMP-ID FINAL(sid). \\n\\ \\nout->write( \\n |MESSAGE: \\{ mess \\}\\\\n| && \\n |INCLUDE: \\{ incl \\}\\\\n| && \\n |LINE: \\{ line \\}\\\\n| && \\n |WORD: \\{ wrd \\}\\\\n| && \\n |OFFSET: \\{ off \\}\\\\n| && \\n |MESSAGE-ID: \\{ CONV string( mid ) \\}\\\\n| && \\n |SHORTDUMP-ID: \\{ sid \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html abapgenerate\_subroutine\_pool.html