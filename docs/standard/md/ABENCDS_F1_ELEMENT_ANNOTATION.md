---
title: "ABENCDS_F1_ELEMENT_ANNOTATION"
description: |
  ABENCDS_F1_ELEMENT_ANNOTATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_ELEMENT_ANNOTATION.htm"
abapFile: "ABENCDS_F1_ELEMENT_ANNOTATION.html"
keywords: ["select", "do", "if", "try", "class", "data", "types", "ABENCDS", "ELEMENT", "ANNOTATION"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``\\ 
``... @<[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as an element annotation for the following [CDS entities](ABENCDS_ENTITY_GLOSRY.html):

The elements of the `SELECT` list or element list of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) define the components of the result set of database accesses using [`SELECT`](ABAPSELECT.html) and of structured data types in ABAP. The annotations enrich these components with additional semantic properties. The annotation should be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) In the annotation definition, the annotation [`@Scope`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html) should be specified using the value `#ELEMENT`.

Element annotations can be specified before and after the element:

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

-   [Elements](ABENCDS_TABLE_ENTITY_ELEMENT.html) in the [element list](ABENCDS_TABLE_ENTITY_ELEMENT_LIST.html) of a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html)
-   [Elements](ABENCDS_SELECT_LIST_ENTRY_V2.html) in the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)
-   [Elements](ABENCDS_PROJ_VIEW_ELEMENT.html) in the [element list](ABENCDS_PROJ_VIEW_ELEMENT_LIST.html) of a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html)
-   [Elements](ABENCDS_F1_RETURN_LIST_ELEMENT.html) in an [element list](ABENCDS_F1_RETURN_LIST.html) of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html)
-   [Elements](ABENCDS_EE_ELEMENT.html) in an [element list](ABENCDS_EE_ELEM_LIST.html) of a [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html)
-   [Elements](ABENCDS_F1_HIERA_ELEMENT.html) in an [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html) of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)
-   [Elements](ABENCDS_F1_CUSTOM_ELEMENT.html) in an [element list](ABENCDS_F1_CUSTOM_ELEMENT_LIST.html) of a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html)
-   [Elements](ABENCDS_F1_ABSENT_LIST_ELEMENT.html) in an [element list](ABENCDS_F1_ABSENT_ELEMENT_LIST.html) of an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)
-   [Elements](ABENCDS_SELECT_LIST_ENTRY_V1.html) in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)

-   In front of the element, the character `@` must be placed before the name `annotation` of the annotation.
-   After the element, the characters `@<` must be placed before the name `annotation` of the annotation.
-   This notation is possible for all CDS entities listed above, except for CDS view entities. For CDS view entities, all annotations, including element annotations, are possible only in front of the element they refer to.

-   Aggregation Annotations

-   `[Aggregation.default](ABENCDS_741130102_ANNO.html)`

-   API Annotations

-   `[API.element.decommissioningPlannedForYearMonth](ABENCDS_1318352950-_ANNO.html)`
-   `[API.element.releaseState](ABENCDS_1839662893-_ANNO.html)`
-   `[API.element.successor](ABENCDS_1922632877-_ANNO.html)`

-   EndUserText Annotations

-   `[EndUserText.label](ABENCDS_924137870_ANNO.html)`
-   `[EndUserText.quickInfo](ABENCDS_26162021_ANNO.html)`

-   Environment Annotations

-   `[Environment.sql.passValue](ABENCDS_1000560355-_ANNO.html)`

-   Semantics Annotations

-   `[Semantics.amount.currencyCode](ABENCDS_689127610-_ANNO.html)`
-   `[Semantics.currencyCode](ABENCDS_1954553685-_ANNO.html)`
-   `[Semantics.quantity.unitOfMeasure](ABENCDS_653082254-_ANNO.html)`
-   `[Semantics.unitOfMeasure](ABENCDS_772720932-_ANNO.html)`

-   ObjectModel Annotations

-   `[ObjectModel.virtualElementCalculatedBy](ABENCDS_1555784333_ANNO.html)`

-   The semantics annotations are used to define the [currency fields](ABENDDIC_CURRENCY_FIELD.html) and [quantity fields](ABENDDIC_QUANTITY_FIELD.html) of [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html), [CDS views](ABENCDS_VIEW_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), and [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).
-   If a CDS entity selects from a DDIC database table or from another CDS entity, the above semantics annotations are propagated and they do not have to be defined again explicitly.
-   **Exception:** in CDS views with [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html), the annotation [`Metadata.ignorePropagatedAnnotations: true`](ABENCDS_VIEW_ENTITY_ANNO.html) is mandatory, propagation is switched off and therefore, reference annotations must be redefined explicitly.
-   In addition to the [ABAP annotations](ABENCDS_ANNOTATIONS_ABAP.html) shown here, there are also [framework-specific](ABENCDS_ANNOTATIONS_FRMWRK.html) semantics and object model annotations.
-   For each element annotation that is not part of an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html) the special value [`null`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html) can be specified without quotation marks. This value means that the annotations are ignored in the [evaluation](ABENCDS_ANNOTATIONS_ANALYSIS.html) with class `CL_DD_DDL_ANNOTATION_SERVICE` by default.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_ddl\_common\_elements.html