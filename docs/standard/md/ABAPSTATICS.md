---
title: "ABAPSTATICS"
description: |
  ABAPSTATICS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSTATICS.htm"
abapFile: "ABAPSTATICS.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABAPSTATICS"]
---

[Short Reference](ABAPSTATICS_SHORTREF.html)

``STATICS stat [[`options`](ABAPDATA.html)].``

Declares static variables `stat`. The statement `STATICS` for declaring static variables can only be used in [static methods](ABENSTATIC_METHOD_GLOSRY.html), [function modules](ABENFUNCTION_MODULE_GLOSRY.html), and [subroutines](ABENSUBROUTINE_GLOSRY.html).

The [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `stat`. The syntax of the additions `options` is the same as for the statement [`DATA`](ABAPDATA.html) for declaring regular variables. Only the additions [`READ-ONLY`](ABAPDATA_OPTIONS.html) and [`BOXED`](ABAPDATA_BOXED.html), and the declaration of [LOB handle structures](ABAPDATA_LOB_HANDLE.html) are not possible.

As with regular local variables, variables declared using `STATICS` are only visible within their [procedure](ABENPROCEDURE_GLOSRY.html). However, the lifetime of a variable declared using `STATICS` corresponds to that of a global data object. The variable is created once when the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) is loaded into the [internal session](ABENINTERNAL_SESSION_GLOSRY.html), and its content is assigned the [start value](ABENSTART_VALUE_GLOSRY.html) of the `VALUE` addition. Calling and ending the procedure have no effect on the lifetime and content.

In instance methods, the statement `STATICS` is not allowed. Instead, [static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html) of the class declared using [`CLASS-DATA`](ABAPCLASS-DATA.html) can be used.

The method `meth` produces the same result for the variable `local` for each call, since it is instantiated again in every call. However, the static variable `static` already exists and its value is increased by 1 for each call.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n DATA local TYPE i VALUE 10. \\n STATICS static TYPE i VALUE 10. \\n local += 1. \\n static += 1. \\n out->write( |Local: \\{ local \\}, | && \\n |Static: \\{ static \\}| ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nSTART-OF-SELECTION. \\n\\ \\n DO 10 TIMES. \\n cls=>meth( ). \\n ENDDO. \\n\\ \\n out->display( ). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html