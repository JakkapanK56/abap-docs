---
title: "ABENRFC_INTERFACE"
description: |
  ABENRFC_INTERFACE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRFC_INTERFACE.htm"
abapFile: "ABENRFC_INTERFACE.html"
keywords: ["do", "if", "data", "types", "ABENRFC", "INTERFACE"]
---

The RFC interface is required to execute a remote function call. The RFC interface performs the following services:

If the AS ABAP are not the same, two ABAP programs communicate with each other using the RFC interface, whereas for communication between an AS ABAP and an external system, an ABAP program connects with a program in a different programming language (C, C++, Visual Basic, Java or .NET).

For communication with programs in other programming languages, RFC libraries are available for all operating systems supported by SAP, including MS Windows, Unix and Linux:

Each execution of an RFC using the RFC interface on an AS ABAP takes place in its own user session. The logon data is usually stored in the RFC destination.

For more information about the about the RFC interface, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

-   Calling and controlling the communication routines that are needed to communicate with the remote system.
-   Logging on to and logging off from the remote system and authorization checks for the function pools used.
-   Converting actual parameters to the format required in the remote system and vice-versa. This includes any platform-dependent conversions, for example, for different [code pages](ABENCODEPAGE_GLOSRY.html) or byte orders. The conversion supports all ABAP data types.
-   Handling of errors that occur during communication and forwarding them to the caller if [requested](ABENRFC_EXCEPTION.html).

-   Java Connector (JCo) for Java
-   .NET Connector for .NET (C#, VB.NET)
-   RFC Software Development Kit (SDK) for C and C++

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc.html