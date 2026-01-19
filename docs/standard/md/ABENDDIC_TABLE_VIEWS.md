---
title: "ABENDDIC_TABLE_VIEWS"
description: |
  ABENDDIC_TABLE_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_TABLE_VIEWS.htm"
abapFile: "ABENDDIC_TABLE_VIEWS.html"
keywords: ["select", "insert", "update", "do", "while", "if", "case", "data", "types", "ABENDDIC", "TABLE", "VIEWS"]
---

A DDIC table view is a repository object in ABAP Dictionary defined for existing DDIC database tables and their fields in the form-based ABAP Dictionary [tool](ABENDDIC_TOOLS.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).

The definition of a DDIC table view consists of the following:

The following types of DDIC table views exist, of which only the DDIC database views are defined as [SQL views](ABENSQL_VIEW_GLOSRY.html) on the database:

Like DDIC database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

-   **Basis tables**
-   A list of DDIC database tables that are accessed by the view. Multiple tables are associated using joins.
-   **View fields**
-   A list of table fields of the basis tables that defines the structure of the view. Except in the case of DDIC projection views, a different [data element](ABENDDIC_DATA_ELEMENTS.html) can be assigned to a view field than used for the corresponding table field of the basis table. As a prerequisite, the type of the table field must be defined using a data element with a [domain](ABENDDIC_DOMAINS.html) and the new data element must reference the same domain. This makes it possible to adjust the semantic properties of the view field.
-   **Key**
-   A key of the view that consists of key fields. The key is derived from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are automatically marked as key fields. All rows determined by the view must be unique with respect to the key. If no key can be identified, all fields of the view are key fields, which negatively impacts performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a DDIC database table.
-   **Join conditions**
-   Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the result is the cross product of both basis tables. Each row in a table is combined with each row of the other table. A join condition selects a subset of matching rows from the cross product.
-   **Selection conditions**
-   Restrict the read rows to specific values of view fields or other fields.

-   The possible comparison operators are `=`, `<>`, `>=`, `>`, `<=`, `<`, `LIKE`, and `NOT LIKE`.
-   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](ABENSYSTEM_FIELD_GLOSRY.html) can be specified for DDIC maintenance views and DDIC help views using `SYST-...` or `SY-...`.
-   Multiple comparisons can be joined using `AND` and multiple comparisons for the same field can be joined using `OR`. Here, `OR` is stronger than `AND`.

-   [DDIC database views](ABENDDIC_DATABASE_VIEWS.html)
-   [DDIC projection views](ABENDDIC_PROJECTION_VIEWS.html)
-   [DDIC maintenance views](ABENDDIC_MAINTENANCE_VIEWS.html)
-   [DDIC help views](ABENDDIC_HELP_VIEWS.html)

-   To implement a projection, either DDIC database views or DDIC projection views can be used.
-   Only DDIC database tables can be specified as the basis tables of table views. Other views are not possible as basis object.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), only views whose key fields are located together at the beginning of the view can be accessed.
-   Views whose fields are all key fields should not be written to using [`UPDATE FROM`](ABAPUPDATE.html) or [`MODIFY FROM`](ABAPMODIFY_DBTAB.html). For DDIC database views, this produces a syntax check warning and for projection views a syntax error or runtime error.
-   As in DDIC database tables, the [client dependency](ABENCLIENT_DEPENDENCY_GLOSRY.html) of a table view that can be accessed using ABAP SQL (a DDIC database view or a DDIC projection view) is determined by a first column with the built-in dictionary type `CLNT`. The client dependency of the basis tables is ignored.
-   Table views cannot be maintained using the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) defined using the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the ABAP Core Data Services in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) offer all the functions of table views and more. CDS view entities allow only read access, however, while some DDIC views can be modified.

abenabap.html abenabap\_dictionary.html abenddic\_views.html