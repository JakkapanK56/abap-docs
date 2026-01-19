---
title: "ANNOTATE ENTITY"
description: |
  ANNOTATE VIEW -   `ANNOTATE ENTITY` -   Defines an MDE for any CDS entity(ABENCDS_ENTITY_GLOSRY.html) except CDS table functions(ABENCDS_TABLE_FUNCTION_GLOSRY.html). -   `ANNOTATE VIEW` -   Defines an MDE specifically for a CDS view(ABENCDS_VIEW_GLOSRY.html). -   Annotations in front of the st
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_ANNOTATE_VIEW.htm"
abapFile: "ABENCDS_F1_ANNOTATE_VIEW.html"
keywords: ["select", "do", "if", "try", "method", "class", "data", "ABENCDS", "ANNOTATE", "VIEW"]
---

1\. `[@Metadata.layer: #CORE|#LOCALIZATION|#INDUSTRY|#PARTNER|#CUSTOMER](ABENCDS_F1_METADATA_EXT_ANNOS.html)\ [[@entity_annot1](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\ [[@entity_annot2](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\ ... ANNOTATE ENTITY cds_entity WITH [[parameter_list](ABENCDS_F1_ANNOTATE_VIEW_PARA_LIST.html)]\ \{ [[element_list](ABENCDS_F1_ANNOTATE_VIEW_SELE_LIST.html)] \}[;]`

2\. `[@Metadata.layer: #CORE|#LOCALIZATION|#INDUSTRY|#PARTNER|#CUSTOMER](ABENCDS_F1_METADATA_EXT_ANNOS.html)\ [[@entity_annot1](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\ [[@entity_annot2](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\ ... [[@view_entity_annot1](ABENCDS_VIEW_ENTITY_ANNO.html) | [@proj_view_annot1](ABENCDS_PROJ_VIEW_ANNOTATIONS.html) | [@_view_annot1](ABENCDS_VIEW_ANNO_V1.html)]\ [[@view_entity_annot2](ABENCDS_VIEW_ENTITY_ANNO.html) | [@proj_view_annot2](ABENCDS_PROJ_VIEW_ANNOTATIONS.html) | [@_view_annot2](ABENCDS_VIEW_ANNO_V1.html)]\ ... ANNOTATE VIEW cds_view WITH [[parameter_list](ABENCDS_F1_ANNOTATE_VIEW_PARA_LIST.html)]\ \{ [[element_list](ABENCDS_F1_ANNOTATE_VIEW_SELE_LIST.html)] \}[;]`

Defines a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html) (MDE for short) in dedicated [`DDLX` source code](ABENDDLX_SOURCE_CODE_GLOSRY.html).

The CDS metadata extension adds metadata to a CDS entity as [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html). The entity in question must exist, be specified using the name of its [CDS entity](ABENCDS_ENTITY_GLOSRY.html)\\ `cds_entity` or `cds_view`, and contain the annotation `Metadata.allowExtensions` with the default value `true` in its source code. A CDS entity can have more than one CDS metadata extension. `ANNOTATE ENTITY` can be used for all CDS entities including CDS views. `ANNOTATE VIEW` can be used for CDS views only.

The annotation [`@Metadata.layer`](ABENCDS_F1_METADATA_EXT_ANNOS.html) must be specified with one of the enumeration symbols shown in the example in front of the statement `ANNOTATE` to define the layer of the metadata extension. In the [analysis of metadata extensions](ABENCDS_META_DATA_EXTENSION_EVAL.html), the layer determines the priority of the metadata if there are multiple metadata extensions for the same CDS entity. The enumeration symbols are listed with the lowest priority ones on the left and the highest priority on the right. `#CORE` therefore has the lowest, and `#CUSTOMER` the highest priority. A syntax check warning is issued for annotations specified more than once, and the system uses the annotation of the first metadata extension found.

The annotations added to the extended entity are defined as follows. A metadata extension must contain at least one of these.

In metadata extensions, only those annotations can be specified for which this is allowed in their [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) using the annotation [`@MetadataExtension.usageAllowed:true`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html). In the CDS metadata extension, an annotation can be used in the same scope defined using [`@Scope`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html) as in a data definition. All other annotations produce syntax errors.

These annotations of a metadata extension are respected in the [evaluation of annotations](ABENCDS_ANNOTATIONS_ANALYSIS.html) with the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` except for `GET_DIRECT_ANNOS_`, in accordance with the layers defined by the annotation `@Metadata.layer`. Here the annotations of a metadata extension always have a higher priority than the annotations specified in the source code of the CDS entity. These are only respected if they are not overridden by a corresponding annotation of a metadata extension. For the exact description of the evaluation, see section [evaluation of metadata extensions](ABENCDS_META_DATA_EXTENSION_EVAL.html).

The following metadata extension named `DEMO_CDS_METADATA_EXTENSION` adds annotations with original language *German* to the CDS view entity `DEMO_CDS_PARAMETERS` from the executable example for [CDS view entities with parameters](ABENSELECT_CDS_PARA_ABEXA.html). The class `CL_DEMO_CDS_META_DATA_EXT` reads the annotations of the view with the methods of the classes `CL_DD_DDL_ANNOTATION_SERVICE` and `CL_DD_DDL_ANALYZE`. The method `GET_ANNOS` of the class `CL_DD_DDL_ANNOTATION_SERVICE` covers both the annotations specified in the metadata extension and the translations into the current text environment language. The method `GET_ANNOTATIONS` of the class `CL_DD_DDL_ANALYZE` only evaluates the specifications in the view `DEMO_CDS_PARAMETERS`.

The following metadata extension `DEMO_CDS_MDE_FOR_ABSTR_ENT` adds entity annotations and element annotations to the [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)\\ `DEMO_CDS_ABSTRACT_ENTITY_ELEM` from the example for its [element annotations](ABENCDS_F1_ABSENT_LIST_ANNOTATION.html).

ANNOTATE ENTITY

ANNOTATE VIEW

-   `ANNOTATE ENTITY`
-   Defines an MDE for any [CDS entity](ABENCDS_ENTITY_GLOSRY.html) except [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   `ANNOTATE VIEW`
-   Defines an MDE specifically for a [CDS view](ABENCDS_VIEW_GLOSRY.html).

-   Annotations in front of the statement `ANNOTATE`

-   Only entity annotations `@entity_annot` can be specified in front of the statement `ANNOTATE ENTITY`. Valid [SAP annotations](ABENCDS_ANNOTATIONS_SAP.html) must be in the [scope](ABENCDS_ANNOTATIONS_SCOPES.html) of the [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html). They are added to the entity annotations of the extended entity.
-   Entity annotations and view annotations `@view_annot` can be specified in front of the statement `ANNOTATE VIEW`. Valid [SAP annotations](ABENCDS_ANNOTATIONS_SAP.html) must be in the [scope](ABENCDS_ANNOTATIONS_SCOPES.html) of the [view annotations](ABENCDS_VIEW_ENTITY_ANNO.html). They are added to the view annotations of the extended view.

-   [`parameter_list`](ABENCDS_F1_ANNOTATE_VIEW_PARA_LIST.html) is used to specify annotations for the parameters of the extended entity.
-   [`element_list`](ABENCDS_F1_ANNOTATE_VIEW_SELE_LIST.html) is used specify annotations for the elements of `SELECT` list of the extended entity.

-   Unlike the specification of annotations in the source code of the extended CDS entity, it is not possible to have any arbitrary annotations in metadata extensions; it is only possible to have [SAP annotations](ABENCDS_ANNOTATIONS_SAP.html). The syntax check for a metadata extension checks the validity of its specification with respect to the [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html):

-   the name of an annotation
-   the validity of the [annotation values](ABENANNOTATION_VALUE_GLOSRY.html), the type, and (for enumerations) the enumeration symbol
-   the [scope](ABENCDS_ANNOTATIONS_SCOPES.html)
-   whether any [annotation arrays](ABENANNOTATION_ARRAY_GLOSRY.html) are specified correctly (they must only be specified using square brackets). The format `@annot: value` is not possible. `@annot: [value]` must be used instead. The array can contain only similar elements (in accordance with its definition).

-   The annotations (of a CDS entity) specified in metadata extensions does not have any effect on the activation or the behavior at runtime. They are only respected by the class `CL_DD_DDL_ANNOTATION_SERVICE`.
-   The program `ABAP_DOCU_MDE_ANNOS` shows all annotations that can be specified in metadata extensions.

@Metadata.layer:#INDUSTRY\\n \\n@EndUserText.label: 'Demo for View with Parameters'\\n\\nannotate view demo\_cds\_parameters with\\n parameters\\n @EndUserText.label: 'Lower limit for distance'\\n p\_distance\_l,\\n @EndUserText.label: 'Upper limit for distance'\\n p\_distance\_u,\\n @EndUserText.label: 'Unit of distance'\\n p\_unit\\n\\{\\n @EndUserText.label: 'Airline carrier'\\n carrid;\\n @EndUserText.label: 'Flight connection'\\n connid;\\n @EndUserText.label: 'Departure from city'\\n cityfrom;\\n @EndUserText.label: 'Arrival in city'\\n cityto;\\n @EndUserText.label: 'Flight distance'\\n distance;\\n @EndUserText.label: 'Unit of flight distance'\\n distid;\\n\\}; @Metadata.layer: #CORE\\n@EndUserText.label : 'Label from MDE'\\nannotate entity demo\_cds\_abstract\_entity\_elem with\\n \\{\\n @EndUserText.quickInfo: 'Quickinfo from MDE'\\n col2;\\n \\} abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html abencds\_meta\_data\_extensions.html abencds\_f1\_ddlx\_syntax.html