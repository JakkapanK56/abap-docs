---
title: "ABENDDICDDL_DEFINE_TABLE_PROPS"
description: |
  ABENDDICDDL_DEFINE_TABLE_PROPS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDICDDL_DEFINE_TABLE_PROPS.htm"
abapFile: "ABENDDICDDL_DEFINE_TABLE_PROPS.html"
keywords: ["if", "class", "data", "ABENDDICDDL", "DEFINE", "TABLE", "PROPS"]
---

`@AbapCatalog.tableCategory : table_cat  @AbapCatalog.dataMaintenance : data_maint  @AbapCatalog.deliveryClass : deliv_class  \  [@AbapCatalog.activationType : act_type]\  [@AbapCatalog.replacementObject : '...']\  [@AbapCatalog.primaryKey.invertedIndividualIndex: true | false]`

Annotations for specifying table properties in the definition of a DDIC database table using the statement [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html) in the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html).

**Mandatory Definitions**

**Optional Definitions**

Annotations in the definition of the DDIC database table `DEMO_SUMDIST` in the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) of the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). This table has the CDS view `DEMO_CDS_SUMDIST` as its [replacement object](ABENREPLACEMENT_OBJECT_GLOSRY.html).

-   `@AbapCatalog.tableCategory` defines the [table category](ABENDDIC_DATABASE_TABLES_TAB_CAT.html). `table_cat` can be specified as:

-   `#TRANSPARENT` - [transparent table](ABENTRANSPARENT_TABLE_GLOSRY.html)
-   `#GLOBAL_TEMPORARY` - [Global Temporary Table (GTT)](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html)

-   `@AbapCatalog.dataMaintenance` defines how [the DDIC database table is displayed and maintained](ABENDDIC_DATABASE_TABLES_MAINT.html). `data_maint` can be specified as:

-   `#NOT_ALLOWED` - [Display/maintenance not allowed](ABENDDIC_DATABASE_TABLES_MAINT.html)
-   `#RESTRICTED` - [Display/maintenance allowed with restrictions](ABENDDIC_DATABASE_TABLES_MAINT.html)
-   `#ALLOWED` - [Display/maintenance allowed](ABENDDIC_DATABASE_TABLES_MAINT.html)
-   `#DISPLAY` - [Only display allowed](ABENDDIC_DATABASE_TABLES_MAINT.html)

-   `@AbapCatalog.deliveryClass` defines the [delivery class of the database table](ABENDDIC_DATABASE_TABLES_DELIVERY.html). `deliv_class` can be specified as:

-   `#A` - [delivery class A](ABENDDIC_DATABASE_TABLES_DELIVERY.html)
-   `#C` - [delivery class C](ABENDDIC_DATABASE_TABLES_DELIVERY.html)
-   `#L` - [delivery class L](ABENDDIC_DATABASE_TABLES_DELIVERY.html)
-   `#G` - [delivery class G](ABENDDIC_DATABASE_TABLES_DELIVERY.html)
-   `#E` - [delivery class E](ABENDDIC_DATABASE_TABLES_DELIVERY.html)
-   `#S` - [delivery class S](ABENDDIC_DATABASE_TABLES_DELIVERY.html)
-   `#W` - [delivery class W](ABENDDIC_DATABASE_TABLES_DELIVERY.html)

-   `@AbapCatalog.activationType` defines the [activation type of the database table](ABENDDIC_DATABASE_TABLES_ACT_TYPE.html). This setting is not relevant for DDIC database tables in application programming. `act_type` can be specified as:

-   `#NOT_CLASSIFIED` - [activation type 00](ABENDDIC_DATABASE_TABLES_ACT_TYPE.html)
-   `#NAMETAB_GENERATION_OFFLINE` - [activation type 01](ABENDDIC_DATABASE_TABLES_ACT_TYPE.html)
-   `#ADAPT_C_STRUCTURES` - [activation type 02](ABENDDIC_DATABASE_TABLES_ACT_TYPE.html)
-   `#INITIAL_TABLE_REQUIRED` - [activation type 10](ABENDDIC_DATABASE_TABLES_ACT_TYPE.html)

-   `@AbapCatalog.replacementObject` defines the name of a [replacement object](ABENREPLACEMENT_OBJECT_GLOSRY.html) in quotation marks.
-   `@AbapCatalog.primaryKey.invertedIndividualIndex` defines the type of the [primary index](ABENPRIMARY_INDEX_GLOSRY.html):

-   `true` - [`INVERTED INDIVIDUAL`](ABENDDIC_DATABASE_TABLES_INDEX.html) as of HANA2, SPS 03, [`INVERTED HASH`](ABENDDIC_DATABASE_TABLES_INDEX.html) before HANA2, SPS 03
-   `false` - [`INVERTED VALUE`](ABENDDIC_DATABASE_TABLES_INDEX.html) (default)

@EndUserText.label : 'Aggregation Table with Replacement Object' \\n@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE \\n@AbapCatalog.tableCategory : #TRANSPARENT \\n@AbapCatalog.deliveryClass : #A \\n@AbapCatalog.dataMaintenance : #LIMITED \\n@AbapCatalog.replacementObject : 'demo\_cds\_sumdist' \\ndefine table demo\_sumdist \\{ \\n key client : mandt not null; \\n key carrname : s\_carrname not null; \\n key distid : s\_distid not null; \\n @Semantics.quantity.unitOfMeasure : 'demo\_sumdist.distid' \\n sum\_distance : s\_distance; \\} abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_define\_table.html abenddicddl\_define\_table.html