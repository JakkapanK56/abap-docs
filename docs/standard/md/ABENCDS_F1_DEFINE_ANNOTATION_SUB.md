---
title: "ABENCDS_F1_DEFINE_ANNOTATION_SUB"
description: |
  ABENCDS_F1_DEFINE_ANNOTATION_SUB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DEFINE_ANNOTATION_SUB.htm"
abapFile: "ABENCDS_F1_DEFINE_ANNOTATION_SUB.html"
keywords: ["if", "try", "ABENCDS", "DEFINE", "ANNOTATION", "SUB"]
---

``... [[`@annotation_annot1`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html)]\      [[`@annotation_annot2`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html)]\      ...      subAnno1\{:[`type`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html);\}|\{[:]\{subannos\}[;]\}|\{:array of [`arrelem`](ABENCDS_F1_DEFINE_ANNOTATION_ARR.html)\};      [[`@annotation_annot1`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html)]\      [[`@annotation_annot2`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html)]\      ...      subAnno2\{:[`type`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html);\}|\{[:]\{subannos\}[;]\}|\{:array of [`arrelem`](ABENCDS_F1_DEFINE_ANNOTATION_ARR.html)\};      ...``

Structures a [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) using [subannotations](ABENSUB_ANNOTATION_GLOSRY.html)\\ `subAnno1`, `subAnno2`, ... . The subannotations are defined in a semicolon-separated list in curly brackets `\{ ... \}` in the statement [`define annotation`](ABENCDS_F1_DEFINE_ANNOTATION.html) (a semicolon must be placed after the final entry in the list too). The names of the subannotations of an annotation must be unique.

Each subannotation is specified using the same syntax as when the [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html) is specified after [`define annotation`](ABENCDS_F1_DEFINE_ANNOTATION.html). This means the following:

Annotation definition annotations [`@annotation_annot1`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html), [`@annotation_annot2`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html), ... can be specified in front of each subannotation. These annotations override any identically named annotation definition annotations specified for the structured annotation itself. Any annotations not specified directly in front of a subannotation are inherited by the next higher annotation in the hierarchy.

Defines a structured [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html)\\ `DemoAnnoMain` with three [subannotations](ABENSUB_ANNOTATION_GLOSRY.html), two of which are themselves structured. The semicolons after the closing curly structuring brackets are omitted here.

The annotation can be used, for example, as followed in CDS source code:

The exact same result can be achieved as follows:

-   The name of the subannotation can contain letters, numbers, and underscores only and must start with a letter.
-   [`type`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html) can be used to define the possible [annotation value](ABENANNOTATION_VALUE_GLOSRY.html) for a subannotation
-   A subannotation can itself be structured using further subannotations `subannos`
-   A subannotation can be defined as an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html) of array elements [`arrelem`](ABENCDS_F1_DEFINE_ANNOTATION_ARR.html) using `array of`

-   Colons (`:`) in front of the opening curly bracket and semicolons (`;`) after the closing curly structuring bracket `\{ ... \}` are optional.
-   In the [annotation syntax](ABENCDS_ANNOTATIONS_SYNTAX.html), structured annotations are specified either using [comma-separated lists in curly brackets](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) or using [structured names](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html).

@Scope:\[#VIEW, #EXTEND\_VIEW\] \\ndefine annotation DemoAnnoMain\\{ subAnno1: Boolean; \\n subAnno2\\{ subsubAnno1:String(3); \\n subsubAnno2:Integer;\\} \\n subAnno3\\{ subsubAnno1:String(3); \\n subsubAnno2:Integer;\\} \\} @DemoAnnoMain: \\{subAnno1:true, \\n subAnno2:\\{subsubAnno1:'X', \\n subsubAnno2:100\\}, \\n subAnno3:\\{subsubAnno1:'Y', \\n subsubAnno2:200\\} \\} @DemoAnnoMain.subAnno1:true \\n@DemoAnnoMain.subAnno2.subsubAnno1:'X' \\n@DemoAnnoMain.subAnno2.subsubAnno2:100 \\n@DemoAnnoMain.subAnno3.subsubAnno1:'Y' \\n@DemoAnnoMain.subAnno3.subsubAnno2:200 abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_definition.html abencds\_f1\_ddla\_syntax.html abencds\_f1\_define\_annotation.html