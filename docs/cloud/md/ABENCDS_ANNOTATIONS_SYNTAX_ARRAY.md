---
title: "ABAP CDS, Annotation Array"
description: |
  -   Annotation values(ABENANNOTATION_VALUE_GLOSRY.html) `value1`(ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html), `value2`(ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html), ... -   Subannotations(ABENSUB_ANNOTATION_GLOSRY.html) `subannos1`(ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html), `subannos2`(ABENCDS_A
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.htm"
abapFile: "ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENCDS", "ANNOTATIONS", "SYNTAX", "ARRAY"]
---

``...  [`value1`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)|\{[`subannos1`](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html)\},       [`value2`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)|\{[`subannos2`](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html)\},       ...``

Comma-separated list of array elements in the square brackets of an [annotation](ABENCDS_ANNOTATIONS_SYNTAX.html). This makes the annotation specified in front of the colon into an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html) with the elements specified in the brackets. The possible elements of an array are:

Arrays are not intended to be nested directly and one element in an array represents an annotation to which the same rules apply as to single annotations. The difference is that an array element does not have an explicit name. In the internal repository of the metadata defined by an annotation, however, an array element is identified uniquely using an index appended to the name of the array. This makes it possible to find the array element when it is evaluated.

Array elements should only be specified for annotations for which this is noted in the associated [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html).

The following [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) is available.

The annotation can then, for example, be specified as follows:

The annotation array has three elements, each of which is assigned a suitable annotation value. Evaluating the annotation using the method `GET_DIRECT_ANNOS_4_ENTITY` of the class `CL_DD_DDL_ANNOTATION_SERVICE` produces the following

The elements are indicated using the indexes `$1$`, `$2$`, and `$3$`.

The following [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) is available. This is the definition of a structured annotation array.

The annotation can then, for example, be specified with four structured array elements as follows:

ABAP CDS, Annotation Array

-   [Annotation values](ABENANNOTATION_VALUE_GLOSRY.html)\\ [`value1`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html), [`value2`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html), ...
-   [Subannotations](ABENSUB_ANNOTATION_GLOSRY.html)\\ [`subannos1`](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html), [`subannos2`](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html), ... in curly brackets.

-   Annotation arrays with elements of different types and categories can be specified in the syntax of the [DDL for data definitions](ABENCDS_F1_DDL_SYNTAX.html). Arrays of this type are not supported in [annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html). Square brackets for annotation arrays can be nested directly in data definitions. The nesting of arrays is also not supported in annotation definitions. The internal metadata repository counts the nested arrays when indexing the elements, but otherwise they are ignored.

@Scope:\[#VIEW, #EXTEND\_VIEW\] \\ndefine annotation \\n DemoAnnoStringArray: array of String(1); @DemoAnnoStringArray:\[ 'a', 'b', 'c' \] @Scope:\[#VIEW, #EXTEND\_VIEW\]\\ndefine annotation \\n DemoAnnoArray: array of \\{ subAnno1: Integer; \\n subAnno2: Integer; \\n subAnno3: Integer; \\} @DemoAnnoArray:\[ \\{subAnno1:11, subAnno2:12, subAnno3:13\\}, \\n \\{subAnno1:21, subAnno2:22, subAnno3:23\\}, \\n \\{subAnno1:31, subAnno2:32, subAnno3:33\\}, \\n \\{subAnno1:41, subAnno2:42, subAnno3:43\\} \] **ANNONAME** **VALUE**\\ `DEMOANNOSTRINGARRAY$1$` `'a'`\\ `DEMOANNOSTRINGARRAY$2$` `'b'`\\ `DEMOANNOSTRINGARRAY$3$` `'c'` abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html abencds\_annotations\_syntax.html