---
title: "ABENCDS_F1_DEFINE_ANNOTATION"
description: |
  ABENCDS_F1_DEFINE_ANNOTATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DEFINE_ANNOTATION.htm"
abapFile: "ABENCDS_F1_DEFINE_ANNOTATION.html"
keywords: ["do", "if", "case", "class", "data", "ABENCDS", "DEFINE", "ANNOTATION"]
---

``[[`@annotation_annot1`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html)]\  [[`@annotation_annot2`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html)]\  ...  [define] annotation Anno \{  : [`type`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html); \}\                         |\ \{\ [:] \{[`subannos`](ABENCDS_F1_DEFINE_ANNOTATION_SUB.html)\}[;]\ \}\                         |\ \{  :   array of [`arrelem`](ABENCDS_F1_DEFINE_ANNOTATION_ARR.html)\ \}``

The statement `define annotation` defines a [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) with the name `Anno` in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) in the [DDLA source code](ABENDDLA_SOURCE_CODE_GLOSRY.html). The annotation `Anno` is the [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html) of the current [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html), which can be structured with optional [subannotations](ABENSUB_ANNOTATION_GLOSRY.html). The DDLA source code of an annotation definition can contain the definition of exactly one main annotation, whose name must match the name of the `DDLA` source code. The names are case-sensitive. Annotations of the definition annotation, [`@annotation_annot1`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html), [`@annotation_annot2`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html), ..., can be specified before the statement `define annotation`. These are inherited by subannotations or overwritten there.

The statement `define annotation` creates the annotation `Anno` as a [CDS object](ABENCDS_OBJECT_GLOSRY.html), which is transported using the DDLA source code. The definition of the annotation `Anno` describes how it is to be used in other CDS source code in [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html):

Defines a structured annotation. The [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html)\\ `DEMOANNOSTRUCT` has [subannotations](ABENSUB_ANNOTATION_GLOSRY.html)\\ `subAnno1` to `subAnno4`. The subannotations `subAnno3` and `subAnno4` are [annotation arrays](ABENANNOTATION_ARRAY_GLOSRY.html). (Here, `subAnno4` is structured.)

The annotation defined in this way allows the following to be specified in [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html) in a piece of [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) that defines a [CDS view](ABENCDS_VIEW_GLOSRY.html) or a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) as a view annotation ([CDS view entity](ABENCDS_VIEW_ENTITY_ANNO.html), [CDS projection view](ABENCDS_PROJ_VIEW_ANNOTATIONS.html), [CDS DDIC-based views (obsolete)](ABENCDS_VIEW_ANNO_V1.html)) or as a [function annotation](ABENCDS_F1_FUNCTION_ANNOTATIONS.html):

-   `Anno` is the name of the annotation. It can contain letters, numbers, and underscores, and must start with a letter. Only annotations with names defined in this way should be [used](ABENCDS_ANNOTATIONS_SYNTAX.html).
-   One of the following must be specified after the name:

-   A colon (`:`) followed by the definition of the type [`type`](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html) of the annotation. Enumerations and a default value can be defined when the type is specified. The type specification must be closed using a (`;`).
-   An optional colon (`:`) followed by the structuring of the annotation using [subannotations](ABENSUB_ANNOTATION_GLOSRY.html)\\ [`subannos`](ABENCDS_F1_DEFINE_ANNOTATION_SUB.html) in curly brackets `\{...\}`. This can be closed using an optional semicolon (`;`).
-   A colon (`:`) followed by the definition of the elements of an array using `array of`. This makes the annotation `Anno` into an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html) of the elements defined using [`arrelem`](ABENCDS_F1_DEFINE_ANNOTATION_ARR.html). These elements can be a type specification or subannotations.

-   Put simply, an annotation definition specifies how the annotation needs to be specified in CDS source code in [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html). When annotations are specified, the annotation definitions are used for the color of the source code and for code completion.

-   The type specification determines which [annotation values](ABENANNOTATION_VALUE_GLOSRY.html) can be specified in the annotation syntax when the annotation is used.
-   In the annotation syntax, subannotations are specified either as [comma-separated lists in curly brackets](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) or as [structured names](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html).
-   The elements of an array are specified in annotation syntax as [comma-separated lists in square brackets](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html).

-   The syntax check in [CDS DDL](ABENCDS_DDL_GLOSRY.html) for data definitions currently ignores annotation definitions. It checks only the formal correctness of any names, [annotation values](ABENANNOTATION_VALUE_GLOSRY.html), [subannotations](ABENSUB_ANNOTATION_GLOSRY.html), and [annotation arrays](ABENANNOTATION_ARRAY_GLOSRY.html) specified.
-   When [annotations are evaluated](ABENCDS_SEMANTICS_ANNOTATION_ABEXA.html) in a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) using the class `CL_DD_DDL_ANNOTATION_SERVICE`, the annotations are respected as specified in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of the entity. The associated annotation definitions are ignored.
-   Alongside the rules defined by the statement `define annotation`, an annotation definition also has annotation documentation that describes its meaning and how it is used by the framework in question.

-   Specifies the subannotation `subAnno1` once (the default value `true` is used here implicitly):
-   `@DemoAnnoStruct.subAnno1`
-   Specifies the subannotations `subAnno1` and `subAnno2` together in curly brackets (the default values are overwritten by explicit [annotation values](ABENANNOTATION_VALUE_GLOSRY.html) here. In `subAnno2`, one of the fixed enumerated values is used:
-   `@DemoAnnoStruct:\{subAnno1:false, subAnno2:#I2\}`
-   Specifies annotation values for the annotation array `subAnno3`. The values within the quotation marks can have a maximum of ten characters:
-   `@DemoAnnoStruct.subAnno3:['a','abc','abcdefghij']`
-   Specifies annotation values for the structured annotation array `subAnno4`.
-   `@DemoAnnoStruct.subAnno4:[ \{comp1: 'a', comp2: 'b' \}, \{comp1: 'c', comp2: 'd' \}, \{comp1: 'e', comp2: 'f' \} ]`

@Scope:\[#VIEW, #EXTEND\_VIEW\] \\ndefine annotation DemoAnnoStruct \\n \\{ subAnno1 : Boolean default true; \\n subAnno2 : Integer enum \\{ I1; I2; I3; \\} default #I1; \\n subAnno3 : array of String(10); \\n subAnno4 : array of \\{ comp1 : String(1); \\n comp2 : String(2); \\n \\}; \\n \\}; abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_definition.html abencds\_f1\_ddla\_syntax.html