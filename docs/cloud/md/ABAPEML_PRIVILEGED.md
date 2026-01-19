---
title: "Short Forms of ABAP EML Statements"
description: |
  Long Forms of ABAP EML Statements Dynamic Forms of ABAP EML Statements -   The use of `FORWARDING PRIVILEGED` will have no effect if the targeted RAP BO entity is not defined with `with privileged mode`. -   A syntax warning occurs if ABAP EML requests on external RAP BO entities are used inside a b
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPEML_PRIVILEGED.htm"
abapFile: "ABAPEML_PRIVILEGED.html"
keywords: ["do", "if", "case", "method", "class", "ABAPEML", "PRIVILEGED"]
---

1\. [`MODIFY ENTITY [FORWARDING] PRIVILEGED bdef ...`](ABAPMODIFY_ENTITY_SHORT.html) \\
\\ \\ [`READ ENTITY [FORWARDING] PRIVILEGED bdef ...`](ABAPREAD_ENTITY_SHORT.html) \\
\\ \\ [`GET PERMISSIONS [FORWARDING] PRIVILEGED ... ENTITY bdef ...`](ABAPGET_PERMISSIONS_SHORT.html)

2\. [`MODIFY ENTITIES OF bdef [FORWARDING] PRIVILEGED ENTITY ...`](ABAPMODIFY_ENTITIES_LONG.html) \\
\\ \\ [`READ ENTITIES OF bdef [FORWARDING] PRIVILEGED ENTITY ...`](ABAPREAD_ENTITIES_LONG.html) \\
\\ \\ [`GET PERMISSIONS [FORWARDING] PRIVILEGED ... OF bdef ENTITY ...`](ABAPGET_PERMISSIONS_LONG.html)

3\. [`MODIFY ENTITIES [FORWARDING] PRIVILEGED OPERATIONS ...`](ABAPMODIFY_ENTITIES_OPERATIONS_DYN.html) \\
\\ \\ [`READ ENTITIES [FORWARDING] PRIVILEGED OPERATIONS ...`](ABAPREAD_ENTITIES_OPERATIONS.html) \\
\\ \\ [`GET PERMISSIONS [FORWARDING] PRIVILEGED ... OPERATIONS ...`](ABAPGET_PERMISSIONS_DYN.html)

[1. `... PRIVILEGED ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... FORWARDING PRIVILEGED ...`](#ABAP_ALTERNATIVE_2@2@)

The statements allow privileged access to [RAP business objects](ABENRAP_BO_GLOSRY.html). They can only be used if the [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) is defined with `with privileged mode ...`. Refer to the RAP BDL specification [`with privileged mode`](ABENBDL_PRIVILEGED_MODE.html) for more details.

The `PRIVILEGED` and `FORWARDING PRIVILEGED` additions are currently possible for the `READ`, `MODIFY`, and `GET PERMISSIONS` ABAP EML statements.

The `PRIVILEGED` addition is used for a privileged access to a [RAP business object](ABENRAP_BO_GLOSRY.html), allowing bypassing authority checks.

You can use the method `get_current_context` of class `CL_ABAP_BEHV_AUX` to obtain context information. Among others, you can determine if the running handler is running in privileged mode, e. g. as follows:

 cl\_abap\_behv\_aux=>get\_current\_context( IMPORTING privileged = FINAL(priv) ).

The following ABAP EML modify request shows the use of the `PRIVILEGED` addition.

The addition has the effect of forwarding privileged access, i.e. if an ABAP EML request is performed in a privileged context, you can pass on the privileged context and therefore retain the privileged context in subsequent ABAP EML requests, which is, for example, valid if another behavior implementation is called inside a behavior implementation.

The first statement in the following example shows an ABAP EML modify request with the `FORWARDING PRIVILEGED` addition. It is followed by an ABAP EML modify request with the `PRIVILEGED` addition and a prior call of the `GET_CURRENT_CONTEXT` method of the `CL_ABAP_BEHV_AUX` class.

Short Forms of ABAP EML Statements

Long Forms of ABAP EML Statements

Dynamic Forms of ABAP EML Statements

-   The use of `FORWARDING PRIVILEGED` will have no effect if the targeted RAP BO entity is not defined with `with privileged mode`.
-   A syntax warning occurs if ABAP EML requests on external RAP BO entities are used inside a behavior implementation without the additions `PRIVILEGED` or `FORWARDING PRIVILEGED`. You can remove the warning using the pragma `##NO_PRIVILEGED`. The warning does not occur when used with dynamic statements as it cannot be determined which entity the request refers to.
-   Statements with the `FORWARDING PRIVILEGED` addition are a shorter form of first querying the privileged context using the `GET_CURRENT_CONTEXT` method of the `CL_ABAP_BEHV_AUX` class, and then perform an ABAP EML request with or without the `PRIVILEGED` addition based on the value of the `privileged` parameter.
-   Specifying the `FORWARDING PRIVILEGED` addition results in the following effect: When a RAP BO is called with privileged access, subsequent ABAP EML requests that specify [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) retain this access. Eventually, an ABAP EML request with the `FORWARDING PRIVILEGED` addition triggers the calling of another RAP BO. In such a case, the original privileged access is forwarded, and intermediate ABAP EML requests with `IN LOCAL MODE` also retain this privileged access.

-   The example [Using the `PRIVILEGED` Addition with an ABAP EML Statement](ABENEML_PRIVILEGED_ABEXA.html) demonstrates the addition `PRIVILEGED` using an [action](ABENRAP_ACTION_GLOSRY.html) and a managed [RAP BO](ABENRAP_BO_GLOSRY.html).
-   The example [Using the `FORWARDING PRIVILEGED` Addition with an ABAP EML Statement](ABENEML_FORWARDING_PRIV_ABEXA.html) demonstrates ABAP EML `MODIFY` statements executing [actions](ABENRAP_ACTION_GLOSRY.html) with the addition `FORWARDING PRIVILEGED` using a managed RAP BO.

MODIFY ENTITY PRIVILEGED demo\_managed\_privileged \\n EXECUTE forwarding\_privileged \\n FROM ... \\n FAILED FINAL(f2) \\n REPORTED FINAL(r2). MODIFY ENTITY FORWARDING PRIVILEGED demo\_managed\_privileged\_t \\n EXECUTE act \\n FROM ... \\n FAILED FINAL(f) \\n REPORTED FINAL(r). \\n\\ \\n"The following statement has basically the same semantics as the \\n"previous statement. \\ncl\_abap\_behv\_aux=>get\_current\_context( \\n IMPORTING privileged = FINAL(priv) ). \\n\\ \\n IF priv = abap\_true. \\n MODIFY ENTITY PRIVILEGED demo\_managed\_privileged\_t \\n EXECUTE act \\n FROM ... \\n FAILED FINAL(f1) \\n REPORTED FINAL(r1). \\n ELSE. \\n MODIFY ENTITY demo\_managed\_privileged\_t ##NO\_PRIVILEGED \\n EXECUTE act \\n FROM ... \\n FAILED FINAL(f2) \\n REPORTED FINAL(r2). \\n ENDIF. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommon\_eml\_elements.html