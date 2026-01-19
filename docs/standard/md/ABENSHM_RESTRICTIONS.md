---
title: "ABENSHM_RESTRICTIONS"
description: |
  ABENSHM_RESTRICTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_RESTRICTIONS.htm"
abapFile: "ABENSHM_RESTRICTIONS.html"
keywords: ["if", "class", "data", "types", "ABENSHM", "RESTRICTIONS"]
---

Currently, the following restrictions apply to shared objects:

On 32-bit systems, only a limited amount of memory space is available for storing shared objects, due to the limited address space. For this reason, shared objects could only be used on 32-bit systems under certain conditions.

-   When data objects referenced using data references are stored, there is a restriction that the dynamic type cannot have been created at program runtime. Direct references to data elements and table types in the ABAP Dictionary are, however, possible.
-   Memory bottlenecks can occur in the shared objects memory, but can also be handled. The associated exception class is `CX_SHM_OUT_OF_MEMORY`.
-   There is no memory restriction for logical areas, which generally consist of many area instances. There are currently only memory restrictions for individual area instances.
-   The lifetime of area instances cannot be bound to the lifetime of user sessions, ABAP sessions, or transactions. Area instances currently exist as long as the AS instance.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html