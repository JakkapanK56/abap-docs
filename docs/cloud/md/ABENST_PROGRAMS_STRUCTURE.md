---
title: "ABENST_PROGRAMS_STRUCTURE"
description: |
  ABENST_PROGRAMS_STRUCTURE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_PROGRAMS_STRUCTURE.htm"
abapFile: "ABENST_PROGRAMS_STRUCTURE.html"
keywords: ["do", "if", "data", "ABENST", "PROGRAMS", "STRUCTURE"]
---

`<?sap.transform simple?>\  <tt:transform [template="tmpl"]\    xmlns:tt="http://www.sap.com/transformation-templates">\  \    [<tt:type name="..." [...]>\       ...     </tt:type>\     ...]\  \    [<tt:root name="root1" [...] />\     <tt:root name="root2" [...] />\     ...]\    [<tt:parameter name="para1" [...] />\     <tt:parameter name="para2" [...] />\     ...]\    [<tt:variable name="vari1" [...] />\     <tt:variable name="vari2" [...] />\     ...]\  \    [<tt:template [name=="tmpl"]>\       ...     </tt:template>]\    [<tt:template [name=="..."]>\       ...     </tt:template>\    ...]\  \  </tt:transform>`

An ST program must consist of valid XML data that is structured as shown here.

In this documentation and in the example programs, double quotation marks (*"*) are used as outer quotation marks and single quotation marks (*'*) as inner quotation marks. However, as usual in XML, this is not mandatory. For example, `'not-initial(ref("X.Y"))'` can be written instead of `"not-initial(ref('X.Y'))"`.

[Example of an ST program](ABENST_PROGRAM_ABEXA.html)

-   The first line `<? ... ?>` serves to identify the transformation type (ST). It does not need to be entered because the syntax check adds it automatically.
-   The elements of the namespace *http://www.sap.com/transformation-templates* are [ST statements](ABENST_STATEMENTS.html). The namespace prefix `tt` is used in this documentation as a convention for this namespace. ST statements can be XML elements or attributes. All other components of an XML element are so called literal elements, which means that they have no semantics within the ST language.
-   Elements of an ST program are:

-   The mandatory root element [`tt:transform`](ABENST_TT_TRANSFORM.html). All other elements must be enclosed in the root element.
-   Type definitions using [`tt:type`](ABENST_TT_TYPE.html).
-   Various data declarations using [`tt:root`](ABENST_TT_ROOT.html), [`tt:parameter`](ABENST_TT_PARAMETER.html), and [`tt:variable`](ABENST_TT_VARIABLE.html).
-   A [main template](ABENST_TT_TEMPLATE_MAIN.html) defined with `tt:template` and any number of [subtemplates](ABENST_TT_TEMPLATE_SUB.html). A template is a pattern for the XML data into which ABAP data is serialized or from which data is deserialized.

-   These elements can be in any order.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html