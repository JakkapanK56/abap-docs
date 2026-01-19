---
title: "No KTD found"
description: |
  As one element of a CDS Entity assigned multiple different hierarchy definitions, the hierarchies must not be annotated at the element directly to support extension scenarios. Therefore, the annotation (@ObjectModel.association.toHierarchy) is needed that can annotate exposed associations as hierarc
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_556934736-_ANNO.htm"
abapFile: "ABENCDS_556934736-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "556934736", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`ObjectModel Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap).

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

No KTD found

As one element of a CDS Entity assigned multiple different hierarchy definitions, the hierarchies must not be annotated at the element directly to support extension scenarios. Therefore, the annotation (@ObjectModel.association.toHierarchy) is needed that can annotate exposed associations as hierarchies. Afterwards, one of these hierarchies can be chosen with the annotation (@Consumption.filter.hierarchyAssociation) for the corresponding element on a higher layer in the data model. This could be done on SAP side in the corresponding entity or from a customer in a customer extend.

\- @ObjectModel.association.toHierarchy: true | @ObjectModel.association.toHierarchy : annotates that the corresponding exposed association is a hierarchy and can therefore be used at a later point in a higher layer of the data model for the corresponding representative key.

\- @ObjectModel.association.toHierarchy: false : annotates that the corresponding exposed association cannot be used as a hierarchy at a later point for the corresponding representative key.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.association.toHierarchy`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM`