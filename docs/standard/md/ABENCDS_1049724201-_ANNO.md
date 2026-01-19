---
title: "ABENCDS_1049724201-_ANNO"
description: |
  ABENCDS_1049724201-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1049724201-_ANNO.htm"
abapFile: "ABENCDS_1049724201-_ANNO.html"
keywords: ["do", "while", "if", "case", "data", "types", "ABENCDS", "1049724201", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

While the annotation value `#ENTITY` defines that an annotation can be specified in the definition of any CDS entity, this is not the case for the annotation value `#VIEW`. The annotation value `#VIEW` defines that an annotation can be specified in the definition of one of the possible kinds of CDS views (view entity, projection view, DDIC-based view) but it does not define exactly where. There is a special a set of [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) that can be used in [DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html) only. The ABAP annotations that can be specified for a kind of view are documented for the respective `DEFINE` statement. For an overview see [ABAP Annotation Syntax](ABENCDS_ANNOTATIONS_ABAP_TABLES.html).

Defines the scope of an annotation in its annotation definition. The scope of an annotation controls where the annotation can be used in ABAP CDS source code.

The scope of each annotation must be defined using `@Scope`. It determines the places in CDS source code where the annotation can be specified. `@Scope` is an annotation array, which means that multiple annotation values can be specified in square brackets. If no scope can be determined for an annotation or subannotation, a syntax error occurs.

By specifying `@Scope: #VIEW` in the above annotation definition, the defined annotation `MyAnnotation` can only be used in front of the `DEFINE VIEW` statement in ABAP CDS source code.

The annotation can be used on entity level for all types of CDS entities in front of all respective definition statements:

The annotation can be used on entity level for CDS views in front of the statements;

Which view annotation can be used in which kind of view is not governed by the @Scope annotation, but is documented for each `DEFINE` statement.

The annotation can be used on entity level for CDS table functions in front of the statement:

The annotation can be used for CDS views extensions in front of the statement:

The annotation can be used for CDS roles in front of the statement:

The annotation can be used for CDS access policies in front of the statement:

The annotation can be used in CDS annotation definitions in front of the statement:

The annotation can be used for a CDS metadata extension in front of the statement:

The annotation can be used for service definitions in front of the statement:

The annotation can be used on entity level for custom CDS entities in front of the statement:

The annotation can be used on entity level for a CDS hierarchy in front of the statement:

The annotation can be used on entity level for a CDS table entity in front of the statement:

(not yet implemented)

The annotation can be used on entity level for a CDS external entity in front of the statement:

(not yet implemented)

The annotation can be used for a CDS aspect defintion in front of the statement:

The annotation can be used for type definitions in front of the statements:

The annotation can be used for parameters of CDS entities in front of and after a parameter definition:

The annotation can be used for elements of CDS entities in front of and after an element definition:

The annotation can be used on actions and functions for behaviour definitions.

Currently such annotations can only be provided in CDS metadata extensions.

The annotation can be used for CDS aspects inside a `DEFINE ACCESSPOLICY` statement in front of:

The annotation can be used for PFCG mappings in front of the statement:

The annotation can be used in front of the definitions of enumerated constants in enumerated type definitions with the statement `DEFINE TYPE ... ENUM`:

-   \\ `DEFINE VIEW`
-   `DEFINE TABLE FUNCTION`
-   `DEFINE VIEW ENTITY AS PROJECTION`\\
-   `DEFINE TABLE FUNCTION`
-   `DEFINE HIERARCHY`
-   `DEFINE CUSTOM ENTITY`\\
-   `DEFINE ABSTRACT ENTITY`\\
-   `DEFINE VIEW`

-   `DEFINE VIEW ENTITY`\\
-   `DEFINE VIEW ENTITY AS PROJECTION`
-   `DEFINE VIEW` (DDIC-based CDS view)

-   `DEFINE TABLE FUNCTION`

-   `EXTEND VIEW`

-   `DEFINE ROLE`.

-   `DEFINE ACESSPOLICY`.

-   `DEFINE ANNOTATION`.

-   `ANNOTATE`.

-   `DEFINE SERVICE`

-   \\ `DEFINE CUSTOM ENTITY`

-   `DEFINE HIERARCHY`

-   `DEFINE TABLE ENTITY`

-   `DEFINE EXTERNAL ENTITY`

-   `DEFINE ASPECT`

-   `DEFINE TYPE`
-   `DEFINE TYPE ... ENUM`

-   `DEFINE ASPECT`\\

-   `DEFINE PFCG_MAPPING`

-   \\ `DEFINE VIEW`
-   `DEFINE TABLE FUNCTION`
-   `DEFINE VIEW ENTITY AS PROJECTION`\\
-   `DEFINE TABLE FUNCTION`
-   `DEFINE HIERARCHY`
-   `DEFINE CUSTOM ENTITY`\\
-   `DEFINE ABSTRACT ENTITY`\\
-   `DEFINE VIEW`

-   `DEFINE VIEW ENTITY`\\
-   `DEFINE VIEW ENTITY AS PROJECTION`
-   `DEFINE VIEW` (DDIC-based CDS view)

-   `DEFINE TABLE FUNCTION`

-   `EXTEND VIEW`

-   `DEFINE ROLE`.

-   `DEFINE ACESSPOLICY`.

-   `DEFINE ANNOTATION`.

-   `ANNOTATE`.

-   `DEFINE SERVICE`

-   \\ `DEFINE CUSTOM ENTITY`

-   `DEFINE HIERARCHY`

-   `DEFINE TABLE ENTITY`

-   `DEFINE EXTERNAL ENTITY`

-   `DEFINE ASPECT`

-   `DEFINE TYPE`
-   `DEFINE TYPE ... ENUM`

-   `DEFINE ASPECT`\\

-   `DEFINE PFCG_MAPPING`

@...\\nparameter \\n@<... @...\\nelement\\n@<... @...\\nEnumConstant ... **Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `Scope[ ]`\\ **Scope** `#ANNOTATION`\\ **Type** `String(20)`\\ **Enums** `#ACCESSPOLICY, #ANNOTATE, #ANNOTATION, #ASPECT, #CUSTOM_ENTITY, #ELEMENT, #ENTITY, #ENTITY_ASPECT, #ENUM_VALUE, #EXTEND_VIEW, #EXTERNAL_ENTITY, #HIERARCHY, #OPERATION, #PARAMETER, #PFCG_MAPPING, #ROLE, #SERVICE,#SIMPLE_TYPE, #TABLE_ENTITY, #TABLE_FUNCTION, #VIEW`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_scope\_a.html