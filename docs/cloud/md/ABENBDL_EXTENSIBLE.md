---
title: "ABENBDL_EXTENSIBLE"
description: |
  ABENBDL_EXTENSIBLE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EXTENSIBLE.htm"
abapFile: "ABENBDL_EXTENSIBLE.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "EXTENSIBLE"]
---

`...  extensible [\{    [with validations on save;]\    [with determinations on save;]\    [with determinations on modify;]\    [with additional save;]\  \}]\   ...`

The addition `extensible` can be used to allow [BDEF extensions](ABENBDL_EXTENSION.html). If it is not specified, then extensions are not allowed. As a prerequisite, [BDEF strict mode](ABENBDL_STRICT.html) must be switched on.

The keyword `extensible` must be specified in two places:

In the header declaration, the following optional additions are available:

These additions explicitly allow the kinds of [validations](ABENBDL_VALIDATIONS.html), [determinations](ABENBDL_DETERMINATIONS.html), or a [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html) in a [RAP entity behavior extension](ABENRAP_BEHAVIOR_EXTENSION_GLOSRY.html). If not declared explicitly, the respective type of determination, validation, and the additional save must not be defined in an extension to an existing RAP BO entity.

**Note** This declaration refers only to extensions of existing RAP BO entities ([*extend behavior for*](ABENBDL_EXTEND_BEH.html)). In extension nodes ([*define behavior for*](ABENBDL_DEFINE_BEH_EXTEND.html)), validations, determinations, and an additional save are always possible and no explicit permission is required.

Currently, the keyword `extensible` is available for

In projection BDEFs, interface BDEFs, abstract BDEFs, and BDEF extensions, only the keyword `extensible` is possible, without any further additions.

In interface BDEFs, `extensible` can be specified only in the BDEF header and strict mode is not available.

In BDEF extensions, strict mode is not available.

A complete overview of extension points and extensibility enabling for behavior definitions is described in section [Extensibility Enabling](ABENBDL_EXTENSIBILITY_ENABLING.html).

The RAP behavior definition for `DEMO_RAP_EXTENSIBLE` enables BDEF extensions by specifying multiple extension points.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. For example, some [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) of the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) are not implemented here.

The extension `DEMO_RAP_EXTEND1` extends the RAP behavior definition `DEMO_RAP_EXTENSIBLE`.

-   It must be declared in the [BDEF header](ABENCDS_BDEF_HEADER_GLOSRY.html)
-   It must be declared in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) for each individual entity that allows BDEF extensions.

-   `with validations on save`
-   `with determinations on save`
-   `with determinations on modify`
-   `with additional save`

-   [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [projection BDEFs](ABENRAP_PROJECTION_BO_GLOSRY.html)
-   [interface BDEFs](ABENCDS_INTERFACE_BDEF_GLOSRY.html)
-   [abstract BDEFs](ABENCDS_ABSTRACT_BDEF_GLOSRY.html)
-   [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html): A BDEF extension itself can be extended with further extensions. This is referred to as [extension layering](ABENRAP_EXT_LAYERING_GLOSRY.html). As a prerequisite, extensions must be explicitly allowed.

managed implementation in class bp\_demo\_rap\_extensible unique;\\nstrict(2);\\nwith draft;\\nextensible\\n\\{\\n with validations on save;\\n with determinations on save;\\n with determinations on modify;\\n with additional save;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\\npersistent table demo\_dbtab\_root\\ndraft table demo\_dbtab\_draf1\\nlock master\\ntotal etag Timestamp\\nauthorization master ( global )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n\\n draft action Edit;\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Resume;\\n draft determine action Prepare extensible;\\n\\n field(readonly:update) KeyField;\\n field(readonly) Timestamp;\\n\\n determination setID on save \\{ create; \\}\\n\\n determine action trigger\_all extensible\\n \\{\\n determination ( always ) setID;\\n \\}\\n\\n mapping for demo\_dbtab\_root corresponding extensible\\n \\{\\n KeyField = key\_field;\\n DataField = data\_field;\\n Timestamp = crea\_date\_time;\\n \\}\\n\\n\\n\\} extension implementation in class bp\_demo\_rap\_extend1 unique;\\n\\nextend behavior for DEMO\_RAP\_EXTENSIBLE \\{\\n\\n determination MyDet1 on save \\{ create; update; \\}\\n extend determine action trigger\_all \\{determination MyDet1; \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html