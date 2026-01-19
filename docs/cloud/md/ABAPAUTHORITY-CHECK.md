---
title: "ABAPAUTHORITY-CHECK"
description: |
  ABAPAUTHORITY-CHECK - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPAUTHORITY-CHECK.htm"
abapFile: "ABAPAUTHORITY-CHECK.html"
keywords: ["do", "if", "case", "data", "ABAPAUTHORITY", "CHECK"]
---

`AUTHORITY-CHECK OBJECT auth_obj [FOR USER user]`\\ 
                        `ID id1 \{FIELD val1\}|DUMMY`\\ 
                       `[ID id2 \{FIELD val2\}|DUMMY]`\\ 
                        `...`\\ 
                       `[ID id10 \{FIELD val10\}|DUMMY].`

[`... FOR USER user`](#ABAP_ONE_ADD@1@)

This statement checks whether an [authorization](ABENAUTHORIZATION_GLOSRY.html) is entered in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html) of the current user or of the user specified in `user` for the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html) specified in `auth_obj`, and whether this authorization is sufficient for the request specified in the statement. If the addition `FOR USER` is not specified, the authorization of the current user is checked.

`auth_obj` expects a [flat](ABENFLAT_GLOSRY.html) character-like field containing the name of an authorization object in uppercase letters. The following can be specified for `auth_obj`:

`id1 ... id10` must be used to specify at least one and a maximum of 10 different authorization fields must be specified for the authorization object in question. `id1 ... id10` expects flat character-like fields containing the names of the authorization fields in uppercase letters. If an authorization field is specified that does not appear in the authorization object, checks are not possible and `sy-subrc` is set to 4. Each specified authorization field expects either a value to be checked by `FIELD` in a flat character-like field `val1 ... val10` or the addition `DUMMY`. A value to be checked can have a maximum of 40 characters and no more than 40 places from `val1 ... val10` are evaluated.

The authorization check is performed if the [check indicator](ABENCHECK_INDICATOR_GLOSRY.html) for the specified authorization object for the current context is set to *check* with any *proposal status*. If the check indicator is set to *no check*, no authorization check is performed and `sy-subrc` is set to 0, as with a successful check.

The authorization check is successful if one or more authorizations are created for the authorization object in the user master record and if, for at least one of the authorizations, each of the value sets defined there for the authorization fields specified using `ID` includes the value `val1 ... val10` to be checked. Authorization fields that are not listed in the statement or for which `DUMMY` is specified are not checked. If the check is successful, `sy-subrc` is set to 0. Otherwise, it is set to a value not equal to 0 (see below).

Checks whether the current user has the authorization to display the airline entered as an input. The authorization object used here is `S_CARRID` and includes the authorization fields `CARRID` for identifying an airline and `ACTVT` for the activity. The code *03* represents the activity *Display*, which is one of the activities assigned to the authorization object `S_CARRID`.

-   Literal or constants
-   If the data object `auth_obj` is specified as a character literal or as a constant, it can be evaluated statically, and the specified authorization object is recognized as the used object.
-   Variable
-   This syntax is not available in the current ABAP language version.

-   When checking the authorization of the current user without the addition `FOR USER`, the content of the system field `sy-uname` is not evaluated, but the actual user name is used instead.
-   The most important contexts for which [check indicators](ABENCHECK_INDICATOR_GLOSRY.html) can be set are transactions. The execution of a statement `AUTHORITY-CHECK` can have different results depending on how the current program flow was started. In general, a check indicator should always been set to *check*.
-   An authorization field of the specified authorization object should not be specified more than once. If an authorization field is specified multiple times, the check takes place as if it were dealing with different fields. This means all specified values must be contained in one authorization.
-   When `DUMMY` is specified for all authorization fields, the statement `AUTHORITY-CHECK` returns either 0 or 12 in `sy-subrc`:

-   It returns 0 if at least one authorization exists for the authorization object in the user master record. This is independent from the value sets defined in the authorizations.
-   It returns 12 if no authorization exists for the authorization object in the user master record.

-   In addition to explicit authorization checks using `AUTHORITY-CHECK`, there are also implicit authorization checks, for example using [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) when accessing [CDS entities](ABENCDS_ENTITY_GLOSRY.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA carr TYPE spfli-carrid. \\ncl\_demo\_input=>request( CHANGING field = carr ). \\n\\ \\nAUTHORITY-CHECK OBJECT 'S\_CARRID' \\n ID 'CARRID' FIELD carr \\n ID 'ACTVT' FIELD '03'. \\n\\ \\nIF sy-subrc <> 0. \\n out->write( 'No authorization' ). \\n RETURN. \\nENDIF. \\n\\ \\nout->display( ). `**sy-subrc**` **Meaning** 0 Authorization check successful or no check was performed. An authorization for the authorization object was found in the user master record. Its value sets include the specified values. 4 Authorization check not successful. One or more authorizations were found for the authorization object in the user master record and they include the value sets, but not the values specified, or incorrect authorization fields or too many fields were specified. 12 No authorization was found for the authorization object in the user master record. 24 This return code is no longer set. 40 An invalid user name was specified in `user`. abenabap.html abenabap\_reference.html abenbc\_authority\_check.html