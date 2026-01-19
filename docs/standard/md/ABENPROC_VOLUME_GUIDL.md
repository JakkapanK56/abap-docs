---
title: "ABENPROC_VOLUME_GUIDL"
description: |
  ABENPROC_VOLUME_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPROC_VOLUME_GUIDL.htm"
abapFile: "ABENPROC_VOLUME_GUIDL.html"
keywords: ["do", "if", "case", "method", "data", "ABENPROC", "VOLUME", "GUIDL"]
---

The procedure volume is the number of executable ABAP statements in a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)). In theory, this number has no upper limit and is only limited by the maximum program size that fits into the current session memory.

**Restrict the number of statements in procedures**

Restrict the number of executable ABAP statements in a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)) to a manageable size. A maximum of 150 executable statements per procedure is the recommended guideline.

Procedures with large volumes ([methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)) generally have a complex decision structure, a lot of procedure parameters and work with a multitude of local data. These procedures, which often do not perform a clearly defined single task, are difficult to understand and therefore particularly prone to errors. You should use multiple small procedures with narrow interfaces and closely defined tasks. The ideal parameter interface has a small number of input parameters and only one [return value](ABENTYPE_FORMAL_PARAM_PROC_GUIDL.html).

The number of executable statements is a simple measure of the complexity of a procedure. All statements that are not declarations and do not define processing blocks can be regarded as executable statements. This is very similar to statements at which program execution can be stopped in the debugger. Procedure-concluding statements, such as `ENDMETHOD`, at which you can stop in the debugger are exceptions. However, these are not regarded as executable statements.

The recommendation not to write procedures that are too large should not lead to the other extreme (too many procedures that are very small). Procedures should be of a reasonable size that is consistent with the ABAP programming language ([modularize instead of atomize](ABENMODULARIZATION_GUIDL.html)).

Strict linear code (for example, programmatic filling of a table with single values) cannot be subdivided into multiple procedures. In these cases, a restriction on the number of statements does not make sense.

See the [KISS Principle](ABENKISS_PRINCIPLE_GUIDL.html) figure.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abencomplexity\_gdl.html