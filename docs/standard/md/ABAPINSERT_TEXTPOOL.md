---
title: "ABAPINSERT_TEXTPOOL"
description: |
  ABAPINSERT_TEXTPOOL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_TEXTPOOL.htm"
abapFile: "ABAPINSERT_TEXTPOOL.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "data", "internal-table", "ABAPINSERT", "TEXTPOOL"]
---

[Short Reference](ABAPINSERT_TEXTPOOL_SHORTREF.html)

`INSERT TEXTPOOL prog FROM itab LANGUAGE lang.`

This statement places the content of table `itab` into the [repository](ABENREPOSITORY_GLOSRY.html) as a [text pool](ABENTEXT_POOL_GLOSRY.html) of the language specified in `lang` for the ABAP program specified in `prog`. If a text pool for the specified language already exists, all its text elements are overwritten. Otherwise, a new text pool is created for this language. By default, the text pool is saved in an active state.

`prog` expects a [flat](ABENFLAT_GLOSRY.html) character-like data object, which contains the name of the program of the text elements to be read. The name is not case-sensitive.

`lang` expects a character-like flat data object that contains a language key with a maximum length of one character, and this value must be contained in the column `SPRAS` of the database table `T002`. If an invalid language is specified in `lang`, no text pool is created or overwritten. If `lang` contains a space, the behavior is undefined.

The internal table `itab` can be in any table category and its line type must correspond to the DDIC structure `TEXTPOOL`. If a nonexistent program is specified in `prog`, no text pool is created or overwritten.

In the internal table `itab`, the column `ENTRY` can contain the texts of the text symbols, the selection texts, the [list headers](ABENLIST_HEADER_GLOSRY.html), and the title for the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html). Their length can be specified in the column `LENGTH`. The individual text elements are identified using the entries in the columns `ID` and `KEY`, whose valid values are shown in the table for [`READ TEXTPOOL`](ABAPREAD_TEXTPOOL.html).

If the columns `ID` or `KEY` of the internal table contain invalid values or if duplicate entries exist, an inconsistent text pool is created. If the internal table is empty, all text elements of an existing text pool are deleted or a text pool without text elements is created. If the length specified in `LENGTH` is shorter than the text length in `ENTRY`, it is automatically set to the text length in the text pool.

The statement `INSERT TEXTPOOL` always sets `sy-subrc` to the value 0.

Attempt at a translation tool for text elements. The text pools of a source and a target language are imported into internal tables and, for each text element of the source language, a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) is displayed as a translation template. After the translation has been completed, the text pool of the target language is overwritten with the correspondingly changed internal table.

-   The specification of the text length in `LENGTH` defines the maximum length of the text element that is available in the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) when translating the text pool into other languages and should be set sufficiently large.
-   In the case of selection texts, there must be eight blanks before the actual text in `ENTRY`. If a selection text from the dictionary is to be used, the first character of `ENTRY` must be a *D*.
-   The `INSERT TEXTPOOL` statement should be used with caution, because it completely overwrites existing text pools.

PARAMETERS: program TYPE sy-repid, \\n langu1 TYPE spras DEFAULT sy-langu, \\n langu2 TYPE spras. \\n\\ \\nSELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW. \\nSELECTION-SCREEN COMMENT /1(83) source. \\nSELECTION-SCREEN BEGIN OF LINE. \\nPARAMETERS target TYPE textpool-entry. \\nSELECTION-SCREEN END OF LINE. \\nSELECTION-SCREEN END OF SCREEN 500. \\n\\ \\nDATA: text1 TYPE SORTED TABLE OF textpool \\n WITH UNIQUE KEY id KEY, \\n text2 TYPE SORTED TABLE OF textpool \\n WITH UNIQUE KEY id KEY, \\n wa1 TYPE textpool, \\n wa2 TYPE textpool. \\n\\ \\nREAD TEXTPOOL program: INTO text1 LANGUAGE langu1, \\n INTO text2 LANGUAGE langu2. \\n\\ \\nLOOP AT text1 INTO wa1. \\n CLEAR wa2. \\n wa2 = text2\[ KEY primary\_key id = wa1-id key = wa1-key \]. \\n source = wa1-entry. \\n target = wa2-entry. \\n CALL SELECTION-SCREEN 500 STARTING AT 1 1. \\n IF sy-subrc = 0. \\n IF target IS NOT INITIAL. \\n wa2-id = wa1-id. \\n wa2-key = wa1-key. \\n wa2-entry = target. \\n wa2-length = wa1-length. \\n DELETE TABLE text2 \\n WITH TABLE KEY id = wa1-id \\n key = wa1-key. \\n INSERT wa2 INTO TABLE text2. \\n ENDIF. \\n ELSE. \\n EXIT. \\n ENDIF. \\nENDLOOP. \\n\\ \\nINSERT TEXTPOOL program FROM text2 LANGUAGE langu2. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abentextpool.html