---
title: "ABAPPERFORM_SHORTREF"
description: |
  ABAPPERFORM_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPERFORM_SHORTREF.htm"
abapFile: "ABAPPERFORM_SHORTREF.html"
keywords: ["if", "internal-table", "ABAPPERFORM", "SHORTREF"]
---

[Reference](ABAPPERFORM.html)

`PERFORM \{\ \{\ \{ subr              |\ \{subr|(sname) IN PROGRAM [prog|(pname)]\ [IF FOUND]\}\              |\ \{n OF subr1 subr2 ...\}\              |\ \{subr(prog) [IF FOUND]\}\ \}\              [TABLES itab1 itab2 ...]\              [USING a1 a2 ...]\              [CHANGING a1 a2 ...]\ \}\          |\ \{ ON \{\ \{COMMIT [LEVEL idx]\}\                 | ROLLBACK \}\ \}\ \}.`

Calls a subroutine.

**Specifies the subroutine:**

**Specifies the parameters:**

**Specifies the execution:**

-   [`subr`](ABAPPERFORM_FORM.html) - Subroutine `subr` of the same program.
-   [`subr|(sname) IN PROGRAM [prog|(pname)]`](ABAPPERFORM_FORM.html) - Specifies a subroutine statically or dynamically in any program.
-   [`n OF subr1 subr2 ...`](ABAPPERFORM_FORM.html) - Subroutine `n` from a list of subroutines.
-   [`subr(prog)`](ABAPPERFORM_OBSOLETE.html) - **Obsolete:** Specifies a subroutine statically in another program `prog`.
-   [`IF FOUND`](ABAPPERFORM_FORM.html)\\
    Suppresses an exception if the subroutine is not found.
    

-   [`TABLES itab1 itab2 ...`](ABAPPERFORM_PARAMETERS.html)\\
    Assigns internal tables `itab1`, `itab2`, ...to the table parameters of the same position.
-   [`USING a1 a2 ...`](ABAPPERFORM_PARAMETERS.html)\\
    Assigns actual parameters `a1`, `a2`, ... to the formal parameters of the same position.
-   [`CHANGING a1 a2 ...`](ABAPPERFORM_PARAMETERS.html)\\
    Assigns actual parameters `a1`, `a2`, ... to the formal parameters of the same position.
    

-   [`ON COMMIT [LEVEL idx]`](ABAPPERFORM_ON_COMMIT.html)\\
    Registers the subroutine for execution with `COMMIT WORK`, where the execution order can be controlled using `LEVEL`.
-   [`ON ROLLBACK`](ABAPPERFORM_ON_COMMIT.html)\\
    Registers the subroutine for execution in `ROLLBACK WORK`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html