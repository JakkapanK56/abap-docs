---
title: "ABENDOBJ_GENERAL"
description: |
  ABENDOBJ_GENERAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDOBJ_GENERAL.htm"
abapFile: "ABENDOBJ_GENERAL.html"
keywords: ["select", "loop", "do", "if", "case", "class", "data", "types", "internal-table", "ABENDOBJ", "GENERAL"]
---

There is a distinction between:

In addition to data objects declared in programs, there is a set of [built-in data objects](ABENBUILT_IN_OBJECTS.html) that can always be accessed in ABAP programs. Furthermore, some statements create data objects implicitly that are then available for special purposes. Examples are [`sum( )`](ABAPSUM_EXTRACT.html), [`cnt( )`](ABAPCNT.html) in group level processing for [extracts](ABENEXTRACT_GLOSRY.html) and [`title`](ABAPSELECTION-SCREEN_NORMAL.html) when [selection screens](ABENSELECTION_SCREEN_GLOSRY.html) are created.

In the following example, `dref` is a named data object whose content points to an anonymous data object after the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) is used. `555` is a numeric literal.

Every data object has a specific data type, and every data object occupies memory for the data. The data type of a data object is defined either with reference to a [standalone data type](ABENSTAND-ALONE_DATA_TYPE_GLOSRY.html) or as a [bound data type](ABENBOUND_DATA_TYPE_GLOSRY.html) when the data object is created.

The data type of a data object is always defined uniquely and cannot be changed at runtime of a program. In the case of anonymous data objects, this data type determines the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of the associated reference variables.

In the following example, `c_20` is a standalone data type used to declare the data object `text1`. The data object `text2`, on the other hand, has a bound data type.

Variable data objects are distinguished from constant data objects in how they can change. [Variables](ABENVARIABLE_GLOSRY.html) can change their value at runtime. [Constants](ABENCONSTANT_GLOSRY.html) always keep their initial value.

[Literals](ABENABAP_LITERAL_GLOSRY.html) and [text symbols](ABENTEXT_SYMBOL_GLOSRY.html) are also constant. [Input parameters](ABENINPUT_PARAMETER_GLOSRY.html) in [procedures](ABENPROCEDURE_GLOSRY.html) usually cannot be changed if this would cause the assigned [actual parameter](ABENACTUAL_PARAMETER_GLOSRY.html) to be changed.

[Immutable variables](ABENIMMUTABLE_VARIABLE_GLOSRY.html) are a special kind of variables. A value can be assigned to an immutable variable at exactly one [write position](ABENWRITE_POSITION_GLOSRY.html) of a [context](ABENCONTEXT_GLOSRY.html). Immutable variables are declared inline with the declaration operator [`FINAL(var)`](ABENFINAL_INLINE.html). Although one and the same declaration can appear only one time in a context, it can be processed multiple times - for example in a loop - and different values can be assigned then.

Immutable variables can improve the robustness of programs whenever a variable is filled at a write position only once and after that only read accesses occur.

In the following example, `true` and `false` are constants that can be assigned to the variable `flag`.

Static data objects, for which all technical properties must be defined when declared, are distinguished from dynamic data objects, whose memory requirement or size is not defined until runtime. [Strings](ABENSTRING_GLOSRY.html) and [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) are dynamic data objects.

The length of a string is 0 after declaration and changes at runtime depending on the content assigned to it. Internal tables do not contain any lines after their declaration. There can be any number of lines and the number is defined dynamically at runtime when the internal table is filled.

Structures that contain dynamic components are also dynamic data objects.

See also [Maximum Size of Dynamic Data Objects](ABENMEMORY_CONSUMPTION_2.html).

In the following example, `text_field` is a static data object and `text_string` is a dynamic data object. When `abcde` is assigned to `text_field`, it is truncated from the tenth character. `text_string` is given all characters and has the same length as `sy-abcde` after the assignment.

All static data objects except reference variables are flat. Their content corresponds to the actual work data. Dynamic data objects and reference variables are deep, and they contain references that refer to the actual content. The handling of references is implicit for dynamic data objects (strings and internal tables), and explicit for reference variables.

Structures that do not contain any deep components are flat structures. Structures that contain at least one deep component are deep structures.

See also [Memory Management of Deep Objects](ABENMEMORY_CONSUMPTION.html).

In the following example, `struct1` is a flat structure and `struct2` is a deep structure. In the flat structure, character-like components are stored consecutively in the memory and [substring access](ABENOFFSET_LENGTH.html) is possible. In the deep structure, the components contain pointers to the actual data and substring access is not possible.

-   [Named data objects](ABENNAMED_DATA_OBJECT_GLOSRY.html) that are declared statically using a data-defining statement and are addressed using a name. The typical data-defining statement is [`DATA`](ABAPDATA.html). Named objects are created at the start of the lifetime of a context (a program, class, object, or procedure) by the ABAP runtime framework and live for as long as their context exists.
-   [Anonymous data objects](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) that are created in the [heap](ABENHEAP_GLOSRY.html) by the statement [`CREATE DATA`](ABAPCREATE_DATA.html) or the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) and are addressed using [data reference variables](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html). Anonymous data objects exist in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the program in which they were created and are subject to [garbage collection](ABENGARBAGE_COLLECTOR_GLOSRY.html).
-   [Literals](ABENABAP_LITERAL_GLOSRY.html) that are defined in the source code of a program and are fully defined by their value.

DATA dref TYPE REF TO i. \\ndref = NEW #( 555 ). TYPES c\_20 TYPE c LENGTH 20. \\nDATA: text1 TYPE c\_20, \\n text2 TYPE c LENGTH 20. TYPES bool TYPE c LENGTH 1. \\n\\ \\nCONSTANTS: true TYPE bool VALUE 'X', \\n false TYPE bool VALUE ' '. \\n\\ \\nDATA flag TYPE bool. \\n\\ \\nIF ... \\n flag = true. \\nELSE. \\n flag = false. \\nENDIF. DATA: text\_field TYPE c LENGTH 10, \\n text\_string TYPE string. \\n\\ \\nFINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\ntext\_field = abcde. \\ntext\_string = abcde. DATA: \\n BEGIN OF struct1, \\n col1 TYPE c LENGTH 5 VALUE '12345', \\n col2 TYPE c LENGTH 5 VALUE 'abcde', \\n END OF struct1, \\n BEGIN OF struct2, \\n col1 TYPE string VALUE \`12345\`, \\n col2 TYPE string VALUE \`abcde\`, \\n END OF struct2. \\n\\ \\nFINAL(section1) = struct1+3(4). DATA(section2) = struct2+3(4). "Syntax error abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html