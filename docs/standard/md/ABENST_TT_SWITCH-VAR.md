---
title: "ABENST_TT_SWITCH-VAR"
description: |
  ABENST_TT_SWITCH-VAR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_SWITCH-VAR.htm"
abapFile: "ABENST_TT_SWITCH-VAR.html"
keywords: ["do", "if", "case", "data", "ABENST", "SWITCH", "VAR"]
---

`<tt:switch-var>\    <tt:[s-|d-]cond-var ...    <tt:[s-|d-]cond-var ...    ...  </tt:switch-var>`

The statement `tt:switch-var` allows case distinctions in which, unlike `tt:switch`, only cases for data content can be specified, not for the data flow. In `tt:switch`, a list of cases can be shown where the syntax of each case is formulated by a condition for variables, namely a [`tt:cond-var`](ABENST_TT_COND-VAR.html) subelement. Other direct subelements are not possible in `tt:switch-var`.

A maximum of one case can be specified that does not contain a [`check`](ABENST_CHECK.html) condition.

**Serialization and Deserialization**

Serialization and deserialization follow these rules:

Unlike the general case distinction with [`tt:switch`](ABENST_TT_SWITCH.html), the content of the cases is irrelevant.

The following transformation `DEMO_ST_SWITCH_VAR` expands the example from [Conditions for Variables](ABENST_TT_COND-VAR.html).

Depending on the value of the ABAP data object bound to `ROOT`, the serialization creates either of the following:

The position of the element `tt:cond-var` without explicit condition within `tt:switch-var` is irrelevant. However, the order of the elements `tt:cond-var` with explicit conditions is relevant.

-   `<X val="small">...</X>` or
-   `<X val="medium">...</X>` or
-   `<X val="big">...</X>`.

1.  The first case `tt:cond-var`, whose explicitly specified condition `check` is met, is processed and the element `tt:switch-var` is exited.
2.  If no condition is met for any case with explicitly specified conditions, the case without condition is executed by default (if it exists) and the element `tt:switch-var` is exited.
3.  If no case without condition exists, the element `tt:switch-var` is exited without any case being processed.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ...\\ \\n \\ \\n \\ \\n ...\\ \\n \\ \\n \\ \\n ...\\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html abenst\_cond\_switch\_var.html