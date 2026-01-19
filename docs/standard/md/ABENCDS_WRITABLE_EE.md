---
title: "ABENCDS_WRITABLE_EE"
description: |
  ABENCDS_WRITABLE_EE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_WRITABLE_EE.htm"
abapFile: "ABENCDS_WRITABLE_EE.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "ABENCDS", "WRITABLE"]
---

`... WRITABLE ...`

The addition `WRITABLE` defines a [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) as [writable](ABENWRITABLE_EE_GLOSRY.html). Writable external entities allow modifying data on external database systems using ABAP SQL [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html) operations. Only [dynamic external entities](ABENCDS_DYNAMIC_EE_GLOSRY.html) can be defined as writable.

As a prerequisite, the CDS external entity must have exactly the same [primary key](ABENPRIMARY_KEY_GLOSRY.html) as the remote object.

The database connection is managed using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) that is created using the method `WRITE_ENABLED_4_LOGICAL_SCHEMA` of the system class `CL_ABAP_SQL_CONNECTION_BUILDER`. This connection object enables write access on [dynamic external entities](ABENCDS_DYNAMIC_EE_GLOSRY.html). The following rules apply to the connection object:

For further details on ABAP SQL connection objects, see the topic [`IF_ABAP_SQL_CONNECTION`, ABAP SQL Connection Object](ABENIF_ABAP_SQL_CONNECTION.html).

For write access, a connection object that is write-enabled for a specific logical external schema must be specified using the addition [`CONNECTION`](ABAPIUMD_CONN.html).

The following external entity is defined as writable. It represents the remote database object `WRITABLE_EE`.

The logical external schema `DEMO_CDS_LES_WRITE_ACCESS` specifies the connection details to connect to an external system.

The ABAP SQL connection object that enables write access is generated as follows. The name of the [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) is *R/3\*service* and the connection object write enables the logical external schema `DEMO_CDS_LES_WRITE_ACCESS`.

To perform write operations on the remote object, a logical external schema must be specified using a [`PROVIDED BY`](ABAPSELECT_DATA_SOURCE.html) clause. The ABAP SQL connection object for the same logical external schema must be specified after [`CONNECTION`](ABAPIUMD_CONN.html). The changes are committed using a database commit for the specified database connection using [`COMMIT CONNECTION @con_ref`](ABAPCOMMIT_ROLLBACK_CONNECTION.html).

The following code snippet demonstrates how to delete data of the remote object using ABAP SQL.

**Note** For the query to work, the CDS logical external schema must have a configuration for the current client in your local system. Otherwise, a runtime error occurs.

-   It represents a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) to an external database system.
-   When instantiating the connection object, a name for the service connection must be defined. This name must start with *R/3\**.
-   A connection object can be write-enabled for exactly one [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html). When instantiating the connection object, the name of the logical external schema that is to be write enabled must be specified.

-   [Writable External Entities](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/51854921f45148f8bb4157fe8e16af48?version=sap_cross_product_abap) - ABAP Data Models guide (SAP Help Portal)

@EndUserText.label: 'Demo CDS external entity' \\ndefine writable external entity DEMO\_CDS\_EXTERNAL\_ENTITY\_WRITE \\n external name "WRITABLE\_EE" \\n\\{ \\n key SYSID : abap.char(3) external name "K\_SYSID"; \\n F\_INT1 : abap.int1; \\n F\_NUMC : abap.numc(10); \\n\\} \\nwith federated data \\nprovided at runtime FINAL(lo\_con) = \\n cl\_abap\_sql\_connection\_builder=>write\_enabled\_4\_logical\_schema( \\n i\_connection\_name = 'R/3\*service' \\n i\_logical\_schema\_name = 'DEMO\_CDS\_LES\_WRITE\_ACCESS' )->create( ). "Delete \\nDELETE FROM demo\_cds\_external\_entity\_write \\n PROVIDED BY demo\_cds\_les\_write\_access \\n CONNECTION @lo\_con. \\nCOMMIT CONNECTION @lo\_con. abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_external\_entity.html abencds\_define\_external\_entity.html