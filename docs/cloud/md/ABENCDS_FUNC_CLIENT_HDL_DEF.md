---
title: "ABENCDS_FUNC_CLIENT_HDL_DEF"
description: |
  ABENCDS_FUNC_CLIENT_HDL_DEF - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_FUNC_CLIENT_HDL_DEF.htm"
abapFile: "ABENCDS_FUNC_CLIENT_HDL_DEF.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENCDS", "FUNC", "CLIENT", "HDL", "DEF"]
---

The [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ `[ClientHandling.type](ABENCDS_613831553_ANNO.html)` is used to define the [client dependency](ABENCLIENT_DEPENDENCY_GLOSRY.html) for a CDS table function.

Client dependency is declared by default. The value `#INHERITED` is not permitted for table functions.

The additional annotation `[ClientHandling.algorithm](ABENCDS_1114072352_ANNO.html)` specifies how implicit client handling is performed:

The value `#AUTOMATED` cannot be specified for CDS table functions. If the annotation `ClientHandling.algorithm` is not specified, the value `#NONE` is used implicitly.

The following subtopics explain the effect of the different combinations of the annotations for client handling:

Client-dependent CDS table functions are declared with the annotation `ClientHandling.type: #CLIENT_DEPENDENT`. In that case:

If the annotation `[ClientHandling.algorithm](ABENCDS_1114072352_ANNO.html)` is not specified or used with the value `#NONE`, the CDS table function is not inherently [client-safe](ABENCLIENT_SAFE_GLOSRY.html) but can access data of multiple clients. Client handling is done as follows:

Refer to Client-Dependent CDS Table Functions (not Client-safe).

If the annotation `[ClientHandling.algorithm](ABENCDS_1114072352_ANNO.html)` is specified with the value `#SESSION_VARIABLE`, the implementing method of the AMDP class is handled as follows:

Since an AMDP method with the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) is client-safe but not an AMDP method with the AMDP option [`CDS SESSION CLIENT clnt`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html), only client-dependent table functions without input parameter of the dictionary type `CLNT` can be client-safe.

Refer to [Client-Dependent CDS Table Function (Client-safe)](ABENCDS_FUNC_CLIENT_DEP_CS_ABEXA.html).

Client-independent CDS table functions are declared with the annotation `ClientHandling.type: #CLIENT_INDPENDENT`. The annotation `ClientHandling.algorithm` can be specified with the value `#NONE` only.

Client-independent CDS table functions can be [client-safe](ABENCLIENT_SAFE_GLOSRY.html) or not.

As a rule, the implementing AMDP method should be handled as defined with the AMDP option [`CLIENT INDEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) and its [`USING`](ABAPMETHOD_BY_DB_PROC.html) list should contain only client-independent objects, otherwise a syntax warning occurs. If this rule is followed, the CDS table-function is client-safe.

See the executable example Client-Independent CDS Table Function (Client-safe) for a client-safe table function.

-   The value `#CLIENT_DEPENDENT` declares a table function as client-dependent.
-   The value `#CLIENT_INDEPENDENT` declares a table function as client-independent.

-   Together with the value `#CLIENT_DEPENDENT` of annotation `ClientHandling.type`, the values `#NONE` and `#SESSION_VARIABLE` can be specified.
-   Together with the value `#CLIENT_INDEPENDENT` of annotation `ClientHandling.type`, only the value `#NONE` can be specified.

-   CDS table functions for application data should usually be client-dependent.

-   The [element list](ABENCDS_F1_RETURN_LIST.html) of a client-dependent CDS table function must have an explicit client field with the built-in dictionary type `CLNT` as its first element. The client field is a column of the tabular return value of the associated AMDP function implementation and is not a component of the structured data type represented by the CDS entity.
-   If the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` is not used, the table function can have an input parameter of the dictionary type `CLNT`, which must be annotated with the annotation `[Environment.systemField](ABENCDS_1937921420_ANNO.html)` and the enumerated value `#CLIENT`.
-   If the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` is used, the table function cannot have an input parameter of the dictionary type `CLNT`.

-   When a client-dependent CDS table function is accessed using [`SELECT`](ABAPSELECT.html) only those rows are selected implicitly from the result set of the function that contain the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) in the client field.
-   The platform-dependent SQL in the associated [AMDP method](ABENAMDP_METHOD_GLOSRY.html) implementation must ensure that all required data is made available. Particularly in the `ON` conditions of joins, client columns must be used correctly.
-   For performance and client safety, it is best to restrict the result set of the function to the required client at the implementation stage. This usually involves passing the client ID in question to an input parameter of the function. Here, it is advisable to use an input parameter of the dictionary type `CLNT`, which is annotated with the annotation `[Environment.systemField](ABENCDS_1937921420_ANNO.html)` and the enumerated value `#CLIENT`. In this case, [`SELECT`](ABAPSELECT.html) passes the correct client ID implicitly.
-   Note that if the ABAP-specific session variables\\ `CLIENT` and `CDS_CLIENT` are accessed in the implementation of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html), the addition `USING CLIENT` of the ABAP SQL statement [`SELECT`](ABAPSELECT.html) only acts on the session variable `CDS_CLIENT`. If the AMDP function is used in an AMDP method called from ABAP, there is no equivalent for `USING CLIENT`.

-   If the table function has an input parameter of the dictionary type `CLNT` annotated with the annotation `[Environment.systemField](ABENCDS_1937921420_ANNO.html)` and the enumerated value `#CLIENT`, the implementing method of the AMDP class is handled as with the AMDP option [`CDS SESSION CLIENT clnt`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) where `clnt` is the name of the input parameter.
-   If the table function has no input parameter of the dictionary type `CLNT`, the implementing method of the AMDP class is handled as with the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html). In this case the CDS table function is [client-safe](ABENCLIENT_SAFE_GLOSRY.html) and can be annotated with `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)`.

-   The [element list](ABENCDS_F1_RETURN_LIST.html) of a client-independent CDS table function does not need to have an explicit client field with the built-in dictionary type `CLNT`. If the first element has the type `CLNT`, it does not function as a client field. Instead, it is a column of the tabular return value of the associated AMDP function implementation and also a regular component of the structured data type represented by the CDS entity.
-   When a client-independent CDS table function is accessed using [`SELECT`](ABAPSELECT.html), an element of the type `CLNT` does not have a special meaning and is handled like any other element.
-   A parameter of a client-independent CDS table function might have the dictionary type `CLNT`, but The annotation [`@Environment.systemField: #CLIENT`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) cannot be used in the parameter list.

-   Client safety can be enforced with the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)`. Then, the implementing AMDP method must be client-safe and no cross-client access is possible.
-   If the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` is not used, the client safety of the implementing AMDP method is not strictly checked and cross-client access is possible.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_functions.html abencds\_func\_client\_handling.html