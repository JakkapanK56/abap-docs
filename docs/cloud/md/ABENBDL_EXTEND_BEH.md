---
title: "ABENBDL_EXTEND_BEH"
description: |
  ABENBDL_EXTEND_BEH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EXTEND_BEH.htm"
abapFile: "ABENBDL_EXTEND_BEH.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENBDL", "EXTEND", "BEH"]
---

``extend behavior for EntityName  [[`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE_EXT.html)]\  [[`with additional save [with full data]`](ABENBDL_SAVING.html)]\  \{      [`ExtensionBody`](ABENBDL_ENTITY_BEH_EXTENSION.html)\    |[[`group`](ABENBDL_GROUP_EXTENSION.html)]\  \}  ...``

Extends the behavior of an existing RAP BO entity.

Syntax additions and components:

-   [`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE_EXT.html): Specifies an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) for the [extension](ABENRAP_PREFIX_EXTENSION_GLOSRY.html) behavior of the particular entity.
-   [`with additional save [with full data]`](ABENBDL_SAVING.html):

-   Adds additional steps to the default [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).
-   As a prerequisite, the extended BDEF must explicitly allow extensions with additional save (see the topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html)).
-   Possible only if the underlying BO has implementation type [`managed`](ABENMANAGED_RAP_BO_GLOSRY.html). Currently not supported for unmanaged RAP BOs.
-   The saving options [`SavingOptions`](ABENBDL_SAVING.html) specified in the original BO do not affect the additional save of the extension. The original BO can specify an [additional save](ABENRAP_ADD_SAVE_GLOSRY.html), an [unmanaged save](ABENRAP_UNMAN_SAVE_GLOSRY.html), or use the default save sequence. The original saving option is applied to original behavior and the additional save specified in the extension is applied to extension behavior.
-   In an extension, an additional save can be specified per entity in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html). Notation in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html), like in the extended BDEF, is not allowed.
-   The implementation takes place in the [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) method of the [RAP saver class](ABENABP_SAVER_CLASS.html) in the respective extension [ABP](ABENBEHAVIOR_POOL_GLOSRY.html). The method parameters of this `save_modified` method are typed according to the particular BDEF extension that enables the additional save. In other words, the ABP reflects exactly the BDEF components of the BDEF it belongs to and not the entire RAP BO. Furthermore, the rules for [extension ABPs](ABENBDL_IN_CLASS_UNIQUE_EXT.html) apply. Data is passed to the `save_modified` method. It works as described in topic [RAP - `SavingOptions`](ABENBDL_SAVING.html). If this addition is specified either in the original RAP BO or in an extension, then it is enabled each time an additional save is implemented. Multiple extensions may exist and all of them may specify an additional save, but only one of them may specify `with full data`. In this case, full instance data is passed each time the `save_modified` method is called, even for extensions which do not specify this addition.
-   The addition `with additional save [with full data]` in a BDEF extension works as described in topic [RAP - `SavingOptions`](ABENBDL_SAVING.html).

-   [`ExtensionBody`](ABENBDL_ENTITY_BEH_EXTENSION.html): Extends the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html).
-   [`group`](ABENBDL_GROUP_EXTENSION.html): Divides the implementation-relevant parts of an extended RAP BO's business logic into multiple groups for behavior implementation, each with its own [implementation class](ABENBDL_IN_CLASS_UNIQUE_EXT.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html