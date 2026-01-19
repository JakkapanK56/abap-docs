---
title: "Runtime"
description: |
  Binds an ABAP class to a CDS entity that overrides the entity's own data retrieval method. The data retrieval is performed at runtime by a method of the class. `ABAP:'class_name'`: The name of the ABAP class `class_name` must be specified in single quotation marks and it must be written in uppercase
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_763589850-_ANNO.htm"
abapFile: "ABENCDS_763589850-_ANNO.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENCDS", "763589850", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

This annotation is currently supported in all CDS entities except for [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html). The annotation is evaluated by frameworks such as [SADL](ABENSADL_GLOSRY.html) and therefore, it is especially relevant for entities that can be used in [RAP business services](ABENCDS_BUSINESS_SERVICES.html).

The CDS view entity `DEMO_CDS_SCARR_FROM_ABAP_CLASS` is bound to ABAP class `CL_DEMO_GET_SCARR`. This ABAP class implements the interface `IF_RAP_QUERY_PROVIDER` and it implements the same SQL query as the view entity does via its `SELECT` statement.

The class `CL_DEMO_CONSUME_BS_SCARR_ABAP` accesses the CDS view entity once via its [service binding](ABENSERVICE_BINDING_GLOSRY.html)\\ `DEMO_SB_SCARR_FROM_ABAP`, which binds the service definition `DEMO_SD_SCARR_FROM_ABAP_CLASS` to an OData node in [ICF](ABENICF_GLOSRY.html). This is done using the demonstration class `CL_DEMO_BS_CONSUMPTION`, which accesses the OData service of the service binding by using an ICF client.

The program accesses the CDS view entity a second time using a `SELECT` statement. The result is the same, the only difference is that the query class returns the message *Nothing found* whereas the `SELECT` statement returns no entries in case the query does not return any values.

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

Specifies query settings.

Runtime

Binds an ABAP class to a CDS entity that overrides the entity's own data retrieval method. The data retrieval is performed at runtime by a method of the class.

`ABAP:'class_name'`: The name of the ABAP class `class_name` must be specified in single quotation marks and it must be written in uppercase letters. It is introduced by the string `ABAP:`.

-   This annotation is [framework specific](ABENFRMWRK_ANNOTATION_GLOSRY.html). It is not evaluated by the ABAP runtime framework, but, e.g., by the [SADL](ABENSADL_GLOSRY.html) framework instead. The ABAP class must implement the predefined ABAP interface `IF_RAP_QUERY_PROVIDER` to connect it to SADL.
-   This annotation was first made available for [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) and this kind of data retrieval is typical for CDS custom entities. Only later it was also made available for other kinds of CDS entities.
-   In CDS custom entities, the annotation `ObjectModel.query.implementedBy` is mandatory when working in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html). In all other environments and for all other CDS entities, it is optional.
-   If a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) implements a [RAP unmanaged query](ABENRAP_UNMANGED_QUERY_GLOSRY.html) using `ObjectModel.query.implementedBy` and it also contains a [CDS virtual element](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html), then the ABAP query is evaluated first and the CDS virtual element is calculated afterwards. The CDS virtual element can use values returned by the ABAP query. This can be useful, for example, in extensibility scenarios.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@ObjectModel.query.implementedBy: 'ABAP:CL\_DEMO\_GET\_SCARR'\\ndefine view entity DEMO\_CDS\_SCARR\_FROM\_ABAP\_CLASS\\n with parameters\\n p\_carrid : s\_carr\_id\\n as select from scarr\\n\\{\\n key carrid,\\n carrname,\\n url\\n\\}\\nwhere\\n carrid = $parameters.p\_carrid\\n **Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.query.implementedBy`\\ **Scope** `#CUSTOM_ENTITY`, `#ENTITY`\\ **Type** `String(255)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_objectmodel\_a.html