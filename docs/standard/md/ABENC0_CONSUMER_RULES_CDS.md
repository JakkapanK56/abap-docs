---
title: "ABENC0_CONSUMER_RULES_CDS"
description: |
  ABENC0_CONSUMER_RULES_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENC0_CONSUMER_RULES_CDS.htm"
abapFile: "ABENC0_CONSUMER_RULES_CDS.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENC0", "CONSUMER", "RULES", "CDS"]
---

The provider rules for objects with the C0 contract ensure that released objects are changed only in a restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to [released APIs](ABENRELEASED_API_GLOSRY.html). Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

The following sections list allowed extensions to released APIs that must be considered when creating an extension.

Examples for correct names:

-   Problems during an upgrade. Syntax errors after an upgrade. Runtime errors after an upgrade. Wrong behavior after an upgrade.

-   The alias name for elements and associations must start with the correct [namespace prefix](ABENNAMES_REPOS_OBJ_GUIDL.html). For customers and partners, this means that either `ZZ` or `YY` must be used as prefix. For associations, it is strongly recommended that the alias name starts with an underscore (\_) followed by the correct namespace prefix.
-   All elements and associations defined in the extension must have the element suffix that is defined in the released API by means of the annotation [`@AbapCatalog.extensibility.elementSuffix`](ABENCDS_F1_ENTITY_ANNOTATIONS.html).
-   In extensions to [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) and [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html), all elements and associations defined in the extension must have the alias name of a stable data source, defined by the annotation [`@AbapCatalog.extensibility.dataSources`](ABENCDS_VIEW_ENTITY_ANNO.html), as prefix.

-   `DatasourceAlias.field as ZZ_customerField_suffix`
-   `DatasourceAlias._assoc as _YY_assoc_suffix`

-   Currently, [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html), [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), and [CDS custom entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) can be extended.
-   The extended CDS entity must be released under the C0 contract for the corresponding language version ([ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) or [ABAP for Key Users](ABENABAP_FOR_KEY_USERS_GLOSRY.html)).
-   The extension must fit the quota definition defined in the extended entity by means of the annotations [`AbapCatalog.extensibility.quota.maximumBytes`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) and [`AbapCatalog.extensibility.quota.maximumFields`](ABENCDS_F1_ENTITY_ANNOTATIONS.html). That means that the maximum number of fields and the maximum number of bytes must not be exceeded.

-   To define an additional field for a C0 released API that is selected from another data source, the field must either belong to the same software component, or be C1 released.
-   To define additional fields for a released API, in a scenario where these additional fields are selected from another extension, both extensions must be assigned to the same software component or the extended entity must be C1 released.

-   Adding new child nodes to a released API by means of [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html) is allowed if the annotation [`@AbapCatalog.extensibility.allowNewCompositions`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) is set to `true`.

-   Associations that are released with a stable alias name by the extended entity, using the annotation `AbapCatalog.extensibility.dataSources`, must not be exposed in the element list.
-   To define a new association in an extension, the association target must be [C1 released](ABENC1_CONTRACT_GLOSRY.html) or created in the same software component.
-   Newly defined, local associations can be exposed in the element list. The name of a newly defined, local association must comply with the naming rules described in section **Naming**.

-   In an extension to a released API, exposed associations and associations used within path expressions can have a target [cardinality](ABENCARDINALITY_GLOSRY.html) of 0 or 1. A target cardinality greater than 1 is not allowed.
-   Path traversing with the exact length of 1 is allowed for released data sources with stable alias names.
-   Path traversing with the exact length of 1 is **not** allowed for locally defined associations.
-   Path traversing with a length greater than 1 is only allowed in the following cases:

-   The extended object must be a CDS projection view.
-   The annotation [`@AbapCatalog.extensibility.allowNewDatasources`](ABENCDS_VIEW_ENTITY_ANNO.html) is set to `true`.
-   All traversed objects of the path are CDS view entities or CDS DDIC-based views.
-   Examples for path lengths:
-   `BaseObjectAlias.fieldName` //path length of 1
-   `BaseObjectAlias._assoc.fieldName` //path length of 2

-   The following data types are not supported in extensions to released APIs: [`LCHR`](ABENDDIC_BUILTIN_TYPES.html), [`LRAW`](ABENDDIC_BUILTIN_TYPES.html), [`STRING`](ABENDDIC_BUILTIN_TYPES.html), [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html), [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html).
-   Reusing expressions using [`$projection`](ABENCDS_REUSABLE_EXPRESSION_V2.html) as pointer is not supported when extending a released API.
-   [Session variables](ABENCDS_SESSION_VARIABLE_V2.html) are not supported when extending a released API.
-   The built-in function [`utcl_current`](ABENCDS_TIMESTAMP_FUNCTIONS_V2.html) is not supported in extensions to released APIs.

abenabap.html abenabap\_versions\_and\_apis.html abenabap\_release\_contracts.html abenconsumer\_rules.html