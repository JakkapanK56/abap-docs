---
title: "ABENCDS_984551930-_ANNO"
description: |
  ABENCDS_984551930-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_984551930-_ANNO.htm"
abapFile: "ABENCDS_984551930-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "984551930", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Defines the assignment of a CDS role to users in a role definition of CDS DCL.

`true`: The role is assigned to all users regardless of the client. The access rules are defined by access conditions, which are usually user-specific.

`false`: This value cannot be used.

If the annotation is not specified, the value `false` would be used.

The CDS access control must be assigned to the users of the system. Currently, the only possibiltiy is to assign it to all users. Thats why 'false' is not supported and it is mandatory to specify `@MappingRole: true` in front of `DEFINE ROLE`. Otherwise, a syntax error occurs.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `MappingRole`\\ **Scope** `#ROLE`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`