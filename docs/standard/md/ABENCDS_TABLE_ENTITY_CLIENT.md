---
title: "ABENCDS_TABLE_ENTITY_CLIENT"
description: |
  ABENCDS_TABLE_ENTITY_CLIENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TABLE_ENTITY_CLIENT.htm"
abapFile: "ABENCDS_TABLE_ENTITY_CLIENT.html"
keywords: ["select", "if", "class", "data", "ABENCDS", "TABLE", "ENTITY", "CLIENT"]
---

The [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ `[ClientHandling.type](ABENCDS_613831553_ANNO.html)` is used to define the [client dependency](ABENCLIENT_DEPENDENCY_GLOSRY.html) for a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html).

The value `#INHERITED` is not permitted for table entities.

If a table entity is declared as client-dependent, client handling takes place implicitly. The table is generated with a client column on the SAP HANA database. This client column is the first component of the primary key, if the table entity defines a primary key.

During read access using ABAP SQL, an implicit filter condition that filters the result set to the current session client is added.

During write access using ABAP SQL, the client column is implicitly set to the value of the current session client.

It is not allowed to explicitly define a client field in the `SELECT` list. The built-in type `abap.clnt` is forbidden, as well as the field name `CLIENT`.

Table entities are [client-safe](ABENCLIENT_SAFE_GLOSRY.html) by default.

The following CDS table entity is declared as client-dependent.

For this table entity, the following SQL statement is sent to the SAP HANA database:

A client column is added and it is also included in the primary key.

Client field:

Filter condition:

The following CDS table entity is declared as client-dependent.

The addition [`EXPOSE CLIENT`](ABAPSELECT_CLIENT.html) can be used to add a client column with the client ID to the result set.

Depending on the data set, the result might look as follows. The first column contains the value of the client field.

-   The value `#CLIENT_DEPENDENT` declares a table entity as [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html).
-   The value `#CLIENT_INDEPENDENT` declares a table entity as [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html).

-   The addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) of the statement [`SELECT`](ABAPSELECT.html) for switching [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) can be used to set the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VAR_BUILTIN_V2.html) to another value during the access to a CDS table entity. This is only possible for table entities that cannot be connected to [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   The optional addition [`EXPOSE CLIENT`](ABAPSELECT_CLIENT.html) can be used to add a client column with the client ID to the result set. It can be used for client-dependent table entities to access and process the implicitly added client column.
-   The optional addition [`DECLARE CLIENT`](ABAPSELECT_DECLARE_CLIENT.html) can be used for client-independent table entities to declare the table entity as client-dependent for the current read access.

@EndUserText.label: 'Demo: CDS table entity'\\n@ClientHandling.type: #CLIENT\_DEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine table entity demo\_cds\_table\_entity\\n\\{\\n key key\_field : abap.int8;\\n char\_field\_not\_null : abap.char(20);\\n char\_field\_null : abap.char(10) null;\\n numc\_field : abap.numc(10);\\n string\_field : abap.string null;\\n decimal\_field : demo\_occ;\\n decfloat\_field : abap.decfloat34;\\n timestamp\_field : abap.utcl;\\n enum\_field : DEMO\_CDS\_ENUM\_CHAR;\\n\\}\\n "CLIENT" NVARCHAR(000003) DEFAULT '000' NOT NULL ALTER TABLE "SAPUIA"."DEMO\_CDS\_TABLE\_ENTITY" ADD CONSTRAINT \\n"DEMO\_CDS\_TABLE\_ENTITY~0" PRIMARY KEY ( \\n "CLIENT", \\n "KEY\_FIELD" @ClientHandling.type: #CLIENT\_DEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\n@EndUserText.label: 'CDS table entity, composition'\\ndefine root table entity DEMO\_CDS\_TE\_COMPOS\_1\\n\\{\\n key key\_el : abap.int4;\\n col1 : abap.char(1);\\n \_to\_child: composition of exact one to many DEMO\_CDS\_TE\_TO\_PARENT\_1;\\n\\n\\}\\n SELECT \* \\n FROM demo\_cds\_te\_compos\_1 \\n EXPOSE CLIENT AS clnt\_col \\n USING ALL CLIENTS INTO TABLE @FINAL(result). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_entities.html