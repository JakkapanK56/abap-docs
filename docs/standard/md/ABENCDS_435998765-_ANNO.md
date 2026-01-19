---
title: "ABENCDS_435998765-_ANNO"
description: |
  ABENCDS_435998765-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_435998765-_ANNO.htm"
abapFile: "ABENCDS_435998765-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "435998765", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

ODM Annotations allow specifying entities and their elements to make them ODM compliant accordingly to ODM Compliance rules.

The named field is an OID (ODM identifier), and it uniquely identifies an ODM root entity in a customer landscape. The recommendation is to call the field oid, but that is not always possible. An object may have other IDs, i.e. a local ID and other alternative IDs. This is the ID used for ODM. The annotation @ODM.oid names the attribute of OID.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `ODM.oid`\\ **Scope** `#ENTITY`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_odm\_f.html