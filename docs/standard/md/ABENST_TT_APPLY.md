---
title: "ABENST_TT_APPLY"
description: |
  ABENST_TT_APPLY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_APPLY.htm"
abapFile: "ABENST_TT_APPLY.html"
keywords: ["do", "if", "case", "data", "types", "ABENST", "APPLY"]
---

`<tt:apply name="tmpl" [ref="node"]>\    [<tt:with-root name="root1" [ref="node1"] />\     <tt:with-root name="root2" [ref="node2"] />\     ...]\    [<tt:with-parameter name="para1"                        [ref="node1"|val="val1"|var="var1"] />\     <tt:with-parameter name="para2"                        [ref="node2"|val="val2"|var="var2"] />\     ...]\  </tt:apply>`

A subtemplate `tmpl` (defined with [`tt:template`](ABENST_TT_TEMPLATE_SUB.html)) can be called in any other template using the ST statement `tt:apply`. The subtemplate is processed at this point when the including template is executed.

The following Simple Transformation contains two templates: A main template `TEMP_MAIN` and a subtemplate `TEMP_SUB` without its own data roots. The subtemplate is bound to the main template seven times with `tt:apply`. The current node previously set with `tt:ref` is passed. This ST program `DEMO_ST_APPLY1` can transform a nested structure symmetrically.

The following ABAP program can call the transformation:

The result of the serialization is the following:

After deserialization, `result` has the same content as `struc`.

The Simple Transformation below `DEMO_ST_APPLY2` has the same function as the previous one and can be called with the same result using the specified ABAP program. In contrast to the transformation in the previous example, subtemplate `TEMP_SUB` has its own data root here, `local`, to which another data node `tt.apply` is passed in each include.

The Simple Transformation below `DEMO_ST_APPLY3` also has the same function as the ones before. In this case, subtemplate `TEMP_SUB` has two separate data roots, `local1` and `local2`, to which data nodes are passed in statement `tt:apply`. This example demonstrates local data roots and their addressing. In a real case, subtemplates are used reuse code and make Simple Transformations clearer.

The transformation below `DEMO_ST_APPLY4` shows how parameters are passed to a subtemplate.

The result of the transformation is:

The input parameter `PARA1` is changed in the subtemplate, but the changed value is not returned to the actual parameter `VARI1`.

The output parameter `PARA2` is set to the value of actual parameter `VARI3`, which is passed to the subtemplate, and this value is returned to the actual parameter `VARI2`.

The input/output parameter `PARA3` is set to the value of actual parameter `VARI1`, which is passed to the subtemplate, and this value is returned to the actual parameter `VARI3`.

-   If custom data roots are declared using [`tt:root`](ABENST_TT_TEMPLATE_SUB.html) in the called subtemplate, they can be set with the ST statement `tt:with-root`. The optional attribute `ref` can then not be specified in the statement `tt:apply`. `tt:with-root` sets the data root of the name specified in `name` to the node specified in `ref` or binds the data root to the ABAP data object currently bound to the specified node. If `ref` is not specified, the current node of the calling template is used. Local data roots to which no node is bound remain undefined, that is, they do not refer to an ABAP data object. At the beginning of a subtemplate of this type, the current node is undefined.
-   If no custom data roots are declared using [`tt:root`](ABENST_TT_TEMPLATE_SUB.html) in a subtemplate `tmpl`, the root node of the tree structure of the called subtemplate is set either explicitly with the optional attribute `ref` or implicitly to the current node of the calling template at the call position.
-   If formal parameters are declared using [`tt:parameter`](ABENST_TT_PARAMETER.html) in the called subtemplate, the statement `tt:with-parameter` can be used to associate them with actual parameters. As actual parameters, `ref` can be used to specify data roots, `var` to specify variables, and `val` to specify [values](ABENST_ABAP_REPRESENTATION.html). Depending on the type of formal parameter, the values of the specified actual parameters are either passed in the call or copied when the subtemplate ends (see example below).
-   In this case, pass by parameter can be seen as a special case of assignment, which means that the same principle applies as for [`tt:assign`](ABENST_TT_ASSIGN.html):

-   An assignment with data nodes as the target is possible only in deserializations.
-   An assignment with data nodes as the source is possible only in serializations.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n TYPES: BEGIN OF day, \\n name TYPE string, \\n work(1) TYPE c, \\n END OF day. \\n\\ \\nDATA: BEGIN OF week, \\n day1 TYPE day, \\n day2 TYPE day, \\n day3 TYPE day, \\n day4 TYPE day, \\n day5 TYPE day, \\n day6 TYPE day, \\n day7 TYPE day, \\n END OF week. \\n\\ \\nDATA xml\_string TYPE string. \\nDATA result LIKE week. \\n\\ \\nweek-day1-name = 'Monday'. week-day1-work = 'X'. \\nweek-day2-name = 'Tuesday'. week-day2-work = 'X'. \\nweek-day3-name = 'Wednesday'. week-day3-work = 'X'. \\nweek-day4-name = 'Thursday'. week-day4-work = 'X'. \\nweek-day5-name = 'Friday'. week-day5-work = 'X'. \\nweek-day6-name = 'Saturday'. week-day6-work = ' '. \\nweek-day7-name = 'Sunday'. week-day7-work = ' '. \\n\\ \\nCALL TRANSFORMATION demo\_st\_apply1 \\n SOURCE root = week \\n RESULT XML xml\_string. \\n\\ \\nCALL TRANSFORMATION demo\_st\_apply1 \\n SOURCE XML xml\_string \\n RESULT root = result. \\ \\n \\ \\n Monday\\ \\n X\\ \\n \\ \\n \\ \\n Tuesday\\ \\n X\\ \\n \\ \\n \\ \\n Wednesday\\ \\n X\\ \\n \\ \\n \\ \\n Thursday\\ \\n X\\ \\n \\ \\n \\ \\n Friday\\ \\n X\\ \\n \\ \\n \\ \\n Saturday\\ \\n \\ \\n \\ \\n \\ \\n Sunday\\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n 1\\ \\n 3\\ \\n 1\\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_modularization.html