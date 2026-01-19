---
title: "ABENCDS_102413712-_ANNO"
description: |
  ABENCDS_102413712-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_102413712-_ANNO.htm"
abapFile: "ABENCDS_102413712-_ANNO.html"
keywords: ["do", "if", "case", "data", "ABENCDS", "102413712", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`AccessControl Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap).

Defines access control for a CDS object.

A CDS entity (in the following called aspect entity) used as data source by a self defined aspect must have set this annotation.

The content of the aspect entity has a particular relevance for audits by being used in a self defined aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles. Aspect entities do not specify their data sources and whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To highlight this requirement, however, the aspect entity must have set the following annotations:

@AccessControl.auditing.type

@AccessControl.auditing.specification

If auditing cannot be ensured, the CDS entity cannot be used in a self defined aspect.

The type how auditing is realized for the CDS entity used as data source by a self defined aspect. Currently only the value #CUSTOM is possible.

Auditing of the aspect entity is realized by an individual implementation.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AccessControl.auditing.type`\\ **Scope** `#TABLE_ENTITY`, `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#CUSTOM`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM`