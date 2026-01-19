---
title: "ABENUSER_DEPENDENT_SCRTY"
description: |
  ABENUSER_DEPENDENT_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSER_DEPENDENT_SCRTY.htm"
abapFile: "ABENUSER_DEPENDENT_SCRTY.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENUSER", "DEPENDENT", "SCRTY"]
---

Using user names in ABAP programs to control program behavior can be a security risk. In the worst case, a back door can be created and used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, there can also be code sections used for test purposes during development and then be forgotten. Generally speaking, user-dependent source code must be completely avoided and removed. In cases where user-dependent source code is absolutely necessary, a special exemption must be granted for the program so that it can pass the appropriate security tests.

In ABAP, user-dependent program flows can occur in the following instances:

`sy-uname` is usually redundant when specified explicitly after the addition `USER` and carries the risk of the content being manipulated in advance, for example in the ABAP Debugger.

User names passed to the program from the outside should never be used. If this does become necessary, however, the names must be checked carefully.

The following program section demonstrates a back door where an authorization check for a user is ignored intentionally. The program must be repaired by removing the `IF` control block with the `sy-uname` query.

-   The [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-uname` is queried in logical expressions. This is a security risk and should never occur (with the exception of a few predefined user names).
-   A user name is specified using the addition `USER` of the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html). This addition can be misused to bypass an authorization check by specifying a user with extensive authorizations. The same applies to function modules such as `AUTHORITY_CHECK` or `SU_RAUTH_CHECK_FOR_USER`, which do not usually need to be used locally. It may, however, be useful to call these function modules using RFC, to inspect the authorizations of the current user of the local system in remote systems.

-   If the current user name is required in a program, it is safer to determine it using the method `GET_USER_NAME` of the class `CL_ABAP_SYST` than to take it from the system field `sy-uname`, since `sy-uname` is easier to manipulate.
-   Specifying a user name using the addition `USER` of the statement [`SUBMIT VIA JOB`](ABAPSUBMIT_VIA_JOB.html) is not a security risk, since this name is checked for the current user using the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `S_BTCH_NAM`.

AUTHORITY-CHECK OBJECT 'S\_DEVELOP' \\n ID 'DEVCLASS' FIELD '...' \\n ID 'OBJTYPE' DUMMY \\n ID 'OBJNAME' DUMMY \\n ID 'P\_GROUP' DUMMY \\n ID 'ACTVT' FIELD '02'. \\nIF sy-subrc <> 0. \\n IF sy-uname <> '...'. \\n RETURN. \\n ENDIF. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_security.html abenother\_programming\_scrty.html