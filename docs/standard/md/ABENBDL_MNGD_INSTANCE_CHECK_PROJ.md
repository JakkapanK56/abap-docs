---
title: "ABENBDL_MNGD_INSTANCE_CHECK_PROJ"
description: |
  ABENBDL_MNGD_INSTANCE_CHECK_PROJ - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_MNGD_INSTANCE_CHECK_PROJ.htm"
abapFile: "ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "data", "ABENBDL", "MNGD", "INSTANCE", "CHECK", "PROJ"]
---

`...  with managed instance filter;   ...`

Optional addition for [projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html) and [interface BDEFs](ABENCDS_INTERFACE_BDEF_GLOSRY.html). It is specified in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) and it is valid for all [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html) that are part of the current RAP BO.

The effect is that the [`WHERE`](ABENCDS_PROJ_VIEW_COND_EXPR.html) condition of the underlying [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) or [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) is evaluated when the BDEF is accessed with [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) requests from Web clients, both for [active](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html) and for [draft instances](ABENRAP_DRAFT_INSTANCE_GLOSRY.html). If an entity within the BDEF does not have a `WHERE` clause, this addition does not have any effect, but as soon as a `WHERE` clause is added, the checks are activated.

If this addition is not specified, the `WHERE` clause is ignored when the BDEF is accessed with [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) requests from Web clients. This means that it is possible to read and modify entity instances that are not part of the result set of the projection BDEF or interface BDEF in question.

The instances for the following operations are checked *before* every EML or OData call:

If an entity instance does not fulfill the `WHERE` clause, it is returned in the [response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html)\\ [`FAILED`](ABAPEML_RESPONSE.html). It is not passed to the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) of the operation in question.

The `WHERE` clause is evaluated and the instance check takes place before the RAP handler method is called but after the [RAP BO augmentation](ABENRAP_BO_AUGMENTATION_GLOSRY.html), so the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) can modify incoming requests with the operation augmentation in such a way that they fulfill the `WHERE` clause, for example, if fields are defined as `readonly` in the projection.

During an update request, if instances are modified in a way that they no longer fulfill the `WHERE` clause of the underlying CDS entity, then no further operations on these instances are possible via the current projection or interface BDEF.

For the operations [create](ABENRAP_CREATE_OPERATION_GLOSRY.html) and [create-by-association](ABENRAP_CBA_OPERATION_GLOSRY.html), the RAP BO provider must ensure via RAP handler methods and the operation augmentation that only valid entity instances are created. The managed RAP BO provider does not evaluate the `WHERE` clause for these operations. Therefore, creating RAP BO entity instances that do not fulfill the `WHERE` condition is possible, but no further operations on these instances are possible.

In the case of the read-by-association operation, the requested RAP BO entity instances of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) instances are checked *after* every EML or OData call. If an entity instance does not fulfill the `WHERE` clause of the child entity, it is removed from the [`RESULT`](ABAPEML_RESULT.html) and [`LINK`](ABAPREAD_ENTITY_ENTITIES_OP.html) set, but it is not added to the response parameter `FAILED`.

If a projection BDEF is based on an interface BDEF and the underlying projection views both have a `WHERE` clause, then always the requested entity decides whether the instance filter is active or not. For example, if only the projection BDEF specifies `with managed instance checks` and a RAP BO consumer requests this projection BDEF, then both `WHERE` clauses (the one for the interface and the one for the projection) are evaluated and instances are filtered out.

The `WHERE` clause is not evaluated when executing [static RAP BO operations](ABENRAP_STATIC_OPERATION_GLOSRY.html).

The following example demonstrates the effect of the addition `with managed instance filter` in a projection BDEF.

First of all, it demonstrates that the `WHERE` clause of a CDS transactional interface is ignored in an ABAP EML call if the addition `with managed instance filter` is *not* specified.

CDS transactional interface that uses a `WHERE` clause to filter the result set to include only instances with that have the value *AA* in the field `carrid`.

Projection BDEF without managed instance filter:

Accessing the projection BDEF:

Result: The entity instance highlighted in red should not be part of the result set. It should be filtered out by the `WHERE` clause.

If, however, the projection BDEF specified the addition `with managed instance filter`, the `WHERE` clause is evaluated.

Projection BDEF with managed instance filter:

Accessing the projection BDEF with managed instance filter:

-   [Read operation](ABENRAP_READ_OPERATION_GLOSRY.html)
-   [Update operation](ABENRAP_UPDATE_OPERATION_GLOSRY.html)
-   \\ [Delete operation](ABENRAP_DELETE_OPERATION_GLOSRY.html)
-   Executing [instance RAP BO operations](ABENRAP_INSTANCE_OPERATION_GLOSRY.html)
-   [Read by association operation](ABENRAP_RBA_OPERATION_GLOSRY.html)
-   EML permissions ([`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html))

-   [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html)
-   [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html)

-   Without the `with managed instance checks` addition, instances that are not part of the projection may be read and modified using ABAP EML or OData, potentially posing a security risk.
-   When using [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html), `with managed instance checks` does not have any effect.

-   The projection BDEF is first accessed using ABAP SQL. The `WHERE` condition of the transactional interface is evaluated and the result set contains only instances that have the value *AA* in the field `carrid`.
-   Then, the projection BDEF is accessed using ABAP EML. The `WHERE` condition is *not* evaluated and the result set also contains an instance with the value *LH* in the field `carrid`.

-   The projection BDEF with a managed instance filter is accessed first using ABAP SQL and then using ABAP EML. The `WHERE` clause is evaluated in both cases and the result set is identical.

-   Result:

@EndUserText.label: 'CDS transactional query'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_RAP\_INSTANCE\_FILTER\_TQ\\n provider contract transactional\_query\\n as projection on DEMO\_RAP\_INSTANCE\_FILTER\\n\\{\\n key carrid,\\n key connid,\\n countryfr\\n\\}\\nwhere carrid = 'AA'\\n projection;\\nstrict ( 2 );\\nwith managed instance filter;\\ndefine behavior for DEMO\_RAP\_INSTANCE\_FILTER\_TQ alias Root\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n\\} "ABAP SQL read on projection \\nSELECT FROM DEMO\_RAP\_INSTANCE\_FILTER\_TQ \\n FIELDS carrid, connid, countryfr \\n INTO TABLE @FINAL(select\_res). \\n\\ \\n"ABAP EML read entity on projection \\nREAD ENTITY DEMO\_RAP\_INSTANCE\_FILTER\_TQ \\nALL FIELDS WITH VALUE #( \\n ( carrid = 'AA' connid = '0017' ) \\n ( carrid = 'AA' connid = '0064' ) \\n ( carrid = 'LH' connid = '0400' ) \\n) \\nRESULT DATA(read\_res) \\nFAILED DATA(read\_failed). \\n\\ \\n FINAL(o) = cl\_demo\_output=>new( ). \\n o->next\_section( 'SELECT with ABAP SQL' \\n )->write( select\_res \\n )->next\_section( 'READ with ABAP EML' \\n )->write( read\_res \\n )->display( ). projection;\\nstrict ( 2 );\\n\\nwith managed instance filter;\\n\\ndefine behavior for DEMO\_RAP\_INSTANCE\_FILTER\_TQ1\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n\\} "ABAP SQL read on projection \\nSELECT FROM demo\_rap\_instance\_filter\_tq1 \\n FIELDS carrid, connid, countryfr \\n INTO TABLE @FINAL(select\_res1). \\n\\ \\n"ABAP EML read entity on projection \\nREAD ENTITY demo\_rap\_instance\_filter\_tq1 \\nFIELDS ( carrid connid countryfr ) \\nWITH VALUE #( ( %key-carrid = 'AA ' %key-connid = '0017' ) \\n ( %key-carrid = 'AA' %key-connid = '0064' ) \\n ( %key-carrid = 'LH' %key-connid = '0400' ) ) \\n\\ \\nRESULT DATA(read\_res1) \\nFAILED DATA(read\_failed1). \\n\\ \\nFINAL(o) = cl\_demo\_output=>new( ). \\no->next\_section( 'SELECT with ABAP SQL' \\n )->write( select\_res1 \\n )->next\_section( 'READ with ABAP EML' \\n )->write( read\_res1 \\n )->display( ). abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_bdef\_projection\_header.html