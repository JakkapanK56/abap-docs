---
title: "ABENST_TT_TEXT"
description: |
  ABENST_TT_TEXT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_TEXT.htm"
abapFile: "ABENST_TT_TEXT.html"
keywords: ["do", "if", "data", "ABENST", "TEXT"]
---

`...>literal<...`

`...><tt:text>literal</tt:text><...`

Here, `literal` stands for literal text. Each piece of content of a template that is not an element (in other words, not positioned between `< >`), is literal text. This includes line breaks and blanks that are combined under the term whitespace.

The first line above shows unmarked literal text. In ST programs, literal text can also be marked using the ST statement `tt:text`, indicated in the second line. The difference between these variants is that an unmarked literal text `literal` is ignored in serializations and deserializations if it contains nothing but blanks. A marked text is never ignored.

**Serializing Literal Text**

If a literal text is respected, all its characters are written to the target XML data. This includes any whitespace. Nothing is transferred if a text is ignored.

**Deserializing Literal Text**

The literal text of the XML source document is compared character by character (including blanks and line breaks) to the ST program and consumed. This means that at every position in the inbound stream at which there is literal text, the same text must appear in the ST program and must also be respected there.

Literal texts with other characters other than whitespaces should be used sparingly; always identified with `tt:text`, and should not span multiple lines because line breaks and indents are potential sources of errors in deserializations. Unflagged texts should only be used to format the ST program with line breaks and blanks (indents). To avoid problems in deserializations of literal texts, they can be skipped using [`tt:skip`](ABENST_TT_SKIP.html).

The following ST program `DEMO_ST_TEXT1` contains four elements, `X1` to `X4`, with literal text.

The result of a serialization is as follows, with the blanks in `X3` being ignored:

This XML data can itself be deserialized again by the above ST program. The ST program `DEMO_ST_TEXT2` below raises the exception `CX_ST_MATCH_ELEMENT`, because no blanks exist in the ST program for the blanks in the inbound stream within `X4`, due to the missing `tt:text` marking.

The ST program `DEMO_ST_TEXT3` below cannot deserialize the XML data either, because it expects line breaks in `X1` and more blanks due to the indent.

The ST program `DEMO_ST_TEXT4` below can deserialize the XML data, where all elements are skipped using [`tt:skip`](ABENST_TT_SKIP.html).

\\ \\n\\ \\n \\ \\n \\ \\n a b c \\ \\n d e f \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n a b c d e f \\ \\n\\ \\n \\ \\n \\ \\n a b c\\ \\n d e f\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n a b c \\n \\ \\n d e f\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_literals.html