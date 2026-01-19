---
title: "ABENCDS_F1_PARAMETER_ANNOTATIONS"
description: |
  ABENCDS_F1_PARAMETER_ANNOTATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_PARAMETER_ANNOTATIONS.htm"
abapFile: "ABENCDS_F1_PARAMETER_ANNOTATIONS.html"
keywords: ["if", "case", "ABENCDS", "PARAMETER", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``\\ 
``... @<[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as a parameter annotation in the definition of an [CDS parameter](ABENCDS_PARAMETER_GLOSRY.html)\\ [`parameter`](ABENCDS_F1_PARAM.html) in one of the following:

Parameter annotations can be specified before and after the parameter:

The annotation should be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation `@Scope` should be specified using the value `#PARAMETER`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

A tooltip defined with `EndUserText.quickInfo` is not translated for parameters. The text specified after `EndUserText.quickInfo` for a parameter is not saved in the table for translatable texts. This is only the case for parameters and is an exception. If specified in any other position, tooltips are translated.

-   [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)
-   [CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html)
-   [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html)
-   [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)
-   [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html)
-   [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)
-   [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)

-   In front of the parameter, the character `@` must be placed before the name `annotation` of the annotation.
-   After the parameter, the characters `@<` must be placed before the name `annotation` of the annotation.
-   This notation is possible for all CDS entities listed above, except for CDS view entities. For CDS view entities, all annotations, including parameter annotations, are possible only in front of the element they refer to.

-   EndUserText Annotations

-   `[EndUserText.label](ABENCDS_924137870_ANNO.html)`
-   `[EndUserText.quickInfo](ABENCDS_26162021_ANNO.html)`

-   Environment Annotations

-   `[Environment.sql.passValue](ABENCDS_1000560355-_ANNO.html)`
-   `[Environment.systemField](ABENCDS_1937921420_ANNO.html)`

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_ddl\_common\_elements.html abencds\_f1\_param.html