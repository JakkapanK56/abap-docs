---
title: "ABAPTYPES_LOB_HANDLE"
description: |
  ABAPTYPES_LOB_HANDLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_LOB_HANDLE.htm"
abapFile: "ABAPTYPES_LOB_HANDLE.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABAPTYPES", "LOB", "HANDLE"]
---

[Short Reference](ABAPTYPES_SHORTREF.html)

``TYPES dtype TYPE dbtab|view                   [`lob_handle_type`](ABAPTYPES_LOB_HANDLE_TYPE.html) FOR [`lob_handle_columns`](ABAPTYPES_LOB_HANDLE_COLUMNS.html)\                  [[`lob_handle_type`](ABAPTYPES_LOB_HANDLE_TYPE.html) FOR [`lob_handle_columns`](ABAPTYPES_LOB_HANDLE_COLUMNS.html)\                   ...                                   ].``

Derivation of a [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) as a work area for working with [streaming and locators in ABAP SQL](ABENSTREAMS_LOCATORS.html). `dbtab` expects a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) defined in the ABAP Dictionary or a [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html) defined for `view` in ABAP Dictionary.

The column specifications [`lob_handle_columns`](ABAPTYPES_LOB_HANDLE_COLUMNS.html) are used to determine [LOBs](ABENLOB_GLOSRY.html) from `dbtab`. The statement creates a deep structure that is constructed for all columns that are not among the specified columns exactly as it is constructed for a regular [`TYPE` reference](ABAPTYPES_REFERRING.html) to `dbtab`. For the LOBs included in the specified columns, a component with the same name is created as the [LOB handle component](ABENLOB_HANDLE_COMPONENT_GLOSRY.html). The [static type](ABENSTATIC_TYPE_GLOSRY.html) of the LOB handle components is a class or an interface that is determined by the type specification [`lob_handle_type`](ABAPTYPES_LOB_HANDLE_TYPE.html), to which the respective specified column is assigned.

The combination options of the additions specified under [`lob_handle_columns`](ABAPTYPES_LOB_HANDLE_COLUMNS.html) and [`lob_handle_type`](ABAPTYPES_LOB_HANDLE_TYPE.html) are determined by the following rules:

Apart from the rules specified under [`lob_handle_columns`](ABAPTYPES_LOB_HANDLE_COLUMNS.html) and [`lob_handle_type`](ABAPTYPES_LOB_HANDLE_TYPE.html), the following general restrictions also apply:

Declaration of types for work areas with LOB handle components for a writer stream and a reader stream for the column `PICTURE` and a locator for all LOBs in the DDIC database table `DEMO_BLOB_TABLE`.

[Deriving LOB Handle Structures](ABENTYPES_LOB_HANDLE_ABEXA.html)

-   A LOB handle structure can be derived for either [reading](ABENABAP_SQL_READING.html) or [writing](ABENABAP_SQL_WRITING.html) ABAP SQL statements only.

-   A structure for reads can only contain the type specifications [`READER`](ABAPTYPES_LOB_HANDLE_TYPE.html), [`LOCATOR`](ABAPTYPES_LOB_HANDLE_TYPE.html), and [`LOB HANDLE`](ABAPTYPES_LOB_HANDLE_TYPE.html).
-   A structure for writes can only contain the type specifications [`WRITER`](ABAPTYPES_LOB_HANDLE_TYPE.html) and [`LOCATOR`](ABAPTYPES_LOB_HANDLE_TYPE.html).

-   The definition of the LOB handle components must be mutually exclusive, which means that columns must not be assigned to inappropriate types or a column cannot be assigned to multiple types.
-   The definition of LOB handle components must not contain redundancies. A set of LOB handle components must be produced for each specification of:
-   \\ `... [lob_handle_type](ABAPTYPES_LOB_HANDLE_TYPE.html) FOR [lob_handle_columns](ABAPTYPES_LOB_HANDLE_COLUMNS.html) ...`
-   This set of LOB handle components must not overlap with another set of LOB handle components of a different specification.
-   The definition of the LOB handle components must be specified with as few specifications as possible. If the same set of LOB handle components can be created by one rather than multiple specifications, the more comprehensive option must be used.

-   At least one column must be specified.
-   The [type specifications](ABAPTYPES_LOB_HANDLE_TYPE.html) for the first three specified columns for LOB handle components for reads or the first two columns for LOB handle components for writes must be different
-   In each case, only one [column specification](ABAPTYPES_LOB_HANDLE_COLUMNS.html)\\ `ALL ... COLUMNS` can be made, in which `BLOB` or `CLOB` are specified.
-   The [column](ABAPTYPES_LOB_HANDLE_COLUMNS.html) specification `ALL BLOB|CLOB COLUMNS` includes all BLOBs or CLOBs. When specified, a single BLOB or CLOB cannot be specified in a [column specification](ABAPTYPES_LOB_HANDLE_COLUMNS.html)\\ `COLUMNS ...` for the same [static type](ABAPTYPES_LOB_HANDLE_TYPE.html).
-   The [column specification](ABAPTYPES_LOB_HANDLE_COLUMNS.html)\\ `ALL OTHER COLUMNS` includes all columns that are not specified individually. `ALL OTHER BLOB COLUMNS` or `ALL OTHER CLOB COLUMNS` cannot be specified at the same time.
-   The [column specification](ABAPTYPES_LOB_HANDLE_COLUMNS.html)\\ `ALL COLUMNS` includes all LOBs and can therefore only be specified on its own.

-   LOB handle structures can also be defined using appropriate typing of components between [`BEGIN OF` and `END OF`](ABAPTYPES_STRUC.html).
-   If `dbtab` does not contain any LOBs that match the specified columns, no LOB handle components are created, and the statement creates a regular work area.
-   If LOBs are added to `dbtab` that match the [specified columns](ABAPTYPES_LOB_HANDLE_COLUMNS.html)\\ `ALL [OTHER] ...`, LOB handle components are also created for these.
-   LOB handle structures can also be derived in the ABAP Dictionary. Transaction `SE11` offers such a function for DDIC database tables or views containing LOBs.

TYPES: \\n wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture, \\n wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture, \\n wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html