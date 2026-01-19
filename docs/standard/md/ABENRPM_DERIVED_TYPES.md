---
title: "ABENRPM_DERIVED_TYPES"
description: |
  ABENRPM_DERIVED_TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRPM_DERIVED_TYPES.htm"
abapFile: "ABENRPM_DERIVED_TYPES.html"
keywords: ["update", "do", "if", "method", "data", "types", "internal-table", "ABENRPM", "DERIVED", "TYPES"]
---

[BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) are special data types within the RAP context. The types are derived by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) from [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and their behavior definition in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). In ABAP, BDEF derived types are used to provide type-safe access to RAP BOs. As an essential part of RAP, internal tables and structures that are typed with BDEF derived types are used for the communication and to exchange data between [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) and [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html), thus, enabling mass processing of data.

Each BDEF derived type can be categorized as input or output (result) derived type according to its use as import or export parameter in methods of [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html). For example, the types `... FOR CREATE ...` or `... FOR UPDATE ...` are used for providing input; `... FOR READ RESULT ...`, `... FOR ACTION RESULT ...` or `... FOR FAILED ...` are used to return a result.

Internal tables and structures that are typed with BDEF derived types contain components of CDS entities like key and data fields that retain their original data type. Yet, BDEF derived types also contain additional RAP components that do not derive their data type from the entity. They have special, tailor-made types that provide additional information required in the context of transactional processing. The names of those RAP components begin with `%` to avoid naming conflicts with components of the CDS entities. Among the components, there are [component groups](ABENCOMPONENT_GROUP_GLOSRY.html) available summarizing groups of table columns under a single name. In doing so, they simplify the handling of derived types for developers. For example, `%key` summarizes all primary keys. For details on the components, see the topic [Components of BDEF Derived Types](ABAPDERIVED_TYPES_COMP.html).

The parameters of [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) are mainly typed with BDEF derived types. Derived types can also be used outside of those operations in ABAP programs using [ABAP EML](ABENAEML_GLOSRY.html). They can be [explicitly declared](ABAPDERIVED_TYPES_DECLARATION.html) using a variable, for example, with the statements `TYPES`, `DATA` and `CREATE`.

Derived types can be declared using the following variants:

BDEF derived types are created automatically and are known only to the ABAP compiler. For example, the element information for a variable typed with a BDEF derived type can be called by choosing F2 in ADT to display the components.

-   [`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html)
-   [`TYPE STRUCTURE FOR`](ABAPTYPE_STRUCTURE_FOR.html)
-   [`TYPE REQUEST FOR`](ABAPTYPE_REQUEST_FOR.html)
-   [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html)

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html