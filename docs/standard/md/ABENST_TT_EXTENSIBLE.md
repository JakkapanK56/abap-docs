---
title: "Passing an input stream"
description: |
  does not produce the deserialization `A=1` since the unexpected element `x` sets the condition for `a` to false. Both `x` and `a` are skipped as extension elements and only the mandatory element `b` is deserialized as `B=2`. The problem can be solved by using `tt:group`(ABENST_TT_GROUP.html), al
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_EXTENSIBLE.htm"
abapFile: "ABENST_TT_EXTENSIBLE.html"
keywords: ["do", "if", "case", "class", "data", "ABENST", "EXTENSIBLE"]
---

`... tt:extensible="on"|"deep-static"|"deep-dynamic"|"off"|"deep-off"  ...`

In deserializations, XML elements in the input stream that are not specified in the ST program normally produce an error. If the processed XML format is to be extensible, elements that are not specified explicitly can be skipped without further processing through specification of the optional attribute `tt:extensible`. The attribute can have the following values:

The values *deep-static* and *deep-dynamic* have different areas of validity:

The deep extensibility that is configured using `deep-static` and `deep-dynamic` also takes effect in case distinctions with [`tt:switch`](ABENST_TT_SWITCH.html) and groupings with [`tt:group`](ABENST_TT_GROUP.html) by skipping unexpected elements that are not covered by a case.

The transformation `DEMO_ST_EXTENSIBLE_1` shows that extensibility together with optional elements (such as elements that are only deserialized when a condition occurs) causes problems, since extensibility generally means that such optional elements are not found.

Passing an input stream

does not produce the deserialization `A=1` since the unexpected element `x` sets the condition for `a` to false. Both `x` and `a` are skipped as *extension elements* and only the mandatory element `b` is deserialized as `B=2`. The problem can be solved by using [`tt:group`](ABENST_TT_GROUP.html), although this also resolves the order of `a` and `b`:

The class `CL_DEMO_ST_EXTENSIBLE` calls both transformations with the XML data shown above and displays the results.

-   The value `on` states that the current element may have direct subelements that are not explicitly specified. This is the standard setting.
-   Values `deep-static` and `deep-dynamic` state that the current element and its subelements can be enhanced. The value `off` deactivates extensibility for the current element but not its subelements. In other words, direct subelements cannot be added to the element but its (specified) subelements can be.
-   The value *deep-off* deactivates extensibility for the current element and its subelements. These settings can be overwritten locally in individual subelements.

-   *deep-static* only has an effect within the part of the program in which it is set.
-   *deep-dynamic* is effective across template calls using [`tt:apply`](ABENST_TT_APPLY.html) and [`tt:call`](ABENST_TT_CALL.html).

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n **\\ \\n** **\\ \\n** **\\ \\n** **1**2** \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n **\\ \\n** **\\ \\n** **\\ \\n** **\\ \\n** **\\ \\n** **abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_literals.html abenst\_xml\_literals.html****