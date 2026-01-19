---
title: "ABENHANA_DATA_AGING_DRULS"
description: |
  ABENHANA_DATA_AGING_DRULS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHANA_DATA_AGING_DRULS.htm"
abapFile: "ABENHANA_DATA_AGING_DRULS.html"
keywords: ["select", "do", "if", "case", "class", "data", "ABENHANA", "DATA", "AGING", "DRULS"]
---

[Dependency rules](ABENDDIC_DEPENDENCY_RULES.html) are SAP HANA database objects that can represent dependencies between semantic columns and technical columns in a database table. The optimizer can then use these dependencies to create extended selection conditions when the table is read.

In database tables with active [data aging](ABENTEMPERATURE_COLUMN_GLOSRY.html) using a [temperature column](ABENDATA_AGING_GLOSRY.html), dependency rules can be used to optimize access to outdated data. In this case, a dependency rule joins the [temperature column](ABENTEMPERATURE_COLUMN_GLOSRY.html) of a database table with regular date columns in the table.

In tables with a temperature column, only the current data is located in the main memory of the SAP HANA database and outdated data is moved to other partitions. By default, the [AS ABAP](ABENAS_ABAP_GLOSRY.html)\\ [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) accesses current data only. The relationship between the actual data and the partition limits is defined in data aging runs and is made transparent for application programming. This means that, when outdated data is to be accessed, the data in all partitions must first be loaded to the main memory of the SAP HANA database, which can have a negative effect on performance. Outdated data can be accessed as follows:

A dependency rule can be used to add a selection condition for the temperature column to an access of this type. This restricts the temperatures to those that are in the same rows as the data that is actually requested. This means that the SAP HANA database only has to load those partitions to its main memory that contain the required data.

It cannot be guaranteed, however, that the SAP HANA database optimizer actually creates the additional selection condition for the temperature column. This is why this condition must not modify the result set of the original query. This is technically possible, but it produces undefined behavior in cases where the SAP HANA database optimizer responds differently depending how a query is formulated.

The following sections demonstrate how dependency rules for optimizing access to outdated data can be defined.

The [temperature column](ABENTEMPERATURE_COLUMN_GLOSRY.html) has the following important properties for [filter dependency rules](ABENDDICDDL_DEFINE_FILTER_DRUL.html):

This means that filter dependency rules can be defined as follows:

The actual design of filter dependency rules for optimizing access to outdated data depends on the layout of the database tables and the rules applied in the data aging run.

In the following CDS view entity, data aging is disabled for the database table `DAAG_SFLIGHT` using the annotation `@DataAging.noAgingRestriction:true`.

When this view entity is accessed using ABAP SQL, both outdated and current data is read:

To avoid loading all partitions, a filter dependency rule can be defined as follows, assuming that the temperature column `_DATAAGING` for outdated data has the same value as the column `FLDATE`.

The SAP HANA database optimizer then adds the following additional selection condition to the `WHERE` condition of the shown `SELECT` statement implicitly:

This does not affect the result set of the query.

If multiple database tables are joined together in a relational model, data aging must be respected for all these tables. Rows in different database tables that have the same date are usually joined using join expressions. These joins can be in ABAP SQL, Native SQL, or in views.

[Join dependency](ABENDDICDDL_DEFINE_JOIN_DRUL.html) rules can be defined to optimize access to outdated data for database tables joined like this. As in filter dependency rules, the actual design of the data aging must be known as well as how the tables depend on each other.

In the following CDS view, data aging is disabled for the database tables `DAAG_SFLIGHT` and `DAAG_SBOOK` using the annotation`@DataAging.noAgingRestriction:true`.

When this view is accessed using ABAP SQL, both outdated and current data is read:

To avoid loading all partitions, a join dependency rule can be defined as follows, in addition to the filter dependency rules in the previous example. Here, the assumption is made that the temperature column `_DATAAGING` for outdated data in both tables has the same value as the column `FLDATE`.

The SAP HANA database optimizer then adds the following additional selection condition to the `ON` condition of the join expression of the CDS view implicitly:

The following additional selection conditions from the filter condition are also added to the `WHERE` condition of the shown `SELECT` statement:

This does not modify the result set of the query.

-   Disabling data aging in the database interface using the profile parameter `abap/data_aging`.
-   Bypassing data aging in ABAP SQL access to [CDS views](ABENCDS_VIEW_GLOSRY.html) and [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) using the annotation`@DataAging.noAgingRestriction:true`.
-   Setting a different temperature using the classes `CL_ABAP_SESSION_TEMPERATURE` and `CL_ABAP_STACK_TEMPERATURE`.
-   Access using [Non-ABAP-Managed Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html)

-   The temperature column has the data type `DATS`.
-   For current data, the temperature column has the initial value `00000000`.
-   In the case of outdated data, the temperature column contains a date value created in the data aging run.

-   For access to outdated data, filter dependency rules can derive additional selection conditions. These conditions contain comparisons for the temperature column, restricting it to the same rows as the selection conditions for the associated date values.
-   If current data is required together with outdated data, filter dependency rules must be defined in such a way that the selection condition restricts the temperature column to the required date values without excluding the current data. In this case, the additional selection condition must contain a relational expression `dbtab._dataaging = '00000000'` joined using `OR`.

@DataAging.noAgingRestriction:true\\n@EndUserText.label: 'hallo'\\n\\ndefine view entity DEMO\_CDS\_DAAG\_SFLIGHT\\n as select from daag\_sflight\\n\\{\\n key carrid,\\n key connid,\\n key fldate,\\n planetype\\n\\}\\n SELECT \* \\n FROM demo\_cds\_daag\_sflight \\n WHERE fldate >= '20160101' \\n INTO TABLE @FINAL(result). @DataAging.noAgingRestriction:true\\ndefine view entity demo\_cds\_daag\_sflight\_sbook\\n as select from daag\_sflight\\n inner join daag\_sbook \\n on daag\_sflight.carrid = daag\_sbook.carrid and \\n daag\_sflight.connid = daag\_sbook.connid and \\n daag\_sflight.fldate = daag\_sbook.fldate\\n\\{\\n daag\_sflight.carrid,\\n daag\_sflight.connid,\\n daag\_sflight.fldate,\\n daag\_sbook.bookid,\\n daag\_sbook.customid\\n\\}\\n AND daag\_sflight~\_dataaging >= '20160101' \\n OR daag\_sflight~\_dataaging = '00000000' @AbapCatalog.sqlViewName: 'DEMOCDSDAAGSFLBK' \\n@DataAging.noAgingRestriction:true \\nDEFINE VIEW demo\_cds\_daag\_sflight\_sbook AS \\n SELECT FROM daag\_sflight \\n INNER JOIN daag\_sbook \\n ON daag\_sflight.carrid = daag\_sbook.carrid AND \\n daag\_sflight.connid = daag\_sbook.connid AND \\n daag\_sflight.fldate = daag\_sbook.fldate \\n \\{ daag\_sflight.carrid, \\n daag\_sflight.connid, \\n daag\_sflight.fldate, \\n daag\_sbook.bookid, \\n daag\_sbook.customid \\}; SELECT \* \\n FROM demo\_cds\_daag\_sflight\_sbook \\n WHERE fldate >= '20160101' \\n INTO TABLE @DATA(result). DEFINE JOIN DEPENDENCY RULE demo\_daag\_sflight\_sbook\_rule \\n ON daag\_sflight, daag\_sbook \\n IF \\{ daag\_sflight.mandt = daag\_sbook.mandt AND \\n daag\_sflight.carrid = daag\_sbook.carrid AND \\n daag\_sflight.connid = daag\_sbook.connid AND \\n daag\_sflight.fldate = daag\_sbook.fldate \\} \\n THEN \\{ daag\_sflight.\_dataaging = daag\_sbook.\_dataaging \\} AND daag\_sflight.\_dataaging = daag\_sbook.\_dataaging AND daag\_sflight~\_dataaging >= '20160101' \\nAND daag\_sbook~\_dataaging >= '20160101' \\nOR daag\_sflight~\_dataaging = '00000000' \\nOR daag\_sbook~\_dataaging = '00000000' abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_hana.html abenhana\_data\_aging.html