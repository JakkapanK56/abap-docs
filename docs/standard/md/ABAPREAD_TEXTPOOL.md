---
title: "ABAPREAD_TEXTPOOL"
description: |
  ABAPREAD_TEXTPOOL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_TEXTPOOL.htm"
abapFile: "ABAPREAD_TEXTPOOL.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "class", "data", "types", "internal-table", "ABAPREAD", "TEXTPOOL"]
---

[Short Reference](ABAPREAD_TEXTPOOL_SHORTREF.html)

`READ TEXTPOOL prog INTO itab LANGUAGE lang.`

This statement reads the text elements of the [text pool](ABENTEXT_POOL_GLOSRY.html) of the language specified in `lang` and the program specified in `prog` from the [repository](ABENREPOSITORY_GLOSRY.html) and places them into the internal table `itab`. The previous content of `itab` is deleted. If the text elements cannot be read, the content of `itab` remains unchanged. The active text elements of the program are read by default.

`prog` expects a [flat](ABENFLAT_GLOSRY.html) character-like data object, which contains the name of the program of the text elements to be read. The name is not case-sensitive. The internal table `itab` can have any table category and its line type must correspond to the DDIC structure `TEXTPOOL`.

`lang` expects a character-like flat data object that contains a language key with a maximum length of one character, and this value must be contained in the column `SPRAS` of the database table `T002`. If `lang` contains a space, the behavior is undefined.

After a successful read, `itab` contains the texts of the text symbols, the selection texts, the [list headers](ABENLIST_HEADER_GLOSRY.html), and the title from the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html) in the `ENTRY` column. Every text element that exists for the specified language occupies one line of the internal table and is identified uniquely by the columns `ID` and `KEY`. The column `LENGTH` contains the length of the text element. The table below shows the possible values of the columns `ID` and `KEY` and their meaning:

See [`INSERT TEXTPOOL`](ABAPINSERT_TEXTPOOL.html)

-   The table of [program types](ABENPROGRAM_TYPE_OVIEW.html) indicates which program types support text pools. `sy-subrc` is always set to 4, for programs without text pools.
-   When handling [global classes](ABENGLOBAL_CLASS_GLOSRY.html) and [function pools](ABENFUNCTION_POOL_GLOSRY.html), it should be noted that the name of the master program must be specified in the repository and not the name of the class or function pool. The composition of these names is documented in the statements [`CLASS-POOL`](ABAPCLASS-POOL.html) and [`FUNCTION-POOL`](ABAPFUNCTION-POOL.html).
-   For selection texts that are not taken from the ABAP Dictionary, the actual text in `ENTRY` is preceded by eight blanks.
-   Selection texts taken from the ABAP Dictionary are not stored in the text pool and cannot be read with `READ TEXTPOOL`. They contain a *D* in the first position of `ENTRY`. The function module `RS_TEXTPOOL_READ` can also be used to read the selection texts stored in the ABAP Dictionary.

`**sy-subrc**` **Meaning** **`ID`** **`KEY`** **`ENTRY`**\\ H 001 through 004 List Header Column Headers I ID of a text symbol Text of the text symbol R - Program title S Name of a parameter or [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html) Selection text T - List Header Title bar 0 At least one text element was read. 4 The program specified in `prog` or the language specified in `lang` does not exist or there is no text pool in the specified language. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abentextpool.html