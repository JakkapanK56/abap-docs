---
title: "ABENST_TT_INCLUDE"
description: |
  ABENST_TT_INCLUDE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_INCLUDE.htm"
abapFile: "ABENST_TT_INCLUDE.html"
keywords: ["do", "if", "case", "data", "ABENST", "INCLUDE"]
---

`<tt:include name="trafo" [templates="tmpl1 tmpl2 ..."] />`

In a simple transformation (ST) program, the `tt:include` statement can be used to include a different ST program `trafo`. The `tt:include` statement makes the templates and type definitions of the included program usable in the current ST program. The ST program `trafo` must exist in the repository. `trafo` is not case-sensitive.

The ST statement `tt:include` can only be listed in an ST program outside of templates. By default, it includes all named templates of a transformation `trafo` at transformation level (unnamed [main templates](ABENST_TT_TEMPLATE_MAIN.html) are not included). No namespace conflicts can occur and transformations must not include themselves.

If the attribute `templates` is specified, only the templates `tmpl1 tmpl2` specified there and the templates called by them using [`tt:apply`](ABENST_TT_APPLY.html) are included.

Only those transformations whose named templates do not conflict with existing named templates can be included in another transformation. [`tt:apply`](ABENST_TT_APPLY.html) can be used to use the included named templates as subtemplates in the including template.

The ST program below corresponds to the example from [Subtemplates Without Their Own Data Roots](ABENST_TT_TEMPLATE_SUB.html), except that the subtemplate of an included ST program is used.

The statement `tt:include` could also be placed in front of the main template. The included ST program can be implemented as follows:

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_reuse.html