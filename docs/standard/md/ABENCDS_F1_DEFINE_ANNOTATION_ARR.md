---
title: "ABENCDS_F1_DEFINE_ANNOTATION_ARR"
description: |
  ABENCDS_F1_DEFINE_ANNOTATION_ARR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DEFINE_ANNOTATION_ARR.htm"
abapFile: "ABENCDS_F1_DEFINE_ANNOTATION_ARR.html"
keywords: ["if", "ABENCDS", "DEFINE", "ANNOTATION", "ARR"]
---

``... \{[`type`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html);\}|\{\{[`subannos`](ABENCDS_F1_DEFINE_ANNOTATION_SUB.html)\}[;]\}``

Defines the elements of an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html). If specified after a colon of a [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html) or [subannotation](ABENSUB_ANNOTATION_GLOSRY.html) defined using [`define annotation`](ABENCDS_F1_DEFINE_ANNOTATION.html), `array of` turns the annotation specified in front of the colon into an array of the elements specified after `array of`:

The same information can be specified for [`type`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html) and [`subannos`](ABENCDS_F1_DEFINE_ANNOTATION_SUB.html) as for elementary annotations. It is not possible to define a further annotation array directly. Subannotations can, however, be arrays themselves.

When an annotation array is used in [annotation syntax](ABENCDS_ANNOTATIONS_SYNTAX.html) in CDS source code, a [comma-separated list](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) is specified in square brackets. This list contains the information defined by [`type`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html) or [`structure`](ABENCDS_F1_DEFINE_ANNOTATION_SUB.html) as often as necessary.

Defines an annotation array `DemoAnnoIntegerArray` for number values.

The annotation can be used as follows in CDS source code, for example, to specify as many numbers as necessary:

Defines a structured annotation array `DemoAnnoStructArray`.

The annotation can be used as follows in CDS source code, for example, to specify as many subannotations as necessary:

-   [`type`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html) defines an annotation array for [annotation values](ABENANNOTATION_VALUE_GLOSRY.html). The following applies here:

-   The addition [`enum`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html) can be used
-   The addition [`default`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html) cannot be used
-   The type specification must be closed using a semicolon (`;`).

-   `\{[subannos](ABENCDS_F1_DEFINE_ANNOTATION_SUB.html)\}` defines an annotation array for [subannotations](ABENSUB_ANNOTATION_GLOSRY.html) in curly brackets. If specified, subannotations can be closed using an optional semicolon (`;`).

@Scope:\[#VIEW, #EXTEND\_VIEW\] \\nannotation DemoAnnoIntegerArray : array of Integer; @DemoAnnoIntegerArray:\[123,456,789\] @Scope:\[#VIEW, #EXTEND\_VIEW\] \\nannotation DemoAnnoStructArray : array of \\n \\{ subAnno1: Boolean default true; \\n subAnno2: String(100) default 'whatsoever'; \\}; @DemoAnnoStructArray:\[\\{subAnno1, subAnno2\\}, \\n \\{subAnno1:true, subAnno2:'Some Text'\\}, \\n \\{subAnno1:true, subAnno2:'Other Text'\\} \] abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_definition.html abencds\_f1\_ddla\_syntax.html abencds\_f1\_define\_annotation.html