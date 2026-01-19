---
title: "ABENCDS_FUNC_CLIENT_HDL_DEF"
description: |
  ABENCDS_FUNC_CLIENT_HDL_DEF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_FUNC_CLIENT_HDL_DEF.htm"
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

The following client-dependent CDS table function does not have the annotation `ClientHandling.algorithm: #SESSION_VARIABLE` and is not [client-safe](ABENCLIENT_SAFE_GLOSRY.html). It reads the [ABAP-specific session variables](ABENHANA_SESSION_VARIABLES.html)\\ `CLIENT` and `CDS_CLIENT`. The first element `mandt` of the element list is the client field. The other two elements return the read values. An input parameter `clnt` with the built-in dictionary type `CLNT` transfers the client ID and, as prescribed, is given the annotation `@Environment.systemField:#CLIENT`.

The AMDP function implementation is as follows:

The first line of a local table `client_tab` with the type of the tabular return value is supplied with the session variables. The client field is set to the value of the input parameter `clnt` and the table is returned. The class `CL_DEMO_AMDP_CLIENT_VARIS` accesses the CDS table function using `SELECT` and the addition `USING CLIENT`, and attempts to use a client ID other than that of the current client in the table `T000`. The client ID specified with `USING CLIENT` is passed implicitly to the input parameter `clnt` and fills the client field of the return value with this ID, so that it is respected by [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). If a client ID other than that of the current client is used, the values of the session variables `CLIENT` and `CDS_CLIENT` are different.

Refer to [Client-Dependent CDS Table Functions (not Client-safe)](ABENCDS_FUNC_CLIENT_DEP_ABEXA.html).

If the annotation `[ClientHandling.algorithm](ABENCDS_1114072352_ANNO.html)` is specified with the value `#SESSION_VARIABLE`, the implementing method of the AMDP class is handled as follows:

Since an AMDP method with the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) is client-safe but not an AMDP method with the AMDP option [`CDS SESSION CLIENT clnt`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html), only client-dependent table functions without input parameter of the dictionary type `CLNT` can be client-safe.

The following ABAP code snippet accesses two CDS table functions:

Both accesses with ABAP SQL yield the same result. In both cases, the session variable `CDS_CLIENT` of the SAP HANA database is set implicitly to the current client. For `DEMO_CDS_TABFUNC_SESS_VAR`, the current client is passed implicitly to the client parameter. For `DEMO_CDS_TABFUNC_SESS_VAR_CS`, the result set is restricted due to the client handling for the [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) that is used as a data source in the implementing AMDP method `GET` of class `CL_DEMO_CDS_TABFUNC_SESS_VR_CS`. Since the class `CL_DEMO_CDS_TABFUNC_SESS_VAR` implementing `DEMO_CDS_TABFUNC_SESS_VAR` is not restricted to CDS view entities, client isolation can be achieved by a client-safe implementation but is not checked.

Refer to [Client-Dependent CDS Table Function (Client-safe)](ABENCDS_FUNC_CLIENT_DEP_CS_ABEXA.html).

Client-independent CDS table functions are declared with the annotation `ClientHandling.type: #CLIENT_INDPENDENT`. The annotation `ClientHandling.algorithm` can be specified with the value `#NONE` only.

Client-independent CDS table functions can be [client-safe](ABENCLIENT_SAFE_GLOSRY.html) or not.

As a rule, the implementing AMDP method should be handled as defined with the AMDP option [`CLIENT INDEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) and its [`USING`](ABAPMETHOD_BY_DB_PROC.html) list should contain only client-independent objects, otherwise a syntax warning occurs. If this rule is followed, the CDS table-function is client-safe.

See the executable example [Client-Independent CDS Table Function (Client-safe)](ABENCDS_FUNC_CLIENT_CLINDPCS_ABEXA.html) for a client-safe table function.

-   The value `#CLIENT_DEPENDENT` declares a table function as client-dependent.
-   The value `#CLIENT_INDEPENDENT` declares a table function as client-independent.

-   Together with the value `#CLIENT_DEPENDENT` of annotation `ClientHandling.type`, the values `#NONE` and `#SESSION_VARIABLE` can be specified.
-   Together with the value `#CLIENT_INDEPENDENT` of annotation `ClientHandling.type`, only the value `#NONE` can be specified.

-   CDS table functions for application data should usually be client-dependent.
-   The annotation [`@ClientHandling.type`](ABENCDS_F1_FUNCTION_ANNOTATIONS.html) with the values `#CLIENT_DEPENDENT` and `#CLIENT_INDEPENDENT` replaces the annotation [`@ClientDependent`](ABENCDS_FUNC_CLIENT_HANDLING_OBS.html) with the values `true` and `false` and should be used instead of this annotation.

-   The [element list](ABENCDS_F1_RETURN_LIST.html) of a client-dependent CDS table function must have an explicit client field with the built-in dictionary type `CLNT` as its first element. The client field is a column of the tabular return value of the associated AMDP function implementation and is not a component of the structured data type represented by the CDS entity.
-   If the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` is not used, the table function can have an input parameter of the dictionary type `CLNT`, which must be annotated with the annotation `[Environment.systemField](ABENCDS_1937921420_ANNO.html)` and the enumerated value `#CLIENT`.
-   If the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` is used, the table function cannot have an input parameter of the dictionary type `CLNT`.

-   When a client-dependent CDS table function is accessed using [`SELECT`](ABAPSELECT.html) without the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html), only those rows are selected implicitly from the result set of the function that contain the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) or the client specified in the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) in the client field.
-   The platform-dependent SQL in the associated [AMDP method](ABENAMDP_METHOD_GLOSRY.html) implementation must ensure that all required data is made available. Particularly in the `ON` conditions of joins, client columns must be used correctly.
-   For performance and client safety, it is best to restrict the result set of the function to the required client at the implementation stage. This usually involves passing the client ID in question to an input parameter of the function. Here, it is advisable to use an input parameter of the dictionary type `CLNT`, which is annotated with the annotation `[Environment.systemField](ABENCDS_1937921420_ANNO.html)` and the enumerated value `#CLIENT`. In this case, [`SELECT`](ABAPSELECT.html) passes the correct client ID implicitly.
-   Note that if the [ABAP-specific session variables](ABENHANA_SESSION_VARIABLES.html)\\ `CLIENT` and `CDS_CLIENT` are accessed in the implementation of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html), the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) of the ABAP SQL statement [`SELECT`](ABAPSELECT.html) only acts on the session variable `CDS_CLIENT`. If the AMDP function is used in an AMDP method called from ABAP, there is no equivalent for `USING CLIENT`.
-   If the table function is accessed with [`SELECT`](ABAPSELECT.html) and the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) is specified, the column is added to the result set and is filled with the associated client ID for each row. Before this column can be used in the `SELECT` statement, a name must be assigned to it after the addition `CLIENT SPECIFIED`. If the name is not defined, no addressing is possible in a clause and no inline declarations can be made using [`@DATA|@FINAL(...)`](ABAPSELECT_INTO_TARGET.html) after [`INTO`](ABAPSELECT_INTO_TARGET.html). The defined name is also used in the case of [`INTO CORRESPONDING`](ABAPINTO_CLAUSE.html). If no name is defined, the client column is not transported.

-   If the table function has an input parameter of the dictionary type `CLNT` annotated with the annotation `[Environment.systemField](ABENCDS_1937921420_ANNO.html)` and the enumerated value `#CLIENT`, the implementing method of the AMDP class is handled as with the AMDP option [`CDS SESSION CLIENT clnt`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) where `clnt` is the name of the input parameter.
-   If the table function has no input parameter of the dictionary type `CLNT`, the implementing method of the AMDP class is handled as with the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html). In this case the CDS table function is [client-safe](ABENCLIENT_SAFE_GLOSRY.html) and can be annotated with `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)`.

-   `DEMO_CDS_TABFUNC_SESS_VAR`

-   `DEMO_CDS_TABFUNC_SESS_VAR_CS`

-   The [element list](ABENCDS_F1_RETURN_LIST.html) of a client-independent CDS table function does not need to have an explicit client field with the built-in dictionary type `CLNT`. If the first element has the type `CLNT`, it does not function as a client field. Instead, it is a column of the tabular return value of the associated AMDP function implementation and also a regular component of the structured data type represented by the CDS entity.
-   When a client-independent CDS table function is accessed using [`SELECT`](ABAPSELECT.html), an element of the type `CLNT` does not have a special meaning and is handled like any other element.
-   A parameter of a client-independent CDS table function might have the dictionary type `CLNT`, but The annotation [`@Environment.systemField: #CLIENT`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) cannot be used in the parameter list.

-   Client safety can be enforced with the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)`. Then, the implementing AMDP method must be client-safe and no cross-client access is possible.
-   If the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` is not used, the client safety of the implementing AMDP method is not strictly checked and cross-client access is possible.

@ClientHandling.type: #CLIENT\_DEPENDENT\\n@AccessControl.authorizationCheck:#NOT\_ALLOWED \\ndefine table function DEMO\_CDS\_GET\_CLIENT\_VARIABLES\\n with parameters\\n @Environment.systemField : #CLIENT\\n clnt : syst\_mandt\\n returns\\n \\{\\n mandt :mandt;\\n client :mandt;\\n cds\_client :mandt;\\n \\}\\n implemented by method\\n CL\_DEMO\_AMDP\_CLIENT\_VARIABLES=>GET; METHOD get BY DATABASE FUNCTION FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY. \\n declare client\_tab table( mandt "$ABAP.type( mandt )", \\n client "$ABAP.type( mandt )", \\n cds\_client "$ABAP.type( mandt )" ); \\n\\ \\n client\_tab.mandt\[1\] := clnt; \\n client\_tab.client\[1\] := session\_context('CLIENT'); \\n client\_tab.cds\_client\[1\] := session\_context('CDS\_CLIENT'); \\n\\ \\n RETURN :client\_tab; \\nENDMETHOD. @AccessControl.authorizationCheck: #NOT\_ALLOWED\\n@ClientHandling.type: #CLIENT\_DEPENDENT\\n@ClientHandling.algorithm: #SESSION\_VARIABLE\\ndefine table function demo\_cds\_tabfunc\_sess\_var\\n with parameters\\n @Environment.systemField: #CLIENT\\n clnt :abap.clnt\\nreturns\\n\\{\\n client :s\_mandt;\\n carrid :s\_carrid;\\n carrname :s\_carrname;\\n\\}\\nimplemented by method\\n cl\_demo\_cds\_tabfunc\_sess\_var=>get; @AccessControl.authorizationCheck: #NOT\_ALLOWED\\n@ClientHandling.type: #CLIENT\_DEPENDENT\\n@ClientHandling.algorithm: #SESSION\_VARIABLE\\n@ClientHandling.clientSafe: true\\ndefine table function DEMO\_CDS\_TABFUNC\_SESS\_VAR\_CS\\nreturns\\n\\{\\n client :s\_mandt;\\n carrid :s\_carrid;\\n carrname :s\_carrname;\\n\\}\\nimplemented by method\\n cl\_demo\_cds\_tabfunc\_sess\_vr\_cs=>get; FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_tabfunc\_sess\_var \\n INTO TABLE @FINAL(result1). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_tabfunc\_sess\_var\_cs \\n INTO TABLE @FINAL(result2). \\n\\ \\nASSERT result1 = result2. \\n\\ \\nout->write( result1 \\n )->write( result2 )->display( ). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_functions.html abencds\_func\_client\_handling.html