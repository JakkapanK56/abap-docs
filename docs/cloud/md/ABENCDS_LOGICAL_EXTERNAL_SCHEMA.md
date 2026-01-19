---
title: "ABENCDS_LOGICAL_EXTERNAL_SCHEMA"
description: |
  ABENCDS_LOGICAL_EXTERNAL_SCHEMA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_LOGICAL_EXTERNAL_SCHEMA.htm"
abapFile: "ABENCDS_LOGICAL_EXTERNAL_SCHEMA.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "LOGICAL", "EXTERNAL", "SCHEMA"]
---

A [CDS logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) is a transportable [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that is defined in a form-based tool in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). It maps one or more [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) to a specific physical external system or database, and to a specific [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) in such a remote system. A logical external schema must be created, activated, and configured to enable a remote connection. A logical external schema can have one or more configurations. Each configuration refers to exactly one client. A logical external schema configuration triggers the creation of an [SAP HANA remote source](ABENSAP_HANA_REMOTE_SOURCE_GLOSRY.html) ad hoc at runtime when an external entity with a specific logical external schema is accessed. The configuration specifies the connection details required by the [SAP HANA remote source](ABENSAP_HANA_REMOTE_SOURCE_GLOSRY.html) to connect to an external system.

A logical external schema can be bound to one or more external entities. For dynamic external entities, the binding is done using the addition [`PROVIDED BY`](ABAPSELECT_DATA_SOURCE.html) in ABAP SQL when accessing the external entity. Static external entities specify a logical external schema in their data definition using the addition [`PROVIDED BY logical_external_schema`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html).

A logical external schema can have one or more configurations, one per client.

In [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), a logical external schema must be included as an outbound service in a communication scenario in addition to the configuration.

-   In [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), the configuration of a logical external schema is done in the `Communication Arrangement` SAP Fiori application.
-   You can create, activate, and transport an external entity and a logical external schema without any configuration. However, data transfer only works if there is a valid configuration.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_external\_entity.html