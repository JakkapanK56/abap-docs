---
title: "The following CDS service definition extension"
description: |
  adds one further entity to the service definition -   One or more CDS entities(ABENCDS_ENTITY_GLOSRY.html) `cds_entity` can be exposed using the keyword `EXPOSE`. The same rules apply as to the original service definition, see topic CDS SDL - `DEFINE SERVICE`(ABENSRVD_DEFINE_SERVICE.html). -
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSRVD_EXTEND_SERVICE.htm"
abapFile: "ABENSRVD_EXTEND_SERVICE.html"
keywords: ["delete", "if", "case", "method", "class", "data", "ABENSRVD", "EXTEND", "SERVICE"]
---

`EXTEND SERVICE name    WITH  \{      EXPOSE cds_entity [AS alias];    | EXPOSE METHOD class_name=>method_name AS alias;     ...  \}`

Extends an existing [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html)\\ `name` using a [CDS service definition extension](ABENCDS_SERVICE_DEF_EXT_GLOSRY.html) in the [CDS SDL](ABENCDS_SDL_GLOSRY.html). An existing CDS service definition can have one or more CDS service definition extensions.

As a prerequisite for service definition extensions, the service definition to be extended must explicitly allow extensions. The annotation [`@AbapCatalog.extensibility.extensible`](ABENCDS_DEFINE_SERVICE_ANNOS.html) must be set to `true`.

Service definition extensions can make additions to the original service definition, but they cannot modify, overwrite, or delete elements from it. The following rules apply:

The following CDS service definition extension

adds one further entity to the service definition

-   One or more [CDS entities](ABENCDS_ENTITY_GLOSRY.html)\\ `cds_entity` can be exposed using the keyword `EXPOSE`. The same rules apply as to the original service definition, see topic [CDS SDL - `DEFINE SERVICE`](ABENSRVD_DEFINE_SERVICE.html).
-   One or more [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html)\\ `method_name` can be exposed using the keyword `EXPOSE METHOD`. The same rules apply as to the original service definition, see topic [CDS SDL - `DEFINE SERVICE`](ABENSRVD_DEFINE_SERVICE.html).
-   Each exposed CDS entity or AMDP procedure implementation must have a unique name across the original service definition and all existing extensions. In case of naming conflicts, an alternative element `alias` must be assigned using the addition `AS`.
-   The exposed entities `cds_entity1`, `cds_entity2`, ... can be entities from the original data model or extension entities. The names of the exposed entities must comply with the [namespace](ABENNAMESPACE_GLOSRY.html) of the service definition extension. For example, if the name of a service definition extension starts with a `Z`, each exposed entity must also have a name that starts with `Z`. This can also be achieved by assigning an alias name with the addition `AS`.
-   Each entity and method should be exposed only once in a service definition and any of its extensions. Even if a new alias name is assigned, a syntax check warning occurs if an entity or method is exposed more than once.

-   CDS service definition extensions themselves cannot be extended.
-   [Service definition annotations](ABENCDS_DEFINE_SERVICE_ANNOS.html) are not supported. That means that no annotations are allowed in front of the statement `EXTEND SERVICE`.

extend service DEMO\_CDS\_ORIGINAL\_SD with \\{\\n expose DEMO\_RAP\_EXTENSIBLE\_EXT;\\n\\} @EndUserText.label: 'CDS service definition for extension'\\n@AbapCatalog.extensibility.extensible: true\\ndefine service DEMO\_CDS\_ORIGINAL\_SD \\{\\n expose DEMO\_RAP\_EXTENSIBLE\_ROOT;\\n\\} abenabap.html abencds.html abencds\_service\_definitions.html abencds\_f1\_sdl\_syntax.html