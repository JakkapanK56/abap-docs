---
title: "ABAPROLLBACK_ENTITIES"
description: |
  ABAPROLLBACK_ENTITIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPROLLBACK_ENTITIES.htm"
abapFile: "ABAPROLLBACK_ENTITIES.html"
keywords: ["select", "delete", "loop", "do", "if", "case", "method", "class", "data", "internal-table", "ABAPROLLBACK", "ENTITIES"]
---

`ROLLBACK ENTITIES.`

Rolls back all changes of the current [RAP transaction](ABENRAP_LUW_GLOSRY.html). This includes data changes (for example, changes stored in the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) by calling the [`cleanup`](ABENSAVER_METHOD_CLEANUP.html) method) and [locks](ABENLOCK_GLOSRY.html). In [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html) scenarios and in [managed](ABENBDL_IMPL_TYPE.html) scenarios that include an [`unmanaged or additional save`](ABENBDL_SAVING.html), the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) must be implemented to perform the above tasks.

The statement does not provide any output parameters, for example, response or result parameters. `ROLLBACK ENTITIES` cannot be called within the RAP BO implementation.

In case of a natively supported RAP scenario (for example, [OData](ABENODATA_GLOSRY.html)), the `ROLLBACK ENTITIES` call is performed by RAP. In other cases, for example, manually implemented services or applications, the `ROLLBACK ENTITIES` call must be done explicitly.

When implementing RAP operations, ensure that you comply with [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](ABAPRAP_IMPL_RULES.html).

The following source code demonstrates the effect of the `ROLLBACK ENTITIES` statements. The instance of the first modify request is saved to the database. The second ABAP EML `MODIFY` statement is followed by a `ROLLBACK ENTITIES` statement that clears the instance data from the transactional buffer. Since there is no data in the transactional buffer to be persisted, the following `COMMIT ENTITIES` statement does not save any data to the database. Consequently, the internal table that is filled by a `SELECT` statement shows the same content for the second internal table as the first internal table.

The class `CL_DEMO_RAP_EML_ROLLBACK_ENTTS` demonstrates the effect of the `ROLLBACK ENTITIES` statement with a managed [RAP BO](ABENRAP_BO_GLOSRY.html). Two modify operations are executed, the one including the creation of data sets only, the other creating and deleting data sets. Each modify operation is [committed](ABAPCOMMIT_ENTITIES.html) separately. The database tables are then emptied and the same operations are carried out again. However, the second modify operation includes the `ROLLBACK ENTITIES` statement which rolls back the modifications that have not yet been saved from the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html). Consequently, the output table does not show the changes.

-   ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.
-   The rollback request triggers the calling of the [`cleanup`](ABENSAVER_METHOD_CLEANUP.html) method that clears the transactional buffer.
-   The rollback request (implicitly) triggers the calling of [`ROLLBACK WORK`](ABAPROLLBACK.html) if the current RAP transaction includes [RAP modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_tab\_root. \\n\\ \\nMODIFY ENTITY demo\_managed\_root \\n CREATE FIELDS ( key\_field data\_field1\_root \\n data\_field2\_root ) \\n WITH VALUE #( ( %cid = 'cid1' \\n key\_field = 1 \\n data\_field1\_root = 'aaa' \\n data\_field2\_root = 'bbb' ) ). \\n\\ \\nCOMMIT ENTITIES. \\n\\ \\nIF sy-subrc = 0. \\n SELECT \* FROM demo\_tab\_root \\n INTO TABLE @FINAL(itab1). \\nENDIF. \\n\\ \\nout->write( itab1 ). \\n\\ \\nMODIFY ENTITY demo\_managed\_root \\n CREATE FIELDS ( key\_field data\_field1\_root \\n data\_field2\_root ) \\n WITH VALUE #( ( %cid = 'cid2' \\n key\_field = 2 \\n data\_field1\_root = 'ccc' \\n data\_field2\_root = 'ddd' ) ). \\n\\ \\nROLLBACK ENTITIES. \\n\\ \\nCOMMIT ENTITIES. \\n\\ \\nIF sy-subrc = 0. \\n SELECT \* FROM demo\_tab\_root \\n INTO TABLE @FINAL(itab2). \\nENDIF. \\n\\ \\nout->write( itab2 ). \\n\\ \\nout->display( ). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html