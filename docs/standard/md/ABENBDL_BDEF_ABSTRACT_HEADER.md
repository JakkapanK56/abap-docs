---
title: "ABENBDL_BDEF_ABSTRACT_HEADER"
description: |
  ABENBDL_BDEF_ABSTRACT_HEADER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_BDEF_ABSTRACT_HEADER.htm"
abapFile: "ABENBDL_BDEF_ABSTRACT_HEADER.html"
keywords: ["do", "if", "types", "ABENBDL", "BDEF", "ABSTRACT", "HEADER"]
---

``[`abstract;`](ABENBDL_IMPL_TYPE.html)\  [[`strict[(version)];`](ABENBDL_STRICT.html)]\  [[`extensible;`](ABENBDL_EXTENSIBLE.html)]\  [with hierarchy [like entity];]\  \ [`entity behavior definition`](ABENBDL_DEFINE_BEH_ABSTRACT.html) ...``

The [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) of an [abstract BDEF](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) can define the attributes listed below. The [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html) is mandatory; `strict[(version)]` and `with hierarchy` are strongly recommended for the following reasons: [strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) ensures that no outdated syntax can be used. When leaving out `with hierarchy`, the abstract BDEF represents the same [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) as a single [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) and does not offer any additional value.

The behavior definition header is followed by an [entity behavior definition](ABENBDL_DEFINE_BEH_ABSTRACT.html).

-   [`abstract`](ABENBDL_IMPL_TYPE.html): An abstract BDEF must have the [implementation type](ABENBDL_IMPL_TYPE.html)\\ `abstract`.
-   [`strict[(version)]`](ABENBDL_STRICT.html): It is strongly recommended that the most recent version of [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) is used.
-   [extensible](ABENBDL_EXTENSIBLE.html): If specified, [BDEF extensions](ABENBDL_EXTENSION.html) are allowed. As a prerequisite, [BDEF strict mode](ABENBDL_STRICT.html) must be switched on using the keyword `extensible`. For more details, see the topic [RAP - `extensible`](ABENBDL_EXTENSIBLE.html).
-   `with hierarchy [like entity]`:

-   The optional addition `with hierarchy` causes the construction of a new kind of [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) for the entities that are part of the BDEF: starting from the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html), such a type contains all entity fields, plus a component for each [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html). For a composition with a unique [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html), i.e. `TO ONE` or `TO EXACT ONE`, this component is a structure; otherwise, the component is a table. The type of the component (or its line type) is defined recursively in the same way, down to the [leaf level](ABENLEAF_ENTITY_GLOSRY.html) in the [CDS composition hierarchy](ABENCDS_COMPOSITION_TREE_GLOSRY.html).
-   The addition `like entity` can optionally be used in combination with `with hierarchy`. It guarantees that the hierarchical BDEF derived type that is constructed from the abstract BDEF is equivalent to the underlying CDS type that is derived from the abstract entity. The addition `with hierarchy like entity` enforces the following additional syntax rules:
-   \- The abstract BDEF in question must not contain any [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html) in its BDEF derived type.
-   \- The field attribute [`suppress`](ABENBDL_FIELD_ABSTRACT.html) is not allowed, as this would create a difference in BDEF derived types between the underlying abstract entity and the abstract BDEF.
-   \- The field attribute [`mandatory:execute`](ABENBDL_FIELD_ABSTRACT.html) is not allowed.
-   \- The optional addition [`with control`](ABENBDL_DEFINE_BEH_ABSTRACT.html) is not allowed.

-   The addition `with hierarchy` is a precondition for the following components of an abstract BDEF:

-   [`with control`](ABENBDL_DEFINE_BEH_ABSTRACT.html)
-   [`deep mapping`](ABENBDL_TYPE_MAPPING_ABSTRACT.html)
-   [`scalar entity`](ABENBDL_DEFINE_BEH_ABSTRACT.html)
-   [`association _Assoc with hierarchy`](ABENBDL_ASSOCIATION_ABSTRACT.html)

-   The addition `with hierarchy like entity` ensures that the derived type of the behavior definition is equivalent to the structure type of the underlying abstract entity. This ensures compatibility between the BDEF type and the CDS type. The advantage of the BDEF (over using the CDS type) is that it allows additional [type mappings](ABENBDL_TYPE_MAPPING_ABSTRACT.html) to be defined.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_abstract.html