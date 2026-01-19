---
title: "ABENNEWS-40-RFC"
description: |
  ABENNEWS-40-RFC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-RFC.htm"
abapFile: "ABENNEWS-40-RFC.html"
keywords: ["if", "case", "data", "ABENNEWS", "RFC"]
---

[1. `WAIT` Statement](#ABAP_MODIFICATION_1@4@) 

[2. `RECEIVE` Statement](#ABAP_MODIFICATION_2@4@) 

[3\. Error Messages from the Remote System](#ABAP_MODIFICATION_3@4@)

[4\. Load Checks for Asynchronous RFC](#ABAP_MODIFICATION_4@4@)

[5\. SNC Option Maintenance for RFC Destinations](#ABAP_MODIFICATION_5@4@)

[6\. RFC Clients as Trusted Systems](#ABAP_MODIFICATION_6@4@)

[7\. Authorization Check](#ABAP_MODIFICATION_7@4@)

``[`WAIT`](ABAPWAIT_ARFC.html)\ [UNTIL condition] UP TO time SECONDS``

The statement `WAIT` makes it possible to wait for a response from a function module called asynchronously. This requires the addition `PERFORMING form ON END OF TASK`. `WAIT` must be executed in the same [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

``RECEIVE RESULTS FROM FUNCTION func [`KEEPING TASK`](ABAPRECEIVE.html)``

The `KEEPING TASK` addition preserves the remote context in the subroutine for reuse.

If an error occurs in the target system in RFC, details of the [error message](ABENERROR_MESSAGE_GLOSRY.html) are passed to the calling system (`SY-MSGNO, SY-MSGID, SY-MSGTY, SY-MSGV1, SY-MSGV2, SY-MSGV3`, and `SY-MSGV4`). These fields are set to initial in each RFC call.

For each RFC [destination](ABENRFC_DEST_GLOSRY.html), an improved load check is performed for asynchronous RFCs (menu path `Destination -``>ARFC Options` in the RFC destination maintenance screen in [AS ABAP](ABENAS_ABAP_GLOSRY.html)). Before the function module is executed, the system makes sure that the target host has enough resources. If the host is overloaded, the execution of the function module is delayed (internally) for a short time. The algorithm used to determine the load situation on the target machine is the same used in asynchronous RFC with the addition ``[`DESTINATION IN GROUP`](ABAPCALL_FUNCTION_STARTING.html)``. Be aware that this option can only be used for target hosts from ABAP release 3.1H.

It is possible to define security options for each RFC destination. This is also possible for `RFC Secure Network Communication`. The `SNC` component (`Secure Network Communications`) provides added protection, for example by encrypting data transfers and applying secure mutual authorization between communication partners.

To use `SNC`, an external security product must be installed and entered in the profile (see, for example, parameter `snc/enable`). If `SNC` is used, it is possible to specify whether additional protection functions are used for this destination in the `SNC Mode` setting. If this is the case, additional `SNC options` must be defined in the menu bar: `Destination -> SNC Options`.

An RFC client that is registered as a trusted system can log on to the RFC server without a password. Trusted systems must be defined in the trusting system (the RFC server) using the transaction `SMT1`. In the trusted system, the transaction code `SMT2` can be used to define which systems act as trusting systems.

If RFC communication takes place within a single system and in the same user context (with the same client and user name), no RFC authorization check based on function pools (using the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `S_RFC`) is performed. More information about this topic can be found in [RFC Authorizations](ABENRFC_AUTHORITY.html).

abenabap.html abennews.html abennews-4.html abennews-40.html