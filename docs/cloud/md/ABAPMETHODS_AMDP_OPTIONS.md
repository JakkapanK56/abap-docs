---
title: "ABAPMETHODS_AMDP_OPTIONS"
description: |
  ABAPMETHODS_AMDP_OPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMETHODS_AMDP_OPTIONS.htm"
abapFile: "ABAPMETHODS_AMDP_OPTIONS.html"
keywords: ["if", "case", "method", "class", "data", "ABAPMETHODS", "AMDP", "OPTIONS"]
---

``[CLASS-]METHODS meth ... AMDP OPTIONS [READ-ONLY]\                                        [[`client_handling`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)] ...``

[`... READ-ONLY`](#ABAP_ONE_ADD@1@)

The addition `AMDP OPTIONS` for [`METHODS`](ABAPMETHODS.html) and [`CLASS-METHODS`](ABAPCLASS-METHODS.html) statements can be used to declare properties of [AMDP methods](ABENAMDP_METHODS.html) of global classes or interfaces. After `AMDP OPTIONS`, at least one property must be specified. The following properties can be set:

If the addition `AMDP OPTIONS` is used in the declaration of a method, but the method is implemented as a regular ABAP method without the addition [`BY DATABASE PROCEDURE|FUNCTION`](ABAPMETHOD_BY_DB_PROC.html), the properties specified by `AMDP OPTIONS` are ignored. However, the following restrictions for AMDP methods apply to the method declaration:

A prerequisite for using `AMDP OPTIONS` is that the global class or the interface must contain a [tag interface](ABENTAG_INTERFACE_GLOSRY.html)\\ [`IF_AMDP_MARKER_...`](ABENAMDP_CLASSES.html) for [AMDP classes](ABENAMDP_CLASS_GLOSRY.html). `AMDP OPTIONS` cannot be used in the following cases:

If the option `READ-ONLY` is specified, only reads of database tables are allowed in the [implementation](ABAPMETHOD_BY_DB_PROC.html) of the [database procedure](ABENDATABASE_PROCEDURE_GLOSRY.html) or [database function](ABENDATABASE_FUNCTION_GLOSRY.html). Only database procedures or database functions of other AMDP methods that are also marked as `READ-ONLY` can be called. This is checked during the syntax check or at runtime.

This property can also be specified using the addition `OPTIONS` in the implementation of an AMDP method with [`METHOD meth BY DATABASE PROCEDURE|FUNCTION`](ABAPMETHOD_BY_DB_PROC.html). It applies when specified either in the declaration or in the implementation of the method, or in both places.

In the current ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), the addition `READ-ONLY` must be specified at least once.

-   `READ ONLY` in order to allow only read accesses to database objects in the method implementation.
-   Different options [`client_handling`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) that affect the client handling of the method implementation.

-   If there is no `RETURNING` parameter, the restrictions for [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHODS.html) apply.
-   If there is a `RETURNING` parameter, the restrictions described for [AMDP function implementations](ABENAMDP_FUNCTION_METHODS.html) apply.

-   in local classes
-   for the [constructors](ABENCONSTRUCTOR_GLOSRY.html)\\ [`constructor`](ABAPMETHODS_CONSTRUCTOR.html) or [`class_constructor`](ABAPCLASS-METHODS_CONSTRUCTOR.html)
-   for [event handlers](ABENEVENT_HANDLER_GLOSRY.html) declared with [`FOR EVENT`](ABAPMETHODS_EVENT_HANDLER.html)
-   for [redefinitions](ABENREDEFINITION_GLOSRY.html) declared with [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html)
-   for [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) for [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) declared with [`FOR TABLE FUNCTION`](ABAPCLASS-METHODS_FOR_TABFUNC.html)
-   for [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) for [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) declared with [`FOR SCALAR FUNCTION`](ABAPCLASS-METHODS_FOR_SCALFUNC.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html