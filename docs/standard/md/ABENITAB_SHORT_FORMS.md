---
title: "ABENITAB_SHORT_FORMS"
description: |
  ABENITAB_SHORT_FORMS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_SHORT_FORMS.htm"
abapFile: "ABENITAB_SHORT_FORMS.html"
keywords: ["insert", "delete", "loop", "if", "class", "data", "internal-table", "ABENITAB", "SHORT", "FORMS"]
---

`[READ TABLE](ABAPREAD_TABLE.html) itab [table_key](ABAPREAD_TABLE_KEY.html)|[free_key](ABAPREAD_TABLE_FREE.html)|[index](ABAPREAD_TABLE_INDEX.html).`\\
\\
`[LOOP AT](ABAPLOOP_AT_ITAB.html) itab [[cond](ABAPLOOP_AT_ITAB_COND.html)].`\\
\\
`[INSERT](ABAPINSERT_ITAB.html)\ [itab_position](ABAPINSERT_ITAB_POSITION.html)\ [[result](ABAPINSERT_ITAB_RESULT.html)].`\\
\\
`[COLLECT](ABAPCOLLECT.html) itab [[result](ABAPCOLLECT_ITAB_RESULT.html)].`\\
\\
`[APPEND](ABAPAPPEND.html) TO itab [SORTED BY comp]\ [[result](ABAPAPPEND_RESULT.html)].`\\
\\
`[MODIFY](ABAPMODIFY_ITAB.html)\ [table_key](ABAPMODIFY_ITAB_TABLE_KEY.html)|[index](ABAPMODIFY_ITAB_INDEX.html)\ [TRANSPORTING comp1 comp2 ...][[result](ABAPMODIFY_ITAB_RESULT.html)]`.
`[MODIFY](ABAPMODIFY_ITAB.html) itab TRANSPORTING [comp1](ABENITAB_COMPONENTS.html)\ [comp2](ABENITAB_COMPONENTS.html) ... WHERE [log_exp](ABENLOGEXP.html)|(cond_syntax).`\\
\\
`[DELETE](ABAPDELETE_ITAB.html)\ [TABLE](ABAPDELETE_ITAB_LINE.html) itab.`

These short forms of processing statements for internal tables, which are forbidden in classes, can only be used for obsolete standard tables with [header line](ABENHEADER_LINE_GLOSRY.html). `INTO itab`, `itab INTO`, `itab TO`, and `FROM itab` are added to them implicitly, with `itab` indicating the header line. Instead, an explicit work area `wa` must be specified in explicit additions `INTO wa`, `wa INTO`, `wa TO`, and `FROM wa`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenitab\_obsolete.html