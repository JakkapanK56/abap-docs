---
title: "ABENCDS_SELECT_LIST_ENTRY_V1"
description: |
  ABENCDS_SELECT_LIST_ENTRY_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SELECT_LIST_ENTRY_V1.htm"
abapFile: "ABENCDS_SELECT_LIST_ENTRY_V1.html"
keywords: ["select", "insert", "do", "if", "case", "try", "class", "data", "ABENCDS", "SELECT", "LIST", "ENTRY"]
---

``... \{\ [[`@element_annot1`](ABENCDS_ELEMENT_ANNOTATIONS_V1.html)]\        [[`@element_annot2`](ABENCDS_ELEMENT_ANNOTATIONS_V1.html)]\        ...          [KEY]   \{\ [`expose_assoc`](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html)      [AS alias]\ \}\                |\ \{ element           [AS alias]\ \}\                |\ \{\ [`path_expr`](ABENCDS_PATH_EXPRESSION_V1.html).element [AS alias]\ \}\                |\ \{\ [`literal`](ABENCDS_LITERAL_V1.html)            AS alias  \}\                |\ \{\ [`parameter`](ABENCDS_PARAMETER_V1.html)          AS alias  \}\                |\ \{\ [`session_variable`](ABENCDS_SESSION_VARIABLE_V1.html)   AS alias  \}\                |\ \{\ [`aggr_expr`](ABENCDS_AGGREGATE_FUNCTIONS_V1.html)          AS alias  \}\                |\ \{\ [`arith_expr`](ABENCDS_ARITHMETIC_EXPRESSION_V1.html)         AS alias  \}\                |\ \{\ [`builtin_func`](ABENCDS_BUILTIN_FUNCTIONS_V1.html)       AS alias  \}\                |\ \{\ [`case_expr`](ABENCDS_CASE_EXPRESSION_V1.html)          AS alias  \}\                |\ \{\ [`cast_expr`](ABENCDS_CAST_EXPRESSION_V1.html)          AS alias  \}\        [[`@<element_annot1`](ABENCDS_ELEMENT_ANNOTATIONS_V1.html)]\        [[`@<element_annot2`](ABENCDS_ELEMENT_ANNOTATIONS_V1.html)]\        ... \}\    |\ \{ $EXTENSION.* \} ...``

Defines an element of a [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The names of the elements in a `SELECT` list must be unique and they are in the same namespace as the [parameters](ABENCDS_PARAMETER_LIST_V1.html) of the view.

[1. `... @element_annot ... @<element_annot`](#ABAP_ADDITION_1@3@)

[2. `... KEY`](#ABAP_ADDITION_2@3@)

[3. `... AS alias`](#ABAP_ADDITION_3@3@)

Specifies individual elements in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

Elements with the type `CHAR` can have a maximum of 1333 characters. Elements with the type `LRAW` or `LCHR` must be at the end of the view. Only one such element is allowed per view. Furthermore, a field of type `INT2` or `INT4` must stand directly in front of such an element, representing the maximum length of the element.

`SELECT` list with all possible elements.

Specifies annotations for the element. The annotations can be specified before the element using [`@element_annot`](ABENCDS_ELEMENT_ANNOTATIONS_V1.html) or after the element using [`@<element_annot`](ABENCDS_ELEMENT_ANNOTATIONS_V1.html).

`KEY` is used to define the current element as a key element of the current [CDS entity](ABENCDS_ENTITY_GLOSRY.html). Those elements of a [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) can be defined as key elements that are placed without gaps at the start of the list. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [`SELECT`](ABAPSELECT.html) statement in ABAP SQL:

Since ABAP release 7.90, the keys of the CDS entity and the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) are always identical. The CDS annotation `AbapCatalog.preserveKey` has been declared [obsolete](ABENCDS_ANNOTATION_OBSOLETE.html) and no longer has an effect. The ABAP runtime framework always behaves as if the annotation value `true` were used, independent from using the annotation and from the value specified there.

**Caution** The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

The following CDS view defines two elements as key elements:

Since those are not the same as the key fields of the underlying database table `SPFLI`, the result set of the view can contain duplicate entries in respect to the key elements. Class `CL_DEMO_CDS_ENTITY_KEY` shows the result of an ABAP SQL access to the view. The key elements are evaluated by the addition `ORDER BY PRIMARY KEY`, but apart from that, the key elements have no effect. When trying to select into a hashed table that uses the key elements for its unique key, a runtime error will occur most probably.

Defines an alternative element name for the current element. The alternative element name replaces the actual name of the element from the data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html). The view field is created under the alternative element name in the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html). Accordingly, the alternative element name must comply with the rules for names of view fields of DDIC database views, as well as the general naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html): This means that it must also meet the following requirements:

This is only checked, however, if there is no explicit [name list](ABENCDS_NAME_LIST_V1.html) that overrides the alternative element names.

Alternative element names can be used in the current CDS view to grant unique names for identically named elements from different entities of the data source. When the current CDS view is accessed, the alternative element names must be used instead of the actual name. Alternative element names cannot be used within the CDS view, with one exception: alternative element names can be specified directly or after `$projection` in the `ON` condition of a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html).

In particular, an alternative element name cannot be used as the operand of an [expression](ABENCDS_OPERANDS_AND_EXPR_V1.html).

Specifies all elements of an extension in the extension concept for dictionary objects. If specified, `$EXTENSION.*` inserts (in this place) all fields of all customizing includes, append structures, and DDIC append views that exist in the current system for the DDIC database tables and which occur as a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) in the current CDS view. `$EXTENSION.*` is ignored for CDS views used as a data source and extended using [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html).

If specified, `$EXTENSION.*` is applied to the current CDS view only. It is not applied to other CDS views in whose data source the current CDS view is used or to CDS views in the data source of the current CDS view.

`$EXTENSION.*` cannot be specified if aggregate expressions [`aggr_expr`](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) occur in the current `SELECT` list or if the current CDS view is a union set created using [`UNION`](ABENCDS_UNION_V1.html).

The data source of the CDS view `demo_sales_order_old1` is an inner join of the DDIC database tables `snwd_bpa` and `snwd_so` and contains three directly defined elements `sales_order_id`, `business_partner_id`, and `company_name` and (because `$EXTENSION.*` is specified) all fields that exist due to extensions in the DDIC database tables `snwd_bpa` and `snwd_so`. The alternative name `partner` is defined for the database `snwd_bpa` and is used in the `ON` condition. The names of the elements `sales_order_id` and `business_partner_id` are alternative element names. The element `sales_order_id` is defined as a key element.

The following view accesses the CDS view `DEMO_CDS_ORIGINAL_VIEW`, which is extended in the example for [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html). `$EXTENSION.*` is ignored, if specified.

-   [`expose_assoc`](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html) exposes a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html), a [CDS to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), or a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) using a [path expression](ABENCDS_PATH_EXPRESSION_V1.html). If a CDS association with a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V1.html)\\ `cds_cond` is exposed, an alternative element name `alias` with `AS` must be defined. Otherwise, an alternative element name can be defined.
-   When the name `element` is specified directly, an element of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) of the current CDS view is defined as an element. The field name can be prefixed with the name of the data source or its alternative name. The prefix is separated using a period (`.`). `AS` can be used to define an alternative element name `alias`.
-   `[path_expr](ABENCDS_PATH_EXPRESSION_V1.html).element` specifies an element `element` of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association of the path expression [`path_expr`](ABENCDS_PATH_EXPRESSION_V1.html). The element defined in this way is part of the result set of the CDS view, a field of the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html), and a component of a type defined in ABAP with respect to the CDS view. If no alternative element name `alias` is defined, and there is no [name list](ABENCDS_NAME_LIST_V1.html), the element name is defined by the name of the element named by the path expression.
-   [`literal`](ABENCDS_LITERAL_V1.html) can be used to declare a literal. `AS` must be used to define an alternative element name `alias`. The literal can be prefixed with the name of a domain.
-   [`parameter`](ABENCDS_PARAMETER_V1.html) can be used to specify a parameter from the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V1.html). If `AS` is used, an alternative element name `alias` must be defined, which cannot be the name `pname` of the parameter.
-   [`session_variable`](ABENCDS_SESSION_VARIABLE_V1.html) can be used to specify a session variable. `AS` must be used to define an alternative element name `alias`.
-   [`aggr_expr`](ABENCDS_AGGREGATE_FUNCTIONS_V1.html), [`arith_expr`](ABENCDS_ARITHMETIC_EXPRESSION_V1.html), [`builtin_func`](ABENCDS_BUILTIN_FUNCTIONS_V1.html), and [`case_exp`](ABENCDS_CASE_EXPRESSION_V1.html) can be used to specify aggregate expressions, arithmetic expressions, calls of built-in functions, and case distinctions. The expressions and functions are evaluated by the database system when the CDS view is accessed. An alternative element name `alias` must be defined with the keyword `AS`, unless there is a [name list](ABENCDS_NAME_LIST_V1.html).

-   An annotation can be used to assign further technical and semantic properties to an element for evaluation by the ABAP runtime framework. [Framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be used to give the element specific semantic properties that are evaluated by other SAP frameworks.

-   By the addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html).
-   In implicit [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the result set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.

-   For [table buffering](ABENCDS_V1_BUFFERING.html), the key fields of the CDS-managed DDIC view (obsolete) are always the decisive key fields.

-   The naming conventions for [component names](ABENDDIC_STRUCTURES_TECH.html) of [DDIC structures](ABENDDIC_STRUCTURES.html) in ABAP Dictionary
-   It cannot be a reserved component name. The reserved names that cannot be used are specified in the database table `TRESE`.

-   `$EXTENSION.*` is specified independently of when an extension is made. It is also applied when a DDIC database table or a DDIC view is extended only after the activation of the CDS view.
-   The statement [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html) can be used to extend the current CDS view.
-   If the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a CDS view extended using [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html) is specified as a data source, `$EXTENSION.*` (id specified) includes the fields of the generated [append view](ABENDDIC_APPEND_VIEW_GLOSRY.html).

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SLIST'\\ndefine view DEMO\_CDS\_SELECT\_LIST\_V1\\n with parameters\\n p\_delay :abap.int4\\n as select from\\n spfli\\n association to scarr as \_scarr on\\n \_scarr.carrid = spfli.carrid\\n \\{\\n carrid,\\n \_scarr.carrname,\\n '...' as text,\\n :p\_delay as delay,\\n $session.user as usr,\\n count( \* ) as cnt,\\n fltime + :p\_delay as fltime\_delayed,\\n concat(concat('"',\_scarr.carrname),'"') as carrname\_quoted,\\n case when fltime < 60 then 'short'\\n when fltime > 300 then 'long'\\n else 'medium'\\n end as duration,\\n cast(connid as int4) as connid\_number\\n \\}\\n group by\\n carrid,\\n connid,\\n \_scarr.carrname,\\n fltime\\n @AbapCatalog.sqlViewName: 'DEMOCDSKEY'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view DEMO\_CDS\_VIEW\_KEY\\n as select from spfli\\n\\{\\n key cityfrom,\\n key cityto,\\n carrid,\\n connid\\n\\}\\n @AbapCatalog.sqlViewName: 'DEMO\_SO\_VW1'\\ndefine view DEMO\_SALES\_ORDER\_OLD1 as\\n select from snwd\_bpa as partner\\n inner join\\n snwd\_so on partner.node\_key = snwd\_so.buyer\_guid\\n \\{ key so\_id as sales\_order\_id,\\n bp\_id as business\_partner\_id,\\n company\_name, //from snwd\_bpa\\n $extension.\* \\}\\n @AbapCatalog.sqlViewName: 'DEMOCDSEXT1'\\ndefine view demo\_cds\_extension1\\n as select from\\n demo\_cds\_original\_view\\n \\n \\{\\n key carrier,\\n key flight,\\n $extension.\*\\n \\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_select\_list\_v1.html