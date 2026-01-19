---
title: "ABENCDS_VIEW_CLIENT_HANDLING_OBS"
description: |
  ABENCDS_VIEW_CLIENT_HANDLING_OBS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_VIEW_CLIENT_HANDLING_OBS.htm"
abapFile: "ABENCDS_VIEW_CLIENT_HANDLING_OBS.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "VIEW", "CLIENT", "HANDLING", "OBS"]
---

Before the annotation [`@ClientHandling`](ABENCDS_VIEW_ANNO_V1.html) was introduced, the [client dependency](ABENCDS_FUNC_CLIENT_HANDLING.html) of a CDS view was specified using the annotation `ClientDependent` with the possible values `true` and `false`.

The obsolete annotation `ClientDependent` is not defined with [`DEFINE ANNOTATION`](ABENCDS_F1_DEFINE_ANNOTATION.html) and there is no [annotation documentation](ABENCDS_ANNOTATIONS_KTD_DOCU.html). Its properties can be found under [Obsolete CDS Annotations](ABENCDS_ANNOTATION_OBSOLETE.html).

The possible values `true` and `false` of the obsolete annotation `@ClientDependent` have the following effects on client dependency:

Only the annotation `@ClientHandling.type` should now be used in new CDS views. The annotations `@ClientHandling` and `@ClientDependent` cannot be used together in the definition of a CDS table function. If neither of the annotations `@ClientHandling.type` and `@ClientDependent` is specified, the default value of `@ClientHandling.type` applies.

The possible values `true` and `false` of the obsolete annotation `@ClientDependent` have the following effects on client handling:

Client-dependent views with the annotation `@ClientDependent:true` have the same properties as client-dependent views with the annotation `@ClientHandling.type.#INHERITED` or `@ClientHandling.type.#CLIENT_DEPENDENT`. `@ClientDependent:false` can be used, on the other hand, to define client-independent views, even if they contain client-dependent data sources. These have the following properties:

It is not usually a good idea to disable client dependency in views with client-dependent data sources. If this is still sometimes the case, only the CDS entity must be accessed, and never the CDS-managed DDIC view (obsolete), to avoid unexpected behavior.

-   `true`
-   The annotation `ClientDependent:true` works like [`@ClientHandling.type:#INHERITED`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html).

-   A view with client-dependent data sources is a client-dependent view.
-   A view with exclusively client-independent data sources is a client-independent view.

-   Unlike in `@ClientHandling:#INHERITED`, a view in which a client-independent data source as the left side of a `LEFT OUTER JOIN` is joined with a client-dependent data source on the right side cannot be made client-dependent using `@ClientDependent:true` and a syntax error occurs.
-   `false`
-   The annotation `ClientDependent:false` makes a view into a client-independent view. Unlike in [`@ClientHandling.type:#CLIENT_INDEPENDENT`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html), this value can also be specified for view when a data source of the view is client-dependent.

-   `true`
-   The annotation `ClientDependent:true` works like [`@ClientHandling.algorithm:#AUTOMATIC`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html). No cross join, however, is created here for the case (forbidden here) where a client-independent data source is joined with a client-dependent data source using a `LEFT OUTER JOIN`.
-   `false`
-   The annotation `@ClientDependent:false` works like [`@ClientHandling.algorithm:#NONE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html). Client handling can be disabled here for views that contain client-dependent data sources.

-   [CDS entity](ABENCDS_ENTITY_GLOSRY.html)
-   A client column specified in the `SELECT` list is preserved in the result set if client dependency is disabled explicitly using the annotation `@ClientDependent:false`. The column is then applied like a regular view field when the CDS entity is accessed.
-   [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html)
-   If client dependency is switched off explicitly using the annotation `@ClientDependent:false`, an associated CDS-managed DDIC view (obsolete) does not have a client column if it is not specified explicitly in the `SELECT` list. A client column specified in the `SELECT` list, on the other hand, specifies that the CDS-managed DDIC view (obsolete) has a client column, hence making it a client-dependent view. This has consequences for [obsolete](ABENABAP_SQL_CDS_OBSOLETE.html) access to the CDS-managed DDIC view using [`SELECT`](ABAPSELECT.html). This is then handled in accordance with [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) for dictionary objects.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_view\_client\_handling\_v1.html