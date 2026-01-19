---
title: "Obsolete name for user memory"
description: |
  SAP namespace Namespace(ABENNAMESPACE_GLOSRY.html) for repository objects(ABENREPOSITORY_OBJECT_GLOSRY.html) created in SAP's own development systems. There are no real restrictions for the names. To avoid namespace conflicts prefix namespace(ABENPREFIX_NAME_SPACE_GLOSRY.html) can be used.
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTECHNO_GLOSSARY.htm"
abapFile: "ABENTECHNO_GLOSSARY.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENTECHNO", "GLOSSARY"]
---

In the following, terms of the [ABAP Glossary](ABENABAP_GLOSSARY.html) are listed, that are relevant for the [ABAP technology](ABENABAP_TECHNO_GLOSRY.html).

**ABAP**

Advanced Business Application Programming. ABAP in the actual sense is the name of the [ABAP language](ABENABALA_GLOSRY.html), but in a broader sense it is also the term for the entire [ABAP technology](ABENABAP_TECHNO_GLOSRY.html) provided for and by an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html).

**ABAP Analytical Engine**

The ABAP Analytical Engine implements the [OLAP](ABENOLAP_GLOSRY.html) concept on [AS ABAP](ABENAS_ABAP_GLOSRY.html). It processes multidimensional data models to be consumed by analytical clients such as SAP Analytics Cloud. Clients communicate with the ABAP Analytical Engine using protocols such as the [InA](ABENINA_GLOSRY.html) protocol. The ABAP Analytical Engine performs calculations either on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) or in the [ABAP language](ABENABALA_GLOSRY.html).

**ABAP Channels**

Framework for event-based communication using messages between [AS instances](ABENAS_INSTANCE_GLOSRY.html) and with the Internet. There are ABAP Messaging Channels (AMC) and ABAP Push Channels (APC).

**ABAP Cloud**

ABAP development model for state-of-the-art, cloud-ready and upgrade-stable solutions. Compared to [classic ABAP](ABENCLASSIC_ABAP_GLOSRY.html), ABAP Cloud uses the [ABAP technology](ABENABAP_TECHNO_GLOSRY.html) with the following restrictions:

The transactional programming model for ABAP Cloud is [RAP](ABENRAP_GLOSRY.html).

ABAP Cloud is supported in all SAP products that are based on ABAP technology. It is fully or partly mandatory in

On the [ABAP Platform](ABENABAP_PLATFORM_GLOSRY.html) of [SAP S/4HANA](ABENSAP_S4HANA_GLOSRY.html) it is available besides classic ABAP.

**ABAP daemon**

Instance of an ABAP daemon class that is automatically regenerated whenever a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) or a message of type `E`, *A*, or *X* results in program termination. A separate ABAP daemon session is created for each ABAP daemon during its instantiation. ABAP daemons react to ABAP daemon events and have access to a special ABAP daemon memory.

The properties of an ABAP daemon are defined in a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that is also called ABAP daemon.

**ABAP daemon class**

Global subclass of `CL_ABAP_DAEMON_EXT_BASE`. The instances of an ABAP daemon class are ABAP daemons created by the ABAP daemon framework, each of which are executed in a separate ABAP daemon session. An ABAP daemon class implements interface methods inherited from the superclass to react to ABAP daemon events.

**ABAP daemon event**

Event in the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) to which an ABAP daemon reacts using the [methods](ABENMETHOD_GLOSRY.html) of the [interface](ABENOO_INTF_GLOSRY.html)\\ `IF_ABAP_DAEMON_EXTENSION`. ABAP daemon events can be raised in ABAP programs or by the ABAP runtime framework.

**ABAP daemon framework**

ADF for short. A framework based on [classes](ABENCLASS_GLOSRY.html) and [interfaces](ABENOO_INTF_GLOSRY.html) for using ABAP daemons. ADF includes APIs both for communication with ABAP daemons in [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) and for handling events using ABAP daemons in ABAP daemon sessions.

**ABAP daemon handle**

ABAP daemon framework object that implements the [interface](ABENOO_INTF_GLOSRY.html)\\ `IF_ABAP_DAEMON_HANDLE`. An ABAP daemon handle enables users to send PCP messages to the daemon using the `SEND` method.

**ABAP daemon manager**

The class `CL_ABAP_DAEMON_CLIENT_MANAGER`. The static methods of the ABAP daemon manager are used to create and use ABAP daemons in [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html).

**ABAP daemon memory**

Part of the user memory in which an ABAP daemon can store data in PCP format. An ABAP daemon can use approximately 1 megabyte of the ABAP daemon memory.

**ABAP daemon processing**

Processing of an ABAP daemon. ABAP daemon processing takes place in a dedicated ABAP daemon session and in non-blocking mode where blocking statements are not allowed.

**ABAP daemon session**

[User session](ABENUSER_SESSION_GLOSRY.html) for ABAP daemon processing. An ABAP daemon session is created by the ABAP daemon framework (ADF) when an ABAP daemon is instantiated.

**ABAP database schema**

[Database schema](ABENDATABASE_SCHEMA_GLOSRY.html) of the [standard database](ABENSTANDARD_DB_GLOSRY.html) assigned to the [database user name](ABENDATABASE_USER_NAME_GLOSRY.html) used for database accesses to an [AS ABAP](ABENAS_ABAP_GLOSRY.html) via the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html). If the standard connection is used, a [work process](ABENWORK_PROCESS_GLOSRY.html) acting as a [database user](ABENDATABASE_USER_GLOSRY.html) accesses the objects of this database schema implicitly. The objects of a database that are managed by the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) and implementations of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) are located in the ABAP database schema. The name of the ABAP database schema of an AS ABAP can be determined using the function module `DB_DBSCHEMA_CURRENT`.

**ABAP Debugger**

Tool used to execute [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) line by line or section by section. This makes it possible to edit the content of [data objects](ABENDATA_OBJECT_GLOSRY.html) and to check the program logic. See also [breakpoint](ABENBREAKPOINT_GLOSRY.html).

**ABAP development environment**

ABAP DE for short. Development environment provided by the [ABAP technology](ABENABAP_TECHNO_GLOSRY.html) for [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) that form ABAP applications. It mainly consists of:

Depending on the programming paradigm [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html) or [classic ABAP](ABENCLASSIC_ABAP_GLOSRY.html), ABAP development environments are either restricted or unrestricted.

The deployment of repository objects is managed by an integrated [Change and Transport System (CTS)](ABENCTS_GLOSRY.html).

**ABAP development tools for Eclipse**

ADT for short. Eclipse-based tools for editing [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) of the [ABAP Repository](ABENABAP_REPOSITORY_GLOSRY.html) and their components. The ADT currently cover a subset of the ABAP Workbench functions. In the case of newer repository objects, sometimes only ADT can be used.

**ABAP Doc**

ABAP Doc is a documentation tool that enables documentation files to be created automatically in HTML format from [ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html). ABAP Doc is based on special [ABAP Doc comments](ABENABAP_DOC_COMMENT_GLOSRY.html).

**ABAP Doc comment**

Special [comment](ABENCOMMENT_GLOSRY.html) consisting of one or more [comment lines](ABENCOMMENT_LINE_GLOSRY.html), each of which is initiated by `"!`. ABAP Doc comments can precede [declarations](ABENDECLARATION_GLOSRY.html) and are used by [ABAP Doc](ABENABAP_DOC_GLOSRY.html) for their documentation.

**ABAP Dump Analysis**

Tool for listing and analyzing [runtime errors](ABENRUNTIME_ERROR_GLOSRY.html) that occurred in [AS ABAP](ABENAS_ABAP_GLOSRY.html) and that can be used to access the affiliated [short dumps](ABENSHORT_DUMP_GLOSRY.html). Called using transaction\\ `ST22`.

**ABAP Editor**

ABAP Workbench tool for creating [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html). It is either called directly using transaction code\\ `SE38` or it is integrated into other tools, such as Object Navigator, Class Builder, or Function Builder.

**ABAP Enhancement Framework**

Framework for [enhancing](ABENENHANCEMENT_GLOSRY.html)\\ [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). The ABAP Enhancement Framework comprises the Enhancement Builder tool of the ABAP Workbench and specific [ABAP statements](ABENENHANCEMENT_FRAMEWORK.html) for enhancing [ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html).

**ABAP environment**

ABAP environment may refer to:

**ABAP for Cloud Development**

[Restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html) with restricted language scope and restricted access to [released APIs](ABENRELEASED_API_GLOSRY.html). In ABAP for Cloud Development, [client isolation](ABENCLIENT_ISOLATION_GLOSRY.html) is enforced. ABAP for Cloud Development is the [ABAP language version](ABENABAP_VERSION_GLOSRY.html) for [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).

**ABAP for Key Users**

[Restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html) with restricted language scope and restricted access to [released APIs](ABENRELEASED_API_GLOSRY.html) for [enhancements](ABENENHANCEMENT_GLOSRY.html) made by key users at dedicated enhancement points. ABAP for Key Users is available in the special enhancement tools for key users.

**ABAP memory**

Memory area within each [ABAP session](ABENABAP_SESSION_GLOSRY.html) that can be accessed jointly by the programs of a call sequence using the statements [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) and [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html), and whose data is persisted for the duration of the top-level transaction of a call sequence.

**ABAP messaging channel**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that defines the properties of AMC communication.

**ABAP Messaging Channels**

AMC for short. Framework for communication between the [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html). Communication is enabled by sending and receiving [data objects](ABENDATA_OBJECT_GLOSRY.html) as messages across the boundaries of an [AS instance](ABENAS_INSTANCE_GLOSRY.html).

**ABAP Platform**

Name for the [ABAP technology](ABENABAP_TECHNO_GLOSRY.html) shipped as a basis of [SAP S/4HANA](ABENSAP_S4HANA_GLOSRY.html) and [SAP S/4HANA Cloud Private Edition](ABENSAP_S4HANA_CPRIV_GLOSRY.html). The release numbering of an ABAP Platform is based on the respective SAP S/4HANA release. An ABAP Platform supports the programming paradigm [classic ABAP](ABENCLASSIC_ABAP_GLOSRY.html) but programming according to the rules of [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html) is also possible and encouraged.

**ABAP programming model for SAP Fiori**

Obsolete programming model for SAP HANA-optimized Fiori apps based on the [AS ABAP](ABENAS_ABAP_GLOSRY.html). Its successor is the [ABAP RESTful Application Programming Model (RAP)](ABENARAP_GLOSRY.html).

**ABAP push channel**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that defines the APC handler class, a node in the ICF service tree, the protocol (Web socket or TCP), an optional subprotocol (PCP), and other properties for an APC server.

**ABAP Push Channels**

APC for short. Framework for bidirectional communication between an [AS ABAP](ABENAS_ABAP_GLOSRY.html) and the Internet using the WebSocket protocol or TCP socket protocol. ABAP Push Channels can be linked with ABAP Messaging Channels.

**ABAP Repository**

Part of the [standard database](ABENSTANDARD_DB_GLOSRY.html) of [AS ABAP](ABENAS_ABAP_GLOSRY.html) that contains client-independent [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). The repository can be searched using the Repository Information System.

**ABAP runtime framework**

Also called ABAP runtime environment. Hardware- and operating system-independent platform (virtual machine) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html). Processes of the ABAP runtime framework control the execution of an ABAP program by calling the [processing blocks](ABENPROCESSING_BLOCK_GLOSRY.html) of the program. [ABAP statements](ABENABAP_STATEMENT_GLOSRY.html) are implemented in the [ABAP kernel](ABENKERNEL_GLOSRY.html) of the ABAP runtime framework. The ABAP runtime framework is provided by the [Application Server ABAP](ABENAS_ABAP_GLOSRY.html) and, therefore, [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) can only be executed in AS ABAP.

**ABAP session**

Instance for a [user session](ABENUSER_SESSION_GLOSRY.html) of an [AS instance](ABENAS_INSTANCE_GLOSRY.html) with the ABAP Memory as a separate memory area. Each GUI window of a user session is linked with its own ABAP session. A maximum of 16 ABAP sessions can be managed by a single user session. An [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) is executed in an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of an ABAP session.

**ABAP system**

[Client-server system](ABENCLIENT_SERVER_SYSTEM_GLOSRY.html) that is based on and provides [ABAP technology](ABENABAP_TECHNO_GLOSRY.html). It consists of:

The name of an ABAP system matches the [system ID](ABENSYSTEM_ID_GLOSRY.html) of its AS ABAP.

**ABAP technology**

The ABAP technology or [ABAP](ABENABAP_GLOSRY.html) for short comprises the entire technology provided for and by an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html) for developing and executing ABAP-based applications. ABAP technology supports the programming paradigms [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html) and [classic ABAP](ABENCLASSIC_ABAP_GLOSRY.html).

**ABAP Test Cockpit**

ATC for short. Framework for executing and evaluating various tests for [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) integrated into ABAP Workbench or [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) and the [Change and Transport System (CTS)](ABENCTS_GLOSRY.html).

**ABAP timer**

A timer for wait times in non-blocking mode integrated into the ABAP runtime framework. An ABAP Timer is started using a timer manager for a given runtime and at the end a timeout event is raised, which can be responded to with a timer handler.

**ABAP timer handler**

[Class](ABENCLASS_GLOSRY.html) that implements the [interface](ABENOO_INTF_GLOSRY.html)\\ `IF_ABAP_TIMER_HANDLER`. The interface method `ON_TIMEOUT` of the timer handler, which is specified with a ABAP Timer Manager when an ABAP Timer is started. It handles the timeout event of the timer.

**ABAP timer manager**

Object of the [class](ABENCLASS_GLOSRY.html)\\ `CL_ABAP_TIMER_MANAGER` that is accessed using the [interface](ABENOO_INTF_GLOSRY.html)\\ `IF_ABAP_TIMER_MANAGER`. A timer manager allows an ABAP Timer to be started and stopped in non-blocking mode. When the timer is started, a runtime and an ABAP Timer handler are defined.

**ABAP Unit**

Test tool integrated into the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) that is used for checking the functions of code units in a program ([unit tests](ABENUNIT_TEST_GLOSRY.html)). Individual tests are implemented as [test methods](ABENTEST_METHOD_GLOSRY.html) of local [test classes](ABENTEST_CLASS_GLOSRY.html) in ABAP programs. The tests of one test class use the same [fixture](ABENFIXTURE_GLOSRY.html). Global test classes can only be used in local test classes. The properties of a test can be specified in the definition of a local test class. Tests of multiple ABAP programs can be combined into [test tasks](ABENTEST_TASK_GLOSRY.html).

**ABAP user**

In the context of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) also user for short.

Once ABAP users have logged on to the AS ABAP and have been authenticated, they can access the functions and objects of the AS ABAP during their [user session](ABENUSER_SESSION_GLOSRY.html) in accordance with their [authorizations](ABENAUTHORIZATION_GLOSRY.html).

**ABAP Workbench**

SAP GUI-based part of an [ABAP development environment](ABENABAP_DEV_ENVIR_GLOSRY.html) for [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) in [ABAP Repository](ABENABAP_REPOSITORY_GLOSRY.html) and their components. Contains tools for processing and managing almost all repository objects. Accessed using either forward navigation, Object Navigator, transaction codes, or SAP Easy Access. Some newer repository objects can only be edited in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html).

**ABAP-managed database object**

[Database object](ABENDB_OBJECT_GLOSRY.html) in the [standard database](ABENSTANDARD_DB_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) that is both managed and used by AS ABAP. Only ABAP should be used to access an ABAP-managed database object.

**ABAP-managed HDI container**

AMHC for short. Special HDI container managed by [AS ABAP](ABENAS_ABAP_GLOSRY.html). An AMHC is created and changed using transaction `SCTS_AMHC`. An AMHC and the contained HDI objects are connected to the [Change and Transport System](ABENCTS_GLOSRY.html) using SAP HANA Transport for ABAP (HTA). When an AMHC is created, a logical HDI container is defined and during its activation a physical HDI container is created in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). The logical HDI container can be a logical schema in an [AMDP macro](ABENAMDP_MACRO_GLOSRY.html) where it represents the [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) of the physical HDI container.

**activatable checkpoint**

[Checkpoint](ABENCHECKPOINT_GLOSRY.html) that is assigned to a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html) using the addition `ID` of the statements [`ASSERT`](ABAPASSERT.html), `BREAK-POINT`, or `LOG-POINT`. The behavior of an activatable checkpoint is controlled by either group-specific or program-specific activation settings, where program-specific settings apply to all activatable checkpoints of a program and overwrite the settings of the relevant checkpoint group.

**activation variant**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that contains activation settings for [activatable checkpoints](ABENACTIVATABLE_CHECKPOINT_GLOSRY.html). An activation variant can contain settings for [checkpoint groups](ABENCHECKPOINT_GROUP_GLOSRY.html) and [compilation units](ABENCOMPILATION_UNIT_GLOSRY.html). Activation variants are created and the activation settings are maintained using transaction\\ `SAAB`.

**additional program group**

[Program group](ABENPROGRAM_GROUP_GLOSRY.html) of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html). Created when a [function pool](ABENFUNCTION_POOL_GLOSRY.html) is loaded into the internal session using an external procedure call or a [class pool](ABENCLASS_POOL_GLOSRY.html) via its global [class](ABENCLASS_GLOSRY.html). The function pool or class pool is the main program of the additional program group. An additional program group and its data remain for the entire duration of the internal session.

**ADF**

*\->*\\ ABAP daemon framework

**AMC**

*\->*\\ ABAP Messaging Channels

**AMDP BAdI**

Special [BAdI](ABENBADI_GLOSRY.html) for [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html). If the associated [AMDP procedure](ABENAMDP_PROCEDURE_GLOSRY.html) is called from a different [AMDP method](ABENAMDP_METHOD_GLOSRY.html), this takes place based on the switch-based rules of the ABAP Enhancement Framework.

**APC**

*\->*\\ ABAP Push Channels

**APC handler class**

[Global class](ABENGLOBAL_CLASS_GLOSRY.html) in which the handling of a query sent to an ABAP push channel in [AS ABAP](ABENAS_ABAP_GLOSRY.html) is implemented. The request is handled as APC processing in a separate APC session.

**APC processing**

Processing of a WebSocket or TCP request using the APC framework in an APC handler class. APC processing takes place in a dedicated APC session. APC processing can be stateless or stateful. Stateful APC processing must take place in non-blocking mode, where blocking statements are forbidden.

**APC server**

Instance of a system that provides services that can be called using APC. An APC server can be a WebSocket server or a TCP server.

**APC session**

[User session](ABENUSER_SESSION_GLOSRY.html) for APC processing. An APC session is opened by the APC framework for the handling of a WebSocket or TCP queries in an APC handler class.

**application client**

[Client](ABENCLIENT_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) used for the processing data of [application tables](ABENAPPLICATION_TABLE_GLOSRY.html) in [application programs](ABENAPPLICATION_PROGRAM_GLOSRY.html).

**application layer**

Software layer of a [client-server system](ABENCLIENT_SERVER_SYSTEM_GLOSRY.html) that contains the application logic. [AS ABAP](ABENAS_ABAP_GLOSRY.html) represents the application layer of an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html) in which [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) are executed.

**Application Server ABAP**

AS ABAP for short. AS ABAP represents the [application layer](ABENAPPLICATION_LAYER_GLOSRY.html) of an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html) in which [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) are executed. It provides the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) and contains communication components such as the RFC interface, Internet Communication Manager (ICM), and ABAP Channels. It supports Internet protocols (HTTP/HTTPS/SMTP, WebSocket protocol, and TCP) and [XML](ABENXML_GLOSRY.html). AS ABAP is implemented from a single message server and one or more [AS instances](ABENAS_INSTANCE_GLOSRY.html). It has a [system ID](ABENSYSTEM_ID_GLOSRY.html) that [ABAP users](ABENABAP_USER_GLOSRY.html) can use to [log on](ABENLOGON_GLOSRY.html) and a dedicated user administration based on a [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html).

**application server instance**

AS instance for short. Component of an [AS ABAP](ABENAS_ABAP_GLOSRY.html). An AS ABAP can be implemented using one or more AS instances, which are usually instantiated on different [host computers](ABENHOST_COMPUTER_GLOSRY.html). However, multiple AS instances of one or more AS ABAP can also be instantiated on the same host computer. Each AS instance has [work processes](ABENWORK_PROCESS_GLOSRY.html) to execute [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html). The memory areas of an AS instance that can be accessed in the ABAP programs are the [shared memory](ABENSHARED_MEMORY_GLOSRY.html), the user memory, the ABAP memory, and the [session memory](ABENROLL_AREA_GLOSRY.html) in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

**ArchiveLink**

Service used to link applications of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) with archived documents.

**archiving**

Storing of spool lists using the ArchiveLink tool. Spool lists stored in the SAP spool system can be archived. During archiving, spool lists passed from the spool system are saved in the same format that was used there.

**archiving parameter**

A parameter that must be passed to a spool request if its data is to be archived using ArchiveLink.

**area**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) used for the managing and storage of shared objects. An area is the template for area instance versions in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html). An identically named area class and any area root class are assigned to each area. Areas are created and managed using transaction\\ `SHMA`.

**area class**

[Final](ABENFINAL_GLOSRY.html) global [class](ABENCLASS_GLOSRY.html) whose instances are used as area handles for shared objects. The [attributes](ABENATTRIBUTE_GLOSRY.html) of the instances of an area class represent the properties of an area. The [methods](ABENMETHOD_GLOSRY.html) of an area class are used to access the area. All area classes are [subclasses](ABENSUBCLASS_GLOSRY.html) of `CL_ABAP_MEMORY_AREA`. When creating areas, area classes of the same name are generated as subclasses of `CL_SHM_AREA`. A special predefined area class is `CL_IMODE_AREA`, whose instance represents the area handle for the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of a program.

**area handle**

Instance of an area class. An area handle allows an ABAP program access to an area instance version in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) and to the shared objects stored there. An area handle is created by the static methods of its area class and is bound to an area instance version. Each bound area handle sets an area lock on the affected area instance version.

**area instance**

Sum of all area instance versions with the same area instance name. An area instance is a unique variant of an area and is divided into versions.

**area instance version**

Variant of an area in the shared objects memory. In an area instance version, shared objects are stored in the form of [anonymous data objects](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) or instances of shared memory-enabled classes, where for every area instance version, there is at least one instance of the root data class of the area. The creation of and access to area instance versions takes place exclusively using area handles. Each area instance version has a name. Area instance versions with the same name form an area instance.

**area lock**

Read lock or change lock (write lock, update lock) on an area instance version in the shared objects memory. Area locks are set by binding area handles to area instance versions.

**area menu**

Tree structure whose nodes can be linked with transaction codes, executable programs, and other area menus. Area menus are maintained using transaction code `SE43` and displayed via SAP Easy Access.

**area root class**

A global shared memory-enabled class that must be assigned to an area when it is defined. A non-empty area instance version contains at least one instance of the area root class as the root object.

**aRFC**

*\->*\\ asynchronous remote function call

**AS ABAP release**

*\->*\\ [ABAP release](ABENABAP_RELEASE_GLOSRY.html)

**AS ABAP system environment**

Current system environment of an [AS ABAP](ABENAS_ABAP_GLOSRY.html), consisting of the operating system of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html), the [database system](ABENDATABASE_SYSTEM_GLOSRY.html), the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html), and the communication interfaces.

**asJSON**

ABAP Serialization JSON. Abbreviation for the [canonical JSON representation](ABENCANONICAL_JSON_REPRESEN_GLOSRY.html) of ABAP data.

**asJSON-XML**

[JSON-XML](ABENJSON_XML_GLOSRY.html) representation of [asJSON](ABENASJSON_GLOSRY.html).

**asXML**

ABAP Serialization XML. Short name for the [canonical XML representation](ABENCANONICAL_XML_REPRESENT_GLOSRY.html) of ABAP data.

**asynchronous Remote Function Call**

aRFC for short. Remote function call that does not wait for the end of processing of the remotely called function.

**asynchronous update**

Update in which update function modules are executed with high priority in the update work process, whereby the calling program does not wait for termination. Asynchronous updates are started by [`COMMIT WORK`](ABAPCOMMIT.html) without the addition `AND WAIT` and are executed in a separate update session.

**ATC**

*\->*\\ [ABAP Test Cockpit](ABENABAP_TEST_COCKPIT_GLOSRY.html)

**authorization**

Entry in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html) as part of an [authorization profile](ABENAUTHORIZATION_PROFILE_GLOSRY.html). An authorization consists of complete or generic values for the [authorization fields](ABENAUTHORIZATION_FIELD_GLOSRY.html) of an [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html). The combination specifies which activities an [ABAP user](ABENABAP_USER_GLOSRY.html) can use to access which data. Authorizations are generated with the profile generator from role management tool (transaction `PFCG`) and can be displayed using transaction code\\ `SU03`.

**authorization assignment**

Creates [authorization profiles](ABENAUTHORIZATION_PROFILE_GLOSRY.html) in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html).

**authorization field**

Smallest unit of an [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html). An authorization field represents either data such as a [key field](ABENKEY_FIELD_GLOSRY.html) of a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) or activities such as reading or changing. Activities are specified as abbreviations that are stored in the DDIC database table `TACT` and in `TACTZ` for customers.

**authorization group**

[Program property](ABENPROGRAM_PROPERTY_GLOSRY.html) that allows the combination of different programs into groups for shared [authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html). The group name is an [authorization field](ABENAUTHORIZATION_FIELD_GLOSRY.html) of the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `S_PROGRAM`, for which an [authorization check](ABENAUTHORIZATION_CHECK_GLOSRY.html) is performed when an executable program is executed using the statement `SUBMIT`. This is done to check whether the current [ABAP user](ABENABAP_USER_GLOSRY.html) is authorized to execute the program. All authorization groups should be stored in the database table `TPGP`.

**authorization object**

A [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that is the basis of [authorizations](ABENAUTHORIZATION_GLOSRY.html). An authorization object consists of up to ten [authorization fields](ABENAUTHORIZATION_FIELD_GLOSRY.html). The combination of authorization fields that represent data and activities is used for [authorization assignments](ABENAUTHORIZATION_ASSIGN_GLOSRY.html) and [authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html). Authorization objects are grouped in authorization object classes. They are maintained using transaction\\ `SU21`.

**authorization profile**

A summary of multiple [authorizations](ABENAUTHORIZATION_GLOSRY.html). An authorization can be assigned to multiple authorization profiles. Entering authorization profiles in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html) assigns [user names](ABENUSER_NAME_GLOSRY.html) to authorizations. Authorization profiles can be generated by the profile generator from role maintenance (transaction `PFCG`) or be displayed using transaction code\\ `SU02`.

**background job**

*\->*\\ background request

**background processing**

Execution of [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) with defined settings in the background, that is, with no on-screen user dialog. In contrast to dialog processing, the execution process is predefined when the program is started. An executable program is scheduled in ABAP Editor or after calling *System -> Services -> Reporting* via the menu *Program -> Execute -> Background* for automatic execution or is called in the background using `SUBMIT VIA JOB`. Background processing takes place in a separate background session and at least one background [work process](ABENWORK_PROCESS_GLOSRY.html) must be configured.

**background processing framework**

The background processing framework (bgPF) is a framework that asynchronously and reliably executes methods of applications that develop background processes. It is based on the background remote function call and supports the inbound scenario. Background processes are executed transactionally and with a service quality of *Exactly Once (EO)*. The bgPF can ensure transactional consistency within the controlled SAP LUW.

**background Remote Function Call**

bgRFC for short. Asynchronous remote function call for which the called RFMs can be executed transactionally and in a predefined call sequence. bgRFC replaces tRFC and qRFC apart from the no-send scenario of qRFC. The latter is replaced by the local data queue (LDQ).

**background request**

Job used to start one or more [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) in background processing. A background request consists of background tasks.

**background session**

[User session](ABENUSER_SESSION_GLOSRY.html) for background processing. A background session is opened when a program is executed using `SUBMIT VIA JOB`.

**background task**

Subunit of a background request.

**BAdI**

Business Add-In, template for [BAdI objects](ABENBADI_OBJECT_GLOSRY.html). A BAdI consists of a [BAdI interface](ABENBADI_INTERFACE_GLOSRY.html), a set of filters, and various settings. BAdIs are the basis for [enhancements](ABENENHANCEMENT_GLOSRY.html), for which [BAdI methods](ABENBADI_METHOD_GLOSRY.html) in [object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html) can be called in ABAP programs, whereby the caller can control which [BAdI implementations](ABENBADI_IMPLEMENTATION_GLOSRY.html) are used by specifying the filter values. BAdIs can also be defined as screen or menu enhancements for dynpros or GUI status. BAdIs are edited as [enhancement spot element definitions](ABENENHANCEMENT_SPOT_DEF_GLOSRY.html) in Enhancement Builder and are in the namespace of the global [classes](ABENCLASS_GLOSRY.html). Their implementations can be switched on and off using the [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html). Furthermore, there are also the classic BAdIs that were processed directly in the BAdI Builder and replaced the function module exits.

**BAdI Builder**

ABAP Workbench tool that can be used to create and maintain [BAdIs](ABENBADI_GLOSRY.html). The BAdI Builder is the BAdI-specific variant of access to the Enhancement Builder. Previously, the BAdI Builder was used exclusively for the maintenance of classic BAdIs. Called using transactions\\ `SE18` (definition) and `SE19` (implementation).

**BAdI class**

Specific global class that is created when a [BAdI](ABENBADI_GLOSRY.html) is defined in the Enhancement Builder and given the name of the BAdI as a [subclass](ABENSUBCLASS_GLOSRY.html) of the [abstract](ABENABSTRACT_GLOSRY.html) global [class](ABENCLASS_GLOSRY.html)\\ `CL_BADI_BASE`. BAdI classes are a part of the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) and, apart from being in the namespace of all global [types](ABENTYPE_GLOSRY.html), they are not visible externally.

**BAdI context object**

[Instance](ABENINSTANCE_GLOSRY.html) of a [class](ABENCLASS_GLOSRY.html) that implements the [tag interface](ABENTAG_INTERFACE_GLOSRY.html)\\ `IF_BADI_CONTEXT`. This tag interface can be implemented by any class. [References](ABENREFERENCE_GLOSRY.html) to BAdI context objects can be used in the statement [`GET BADI`](ABAPGET_BADI.html) to specify a context for [object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html).

**BAdI implementation**

Implementation of a [BAdI](ABENBADI_GLOSRY.html). Multiple BAdI implementations can be assigned to a single BAdI. A BAdI implementation consists of a [BAdI implementation class](ABENBADI_IMPLEMENT_CLASS_GLOSRY.html) and a filter condition that can be used to select the BAdI implementation in the [`GET BADI`](ABAPGET_BADI.html) statement in the [BAdI object](ABENBADI_METHOD_GLOSRY.html). A BAdI implementation is created as an [enhancement implementation element](ABENENHANCEMENT_IMPL_ELEM_GLOSRY.html) as part of an [enhancement](ABENENHANCEMENT_GLOSRY.html) in Enhancement Builder, where it can be marked as a standard implementation. A BAdI implementation can be in the state *active* or *inactive*, which overrides both the [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) setting and the filter condition.

**BAdI implementation class**

Global [class](ABENCLASS_GLOSRY.html) that implements one or more [BAdI interfaces](ABENBADI_INTERFACE_GLOSRY.html) and therefore also their [BAdI methods](ABENBADI_METHOD_GLOSRY.html). BAdI implementation classes are the main components of [BAdI implementations](ABENBADI_IMPLEMENTATION_GLOSRY.html), and their instances act as [object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html) for functional [enhancements](ABENENHANCEMENT_GLOSRY.html) of ABAP programs. A BAdI implementation class that is not part of a BAdI implementation is not linked to an [enhancement implementation](ABENENHANCEMENT_IMPL_GLOSRY.html). The latter can be used, for example, as fallback BAdI implementation classes of [BAdIs](ABENBADI_GLOSRY.html).

**BAdI interface**

A BAdI interface is a global [interface](ABENOO_INTF_GLOSRY.html) that includes the [tag interface](ABENTAG_INTERFACE_GLOSRY.html)\\ `IF_BADI_INTERFACE`. A BAdI interface can be used as part of the definition of one or more [BAdIs](ABENBADI_GLOSRY.html) and may only contain [methods](ABENMETHOD_GLOSRY.html) ([BAdI methods](ABENBADI_METHOD_GLOSRY.html)) and [events](ABENEVENT_GLOSRY.html) but not variable [attributes](ABENATTRIBUTE_GLOSRY.html). Furthermore, a BAdI interface cannot contain any [component interfaces](ABENCOMPONENT_INTERFACE_GLOSRY.html) other than other BAdI interfaces. An interface that includes a BAdI interface is also a BAdI interface.

**BAdI method**

[Method](ABENMETHOD_GLOSRY.html) of a [BAdI interface](ABENBADI_INTERFACE_GLOSRY.html). A BAdI method is implemented in [BAdI implementations](ABENBADI_IMPLEMENTATION_GLOSRY.html) and then called exclusively via the associated BAdI object using [`CALL BADI`](ABAPCALL_BADI.html). If the BAdI interface is part of the definition of a [BAdI](ABENBADI_GLOSRY.html) that is defined for multiple use, the [parameter interface](ABENPARAMETER_INTERFACE_GLOSRY.html) of a BAdI method can only contain [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) and [input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html). If all BAdIs are defined for single use, the interface can also have [output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html) or a [return value](ABENRETURN_VALUE_GLOSRY.html). BAdI methods can define or propagate [exceptions](ABENEXCEPTION_GLOSRY.html), and their implementation can be made [optional](ABAPMETHODS_DEFAULT.html).

**BAdI object**

Instance of a [BAdI](ABENBADI_GLOSRY.html). BAdI objects are addressed exclusively using [BAdI reference variables](ABENBADI_REFERENCE_VARIABLE_GLOSRY.html) in which a [BAdI reference](ABENBADI_REFERENCE_GLOSRY.html) was set using [`GET BADI`](ABAPGET_BADI.html). A BAdI object acts as a handle for the calls of [BAdI methods](ABENBADI_METHOD_GLOSRY.html) and contains references to the [object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html) created based on filter specifications. From a technical point of view, BAdI objects are [instances](ABENINSTANCE_GLOSRY.html) of [BAdI classes](ABENBADI_CLASS_GLOSRY.html).

**BAdI reference**

Reference to a [BAdI object](ABENBADI_OBJECT_GLOSRY.html). BAdI references occur only as content of [BAdI reference variables](ABENBADI_REFERENCE_VARIABLE_GLOSRY.html). Technically, BAdI references are [object references](ABENOBJECT_REFERENCE_GLOSRY.html) to [instances](ABENINSTANCE_GLOSRY.html) of [BAdI classes](ABENBADI_CLASS_GLOSRY.html).

**BAdI reference variable**

Special [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html) that is declared with reference to a [BAdI](ABENBADI_GLOSRY.html) and is used to access the associated [BAdI object](ABENBADI_OBJECT_GLOSRY.html). BAdI reference variables are supplied with a [BAdI reference](ABENBADI_REFERENCE_GLOSRY.html) using [`GET BADI`](ABAPGET_BADI.html) and are only used in [`CALL BADI`](ABAPCALL_BADI.html) to call [BAdI methods](ABENBADI_METHOD_GLOSRY.html). Technically, BAdI reference variables are [class reference variables](ABENCLASS_REFERENCE_VARIABL_GLOSRY.html) of the [static type](ABENSTATIC_TYPE_GLOSRY.html) of a concrete [BAdI](ABENBADI_CLASS_GLOSRY.html) class, or of its abstract superclass `CL_BADI_BASE`.

**BAPI**

*\->*\\ [Business Application Programming Interface](ABENBUSINESS_APP_PROG_INTER_GLOSRY.html)

**basXML**

Binary ABAP Serialization XML. Representation of [asXML](ABENASXML_GLOSRY.html) in [Binary XML](ABENBINARY_XML_GLOSRY.html). basXML is used, among other things, as an RFC protocol with the same name.

**batch input**

Data transfer technique that allows data sets to be transferred automatically to the dynpros of transactions, and thus to [AS ABAP](ABENAS_ABAP_GLOSRY.html). Batch input is controlled by batch input sessions. The processing of batch input sessions in batch input is partly implemented directly in the [ABAP kernel](ABENKERNEL_GLOSRY.html). See also batch input tables.

**batch input session**

A summary of a series of transaction calls including input data and user actions. A batch input session can be used to execute dialog transactions in batch input, whereby some or all of the screens are handled by the session. Batch input sessions are stored persistently and are managed by the batch input administration in transaction `SM35`. See also batch input tables.

**bgPF**

*\->*\\ [Background Processing Framework](ABENBACKROUND_PROCESSING_FW_GLOSRY.html)

**bgRFC**

*\->*\\ Background Remote Function Call

**binary file**

File on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of an [AS instance](ABENAS_INSTANCE_GLOSRY.html) opened using the addition `BINARY` of the statement `OPEN DATASET`. The content of a binary file is read or written without being handled.

**binary XML**

SAP-specific format for the binary storage of [XML](ABENXML_GLOSRY.html) data. In Binary XML, redundant information is suppressed, and [UTF-8](ABENUTF8_GLOSRY.html) encoding is used, which leads to performance benefits when storing and transporting data. In [AS ABAP](ABENAS_ABAP_GLOSRY.html), Binary XML occurs as one of the supported [formats](ABENABAP_SXML_LIB_FORMATS.html) in the [sXML Library](ABENABAP_SXML_LIB.html).

**binary XML**

SAP-specific format for the binary storage of [XML](ABENXML_GLOSRY.html) data. In Binary XML, redundant information is suppressed, and [UTF-8](ABENUTF8_GLOSRY.html) encoding is used, which leads to performance benefits when storing and transporting data. In [AS ABAP](ABENAS_ABAP_GLOSRY.html), Binary XML occurs as one of the supported [formats](ABENABAP_SXML_LIB_FORMATS.html) in the [sXML Library](ABENABAP_SXML_LIB.html).

**BOPF**

*\->*\\ [Business Object Processing Framework](ABENBO_PROCESSING_FW_GLOSRY.html)

**breakpoint**

Stopping point in an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) that when it is reached in dialog processing, is branched into the [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html). Breakpoints with a limited lifespan and a validity related to the current [ABAP user](ABENABAP_USER_GLOSRY.html) can be set interactively in the ABAP Editor or [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html). The statement `BREAK-POINT` can be used to create a breakpoint as an unconditional [checkpoint](ABENCHECKPOINT_GLOSRY.html) with an unlimited lifespan, which is either always active or can be [activated](ABENACTIVATABLE_CHECKPOINT_GLOSRY.html) by assignment to a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html)..

**BSP**

*\->*\\ Business Server Pages

**Business Add-In**

*\->*\\ [BAdI](ABENBADI_GLOSRY.html)

**Business Application Programming Interface**

BAPI for short. A predefined interface to data and processes of an SAP application that is stored in the business object repository with the basic functions *Create Objects*, *Query Object Properties*, and *Change Object Properties*. BAPIs are implemented using remotely called [function modules](ABENFUNCTION_MODULE_GLOSRY.html) with the naming convention `BAPI_business_object_name_method_name` that are not allowed to lead a user dialog.

The BAPI Explorer that lists the function modules for each application is called using the transaction code BAPI.

**Business Function**

`BF` for short. [Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that represents a self-contained (business) function within the scope of the [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html). Multiple business functions are grouped into a Business Function Set. Technically, a business function is a grouping of [switches](ABENSWITCH_GLOSRY.html) that serve the same function. When a business function is activated, the corresponding switches are activated as well. Business functions are created in transaction\\ `SFW2` and switched in transaction `SFW5`.

**Business Function Set**

BFS for short. [Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that groups multiple business functions to form a unit that covers the requirements of an industry solution within the scope of [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html). For each [AS ABAP](ABENAS_ABAP_GLOSRY.html) only one business function set can be activated. Within a business function set, it is ensured that all business functions are compatible with one another. Business function sets are created in transaction\\ `SFW3` and switched in transaction `SFW5`.

**Business Object Processing Framework**

[BOPF](ABENBOPF_GLOSRY.html) for short. An ABAP-based framework that provides a set of generic services and functionalities to create [business objects](ABENBUSINESS_OBJECT_GLOSRY.html) (BOs), such as [CDS-based BOPF BOs](ABENCDS_BOPF_BO_GLOSRY.html).

**Business Server Pages**

User interface of an Internet application of the [Application Server ABAP](ABENAS_ABAP_GLOSRY.html) encoded in HTML. Business Server Pages can include server-side scripts that are written in ABAP. When a script of this type is compiled, a [class](ABENCLASS_GLOSRY.html) is generated in [ABAP Objects](ABENABAP_OBJECTS_GLOSRY.html) whose [methods](ABENMETHOD_GLOSRY.html) implement the functions of the script. This means that all language tools available in ABAP Objects can also be used in Business Server Pages and particularly that the [database](ABENDATABASE_GLOSRY.html) can be accessed using the [ABAP SQL](ABENABAP_SQL_GLOSRY.html). Business Server Pages are created using Web Application Builder.

**business service**

BS for short. A business service makes [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) from [AS ABAP](ABENAS_ABAP_GLOSRY.html) available for consumption outside of AS ABAP. A business service is based on a [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) and a [service binding](ABENSERVICE_BINDING_GLOSRY.html). Different communication protocols are available, such as OData, the [Information Access protocol](ABENINA_PROTOCOL_GLOSRY.html), and [SQL services](ABENABAP_SQL_SERVICES_GLOSRY.html). In the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html), a business service is a [RESTful](ABENRESTFUL_GLOSRY.html) service which can be called by a consumer. See [RAP business service](ABENBUSINESS_SERVICE_GLOSRY.html).

**C0 contract, extend**

[Release contract](ABENRELEASE_CONTRACT_GLOSRY.html) that ensures stability at dedicated extension points to allow for a certain extensibility of repository objects by using enhancement tools.

More information:

**C1 contract, use system-internally**

[Release contract](ABENRELEASE_CONTRACT_GLOSRY.html) that ensures a stable public interface of [released APIs](ABENRELEASED_API_GLOSRY.html) for system-internal use.

**C2 contract, use as remote API**

[Release contract](ABENRELEASE_CONTRACT_GLOSRY.html) that ensures a stable public interface for use as remote API for external consumption.

**C3 contract, manage configuration content**

[Release contract](ABENRELEASE_CONTRACT_GLOSRY.html) that ensures a stable persistence of configuration content that can be used by dedicated APIs.

**C4 contract, use in ABAP-Managed Database Procedures**

[Release contract](ABENRELEASE_CONTRACT_GLOSRY.html) that ensures a stable public interface of [released APIs](ABENRELEASED_API_GLOSRY.html) for use in [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) (AMDP).

**canonical JSON representation**

Format of [JSON](ABENJSON_GLOSRY.html) data that is created during the [serialization](ABENSERIALIZATION_GLOSRY.html) of ABAP data by the [identity transformation](ABENID_TRAFO_GLOSRY.html) and that is a prerequisite for a [deserialization](ABENDESERIALIZATION_GLOSRY.html) using identity transformations. The short name is [asJSON](ABENASJSON_GLOSRY.html).

**canonical XML representation**

Format of [XML](ABENXML_GLOSRY.html) data that is created during the [serialization](ABENSERIALIZATION_GLOSRY.html) of ABAP data with the [identity transformation](ABENID_TRAFO_GLOSRY.html) and that is a prerequisite for a [deserialization](ABENDESERIALIZATION_GLOSRY.html) using identity transformations and is used as an intermediate format when using [XSLT](ABENXSLT_GLOSRY.html) to access ABAP data. The short name is [asXML](ABENASXML_GLOSRY.html); see also [basXML](ABENBASXML_GLOSRY.html)

**CDS-Based Enterprise Search**

The ABAP-CDS-specific version of the [SAP Enterprise Search](ABENSAP_ENTERPRISESEARCH_GLOSRY.html) technology. It is based on [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) in the backend. These view entities are annotated with [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) from the [`EnterpriseSearch`](ABENCDS_ENTERPRISESEARCH_F.html) domain. The annotations define search capabilities and they also trigger the generation of a [CDS-based search connector](ABENCDS_SEARCH_CONNECTOR_GLOSRY.html). CDS-based enterprise search provides enhanced search capabilities in SAP Fiori launchpad.

**Change and Transport System**

Abbreviated to CTS. The Change and Transport System includes all [AS ABAP](ABENAS_ABAP_GLOSRY.html) tools used to manage and transport [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) and other objects between different [AS ABAP](ABENAS_ABAP_GLOSRY.html) systems. A repository object is connected to CTS using its [package](ABENPACKAGE_GLOSRY.html).

**change lock**

Area lock on an area instance version in the shared objects memory. A change lock is either a write lock or an update lock.

**check indicator**

Indicates whether an [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html) is checked by [authorization check](ABENAUTHORIZATION_CHECK_GLOSRY.html) in a certain context, for example a transaction. Check indicators for authorization objects are defined at SAP by the transaction `SU22` and in customer systems by the transaction `SU24`. Check indicators can have the statuses *check* and *do not check*, where *check* is given a proposal status with the values *empty* (not yet set), *yes*, and *no*. The changes made in transaction `SU22` have the role of proposal values in customer systems and can be passed to transaction `SU24` with transaction `SU25`.

**Class Builder**

Tool in ABAP Workbench for used for creating and maintaining global [classes](ABENCLASS_GLOSRY.html). Called using transaction\\ `SE24`.

**class library**

The class library consists of all [global](ABENGLOBAL_TYPE_GLOSRY.html)\\ [object types](ABENOBJECT_TYPE_GLOSRY.html), namely of all [global classes](ABENGLOBAL_CLASS_GLOSRY.html) and [interfaces](ABENGLOBAL_INTERFACE_GLOSRY.html).

**classic ABAP**

ABAP development model for legacy solutions. Classic ABAP is based on the [ABAP technology](ABENABAP_TECHNO_GLOSRY.html) without restrictions regarding [ABAP language versions](ABENABAP_VERSION_GLOSRY.html), usage of tools or access to [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). Classic ABAP is still supported by the [ABAP Platform](ABENABAP_PLATFORM_GLOSRY.html) of [SAP S/4HANA](ABENSAP_S4HANA_GLOSRY.html). See also [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).

**classified API**

An API (for example, methods of classes and interfaces, and function modules) with special classifications. These classifications are typically included as type definitions, start with `IF_ABAP_TX_...` and define specific [transactional contracts](ABENTRANSACTIONAL_CONTRACT_GLOSRY.html). In the context of the [controlled SAP LUW](ABENCONTROLLED_SAP_LUW_GLOSRY.html), the classifications are used to specify that the functionality encapsulated by the API is only used in [transactional phases](ABENTR_PHASE_GLOSRY.html) where allowed.

**client**

Organizational unit of an [AS ABAP](ABENAS_ABAP_GLOSRY.html). For each [logon](ABENLOGON_GLOSRY.html) to AS ABAP, a [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) must be specified. This ID enables a logon to a specific client. The different clients of an AS ABAP have their own [user master records](ABENUSER_MASTER_RECORD_GLOSRY.html) with specific [authorizations](ABENAUTHORIZATION_GLOSRY.html). [Client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) data is kept separate using the [client column](ABENCLIENT_COLUMN_GLOSRY.html) in [application tables](ABENAPPLICATION_TABLE_GLOSRY.html). [Application programs](ABENAPPLICATION_PROGRAM_GLOSRY.html) are generally executed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html). There is also a system client for carrying out system-specific or administrative tasks.

**client ID**

Three-digit ID of a [client](ABENCLIENT_GLOSRY.html) that specifies the [current client](ABENCURRENT_CLIENT_GLOSRY.html) when [logging on](ABENLOGON_GLOSRY.html) to [AS ABAP](ABENAS_ABAP_GLOSRY.html). In [application tables](ABENAPPLICATION_TABLE_GLOSRY.html), [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) data is indicated by the client ID stored in the [client column](ABENCLIENT_COLUMN_GLOSRY.html).

**Code Inspector**

CI for short. Tool for checking [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) in terms of performance, security, syntax, and adherence to naming conventions. Called using transaction code\\ `SCI`.

[**\-> More about**](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ba879a6e2ea04d9bb94c7ccd7cdac446/49205531d0fc14cfe10000000a42189b)

**composite enhancement implementation**

Semantic combination of ([simple](ABENSIMPLE_ENHANCEMENT_IMPL_GLOSRY.html) or other composite) [enhancement implementations](ABENENHANCEMENT_IMPL_GLOSRY.html) with the aim of providing structure.

**composite enhancement spot**

Semantic combination of [simple](ABENSIMPLE_ENHANCEMENT_SPOT_GLOSRY.html) and other composite [enhancement spots](ABENENHANCEMENT_SPOT_GLOSRY.html) with the aim of providing structure.

**conflict resolution**

Term in [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html). A conflict occurs if multiple [enhancement implementation elements](ABENENHANCEMENT_IMPL_ELEM_GLOSRY.html) exist for a single [enhancement option](ABENENHANCEMENT_POINT_GLOSRY.html) for which only one enhancement can be carried out, and when more than one of these enhancement implementation elements are switched on at the same time. Currently, a conflict can occur with the statements `ENHANCEMENT-SECTION` and [`GET BADI`](ABAPGET_BADI.html). To resolve the conflict, the [conflict resolving enhancement implementation](ABENCONFLICT_RESOL_IMPL_GLOSRY.html) with the highest priority is searched among the [enhancement implementations](ABENENHANCEMENT_IMPL_GLOSRY.html) and its enhancement implementation element is then used.

**conflict resolving enhancement implementation**

An [enhancement implementation](ABENENHANCEMENT_IMPL_GLOSRY.html) to which a [conflict switch](ABENCONFLICT_SWITCH_GLOSRY.html) is assigned instead of a regular [switch](ABENSWITCH_GLOSRY.html). A conflict resolving enhancement implementation is used for [conflict resolution](ABENCONFLICT_RESOLUTION_GLOSRY.html). It must mirror the common semantics of all regular enhancement implementations that can potentially be switched on at the same time and which then show conflicts. These enhancement implementations can be determined by assigning switches to the conflict switch. During conflict resolution, a conflict resolving enhancement implementation has priority over regular enhancements. In the event of multiple conflict resolving enhancement implementations exist, the one that resolves the most conflicts takes priority.

**conflict switch**

A special [switch](ABENSWITCH_GLOSRY.html) for [conflict resolution](ABENCONFLICT_RESOLUTION_GLOSRY.html). Multiple regular switches are assigned to a conflict switch. The switch status of a conflict switch is determined by the switch status of the assigned switches: *on* if all assigned switches are *on*, *off* if at least one assigned switch is *off*, and *standby* in all remaining cases. For every combination of [enhancement implementation](ABENENHANCEMENT_IMPL_GLOSRY.html) to which the regular switches of the conflict switch are assigned, a [conflict resolving enhancement implementation](ABENCONFLICT_RESOL_IMPL_GLOSRY.html) must be created to which the conflict switch is assigned.

**Context Builder**

Tool in the ABAP Workbench for editing contexts. Called using transaction\\ `SE33`.

**controlled SAP LUW**

An extension of the [SAP LUW](ABENSAP_LUW_GLOSRY.html) concept. The controlled SAP LUW introduces a checking mechanism to detect transactional consistency violations. The controlled SAP LUW is automatically and implicitly supported by newer ABAP concepts such as [RAP](ABENRAP_GLOSRY.html). In non-RAP transactions, the controlled SAP LUW can be used by explicitly setting transactional phases using the static methods of the [`CL_ABAP_TX`](ABAPRAP_CL_ABAP_TX.html) class. In addition, [released APIs](ABENRELEASED_API_GLOSRY.html) can have special classifications (starting with [`IF_ABAP_TX...`](ABAPAPI_CLASSIFICATION.html)) that enable specific transactional contracts that are checked in the [transactional phases](ABENTR_PHASE_GLOSRY.html).

**Coverage Analyzer**

Tool for recording how often programs or individual [processing blocks](ABENPROCESSING_BLOCK_GLOSRY.html) are executed, classified by time period, [ABAP user](ABENABAP_USER_GLOSRY.html), or subject area. It is called using transaction code\\ `SCOV`.

**cross-transaction application buffer**

Application buffer in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html). ABAP programs access cross-transaction application buffers by specifying [`SHARED BUFFER`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) or [`SHARED MEMORY`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) as the medium with the statements [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) and [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) for [data clusters](ABENDATA_CLUSTER_GLOSRY.html). The difference between the two types lies in the system behavior when the memory limit is reached.

**current client**

The current client of a [user session](ABENUSER_SESSION_GLOSRY.html) is the [client](ABENCLIENT_GLOSRY.html) whose [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) was specified during [logon](ABENLOGON_GLOSRY.html).

**customer exit**

Option provided by SAP for the enhancement of delivered standard programs without modification of the original program in a customer system. For potential customer requirements that are not part of the standard, SAP provides blank containers, which customers can fill with their own functions. Customer exits are managed by SAP in transaction\\ `SMOD`. In transaction `CMOD`, the customers select the enhancement that they want to process, groups them together as enhancement projects, processes the components, and activates the relevant projects. Customer exits are obsolete and have been replaced by [BAdIs](ABENBADI_GLOSRY.html) and other [enhancement points](ABENENHANCEMENT_POINT_GLOSRY.html).

**customer namespace**

Predefined [namespace](ABENNAMESPACE_GLOSRY.html) for [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) created in non-SAP and non-partner development systems. Names have `Y` or `Z` as the first character. These names have to be used in non-SAP and non-partner systems, if no [prefix namespace](ABENPREFIX_NAME_SPACE_GLOSRY.html) is available.

**data aging**

A [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) concept where current data is distinguished from outdated data by entries in a [temperature column](ABENTEMPERATURE_COLUMN_GLOSRY.html). Only current data exists in the memory.

**data area**

Memory area of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) in which data is stored. The data area covers a static area for [data objects](ABENDATA_OBJECT_GLOSRY.html) of fixed length and a dynamic area for data objects of variable length ([data types](ABENDATA_TYPE_GLOSRY.html)\\ [`string`](ABENBUILT_IN_TYPES_COMPLETE.html), [`xstring`](ABENBUILT_IN_TYPES_COMPLETE.html), and [internal tables](ABENINTERNAL_TABLE_GLOSRY.html)). The internal [references](ABENREFERENCE_GLOSRY.html) to the dynamic area are in the static area.

**Data Browser**

Tool of the ABAP Workbench for accessing the content of [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html). Called using transaction\\ `SE16`.

**database**

System for storing and managing data between which logical dependencies exist. The data in the database of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) is stored on the [database server](ABENDATABASE_SERVER_GLOSRY.html) and is managed by the [database system](ABENDATABASE_SYSTEM_GLOSRY.html). See also [relational database](ABENRELATIONAL_DATABASE_GLOSRY.html).

**database commit**

End of a [database LUW](ABENDATABASE_LUW_GLOSRY.html), in which changed data records are written to the [database](ABENDATABASE_GLOSRY.html). All changes are temporary until they have been written using a database commit. Changes are always directly visible to the executing program. The [database system](ABENDATABASE_SYSTEM_GLOSRY.html) that is used determines whether other users can see the database changes immediately or only after the database commit. In [AS ABAP](ABENAS_ABAP_GLOSRY.html), database commits are triggered implicitly, as well as by explicit requests.

**database connection**

Connection of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) to a [database system](ABENDATABASE_SYSTEM_GLOSRY.html). A database connection defines the address of the database system, the [database user](ABENDATABASE_USER_GLOSRY.html), and therefore the [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) assigned to it. By default, the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) accesses the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html) using the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) of the current [work process](ABENWORK_PROCESS_GLOSRY.html). Optionally, database accesses can also be performed using [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) to the standard database. Up to 16 database connections can be opened for a single work process.

**database function**

[SQLScript function](ABENSQL_SCRIPT_FUNCTION_GLOSRY.html) in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). Database functions must have a return value defined with `RETURN`. There are [table functions](ABENTABLE_FUNCTION_GLOSRY.html) with a tabular return value and [scalar functions](ABENSCALAR_FUNCTION_GLOSRY.html) with a scalar return value. Unlike [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html), database functions cannot be called using `CALL`, but can be used directly in read positions of statements. Database functions can be managed as [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) in the [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) (AMDP).

**database interface**

[Interface](ABENINTF_GEN_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) to its [database](ABENDATABASE_GLOSRY.html) that is integrated into the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html). Statements in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and Native SQL access the database using the database interface. The database interface is divided into an [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) and a Native SQL interface. In addition, classic dynpros also access the database using the database interface. \\nThe database interface is responsible for data transport between the AS ABAP and the [database system](ABENDATABASE_SYSTEM_GLOSRY.html), implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html), and [table buffering](ABENTABLE_BUFFERING_GLOSRY.html). The database interface can also be involved in maintaining [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html).

**database layer**

Software layer of a [client-server system](ABENCLIENT_SERVER_SYSTEM_GLOSRY.html) in which [persistent data](ABENRAP_PERSISTENT_DATA_GLOSRY.html) is stored and managed. The [AS ABAP](ABENAS_ABAP_GLOSRY.html) of an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html) is always connected to a database layer in the form of a [database server](ABENDATABASE_SERVER_GLOSRY.html) that contains a [database system](ABENDATABASE_SYSTEM_GLOSRY.html) with the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html).

**database lock**

Physical [locks](ABENLOCK_GLOSRY.html) for rows in [database tables](ABENDATABASE_TABLE_GLOSRY.html), imposed by the [database system](ABENDATABASE_SYSTEM_GLOSRY.html). A database lock persists until the end of the current [database LUW](ABENDATABASE_LUW_GLOSRY.html).

**database LUW**

Also referred to as database transaction. Indivisible sequence of database operations concluded by a [database commit](ABENDATABASE_COMMIT_GLOSRY.html). The database LUW is either executed completely or not at all by the [database system](ABENDATABASE_SYSTEM_GLOSRY.html). If an error is detected within a database LUW, all database changes made since the start of the database LUW can be canceled using a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html).

**database object**

Object saved in a [database](ABENDATABASE_GLOSRY.html), such as a [database table](ABENDATABASE_TABLE_GLOSRY.html), an [SQL view](ABENSQL_VIEW_GLOSRY.html), or a [stored procedure](ABENSTORED_PROCEDURE_GLOSRY.html). [AS ABAP](ABENAS_ABAP_GLOSRY.html) mainly uses [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html).

**database procedure**

General synonym for [stored procedure](ABENSTORED_PROCEDURE_GLOSRY.html). In [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html) it is a name for an [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) programmed in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) or an L procedure programmed in L. Database procedures can be managed as [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) in the [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) (AMDP). See also [database function](ABENDATABASE_FUNCTION_GLOSRY.html).

**database procedure interface**

Global non-modifiable [interface](ABENINTF_GEN_GLOSRY.html) of the [class library](ABENCLASS_LIBRARY_GLOSRY.html) that is generated for each database procedure proxy. For each interface parameter of the represented [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html), a database procedure interface contains the declaration of an [ABAP data type](ABENDATA_TYPE_GLOSRY.html), as defined in the mapping of the database procedure proxy. Programs that use `CALL DATABASE PROCEDURE` to call the SQLScript procedure can refer to the data types of the database procedure interface when declaring the required actual parameters.

**database rollback**

End of a [database LUW](ABENDATABASE_LUW_GLOSRY.html) in which all modifying database operations are undone until the beginning of the LUW. In an [AS ABAP](ABENAS_ABAP_GLOSRY.html), database rollbacks are triggered implicitly, as well as by explicit requests.

**database schema**

A database schema groups [database objects](ABENDB_OBJECT_GLOSRY.html) in a [database](ABENDATABASE_GLOSRY.html). Within a database schema, [SQL](ABENSQL_GLOSRY.html) can be used to access the objects of the same schema directly. [Database users](ABENDATABASE_USER_GLOSRY.html) implicitly access the database schema assigned to their [database user names](ABENDATABASE_USER_NAME_GLOSRY.html). Objects in a different schema can be accessed only by specifying their schema name. Access to a database schema by a database user is regulated by individual authorizations. The objects managed by the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) for a database and the implementations of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) are located in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) that is assigned the database user name when the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) in [AS ABAP](ABENAS_ABAP_GLOSRY.html) is accessed.

**database transaction**

*\->*\\ [database LUW](ABENDATABASE_LUW_GLOSRY.html)

**DBA Cockpit**

Central tool for managing and monitoring [AS ABAP](ABENAS_ABAP_GLOSRY.html)\\ [database connections](ABENDATABASE_CONNECTION_GLOSRY.html). Called using the transaction code\\ `DBACOCKPIT`.

**DDL object**

A [database](ABENDATABASE_GLOSRY.html) artifact that is not managed by the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). It can be used in the context of [AMDP](ABENAMDP_GLOSRY.html). Currently, the following DDL objects can be used with AMDP:

DDL objects can be consumed by other [AMDP methods](ABENAMDP_METHOD_GLOSRY.html).

**deserialization**

Transformation of [XML](ABENXML_GLOSRY.html) data or [JSON](ABENJSON_GLOSRY.html) data to ABAP data objects. Performed either by calling an [XSLT program](ABENXSL_TRANSFORMATION_GLOSRY.html) or a [Simple Transformation](ABENSIMPLE_TRANSFORMATION_GLOSRY.html). If use [XSLT](ABENXSLT_GLOSRY.html) is used, the result of the transformation (in XML) must be a [canonical XML representation](ABENCANONICAL_XML_REPRESENT_GLOSRY.html) (([asXML](ABENASXML_GLOSRY.html)).

**developer extensibility**

An extensibility approach that allows ABAP developers to create upgrade-stable custom ABAP code in cloud and on-premise environments. It delivers flexibility beyond key user extensibility and can be done directly on the software stack using the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html) (ADT) via local [released APIs](ABENRELEASED_API_GLOSRY.html).

One use case for developer extensibility is [RAP extensibility](ABENRAP_EXTENSIBILITY_GLOSRY.html). Using [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), a RAP application can be extended from the database to the service definition directly in ADT with custom ABAP code.

**developer trace**

Trace files on the [host computers](ABENHOST_COMPUTER_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) that contain technical information for use in the event of an error.

**development object**

[*\->* Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html)

**DOM**

Short for Document Object Model. Interface for accessing [XML](ABENXML_GLOSRY.html) documents that are based on an object-oriented tree-like representation of the documents in the memory, where each node is represented by an object. In ABAP, the [iXML Library](ABENABAP_IXML_LIB_CLOUD.html) can be used to process XML documents in DOM representation.

**elementary operand**

An [operand](ABENOPERAND_GLOSRY.html) that is not an [expression](ABENEXP_GLOSRY.html). The value of a elementary operand can be used directly and must not be evaluated.

**embedded Steampunk**

Internal SAP project name for [SAP S/4HANA Cloud ABAP environment](ABENS4_HANA_CLOUD_ABAP_ENV_GLOSRY.html). See also [Steampunk](ABENSTEAMPUNK_GLOSRY.html).

**enhancement**

Addition to a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that is managed by the ABAP Enhancement Framework and changes its behavior without modification. An enhancement can be made by creating [enhancement implementation elements](ABENENHANCEMENT_IMPL_ELEM_GLOSRY.html) for explicitly defined or implicitly available [enhancement options](ABENENHANCEMENT_POINT_GLOSRY.html). Enhancements are switchable using the [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html).

**Enhancement Builder**

Tool in the ABAP Workbench for creating and administering [enhancements](ABENENHANCEMENT_GLOSRY.html) within the enhancement framework.

**enhancement concept**

Concept for enhancing [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) without modifying them. Implemented by the ABAP Enhancement Framework

**enhancement implementation**

A [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) used for the administration of [enhancements](ABENENHANCEMENT_GLOSRY.html) of other repository objects. Enhancement implementations are components of a hierarchical tree structure of which the branches represent [composite](ABENCOMP_ENHANCEMENT_IMPL_GLOSRY.html) enhancement implementations, and the leaves are [simple enhancement implementations](ABENSIMPLE_ENHANCEMENT_IMPL_GLOSRY.html).

**enhancement implementation element**

Individual element of an [enhancement implementation](ABENENHANCEMENT_IMPL_GLOSRY.html). One enhancement implementation can contain multiple enhancement implementation elements, for example, different source code plug-ins.

**Enhancement Information System**

Tool of the ABAP Workbench for the search for [enhancements](ABENENHANCEMENT_GLOSRY.html) made with the ABAP Enhancement Framework. Called in the Object Navigator or via transaction code\\ `SPAU_ENH`.

**enhancement option**

Position in a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that can be enhanced with the ABAP Enhancement Framework. Enhancement options can be explicitly defined or available implicitly. Explicitly defined enhancement options are implemented using [enhancement spot element definitions](ABENENHANCEMENT_SPOT_DEF_GLOSRY.html) and [enhancement spot invocations](ABENENHANCEMENT_SPOT_INVOC_GLOSRY.html) and are administrated using [enhancement spots](ABENENHANCEMENT_SPOT_GLOSRY.html).

**enhancement spot**

A [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) used for the administration of explicitly created [enhancement options](ABENENHANCEMENT_POINT_GLOSRY.html). Enhancement spots are components of a tree structure hierarchy, whose branches represent [composite](ABENCOMP_ENHANCEMENT_SPOT_GLOSRY.html) enhancement spots and whose leaves are [simple enhancement spots](ABENSIMPLE_ENHANCEMENT_SPOT_GLOSRY.html). Enhancement points that are available implicitly do not have enhancement spots.

**enhancement spot element definition**

Part of the definition of an explicit [enhancement option](ABENENHANCEMENT_POINT_GLOSRY.html). An enhancement spot element definition must be assigned to at least one [enhancement spot](ABENENHANCEMENT_SPOT_GLOSRY.html).

**enhancement spot element invocation**

Part of the definition of an explicit [enhancement option](ABENENHANCEMENT_POINT_GLOSRY.html); the calling position of an [enhancement spot element definition](ABENENHANCEMENT_SPOT_DEF_GLOSRY.html). An enhancement spot element definition can be called at multiple positions besides source code enhancements.

**environment code page**

The active [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html) of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html). The current release only supports [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html) and the environment codepage is always [UTF-16](ABENUTF16_GLOSRY.html).

**EPP component ID**

Component of an extended passport (EPP). Contains the [system ID](ABENSYSTEM_ID_GLOSRY.html) and the name of the [application server instance](ABENAS_INSTANCE_GLOSRY.html) of the original [ABAP session](ABENABAP_SESSION_GLOSRY.html).

**EPP connection counter**

Component of an extended passport (EPP). Counts connections between clients and servers with the same EPP connection ID.

**EPP connection ID**

Component of an extended passport (EPP). ID of a connection that is created by calls from [ABAP sessions](ABENABAP_SESSION_GLOSRY.html) or external connections in ABAP sessions.

**EPP precomponent ID**

Component of an extended passport (EPP). Contains the [system ID](ABENSYSTEM_ID_GLOSRY.html) and the name of the [application server instance](ABENAS_INSTANCE_GLOSRY.html) of the [ABAP session](ABENABAP_SESSION_GLOSRY.html) on which the current connection is based.

**EPP root context ID**

Component of an extended passport (EPP). ID of the original [ABAP session](ABENABAP_SESSION_GLOSRY.html).

**EPP transaction ID**

Component of an extended passport (EPP). ID of the current [SAP-LUW](ABENSAP_LUW_GLOSRY.html).

**exclusive lock**

[Lock](ABENLOCK_GLOSRY.html) that does not allow other users to set simultaneous locks for the exclusively locked data. The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements [`INSERT`](ABAPINSERT_DBTAB.html), [`DELETE`](ABAPDELETE_DBTAB.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`UPDATE`](ABAPUPDATE.html), [`SELECT`](ABAPSELECT.html) with the addition [`FOR UPDATE`](ABAPSELECT_SINGLE.html), and all corresponding Native SQL statements or statements in [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) set corresponding [database locks](ABENDATABASE_LOCK_GLOSRY.html) on the rows they address. An exclusive lock is set as an SAP lock by calling a lock function module with the appropriate parameters.

**exit message**

[Message](ABENMESSAGE_GLOSRY.html) of the [message type](ABENMESSAGE_TYPE_GLOSRY.html)\\ *X*. Exit messages create a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) and terminate the running program with the [runtime error](ABENRUNTIME_ERROR_GLOSRY.html)\\ `MESSAGE_TYPE_X`. The short text of the message can be found in the [short dump](ABENSHORT_DUMP_GLOSRY.html).

**extended passport**

EPP for short. Internal data structure that exists for each [ABAP session](ABENABAP_SESSION_GLOSRY.html) and contains information about this session and its external connections.

**extended program check**

Complete check of the [ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html) for all statically recognizable errors. Programs with errors in the extended program check can be executed, but usually result in an [exception](ABENEXCEPTION_GLOSRY.html). Called in the ABAP Editor via *Program -> Check -> Extended Program Check* or via the transaction code\\ `SLIN` or using the [ABAP Test Cockpit](ABENABAP_TEST_COCKPIT_GLOSRY.html). Settings for the extended program check can be made in the administration transaction `SLIN_ADMIN`.

[**\-> More about**](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bd833c8355f34e96a6e83096b38bf192/d1801afd454211d189710000e8322d00)

**fast data access**

FDA for short. Protocol that allows the content of [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) to be passed between the [Application Server ABAP](ABENAS_ABAP_GLOSRY.html) and a [database system](ABENDATABASE_SYSTEM_GLOSRY.html). FDA is supported by the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) and some other platforms. FDA can be switched on and off with database parameters and [database hints](ABENDATABASE_HINT_GLOSRY.html). FDA write access is the prerequisite for [`SELECT, FROM @itab`](ABAPSELECT_ITAB.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html). Depending on settings, FDA is also used for [`SELECT, FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html).

**field exit**

Obsolete customer exit that can be linked with [DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) in customer systems. If a dynpro field is defined with reference to such a data element, a function module named `FIELD_EXIT_dtel` is called during the data transport from the dynpro to the ABAP program at the event PAI. Here, `dtel` is the name of the data element. The value of the dynpro field can be modified in the function module. The function module of a field exit cannot be debugged at present.

**file**

Storage of data under a name in a persistent storage medium. Statements of the ABAP file interface can be used to process files on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of an [AS instance](ABENAS_INSTANCE_GLOSRY.html). For files on the presentation servers, [function modules](ABENFUNCTION_MODULE_GLOSRY.html) or [methods](ABENMETHOD_GLOSRY.html) of a global [class](ABENCLASS_GLOSRY.html) are available. The files of the [database server](ABENDATABASE_SERVER_GLOSRY.html) are part of the [database](ABENDATABASE_GLOSRY.html) and are maintained by the [database system](ABENDATABASE_SYSTEM_GLOSRY.html).

**format setting**

Part of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html) where the formatting for numbers, dates, and times is defined. Defined either by defaults in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html) or by [country-specific formats](ABENCOUNTRY_FORMATS.html).

**full text index**

Specific [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) for text searches. Not supported by [SAP HANA Cloud database](ABENSAP_HANA_CLOUD_DB_GLOSRY.html).

**Function Builder**

ABAP Workbench tool for creating and maintaining [function modules](ABENFUNCTION_MODULE_GLOSRY.html). Called using transaction\\ `SE37`.

**fuzzy search index**

[Index](ABENINDEX_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) that database that provides fast error-tolerant text search, where a query returns records even when the search term contains additional or missing characters or other types of spelling errors. The [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) allows fuzzy search indexes to be created for [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html).

**garbage collector**

Deletes [objects](ABENOBJECT_GLOSRY.html) that are no longer referenced by [heap references](ABENHEAP_REFERENCE_GLOSRY.html) or [field symbols](ABENFIELD_SYMBOL_GLOSRY.html) and for which no method is registered as an [event handler](ABENEVENT_HANDLER_GLOSRY.html). The garbage collector is called periodically by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html). It tracks the [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) of deleted objects. The static method `DO_GARBAGE_COLLECTION` of [system class](ABENSYSTEM_CLASS_GLOSRY.html)\\ `CL_ABAP_MEMORY_UTILITIES` can also be used to call the garbage collector explicitly in system programs. See also [weak reference](ABENWEAK_REFERENCE_GLOSRY.html).

**HDI**

SAP HANA Deployment Infrastructure Framework for deploying HDI objects.

**HDI container**

An HDI container is a [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) for HDI objects. Special ABAP Managed HDI Containers (AMHC) can be created for HDI objects accessed in ABAP.

**HDI object**

Native HDI-managed database object in an HDI container of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

**host computer**

Computer on which the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) is instantiated. The name of the current host computer can be read from the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-host`.

**ICF**

*\->* Internet Communication Framework.

**ICF processing**

Processing of an HTTP/HTTPS query or SMTP query using ICF in an appropriate handler class and in a separate ICF session.

**ICF server**

Instance of a system that provides services that can be called using ICF. An ICF server can be an HTTP/HTTPS server or an SMTP server.

**ICF session**

[User session](ABENUSER_SESSION_GLOSRY.html) for ICF processing. An ICF session is opened by the ICF to process an HTTP/HTTPS query or SMTP query.

**ICM**

*\->* Internet Communication Manager.

**identity transformation**

[XSL transformation](ABENXSL_TRANSFORMATION_GLOSRY.html) called `ID` delivered by SAP for reading or writing the canonical formats [asXML](ABENASXML_GLOSRY.html) and [asJSON](ABENASJSON_GLOSRY.html). Calls of this transformation are handled in special ways internally, depending on the formats involved.

**InA**

[*\->* Information Access Protocol](ABENINA_PROTOCOL_GLOSRY.html).

**Information Access protocol**

[InA](ABENINA_GLOSRY.html) for short. InA is a standardized protocol for defining and consuming multidimensional analytical queries. InA can be specified as a type of [service binding](ABENSERVICE_BINDING_GLOSRY.html) and it is interpreted by the [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html).

**information message**

[Message](ABENMESSAGE_GLOSRY.html) of the [message type](ABENMESSAGE_TYPE_GLOSRY.html)\\ *I*. Information messages are usually displayed in a dialog box.

**Interchange Text Format**

ITF for short. A SAP-specific markup language for system texts maintained in databases `DOKIL`, `DOKHL` and `DOKTL`. System texts written in ITF serve as API documentation for [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) that can be maintained in the ABAP Workbench. ITF is also used by text management tools such as [SAPscript](https://help.sap.com/docs/ABAP_PLATFORM_NEW/872c7db8e8ad411c8c3364aceed6e2c1/4e16389db8294181e10000000a15822b) or the current [ABAP Keyword Documentation](ABENABAP.html). Refer also to [KTD](ABENKTD_GLOSRY.html) for system texts used for documenting repository objects that can be maintained in [ADT](ABENADT_GLOSRY.html) only.

**Internet Communication Framework**

ICF for short. A software layer in [AS ABAP](ABENAS_ABAP_GLOSRY.html) that provides an ABAP interface for HTTP, HTTPS, and SMTP requests. Using the ICF, [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) can communicate with the internet in both the sever and the client role. The ICF receives and sends web-based ABAP calls using the Internet Communication Manager.

**Internet Communication Manager**

ICM for short. A process of [AS ABAP](ABENAS_ABAP_GLOSRY.html) that enables AS ABAP to communicate directly with the Internet using HTTP/HTTPS/SMTP. The `ICM` is used to connect an AS ABAP to web-based presentation components such as [SAPUI5](ABENSAPUI5_GLOSRY.html), Web Dynpro ABAP, and `BSP`. The ICM also enables an AS ABAP to serve both as a client and as a server for Web services. ABAP programs access ICM via classes and interfaces of the Internet Communication Framework.

**iXML Library Classic**

Global [classes](ABENGLOBAL_CLASS_GLOSRY.html) that are accessible via [interfaces](ABENOO_INTF_GLOSRY.html) for handling [XML](ABENXML_GLOSRY.html) documents in [DOM](ABENDOM_GLOSRY.html) representation. The *integrated* iXML Library provides services such as an XML parser, an XML renderer, and reads and writes to the DOM. The interfaces of the iXML Library Classic start with the prefix `IF_IXML`.

**iXML Library Classic**

Global [classes](ABENGLOBAL_CLASS_GLOSRY.html) that are accessible via [interfaces](ABENOO_INTF_GLOSRY.html) for handling [XML](ABENXML_GLOSRY.html) documents in [DOM](ABENDOM_GLOSRY.html) representation. The *integrated* iXML Library provides services such as an XML parser, an XML renderer, and reads and writes to the DOM. The interfaces of the iXML Library Classic start with the prefix `IF_IXML`.

**iXML Library for ABAP Cloud**

Global [classes](ABENGLOBAL_CLASS_GLOSRY.html) that are accessible via [interfaces](ABENOO_INTF_GLOSRY.html) for handling [XML](ABENXML_GLOSRY.html) documents in [DOM](ABENDOM_GLOSRY.html) representation. The *integrated* iXML Library provides services such as an XML parser, an XML renderer, and reads and writes to the DOM. The interfaces of the iXML Library for ABAP Cloud start with the prefix `IF_IXML_CORE`.

**iXML Library for ABAP Cloud**

Global [classes](ABENGLOBAL_CLASS_GLOSRY.html) that are accessible via [interfaces](ABENOO_INTF_GLOSRY.html) for handling [XML](ABENXML_GLOSRY.html) documents in [DOM](ABENDOM_GLOSRY.html) representation. The *integrated* iXML Library provides services such as an XML parser, an XML renderer, and reads and writes to the DOM. The interfaces of the iXML Library for ABAP Cloud start with the prefix `IF_IXML_CORE`.

**job**

Sequences of programs executed chronologically by particular control commands, especially as background requests.

**JSON**

JavaScript Object Notation ([`http://www.json.org/`](http://www.json.org/)). Data format in text form for data exchange between applications. In ABAP, the [sXML Library](ABENSXML_LIBRARY_GLOSRY.html) and [transformations](ABENABAP_JSON_TRAFOS.html) can be used to access JSON, for which a special JSON-XML supported by [sXML](ABENJSON_XML_GLOSRY.html) Library is used.

**JSON reader**

[XML](ABENXML_READER_GLOSRY.html) reader that accesses [JSON](ABENJSON_GLOSRY.html) data. A JSON reader handles the JSON data internally like [JSON-XML](ABENJSON_XML_GLOSRY.html).

**JSON writer**

[XML writer](ABENXML_WRITER_GLOSRY.html) that writes [JSON](ABENJSON_GLOSRY.html) data. A JSON writer expects input for [JSON-XML](ABENJSON_XML_GLOSRY.html) and uses it to create the JSON data.

**JSON-XML**

SAP-specific representation of [JSON](ABENJSON_GLOSRY.html) data in [XML](ABENXML_GLOSRY.html) format. [JSON readers](ABENJSON_READER_GLOSRY.html) and [JSON writers](ABENJSON_WRITER_GLOSRY.html) use JSON-XML to [parse](ABENABAP_JSON_SXML.html) and [render](ABENABAP_JSON_SXML.html) JSON data.

**Knowledge Transfer Document**

KTD for short. A Knowledge Transfer Document contains the documentation of a development object or its elements. It is based on a markdown language with plain text formatting syntax. A KTD can be displayed and maintained for its development object in [ADT](ABENADT_GLOSRY.html).

**L**

Low-level programming language of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). The programming language L can only be used internally and with restrictions at SAP. For general programming with the SAP HANA database, [SQL](ABENSQL_GLOSRY.html) or the script language [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) must be used. The use of L by customers and partners is not supported.

**L procedure**

[Database procedure](ABENDATABASE_PROCEDURE_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) programmed in the internal SAP language L. SQLScript procedures can be created interactively in the SAP Web IDE for SAP HANA. In addition, [ABAP Managed Database Procedures (AMDP)](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) enable L procedures to be implemented in [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) of [AMDP classes](ABENAMDP_CLASS_GLOSRY.html).

**language setting**

Part of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html). The language setting of an ABAP program comprises the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) and the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) of the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html).

**LDQ**

*\->* Local Data Queue

**local data queue**

Persistence layer into which data can be placed and read only in the order in which it was stored. The local data queue triggers the no-send scenario of the qRFC.

**local update**

Update in the current [work process](ABENWORK_PROCESS_GLOSRY.html). It is not executed in a separate update session but in a separate [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the current [ABAP session](ABENABAP_SESSION_GLOSRY.html). The local update can be activated for an [SAP LUW](ABENSAP_LUW_GLOSRY.html) by using the statement `SET UPDATE TASK LOCAL`.

**lock**

Locks control the access to data by multiple users. Regarding access to [database tables](ABENDATABASE_TABLE_GLOSRY.html), there are [shared locks](ABENSHARED_LOCK_GLOSRY.html) or [exclusive locks](ABENEXCLUSIVE_LOCK_GLOSRY.html) implemented as [database locks](ABENDATABASE_LOCK_GLOSRY.html) and SAP locks. Regarding access to shared objects, there are area locks.

**lock function module**

Special [function module](ABENFUNCTION_MODULE_GLOSRY.html) for setting and removing SAP locks. When creating a lock object, a function module with the prefix `ENQUEUE_` is created to set the lock, and a function module with the prefix `DEQUEUE_` is created to remove the lock.

**Logical Database Builder**

Tool in ABAP Workbench used to create and maintain logical databases. Called using transaction\\ `SE36`.

**logical database schema**

A logical schema on a database. There are the following types of logical database schemas:

**logical file name**

Platform-independent name that can be assigned to physical file names using the transactions `FILE` and `SF01`. Logical file names are used for platform-independent programming to validate file names.

**logical HDI container**

Part of the definition of an ABAP-managed HDI container (AMHC) to which a physical HDI container in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) is mapped. A logical HDI container can be used as a logical schema in an [AMDP macro](ABENAMDP_MACRO_GLOSRY.html).

**logical local database schema**

A logical database schema in which the assignment of a physical [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) takes place in a mapping table. A logical local database schema is represented by a transportable [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that defines its properties.

**logical schema**

A logical schema is a symbolic name for a [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) that can be used in an [AMDP macro](ABENAMDP_MACRO_GLOSRY.html). There are logical local database schemas, which are assigned to the database schema in a mapping table, and logical HDI containers, where the mapping is part of the definition of an ABAP-managed HDI container (AMHC).

In ABAP CDS, there are [logical external schemas](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) that map [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) to database schemas in an external system. They can be used in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) queries and as data sources in other [CDS entities](ABENCDS_ENTITY_GLOSRY.html).

**logon**

Time at which an [ABAP user](ABENABAP_USER_GLOSRY.html) logs on to the [AS ABAP](ABENAS_ABAP_GLOSRY.html) by specifying the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html), [user name](ABENUSER_NAME_GLOSRY.html), [password](ABENPASSWORD_GLOSRY.html), and the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html). Each logon starts a [user session](ABENUSER_SESSION_GLOSRY.html). Logons are made using the SAP GUI logon window or using frameworks such as `RFC`, ICF, or APC.

**logon language**

Language that an [ABAP user](ABENABAP_USER_GLOSRY.html) specifies when logging on to an [AS ABAP](ABENAS_ABAP_GLOSRY.html). The logon language is persistent for the entire [user session](ABENUSER_SESSION_GLOSRY.html). The logon language affects [messages](ABENMESSAGE_GLOSRY.html), [text elements](ABENTEXT_ELEMENT_GLOSRY.html), and the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). It can be determined using the method `GET_LOGON_LANGUAGE` of the class `CL_ABAP_SYST`.

**LUW**

Short for Logical unit of work. Time between two consistent states of the [database](ABENDATABASE_GLOSRY.html). See also [SAP LUW](ABENSAP_LUW_GLOSRY.html) and [database LUW](ABENDATABASE_LUW_GLOSRY.html).

**MDMP system**

Short for multidisplay, multiprocessing system. An MDMP system contains multiple non-[Unicode](ABENUNICODE_GLOSRY.html)\\ [system code pages](ABENSYSTEM_CODEPAGE_GLOSRY.html). The environment [code page](ABENCODEPAGE_GLOSRY.html) of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) depends on its current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). MDMP systems are no longer supported from [ABAP release](ABENABAP_RELEASE_GLOSRY.html) 7.0.

**Memory Inspector**

Tool for displaying and analyzing memory snapshots. Called using transaction code\\ `S_MEMORY_INSPECTOR`.

**memory snapshot**

Contains information about all [data objects](ABENDATA_OBJECT_GLOSRY.html) and [instances](ABENINSTANCE_GLOSRY.html) of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) along with their memory consumption. A memory snapshot can be created in the [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html) by the static method `WRITE_MEMORY_CONSUMPTION_FILE` of the [system class](ABENSYSTEM_CLASS_GLOSRY.html)\\ `CL_ABAP_MEMORY_UTILITIES`, or by entering */hmusa* in the command field of the standard toolbar. Another option is selecting *System > Utilities -> Memory Analysis -> Create Memory Snapshot*. The evaluation is performed by Memory Inspector.

**Message Maintenance**

Tool in [ADT](ABENADT_GLOSRY.html) or in the ABAP Workbench (transaction\\ `SE91`) for creating and maintaining [messages](ABENMESSAGE_GLOSRY.html).

**message server**

Component of the [AS ABAP](ABENAS_ABAP_GLOSRY.html) that implements the communication between the [AS instances](ABENAS_INSTANCE_GLOSRY.html), and which determines the AS instance used when an [ABAP user](ABENABAP_USER_GLOSRY.html) logs on to an [AS ABAP](ABENAS_ABAP_GLOSRY.html).

**namespace**

A namespace is a set of unique names that identify a set of objects. In ABAP, we can distinguish [namespaces for program-internal objects](ABENNAMING_CONVENTIONS.html) and a namespace for [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). The latter can be divided into a [SAP namespace](ABENSAP_NAMESPACE_GLOSRY.html), a [customer namespace](ABENCUSTOMER_NAMESPACE_GLOSRY.html), a [partner namespace](ABENPARTNER_NAMESPACE_GLOSRY.html) and [prefix namespaces](ABENPREFIX_NAME_SPACE_GLOSRY.html).

**namespace prefix**

Prefix with five to ten characters that must contain a forward slash character (`/.../`) in the first and final place. The names of the [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) of a [prefix namespace](ABENPREFIX_NAME_SPACE_GLOSRY.html) are introduced by a namespace prefix.

**Native SQL**

Database-specific [SQL](ABENSQL_GLOSRY.html) statements that are handled by the Native SQL interface of the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html). Native SQL is either passed from [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) to the Native SQL interface using [objects](ABENOBJECT_GLOSRY.html) from the ADBC\\ [classes](ABENCLASS_GLOSRY.html) or specified statically between the statements `EXEC SQL` and `ENDEXEC`. [ABAP Managed Database Procedures (AMDP)](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) use Native SQL to call and manage [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) and [database functions](ABENDATABASE_FUNCTION_GLOSRY.html) with platform-dependent implementations.

**Native SQL interface**

Part of the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) responsible for Native SQL statements. The Native SQL interface handles the statements made from the ADBC framework and all Native SQL statements embedded statically between `EXEC` and `ENDEXEC`. Vendor-specific [SQL](ABENSQL_GLOSRY.html) statements are passed unchanged to the [database system](ABENDATABASE_SYSTEM_GLOSRY.html) of the current [database connection](ABENDATABASE_CONNECTION_GLOSRY.html). SAP-specific static Native SQL statements are processed in the Native SQL interface before being passed. To enable this, the Native SQL interface contains platform-dependent parts (referred to as client libraries), which also perform conversion between ABAP types and database types.

**non-blocking mode**

Any statements that block the program flow are not allowed in an [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) that is processed in non-blocking mode. There are values of the non-blocking mode for APC and ADF.

**Non-Unicode ABAP**

Obsolete [language version](ABENABAP_VERSION_GLOSRY.html) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) in which the [Unicode checks](ABENUNICODE_CHECK_GLOSRY.html) are not effective. A program with this language version cannot be executed in [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html). In the current [AS ABAP](ABENAS_ABAP_GLOSRY.html) release, only Unicode systems are supported. Therefore, Non-Unicode ABAP can no longer be used.

**Object Navigator**

Tool of the ABAP Workbench for the central maintenance of [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). The Object Navigator displays repository objects as nodes of different tree representations (browsers), such as Repository Browser, Repository Information System, or Enhancement Information System, in the navigation area. From here, they can be accessed via forward navigation in the tool area. Called using transaction\\ `SE80`.

**OData**

Short for Open Data Protocol. OData is a standardized protocol for defining and consuming [RESTful](ABENRESTFUL_GLOSRY.html) APIs. [SAP Gateway](ABENSAP_GATEWAY_GLOSRY.html) provides such APIs for [AS ABAP](ABENAS_ABAP_GLOSRY.html).

[**\-> More about**](http://www.odata.org)

**OLE automation**

OLE (object linking and embedding) automation allows various software applications to use automation objects to communicate with each other, exchange data, and control each other. A software application can make automation objects available to other applications (clients) by means of an automation interface. A client can use the corresponding object interface to create and control these kinds of objects.

**package**

A package encapsulates [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) in self-contained units. Packages are themselves repository objects and connect the repository objects they contain to the [Change and Transport System (CTS)](ABENCTS_GLOSRY.html). The components of a package that can be used outside of the package must be published in a package interface. A package that accesses the repository objects of another package must declare this and have permission from the other package. Packages are created using Package Builder. See also [Package Concept](ABENPACKAGE_CONCEPT_GLOSRY.html).

**Package Builder**

An ABAP Workbench tool for creating and maintaining [packages](ABENPACKAGE_GLOSRY.html). Called using transaction\\ `SE21`.

**package concept**

Rule set that is based on [packages](ABENPACKAGE_GLOSRY.html) and specifies the mutual usability of [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). Currently, only some of the rules are checked and only by the [ABAP Test Cockpit (ATC)](ABENABAP_TEST_COCKPIT_GLOSRY.html). There are no checks at runtime.

**parallel Remote Function Call**

pRFC for short. Extension of the asynchronous remote function call that enables parallelization to be controlled.

**partner namespace**

Predefined [namespace](ABENNAMESPACE_GLOSRY.html) for [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) created in partner development systems. Names have `J` as the first character. These names can be used in partner systems, if no [prefix namespace](ABENPREFIX_NAME_SPACE_GLOSRY.html) is available.

**PCP**

*\->*\\ Push Channel Protocol

**performance trace**

Test tool combining multiple trace functions that allow system behavior to be analyzed in [database access](ABENDB_ACCESS.html) (SQL trace), access to the [table buffer](ABENTABLE_BUFFER_GLOSRY.html), access to lock management reads, and for external read access using RFC and ICF. Called using transaction\\ `ST05`.

**pRFC**

*\->*\\ parallel remote function call

**profile parameter**

Defines default settings for an [AS ABAP](ABENAS_ABAP_GLOSRY.html). Profile parameters are created and displayed using transaction\\ `RZ11`.

**Push Channel Protocol**

PCP for short. Describes an SAP communications format used to exchange messages between programs and internal or external interfaces. Currently, PCP is used by ABAP Channels and ABAP daemons.

**PXA**

Short for Program Execution Area. Memory for managing the fixed data of a running ABAP program. The PXA notably contains the byte codes of all programs running simultaneously on an [AS instance](ABENAS_INSTANCE_GLOSRY.html). This memory is shared by all [internal sessions](ABENINTERNAL_SESSION_GLOSRY.html) of the AS instance, and there is only one such memory on each server. The byte code of a program that is executed once remains buffered in the PXA as a program load for as long as possible to prevent reloads from the database if the program is executed again. Furthermore, the PXA buffers shared resources, such as values of [constants](ABENCONSTANT_GLOSRY.html), and is used for the [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html) of [boxed components](ABENBOXED_COMPONENT_GLOSRY.html).

**qRFC**

*\->*\\ queued remote function call

**queued Remote Function Call**

qRFC for short. Obsolete extension of the transactional remote function call enabling a call sequence to be determined.

**read lock**

Area lock on an area instance version in the shared objects memory. A read lock enables read accesses to the area instance version.

**release contract**

Classification of a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that is a prerequisite for its usability as an [released API](ABENRELEASED_API_GLOSRY.html). A release contract ensures a certain stability regarding consistency and compatibility of released APIs.

There are currently the following release contracts:

Objects are classified in [ADT](ABENADT_GLOSRY.html) or using special transactions such as `SCFD_REGISTRY`.

**released API**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) or part of an repository object that is released for access in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html). A released API is based on two classifications:

**Remote Function Call**

RFC for short. Call of a [function module](ABENFUNCTION_MODULE_GLOSRY.html) using the RFC interface Calls be made in the same or in different systems. The target system is determined using an RFC destination. Connections are possible between different [AS ABAP](ABENAS_ABAP_GLOSRY.html) or between an AS ABAP and an external system. In non-SAP systems, specially programmed functions whose [interface](ABENINTF_GEN_GLOSRY.html) simulates a function module are called in external systems instead of function modules. Function calls can be synchronous, asynchronous, or transactional.

**remote-enabled function module**

RFM for short. [Function module](ABENFUNCTION_MODULE_GLOSRY.html) that is marked as *remote-enabled* in its properties and can be called using remote function call.

**repository**

*\->*\\ [ABAP Repository](ABENABAP_REPOSITORY_GLOSRY.html)

**repository browser**

Standard layout of the Object Navigator for the structured display of [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) sorted according to their type.

**Repository Info System**

Tool in the ABAP Workbench for searching for [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). Called in the Object Navigator or via transaction code\\ `SE15`.

**restricted ABAP language version**

[ABAP language version](ABENABAP_VERSION_GLOSRY.html) that is restricted as follows:

Restricted ABAP language versions are:

[Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) is an [unrestricted ABAP language version](ABENUNRESTRICTED_VERSION_GLOSRY.html).

**RFC**

*\->*\\ remote function call

**RFC client**

Instance of a system that calls services using RFC.

**RFC destination**

An RFC destination contains the connection parameters for remote function calls. It contains the connection type, the target system, and the partner program. Connections that only affect another [AS ABAP](ABENAS_ABAP_GLOSRY.html) can be classified as trusted systems. RFC destinations are managed statically using the transaction\\ `SM59` or dynamically using the class `CL_DYNAMIC_DESTINATION`.

**RFC interface**

Interface for remote function calls (RFC). The RFC interface consists of an interface for [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) and interfaces for non-ABAP programs.

**RFC processing**

Processing of a remote function call using the RFC interface in an RFM.

**RFC server**

Instance of a system that provides services that can be called using RFC.

**RFC server group**

Group of multiple [AS instances](ABENAS_INSTANCE_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) that are provided to process asynchronous remote function calls (RFC) concurrently. RFC server groups are created using transaction code\\ `RZ12`.

**RFC session**

[User session](ABENUSER_SESSION_GLOSRY.html) for RFC processing. An RFC session is opened using a remote function call.

**RFM**

Remote-enabled function module\\ *\->*.

**runtime analysis**

Tool for analyzing the execution of program parts or individual statements and for measuring their runtime in SAP GUI. Called using transaction code\\ `SAT`. Replaced by the ABAP Profiler in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).

**runtime monitor**

Tool for recording events raised by [system classes](ABENSYSTEM_CLASS_GLOSRY.html) when a program is executed. Called using transaction code\\ `SRTM`.

**SAP BTP ABAP environment**

[ABAP system](ABENABAP_SYSTEM_GLOSRY.html) (aka [Steampunk](ABENSTEAMPUNK_GLOSRY.html)) in [SAP BTP](ABENSAP_BTP_GLOSRY.html) that provides the [ABAP technology](ABENABAP_TECHNO_GLOSRY.html) as a service to customers and partners. ABAP development is governed by the restricted rules of [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).

**SAP buffering**

Buffering of frequently used data in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) buffers of an [AS ABAP](ABENAS_ABAP_GLOSRY.html)\\ [AS instance](ABENAS_INSTANCE_GLOSRY.html). Includes [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).

[**\-> More about**](https://help.sap.com/docs/ABAP_PLATFORM_NEW/3364beced9d145a5ad185c89a1e04658/c43a6dbb505211d189550000e829fbbd)

**SAP Business Technology Platform**

SAP BTP for short. A platform for development and deployment of business technology provided by SAP. The main focus of SAP BTP is on cloud development, but it also supports technologies used in on-premise deployments such as the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). SAP BTP comprises the [SAP BTP ABAP environment](ABENSAP_BTP_ABAP_ENV_GLOSRY.html) that makes the [ABAP technology](ABENABAP_TECHNO_GLOSRY.html) available for cloud development with [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).

**SAP Code page number**

Internal SAP ID for a [code page](ABENCODEPAGE_GLOSRY.html) that is stored in the database table `TCP00`. If the [byte order](ABENBYTE_ORDER_GLOSRY.html) of a code page is relevant, an individual SAP code page number is assigned to it there for each endian. For example, the code page numbers for [UTF-16](ABENUTF16_GLOSRY.html) are 4102 ([big endian](ABENBIG_ENDIAN_GLOSRY.html)) and 4103 ([little endian](ABENLITTLE_ENDIAN_GLOSRY.html)).

**SAP Easy Access**

Initial program that is called after a dialog based logon to an [AS ABAP](ABENAS_ABAP_GLOSRY.html). SAP Easy Access displays an initial menu for the access to the AS ABAP by a dialog user. By default, this menu is either the SAP menu or a user menu. The SAP menu is an area menu that is centrally defined or overridden by an entry in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html). A user menu contains all the functions required by a dialog user and is created and assigned by the system administrator via the role maintenance (transaction `PFCG`). Each user can also define their favorites menu in SAP Easy Access that is displayed together with or instead of the default menu.

**SAP Enterprise Search**

A technology that enables you to search data in an application in a unified way. It provides a unified, comprehensive, secure, and real-time access to enterprise data and information from inside and outside of a company. The search returns both structured data (business objects) and unstructured data (HTML files, presentations, documents) from SAP systems and other search providers, and provides direct access to the related applications and actions. In ABAP, [CDS-based enterprise search](ABENCDS_ENTERPRISESEARCH_GLOSRY.html) is available.

**SAP Gateway**

Framework that makes it possible to access [AS ABAP](ABENAS_ABAP_GLOSRY.html) using standardized open protocols such as [OData](ABENODATA_GLOSRY.html). [Business services](ABENBUSINESS_SERVICE_GLOSRY.html) and [RAP business objects](ABENRAP_BO_GLOSRY.html) based on the data and behavior modeled in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) use SAP Gateway internally as part of the [RAP runtime framework](ABENRAP_RUNT_FRAMEWORK_GLOSRY.html).

**SAP HANA**

SAP HANA is a platform for SAP In-Memory Computing based on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). If an SAP HANA database is used as the [standard database](ABENSTANDARD_DB_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html), ABAP programs can use [ABAP SQL](ABENABAP_SQL_GLOSRY.html) to access SAP HANA directly. In addition, secondary connections can also be used to access SAP HANA from ABAP.

**SAP HANA Cloud database**

Database of [SAP HANA Cloud](ABENSAP_HANA_CLOUD_GLOSRY.html) that offers restricted functionality compared with a general [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). An SAP HANA Cloud database does not support SAP HANA XSC and there is no full text index.

**SAP HANA Cockpit**

Browser-based administration tool in XSA. Replaces the administration perspective of the SAP-HANA-Studios.

**SAP HANA database**

The SAP HANA database is the in-memory database of [SAP HANA](ABENSAP_HANA_GLOSRY.html). It is the only database that is supported as the [standard database](ABENSTANDARD_DB_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html).

**SAP HANA remote source**

A named [database object](ABENDB_OBJECT_GLOSRY.html) that contains the connection details for accessing an external system and the credentials to use it. An SAP HANA remote source uses a remote source adapter, such as [ODBC](ABENODBC_GLOSRY.html), to connect to a remote [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), a non-SAP HANA database, or to the [SQL services](ABENABAP_SQL_SERVICES_GLOSRY.html) of a remote [AS ABAP](ABENAS_ABAP_GLOSRY.html).

**SAP HANA Repository**

Repository of objects in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). More specifically, XSC objects are stored in the SAP HANA Repository. XSA objects, on the other hand, are not stored in the SAP HANA Repository but are usually deployed using HDI.

**SAP HANA Smart Data Access**

Software that enables the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) to access and query data from other (remote) enterprise data stores based on a [data federation](ABENDATA_FEDERATION_GLOSRY.html) approach. This technology is included in the SAP HANA platform. SAP HANA Smart Data Access uses the [ODBC](ABENODBC_GLOSRY.html) protocol for external communication.

[**\-> More about**](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/a07c7ff25997460bbcb73099fb59007d)

**SAP HANA SQL optimizer**

The query optimizer generates the most efficient query execution plan for a given query and passes it to the executor. In [HANA SQL](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f), there are basically two optimization tasks:

**SAP HANA Studio**

Eclipse-based tool for database objects of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), especially for XSC objects stored in the SAP HANA Repository. In XSA, SAP HANA Studio is replaced by the SAP Web IDE for SAP HANA and the SAP HANA Cockpit.

**SAP HANA Transport for ABAP**

HTA for short. Infrastructure that links the transport of database objects of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) (SAP HANA Repository objects and HDI objects) to the [Change and Transport System (CTS)](ABENCTS_GLOSRY.html) of ABAP.

[**\-> More about**](https://help.sap.com/docs/ABAP_PLATFORM_NEW/6811c09434084fd1bc4f40e66913ce11/ff7652bd542849b18b218efe8d2f2373)

**SAP HANA view**

An SAP HANA view is used to select, analyze, or perform calculations with data from the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). Attribute views, analytic views and calculation views can be distinguished. SAP HANA views can be defined as objects of SAP HANA XS for which there are special methods for accessing these views in [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html).

**SAP HANA virtual table**

A named, SAP HANA-local proxy object that represents a database object, such as a table or a view, in an external system. A virtual table can be accessed and queried as a normal table or view, allowing you to access data from a remote object in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) as if the data were stored in local tables. The [SAP HANA Smart Data Access](ABENSAP_HANA_SDA_GLOSRY.html) technology uses virtual tables to communicate with external systems.

For [dynamic external entities](ABENCDS_DYNAMIC_EE_GLOSRY.html), a virtual table is created as a representation of the remote database object to be read. This is done implicitly by the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) of [AS ABAP](ABENAS_ABAP_GLOSRY.html) as soon as the external entity is accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html) under the precondition that a configured [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) is available.

**SAP HANA XS**

Short for SAP HANA extended application services. XS is a framework for developing and managing native applications in [SAP HANA](ABENSAP_HANA_GLOSRY.html). The current version, XSA, replaces the previous version, XSC. XS objects can be accessed in ABAP.

**SAP HANA XSA**

Short for SAP HANA extended application services Advanced Model. Current version of XS and successor to XSC. SAP Web IDE for SAP HANA and SAP HANA Cockpit can be used to develop and manage XSA objects. Objects are usually deployed using HDI.

**SAP HANA XSC**

Short for SAP HANA extended application services Classic Model. Previous version of XS and predecessor to XSA. XSC objects are stored in the SAP HANA repository and are usually developed and managed in SAP HANA Studio. SAP HANA XSC is not supported by a [SAP HANA Cloud database](ABENSAP_HANA_CLOUD_DB_GLOSRY.html).

**SAP lock**

Logical [lock](ABENLOCK_GLOSRY.html) based on lock objects.

**SAP LUW**

Interrelated sequence of programming units, the execution of which, for example, in dialog steps or in remote function calls, can be distributed across several [work processes](ABENWORK_PROCESS_GLOSRY.html). However, their database changes are processed within a single [database LUW](ABENDATABASE_LUW_GLOSRY.html). SAP LUWs are implemented by bundling techniques, in which programming units such as update function modules or [subroutines](ABENSUBROUTINE_GLOSRY.html) are registered in different work processes but executed by a single work process. An SAP LUW is usually started by opening a new [internal session](ABENINTERNAL_SESSION_GLOSRY.html) and completed by the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement [`COMMIT WORK`](ABAPCOMMIT.html). Changes within one SAP LUW can be undone by the ABAP SQL statement [`ROLLBACK WORK`](ABAPROLLBACK.html).

The [controlled SAP LUW](ABENCONTROLLED_SAP_LUW_GLOSRY.html) is an extension to the SAP LUW.

**SAP memory**

Obsolete name for user memory

**SAP namespace**

[Namespace](ABENNAMESPACE_GLOSRY.html) for [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) created in SAP's own development systems. There are no real restrictions for the names. To avoid namespace conflicts [prefix namespace](ABENPREFIX_NAME_SPACE_GLOSRY.html) can be used. Internally at SAP, all names are checked using a cross-system table to ensure their uniqueness.

**SAP S/4HANA**

SAP's on-premise business suite that is based on a [ABAP Platform](ABENABAP_PLATFORM_GLOSRY.html) and runs on [SAP HANA](ABENSAP_HANA_GLOSRY.html). See also [SAP S/4HANA Cloud Public Edition](ABENSAP_S4HANA_CPUB_GLOSRY.html) and [SAP S/4HANA Cloud Private Edition](ABENSAP_S4HANA_CPRIV_GLOSRY.html).

**SAP S/4HANA Cloud**

*\->*\\ [SAP S/4HANA Cloud Public Edition](ABENSAP_S4HANA_CPUB_GLOSRY.html)

**SAP S/4HANA Cloud ABAP environment**

Restricted [ABAP development environment](ABENABAP_DEV_ENVIR_GLOSRY.html) (aka [embedded Steampunk](ABENEMBEDDED_STEAMPUNK_GLOSRY.html)) for customer developments in [SAP S/4HANA Cloud Public Edition](ABENSAP_S4HANA_CPUB_GLOSRY.html), [SAP S/4HANA Cloud Private Edition](ABENSAP_S4HANA_CPRIV_GLOSRY.html) and [SAP S/4HANA](ABENSAP_S4HANA_GLOSRY.html). The developments are governed by the restricted rules of [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html). See also [SAP BTP ABAP environment](ABENSAP_BTP_ABAP_ENV_GLOSRY.html) (aka [Steampunk](ABENSTEAMPUNK_GLOSRY.html)).

**SAP S/4HANA Cloud Private Edition**

Cloud version of [SAP S/4HANA](ABENSAP_S4HANA_GLOSRY.html) based on the [ABAP Platform](ABENABAP_PLATFORM_GLOSRY.html) of SAP S/4HANA. Partner and customer developments can either use the [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html) or the [classic ABAP](ABENCLASSIC_ABAP_GLOSRY.html) paradigm. For ABAP Cloud the [SAP S/4HANA Cloud ABAP environment](ABENS4_HANA_CLOUD_ABAP_ENV_GLOSRY.html) (aka [embedded Steampunk](ABENEMBEDDED_STEAMPUNK_GLOSRY.html)) can be used. See also [SAP S/4HANA Cloud Public Edition](ABENSAP_S4HANA_CPUB_GLOSRY.html).

**SAP S/4HANA Cloud Public Edition**

SAP S/4HANA Cloud for short. Cloud version of [SAP S/4HANA](ABENSAP_S4HANA_GLOSRY.html). Partner and customer developments are governed by the [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html) paradigm. For that the [SAP S/4HANA Cloud ABAP environment](ABENS4_HANA_CLOUD_ABAP_ENV_GLOSRY.html) (aka [embedded Steampunk](ABENEMBEDDED_STEAMPUNK_GLOSRY.html)) can be used. See also [SAP S/4HANA Cloud Private Edition](ABENSAP_S4HANA_CPRIV_GLOSRY.html).

**SAP Web IDE for SAP HANA**

Browser-based development tool in XSA. Replaces the development and modeling perspectives of the SAP-HANA-Studios.

**SAP XSLT processor**

System program integrated into the [ABAP kernel](ABENKERNEL_GLOSRY.html) to execute [XSL transformations](ABENXSL_TRANSFORMATION_GLOSRY.html).

**scalar function**

In the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), a [database function](ABENDATABASE_FUNCTION_GLOSRY.html) with a scalar or elementary return value. In [SQLScript](ABENSQL_SCRIPT_GLOSRY.html), scalar functions can be used as operands in the same places as elementary variables or columns of database tables or views. A scalar function can be managed as an [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html) in an [AMDP class](ABENAMDP_CLASS_GLOSRY.html).

**secondary connection**

User-defined [database connection](ABENDATABASE_CONNECTION_GLOSRY.html) from an [AS ABAP](ABENAS_ABAP_GLOSRY.html) to a secondary database. The connection can be to other databases or to other [database schemas](ABENDATABASE_SCHEMA_GLOSRY.html) in the [standard database](ABENSTANDARD_DB_GLOSRY.html). The properties of the secondary connections that can be used by a [work process](ABENWORK_PROCESS_GLOSRY.html) are defined in the database table `DBCON`. These secondary connections are managed using the DBA Cockpit tool. The only secondary connections that should be used are those from an AS ABAP with an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) as its standard database to another SAP HANA database. [SAP HANA Smart Data Access (SDA)](ABENSAP_HANA_SDA_GLOSRY.html) should be used for access to other databases. [ABAP CDS](ABENABAP_CDS_GLOSRY.html) provides [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) for remote connections with [SAP HANA Smart Data Access](ABENSAP_HANA_SDA_GLOSRY.html).

**secondary database**

Target database of a secondary connection defined in the database table `DBCON`. The database system must be a system supported by SAP and the software required for access using ABAP must be installed as a database shared library (DBSL) on the current [AS ABAP](ABENSTANDARD_DB_GLOSRY.html), if the database is different to its standard database of the AS ABAP. Only [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html) should be used as secondary databases of systems that have such a database as their [standard database](ABENSTANDARD_DB_GLOSRY.html).

**secondary language** Language specified in the profile parameter\\ `zcsa/second_language`. The secondary language is used for [messages](ABENMESSAGE_GLOSRY.html), [text pools](ABENTEXT_POOL_GLOSRY.html), and translatable [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) if the desired language is not found.

**selection include**

[Include program](ABENINCLUDE_PROGRAM_GLOSRY.html) within a logical database in which the standard selection screen of the logical database is defined.

**selection view**

If dynamic selections are required for a node of a logical database, a selection view can be used to determine the node [fields](ABENFIELD_GLOSRY.html) for which the user can define dynamic selections.

**serialization**

Transformation of ABAP data into [XML](ABENXML_GLOSRY.html) data or [JSON](ABENJSON_GLOSRY.html) data. Performed either by calling an [XSLT program](ABENXSL_TRANSFORMATION_GLOSRY.html) or a [Simple Transformation](ABENSIMPLE_TRANSFORMATION_GLOSRY.html). If [XSLT](ABENXSLT_GLOSRY.html) is used, the system first creates a [canonical XML representation](ABENCANONICAL_XML_REPRESENT_GLOSRY.html) ([asXML](ABENXML_GLOSRY.html)).

**service connection**

Additional [database connection](ABENDATABASE_CONNECTION_GLOSRY.html) from an [AS ABAP](ABENAS_ABAP_GLOSRY.html) to the [standard database](ABENSTANDARD_DB_GLOSRY.html). In addition to the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html), service connections to the standard database called `R/3*name` can be opened for a [work process](ABENWORK_PROCESS_GLOSRY.html) to access the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html).

**session**

Organizational unit of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) for executing ABAP programs. An ABAP program is executed in an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) in an [ABAP session](ABENABAP_SESSION_GLOSRY.html), which itself is in a [user session](ABENUSER_SESSION_GLOSRY.html). Within the program, there is access to memory areas assigned to the sessions and to the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html).

**session memory**

Memory for the modifiable parts of a program in an [internal session](ABENINTERNAL_SESSION_GLOSRY.html). From the perspective of an ABAP program, the session memory can be divided into a [heap](ABENHEAP_GLOSRY.html) area and a [stack](ABENSTACK_GLOSRY.html) area. The non-modifiable parts of a program are stored in [PXA](ABENPXA_GLOSRY.html), which is referred to in the session memory.

**SFW**

*\->*\\ [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html)

**shared lock**

[Lock](ABENLOCK_GLOSRY.html) that allows other users to set further shared locks but no simultaneous [exclusive locks](ABENEXCLUSIVE_LOCK_GLOSRY.html) for the locked data. The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement [`SELECT`](ABAPSELECT.html) without the addition [`FOR UPDATE`](ABAPSELECT_SINGLE.html) as well as the corresponding Native SQL statement or a `SELECT` statement in an [AMDP](ABENAMDP_METHOD_GLOSRY.html) method do not set such a [database lock](ABENDATABASE_LOCK_GLOSRY.html) for the addressed lines by default. A shared lock is set as an SAP lock via a correspondingly parameterized call of a lock function module.

**shared memory**

Memory area of an [AS instance](ABENAS_INSTANCE_GLOSRY.html) in which the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) stores programs, program data, buffers, and so on. In the shared memory of the current AS instance, [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) can either access [data clusters](ABENDATA_CLUSTER_GLOSRY.html) in cross-transactional application buffers or shared objects in the shared objects memory. The amount of shared memory that can be occupied by the different consumers is defined statically using profile parameters. Transaction\\ `ST02` (SAP Memory Management) shows the current occupancy of the shared memory and the corresponding profile parameters.

**shared object**

[Instance](ABENINSTANCE_GLOSRY.html) of a shared memory-enabled class or [anonymous data object](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) that is stored in an area instance version of the [shared memory](ABENSHARED_MEMORY_GLOSRY.html). A shared object is created using the addition `AREA HANDLE` of statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) or [`CREATE DATA`](ABAPCREATE_DATA.html). [References](ABENREFERENCE_GLOSRY.html) to shared objects are possible in other shared objects of the same area instance version and during the connection to the respective area instance version via an area handle.

**simple enhancement implementation**

Semantically interrelated enhancement of a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html). A simple enhancement implementation manages one or more [enhancement implementation elements](ABENENHANCEMENT_IMPL_ELEM_GLOSRY.html). A simple enhancement implementation can occur independently or as a component of a [composite enhancement implementation](ABENCOMP_ENHANCEMENT_IMPL_GLOSRY.html).

**simple enhancement spot**

Reference to a set of [enhancement spot element definitions](ABENENHANCEMENT_SPOT_DEF_GLOSRY.html). A simple enhancement spot can occur independently or as a component of a [composite enhancement spot](ABENCOMP_ENHANCEMENT_SPOT_GLOSRY.html).

**Simple Transformation**

ST for short. SAP-specific programming language for transformations between [XML](ABENXML_GLOSRY.html) formats and ABAP data and vice versa. [Serializations](ABENSERIALIZATION_GLOSRY.html) and [deserializations](ABENDESERIALIZATION_GLOSRY.html) can be carried out using ST. Simple Transformations are edited using the Transformation Editor and are called using the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).

**single code page system**

System with only one [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html). Either a [Unicode system](ABENUNICODE_SYSTEM_GLOSRY.html) with [UTF 16](ABENUTF16_GLOSRY.html) or a non-Unicode system with a non-Unicode code page. From [AS ABAP](ABENAS_ABAP_GLOSRY.html)\\ [ABAP release](ABENABAP_RELEASE_GLOSRY.html) 7.0, only single code page systems are supported and from ABAP release 7.62 only Unicode systems. The [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) for an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) can only be set using this code page in a single code page system. See also MDMP system.

**SQL service**

A standardized protocol of the [Application Server ABAP](ABENAS_ABAP_GLOSRY.html) providing SQL-level access to [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html), such as [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), for consumers outside the system. The SQL service can be accessed with the ODBC driver for ABAP using the [ODBC](ABENODBC_GLOSRY.html) protocol. It can be specified as a type of [service binding](ABENSERVICE_BINDING_GLOSRY.html). With the SQL service, remote access to the database of AS ABAP is performed using the [ABAP SQL engine](ABENABAP_SQL_ENGINE_GLOSRY.html) and (almost) all important ABAP SQL features are supported. The SQL service is also integrated with [SAP HANA Smart Data Access](ABENSAP_HANA_SDA_GLOSRY.html), which enables the SAP HANA database to query data from remote data stores.

**SQL trace**

Trace function used to analyze the [SQL](ABENSQL_GLOSRY.html) statements passed from the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) to the [database system](ABENDATABASE_INTERFACE_GLOSRY.html). It can be called from the tools [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html) or performance trace (transaction `ST05`).

**SQL view**

[ABAP-managed database object](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) that is generated automatically by the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) or by [ABAP CDS](ABENABAP_CDS_GLOSRY.html) for DDIC table views and [CDS entities](ABENCDS_ENTITY_GLOSRY.html), such as:

Like all ABAP-managed database objects, an SQL view should mainly be accessed with [ABAP SQL](ABENABAP_SQL_GLOSRY.html) using the names defined in the ABAP Dictionary or in ABAP CDS. For [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), the name of the CDS entity should be used and not the name of the CDS-managed DDIC view (obsolete). When using [AMDP](ABENAMDP_GLOSRY.html) or Native SQL, only the technical name of the SQL view can be used.

**SQLScript**

Script language for the programming of [SQLScript procedures](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) and [SQLScript functions](ABENSQL_SCRIPT_FUNCTION_GLOSRY.html) on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

[**\-> More about**](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d)

**SQLScript function**

A [database function](ABENDATABASE_FUNCTION_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) programmed in the language [SQLScript](ABENSQL_SCRIPT_GLOSRY.html). SQLScript functions can be created using tools such as SAP Web IDE for SAP HANA or Native SQL in programs. [ABAP Managed Database Procedures (AMDP)](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) enable SQLScript functions to be implemented in [AMDP procedure implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) of [AMDP classes](ABENAMDP_CLASS_GLOSRY.html). See also [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html). [**\-> More about**](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d)

**SQLScript procedure**

A [database procedure](ABENDATABASE_PROCEDURE_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) programmed in the language [SQLScript](ABENSQL_SCRIPT_GLOSRY.html). SQLScript procedures can be created using tools such as SAP Web IDE for SAP HANA or Native SQL in programs. [ABAP Managed Database Procedures (AMDP)](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) enable SQLScript procedures to be implemented in [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) of [AMDP classes](ABENAMDP_CLASS_GLOSRY.html). Database procedure proxies can be created to call SQLScript procedures in the SAP HANA Repository. See also [SQLScript Function](ABENSQL_SCRIPT_FUNCTION_GLOSRY.html).

[**\-> More about**](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d)

**sRFC**

*\->*\\ synchronous remote function call

**SRID**

*\->*\\ [spatial reference identifier](ABENSPATIAL_REF_IDENTIFIER_GLOSRY.html)

**ST**

*\->*\\ [Simple transformation](ABENSIMPLE_TRANSFORMATION_GLOSRY.html).

**Standard ABAP**

[Unrestricted ABAP language version](ABENUNRESTRICTED_VERSION_GLOSRY.html) with unrestricted language scope and unrestricted access to [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). For Standard ABAP, the [Unicode checks](ABENUNICODE_CHECK_GLOSRY.html) are effective that are required in an [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html). Standard ABAP is the [ABAP language version](ABENABAP_VERSION_GLOSRY.html) for [classic ABAP](ABENCLASSIC_ABAP_GLOSRY.html).

**Standard ABAP with restricted object use**

Obsolete [ABAP language version](ABENABAP_VERSION_GLOSRY.html) with restricted use of [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) in which all language elements of [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) are allowed.

**standard connection**

[Database connection](ABENDATABASE_CONNECTION_GLOSRY.html) between an [AS ABAP](ABENAS_ABAP_GLOSRY.html) and its [standard database](ABENSTANDARD_DB_GLOSRY.html). A standard connection is always opened for each [work process](ABENWORK_PROCESS_GLOSRY.html) of an AS ABAP. The [ABAP database schema](ABENDATABASE_USER_GLOSRY.html) is assigned to the [database user](ABENABAP_DB_SCHEMA_GLOSRY.html) of the standard connection. By default, reads in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), Native SQL, and [AMDP](ABENAMDP_GLOSRY.html) are performed on this [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) using this standard connection.

**standard database**

Central database of an [AS ABAP](ABENAS_ABAP_GLOSRY.html). A [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) to the standard database always exists for each [work process](ABENWORK_PROCESS_GLOSRY.html) of an AS ABAP. Only a [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) is supported as a standard database.

**Steampunk**

Internal SAP project name for the [SAP BTP ABAP environment](ABENSAP_BTP_ABAP_ENV_GLOSRY.html). See also [embedded Steampunk](ABENEMBEDDED_STEAMPUNK_GLOSRY.html).

**switch**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that in the context of a [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) is determines whether another [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) or a component of a repository object (such as a screen element) is visible and used in a system. This also applies in particular to [enhancements](ABENENHANCEMENT_GLOSRY.html) of the ABAP Enhancement Framework. In most cases, extensions can be switched on whenever they are defined in a [package](ABENPACKAGE_GLOSRY.html) to which a switch is assigned. A switch can have the status *on*, *off*, or *stand-by*. Switches are created in transaction\\ `SFW1` and switched in transaction `SFW5` using business functions. See also [conflict switch](ABENCONFLICT_SWITCH_GLOSRY.html).

**Switch Framework**

`SFW` for short. Framework for the externally controlling the visibility of [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html), their components, or [enhancements](ABENENHANCEMENT_GLOSRY.html) using [switches](ABENSWITCH_GLOSRY.html).

**sXML library**

Global [interfaces](ABENGLOBAL_INTERFACE_GLOSRY.html) and [classes](ABENGLOBAL_CLASS_GLOSRY.html) for handling [XML](ABENXML_GLOSRY.html) data in different [formats](ABENABAP_SXML_LIB_FORMATS.html). The *serial* XML Library provides XML readers and XML writers for various sources and targets. The classes and interfaces in sXML Library start with the prefixes `CL_SXML` or `IF_SXML`.

**SXPG framework**

A framework for calling operating system statements of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html)\\ [host computer](ABENHOST_COMPUTER_GLOSRY.html) from ABAP programs, based on the transaction\\ `SM69` and [function modules](ABENFUNCTION_MODULE_GLOSRY.html) in the [function pool](ABENFUNCTION_POOL_GLOSRY.html) SXPG

**synchronous Remote Function Call**

sRFC for short. Remote function call in which the calling program waits for the end of processing of the remotely called function.

**synchronous update**

Update in which update function modules of high priority are executed in the update work process whereby the calling program waits for completion. Synchronous updates are started via [`COMMIT WORK`](ABAPCOMMIT.html) with the addition `AND WAIT` and are executed in a separate update session.

**system client**

Special [client](ABENCLIENT_GLOSRY.html) in [AS ABAP](ABENAS_ABAP_GLOSRY.html) with the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html)\\ *000*. The system client is used to execute system-specific [system programs](ABENSYSTEM_PROGRAM_GLOSRY.html).

**system code page**

[Code page](ABENCODEPAGE_GLOSRY.html) released for use on an [AS ABAP](ABENAS_ABAP_GLOSRY.html). In the current release, each system is a [Unicode system](ABENUNICODE_SYSTEM_GLOSRY.html), that is, a [single code page system](ABENSINGLE_CODEPAGE_SYSTEM_GLOSRY.html) with the system code page [UTF-16](ABENUTF16_GLOSRY.html) with a platform-dependent [byte order](ABENBYTE_ORDER_GLOSRY.html). The programming language ABAP supports the subset [UCS-2](ABENUCS2_GLOSRY.html) without [surrogates](ABENSURROGATES_GLOSRY.html). The system code page of a single code page system is always the code page of the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

**system date**

[Local date](ABENLOCAL_DATE_GLOSRY.html) in the [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html) of the [AS ABAP](ABENAS_ABAP_GLOSRY.html).

**system ID**

SID for short. Identification or name of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) and therefore also the ID or name of the [ABAP system](ABENABAP_SYSTEM_GLOSRY.html). A system ID consists of three characters and is the content of the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ [`sy-sysid`](ABENSYSTEM_FIELDS.html).

**system log**

Central storage location for the recording of system errors on an [AS instance](ABENAS_INSTANCE_GLOSRY.html). It is called via transaction code\\ `SM21`.

**system time zone**

Client-dependent [time zone](ABENTIME_ZONE_GLOSRY.html) of the [system time](ABENSYSTEM_TIME_GLOSRY.html) in [AS ABAP](ABENAS_ABAP_GLOSRY.html).

**temperature column**

Column of a [database table](ABENDATABASE_TABLE_GLOSRY.html) called `_DATAAGING`. On an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), the values in this column determine whether [data aging](ABENDATA_AGING_GLOSRY.html) data is current or obsolete.

**tenant**

Independent organizational unit that rents a hosting system from a provider. A tenant's [application programs](ABENAPPLICATION_PROGRAM_GLOSRY.html) are run along with those of other tenants on the hosting system. The applications from different tenants in a system are kept separate by means of tenant isolation and are based on the multitenancy concept. On a multitenancy\\ [AS ABAP](ABENAS_ABAP_GLOSRY.html), tenants are mapped to [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html). Multitenancy is not supported in the current release.

**text environment language**

Language of the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html). The text environment language is the content of the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ [`sy-langu`](ABENSYSTEM_FIELDS.html). At the beginning of each internal session, it is the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) and can be set explicitly with `SET LOCALE LANGUAGE`.

**text file**

File on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of an [AS instance](ABENAS_INSTANCE_GLOSRY.html) that has been opened using the addition `TEXT` of the statement `OPEN DATASET`. In a text file, the content is handled as text in the [character representation](ABENCHAR_REPRESENTATION_GLOSRY.html) that was chosen when the file was opened.

**transaction code**

Twenty-character name that is connected with a dynpro, another transaction code, or a [method](ABENMETHOD_GLOSRY.html) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) and is used to execute programs. Transaction codes linked with dynpros are possible for executable programs, module pools, and [function pools](ABENFUNCTION_POOL_GLOSRY.html). Parameter transactions and variant transactions are linked with other transaction codes. Transaction codes linked with methods are allowed for all program types that contain methods. Transaction codes are maintained and administrated using transaction code `SE93`.

**transaction owner**

The transaction owner is the leading application and is responsible for orchestrating the transaction. It is also responsible for triggering commit and rollback commands.

**transactional Remote Function Call**

tRFC for short. Obsolete remote function call in which the function called remotely is registered for execution and started using the statement [`COMMIT WORK`](ABAPCOMMIT.html).

**Transformation Editor**

Tool in the ABAP Workbench for creating [XSLT programs](ABENXSLT_PROGRAM_GLOSRY.html) or [Simple Transformations](ABENSIMPLE_TRANSFORMATION_GLOSRY.html) in [transformation source code](ABENXSLT_PROGRAM_GLOSRY.html). Called using the transaction code\\ `STRANS`.

**transformation source code**

[Source code](ABENSOURCE_CODE_GLOSRY.html) of [XSLT programs](ABENXSLT_PROGRAM_GLOSRY.html) and [Simple Transformations](ABENSIMPLE_TRANSFORMATION_GLOSRY.html) processed in the Transformation Editor.

**tRFC**

*\->*\\ transactional remote function call

**trusted system**

[AS ABAP](ABENAS_ABAP_GLOSRY.html) that is classified as a trusted caller of remote function calls in a trusting system. The trusted system provides the RFC client. The system is classified in transaction\\ `SMT1`. Trusted systems log on to the trusting system without passing a password. User-specific logon data is checked in the trusting system.

**trusting system**

[AS ABAP](ABENAS_ABAP_GLOSRY.html) that trusts a trusted system in calls using Remote Function Call. The trusting system provides the RFC server. The trusting systems can be listed in a trusted system using transaction code\\ `SMT2`.

**Unicode system**

[Single code page system](ABENSINGLE_CODEPAGE_SYSTEM_GLOSRY.html) in which characters are encoded in a [Unicode character representation](ABENUNICODE_CHAR_REPRESENT_GLOSRY.html). The [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html) of a Unicode system is [UTF-16](ABENUTF16_GLOSRY.html) with platform-dependent [byte order](ABENBYTE_ORDER_GLOSRY.html) of which the ABAP programming language supports the subset covered by [UCS-2](ABENUCS2_GLOSRY.html). All ABAP programs in a Unicode system must have the [ABAP language version](ABENABAP_VERSION_GLOSRY.html)\\ [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html). In the current [AS ABAP](ABENAS_ABAP_GLOSRY.html) release, only Unicode systems are supported.

**unrestricted ABAP language version**

[ABAP language version](ABENABAP_VERSION_GLOSRY.html) that is not restricted regarding the ABAP language scope and access to other repository objects. [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) is unrestricted. See also [restricted ABAP language versions](ABENRESTRICTED_VERSION_GLOSRY.html).

**update lock**

Area lock on an area instance version in the shared objects memory. An update lock enables to change an existing area instance version.

**update session**

[User session](ABENUSER_SESSION_GLOSRY.html) for synchronous and asynchronous updates. Local updates are not carried out in a separate update session.

**user interface**

All the control elements of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html). The user interface can be implemented by different technologies, such as the browser-based [SAPUI5](ABENSAPUI5_GLOSRY.html), Web Dynpro, or the user-installed SAP GUI.

**user master record**

A user master record must exist that a user can [log on](ABENLOGON_GLOSRY.html) to an [AS ABAP](ABENAS_ABAP_GLOSRY.html). The record determines which actions an [ABAP user](ABENABAP_USER_GLOSRY.html) with a certain [user name](ABENUSER_NAME_GLOSRY.html) is allowed to execute and which [authorizations](ABENAUTHORIZATION_GLOSRY.html) are granted. Default settings, such as [format settings](ABENFORMAT_SETTING_GLOSRY.html) for [character strings](ABENCHARACTER_STRING_GLOSRY.html) are also recorded in the user master record. User master records are maintained in transaction\\ `SU01`.

**user memory**

Memory area of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) to which all [ABAP sessions](ABENABAP_SESSION_GLOSRY.html) of a [user session](ABENUSER_SESSION_GLOSRY.html) have access. [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) have access to SPA/GPA parameters stored in the user memory. ABAP daemons access the subarea ABAP daemon memory of the user memory

**user session**

Status of an [AS instance](ABENAS_INSTANCE_GLOSRY.html) that exists between an [ABAP user](ABENABAP_USER_GLOSRY.html)\\ [logging on](ABENLOGON_GLOSRY.html) to the [AS ABAP](ABENAS_ABAP_GLOSRY.html) and off again. During the user session, the user can work with the AS ABAP. A user session is characterized by the [user name](ABENUSER_NAME_GLOSRY.html), [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) ([current client](ABENCURRENT_CLIENT_GLOSRY.html)), and [logon language](ABENLOGON_LANGUAGE_GLOSRY.html). There are different types of user sessions for different purposes and they can be opened in different ways- Each user session is linked with at least one and up to 16 [ABAP sessions](ABENABAP_SESSION_GLOSRY.html). The user memory is assigned to a user session has its own memory area.

**Web Application Builder**

Tool in ABAP Workbench for creating Business Server Pages. It can be called via *Create ->\\ `BSP` Library ->\\ `BSP` Application* in Object Navigator.

**Web Dynpro**

Technology used to create platform-independent Web-based interfaces, based on the Model View Controller (MVC) approach. Before the introduction of [SAPUI5](ABENSAPUI5_GLOSRY.html), Web Dynpro for ABAP was the standard SAP `UI` technology for developing Web applications on [Application Server ABAP](ABENAS_ABAP_GLOSRY.html). Web Dynpros for ABAP are created in the Web Dynpro Explorer.

**Web Dynpro Explorer**

Tool in the ABAP Workbench for creating Web Dynpros. Called via *Create -> Web Dynpro -> ...* in Object Navigator.

**WebSocket protocol**

`WSP` for short. A TCP based protocol for the bidirectional communication between a client and a server. Using ABAP Push Channels, an [AS ABAP](ABENAS_ABAP_GLOSRY.html) can be used as a server and as a client for the WebSocket protocol.

[**\-> More about**](http://tools.ietf.org/html/rfc6455)

**work process**

Component of an [AS ABAP](ABENAS_ABAP_GLOSRY.html)\\ [AS instance](ABENAS_INSTANCE_GLOSRY.html). Work processes execute applications written in ABAP. There are various types of work processes for different applications: dialog, enqueue, background, spool, and update work processes. Each work process is registered for the complete runtime of an AS instance on to the [standard database](ABENSTANDARD_DB_GLOSRY.html) of [AS ABAP](ABENAS_ABAP_GLOSRY.html) as a [database user](ABENDATABASE_USER_GLOSRY.html) using a [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html). In dialog processing, a work process is assigned to an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) for the duration of a dialog step.

**write lock**

Area lock on an area instance version in the shared objects memory. A write lock enables to create a new area instance version.

**XML reader**

[Instance](ABENINSTANCE_GLOSRY.html) of a [class](ABENCLASS_GLOSRY.html) of the [sXML Library](ABENSXML_LIBRARY_GLOSRY.html) that implements the [interface](ABENOO_INTF_GLOSRY.html)\\ `IF_SXML_READER`. An XML reader enables the parsing of [XML](ABENXML_GLOSRY.html) data in different [formats](ABENABAP_SXML_LIB_FORMATS.html).

**XML writer**

[Instance](ABENINSTANCE_GLOSRY.html) of a [class](ABENCLASS_GLOSRY.html) of the [sXML Library](ABENSXML_LIBRARY_GLOSRY.html) that implements the [interface](ABENOO_INTF_GLOSRY.html)\\ `IF_SXML_WRITER`. An XML writer enables the rendering of [XML](ABENXML_GLOSRY.html) in different [formats](ABENABAP_SXML_LIB_FORMATS.html).

**XSL transformation**

Program written in [XSLT](ABENXSLT_GLOSRY.html) to transform [XML](ABENXML_GLOSRY.html) data. XSL transformations of the [repository](ABENREPOSITORY_GLOSRY.html) are edited in Transformation Editor and called using the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html). Implicit [serializations](ABENSERIALIZATION_GLOSRY.html) and [deserializations](ABENDESERIALIZATION_GLOSRY.html) allow the direct transformation of ABAP data into XML formats and vice versa.

**XSLT program**

*\->*\\ [XSL transformation](ABENXSL_TRANSFORMATION_GLOSRY.html)

-   The [ABAP language version](ABENABAP_VERSION_GLOSRY.html) is restricted to the [restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html)\\ [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).
-   Access to other [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) is restricted to APIs that are [released](ABENRELEASED_API_GLOSRY.html) for [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).
-   Only [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) can be used. There is no access to SAP GUI.

-   [SAP BTP ABAP environment](ABENSAP_BTP_ABAP_ENV_GLOSRY.html)
-   [SAP S/4HANA Cloud Public Edition](ABENSAP_S4HANA_CPUB_GLOSRY.html)
-   [SAP S/4HANA Cloud Private Edition](ABENSAP_S4HANA_CPRIV_GLOSRY.html)

-   Its main programming language [ABAP](ABENABALA_GLOSRY.html) and other programming languages such as [CDS DDL](ABENCDS_DDL_GLOSRY.html) for metadata definitions.
-   Development tools such as [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) or the ABAP Workbench.
-   Other [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) that can be accessed as APIs.

-   In [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html):

-   The [ABAP language version](ABENABAP_VERSION_GLOSRY.html) is restricted to [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).
-   Access to other [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) is restricted to [released APIs](ABENRELEASED_API_GLOSRY.html).
-   Only [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) can be used. There is no access to SAP GUI.

-   In [classic ABAP](ABENCLASSIC_ABAP_GLOSRY.html):

-   The [ABAP language version](ABENABAP_VERSION_GLOSRY.html) can be chosen freely.
-   [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) and the ABAP Workbench can both be used.
-   Access to other [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) is not restricted.

-   [SAP BTP ABAP environment](ABENSAP_BTP_ABAP_ENV_GLOSRY.html).
-   [ABAP development environment](ABENABAP_DEV_ENVIR_GLOSRY.html).
-   [SAP S/4HANA Cloud ABAP environment](ABENS4_HANA_CLOUD_ABAP_ENV_GLOSRY.html)
-   AS ABAP system environment
-   [ABAP runtime environment](ABENABAP_RUNTIME_ENVIR_GLOSRY.html)

-   ABAP-specific components of the [presentation layer](ABENPRESENTATION_LAYER_GLOSRY.html), such as SAP GUI or web-based technologies.
-   [Application Server ABAP (AS ABAP)](ABENAS_ABAP_GLOSRY.html)
-   [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) of the [standard database](ABENSTANDARD_DB_GLOSRY.html) of the AS ABAP storing both [system programs](ABENSYSTEM_PROGRAM_GLOSRY.html) and [system tables](ABENSYSTEM_TABLE_GLOSRY.html), as well as [application programs](ABENAPPLICATION_PROGRAM_GLOSRY.html) and [application tables](ABENAPPLICATION_TABLE_GLOSRY.html).

-   [ABAP - Release Contracts](ABENABAP_RELEASE_CONTRACTS.html)
-   [Contract Checks for Released APIs](ABENRESTRICTED_APIS_ATC_CHECKS.html)

-   [Views](ABENVIEW_GLOSRY.html)
-   L libraries
-   [Graph workspaces](ABENGRAPH_WORKSPACE_GLOSRY.html)

-   logical local database schema
-   [CDS logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html)

-   [C0 contract, release](ABENC0_CONTRACT_GLOSRY.html), which allows enhancement fields to be added at specified extension options.
-   [C1 contract, use system-internally](ABENC1_CONTRACT_GLOSRY.html), which guarantees a stable interface for use within the [AS ABAP](ABENAS_ABAP_GLOSRY.html)
-   [C2 contract, use as remote API](ABENC2_CONTRACT_GLOSRY.html), which also guarantees a stable interface for use outside the AS ABAP.
-   [C3 contract, manage configuration content](ABENC3_CONTRACT_GLOSRY.html), which ensures a stable persistence for configuration content.
-   [C4 contract, use in ABAP-Managed Database Procedures](ABENC4_CONTRACT_GLOSRY.html), which guarantees a stable interface of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) for use in other AMDP methods.

-   A [release contract](ABENRELEASE_CONTRACT_GLOSRY.html) that governs changes to released APIs.
-   Visibility for a [restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html).

-   The ABAP language scope is limited.
-   Access to other repository objects is restricted by [released APIs](ABENRELEASED_API_GLOSRY.html).

-   [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html)
-   [ABAP for Key Users](ABENABAP_FOR_KEY_USERS_GLOSRY.html)

-   Rule-based optimization (declarative): Rewriting of the entire tree by, for example, removing joins. More efficient queries are produced at best.
-   Cost-based optimization (procedural): Discovering the space of access plans of the queries produced during the rule-based optimization and comparing the access plans by cost and size. The cheapest query is used for further processing.

-   [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html), the name of the SQL View is the same as the name of the DDIC database view
-   [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), the name of the SQL view is the same as the name of the CDS view entity
-   [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html), where the name of the SQL view is the same as the name of the CDS transactional query
-   [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html), where the name of the SQL view is the same as the name of the CDS transactional interface
-   [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html), the name of the SQL view is the same as the name of the CDS hierarchy view
-   [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), the name of the SQL view is the same as the name of the respective [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html)

1.  Defined in the AS ABAP by a [user name](ABENUSER_NAME_GLOSRY.html) and a [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html) in transaction code\\ `SU01`.
2.  User (person or other system) that is logged on to the AS ABAP.

abenabap.html abenabap\_reference.html abenabap\_oview.html