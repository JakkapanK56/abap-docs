---
title: "ABENOS_EXCEPTIONS"
description: |
  ABENOS_EXCEPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_EXCEPTIONS.htm"
abapFile: "ABENOS_EXCEPTIONS.html"
keywords: ["select", "insert", "update", "delete", "do", "while", "class", "ABENOS", "EXCEPTIONS"]
---

The exception classes of the Object Services start with the prefix `CX_OS_`. The exceptions of category `CX_DYNAMIC_CHECK` are propagated to the caller by Object Services and must be handled by the consumer.

The subclasses `CX_OS_NO_CHECK_CONTAINER` and `CX_OS_MIGRATION` of `CX_NO_CHECK` are for internal purposes: The first, as a container, allows exceptions of the `CX_DYNAMIC_CHECK` category from internal event handlers to be propagated, while the second is used for migration purposes.

For a more detailed description of the exception classes, see the relevant class documentation.

`` \ `CX_ROOT`\ | |--`CX_DYNAMIC_CHECK`\ | | | |--`CX_OS_ERROR`\ | | | |--`CX_OS_CHECK_AGENT_FAILED`\ | | | |--`CX_OS_CLASS_NOT_FOUND`\ | | | |--`CX_OS_OBJECT`\ | | | | | |--`CX_OS_OBJECT_NOT_FOUND`\ | | | | | |--`CX_OS_OBJECT_EXISTING`\ | | | | | |--`CX_OS_OBJECT_NOT_EXISTING`\ | | | | | |--`CX_OS_OBJECT_NOT_REFRESHABLE`\ | | | | | |--`CX_OS_OBJECT_NOT_RELEASABLE`\ | | | | | |--`CX_OS_OBJECT_REFERENCE`\ | | | | | |--`CX_OS_OBJECT_STATE`\ | | | |--`CX_OS_QUERY_ERROR`\ | | | | | |--`CX_OS_QUERY_ATTRIBUTE_ERROR`\ | | | | | |--`CX_OS_QUERY_EXPR_FACT_ERROR`\ | | | | | |--`CX_OS_QUERY_PARAMETER_ERROR`\ | | | | | |--`CX_OS_QUERY_PARSE_ERROR`\ | | | |--`CX_OS_TRANSACTION`\ | |--`CX_NO_CHECK`\ | |--`CX_OS_SYSTEM_ERROR`\ | | | |--`CX_OS_DB`\ | | | | | |--`CX_OS_DB_SELECT`\ | | | | | |--`CX_OS_DB_INSERT`\ | | | | | |--`CX_OS_DB_UPDATE`\ | | | | | |--`CX_OS_DB_DELETE`\ | | | |--`CX_OS_DUPLICATE_OBJECT`\ | | | |--`CX_OS_INCONSISTENT_OBJECT`\ | | | |--`CX_OS_INTERNAL_ERROR`\ | | | |--`CX_OS_NO_IMPLEMENTATION`\ | | | |--`CX_OS_OBJECT_REFERENCE`\ | | | |--`CX_OS_OBJECT_STATE`\ | | | |--`CX_OS_SYSTEM`\ | | | |--`CX_OS_TRANSACTION_MODE`\ | |--`CX_OS_MIGRATION`\ | |--`CX_OS_NO_CHECK_CONTAINER` ``

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html