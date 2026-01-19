---
title: "Subannotations specified as followed"
description: |
  are the same as those specified as follows Evaluating either of the above using the method `GET_DIRECT_ANNOS_4_ENTITY` of the class `CL_DD_DDL_ANNOTATION_SERVICE` produces the following In the annotation syntax(ABENCDS_ANNOTATIONS_SYNTAX.html), annotation arrays(ABENANNOTATION_ARRAY_GLOSRY.html)
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ANNOTATIONS_ANALYSIS.htm"
abapFile: "ABENCDS_ANNOTATIONS_ANALYSIS.html"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "ABENCDS", "ANNOTATIONS", "ANALYSIS"]
---

When an object defined in the [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) is activated, the annotations defined in the [CDS annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html) are saved in internal system tables. These tables can then be accessed to evaluate the data. This is done for every annotation with correct syntax regardless of name and value.

The following documented system class is provided for evaluations of the annotations of [CDS entities](ABENCDS_ENTITY_GLOSRY.html):

`CL_DD_DDL_ANNOTATION_SERVICE`

The methods of this class return the annotations of CDS entities. By default, the annotations are returned from [metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html) first, and then from the CDS entity itself. In the latter case, a distinction can be made between direct, derived and inherited annotations. In the case of inherited annotations the [metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html) (if present) are handled first. In cases where an annotation has no value specified, the initial annotation value is returned rather than any default value defined in the annotation definition.

[Evaluating Annotations](ABENCDS_SEMANTICS_ANNOTATION_ABEXA.html)

[Metadata extensions](ABENCDS_META_DATA_EXTENSIONS.html) add further annotations to a CDS entity or override existing annotations. Only those annotations can be added by means of metadata extensions, that are not relevant during the activation of the entity in question.

The methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` (except `GET_DIRECT_ANNOS_...`) [evaluate](ABENCDS_META_DATA_EXTENSION_EVAL.html) by default the existing metadata extensions in the current AS ABAP. There can be multiple metadata extensions for an entity. These extensions can be assigned to different layers, such as industry, partner, and customer. The methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` collect all annotations belonging to the CDS entity in the following order:

Every annotation is only returned once for its scope. If annotations have the same name, the priority is determined by the layers of the involved metadata extensions (see topic [ABAP CDS - Evaluation of Metadata Extensions](ABENCDS_META_DATA_EXTENSION_EVAL.html)). Afterwards, the direct and indirect annotations of the CDS entity are evaluated. In the evaluation of the annotations inherited from the other CDS entities, any metadata extensions are taken into account first.

Annotations found in an earlier evaluation step always have the higher priority. An annotation from a later step is only returned if it has not already been found in an earlier step. The results of the class `CL_DD_DDL_ANNOTATION_SERVICE` show the origin of each annotation.

When evaluating annotations of a CDS entity, under the condition that they are not overridden by metadata extensions, using methods of the class `CL_DD_DDL_ANNOTATION_SERVICE`, the following types of annotations can be distinguished:

The following three pieces of [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) define three view entities; the first two view entities access the third view entity. The only difference between the first two view entities is the specification of annotation `@Metadata.ignorePropagatedAnnotations:true`. Every view contains an element with a direct element annotation `@EndUserText.label`.

The program `DEMO_CDS_DERIVED_INHERIT_ANNOS` uses a method of the class `CL_DD_DDL_ANNOTATION_SERVICE` to read the element annotations of the first two CDS view entities:

The `ABAPCATALOG.INTERNAL.ISMANDT` annotation that is visible in the output is an internal annotation, which indicates the client field of a client-dependent CDS entity.

The following example demonstrates how annotations are derived from DDIC objects to [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html).

The program `DEMO_CDS_BT_ANNOS` uses methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` to read the element annotations of the field `Char1Field`. It can be seen that the annotation values are passed from the DDIC data element to the CDS simple type and from there are derived as element annotations in the CDS view entity.

In the [annotation syntax](ABENCDS_ANNOTATIONS_SYNTAX.html), [subannotations](ABENSUB_ANNOTATION_GLOSRY.html) are specified either as [comma-separated lists](ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO.html) in curly brackets or using [structured names](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html). The way this metadata is saved internally is independent of the way it is specified and the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` always return subannotations as an individual annotation with a structured name.

Subannotations specified as followed

are the same as those specified as follows

Evaluating either of the above using the method `GET_DIRECT_ANNOS_4_ENTITY` of the class `CL_DD_DDL_ANNOTATION_SERVICE` produces the following

In the [annotation syntax](ABENCDS_ANNOTATIONS_SYNTAX.html), [annotation arrays](ABENANNOTATION_ARRAY_GLOSRY.html) are created using [comma-separated lists](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) in square brackets after a specified annotation. When this metadata is saved internally, the elements of annotation arrays are saved as individual annotations. Here, they are saved under the name of the array. A consecutive index enclosed in `$` characters `$1$`, `$2$`, ... is appended to this array. Accordingly, the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` return an array as individual annotations.

For annotation arrays, the [annotation syntax](ABENCDS_ANNOTATIONS_SYNTAX.html) in DDL source code for [CDS](ABENANNOTATION_ARRAY_GLOSRY.html) entities is not as strict as the syntax of [`DEFINE ANNOTATION`](ABENCDS_F1_DEFINE_ANNOTATION.html) for [annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html).

In the internal metadata (and hence in the results of the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE`), array elements with non-matching types are returned just as specified in the annotation syntax. Directly nested arrays are not saved but they are counted when the elements are indexed.

The [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html) specified as follows is valid [annotation syntax](ABENCDS_ANNOTATIONS_SYNTAX.html), but it cannot have an [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html).

The elements of the error do not have matching types and the second element is a directly nested array. The method `GET_DIRECT_ANNOS_4_ENTITY` of the class `CL_DD_DDL_ANNOTATION_SERVICE` produces the following:

It should be noted that the nested array is counted but not returned.

For each [element annotation](ABENCDS_F1_ELEMENT_ANNOTATION.html) of a CDS entity that is not part of an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html), the special value [`null`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html) can be specified (without quotation marks). The value `null` leads to a syntax error at other positions. An annotation with the value `null` by default is not returned by the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE`. The default setting can be changed with the method input parameter `NULL_VALUES`.

The following two [CDS source codes](ABENDDL_SOURCE_CODE_GLOSRY.html) define two views; the second view accesses the first view. In the first view, `@EndUserText` annotations with literal values are specified for every element of the `SELECT` list. In the second view, some of these values are overwritten with the value `null`.

The program `DEMO_CDS_NULL_ANNOS` uses a method of the class `CL_DD_DDL_ANNOTATION_SERVICE` to read the element annotations of the two CDS view entities. Annotations containing the value `null` in the second view are not reset.

The annotation values of annotations for which this is defined in their [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) (using the annotation [`@LanguageDependency`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html)) are used to define translatable semantic texts for a [CDS object](ABENCDS_OBJECT_GLOSRY.html). The value of such an annotation is saved in special tables that have a language key and are translatable. The value specified in the source code should consist of text in the original language of the CDS source code, and it is translated into the required languages. The methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) is used as the default. If no text is found for the language, the [secondary language](ABENSECONDARY_LANGUAGE_GLOSRY.html) in AS ABAP is used.

The following [CDS source code](ABENDDL_SOURCE_CODE_GLOSRY.html), which defines a CDS view entity, contains the ABAP annotations that are introduced using `EndUserText`.

The program `DEMO_CDS_DDL_TEXTS` uses methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` to access the associated texts in a language-dependent way. The original language of the view is English and the English texts must be available in every system. If a German translation exists, this is also read and displayed.

[ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) are evaluated in different ways:

Annotations that are not evaluated by the ABAP runtime framework or by frameworks of other software components are usually ignored.

-   The method `GET_ANNOTATIONS` of the class `CL_DD_DDL_ANALYZE` also returns the annotations of CDS entities. However, it only analyzes the associated DDL source code. It ignores annotations from metadata extensions, derived and inherited annotations, and the translations of annotations for translatable texts.
-   `CL_DD_DDL_ANNOTATION_SERVICE` evaluates annotations of CDS entities as specified in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) in [CDS annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html). The associated [annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html) are ignored by `CL_DD_DDL_ANNOTATION_SERVICE`. The validity of an annotation must be checked by the responsible framework.
-   The annotations [`Semantics.amount.currencyCode`](ABENCDS_F1_ELEMENT_ANNOTATION.html) and [`Semantics.quantity.unitofMeasure`](ABENCDS_F1_ELEMENT_ANNOTATION.html) can be derived from DDIC database tables only if the name of the referred currency key or unit key field isn't changed in a CDS view entity. If a CDS view entity selecting from a database table uses an alias name for a currency key or unit key field, then the annotation cannot be evaluated by the API `CL_DD_DDL_ANNOTATION_SERVICE`.

-   Annotations from metadata extensions are not stored in the same system tables as annotations from the DDL source code of a CDS entity. They can only be made accessible by using the class `CL_DD_DDL_ANNOTATION_SERVICE`. Other classes ignore metadata extensions.
-   For more information and examples, see [Metadata Extensions](ABENCDS_META_DATA_EXTENSIONS.html) and [Evaluation of Metadata Extensions](ABENCDS_META_DATA_EXTENSION_EVAL.html).
-   The program `ABAP_DOCU_MDE_ANNOS` shows all annotations that can be specified in metadata extensions.

-   Direct annotations
-   Direct annotations are specified in the [annotation syntax](ABENCDS_ANNOTATIONS_SYNTAX.html) directly in the DDL source code of the CDS entity currently being evaluated. The methods `GET_DIRECT_ANNOS_` of the class `CL_DD_DDL_ANNOTATION_SERVICE` only read these annotations.
-   Indirect annotations
-   In addition to returning direct annotations, the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` (except for `GET_DIRECT_ANNOS_`) also return annotations that are not specified in the DDL source code:

-   Inherited annotations
-   If these annotations are not specified explicitly in the DDL source code of the CDS entity, they are taken from the dictionary objects used in the CDS entity, in accordance with the rules described in the class documentation of `CL_DD_DDL_ANNOTATION_SERVICE`. When other CDS entities are accessed, their annotations specified in metadata extensions, direct annotations, and derived annotations are inherited. Other dictionary objects, such as DDIC database tables and DDIC views, do not have any direct annotations. However, their annotations derived from assigned data elements are inherited. The view annotation `Metadata.ignorePropagatedAnnotations` can be used to specify whether the class `CL_DD_DDL_ANNOTATION_SERVICE` takes into account or ignores inherited annotations.
-   Derived annotations
-   If these annotations are not explicitly specified in the DDL source code of the CDS entity or inherited from base objects, they are derived (if possible) from assigned DDIC data elements. The relevant annotations are the element and parameter annotations `@EndUserText.Label`, `@EndUserText.QuickInfo`, and `@EndUserText.Heading`, which are supplied with texts according to rules (described in the class documentation `CL_DD_DDL_ANNOTATION_SERVICE`) from the field labels of assigned data elements. The annotation `@EndUserText.Heading` is only currently possible as an implicit annotation for this purpose. If specified directly in the DDL source code of a data definition, an annotation is not recognized as a language-dependent text. `@EndUserText.Heading` is also not allowed in the DDLX source code of a metadata extension. The annotations `@AbapCatalog.typeSpec.conversionExit`, `@AbapCatalog.typeSpec.changeDocumentRelevant`, and `@ObjectModel.upperCase` are derived as implicit annotations. They can be specified directly in the TDL source code of [CDS user-defined types](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html).

-   Inheritances apply especially to those [element annotations](ABENCDS_F1_ELEMENT_ANNOTATION.html) of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) exposed in the `SELECT` list of a CDS entity using a path expression `path_expr`. A field from a path expression inherits the element annotations of preceding publications.
-   Annotations derived from data elements depend on the assignment of data elements to elements of the current CDS entity. This assignment is performed in the internal metadata of a CDS entity and is not dependent on inheritance.
-   The annotation types described here apply especially to evaluations using the class `CL_DD_DDL_ANNOTATION_SERVICE`. Other APIs can evaluate the underlying metadata differently.

-   Almost all element annotations in this example are from annotations derived from data elements. This applies especially to the annotation `@EndUserText.heading`, which cannot be specified in the source code. The texts of the element `destination` originate from data element `demo_destination`, which overrides the automatic assignment to `S_TO_CITY` in a `CAST` expression.

-   Without the annotation `@Metadata.ignorePropagatedAnnotations:true`, the derived annotations are inherited from the used objects. The `SOURCEOBJECT` column contains the names of the objects.
-   If annotation `@Metadata.ignorePropagatedAnnotations:true` is used, the derivation is performed in the current view and the column `SOURCEOBJECT` only shows names.

-   The value of annotation `@EndUserText.label` of element `id` originates from the annotation specified directly in the first two view entities.
-   The value of annotation `@EndUserText.label` of element `flight` originates in the first view entity from the annotation, which it inherits from the second view entity. In the second view entity, this inheritance is suppressed by the annotation `@Metadata.ignorePropagatedAnnotations:true`.

-   The user-defined type `DEMO_SIMPLE_TYPE_INHERITANCE` is based on the data element `DEMO_BT_INHERITANCE` and derives its properties and texts:

-   The CDS view entity `DEMO_CDS_BT` uses the CDS simple type `DEMO_SIMPLE_TYPE_INHERITANCE` for a cast expression. As a result, the field `Char1Field` inherits the properties and texts from the CDS type.

-   Array elements do not always have to have the same type in the annotation syntax.
-   Arrays can be nested directly in the annotation syntax.

-   Null values are only intended to hide unwanted, derived and inherited annotations in the evaluation of the annotations of a CDS entity.
-   A null value is inherited like every value. A direct annotation of a CDS entity overwrites the annotations taken from used dictionary objects. This means any values can be overwritten with the null value; a null value itself can also be overwritten.
-   In the [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) of [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html), null values can be specified in exactly the same way as in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a CDS entity.
-   The evaluation filters out all annotations that have a null value specified for their identifiers.

-   If specified, `@annotation.annotation1:null` only affects the identifier `@annotation.annotation1` but does not affect, for example, `@annotation.annotation1.annotation2`.
-   If the null value is specified for an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html), this value affects the entire array. `@annot:null` specified for an inherited annotation array `@annot:[ ..., ..., ...]` is applied to all elements of the array.

-   The evaluation filters annotations with null values - completely regardless of whether they are predefined [SAP annotations](ABENSAP_ANNOTATION_GLOSRY.html) or not.

-   The annotations `@EndUserText.label: null` and `@EndUserText.quickInfo: null` in front of the elements `carrier` or `flight` overwrite the values of the annotations, which were inherited from the first view. They are not returned by the evaluation.
-   The derived annotation `@EndUserText.Heading` is assigned the value `null` for every element. This occurs for in the first view for the element `id`. For this view, the evaluation returns the annotation for the other two elements. In the second view, the value `null` is also set for this view and the evaluation does not return the annotation `@EndUserText.Heading` for any of the elements of the CDS view.

-   Even in [metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html), the annotations for translatable texts are handled specially and are created in special tables, which are connected to the translation.
-   The program `ABAP_DOCU_TRANSLATABLE_ANNOS` shows all annotations for translatable texts.

-   **ABAP annotations**
-   [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) define technical and semantic properties of a [CDS object](ABENCDS_OBJECT_GLOSRY.html). They are usually evaluated for every CDS object when activated by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html). ABAP annotations can modify the behavior of ABAP SQL statements that access a [CDS entity](ABENCDS_ENTITY_GLOSRY.html). One important example is how the client-dependency of a CDS entity is defined using the associated ABAP annotation.
-   **Framework-specific annotations**
-   In most cases, the [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) must be evaluated by the frameworks of the corresponding software components using a suitable API and are not relevant for activations and the ABAP runtime framework. Here, the names and values of these framework-specific annotations must follow the rules of the relevant framework. For SAP components, these can be taken from the tables of the [Framework-Specific Annotations](ABENCDS_ANNOTATIONS_FRMWRK.html) document.

1.  Annotations from metadata extensions
2.  Direct annotations from the data definition
3.  Indirect annotations (derived and inherited annotations)

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_anno\_inheritance\_1\\n as select from\\n demo\_cds\_anno\_inheritance\_2\\n \\{\\n @EndUserText.label: 'XXXXXXXXXX'\\n key id,\\n key carrier,\\n key flight,\\n departure,\\n destination\\n \\} \\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@Metadata.ignorePropagatedAnnotations: true\\ndefine view entity demo\_cds\_anno\_inheritance\_1A\\n as select from\\n demo\_cds\_anno\_inheritance\_2\\n \\{\\n @EndUserText.label: 'XXXXXXXXXX'\\n key id,\\n key carrier,\\n key flight,\\n departure,\\n destination\\n \\} \\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_anno\_inheritance\_2\\n as select from spfli\\n join scarr on scarr.carrid = spfli.carrid\\n\\{\\n key spfli.carrid as id,\\n key scarr.carrname as carrier,\\n @EndUserText.label: 'YYYYYYYYYY'\\n key spfli.connid as flight,\\n spfli.cityfrom as departure,\\n spfli.cityto as destination\\n\\}\\n define type demo\_simple\_type\_inheritance: demo\_bt\_inheritance; @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, simple type'\\ndefine root view entity DEMO\_CDS\_BT\\n as select from demo\_ddic\_types\\n\\{\\n key id,\\n int4,\\n cast(char1 as demo\_simple\_type\_inheritance) as Char1Field\\n\\}\\n @DemoAnno: \\{subAnno1: true, \\n subAnno2: \\{ subAnno1: 1, \\n subAnno2: \\{ subAnno1: 1, \\n subAnno2: 2 \\} \\} \\} @DemoAnno.subAnno1: true \\n@DemoAnno.subAnno2.subAnno1: 1 \\n@DemoAnno.subAnno2.subAnno2.subAnno1: 1 \\n@DemoAnno.subAnno2.subAnno2.subAnno2: 2 @DemoAnno: \[ true, \\n \[1,2,3\], \\n \\{ subAnno1:1, subAnno2:2\\} \] @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_anno\_null\_value\_1\\n as select from\\n spfli\\n join scarr on\\n scarr.carrid = spfli.carrid\\n \\{ \\n @EndUserText.label: 'ID'\\n @EndUserText.quickInfo: 'ID'\\n key spfli.carrid as id,\\n @EndUserText.label: 'Carrier'\\n @EndUserText.quickInfo: 'Carrier'\\n key scarr.carrname as carrier,\\n @EndUserText.label: 'Flight'\\n @EndUserText.quickInfo: 'Flight'\\n key spfli.connid as flight\\n \\} \\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_anno\_null\_value\_2\\n as select from\\n demo\_cds\_anno\_null\_value\_1\\n \\{\\n key id,\\n @EndUserText.label: null\\n @EndUserText.quickInfo: null\\n key carrier,\\n @EndUserText.quickInfo: null\\n key flight\\n \\} \\n @EndUserText.label: 'Demo View with Texts'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_text\_annotations\\n with parameters\\n @EndUserText.label:'Input Parameter'\\n param : abap.int4\\n as select from demo\_expressions\\n\\{\\n @EndUserText:\\{ label:'Element', quickInfo:'Field' \\}\\n key id\\n\\}\\n **ANNONAME** **`VALUE`**\\ `DEMOANNO.SUBANNO1` `true`\\ `DEMOANNO.SUBANNO2.SUBANNO1` `1`\\ `DEMOANNO.SUBANNO2.SUBANNO2.SUBANNO1` `1`\\ `DEMOANNO.SUBANNO2.SUBANNO2.SUBANNO2` `2` **ANNONAME** **`VALUE`**\\ `DEMOANNO$1$` `true`\\ `DEMOANNO$3$.SUBANNO1` `1`\\ `DEMOANNO$3$.SUBANNO2` `2` abenabap.html abencds.html abencds\_annotations.html