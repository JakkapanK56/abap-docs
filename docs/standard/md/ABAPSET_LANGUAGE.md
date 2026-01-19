---
title: "ABAPSET_LANGUAGE"
description: |
  ABAPSET_LANGUAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_LANGUAGE.htm"
abapFile: "ABAPSET_LANGUAGE.html"
keywords: ["select", "do", "if", "case", "data", "ABAPSET", "LANGUAGE"]
---

[Short Reference](ABAPSET_LANGUAGE_SHORTREF.html)

`SET LANGUAGE lang.`

This statement loads the [list headers](ABENLIST_HEADER_GLOSRY.html) and [text symbols](ABENTEXT_SYMBOL_GLOSRY.html) of the [text pool](ABENTEXT_POOL_GLOSRY.html) of the language specified in `lang`. `lang` must be a character-like data object that contains a language key with the length 1. The possible language keys are contained in the `SPRAS` column of the database table `T002`. The loaded [text elements](ABENTEXT_ELEMENT_GLOSRY.html) apply only to the current program and not to the programs called within it. If `lang` contains a space, the behavior is undefined.

If there is no text pool for the specified language, the text pool of the [secondary language](ABENSECONDARY_LANGUAGE_GLOSRY.html) of AS ABAP is loaded. If a secondary language is not set, no new text pool is loaded and `sy-subrc` is set to 4. In this case, the program continues to use the text elements of the previous text pool.

If list headers and text symbols are missing in a text pool loaded using `SET LANGUAGE` but existed in the previously loaded text pool, these are initialized.

Display of the text symbol `text-010` in different languages. Output is produced for all languages for which the text pool exists in the specified language or in the secondary language.

-   When calling a program, the system loads the text pool in the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) by default. If this text pool does not exist, the system loads the text pool in the secondary language. If this text pool also does not exist, all text elements remain initialized.
-   The `SET LANGUAGE` statement does not load the [selection texts](ABENSELECTION_TEXT_GLOSRY.html) of the language specified. If this is necessary, the statement [`READ TEXTPOOL`](ABAPREAD_TEXTPOOL.html) can be used. The selection texts read in can then be displayed on the selection screen using the function modules `SELECTION_TEXTS_MODIFY` and `SELECTION_TEXTS_MODIFY_DTEL`.
-   The statement `SET LANGUAGE` must not be confused with the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html) for setting the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). In particular, there is no corresponding `GET LANGUAGE` statement.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA langu LIKE sy-langu. \\n\\ \\nSELECT spras FROM t002 \\n INTO @langu. \\n SET LANGUAGE langu. \\n IF sy-subrc = 0. \\n out->write( |\\{ langu \\} \\{ text-010 \\}| ). \\n ENDIF. \\nENDSELECT. \\n\\ \\nout->display( ). `sy-subrc` **Meaning** 0 The text pool of the specified language or secondary language was loaded. 4 Neither the text pool of the specified language nor the secondary language could be loaded. abenabap.html abenabap\_reference.html abenabap\_texts.html abentext\_pool.html