---
title: "ABENCDS_828976635-_ANNO"
description: |
  ABENCDS_828976635-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_828976635-_ANNO.htm"
abapFile: "ABENCDS_828976635-_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "828976635", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

The [framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ [`@Consumption.dbHints`](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html) replaces the [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ [`@AbapCatalog.dbHints`](ABENCDS_ANNOTATIONS_ABAP_TABLES.html) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as SADL and not by the ABAP runtime framework.

There is a syntax check that checks the value of the annotation against a list of allowed values.

**SAP-internal Hint** The ABAP class `CL_SADL_GW_CDS_DBHINT` lists the database hints that are allowed as values for this annotation.

Technical settings of a CDS entity.

**Obsolete:** Specifiactions for database hints.

Replaced by @Consumption.dbHintsCalculatedBy.

Obsolete: Database hint (evaluated using SADL).

####Annotation Value

Platform-dependent database hint.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.dbHints[ ].hint`\\ **Scope** `#VIEW`\\ **Type** `String(1298)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM`