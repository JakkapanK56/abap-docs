---
title: "ABENBDL_DEFINE_KEY"
description: |
  ABENBDL_DEFINE_KEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_DEFINE_KEY.htm"
abapFile: "ABENBDL_DEFINE_KEY.html"
keywords: ["update", "delete", "loop", "do", "if", "class", "data", "types", "internal-table", "ABENBDL", "DEFINE", "KEY"]
---

`define \{pure|secondary\} key AlternativeKey \{ altKeyField1; altKeyField2; \}`

In general, behavior definitions have the following types of keys:

In addition, the following types of user-defined keys exist:

Syntax rules:

BDEF alternative keys are used, for example, to define the signature of a RAP key function to enable [read-by-association](ABENRAP_RBA_OPERATION_GLOSRY.html) operations in RAP BOs with [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html) involving RAP reuse objects.

The syntax `define key` is obsolete and should not be used. `define secondary key` or `define pure key` should be used instead.

The following example shows a managed BDEF that defines an alternative key `SecondIndex`.

The following code snippet accesses an internal table typed with the BDEF derived type of the managed BDEF `DEMO_RAP_R_M_DEFINE_KEY` using the secondary table key `SecondIndex`.

The following example shows a managed BDEF that defines the BDEF pure key `MyAltKey` for the key function `GetByAltKey`.

The key function `GetByAltKey` can be executed as shown in the following code snippet:

As a result, all entity instances that have the value *aaa* in the field `char_field` are returned in the result parameter `result`.

-   The [primary key](ABENPRIMARY_KEY_GLOSRY.html) of a RAP BO is derived from the key definition of the underlying CDS data model.
-   There are several predefined [secondary table keys for BDEF derived types](ABAPDERIVED_TYPES_SECONDARY_KEYS.html).

-   [BDEF Pure Key](ABENRAP_PURE_KEY_GLOSRY.html)
-   A BDEF pure key `AlternativeKey` defines a set of fields of the underlying CDS entity that can be used as an alternative key. For example, a BDEF pure key is used to define the signature of a [key function](ABENBDL_KEYFUNCTION.html).
-   [BDEF Secondary Key](ABENRAP_SECONDARY_KEY_GLOSRY.html)
-   A BDEF secondary key `AlternativeKey` has the same effect as a BDEF pure key. In addition, it defines a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) for all [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) that contain the component [`%data`](ABAPDERIVED_TYPES_DATA.html), such as [`TABLE FOR CREATE`](ABAPTYPE_TABLE_FOR.html), [`TABLE FOR UPDATE`](ABAPTYPE_TABLE_FOR.html), [`TABLE FOR READ RESULT`](ABAPTYPE_TABLE_FOR.html), and [`TABLE FOR CHANGE`](ABAPTYPE_TABLE_FOR.html).

-   The name `AlternativeKey` can be used to address the alternative key. It must follow the [naming conventions](ABENNAMING_CONVENTIONS.html). For more details, see the topic [`TYPES`, `secondary_key`](ABAPTYPES_SECONDARY_KEY.html).
-   The [alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html)\\ `AlternativeKey` consists of one or more fields `altKeyField1`, `altKeyField2`, ..., from the underlying CDS entity. Each field can only be used once.
-   There can be a maximum of ten secondary keys for each RAP BO entity in a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). The number of pure keys is not limited.
-   BDEF secondary keys have the same restrictions as secondary table keys in internal tables. In particular, the fields of a secondary table key cannot be a subset of the fields of another secondary table key. For details, see [`TYPES`, `secondary_key`](ABAPTYPES_SECONDARY_KEY.html).

-   The fields `altKeyField1`, `altKeyField2`, ... should not have one of the following data types: `STRING`, `RAWSTRING`, `GEOM_EWKB`, `LCHR`, and `LRAW`.
-   Alternative keys cannot be defined in BDEF extensions.

-   BDEF pure keys are recommended for defining a [RAP key function](ABENRAP_KEY_FUNCTION_GLOSRY.html). For details, see the topic [RAP - `key function`](ABENBDL_KEYFUNCTION.html).
-   BDEF secondary keys are recommended if you want to support efficient looping over tables that use these fields as a secondary index.

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html).
-   In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) and in a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), alternative keys from the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

managed implementation in class bp\_demo\_rap\_r\_m\_define\_key unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_R\_M\_DEFINE\_KEY alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete;\\n\\n field(readonly) key\_field;\\n\\n define secondary key SecondIndex \\{ char\_field; dec\_field; \\}\\n\\} DATA te TYPE TABLE FOR READ RESULT DEMO\_RAP\_R\_M\_DEFINE\_KEY. \\n\\ \\nLOOP AT te ASSIGNING FIELD-SYMBOL() \\n USING KEY SecondIndex \\n WHERE char\_field = 'A'. \\n ENDLOOP. managed implementation in class bp\_demo\_rap\_pure\_key unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_PURE\_KEY alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly ) key\_field;\\n\\n define pure key MyAltKey \\{ char\_field; \\}\\n\\n key ( MyAltKey ) function GetByAltKey;\\n\\} READ ENTITIES OF demo\_rap\_pure\_key \\nENTITY root \\nEXECUTE getbyaltkey FROM VALUE #( \\n ( %cid = '1' %param-char\_field = 'aaa' ) ) \\nRESULT DATA(result). abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html