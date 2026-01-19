---
title: "ABENBDL_INVERSE_FUNCT"
description: |
  ABENBDL_INVERSE_FUNCT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_INVERSE_FUNCT.htm"
abapFile: "ABENBDL_INVERSE_FUNCT.html"
keywords: ["select", "update", "delete", "do", "if", "case", "method", "class", "data", "ABENBDL", "INVERSE", "FUNCT"]
---

``...\{          [[`internal`](ABENBDL_INTERNAL.html)]\          inverse function FunctionName          [result selective [cardinality] $self];     \}``

An inverse function is a static function that can be defined for a [foreign key association](ABENFOREIGN_KEY_ASSOC_GLOSRY.html). For a given value of the foreign key of that association, the inverse function returns all instances of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) entity where the supplied value of the foreign key matches.

Like any static function, you can use the inverse function as a standalone [EML](ABENEML_GLOSRY.html) operation. However, its main use case lies in enabling a managed [read by association](ABENRAP_RBA_OPERATION_GLOSRY.html) of a [target-resolved](ABENTARGET_RESOLVED_ASSOC_GLOSRY.html) cross-[BO association](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html).

An explicit output parameter is optional. If specified, the syntax for the output parameter is `result selective [cardinality] $self`. The cardinality specification can be `[0..1]`, `[0..*]`, or `[1]`. If no output parameter is specified, the implicit default is `result selective [1] $self`. For further details on output parameters, see [RAP - `OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html).

The link and unlink actions are handled by the managed RAP BO provider. No implementation in an ABAP behavior pool is required.

**RAP BDL Operation Additions**

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

Development guide for the ABAP RESTful Application Programming Model, section [Inverse Function](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/14fedb7fb9dc4ac68830bd0bb845244f?version=sap_cross_product_abap).

In this example, a target entity instance with the primary key `TargetKey = 100` is supplied in the parameter of the inverse function. As a result, all source entity instances with the foreign key `TargetKey = 100` are returned.

BDEF of the source entity:

The source table in this example is filled with the following instances:

The `inverse function` can be executed with EML as demonstrated in the following code snippet:

The output delivers the following results:

-   [internal](ABENBDL_INTERNAL.html) to make the respective action accessible only from within the business object implementation.

-   Managed RAP BO: In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), the link and unlink actions do not require an [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html), since they are completely handled by the managed RAP BO provider, unless the association is unmanaged.
-   Unmanaged RAP BO: In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), the link and unlink actions must be implemented in the ABAP behavior pool in the [RAP handler method](ABAPMETHODS_FOR_RAP_BEHV.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html), unless the associations is managed.
-   Projection BO and RAP BO Interface: In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) and in a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), the link and unlink actions can be reused from the [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html). This can be done using the keyword `use` for the association, listing the respective operations again. For further details, see topic [RAP BDL - use, projection BDEF](ABENBDL_USE_PROJECTION.html).

managed implementation in class bp\_demo\_rap\_inverse\_func\_src unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_INVERSE\_FUNC\_SRC //alias <alias\_name>\\npersistent table demo\_invfct\_src\\nlock master\\nauthorization master ( instance )\\n\\n\\{\\n create ( authorization : global );\\n update;\\n delete;\\n field ( readonly : update ) SourceKey;\\n\\n association \_CROSS\_ASSOC\\n \\{\\n inverse function inverse\_function;\\n \\}\\n\\n mapping for demo\_invfct\_src\\n \\{\\n SourceKey = source\_key;\\n TargetKey = target\_key;\\n CharField = char\_field;\\n \\}\\n\\n\\} read ENTITIES OF DEMO\_RAP\_INVERSE\_FUNC\_SRC \\n ENTITY DEMO\_RAP\_INVERSE\_FUNC\_SRC \\n EXECUTE inverse\_function FROM value #( ( \\n %cid = 'mycid' \\n %param-TargetKey = '100' \\n\\ \\n) ) \\n\\ \\n RESULT data(result). SOURCE\_KEY TARGET\_KEY CHARFIELD 1 100 source 1 2 200 source 2 3 300 source 3 %CID %PARAM mycid SOURCEKEY TARGETKEY CHARFIELD \\ 1 100 source 1 mycid SOURCEKEY TARGETKEY CHARFIELD \\ 2 100 source 2 abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_association.html abenbdl\_assoc\_nonstand\_ops.html