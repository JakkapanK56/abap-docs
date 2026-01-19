---
title: "ABENORGANIZATION_OF_MODULES"
description: |
  ABENORGANIZATION_OF_MODULES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENORGANIZATION_OF_MODULES.htm"
abapFile: "ABENORGANIZATION_OF_MODULES.html"
keywords: ["update", "do", "if", "case", "data", "types", "ABENORGANIZATION", "MODULES"]
---

ABAP programs are executed on the [Application Server ABAP (AS ABAP)](ABENAS_ABAP_GLOSRY.html) of an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html). The figure below shows a highly simplified representation of the AS ABAP as part of an ABAP system.

The [AS ABAP](ABENAS_ABAP_GLOSRY.html) represents the application layer of the ABAP system. The AS ABAP is identified by a [system ID](ABENSYSTEM_ID_GLOSRY.html), which is also the name of the entire ABAP system. Users can log on to the AS ABAP using a [user name](ABENUSER_NAME_GLOSRY.html). The most important components of an AS ABAP for ABAP program execution are:

For more information, see [Application Server Infrastructure - ABAP](https://help.sap.com/docs/ABAP_PLATFORM_NEW/7bbf03267f654b5cb06a8bf78f61fca1/797de8aa42e24916953c4bb3d983662d).

ABAP program execution is organized in [sessions](ABENSESSION_GLOSRY.html), which can access different memory areas:

In general, the execution of an ABAP program is triggered by a call or by handling an event from outside the application server. Typical calls or events are:

Furthermore, the execution of an ABAP program can be triggered by the AS ABAP itself, as it the case for scheduled job executions in [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html).

-   **AS instance**
-   The actual ABAP program execution takes place in [AS instances (application server instances)](ABENAS_INSTANCE_GLOSRY.html). One or more AS instances can be instantiated for an AS ABAP. Multiple AS instances are usually distributed across several [host computers](ABENHOST_COMPUTER_GLOSRY.html). The AS instances communicate with each other using a [message server](ABENMESSAGE_SERVER_GLOSRY.html) that exists only once for each AS ABAP.
-   **Work processes**
-   Each AS instance has [work processes](ABENWORK_PROCESS_GLOSRY.html) to execute ABAP programs. There are different types of work processes for different applications: dialog, enqueue, background, spool, and update work processes. For the entire runtime of an AS instance, each work process is logged on to the [standard database](ABENSTANDARD_DB_GLOSRY.html) of the [AS ABAP](ABENAS_ABAP_GLOSRY.html) as a [database user](ABENDATABASE_USER_GLOSRY.html) using a [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html). This user is assigned the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) that represents the [database layer](ABENDATABASE_LAYER_GLOSRY.html) of an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html). The ABAP database schema stores both [system programs](ABENSYSTEM_PROGRAM_GLOSRY.html) and [system tables](ABENSYSTEM_TABLE_GLOSRY.html), as well as [application programs](ABENAPPLICATION_PROGRAM_GLOSRY.html) and [application tables](ABENAPPLICATION_TABLE_GLOSRY.html).
-   **Communication components**
-   The communication components connect the AS instances to the [presentation layer](ABENPRESENTATION_LAYER_GLOSRY.html) of the [ABAP system](ABENABAP_SYSTEM_GLOSRY.html), or to other systems that themselves can be another AS ABAP or external systems. Examples of communication components are:

-   The [ICM](ABENICM_GLOSRY.html) for linking to browser-based [user interfaces](ABENUSER_INTERFACE_GLOSRY.html) ([SAPUI5](ABENSAPUI5_GLOSRY.html), [Web Dynpro](ABENWEB_DYNPRO_GLOSRY.html)) and to the Internet.
-   The [RFC interface](ABENRFC_INTERFACE_GLOSRY.html) for linking to other systems.
-   A dispatcher for linking to [SAP GUI](ABENSAP_GUI_GLOSRY.html).

-   There are different protocols for communication, such as HTTP, HTTPS, TCP, or SAP's RFC protocol.

-   [Sessions and Memory Areas](ABENMEMORY_ORGANIZATION.html)
-   [User Sessions](ABENUSER_SESSIONS.html)
-   [Programs in the Internal Session](ABENINTERNAL_SESSION.html)

-   Dialog requests from an UI

-   Via ICM/ICF for Web UIs
-   Via dialog dispatcher for SAP GUI

-   Remote calls from other systems

-   Via ICF/ICM for internet request
-   Via RFC for remote calls

abenabap.html abenabap\_reference.html abenabap\_oview.html