---
title: "ABENEML"
description: |
  ABENEML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEML.htm"
abapFile: "ABENEML.html"
keywords: ["select", "do", "if", "data", "internal-table", "ABENEML"]
---

The [ABAP Entity Manipulation Language (EML)](ABENAEML_GLOSRY.html) is a subset of ABAP for accessing RAP business objects (RAP BOs) and RAP BO interfaces. EML statements allow the data content of a RAP BO (transactional buffer) to be read or modified and the persistent storage of modified data to be triggered.

ABAP EML can be used in all ABAP programs to consume RAP BOs. In particular, they can be used in the implementation of a RAP BO in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) itself. For the latter there are some special [EML variants](ABENEML_IN_ABP.html).

The execution of an EML statement triggers processes in the [RAP runtime framework](ABENRAP_RUNT_FRAMEWORK_GLOSRY.html) that call the implementation of the RAP BOs. For [unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html) or unmanaged parts of [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) the implementation is part of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). Otherwise, it is part of the RAP provider framework.

The operands of EML statements are primarily special messenger tables, user for transmitting data to RAP BOs and receiving results or messages from them. These messenger tables are internal tables whose line type is designed for this purpose.

The following topics are covered in this section:

When implementing RAP operations, ensure that you comply with [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](ABAPRAP_IMPL_RULES.html).

-   [ABAP EML - Common EML Statements and Operands](ABAPCOMMON_EML_ELEMENTS.html)
-   [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html)
-   [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html)
-   [`MODIFY ENTITY`, `ENTITIES`](ABAPMODIFY_ENTITY_ENTITIES.html)
-   [`READ ENTITY`, `ENTITIES`](ABAPREAD_ENTITY_ENTITIES.html)
-   [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html)
-   [`SET LOCKS`](ABAPSET_LOCKS.html)

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html