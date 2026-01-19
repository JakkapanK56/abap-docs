---
title: "ABENCDS_ANNOTATIONS_SYNTAX"
description: |
  ABENCDS_ANNOTATIONS_SYNTAX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ANNOTATIONS_SYNTAX.htm"
abapFile: "ABENCDS_ANNOTATIONS_SYNTAX.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENCDS", "ANNOTATIONS", "SYNTAX"]
---

``@[<]Anno[: [`value`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)\ ]\         |[: \{ [`subannos`](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) \} ]\         |[: [ [`arrelem`](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) ] ]\         |[[`.subAnno[ ... ]`](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html)]``

A [CDS annotation](ABENCDS_ANNOTATIONS.html) is specified in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) by using fixed [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html). This syntax specifies the following:

An annotation name must be unique within a [scope](ABENCDS_ANNOTATIONS_SCOPES.html). Only those annotations should be specified for which a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) exists. Alongside the syntax rules above, the annotation definition also specifies the following:

In the [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) for [CDS roles](ABENCDS_ROLE_GLOSRY.html), [`DDLX` source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) for [metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html), and the [`DDLA` source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) for [annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html), the syntax check allows only those annotations that follow the rules of an annotation definition. In the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) for [data definitions](ABENCDS_DATA_DEFINITION_GLOSRY.html), annotation definitions modify the source code colors and code completion in [ADT](ABENADT_GLOSRY.html). Currently, however, they are not covered by the syntax check.

The following DDL source code for defining a CDS view entity contains ABAP annotations and other annotations at the allowed [positions](ABENCDS_ANNOTATIONS_SCOPES.html) (in other words, for the entire view, for the elements of the `SELECT` list, and for an input parameter).

[ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) are:

The remaining annotations are used as examples for [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html). An [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) that allows the specified annotations shown here could look like this:

The class `CL_DEMO_CDS_DDL_ANNOTATIONS` access the metadata created by the specified annotations in the DDIC database tables `DDHEADANNO`, `DDFIELDANNO`, and `DDPARAMETERANNO` directly and using the methods of the classes `CL_DD_DDL_ANNOTATION_SERVICE` and `CL_DD_DDL_ANALYZE` and displays it. Note the following in particular:

Unlike the table `DDHEADANNO`, the tables `DDFIELDANNO` and `DDPARAMETERANNO` for the elements and parameters also contain the name of the element or parameter for which an annotation was created.

-   The annotation is introduced using the character `@` or the characters `@<`.
-   `@<` can be used in the CDS DDL for CDS entities except for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) in order to specify the annotation after a list element in a comma-separated or semicolon-separated list.
-   A [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html)\\ `Anno` consisting of letters, numbers, and underscores and starting with a letter. A main annotation that is not structured using [subannotations](ABENSUB_ANNOTATION_GLOSRY.html) can be specified exactly once in a [scope](ABENCDS_ANNOTATIONS_SCOPES.html).
-   One of the following optional alternatives specified after a colon (`:`):

-   An [annotation value](ABENANNOTATION_VALUE_GLOSRY.html)\\ [`value`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html)
-   [Subannotations](ABENSUB_ANNOTATION_GLOSRY.html)\\ [`subannos`](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) specified in curly brackets `\{ ... \}`.
-   Elements of an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html)\\ [`arrelem`](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) specified in square brackets `[ ... ]`.

-   The [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html)\\ `Anno` chained with a [subannotation](ABENSUB_ANNOTATION_GLOSRY.html)\\ [`subAnno`](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html) using a period (`.`). The combination `Anno.subAnno` is a structured annotation name that can be extended using further subannotations.

-   The statement [`define annotation`](ABENCDS_F1_DEFINE_ANNOTATION.html) defines the name, the possible [annotation values](ABENANNOTATION_VALUE_GLOSRY.html), the layout of the [subannotations](ABENSUB_ANNOTATION_GLOSRY.html), and whether the annotation in question is an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html).
-   The [annotations](ABENCDS_F1_DEFINE_ANNO_ANNOS.html) of an annotation definition specify the scope of the annotation, whether it can be moved to metadata extensions, and whether a particular annotation value is translatable text.

-   The evaluation of the annotations of CDS source code is currently the responsibility of the framework in which the [CDS object](ABENCDS_OBJECT_GLOSRY.html) is used.
-   The annotations specified in the DDL source code of a CDS entity can be supplemented or overridden using the annotations of [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html). Here the annotations are specified with the same syntax as in the DDL source code of a CDS entity, with the following restrictions:

-   `@<` cannot be used for introducing an annotation.
-   Only those annotations can be specified for which this is noted in their [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html).

-   There is a set of [SAP annotations](ABENCDS_ANNOTATIONS_SAP.html) predefined by SAP, comprising [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) evaluated by the ABAP runtime framework and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) evaluated by other frameworks. All other annotations are not usually evaluated. It cannot be guaranteed, however, that a framework allows all annotations.
-   The program `ABAP_DOCU_CDS_ANNOS_OVERVIEW` shows all SAP annotations and their properties.
-   The methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` for [evaluating annotations](ABENCDS_ANNOTATIONS_ANALYSIS.html) of CDS entities return derived and inherited annotations alongside the annotations specified directly in the associated DDL source code.

-   `EndUserText.label`, applies to the full view entity.
-   `EndUserText.label` and `EndUserText.quickInfo` for the element `some_field` of the `SELECT` list
-   `EndUserText.label` and `Environment.systemField` for the input parameter `param`.

-   The annotation `@DemoAnno.vAnnot3` is an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html) consisting of three elements indicated by the indexes `$1$`, `$2$`, and `$3$`.
-   The annotations `@DemoAnno.vAnnot4` and `@DemoAnno.vAnnot5` show the alternatives to specifying a structured annotation using a [comma-separated list](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) in curly brackets and by using [structured names](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html).

@EndUserText.label: 'Demo View with Annotations'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@DemoAnno.vAnnot0\\n@DemoAnno.vAnnot1:'abc'\\n@DemoAnno.vAnnot2:123\\n@DemoAnno.vAnnot3:\[ 123, 456, 789 \]\\n@DemoAnno.vAnnot4:\\{ annot0, annot1:'abc', annot2:123 \\}\\n@DemoAnno.vAnnot5.annot0\\n@DemoAnno.vAnnot5.annot1:'abc'\\n@DemoAnno.vAnnot5.annot2:123\\n@DemoAnno.vAnnot6:\[ \\{ annot0, annot1:'abc', annot2:123 \\},\\n \\{ annot0:false, annot1:'def', annot2:456 \\} \]\\n@DemoAnno.vAnnot7:\\{ annot0,\\n annot1:\[ 123, 456, 789 \],\\n annot2:\\{ annot0, annot1:'abc', annot2:123 \\} \\}\\ndefine view entity demo\_cds\_view\_annotations\\n with parameters\\n @EndUserText.label:'Input Parameter'\\n @Environment.systemField:#USER\\n param : syst\_uname\\n\\n as select from demo\_expressions\\n\\{\\n @DemoAnno.fAnnot0\\n key id as key\_field,\\n @EndUserText:\\{ label:'Some field', quickInfo:'Some info' \\}\\n num1 as some\_field\\n\\}\\n @Scope:\[#ANNOTATE,\\n #EXTEND\_VIEW,\\n #ENTITY\]\\n@MetadataExtension.usageAllowed: true\\ndefine annotation DemoAnno \\{ \\n vAnnot0: Boolean default true; \\n vAnnot1: String(3); \\n vAnnot2: Integer; \\n vAnnot3: array of Integer; \\n vAnnot4: \\{ annot0:Boolean default true; \\n annot1:String(3); \\n annot2:Integer;\\} \\n vAnnot5: \\{ annot0:Boolean default true; \\n annot1:String(3); \\n annot2:Integer;\\} \\n vAnnot6: array of \\{ annot0:Boolean default true; \\n annot1:String(3); \\n annot2:Integer;\\} \\n vAnnot7: \\{ annot0:Boolean default true; \\n annot1: array of Integer; \\n annot2: \\{ annot0:Boolean default true; \\n annot1:String(3); \\n annot2:Integer;\\} \\}; \\n @Scope:\[#PARAMETER\] \\n pAnnot1: String(3); \\n pAnnot2: Integer; \\n @Scope:\[#ELEMENT\] \\n fAnnot0: Boolean default true; \\n fAnnot1: String(3); \\n fAnnot2: Integer; \\n fAnnot3: array of Integer; \\n fAnnot4: \\{ annot0:Boolean default true; \\n annot1:String(3); \\n annot2:Integer;\\} \\}; abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html