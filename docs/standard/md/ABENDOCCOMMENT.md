---
title: "ABENDOCCOMMENT"
description: |
  ABENDOCCOMMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDOCCOMMENT.htm"
abapFile: "ABENDOCCOMMENT.html"
keywords: ["select", "delete", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENDOCCOMMENT"]
---

`... "!...`

A comment for ABAP Doc is introduced by the string `"!`. This is a special form of a regular [line end comment](ABENCOMMENT.html) that is introduced by `"`. ABAP Doc allows [declarations](ABENDECLARATION_GLOSRY.html) in ABAP programs to be documented, based on special ABAP Doc comments. In tools of an [ABAP development environment](ABENABAP_DEV_ENVIR_GLOSRY.html), such as [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html), that support [ABAP Doc](ABENADT_GLOSRY.html), the content of ABAP Doc comments is evaluated, converted to HTML, and then displayed appropriately.

The following rules must be followed to ensure that an ABAP Doc comment is evaluated correctly:

A violation of this rule produces a syntax check warning.

Basic use of ABAP Doc comments as single lines, blocks and chained statements.

The [parameter interface](ABENPARAMETER_INTERFACE_GLOSRY.html) of [procedures](ABENPROCEDURE_GLOSRY.html) and of [events](ABENEVENT_GLOSRY.html) in classes can be documented in the corresponding ABAP Doc commentary with a special syntax:

The specification of `@parameter`, `@raising`, and `@exception` must be placed directly after `"!` and thus introduce a new line. The name (`name`) of an existing parameter or an exception must be specified after `@parameter`, `@raising`, `@exception`. This must be followed by the corresponding documentation, separated by `|`. This documentation is closed by the next `@parameter`, `@raising`, `@exception` or by the end of the ABAP Doc comment. No further documentation can be placed behind an interface documentation as another interface documentation. Each interface parameter or every exception can only be specified once.

The arrangement of the parameter interface documentation of procedures does not depend on the order of the corresponding declarations. For reasons of readability, however, the order of the parameters and exceptions in the ABAP Doc comment should be the same as the order of the declarations.

Use of ABAP Doc comments for the parameter interface of a method.

The following tags can be used within the documentation texts of ABAP Doc comments, to format the output of the documentation in a suitable development environment. These tags are a subset of the HTML tags.

An open tag must be closed before a new section of the ABAP Doc comment starts. A new section is introduced by `@parameter`, `@raising` or `@exception`.

The following attributes are possible:

Use of formatting in an ABAP Doc comment for a class. The [ABAP development tools for Eclipse](ABENADT_GLOSRY.html) display the documentation according to the formatting.

Parts of ABAP Doc comments can be marked as short texts and the short texts of classes and function modules and their components can be synchronized with ABAP Doc comments. To mark a part of an ABAP Doc comment as a short text, it can be tagged as follows:

<p class="shorttext">...</p>

A paragraph tagged like this is displayed as a header when displaying the documentation in [ADT](ABENADT_GLOSRY.html), instead of the short text shown in ABAP Workbench.

To synchronize the ABAP Doc short texts and the short texts stored as system documentation, the tag can be specified as follows (this is optional):

<p class="shorttext synchronized">...</p>

In this case, the length of the short text in ABAP Doc is restricted to the length of the corresponding short text of the system documentation and is synchronized with the associated short text in the [original language](ABENORIGINAL_LANGU_GUIDL.html) of the class or function module as follows:

An ABAP Doc short text is part of the source code and is not connected to the translation. Since it replaces the translatable short text of the repository object in its original language connected to the translation during synchronization, it must also be specified in the original language. This is a deviation from the rule that ABAP Doc comments must always be in English. The original language can be marked in the source code by being specified as follows (this is optional):

<p class="shorttext" lang="...">...</p>

The attribute `lang` uses the HTML standard. It must be used to specify the original language of the repository object as a two-character ISO code, otherwise, a syntax check warning occurs. This attribute makes it clear in which language the short text should be specified in the source code. It is also intended for future enhancements regarding the translatability of short texts.

See the class `CL_DEMO_ABAP_DOC` in a source code editor. It contains ABAP Doc comments for the class itself, a type, a method, and its parameters, and an attribute. The ABAP Doc comments contain short texts that are synchronized with the short texts in the system documentation in the original language English. The class can be copied to a personal temporary class to test the synchronization.

In an ABAP Doc comment, the following syntax can be used to refer to the documentation of other repository objects:

`... \{@link [[[kind:]name.]...][kind:]name\} ...`

In curly brackets after `@link`, a path specification for a repository object is made, which refers to its documentation. When the documentation is displayed in [ADT](ABENADT_GLOSRY.html), a link is created at this position that displays the documentation of the repository object if it is available, when it is selected.

Documentation of a local class `html` of a program using ABAP Doc comments that contain references to the documentation of a global class and to the ABAP Doc documentation of the current program.

-   A special ABAP Doc comment [`"! @testing ...`](ABENTEST_RELATIONS.html) can be used to define a [test relation](ABENTEST_RELATION_GLOSRY.html) between a [test class](ABENTEST_CLASS_GLOSRY.html) or a [test method](ABENTEST_METHOD_GLOSRY.html) and another repository object.
-   ABAP Doc comments are not evaluated by the tools of the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) in SAP GUI.

-   An ABAP Doc comment is one of the following:

-   A single [comment line](ABENCOMMENT_LINE_GLOSRY.html) that only contains the comment
-   A multiline block of consecutive comment lines. The content of a block is summarized into a single ABAP Doc comment.

-   An ABAP Doc comment (a line or a line block) must be linked as follows to one [declaration statement](ABENDECLARATION_STATEMENT_GLOSRY.html) only:

-   If the declaration statement does not form a [chained statement](ABENCHAINED_STATEMENT_GLOSRY.html), an ABAP Doc comment can be located directly in front of the declaration statement and cannot be separated by empty lines.
-   If the declaration statement forms a [chained statement](ABENCHAINED_STATEMENT_GLOSRY.html), the colon must be placed after the keyword. An ABAP Doc comment can be placed in front of the identifier of each declared entity.

-   ABAP Doc comments are not allowed at any other positions.
-   A single-line ABAP Doc comment cannot be empty. Lines without content are allowed as a mean of formatting in blocks.
-   An ABAP Doc comment can contain special tokens and tags for documenting the parameter interface of procedures, or for formatting purposes.
-   The special characters *"*, *'*, *<*, *\>*, *@*, *\\{*, *|*, and *\\}* can, if necessary, be escaped using *&quot;*, *&apos;*, *&lt;*, *&gt;*, *&#64;*, *&#123;*, *&#124;*, and *&#125;*.

-   In the `<ol>` tag, the attributes `reversed`, `start`, and `type` can be specified with their usual HTML meaning.
-   In the `<p>` tag, the attributes `class` and `lang` can be specified. For more information about the meaning of these attributes, see *Short Texts and Their Synchronization*.

-   When an ABAP Doc short text is created or modified in the source code, the corresponding short text of the repository object is used when the source code is saved. If the short text in ABAP Doc is empty, the short text of the repository object is deleted. If `class="shorttext synchronized"` is used to remove a full paragraph, the short text of the repository object is preserved. This synchronization works independently of the tool used.
-   If a short text of a method or a function module in the system documentation is modified, for which a paragraph with `class="shorttext synchronized"` occurs in ABAP Doc, the short text is replaced accordingly in the source text when saving. When a short text in the system documentation is deleted, an empty paragraph is produced. When a new short text is created in the system documentation for which there is not yet a short text in ABAP Doc, it does not yet lead to the creation of the paragraph in the source code.

-   `name` is used to specify the name of a repository object, for example, a [class](ABENCLASS_GLOSRY.html) or an [interface](ABENOO_INTF_GLOSRY.html), or a component of a repository object, which is not case-sensitive.
-   `kind` is used to specify the type of the repository object or a component of a repository object. `kind` must be specified as shown for the following repository objects:

-   `DATA` for constants, variables, and procedure parameters in the appropriate context
-   `DOMA` for [DDIC domains](ABENDOMAIN_GLOSRY.html)
-   `EVNT` for [events](ABENEVENT_GLOSRY.html) in classes
-   `FUNC` for [function modules](ABENFUNCTION_MODULE_GLOSRY.html) in function pools
-   `FORM` for [subroutines](ABENSUBROUTINE_GLOSRY.html) in programs
-   `FUGR` for [function pools](ABENFUNCTION_POOL_GLOSRY.html)
-   `INTF` for [interfaces](ABENOO_INTF_GLOSRY.html) implemented in a class to access its components.
-   `METH` for [methods](ABENMETHOD_GLOSRY.html)
-   `PROG` for [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html)
-   `SEAM` for [test seams](ABENTEST_SEAM_GLOSRY.html)
-   `XSLT` for [XSLT programs](ABENXSLT_PROGRAM_GLOSRY.html) and [Simple Transformations](ABENSIMPLE_TRANSFORMATION_GLOSRY.html)

-   `kind` cannot and must not be specified for global data types and object types (classes and interfaces). These repository objects are solely addressed by their names. This applies specifically to [CDS entities](ABENCDS_ENTITY_GLOSRY.html).
-   When a repository object is addressed, the path specification is usually single-level. When a component of a repository is addressed, for example a method of a class or a local class of a program, the path specification is usually multileveled, whereby each segment is separated by a period (`.`). The segments between the periods can also be empty. This turns the path into a relative path and the next higher context of the current context is addressed.

-   The following guidelines for general comments also specifically apply to ABAP Doc comments.
-   [Comments on programs in English](ABENCOMMENT_LANGU_GUIDL.html)
-   Adhering to this rule is particularly important, because documentation created in an ABAP Doc as part of the source code is not translated into other languages. One exception are synchronized short texts.
-   [Arranging comments correctly](ABENARRANGE_GUIDL.html)
-   This rule affects the horizontal indents because the vertical alignment syntactically fixed before declarations.
-   [Character set in source code](ABENCHARACTER_SET_GUIDL.html)
-   This rule is checked by the syntax check.

"! Basic usage of ABAP Doc \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n "! Constant character string for a single blank. \\n CONSTANTS blank TYPE string VALUE \` \`. \\n "! Method to fill the private structure struct with values \\n "! and append it to internal table itab. \\n METHODS meth. \\n PRIVATE SECTION. \\n DATA: \\n "! Three-component structure \\n BEGIN OF struct, \\n "! Component one \\n comp1 TYPE i, \\n "! Component two \\n comp2 TYPE i, \\n "! Component three \\n comp3 TYPE i, \\n END OF struct, \\n "! Internal table of structure struct \\n itab LIKE TABLE OF struct. \\nENDCLASS. "! Method to check if two sources are identical \\n"! and that returns a corresponding boolean value. \\n"! \\n"! @parameter source1 | First source \\n"! @parameter source2 | Second source \\n"! @parameter ignore\_case | Pass abap\_true to ignore case \\n"! \\n"! @parameter result | Returns abap\_true if sources are identic \\n"! \\n"! @raising cx\_invalid\_source \\n"! | One of the sources is empty \\nMETHODS compare \\n IMPORTING \\n source1 TYPE text \\n source2 TYPE text \\n ignore\_case TYPE abap\_bool DEFAULT abap\_false \\n RETURNING \\n VALUE(result) TYPE abap\_bool \\n RAISING \\n cx\_invalid\_source. "!


# Class demo

\\ \\n"!

This class must **not** be used in production.

\\ \\n"!The class serves the following tasks: \\n"!

-   Demo 1
\\ \\n"!-   Demo 2
\\ \\n"!-   Demo 3

\\ \\n"!
\\ \\nCLASS demo DEFINITION. \\n ... \\nENDCLASS. "! Default html string for method \\{@link .html.METH:show\\} \\n"! of local class \\{@link .html\\}. \\nCONSTANTS \\n default TYPE string VALUE \`Default\`. \\n\\ \\n"!


# Class html

\\ \\n"! Wraps \\{@link cl\_abap\_browser\\}. \\nCLASS html DEFINITION. \\n PUBLIC SECTION. \\n "!


# Method show

\\ \\n "! Calls \\{@link cl\_abap\_browser.METH:show\_html\\} \\n "! of \\{@link cl\_abap\_browser\\} \\n "! and passes parameter \\{@link .METH:show.DATA:html \\}. \\n "! @parameter html | Parameter for \\n "! \\{@link cl\_abap\_browser.METH:show\_html.DATA:html\_string\\}. \\n "! The default value is \\{@link .DATA:default\\}. \\n METHODS show \\n IMPORTING \\n html TYPE string DEFAULT default. \\nENDCLASS. \\n\\ \\nCLASS html IMPLEMENTATION. \\n METHOD show. \\n cl\_abap\_browser=>show\_html( html\_string = html ). \\n ENDMETHOD. \\nENDCLASS. **Documentation for** **Syntax** **Formatting** **Tag** Interface parameters `@parameter name|documentation` Class-based exception `@raising name|documentation` Classic exceptions `@exception name|documentation` Header, level1 `<h1>...</h1>` Header, level2 `<h2>...</h2>` Header, level3 `<h3>...</h3>` Paragraph `<p>...</p>` Italic text `<em>...</em>` Bold text `<strong>...</strong>` Unnumbered list `<ul><li>...</li>...<li>...</li></ul>` Numbered list `<ol><li>...</li>...<li>...</li></ol>` Line break `<br>` abenabap.html abenabap\_reference.html abenabap\_syntax.html abenprogram\_directives.html