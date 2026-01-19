---
title: "The new element annotations"
description: |
  A CDS projection view(ABENCDS_DEFINE_VIEW_AS_PROJECTION.html) is a direct projection of the underlying CDS view and exposes only a subset of elements of the projected entity. A CDS projection view is defined using `DEFINE VIEW ENTITY AS PROJECTION ON` in a CDS data definition. ABAP CDS now support
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-754-ABAP_CDS.htm"
abapFile: "ABENNEWS-754-ABAP_CDS.html"
keywords: ["if", "data", "ABENNEWS", "754", "ABAP", "CDS"]
---

[1\. Temporal Hierarchies](#ABAP_MODIFICATION_1@4@)

[2\. Annotation for Database Hints](#ABAP_MODIFICATION_2@4@)

[3\. Annotations for Releasing Elements](#ABAP_MODIFICATION_3@4@)

[4\. CDS Projection Views](#ABAP_MODIFICATION_4@4@)

[5\. New Date Functions](#ABAP_MODIFICATION_5@4@)

[6\. New Time Stamp Functions](#ABAP_MODIFICATION_6@4@)

[7\. New Date/Time Conversion Functions](#ABAP_MODIFICATION_7@4@)

[8\. Hierarchy Load Options](#ABAP_MODIFICATION_8@4@)

[9\. CDS Custom Entities](#ABAP_MODIFICATION_9@4@)

[10\. Handling of Annotation Values](#ABAP_MODIFICATION_10@4@)

[11\. Root Nodes and Compositions](#ABAP_MODIFICATION_11@4@)

The new addition `PERIOD` of the statement [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) can now be used to create [temporal hierarchies](ABENTEMPORAL_HIERARCHY_GLOSRY.html) in which the hierarchy nodes are limited by time intervals.

The [framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ [`@Consumption.dbHints`](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html) replaces the [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ [`@AbapCatalog.dbHints`](ABENCDS_ANNOTATIONS_ABAP_TABLES.html) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as [SADL](ABENSADL_GLOSRY.html) and not by the ABAP runtime environment.

The new element annotations

A [CDS projection view](ABENCDS_DEFINE_VIEW_AS_PROJECTION.html) is a direct projection of the underlying CDS view and exposes only a subset of elements of the projected entity. A CDS projection view is defined using `DEFINE VIEW ENTITY AS PROJECTION ON` in a CDS data definition.

ABAP CDS now supports the following new date functions:

ABAP CDS now supports the following new time stamp functions:

ABAP CDS now supports the following new [date/time conversion functions](ABENCDS_DATE_TIME_CONVERSIONS_V1.html):

The [hierarchy generator](ABENCDS_F1_DEFINE_HIERARCHY.html)\\ [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) can now use the new addition `LOAD BULK|INCREMENTAL|load_option` to specify the load policy for a generated hierarchy.

A new type of [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is available: the [CDS custom entity](ABENCDS_CUSTOM_ENTITIES.html). CDS custom entities are used in the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) to implement ABAP queries in CDS.

A change in the handling of [annotation values](ABENANNOTATION_VALUE_GLOSRY.html) has been introduced with the following consequences:

These changes are slightly incompatible.

The new addition `ROOT` is available for CDS entities to mark an entity as a [CDS root entity](ABENROOT_ENTITY_GLOSRY.html). In addition, [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) can be declared as `COMPOSITION` or `TO PARENT`. In this way, a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) can be modeled for use in the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html).

-   [`@API.element.releaseState`](ABENCDS_F1_ELEMENT_ANNOTATION.html)
-   [`@API.element.successor`](ABENCDS_F1_ELEMENT_ANNOTATION.html)
-   can be used to override releases of the individual elements and successors can be specified for forbidden elements.

-   [`DATN_DAYS_BETWEEN`](ABENCDS_DATE_FUNCTIONS_V1.html)
-   [`DATN_ADD_DAYS`](ABENCDS_DATE_FUNCTIONS_V1.html)
-   [`DATN_ADD_MONTHS`](ABENCDS_DATE_FUNCTIONS_V1.html)

-   [`UTCL_CURRENT`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html)
-   [`UTCL_ADD_SECONDS`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html)
-   [`UTCL_SECONDS_BETWEEN`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html)

-   [`TSTMPL_TO_UTCL`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html) and [`TSTMPL_FROM_UTCL`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html)
-   [`DATS_TO_DATN`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html) and [`DATS_FROM_DATN`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html)
-   [`TIMS_TO_TIMN`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html) and [`TIMS_FROM_TIMN`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html)

-   Annotations that require an [enumeration symbol](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html) as annotation value no longer accept string values. They only accept enumeration symbols.
-   Example: Until release 7.54, the following was accepted: `@AccessControl.authorizationCheck: '#CHECK'`. From release 7.54, this is no longer accepted. The quotation marks must be removed.
-   If *#* is the first or the only character of `EndUserText.label` or `EndUserText.quickInfo`, then it is not removed from the unescaped value any more.

abenabap.html abennews.html abennews-75.html abennews-754.html