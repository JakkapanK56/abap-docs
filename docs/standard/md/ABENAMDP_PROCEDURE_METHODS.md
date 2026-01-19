---
title: "ABENAMDP_PROCEDURE_METHODS"
description: |
  ABENAMDP_PROCEDURE_METHODS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_PROCEDURE_METHODS.htm"
abapFile: "ABENAMDP_PROCEDURE_METHODS.html"
keywords: ["do", "if", "catch", "method", "class", "data", "types", "ABENAMDP", "PROCEDURE", "METHODS"]
---

An AMDP procedure implementation is an AMDP method for implementing a [database procedure](ABENDATABASE_PROCEDURE_GLOSRY.html). It is declared in an [AMDP class](ABENAMDP_CLASSES.html) like a regular [static method](ABENSTATIC_METHOD_GLOSRY.html) or [instance method](ABENINSTANCE_METHOD_GLOSRY.html) in any [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html). An AMDP procedure implementation cannot be identified as an AMDP method in the declaration part of the class.

An AMDP procedure implementation is indicated as an AMDP method in the implementation part of the class using the addition [`BY DATABASE PROCEDURE`](ABAPMETHOD_BY_DB_PROC.html) of the statement `METHOD`. At the same time, the database system where the method is to be used and the programming language of the database system used to implement the method are also defined. The database objects of the current database schema accessed in the AMDP method must be declared using an addition [`USING`](ABAPMETHOD_BY_DB_PROC.html). If possible, the syntax check is performed on the basis of this information. When database tables defined in the ABAP Dictionary are accessed, and the access is known statically, the AMDP framework ensures that the order of the fields defined in the dictionary is respected, which can differ from the order on the database.

Using the statement [`CLASS-METHODS meth FOR SQL SERVICE`](ABAPCLASS-METHODS_FOR_SQL_SERVICE.html), an AMDP procedure implementation can be exposed to external SQL access using an [SQL service](ABENABAP_SQL_SERVICES_GLOSRY.html).

The following restrictions apply with respect to the [parameter interface](ABENPARAMETER_INTERFACE_GLOSRY.html) of an AMDP procedure implementation:

AMDP methods can be called with database hints, that is, an additional importing parameter with the name `call_hints` can be defined. The parameter must be passed by reference and must have the type `TT_HINT` of interface `CL_AMDP_CALL_HINT`. It can be optional. If used, ABAP callers can pass a list of hints and hint parameters to the AMDP method. Currently, only the hint parameters `route_to` and `workload_class` are supported. Hint parameters must consist of the characters a - z, A - Z, 0 - 9, and \_. All other names must be enclosed in pairs with " or '. If the hint parameters are not correct, the method terminates with the catchable exception `AMDP_CALL_HINT_ILL_PARAM`. Note that the parameter can be specified for database procedures, scalar functions, and [BAdIs](ABENBADI_GLOSRY.html) but not for [table functions](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) and [graph workspaces](ABENGRAPH_WORKSPACE_GLOSRY.html).

The following restrictions apply to method implementation:

Further restrictions may apply depending on the programming language of the database system and these are listed in the corresponding sections:

-   The typing of the parameters must not be [generic](ABENGENERIC_TYPING_GLOSRY.html).

-   Only [elementary data types](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) and [table types](ABENTABLE_TYPE_GLOSRY.html) with a structured row type can be used.
-   The row type of a tabular type can only contain elementary data types as components.

-   A parameter must not have an [enumerated type](ABENENUM_TYPE_GLOSRY.html) and must not have a component with an enumerated type.
-   A parameter must not be typed with a data type that references one of the obsolete built-in DDIC data types [`DF16_SCL`](ABENDDIC_BUILTIN_TYPES.html) or [`DF34_SCL`](ABENDDIC_BUILTIN_TYPES.html).
-   The parameters must be declared for [pass by value](ABENPASS_BY_VALUE_GLOSRY.html) using [`VALUE`](ABAPMETHODS_PARAMETERS.html). [Pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html) is not allowed.
-   [Return values](ABENRETURN_VALUE_GLOSRY.html) must not be declared using [`RETURNING`](ABAPMETHODS_FUNCTIONAL.html).
-   Only [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) can be flagged as optional parameters.

-   Each elementary optional input parameter must have a replacement parameter declared using [`DEFAULT`](ABAPMETHODS_PARAMETERS.html). Only literals or constants can be specified as replacement parameters.
-   Unlike in [regular methods](ABAPMETHODS_PARAMETERS.html), a literal specified as a replacement parameter must be convertible to the data type of the input parameter. If not, a syntax error occurs.
-   Input parameters of the types `string`, `xstring`, `decfloat16`, and `decfloat34` cannot have replacement parameters and hence cannot be optional.
-   An optional tabular input parameter cannot have any replacement parameters and must be made optional instead using [`OPTIONAL`](ABAPMETHODS_PARAMETERS.html).

-   Parameter names:

-   Parameter names cannot start with the characters `%_`.
-   The parameter name `connection` can only be used for an input parameter of type `DBCON_NAME`, to which the name of a database connection can be passed.
-   The parameter name `client` is reserved for future enhancements.
-   The parameter name `endmethod` is not allowed.

-   [`RAISING`](ABAPMETHODS_GENERAL.html) can be used to specify the exceptions specified under [AMDP -Exception Classes](ABENAMDP_EXCEPTIONS.html) to handle these classes for a call. Other exceptions cannot be handled. No non-class-based exceptions can be created using the addition [`EXCEPTIONS`](ABAPMETHODS_GENERAL.html).

-   An AMDP method must not be empty.
-   [DDL](ABENDDL_GLOSRY.html) statements are not allowed for creating, changing or deleting database objects.
-   No statements are allowed that are only possible in database tables and not in views, such as `TRUNCATE TABLE` or `LOCK TABLE`.
-   Local temporary database objects cannot be accessed.
-   Executing transactional statements is not allowed. In particular, no [database commits](ABENDB_COMMIT.html) and [database rollbacks](ABENDB_ROLLBACK.html) using `COMMIT` and `ROLLBACK` statements are allowed. This also applies to called procedures. [LUWs](ABENLUW_GLOSRY.html) should always be handled in the ABAP program to ensure data consistency between procedures.
-   Writes cannot be performed on database tables where [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is switched on, since SQLScript accesses are ignored by buffer synchronizations.
-   AMDP methods do not have any [implicit enhancement options](ABENIMPLICIT_ENH_POINTS.html).

-   [SQLScript for the SAP HANA Database](ABENAMDP_HDB_SQLSCRIPT.html)
-   [L for the SAP HANA Database](ABENAMDP_HDB_L_INTERNAL.html) (used internally at SAP only)

-   It is strongly recommended that only the character set 7-bit ASCII is used when implementing an AMDP method.
-   When passed to an actual parameter, a [null value](ABENNULL_VALUE_GLOSRY.html) is passed to its type-dependent initial value.
-   The use of dynamic programming techniques is strongly discouraged, even if it is allowed by the programming language of the database system.

-   The existence of other database objects cannot be checked or guaranteed when they are accessed dynamically. This is particularly relevant when other AMDP methods are called.
-   When database tables in the ABAP Dictionary are accessed dynamically, the AMDP framework cannot respect the order of the fields defined in the ABAP Dictionary and the order of fields on the database, which might be different, is used instead. This can produce the incorrect values when making assignments to ABAP data objects declared with respect to the ABAP Dictionary.
-   In dynamic accesses, it is not possible to prevent writes from being performed on database tables with activated table buffering, which can cause inconsistencies in buffer synchronizations.
-   Dynamic accesses can lead to [SQL injections](ABENSQL_INJ_AMDP_SCRTY.html) related to input from outside.

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html