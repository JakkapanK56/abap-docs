---
title: "ABENST_XML_LITERALS_SPECIAL"
description: |
  ABENST_XML_LITERALS_SPECIAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_XML_LITERALS_SPECIAL.htm"
abapFile: "ABENST_XML_LITERALS_SPECIAL.html"
keywords: ["do", "if", "case", "data", "ABENST", "XML", "LITERALS", "SPECIAL"]
---

`<element [attr] tt:value-ref="node"                  [tt:lax=...]\                  [tt:map=...]\                  [tt:length|tt:minLength|tt:maxLength="len"] />`

A special form of literal XML attributes combines the [`tt:value statement`](ABENST_TT_VALUE_ELEMENTARY.html) with the [general form](ABENST_XML_LITERALS_GENERAL.html).

This special form is a short form of:

`<element [attr]\ [tt:lax=...]>\ <tt:value ref="node" [map=...]\ [length|minLength|maxLength="len"] />\ </element>`

This makes it easy to formulate the frequent use case of expressing an elementary value as the content of an XML element.

The attribute `tt:extensible` cannot be specified together with `tt:value-ref`.

The following ST program `DEMO_ST_XML_LITERALS1` can be used to serialize an elementary data object:

The result of a serialization is as follows if `abc` is the value of the ABAP data object bound to `ROOT`.

It should be noted that literal text that contains nothing but blank spaces (blanks and line breaks) is irrelevant in ST programs by default. For this reason, the serialization does not produce the following, for example:

If the results of serializations with indents and line breaks are shown in examples, they are usually used for clarification and are not actually part of the result.

The following ST program `DEMO_ST_XML_LITERALS2` can deserialize the result, whereby the literal attribute `my_attr` is ignored:

The following ST program `DEMO_ST_XML_LITERALS3` shows the equivalent short form to the program above:

The following ST program `DEMO_ST_XML_LITERALS4` raises the exception `CX_ST_MATCH_ELEMENT`, because an element *X* is returned instead of element `Y`.

The following ST program `DEMO_ST_XML_LITERALS5` raises the exception `CX_ST_MATCH_ATTRIBUTE` despite identical element names because the expected literal attribute `my_value` does not exist in the source document.

A correct attribute name with an incorrect attribute content raises the exception `CX_ST_MATCH_TEXT`.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abc \\ \\n abc \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_literals.html abenst\_xml\_literals.html