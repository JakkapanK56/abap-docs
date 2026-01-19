---
title: "ABENC0_CONSUMER_RULES_DDIC"
description: |
  ABENC0_CONSUMER_RULES_DDIC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENC0_CONSUMER_RULES_DDIC.htm"
abapFile: "ABENC0_CONSUMER_RULES_DDIC.html"
keywords: ["do", "if", "data", "types", "ABENC0", "CONSUMER", "RULES", "DDIC"]
---

The provider rules for objects with the C0 contract ensure that released objects are changed only in a restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to [released APIs](ABENRELEASED_API_GLOSRY.html). Therefore, the users of released APIs still have to consider the allowed compatible changes access the APIs in such a way that the following errors and interruptions are avoided:

The following sections list rules for extensions to released APIs that must be considered when creating an extension.

-   Problems during an upgrade.
-   Syntax errors after an upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

-   All extension field names must start with the correct namespace prefix.
-   All extension fields must have the element suffix that is defined in the released API by means of the annotation [`@AbapCatalog.enhancement.fieldSuffix`](ABENDDICDDL_DEFINE_EXT_ANNOS.html).

-   Only [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) and [DDIC structures](ABENDDIC_STRUCTURE_GLOSRY.html) are available for [C0 developer extensibility](ABENDEV_EXTENSIBILITY_GLOSRY.html) from a [restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html).
-   The DDIC object must be released under the C0 contract for the corresponding language version ([ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) or [ABAP for Key Users](ABENABAP_FOR_KEY_USERS_GLOSRY.html)).
-   All extension fields must be typed with a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html) or with a built-in data type from the ABAP Dictionary using the syntax `abap.type[(n)|(n,m)]`. Typing with other structures or [DDIC table types](ABENDDIC_TABLE_TYPE_GLOSRY.html) is not possible.
-   The extension must fit the quota definition and quota distribution defined in the extended object by means of the annotations [`@AbapCatalog.enhancement.quotaMaximumFields`](ABENDDICDDL_DEFINE_EXT_ANNOS.html), [`@AbapCatalog.enhancement.quotaMaximumBytes`](ABENDDICDDL_DEFINE_EXT_ANNOS.html), [`@AbapCatalog.enhancement.quotaShareCustomer`](ABENDDICDDL_DEFINE_EXT_ANNOS.html), and [`@AbapCatalog.enhancement.quotaSharePartner`](ABENDDICDDL_DEFINE_EXT_ANNOS.html).

-   When using a C0 released structure as [include structure](ABENDDIC_INCLUDE_STRUCTURE.html) of another dictionary object, the addition `WITH SUFFIX suffix` must not be used.
-   When using a C0 released structure as [include structure](ABENDDIC_INCLUDE_STRUCTURE.html), this include structure must not be defined as a key using the addition [`KEY`](ABENDDICDDL_DEFINE_TABLE_INCL.html).
-   C0 released structures must not be used as [include structure](ABENDDIC_INCLUDE_STRUCTURE.html) in any DDIC view.
-   When using a C0 released structure as [include structure](ABENDDIC_INCLUDE_STRUCTURE.html) of another dictionary object, the value of the annotation `@AbapCatalog.enhancement.category` of the enclosing object must be greater than or equal to the enhancement category of the included structure. `#EXTENSIBLE_ANY` is greater than `#EXTENSIBLE_CHARACTER_NUMERIC`.
-   If a C0 released structure is included in any other DDIC object as [include structure](ABENDDIC_INCLUDE_STRUCTURE.html) (syntax statement `include`), this inclusion must not be removed. The inclusion of a C0 released structure must remain stable. Otherwise, an [ATC](ABENATC_GLOSRY.html) error occurs.

-   An extension must not define any element as a key field.
-   The following data types are not supported in extensions to released APIs: [`LCHR`](ABENDDIC_BUILTIN_TYPES.html), [`LRAW`](ABENDDIC_BUILTIN_TYPES.html), [`STRING`](ABENDDIC_BUILTIN_TYPES.html), [`PREC`](ABENDDIC_BUILTIN_TYPES.html), [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html), [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html), [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length > 1333, [`RAW`](ABENDDIC_BUILTIN_TYPES.html) with length > 255.

abenabap.html abenabap\_versions\_and\_apis.html abenabap\_release\_contracts.html abenconsumer\_rules.html