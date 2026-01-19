---
title: "ABENBDL_AUXILIARY_CLASS"
description: |
  ABENBDL_AUXILIARY_CLASS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_AUXILIARY_CLASS.htm"
abapFile: "ABENBDL_AUXILIARY_CLASS.html"
keywords: ["update", "delete", "do", "if", "method", "class", "ABENBDL", "AUXILIARY", "CLASS"]
---

`... auxiliary class ClassName1 [,ClassName2][,ClassName3]\ [, ...];`

Specifies additional [ABP auxiliary classes](ABENABP_AUX_CLASS_GLOSRY.html)\\ `ClassName1`, `ClassName2`, ... with enhanced access rights to the referenced RAP BO. The primary purpose of an ABP auxiliary class is to support implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). This is accomplished by providing reusable methods and allowing developers to concurrently implement [RAP behavior](ABENRAP_BEHAVIOR_GLOSRY.html).

An auxiliary class refers to exactly one RAP BO and it has enhanced access rights to this RAP BO, for example, it can access the RAP BO in question using the ABAP EML statement [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html). This makes it possible to implement reusable methods for an ABP, to outsource functionality, and to facilitate concurrent work. For details on the implementation of an ABP auxiliary class, see the topic [ABP Auxiliary Class](ABAPRAP_AUXILIARY_CLASS.html).

The auxiliary classes `ClassName1`, `ClassName2`, ... cannot be named after [`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE.html), this means, the auxiliary classes and the ABAP behavior pool are separate classes. Each auxiliary class can be specified exactly once in a RAP BO. An auxiliary class refers to exactly one RAP BO and it must not be reused in different RAP BOs.

As a prerequisite for specifying the auxiliary class, [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) must be switched on using the syntax `strict(version)`.

Another way to divide the implementation-relevant parts of a [RAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html) is by using implementation groups, defined using the syntax [`group`](ABENBDL_GROUPING.html). The difference is that implementation groups can implement [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) and [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html), so that the implementation can be distributed to different implementation classes. Auxiliary classes, on the other hand, cannot implement any [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) and [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html). They have enhanced access rights to the RAP BO they refer to and they can implement functionality that can be called from the ABAP behavior pool of the respective RAP BO. In other words, an auxiliary class can be used to outsource functionality from an ABAP behavior pool. For further details on implementation grouping, see the topic [RAP - `group`](ABENBDL_GROUPING.html).

The following [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_AUX_M` specifies an auxiliary class:

[ABP Auxiliary Class](ABAPRAP_AUXILIARY_CLASS.html)

[ABP Auxiliary Class](ABENABP_AUX_CL_ABEXA.html)

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   The syntax `auxiliary class` is not available in any other [BDEF implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html) and it is not available in [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html).

managed implementation in class bp\_demo\_aux\_m unique;\\nstrict ( 2 );\\nauxiliary class cl\_demo\_rap\_abp\_aux\_cl;\\n\\ndefine behavior for demo\_aux\_m\\npersistent table demo\_tab\_root\_8\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) key\_field;\\n action div;\\n action multiply;\\n action powers;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html