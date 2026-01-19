---
title: "ABENABAP_PROGRAM_LAYOUT"
description: |
  ABENABAP_PROGRAM_LAYOUT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_PROGRAM_LAYOUT.htm"
abapFile: "ABENABAP_PROGRAM_LAYOUT.html"
keywords: ["do", "while", "method", "class", "data", "types", "ABENABAP", "PROGRAM", "LAYOUT"]
---

-   Each ABAP program starts with a [program-initiating statement](ABENABAP_PROGRAM_STATEMENT.html) that depends on the [program type](ABENPROGRAM_TYPE_OVIEW.html).
-   The functions of an ABAP program are implemented in processing blocks. Processing blocks are defined using [modularization statements](ABENABAP_LANGUAGE_MODULARIZATION.html). [Declarative statements](ABENABAP_DECLARATIONS.html) in processing blocks of the type [procedure](ABENABAP_LANGUAGE_PROCEDURES.html) can be used to create local data types and data objects. All other processing blocks do not have a local [data area](ABENDATA_AREA_GLOSRY.html) and any declarative statements apply to the program globally. The most important processing blocks in ABAP Objects are methods. They can only be implemented in the implementation part of their class. The order of the processing blocks or implementation parts is irrelevant for program execution, but should support the readability of a program.
-   Each ABAP program provides [built-in data types, data objects, and built-in functions](ABENBUILT_IN.html).
-   Following the program-initiating statement, every program contains a global declaration part, in which [definitions and declarations](ABENABAP_DECLARATIONS.html) are implemented that are valid and visible throughout the entire program. This includes the declaration of data types and data objects, as well as the definition of interfaces or the declaration section of classes in ABAP Objects. The definitions of interfaces and classes contain the declarations of their components. While the order of the individual definitions and declarations is not fixed, it should respect the fact that an ABAP statement can only refer to existing definitions and declarations. For example, a reference variable can only refer to a previously defined class, which in turn can only implement a previously defined interface. Once a [procedure](ABENPROCEDURE_GLOSRY.html) is initiated, data types and data objects that are visible within that procedure can be declared. In the broadest sense, the declaration of data types also includes the [typing](ABENTYPING.html) of objects that have an undetermined data type when the program is created.
-   All other statements of an ABAP program are implementation statements, which are part of a [processing block](ABENPROCESSING_BLOCK_GLOSRY.html). The implementation statements are used to implement the functions of a processing block. The functionality of all processing blocks is largely implemented using the same statements.
-   Since ABAP is a language that has grown over time, it contains several [obsolete additions](ABENABAP_OBSOLETE.html) of statements that have been replaced by better language constructs, but which cannot be removed for reasons of downward compatibility. In ABAP Objects, that is, when implementing methods, almost all of the obsolete language elements usually fail syntax checks. Although these language elements should no longer be used in new programs, they can still be found in older programs.

abenabap.html abenabap\_reference.html