---
title: "ABENAPP_SERVER_RESOURCES"
description: |
  ABENAPP_SERVER_RESOURCES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAPP_SERVER_RESOURCES.htm"
abapFile: "ABENAPP_SERVER_RESOURCES.html"
keywords: ["if", "case", "try", "ABENAPP", "SERVER", "RESOURCES"]
---

If one of the following criteria is not fulfilled, no resources are made available for the parallelization with asynchronous RFC (or triggered by the system in the exceptional case `RESOURCE_FAILURE`):

-   **Number of available dialog work processes: 1**
-   The standard value is 1. By default, a certain number of dialog work processes are kept free as reserve instances for other purposes, such as system logon or administration programs. For this reason, a greater number of dialog processes must be free, than the number specified in the profile parameter for the standard value.
-   **Percentage of user-specific dialog work processes: 75%**
-   This default value can be changed using the profile parameter `rdisp/rfc_max_own_used_wp`. The number of dialog work processes is defined using the profile parameter `rdisp/wp_no_dia`.
-   **Percentage of waiting requests in dialog queue: 5%**
-   This default value (5% of the entire length of the dialog wait queue) can by changed by the `rdisp/rfc_max_queue` profile parameter.
-   The length of the dialog queues is defined using the profile parameter `rdisp/elem_per_queue`.
-   **Percentage of logons to the system: 90%**
-   If the percentage of users already logged on exceeds this, then no resources are released.
-   This default value can be changed using the profile parameter `rdisp/rfc_max_login`.
-   The maximum number of logons to a server is configured using the profile parameter `rdisp/tm_max_no`.
-   **Percentage of own logons to system: 25%**
-   This default value (25% of all logons) can be changed using the profile parameter `rdisp/rfc_max_own_login`. For each RFC, a logon to the target system takes place.
-   **Percentage of used communication entries: 90%**
-   Every server has a limited number of communication channels. The default limit value is 90 per cent. \\nThis value can be changed using the profile parameter `rdisp/rfc_max_comm_entries`. The maximum number of communication channels is configured using the profile parameter `rdisp/max_comm_entries`. Here, one entry for each connection is made for the client and server.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abapcall\_function\_starting.html