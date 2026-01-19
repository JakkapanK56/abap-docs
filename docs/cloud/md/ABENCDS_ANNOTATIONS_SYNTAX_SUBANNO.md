---
title: "ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO"
description: |
  ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.htm"
abapFile: "ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html"
keywords: ["if", "ABENCDS", "ANNOTATIONS", "SYNTAX", "SUBANNO"]
---

``... subAnno1[:   [`value`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)  ]\             |[: \{ subannos \} ]\             |[: [ [`arrelem`](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) ] ]\             |[[`.subAnno[ ... ]`](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html)],      subAnno2[:   [`value`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)  ]\             |[: \{ subannos \} ]\             |[: [ [`arrelem`](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) ] ]\             |[[`.subAnno[ ... ]`](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html)],      ...``

Comma-separated list of [subannotations](ABENSUB_ANNOTATION_GLOSRY.html)\\ `subAnno1`, `subAnno2`, ... in the curly brackets of an [annotation](ABENCDS_ANNOTATIONS_SYNTAX.html). The name of a subannotation can contain letters, numbers, and underscores only and must start with a letter. The same information can be specified after the name as specified after the [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html):

Only those subannotations should be specified that are supported by the associated [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html).

As well as by using a comma-separated list in curly brackets, individual subannotations can also be specified using individual [structured annotation names](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html).

The following [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) is available.

The annotation can then, for example, be specified as follows:

This example has the same semantics as the example using [structured names](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html).

-   A colon (`:`) followed by the following:

-   An [annotation value](ABENANNOTATION_VALUE_GLOSRY.html)\\ [`value`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)
-   Further [subannotations](ABENSUB_ANNOTATION_GLOSRY.html)\\ `subannos` specified in curly brackets `\{ ... \}`.
-   Elements of an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html)\\ [`arrelem`](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) in square brackets `[ ... ]`

-   The chaining of the subannotations `subAnno1`, `subAnno2`, ... with a further subannotation [`subAnno`](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html) using a period (`.`).

@Scope:\[#VIEW, #EXTEND\_VIEW\] \\ndefine annotation \\n DemoSubAnnos: \\{ \\n subAnno1: Boolean; \\n subAnno2: \\{ subAnno1: Integer; \\n subAnno2: \\{ subAnno1: Integer; \\n subAnno2: Integer; \\} \\} \\}; @DemoSubAnnos: \\{subAnno1: true, \\n subAnno2: \\{ subAnno1: 1, \\n subAnno2: \\{ subAnno1: 1, \\n subAnno2: 2 \\} \\} \\} abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html abencds\_annotations\_syntax.html