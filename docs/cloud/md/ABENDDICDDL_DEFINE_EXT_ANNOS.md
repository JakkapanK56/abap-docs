---
title: "ABENDDICDDL_DEFINE_EXT_ANNOS"
description: |
  ABENDDICDDL_DEFINE_EXT_ANNOS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDICDDL_DEFINE_EXT_ANNOS.htm"
abapFile: "ABENDDICDDL_DEFINE_EXT_ANNOS.html"
keywords: ["if", "data", "types", "ABENDDICDDL", "DEFINE", "EXT", "ANNOS"]
---

`@AbapCatalog.enhancement.fieldSuffix: 'suffix'  @AbapCatalog.enhancement.quotaMaximumFields: integer  @AbapCatalog.enhancement.quotaMaximumBytes: integer`

The following annotations are required for [C0 release](ABENC0_CONTRACT_GLOSRY.html) of a DDIC structure. They are evaluated only in the context of [C0 release](ABENC0_CONTRACT_GLOSRY.html) for [developer extensibility](ABENDEV_EXTENSIBILITY_GLOSRY.html).

-   `@AbapCatalog.enhancement.fieldSuffix` defines a 3-character element suffix `suffix`. This suffix is to be used for all fields of an extension created by customers or partners from a [restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html). The purpose is to avoid field naming clashes. The following rules apply:

-   `suffix` must consist of exactly 3 alphabetical characters \[A-Z\].
-   If the object is a partner or customer object, the suffix must begin with Y or Z.
-   If the object is an SAP object, the suffix must not begin with Y or Z.
-   Field suffixes should be unique. If the specified field suffix is already registered by a different development object, a syntax check warning occurs.

-   `@AbapCatalog.enhancement.quotaMaximumFields` defines the maximum number of fields that can be appended to the corresponding object by customers and partners. In other words, it reserves a field count for customer and partner extensions.
-   The annotation value `integer` must be an integer between 0 and 1000. A value between 100 and 560 is recommended. Otherwise, a syntax check warning occurs.
-   The sum of fields of the original object and reserved fields must not exceed the technical limitations of the object in question. Current technical limitations are:

-   DDIC database table that is part of the software component `SAP_BASIS`: 750 fields.
-   DDIC database table, [storage type](ABENDDIC_DATABASE_TABLES_STORAGE.html) Row Store: 1000 fields.
-   DDIC database table, storage type Column Store: 1500 fields.
-   DDIC structure: 9999 fields.

-   `@AbapCatalog.enhancement.quotaMaximumBytes` defines the maximum byte capacity that can be appended to the corresponding object by customers and partners. In other words, it reserves a byte capacity for customer and partner extensions. The annotation value `integer` must be an integer. The sum of bytes of the original object and reserved bytes must not exceed the technical limitation of 2 to the power of 19 minus 1 bytes (2^19-1). The recommended number of reserved bytes is between 1.000 and 56.000 bytes per structure.

-   The same annotations can also be specified in the definition of a DDIC database table using [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html) for C0 release of the database table in question.

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html abenddic\_define\_structure.html abenddicddl\_define\_structure.html