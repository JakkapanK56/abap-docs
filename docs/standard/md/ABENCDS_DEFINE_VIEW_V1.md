---
title: "ABENCDS_DEFINE_VIEW_V1"
description: |
  ABENCDS_DEFINE_VIEW_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DEFINE_VIEW_V1.htm"
abapFile: "ABENCDS_DEFINE_VIEW_V1.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "DEFINE", "VIEW"]
---

``[[`@entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  [[`@entity_annot2`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  ...  [`@AbapCatalog.sqlViewName: 'CDS_DB_VIEW'`](ABENCDS_VIEW_ANNO_V1.html)\  [[`@view_annot1`](ABENCDS_VIEW_ANNO_V1.html)]\  [[`@view_annot2`](ABENCDS_VIEW_ANNO_V1.html)]\  ...  [DEFINE]\ [[`ROOT`](ABENCDS_DEFINE_ROOT_VIEW_V1.html)] VIEW ddic_based_view          [[`name_list`](ABENCDS_NAME_LIST_V1.html)]\          [[`parameter_list`](ABENCDS_PARAMETER_LIST_V1.html)]\           AS [`select_statement`](ABENCDS_SELECT_STATEMENT_V1.html)\ [;]``

Defines a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). A CDS view is implemented using a query [`select_statement`](ABENCDS_SELECT_STATEMENT_V1.html). The [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`AbapCatalog.sqlViewName`](ABENCDS_VIEW_ANNO_V1.html) must be specified before the view itself is defined using `DEFINE VIEW`. Further optional annotations [`entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html), ..., [`view_annot1`](ABENCDS_VIEW_ANNO_V1.html), ... can also be specified.

Two repository objects are created for a CDS view (of the [ABAP CDS](ABENABAP_CDS_GLOSRY.html)) that is defined using `DEFINE VIEW`. A name must be specified for each of the two objects:

Both names are in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. and must each be unique. The name `ddic_based_view` of the CDS entity can be used in other CDS DDL statements or in ABAP programs to access the CDS view.

The information specified in [`name_list`](ABENCDS_NAME_LIST_V1.html) can be used to define the names of the elements of the view in a name list. [`parameter_list`](ABENCDS_PARAMETER_LIST_V1.html) can be used to assign input parameters to the view. These input parameters can be specified in operand positions of the view and can be assigned actual parameters when the view is used.

The following CDS view works in exactly the same way as the [DDIC projection view](ABENDDIC_PROJECTION_VIEWS.html)\\ `DEMO_SPFLI` in ABAP Dictionary. The class `CL_DEMO_CDS_PROJECTION` uses `SELECT` to access the view. Unlike when the DDIC view `DEMO_SPFLI` is accessed, no client column is returned when the CDS entity `DEMO_CDS_SPFLI` is accessed. The CDS-managed DDIC view (obsolete) `DEMO_CDS_PRJCTN` returns the client column too.

-   The name `CDS_DB_VIEW` of an [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) must be specified in quotation marks after the [annotation](ABENCDS_VIEW_ANNO_V1.html)\\ `@AbapCatalog.sqlViewName`. This view is the technical foundation of the CDS view in ABAP Dictionary. The usual rules for ABAP Dictionary [views](ABENDDIC_VIEWS.html) apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). The associated SQL view is created under this name on the database. The name given to the DDIC database view can no longer be changed after the CDS view is transported into a follow-on system.
-   The name `ddic_based_view` of the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is defined after the keywords `DEFINE VIEW` (`DEFINE` is optional). No quotation marks need to be specified. This name follows the rules of the CDS-managed DDIC view (obsolete), but can have 30 characters. The CDS entity represents all properties of the CDS view.

-   The [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html)\\ `CDS_DB_VIEW` must not be used directly in CDS DDL and ABAP. Usage has been declared [obsolete](ABENCDS_ACCESS_OBSOLETE.html). Instead, it is strongly recommended that only the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is used, since only this entity covers all properties of the CDS view.
-   [ABAP annotations](ABENCDS_VIEW_ANNO_V1.html) can be used to assign further technical and semantic properties to a view for evaluation by the ABAP runtime framework. [Framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be used to give the element specific semantic properties for other SAP frameworks.
-   If a [CDS role](ABENCDS_ROLE_GLOSRY.html) is defined for a CDS entity using the CDS-DCL statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html), implicit [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) applies by default when the CDS entity is accessed using ABAP SQL. CDS access control can be switched off using the value `#NOT_ALLOWED` for the annotation [`@AccessControl.authorizationCheck`](ABENCDS_VIEW_ANNO_V1.html) and using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause of an ABAP SQL query.
-   The DDL source code of a CDS view does not need to have the same name as the CDS entity, but it is advisable to use this name.
-   After a piece of DDL source code is transported, the combination of its name and the name of the CDS view defined in it and its CDS-managed DDIC view is defined and can no longer be modified by being renamed.
-   The programming of CDS views using the DDL of the Core Data Services is one of the tasks included in the implementation of data models and is not usually the responsibility of regular ABAP application programmers. Once created, CDS views are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.
-   Every CDS view has its own [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html). The DDL source code of a CDS view is edited in a different editor than the [DDLA source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) of an [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html), the [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) of a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html), and the [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) of a [CDS role](ABENCDS_ROLE_GLOSRY.html). The [ADT](ABENADT_GLOSRY.html) documentation describes how the different types of source code are created.
-   CDS source code can also be displayed in [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).
-   The [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a CDS view defined using `DEFINE VIEW` can be displayed by entering the name `CDS_DB_VIEW` in the ABAP Dictionary [tool](ABENDDIC_TOOLS.html) in ABAP Workbench. However the view cannot be maintained here. Furthermore, this display does not provide all information.
-   If a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is accessed using an ABAP SQL [`SELECT`](ABAPSELECT.html) statement and the name `ddic_based_view`, the syntax check is performed in [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_spfli\\n as select from\\n spfli\\n \\{\\n key spfli.carrid,\\n key spfli.connid,\\n spfli.cityfrom,\\n spfli.cityto\\n \\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html