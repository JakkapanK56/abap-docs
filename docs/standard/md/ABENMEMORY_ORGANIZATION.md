---
title: "ABENMEMORY_ORGANIZATION"
description: |
  ABENMEMORY_ORGANIZATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMEMORY_ORGANIZATION.htm"
abapFile: "ABENMEMORY_ORGANIZATION.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "ABENMEMORY", "ORGANIZATION"]
---

This section describes the [sessions](ABENSESSION_GLOSRY.html) of an AS ABAP in which ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detailed description, see the documentation [Memory Management](https://help.sap.com/docs/ABAP_PLATFORM_NEW/f146e75588924fa4987b6c8f1a7a8c7e/49325d4ee93934ffe10000000a421937) in SAP Help Portal.

The following figure shows the general organization of sessions for ABAP programs and their memory areas up to the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) level:

An [AS ABAP](ABENAS_ABAP_GLOSRY.html) can be distributed across multiple [AS instances](ABENAS_INSTANCE_GLOSRY.html). If an AS ABAP is implemented using multiple AS instances, they are usually instantiated on different [host computers](ABENHOST_COMPUTER_GLOSRY.html), which do not have to have the same operating system. However, multiple AS instances of one or more AS ABAP can also be instantiated on the same host computer. AS instances communicate with the [presentation layer](ABENPRESENTATION_LAYER_GLOSRY.html), the [database layer](ABENDATABASE_LAYER_GLOSRY.html), and with each other using the [message server](ABENMESSAGE_SERVER_GLOSRY.html). The most important components of an AS instance are its [work processes](ABENWORK_PROCESS_GLOSRY.html), the number and [type](ABENTYPE_GLOSRY.html) of which are determined when the AS ABAP is started. An [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) is executed by a suitable AS instance work process.

The transaction `SM51` shows an overview of the AS instances of the current AS ABAP and on which host computers they are instantiated. The name of the current AS instance can be determined in an ABAP Program using the method `GET_INSTANCE_NAME` of the system class `CL_ABAP_SYST`. This name has the form `hostname_sysid_instnr`. Here, `hostname` is the name of the host computer of the AS instance, `sysid` is the name of the AS ABAP, and `instnr` is the instance number of the AS instance. The network name of the host computer on which the current AS instance is instantiated can be found in the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-host`.

Every AS instance has access to the [standard database](ABENSTANDARD_DB_GLOSRY.html) of the AS ABAP. Every AS instance has its own [shared memory](ABENSHARED_MEMORY_GLOSRY.html). The ABAP runtime framework uses the shared memory for programs, program data, and buffers (for example, during [table buffering](ABENTABLE_BUFFERING_GLOSRY.html)). ABAP programs can store [shared objects](ABENSHARED_OBJECTS_GLOSRY.html) and [data clusters](ABENDATA_CLUSTER_GLOSRY.html) in the shared memory.

The shared memory is frequently used and therefore may be a sparse resource, which can result in bottlenecks when explicitly storing data from ABAP programs.

Gets the name of the current AS instance.

Logging on to an AS instance opens a [user session](ABENUSER_SESSION_GLOSRY.html). Logons take place using [SAP GUI](ABENSAP_GUI_GLOSRY.html), the [RFC interface](ABENRFC_INTERFACE_GLOSRY.html), or [ICF](ABENICF_GLOSRY.html) (including [APC](ABENAPC_GLOSRY.html)). A user session is assigned a separate memory area, the [user memory](ABENUSER_MEMORY_GLOSRY.html), which can be used as follows in ABAP programs:

The maximum number of user sessions is determined by the profile parameter `rdisp/tm_max_no`. The profile parameter `rdisp/rfc_max_login` determines which percentage of the sessions can be opened using the RFC interface.

For more information, see [User Sessions](ABENUSER_SESSIONS.html).

An [ABAP session](ABENABAP_SESSION_GLOSRY.html) is opened for each user session. Each ABAP session is assigned its own memory area [ABAP memory](ABENABAP_MEMORY_GLOSRY.html), in which [data clusters](ABENDATA_CLUSTER_GLOSRY.html) can be stored. The programs of a [call sequence](ABENCALL_SEQUENCE_GLOSRY.html) share access to these clusters and the data is retained for as long as the [top level transaction](ABENTOP_LEVEL_TRANSACTION_GLOSRY.html) of the call sequence remains. The [SAP Easy Access](ABENSAP_EASY_ACCESS_GLOSRY.html) program does not work as a top level transaction for the ABAP memory.

Additional ABAP sessions for a user session can be opened as follows:

A maximum of 16 ABAP sessions are possible per user session. The number of sessions that is actually possible for a system is determined by the profile parameter `rdisp/max_alt_modes`, whose default value is 16.

Each [call](ABENABAP_PROGRAM_CALL.html) of an ABAP program creates a new [internal session](ABENINTERNAL_SESSION.html), in which the called program is loaded.

An internal session contains a [session memory](ABENROLL_AREA_GLOSRY.html) that is divided into the areas [heap](ABENHEAP_GLOSRY.html) and [stack](ABENSTACK_GLOSRY.html) from the perspective of an ABAP program. The modifiable [objects](ABENOBJECT_GLOSRY.html) of the program live there. The non-modifiable data of the program is stored in the [PXA](ABENPXA_GLOSRY.html). The session memory contains references to the required data in the PXA. From a technical perspective, the session memory and the global PXA are stored in the shared memory of the AS instance where they are managed by the SAP Memory Management.

In an ABAP session, there can be a maximum of nine internal sessions that always belong to a [call sequence](ABENCALL_SEQUENCE_GLOSRY.html). Data from the ABAP memory is always assigned to a call sequence.

On 64-bit platforms, an internal session can theoretically require up to 4 TB of memory. The practical upper limit is usually below the theoretical limit, since the actual physically installed main memory is the maximum available and divided up among all users.

Further information about the way ABAP programs are organized in an internal session can be found in [Programs in the Internal Session](ABENINTERNAL_SESSION.html).

Usage of `CL_SESSION_INFO`.

-   The user memory stores [SPA/GPA parameters](ABENSPA_GPA_PARAMETER_GLOSRY.html) that can be accessed using the statements [`SET PARAMETER`](ABAPSET_PARAMETER.html) and [`GET PARAMETER`](ABAPGET_PARAMETER.html).
-   The [ABAP Daemon Memory](ABENABAP_DAEMON_MEMORY_GLOSRY.html) is a subarea of the user memory in which [ABAP daemons](ABENABAP_DAEMON_GLOSRY.html) can store context information in [PCP](ABENPCP_GLOSRY.html) format.

-   Enter a transaction code after */o* in the command field in the [toolbar](ABENSYMBOL_TOOLBAR_GLOSRY.html).
-   Call the function module `TH_CREATE_MODE`.
-   Call a [dynpro](ABENDYNPRO_GLOSRY.html) during the processing of [asynchronous RFC](ABENASYNCHRONOUS_RFC_GLOSRY.html). In the RFC client, an additional ABAP session for communication with the SAP GUI is required.

-   The [ABAP memory](ABENABAP_MEMORY_GLOSRY.html) can be used to transfer data between the programs in a [call sequence](ABENCALL_SEQUENCE_GLOSRY.html).
-   For logging and analysis purposes, each ABAP session has an [\>extended passport (EPP)](ABENEPP_GLOSRY.html) that contains constant values and that can be passed on to communication partners, such as other ABAP sessions or external interfaces, whereby modifiable values are set for the respective connection.

-   The available session memory is defined using the [profile parameters](ABENPROFILE_PARAMETER_GLOSRY.html) described under [Session Memory](https://help.sap.com/docs/ABAP_PLATFORM_NEW/f146e75588924fa4987b6c8f1a7a8c7e/11c6413c521e4a13adf7473af49e8291). It is also possible to define a percentage of the available memory as a limit, over which a [runtime warning](ABENRUNTIME_WARNING_GLOSRY.html) occurs.
-   Instances of classes, except for [shared objects](ABENSHARED_OBJECTS_GLOSRY.html), are located in the internal session. It is therefore not possible to store references to objects in the ABAP memory.
-   On 32-bit platforms, that are not supported any more, the theoretical upper limit for the memory that an internal session could require was 4GB.
-   Class `CL_SESSION_INFO` returns information about the current session.

cl\_demo\_output=>display( cl\_abap\_syst=>get\_instance\_name( ) ). TRY. \\n FINAL(session\_info) = NEW cl\_session\_info( )->get\_info( ). \\n CATCH cx\_ssi\_exception. \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_oview.html abenorganization\_of\_modules.html