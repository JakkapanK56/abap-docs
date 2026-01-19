---
title: "ABENMACROS_GUIDL"
description: |
  ABENMACROS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMACROS_GUIDL.htm"
abapFile: "ABENMACROS_GUIDL.html"
keywords: ["select", "do", "if", "case", "method", "data", "types", "internal-table", "ABENMACROS", "GUIDL"]
---

A [macro](ABENABAP_MACROS.html) is a summary of a statement list for internal reuse within a program between [`DEFINE`](ABAPDEFINE.html) and [`END-OF-DEFINITION`](ABAPEND-OF-DEFINITION.html). The statement list is included in another position in the program by specifying the macro name. A macro can contain up to nine placeholders, `&1` to `&9`, in place of ABAP words and operands (or parts of operands). These placeholders must be replaced by fixed words when the macro is included.

**Only use macros in exceptional cases.**

We recommend that procedures ([methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)) or expressions with appropriate operators are used instead of macros.

Macros are often used as callable units, instead of real procedures. This is rarely a good idea however. Macros do not have a real context, and cannot be executed in steps in ABAP Debugger. This makes it practically impossible to look for errors in programs that use large or complex macros. For these reasons, a macro cannot be viewed as a worthy replacement for a genuine procedure.

In addition, in the past macros were not just used to replace procedures, they were also used to perform recurrent declarations of structured data. Today, macros are, of course, avoided and [standalone types](ABENBOUND_INDEPENDENT_DTYPE_GUIDL.html) are used instead.

Nowadays, expressions can be used instead of macros in many cases. One example is using the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) to fill internal tables, which makes it unnecessary to use macros (which mostly contain the statement `APPEND`.

In certain cases, however, the use of macros could be justified, as long as the statement patterns are simple and recurring. Here, a macro can be seen as a design-time generation tool. The following (good) example shows how a macro can be used in this way. In a situation like this, a macro may be preferable to a procedure for the following reasons:

This means that, in certain cases, using macros can improve the correctness and maintainability of source code. Macros that contain non-trivial control structures, however, always present a maintenance problem because they cannot run in steps in ABAP Debugger. For this reason, use macros very sparingly and only if they contain no more than a few lines. Errors in macros are almost impossible to analyze.

As well as existing in the source code of a program, macros can also be saved as cross-program macros in type pools or in the database table `TRMAC`. However, no new macros should be defined in type pools or `TRMAC`.

The following source code is an example where a macro is an unsuitable replacement for a genuine procedure. In this case, the macro could only be used once and in a single context, since the work area `wa` can only be declared once there. In this example, a procedure with dynamic components would be a better idea.

The following source code shows an example where using a macro could be a good idea. Here, a few simple statement lists (assignments enclosed in `IF`) are to be repeated often. The names of the operands are also very regular. This function could also be implemented using other means (such as a procedure) by using dynamic means to access the variables or by expanding every `IF` block. In this particular case, however, using a small macro makes the program far easier to understand and maintain.

-   The statement list in the macro is clear and simple enough that it does not matter that it cannot be debugged.
-   The syntax check performs static checks on the correctness of the statements. When using the dynamic language methods required in a procedure, any errors (in this case, incorrect names) would not be detected until runtime. [Dynamic access](ABENDYNAMIC_PROG_TECHNIQUE_GDL.html) would also be more time-consuming.
-   Unlike listing all statements separately, using these macros makes the source code clearer, particularly if the statement list is repeated frequently. There is a lower risk of trivial typing errors being made, since there is no need to create and edit a large volume of similar source code. It is easier to make subsequent changes to the logic.

DEFINE get\_data. \\n DATA wa TYPE &1. \\n SELECT SINGLE \* \\n FROM &1 \\n WHERE &2 = @&3 AND \\n &4 = @&5 \\n INTO @wa. \\nEND-OF-DEFINITION.get\_data spfli carrid 'LH' connid '0400'. TYPES: BEGIN OF value\_and\_flag, \\n value TYPE string, \\n flag TYPE c LENGTH 1, \\n END OF value\_and\_flag.TYPES: BEGIN OF structure, \\n component\_up TYPE value\_and\_flag, \\n component\_down TYPE value\_and\_flag, \\n ... \\n component\_top TYPE value\_and\_flag, \\n END OF structure.DATA struct TYPE structure.DEFINE macro\_set\_value\_if\_flag\_is\_set. \\n IF struct-component\_&1-flag = abap\_true. \\n struct-component\_&1-value = &2. \\n ENDIF. \\nEND-OF-DEFINITION....macro\_set\_value\_if\_flag\_is\_set up 'ABC'. \\nmacro\_set\_value\_if\_flag\_is\_set down 'IJK'. \\n... \\nmacro\_set\_value\_if\_flag\_is\_set top 'XYZ'. \\n... abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenmodularization\_unit\_gdl.html