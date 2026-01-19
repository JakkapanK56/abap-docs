---
title: "ABENCDS_67699033-_ANNO"
description: |
  ABENCDS_67699033-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_67699033-_ANNO.htm"
abapFile: "ABENCDS_67699033-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "67699033", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

The annotation `AbapCatalog.dataMaintenance` defines whether the CDS object can be displayed or maintained by certain tools such as Data Preview in [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). The annotation is evaluated by these tools. Restrictions imposed by that annotation are user-independent and they are evaluated before accessing the data. Additional restrictions imposed by [CDS roles](ABENCDS_ROLE_GLOSRY.html) are evaluated during the actual data access, if this is done by ABAP SQL.

Technical settings of a CDS entity.

Can be used to restrict data preview for a CDS object by specifying one of the allowed Enum values.

If the annotation is not specified, the value `#RESTRICTED` is used.

Data preview is allowed.

Data preview not allowed.

Data preview allowed with restrictions.

Data preview is allowed as display only.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.dataMaintenance`\\ **Scope** `#HIERARCHY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#ALLOWED, #DISPLAY_ONLY, #NOT_ALLOWED, #RESTRICTED`\\ **Default** `#RESTRICTED`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`