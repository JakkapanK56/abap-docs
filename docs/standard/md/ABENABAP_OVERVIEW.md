---
title: "ABENABAP_OVERVIEW"
description: |
  ABENABAP_OVERVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_OVERVIEW.htm"
abapFile: "ABENABAP_OVERVIEW.html"
keywords: ["if", "class", "data", "types", "internal-table", "ABENABAP", "OVERVIEW"]
---

ABAP is a programming language developed by SAP for the development of business applications with an [ABAP development environment (ABAP DE)](ABENABAP_DEV_ENVIR_GLOSRY.html).

ABAP is the programming interface of the [Application Server ABAP](ABENAS_ABAP_GLOSRY.html) (AS ABAP) of an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html).

AS ABAP also has the following communication components:

The essential role of ABAP programs on the AS ABAP involves the processing and formatting of data from the database layer and its transfer to or the receipt of input from the presentation layer or the communication components.

For more information about the organization of ABAP programs on the AS ABAP, see [ABAP Programs in AS ABAP](ABENORGANIZATION_OF_MODULES.html).

ABAP supports the following:

Both models are interoperable.

[ABAP Objects](ABENABAP_OBJECTS.html) is the recommended approach for both new projects and the redesign of existing projects.

One of the fundamental properties of ABAP as a programming language for business applications is the access to database tables that is fully integrated into the language.

ABAP is a 4GL language developed specifically for the mass processing of data in business applications and, in addition to integrated database access, has the following characteristics when compared with the elementary languages in which such functions are usually stored in libraries:

The integration of such functions into the language is particularly beneficial for static checks and performance of programs. In return, this means that ABAP also contains considerably more language elements than an elementary programming language.

ABAP programs can be programmed as fully language-independent by removing language-specific program parts from the source code and then reloading them during program execution in accordance with the language environment. A [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) determines the exact program behavior at runtime, for example the order in which text is sorted.

-   Before the ABAP programming language can be used, an AS ABAP must be installed as the [application layer](ABENAPPLICATION_LAYER_GLOSRY.html) of an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html). The AS ABAP provides the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) in which ABAP programs are executed independently of the actual [host computer](ABENHOST_COMPUTER_GLOSRY.html).
-   AS ABAP must be connected to a [database layer](ABENDATABASE_LAYER_GLOSRY.html) or to a [database system](ABENDATABASE_SYSTEM_GLOSRY.html) where its central dataset is stored in a [standard database](ABENSTANDARD_DB_GLOSRY.html).
-   UI-based access requires a [presentation layer](ABENPRESENTATION_LAYER_GLOSRY.html) that displays the AS ABAP user interface (in [SAP GUI](ABENSAP_GUI_GLOSRY.html) or a Web browser).

-   [RFC Interface](ABENRFC_INTERFACE_GLOSRY.html)
-   This is the classic functional interface of AS ABAP. A remote function call is a call of a function in a system other than the one in which the calling program is running. Calls are possible between different AS ABAP or between an AS ABAP and an external system. On an AS ABAP, the functions are implemented using function modules. In external systems, specially programmed functions are called whose interface simulates a function module.
-   [Internet Communication Manager (ICM)](ABENINTERNET_CON_MAN_GLOSRY.html)
-   The Internet Communication Manager (ICM) is a process of the AS ABAP that allows it to communicate directly with the Internet using HTTP, HTTPS, or SMTP. The ICM is used to connect Web-based presentation components such as [SAPUI5](ABENSAPUI5_GLOSRY.html), [Web Dynpro ABAP](ABENWEB_DYNPRO_GLOSRY.html), and [BSP](ABENBSP_GLOSRY.html). The ICM also allows the use of the AS ABAP as a client and as a server for Web services. The ICM is accessed from ABAP programs using the classes and interfaces of the [Internet Communication Framework](ABENINTERNET_CON_FRA_GLOSRY.html) (ICF).
-   [ABAP Channels](ABENABAP_CHANNEL_GLOSRY.html)
-   ABAP Channels are a framework for event-based communication between AS instances and the Internet. [ABAP Messaging Channels (AMC)](ABENABAP_MESSAGING_CHANNELS_GLOSRY.html) are used to exchange messages between ABAP programs on different AS instances, whereas [ABAP Push Channels (APC)](ABENABAP_PUSH_CHANNELS_GLOSRY.html) enable bidirectional communication between an AS ABAP and the Internet using the WebSocket protocol or the TCP socket protocol.

-   An object-oriented programming model that is based on [classes](ABENCLASS_GLOSRY.html) and [interfaces](ABENOO_INTF_GLOSRY.html) of [ABAP Objects](ABENABAP_OBJECTS_GLOSRY.html).
-   A procedural programming model that is based on [function modules](ABENFUNCTION_MODULE_GLOSRY.html) and [subroutines](ABENSUBROUTINE_GLOSRY.html)

-   Data modeling
-   ABAP data modeling makes it possible to create data models for business applications that are defined on the database:

-   The [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) is a persistent repository for data types and their relationships that are visible and can be used in all other development objects. The ABAP Dictionary manages the database tables, views, and lock objects of the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html).
-   The [ABAP Core Data Services](ABENABAP_CORE_DATA_SERVICES_GLOSRY.html) implement the SAP CDS concept for the AS ABAP. A platform-independent [CDS DDL](ABENCDS_DDL_GLOSRY.html) and [CDS DCL](ABENCDS_DCL_GLOSRY.html) make it possible to define [CDS entities](ABENCDS_ENTITY_GLOSRY.html) such as [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), and associated [CDS roles](ABENCDS_ROLE_GLOSRY.html) and their semantic enrichment.

-   Database access
-   Access to data in database tables is fully integrated in ABAP:

-   [ABAP SQL](ABENABAP_SQL_GLOSRY.html) makes it possible to access the database objects defined in the ABAP Dictionary or in ABAP CDS with implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html). This access is platform-independent and integrated into the language. The performance can be optimized by using the [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) integrated into the ABAP runtime framework.
-   [AMDP](ABENAMDP_GLOSRY.html) can be used to manage and call database procedures and database functions of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).
-   [Native SQL](ABENNATIVE_SQL_GLOSRY.html) enables platform-dependent access to databases. [ADBC](ABENADBC_GLOSRY.html) enables a general class-based access to all databases.

-   [Internal tables](ABENINTERNAL_TABLE_GLOSRY.html) for the dynamic storage and processing of tabular mass data in the working memory.
-   An [LUW concept](ABENLUW_GLOSRY.html) integrated into the ABAP runtime framework that allows many users to access the [standard database](ABENSTANDARD_DB_GLOSRY.html) simultaneously.
-   An integrated interface of the language to other programming environments using [Remote Function Call](ABENREMOTE_FUNCTION_CALL_GLOSRY.html).
-   An integrated interface of the language to [XML](ABENXML_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_oview.html