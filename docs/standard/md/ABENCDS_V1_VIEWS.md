---
title: "ABENCDS_V1_VIEWS"
description: |
  ABENCDS_V1_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_V1_VIEWS.htm"
abapFile: "ABENCDS_V1_VIEWS.html"
keywords: ["select", "if", "try", "data", "types", "ABENCDS", "VIEWS"]
---

A [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is defined for existing [DDIC database tables](ABENDDIC_DATABASE_TABLES.html), [DDIC views](ABENDDIC_VIEWS.html) or other [CDS SQL entities](ABENCDS_SQL_ENTITY_GLOSRY.html) using the statement [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of [ABAP Core Data Services (CDS)](ABENCDS.html) in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). The DCL source code of a CDS view can also be displayed in [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).

When a CDS data definition of a CDS DDIC-based view (obsolete) is activated, two artefacts are created:

The CDS entity represents the CDS view and the view should be accessed using the name of the CDS entity. The name of the CDS entity is defined after the [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html) keyword. The definition of the CDS entity occurs only as DDL source code. As a global data type, the CDS entity represents a structured type with the [elements of the CDS view](ABENCDS_SELECT_LIST_ENTRY_V1.html) as components and can be used like any [CDS entity](ABENCDS_ENTITY_GLOSRY.html).

The name of this CDS entity is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

The keyword [`KEY`](ABENCDS_SELECT_LIST_ENTRY_V1.html) can be used to define key elements in CDS views. If the name of the CDS entity is used to access a CDS view in ABAP SQL, this key is used for the syntax check or the extended program check.

The following sections describe client handling and table buffering for CDS DDIC-based views (obsolete) plus the role of a CDS-managed DDIC view (obsolete):

-   a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is created as a repository object
-   a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is created in the ABAP Dictionary.

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.
-   In ABAP programs, the CDS entity can be used as a data type and in ABAP SQL read statements.
-   The CDS entity cannot be used as a data type for definitions of [dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html).

-   [Client handling](ABENCDS_VIEW_CLIENT_HANDLING_V1.html)
-   [Table buffering](ABENCDS_V1_BUFFERING.html)
-   [CDS-managed DDIC view (obsolete)](ABENCDS_DATABASE_VIEW.html)

-   The programming of CDS views using the DDL of the Core Data Services is one of the tasks included in the implementation of data models and is not usually the responsibility of regular ABAP application programmers. Once created, CDS views are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.
-   CDS views can be extended with [CDS view extensions](ABENCDS_VIEW_EXTEND_GLOSRY.html). These extensions are stored in separate entities, so the CDS view itself is not modified.
-   As well as the specific functions available for CDS views, such as the definition of CDS associations, the options for the regular SQL DDL of the CDS DDL are far more comprehensive than the form-based ABAP Dictionary [tool](ABENDDIC_TOOLS.html) in ABAP Workbench used to define [DDIC table views](ABENTABLE_VIEW_GLOSRY.html).

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html