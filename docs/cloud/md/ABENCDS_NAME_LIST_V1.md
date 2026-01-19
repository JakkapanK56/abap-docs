---
title: "ABENCDS_NAME_LIST_V1"
description: |
  ABENCDS_NAME_LIST_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_NAME_LIST_V1.htm"
abapFile: "ABENCDS_NAME_LIST_V1.html"
keywords: ["select", "if", "try", "data", "ABENCDS", "NAME", "LIST"]
---

`... ( name1, name2, ... ) ...`

Defines the element names of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) in a name list. The specified names `name1`, `name2`, ... are assigned to the elements defined explicitly in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of the [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) in the order given. The names work like the alternative names defined in the `SELECT` list using [`AS`](ABENCDS_SELECT_LIST_ENTRY_V1.html) and overwrite these names. If a name list is specified, it must contain a name for each element of the view.

The view field is created under the element name in the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html). Accordingly, an element name must comply with the rules for names of view fields of DDIC database views, as well as the general naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html): This means that it must also meet the following requirements:

A name list can be specified only if the [elements](ABENCDS_SELECT_LIST_ENTRY_V1.html) in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) are specified explicitly. No name lists can be used if the `SELECT` list is specified as [`*`](ABENCDS_SELECT_LIST_V1.html) or if the element list contains the entry [`$EXTENSION.*`](ABENCDS_SELECT_LIST_ENTRY_V1.html).

Defines the names of the four elements of the CDS view `business_partner` as `id`, `role`, `company_name`, and `phone_number`.

Defines the names of the three elements of the CDS view `demo_employee_sales_figures` as `financial_year`, `employee_id`, and `gross_amount`.

-   The naming conventions for [component names](ABENDDIC_STRUCTURES_TECH.html) of [DDIC structures](ABENDDIC_STRUCTURES.html) in ABAP Dictionary
-   It cannot be a reserved component name. The reserved names that cannot be used are specified in the database table `TRESE`.

-   An explicit name list can be used, for example, to define the element names of a CDS view that defines a union set of multiple `SELECT` statements using [`UNION`](ABENCDS_UNION_V1.html).
-   A CDS view with an explicit name list cannot be expanded using [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html).

@AbapCatalog.sqlViewName: 'DEMO\_BPA\_VW\_OLD'\\ndefine view DEMO\_BUSINESS\_PARTNER\_OLD\\n (id, role, company\_name, phone\_number) as\\n select from snwd\_bpa\\n \\{ key snwd\_bpa.bp\_id,\\n snwd\_bpa.bp\_role,\\n snwd\_bpa.company\_name,\\n snwd\_bpa.phone\_number \\}\\n @AbapCatalog.sqlViewName: 'DEMO\_SALES\_FIG\_VW' \\ndemo\_view employee\_sales\_figures \\n (financial\_year, employee\_id, gross\_amount) as \\n select from sales\_2011\_tab \\n \\{ key '2011' as year, \\n key id, \\n amount \\} \\n union \\n select from sales\_2012\_tab \\n \\{ '2012' as year, \\n employee\_number, \\n gross\_amount \\} abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html