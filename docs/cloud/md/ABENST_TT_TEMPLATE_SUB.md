---
title: "ABENST_TT_TEMPLATE_SUB"
description: |
  ABENST_TT_TEMPLATE_SUB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_TEMPLATE_SUB.htm"
abapFile: "ABENST_TT_TEMPLATE_SUB.html"
keywords: ["do", "data", "types", "ABENST", "TEMPLATE", "SUB"]
---

`<tt:template name="tmpl">\    [<tt:context>\      [<tt:root name="root1" [[line-]type=...] />\       <tt:root name="root2" [[line-]type=...] />\       ...]\      [<tt:parameter name="para1" [[s-|d-]val="def1"]\                                  [kind="knd1"] />\       <tt:parameter name="para2" [[s-|d-]val="def2"]\                                  [kind="knd2"] />\       ...]\      [<tt:variable name="vari1" [[s-|d-]val="val1"] />\       <tt:variable name="vari2" [[s-|d-]val="val2"] />\       ...]\     </tt:context>]\    ...  </tt:template>`

Like the [main template](ABENST_TT_TEMPLATE_MAIN.html), subtemplates are defined with `tt:template`. The attribute `name` must be used to define a unique name `tmpl` for the subtemplate.

In a subtemplate, custom data can be declared: `tt:context` can be used to define a context for the statements [`tt:root`](ABENST_TT_ROOT.html), [`tt:variable`](ABENST_TT_VARIABLE.html), and [`tt:parameter`](ABENST_TT_PARAMETER.html). The statement `tt:context` is only allowed in subtemplates and the statements `tt:root`, `tt:variable`, and `tt:parameter` are only allowed in a template within the `tt:context` element.

As in the main template, there are three categories of data, all in a single namespace:

Local types cannot be defined in subtemplates using [`tt:type`](ABENST_TT_TYPE.html).

A subtemplate without its own data roots creates a separate tree structure of data nodes whose root node is the [current node](ABENST_TT_REF.html) from the calling position in the calling template. As a prerequisite for calling a template like this, the current node must be defined at the call position. At the start of the subtemplate, this root node is also the current node of the subtemplate. In a subtemplate like this, the current node can be [set](ABENST_TT_REF.html) as described for main templates, but in contrast to main templates, it is never undefined. Data nodes outside of the tree structure of the subtemplate cannot be addressed. In particular, the data roots of the main template cannot be addressed with `.name`.

Addressing the data nodes of a subtemplate with its own data roots happens exactly as described for the main template. As long as no current node is defined, the data roots of the subtemplate can be addressed using `name`. After they are hidden by a current node, they can only be addressed with `.name`.

Figuratively speaking, a subtemplate without its own data roots works exclusively with the substructure of the main template tree structure whose root nodes it was bound to.

-   Data roots
-   The data roots declared with `tt:root` have exactly the same meaning for the subtemplate as the data roots declared at the highest hierarchy level of the transformation for the main template. This means that they also spread independent tree structures. In contrast to the data roots of the main template, the local data roots of subtemplates do not form a Simple Transformation interface to the ABAP program, but instead an interface to the including template, to which an ABAP data object can be bound with [`tt:with-root`](ABENST_TT_APPLY.html).
-   The data roots of the subtemplates can be typed just like those of the main templates using attribute `[line-]type`.
-   Parameters
-   The parameters declared using `tt:parameter` are formal parameters of the subtemplate, to which a value can be passed using [`tt:with-parameter`](ABENST_TT_APPLY.html). Otherwise, the same applies as to the parameters of the main template.
-   Variables
-   The variables declared with `tt:variable` are local variables of the subtemplate and are only visible there. Otherwise, the same applies as to the variables of the main template.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_modularization.html