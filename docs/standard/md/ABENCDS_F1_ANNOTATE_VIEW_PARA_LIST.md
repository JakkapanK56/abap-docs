---
title: "ABENCDS_F1_ANNOTATE_VIEW_PARA_LIST"
description: |
  ABENCDS_F1_ANNOTATE_VIEW_PARA_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_ANNOTATE_VIEW_PARA_LIST.htm"
abapFile: "ABENCDS_F1_ANNOTATE_VIEW_PARA_LIST.html"
keywords: ["select", "do", "if", "case", "class", "data", "ABENCDS", "ANNOTATE", "VIEW", "PARA", "LIST"]
---

``... PARAMETERS        [`@parameter_annot1`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html)\       [[`@parameter_annot2`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html)\        ...]\        pname1[,        [`@parameter_annot1`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html)\       [[`@parameter_annot2`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html)\        ...]\        pname2,        ...]``

Specifies annotations for the following parameters:

The parameters in a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html) introduced using [`ANNOTATE`](ABENCDS_F1_ANNOTATE_VIEW.html). A comma-separated list `pname1`, `pname2`, ... prefixed with annotations `@parameter_annot` can be specified after `PARAMETERS`. There must not be comma after the last element of the list.

Each parameter `pname` specified after `PARAMETERS` should appear in the parameter list of the entity extended using `ANNOTATE`. If not, the syntax check produces a warning. All parameters defined there can be used exactly once. Valid [SAP annotations](ABENCDS_ANNOTATIONS_SAP.html)\\ `@parameter_annot` can be specified before these as [parameter annotations](ABENCDS_F1_PARAMETER_ANNOTATIONS.html). It is not possible here to specify annotations after the name of a parameter `pname` with the syntax `@<parameter_annot`.

At least one parameter `pname` of the extended entity must be specified after `PARAMETERS`. At least one parameter annotation [`@parameter_annot`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) must be specified before each parameter of the list. If this is not the case, `PARAMETERS` cannot be used.

-   [Parameter list](ABENCDS_F1_ENTITY_PARAMETER_LIST.html) of an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)
-   [Parameter list](ABENCDS_PARAMETER_LIST_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)
-   [Parameter list](ABENCDS_PARAMETER_LIST_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)

-   A parameter must be specified directly with its name. It cannot be specified using the syntax `:pname` or `$parameters.pname`, which is used within the entity for its addressing (parameter passing in CDS view entities is described [here](ABENCDS_SELECT_PARAMETERS_V2.html), parameter passing in CDS DDIC-based views (obsolete) is described [here](ABENCDS_SELECT_PARAMETERS_V1.html)).
-   The program `ABAP_DOCU_MDE_ANNOS` shows all annotations that can be specified in metadata extensions.
-   Parameter annotations can be specified here only if this is allowed in their [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) using the annotation [`@MetadataExtension.usageAllowed:true`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html).
-   A parameter that is not in the parameter list of the entity is handled like a regular parameter in the [evaluation of annotations](ABENCDS_ANNOTATIONS_ANALYSIS.html) with the class `CL_DD_DDL_ANNOTATION_SERVICE`.

abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html abencds\_meta\_data\_extensions.html abencds\_f1\_ddlx\_syntax.html abencds\_f1\_annotate\_view.html