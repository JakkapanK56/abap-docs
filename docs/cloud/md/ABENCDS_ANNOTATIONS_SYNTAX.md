---
title: "ABENCDS_ANNOTATIONS_SYNTAX"
description: |
  ABENCDS_ANNOTATIONS_SYNTAX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ANNOTATIONS_SYNTAX.htm"
abapFile: "ABENCDS_ANNOTATIONS_SYNTAX.html"
keywords: ["do", "if", "data", "ABENCDS", "ANNOTATIONS", "SYNTAX"]
---

``@[<]Anno[: [`value`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)\ ]\         |[: \{ [`subannos`](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) \} ]\         |[: [ [`arrelem`](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) ] ]\         |[[`.subAnno[ ... ]`](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html)]``

A [CDS annotation](ABENCDS_ANNOTATIONS.html) is specified in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) by using fixed [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html). This syntax specifies the following:

An annotation name must be unique within a [scope](ABENCDS_ANNOTATIONS_SCOPES.html). Only those annotations should be specified for which a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) exists. Alongside the syntax rules above, the annotation definition also specifies the following:

In the [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) for [CDS roles](ABENCDS_ROLE_GLOSRY.html), [`DDLX` source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) for [metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html), and the [`DDLA` source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) for [annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html), the syntax check allows only those annotations that follow the rules of an annotation definition. In the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) for [data definitions](ABENCDS_DATA_DEFINITION_GLOSRY.html), annotation definitions modify the source code colors and code completion in [ADT](ABENADT_GLOSRY.html). Currently, however, they are not covered by the syntax check.

-   The annotation is introduced using the character `@` or the characters `@<`.
-   `@<` can be used in the CDS DDL for CDS entities except for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) in order to specify the annotation after a list element in a comma-separated or semicolon-separated list.
-   A [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html)\\ `Anno` consisting of letters, numbers, and underscores and starting with a letter. A main annotation that is not structured using [subannotations](ABENSUB_ANNOTATION_GLOSRY.html) can be specified exactly once in a [scope](ABENCDS_ANNOTATIONS_SCOPES.html).
-   One of the following optional alternatives specified after a colon (`:`):

-   An [annotation value](ABENANNOTATION_VALUE_GLOSRY.html)\\ [`value`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)
-   [Subannotations](ABENSUB_ANNOTATION_GLOSRY.html)\\ [`subannos`](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) specified in curly brackets `\{ ... \}`.
-   Elements of an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html)\\ [`arrelem`](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) specified in square brackets `[ ... ]`.

-   The [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html)\\ `Anno` chained with a [subannotation](ABENSUB_ANNOTATION_GLOSRY.html)\\ [`subAnno`](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html) using a period (`.`). The combination `Anno.subAnno` is a structured annotation name that can be extended using further subannotations.

-   The statement `define annotation` defines the name, the possible [annotation values](ABENANNOTATION_VALUE_GLOSRY.html), the layout of the [subannotations](ABENSUB_ANNOTATION_GLOSRY.html), and whether the annotation in question is an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html).
-   The annotations of an annotation definition specify the scope of the annotation, whether it can be moved to metadata extensions, and whether a particular annotation value is translatable text.

-   The evaluation of the annotations of CDS source code is currently the responsibility of the framework in which the [CDS object](ABENCDS_OBJECT_GLOSRY.html) is used.
-   The annotations specified in the DDL source code of a CDS entity can be supplemented or overridden using the annotations of [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html). Here the annotations are specified with the same syntax as in the DDL source code of a CDS entity, with the following restrictions:

-   `@<` cannot be used for introducing an annotation.
-   Only those annotations can be specified for which this is noted in their [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html).

-   There is a set of [SAP annotations](ABENCDS_ANNOTATIONS_SAP.html) predefined by SAP, comprising [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) evaluated by the ABAP runtime framework and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) evaluated by other frameworks. All other annotations are not usually evaluated. It cannot be guaranteed, however, that a framework allows all annotations.
-   The program `ABAP_DOCU_CDS_ANNOS_OVERVIEW` shows all SAP annotations and their properties.

abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html