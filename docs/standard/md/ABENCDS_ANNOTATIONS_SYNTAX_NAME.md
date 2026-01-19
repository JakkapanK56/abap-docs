---
title: "ABENCDS_ANNOTATIONS_SYNTAX_NAME"
description: |
  ABENCDS_ANNOTATIONS_SYNTAX_NAME - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ANNOTATIONS_SYNTAX_NAME.htm"
abapFile: "ABENCDS_ANNOTATIONS_SYNTAX_NAME.html"
keywords: ["if", "ABENCDS", "ANNOTATIONS", "SYNTAX", "NAME"]
---

``... .subAnno[:   [`value`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)  ]\             |[: \{ [`subannos`](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) \} ]\             |[: [ [`arrelem`](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) ] ]\             |[.subAnno[ ... ]]``

Chains an [annotation](ABENCDS_ANNOTATIONS_SYNTAX.html) with a [subannotation](ABENSUB_ANNOTATION_GLOSRY.html)\\ `subanno`. The chaining is indicated by a period (`.`). The name of the subannotation can contain letters, numbers, and underscores only and must start with a letter. The same information can be specified after the name as specified after the [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html):

Only those subannotations should be specified that are [supported](ABENCDS_F1_DEFINE_ANNOTATION_SUB.html) by the associated [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html).

The following [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) is available.

The subannotations can then, for example, be specified as follows:

This example has the same semantics as the example using [comma-separated lists](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html).

-   A colon (`:`) followed by the following:

-   An [annotation value](ABENANNOTATION_VALUE_GLOSRY.html)\\ [`value`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)
-   Further [subannotations](ABENSUB_ANNOTATION_GLOSRY.html)\\ [`subannos`](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) specified in curly brackets `\{ ... \}`.
-   Elements of an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html)\\ [`arrelem`](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) in square brackets `[ ... ]`

-   A chaining with a further subannotation `subAnno` using a period (`.`).

-   Alongside individual subannotations specified using structured annotation names, multiple subannotations can be specified using a [comma-separated list](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) and curly brackets.
-   A structured annotation name must be unique within the [scope](ABENCDS_ANNOTATIONS_SCOPES.html) of the annotation.

@Scope:\[#VIEW, #EXTEND\_VIEW\] \\ndefine annotation \\n DemoSubAnnos: \\{ \\n subAnno1: Boolean; \\n subAnno2: \\{ subAnno1: Integer; \\n subAnno2: \\{ subAnno1: Integer; \\n subAnno2: Integer; \\} \\} \\}; @DemoSubAnnos.subAnno1: true \\n@DemoSubAnnos.subAnno2.subAnno1: 1 \\n@DemoSubAnnos.subAnno2.subAnno2.subAnno1: 1 \\n@DemoSubAnnos.subAnno2.subAnno2.subAnno2: 2 abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html abencds\_annotations\_syntax.html