---
title: "ABENABAP_SQL_STRICT_MODES"
description: |
  ABENABAP_SQL_STRICT_MODES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICT_MODES.htm"
abapFile: "ABENABAP_SQL_STRICT_MODES.html"
keywords: ["select", "do", "if", "ABENABAP", "SQL", "STRICT", "MODES"]
---

In ABAP release 7.40, SP02, a new SQL parser for ABAP SQL was introduced that is used for both statically specified ABAP SQL statements and for dynamic tokens, and which applies some rules more strictly than the previous parser. In ABAP release 7.40, SP02, the new parser was used only for the statement [`SELECT`](ABAPSELECT.html) and, from ABAP release 7.40, SP05, for all ABAP SQL statements. The corresponding syntax revisions can be found under the release-dependent changes for [7.40 SP02](ABENNEWS-740-ABAP_SQL.html) and [7.40 SP05](ABENNEWS-740_SP05-ABAP_SQL.html).

Alongside these general revisions, which apply to all ABAP SQL statements, ABAP release 7.40, SP05 also introduced syntax check modes known as strict modes, which check ABAP SQL statements even more strictly if they use features introduced in the corresponding release.

-   [ABAP SQL - Strict Mode in ABAP Release 7.40, SP05](ABENABAP_SQL_STRICTMODE_740_SP05.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.40, SP08](ABENABAP_SQL_STRICTMODE_740_SP08.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.50](ABENABAP_SQL_STRICTMODE_750.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.51](ABENABAP_SQL_STRICTMODE_751.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.52](ABENABAP_SQL_STRICTMODE_752.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.53](ABENABAP_SQL_STRICTMODE_753.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.54](ABENABAP_SQL_STRICTMODE_754.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.55](ABENABAP_SQL_STRICTMODE_755.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.56](ABENABAP_SQL_STRICTMODE_756.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.57](ABENABAP_SQL_STRICTMODE_757.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.58](ABENABAP_SQL_STRICTMODE_758.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.60](ABENABAP_SQL_STRICTMODE_760.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.61](ABENABAP_SQL_STRICTMODE_761.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.62](ABENABAP_SQL_STRICTMODE_762.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.63](ABENABAP_SQL_STRICTMODE_763.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.64](ABENABAP_SQL_STRICTMODE_764.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.65](ABENABAP_SQL_STRICTMODE_765.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.66](ABENABAP_SQL_STRICTMODE_766.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.67](ABENABAP_SQL_STRICTMODE_767.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.68](ABENABAP_SQL_STRICTMODE_768.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.69](ABENABAP_SQL_STRICTMODE_769.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.70](ABENABAP_SQL_STRICTMODE_770.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.71](ABENABAP_SQL_STRICTMODE_771.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.72](ABENABAP_SQL_STRICTMODE_772.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.73](ABENABAP_SQL_STRICTMODE_773.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.74](ABENABAP_SQL_STRICTMODE_774.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.75](ABENABAP_SQL_STRICTMODE_775.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.76](ABENABAP_SQL_STRICTMODE_776.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.77](ABENABAP_SQL_STRICTMODE_777.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.78](ABENABAP_SQL_STRICTMODE_778.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.79](ABENABAP_SQL_STRICTMODE_779.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.80](ABENABAP_SQL_STRICTMODE_780.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.81](ABENABAP_SQL_STRICTMODE_781.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.82](ABENABAP_SQL_STRICTMODE_782.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.83](ABENABAP_SQL_STRICTMODE_783.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.84](ABENABAP_SQL_STRICTMODE_784.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.85](ABENABAP_SQL_STRICTMODE_785.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.86](ABENABAP_SQL_STRICTMODE_786.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.87](ABENABAP_SQL_STRICTMODE_787.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.88](ABENABAP_SQL_STRICTMODE_788.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.89](ABENABAP_SQL_STRICTMODE_789.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.90](ABENABAP_SQL_STRICTMODE_790.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.91](ABENABAP_SQL_STRICTMODE_791.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.92](ABENABAP_SQL_STRICTMODE_792.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.93](ABENABAP_SQL_STRICTMODE_793.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.94](ABENABAP_SQL_STRICTMODE_794.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.95](ABENABAP_SQL_STRICTMODE_795.html)
-   [ABAP SQL - Strict Mode in ABAP Release 7.96](ABENABAP_SQL_STRICTMODE_796.html)
-   [ABAP SQL - Strict Mode in ABAP Release 8.16](ABENABAP_SQL_STRICTMODE_816.html)
-   [ABAP SQL - Strict Mode in ABAP Release 9.12](ABENABAP_SQL_STRICTMODE_912.html)
-   [ABAP SQL - Strict Mode in ABAP Release 9.13](ABENABAP_SQL_STRICTMODE_913.html)
-   [ABAP SQL - Strict Mode in ABAP Release 9.14](ABENABAP_SQL_STRICTMODE_914.html)
-   [ABAP SQL - Strict Mode in ABAP Release 9.15](ABENABAP_SQL_STRICTMODE_915.html)
-   [ABAP SQL - Strict Mode in ABAP Release 9.16](ABENABAP_SQL_STRICTMODE_916.html)

-   The release-dependent strict modes are generally downward compatible, since they are applied only if an feature is used that was not present in previous releases.
-   The strict modes in later releases contain the rules from all preceding releases. More specifically, all strict modes demand, from ABAP release 7.40, SP05, programs in which the program property [*fixed point arithmetic*](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) is activated.
-   The following reasons apply to release-dependent strict modes of the syntax check:

-   First, rules such as the use of comma-separated lists or the introduction of host variables with `@` are a prerequisite for using new syntax constructs that cannot be parsed otherwise.
-   On the other hand, developers should be encouraged to always use the desired syntax. For these reasons, an ABAP SQL statement that is enhanced with a new feature must adhere to the corresponding strict rule, even if the new feature used would not depend on it.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html