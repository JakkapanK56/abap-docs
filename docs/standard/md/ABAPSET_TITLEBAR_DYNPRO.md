---
title: "ABAPSET_TITLEBAR_DYNPRO"
description: |
  ABAPSET_TITLEBAR_DYNPRO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_TITLEBAR_DYNPRO.htm"
abapFile: "ABAPSET_TITLEBAR_DYNPRO.html"
keywords: ["select", "do", "if", "case", "data", "ABAPSET", "TITLEBAR", "DYNPRO"]
---

[Short Reference](ABAPSET_TITLEBAR_SHORTREF.html)

 `SET TITLEBAR title [OF PROGRAM prog]\                     [WITH text1 ... text9].`

[1. `... OF PROGRAM prog`](#ABAP_ADDITION_1@3@)

[2. `... WITH text1 ... text9`](#ABAP_ADDITION_2@3@)

When [dynpros](ABENDYNPRO_GLOSRY.html) are processed, this statement specifies the GUI title specified in `title` for the subsequent [screens](ABENSCREEN_GLOSRY.html). The title is displayed in the title bar from the next sending of a screen layout until the end of the program or until the next `SET TITLEBAR` statement. The name of the current GUI title is displayed in the system field `sy-title`.

`title` expects a character-like data object that contains the name of a GUI title of the [main program](ABENMAIN_PROGRAM_GLOSRY.html) of the current [program group](ABENPROGRAM_GROUP_GLOSRY.html) or of the program specified in `prog` in uppercase letters. If the title does not exist, `sy-subrc` is set to 4 and the word *SAP* is displayed in the title bar.

By default, a GUI title defined in the current main program is used. When using the addition `OF PROGRAM`, a GUI title of the program specified in `prog` can be set. `prog` expects a character-like data object that contains the name of an ABAP program in uppercase letters.

When using the addition `WITH`, the placeholders of the GUI title can be replaced by the formatted content of data objects `text1` to `text9`. Data objects `text1` to `text9` can have the same data type as a source field of the statement [`WRITE TO`](ABAPWRITE_TO.html) and are formatted according to the [predefined formats](ABENWRITE_FORMATS.html). The placeholders of the GUI title can be defined in the form *&* or *&i*, where i can be a number between 1 and 9. The replacement process works as follows:

If no data object is specified for a placeholder, it is represented by a blank character. Two consecutive *&* characters *&&* in the title bar are not replaced with the content of `text1` to `text9`, but with the character *&*.

If a GUI title is to be translated into other languages, the numbered placeholder *&i* should be used, since the structure of the sentence can change.

In the following example, the GUI title `TITLE_0100` of the program specified in `prog` is set in a [PBO](ABENPBO_GLOSRY.html) module, where the placeholders *&1* and *&2* of the title are replaced with the formatted content `p1` and `p2`.

-   The GUI title of the dynpro must be set at the latest at the [PBO](ABENPBO_GLOSRY.html) event. If no GUI title is set for a dynpro, the word *SAP* is displayed in the title bar.
-   The title bar can contain a maximum of 70 characters. A title that exceeds this limit after the replacement of placeholders is truncated to the right.
-   In [standard selection screens](ABENSTANDARD_SELSCREEN_GLOSRY.html), the statement `SET PF-STATUS` can be used at [PBO](ABENPBO_GLOSRY.html) time. In selection screens defined using [`SELECTION-SCREEN BEGIN OF SCREEN`](ABAPSELECTION-SCREEN_DEFINITION.html), the addition `TITLE` of this statement should be used instead.
-   The statement `SET TITLEBAR` contains a variant for the GUI status of [lists](ABAPSET_TITLEBAR_LIST.html).

-   The numbered placeholders *&i* are replaced with the formatted content of the data objects `text1` to `text9`, whose names contain the same digit i in the second place.
-   The non-numbered placeholders *&* are replaced with the content of the remaining data objects `text1` to `text9` according to their order.

DATA: title TYPE string, \\n prog TYPE string, \\n p1 TYPE c LENGTH 10, \\n p2 TYPE c LENGTH 10. \\n... \\nMODULE status\_0100 OUTPUT. \\n ... \\n title = 'TITLE\_0100'. \\n prog = '...'. \\n p1 = '...'. \\n p2 = '...'. \\n SET TITLEBAR title OF PROGRAM prog WITH p1 p2. \\n ... \\nENDMODULE. `**sy-subrc**` **Meaning** 0 GUI title has been set. 4 GUI title was not found. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html