---
title: "ABENST_TT_COND-VAR"
description: |
  ABENST_TT_COND-VAR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_COND-VAR.htm"
abapFile: "ABENST_TT_COND-VAR.html"
keywords: ["if", "data", "ABENST", "COND", "VAR"]
---

`<tt:cond-var check="...">\     ...  </tt:cond-var>`

The statement `tt:cond-var` allows conditional transformations for which, unlike `tt:[s-|d-]cond`, only data content can be specified and not conditions for the data flow. The content of `tt:cond-var` is processed depending on a [`check` condition](ABENST_CHECK.html). `cond` is the same as general conditions, with the exception that [variables](ABENST_TT_VARIABLE.html) and [values](ABENST_ABAP_REPRESENTATION.html) can be specified as operands, but not [data nodes](ABENST_ADDRESSING_NODES.html).

Outside of `tt:switch-var`, a condition [`check`](ABENST_TT_SWITCH-VAR.html) must be specified.

**Serialization and Deserialization**

In serializations and deserializations, the condition is checked and the content of the element `tt:cond-var` is only processed if the condition is met.

Unlike general conditional transformations with [`tt:[s-|d-]cond`](ABENST_TT_COND.html), the content of the XML input stream for `tt:cond-var` is irrelevant.

The following transformation `DEMO_ST_COND_VAR` demonstrates a condition for a parameter:

In `tt:apply`, the value of the data root `ROOT` is passed to the parameter `PARA` of the [subtemplate](ABENST_TT_TEMPLATE_SUB.html)\\ `SUB` and checked there. Depending on whether the ABAP data object bound to `ROOT` is smaller, greater than, or equal to 100, the serialization creates either of the following:

`var(PARA)` could be written in the conditions `check` instead of `PARA`.

-   `<X val="small">...</X>` or
-   `<X val="big">...</X>`.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ...\\ \\n \\ \\n \\ \\n ...\\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html abenst\_cond\_switch\_var.html