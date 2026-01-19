---
title: "ABENDDIC_GLOSSARY"
description: |
  ABENDDIC_GLOSSARY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_GLOSSARY.htm"
abapFile: "ABENDDIC_GLOSSARY.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "while", "if", "case", "try", "class", "data", "types", "internal-table", "ABENDDIC", "GLOSSARY"]
---

In the following, terms of the [ABAP Glossary](ABENABAP_GLOSSARY.html) are listed, that are relevant for ABAP Dictionary.

**ABAP Dictionary**

Persistent storage for [data types](ABENDATA_TYPE_GLOSRY.html) that are visible in all [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). In particular, [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) or [DDIC views](ABENDDIC_VIEW_GLOSRY.html) on the [standard database](ABENSTANDARD_DB_GLOSRY.html) that can be used in [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) and in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) are defined in the ABAP Dictionary. [Dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html) are maintained using the ABAP Dictionary tool in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) ([transaction](ABENTRANSACTION_CODE_GLOSRY.html)\\ `SE11`) or using the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).

**append search help**

[Search help](ABENSEARCH_HELP_GLOSRY.html) of the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) that is appended to another search help. Search helps delivered by SAP can be appended in customer systems by append search helps without making modifications.

**append structure**

[Structure](ABENSTRUCTURE_GLOSRY.html) of the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) that is appended to a different DDIC structure or [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) thus adding its [structure components](ABENSTRUCTURE_COMPONENT_GLOSRY.html) to them. Append structures and database tables can be used to add components to structures and database tables delivered by SAP without making modifications to them.

**application table**

[DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) with [client column](ABENCLIENT_COLUMN_GLOSRY.html). An application table contains [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) data that is processed by [application programs](ABENAPPLICATION_PROGRAM_GLOSRY.html).

**binary floating point number type**

[Numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) used for the binary representation of numbers with mantissa and exponents. The associated [built-in ABAP type](ABENBUILTIN_ABAP_TYPE_GLOSRY.html) is [`f`](ABENBUILTIN_TYPES_NUMERIC.html). The [built-in DDIC type](ABENBUILTIN_DDIC_TYPE_GLOSRY.html) is [`FLTP`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-2---the-internal-representation-is-in-accordance-with-the-norm-ieee-754--double-precision--by-one-bit-for-the-plus-minus-sign--11-bits-for-the-binary-exponent--and-52-bits-for-the-mantissa--whereby--decimal-numbers--abendecimal-number-glosry-html--can-be-represented-by-17--places--abenplace-glosry-html---a--data-object--abendata-object-glosry-html--of-a-binary-floating-point-number-type-is-a--binary-floating-point-number--abenbinfloat-glosry-html------built-in-ddic-type-----built-in--abenbuiltin-data-type-glosry-html-----elementary-data-type--abenelementary-data-type-glosry-html--of-the--abap-dictionary--abenabap-dictionary-glosry-html---built-in-ddic-types-can-be-used-to-define-types-in-abap-dictionary-and--abap-cds--abenabap-cds-glosry-html--but-cannot-be-used-in--abap-programs--abenabap-program-glosry-html--directly-----byte-field-type-----byte-like-data-type--abenbyte-like-data-typ-glosry-html--for-storing--byte-strings--abenbyte-string-glosry-html--of-fixed-length--the-associated--built-in-abap-type--abenbuiltin-abap-type-glosry-html--is---x---abenbuiltin-types-byte-html---the--built-in-ddic-types--abenbuiltin-ddic-type-glosry-html--are---raw---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_4) and [`LRAW`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-4---a--data-object--abendata-object-glosry-html--of-a-byte-field-type-is-a--byte-field--abenbyte-field-glosry-html------byte-string-type-----byte-like-data-type--abenbyte-like-data-typ-glosry-html--for-storing--byte-chains--abenbyte-chain-glosry-html--of-variable-length--the-associated--built-in-abap-type--abenbuiltin-abap-type-glosry-html--is---xstring---abenbuiltin-types-byte-html---the--built-in-ddic-type--abenbuiltin-ddic-type-glosry-html--is---rawstring---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_2). Internal administration takes place using an internal [reference](ABENREFERENCE_GLOSRY.html) and the data type is [deep](ABENDEEP_GLOSRY.html). A [data object](ABENDATA_OBJECT_GLOSRY.html) of a byte field type is a [byte string](ABENBYTE_STRING_GLOSRY.html).

**check table**

[DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) whose [primary key](ABENPRIMARY_KEY_GLOSRY.html) appears as a [foreign key](ABENFOREIGN_KEY_GLOSRY.html) in a [foreign key table](ABENFOREIGN_KEY_TABLE_GLOSRY.html).

**client column**

First column and [key field](ABENKEY_FIELD_GLOSRY.html) of [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html)\\ [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) or [DDIC views](ABENDDIC_VIEW_GLOSRY.html) of the type `CLNT` for storing the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html). By default, [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements work with automatic [client handling](ABENCLIENT_HANDLING_GLOSRY.html). Database tables with a client column are generally [application tables](ABENAPPLICATION_TABLE_GLOSRY.html) but can also contain administrative data. Database tables without a client column are called [system tables](ABENSYSTEM_TABLE_GLOSRY.html).

**client-dependent**

A [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) for which an implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) takes place when accessed with [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

See also: [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html).

**cluster table**

Before [ABAP release](ABENABAP_RELEASE_GLOSRY.html) 7.73, [table category](ABENDDIC_DATABASE_TABLES_TAB_CAT.html) of a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). A cluster table was not defined as such on the [database](ABENDATABASE_GLOSRY.html). Instead, multiple cluster tables were stored in a [table cluster](ABENTABLE_CLUSTER_GLOSRY.html) in the database. Only [ABAP SQL](ABENABAP_SQL_GLOSRY.html) could be used to access cluster tables, whereby certain restrictions applied. Cluster tables are no longer supported as of ABAP release 7.73. Any existing cluster tables were converted to [transparent tables](ABENTRANSPARENT_TABLE_GLOSRY.html).

**conversion exit**

A conversion exit defines rules that overwrite standard conversions that take place when values are passed as input from user interfaces to ABAP or as output from ABAP to user interfaces. Version exits can be linked to UI elements in different ways. Conversion exits can be implemented by [conversion routines](ABENCONVERSION_ROUTINE_GLOSRY.html) and can be assigned directly to a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) or a [DDIC domain](ABENDOMAIN_GLOSRY.html). The conversion routines execute the conversions implicitly for such dynpro fields and also in the statements [`WRITE`](ABAPWRITE-.html) and [`WRITE TO`](ABAPWRITE_TO.html) for [data objects](ABENDATA_OBJECT_GLOSRY.html) that refer to such domains.

**conversion routine**

A conversion routine is a [function module](ABENFUNCTION_MODULE_GLOSRY.html) that implements a part of a [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html). For each conversion exit, there is a function module for input and a function module for output using the naming convention `CONVERSION_EXIT_....._INPUT|OUTPUT` where the dots are the name of the conversion exit.

**currency code**

Content of a [currency key](ABENCURRENCY_KEY_GLOSRY.html). Valid currency codes are defined in the database table `TCURC`. The database table `TCURX` contains the currency code for currencies whose number of decimal places is not two.

**currency field**

A currency field is linked to a [currency key](ABENCURRENCY_KEY_GLOSRY.html) and it is used for entering an amount in a particular currency. Currency fields are available in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) (DDIC) and in [ABAP CDS](ABENABAP_CDS_GLOSRY.html), but the possible data types and handling differs.

See also:

**currency key**

Component of a [DDIC structure](ABENDDIC_STRUCTURE_GLOSRY.html), or [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html), or [DDIC view](ABENDDIC_VIEW_GLOSRY.html) of the type [`CUKY`](ABENDDIC_BUILTIN_TYPES.html) defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). A currency key can be linked to a [currency field](ABENCURRENCY_FIELD_GLOSRY.html) of a structure, database table, or view. The currency key contains a [currency code](ABENCURRENCY_ID_GLOSRY.html) from the database table `TCURC`, and is used to define the currency for the currency field. By default, the number of decimal places of a currency is always two. Currencies with a different number of decimal places must be entered additionally in the table `TCURX`, where the number of decimal places can be defined explicitly.

**customizing include**

[Structure](ABENSTRUCTURE_GLOSRY.html) of the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), with a name prefixed by `CI_` for customers and `SI_` for partners and that is in the customer namespace. Customizing includes in SAP structures are usually empty. They are not linked with existing structures, they simply reserve their names. In customer or partner systems, these includes can be enhanced in customizing by actually creating the included customizing includes and using customizing transactions to assign them [structure components](ABENSTRUCTURE_COMPONENT_GLOSRY.html).

**database field**

Smallest logical unit of the [structure](ABENSTRUCTURE_GLOSRY.html) of a [database table](ABENDATABASE_TABLE_GLOSRY.html). The properties of a database field of a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) are defined by a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html).

**database procedure proxy**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) that represents an [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) with respect to ABAP programs and which is addressed in the statement [`CALL DATABASE PROCEDURE`](ABAPCALL_DATABASE_PROCEDURE.html). Database procedure proxies are supported by [SAP HANA XSA](ABENXSA_GLOSRY.html) but not by [SAP HANA XSC](ABENXSC_GLOSRY.html).

**DDIC**

Short for [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), based on its former name, *Data Dictionary*.

**DDIC annotation**

A DDIC annotation adds metadata to a DDIC object. It can be used, for example, to add technical or semantic properties to a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) or a [DDIC structure](ABENDDIC_STRUCTURE_GLOSRY.html).

**DDIC append view**

Object in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) with which a [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html) can be enhanced without modification by adding additional fields of its base tables.

**DDIC currency field**

Component of a [DDIC structure](ABENDDIC_STRUCTURE_GLOSRY.html), or [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html), or [DDIC view](ABENDDIC_VIEW_GLOSRY.html) of type `CURR` defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). It is used for entering an amount in a particular currency. The content of a currency field is interpreted as an integer in the smallest units of the currency. A currency field must be linked with a [currency key](ABENCURRENCY_KEY_GLOSRY.html) of a structure, database table, or view that specifies the currency and number of decimal places.

Related terms:

**DDIC data element**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) that defines an [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) or a [reference type](ABENREFERENCE_TYPE_GLOSRY.html). In addition to [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html), it specifies the semantic meaning of a ([database](ABENDATABASE_FIELD_GLOSRY.html)) [field](ABENFIELD_GLOSRY.html) (e.g., the header for tabular representations or documentation text). Properties such as [data type](ABENDATA_TYPE_GLOSRY.html), length, and so on, are defined directly in the data element or are copied from a [DDIC domain](ABENDOMAIN_GLOSRY.html).

**DDIC database table**

Database table defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) as an [ABAP-managed database object](ABENABAP_DICTIONARY_GLOSRY.html). Each database table has a unique [primary index](ABENPRIMARY_INDEX_GLOSRY.html) and can have additional [secondary indexes](ABENSECONDARY_INDEX_GLOSRY.html). [Foreign key dependencies](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html) can exist between individual DDIC database tables. A DDIC database table is generally defined as a [transparent table](ABENTRANSPARENT_TABLE_GLOSRY.html) in the [database](ABENDATABASE_GLOSRY.html) of the AS ABAP. All DDIC database tables defined in ABAP Dictionary can be referenced as a [data type](ABENDATA_TYPE_GLOSRY.html) like [DDIC structures](ABENDDIC_STRUCTURE_GLOSRY.html) and can be accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html). During development, the content of DDIC database tables can be monitored using the [Data Browser](ABENDATA_BROWSER_GLOSRY.html).

**DDIC database view**

General [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) for multiple [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html). The instance of a DDIC database view as an [ABAP-managed database object](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) is an [SQL view](ABENSQL_VIEW_GLOSRY.html) in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) of the [standard database](ABENSTANDARD_DB_GLOSRY.html).

**DDIC DDL**

Short for [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html).

**DDIC dependency rule**

[Database object](ABENDB_OBJECT_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). A dependency rule can be defined for [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) and derives additional conditions from a selection condition, used by the optimizer of the [database system](ABENDATABASE_SYSTEM_GLOSRY.html) to extend the read access to these database tables. On an [AS ABAP](ABENAS_ABAP_GLOSRY.html), a dependency rules can be defined as a [HANA tuning object](ABENHANA_TUNING_OBJECT_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).

**DDIC domain**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) that describes the properties of [DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html), such as [data type](ABENDATA_TYPE_GLOSRY.html) or value range. A domain can be linked with any number of data elements.

**DDIC dynamic cache**

[SAP HANA tuning object](ABENHANA_TUNING_OBJECT_GLOSRY.html) defined using the statement [`DEFINE DYNAMIC CACHE`](ABENDDICDDL_DEFINE_DYNAMIC_CACHE.html) in [DDIC DDL](ABENDDIC_DCL_GLOSRY.html). A DDIC dynamic cache can improve performance when a view is accessed repeatedly. At the same time, a dynamic cache guarantees up-to-date data.

A DDIC dynamic cache is integrated into [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) as a wrapper for an SAP HANA dynamic result cache.

See also:

**DDIC extension**

Object in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) that extends a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) or a [DDIC structure](ABENDDIC_STRUCTURE_GLOSRY.html).

**DDIC external view**

A special [DDIC view](ABENDDIC_VIEW_GLOSRY.html) that defines an [SAP HANA view](ABENHANA_VIEW_GLOSRY.html) of the [SAP HANA Repository](ABENSAP_HANA_REPOSITORY_GLOSRY.html) in ABAP programs. A DDIC external view can be used like a [structured type](ABENSTRUCTURED_TYPE_GLOSRY.html) and specified as a source in reading [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements. External views are supported by [SAP HANA XSA](ABENXSA_GLOSRY.html) but not by [SAP HANA XSC](ABENXSC_GLOSRY.html).

**DDIC help view**

Special [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) of the [ABAP Dictionary](ABENABAP_DICTIONARY.html) for multiple [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) that is not instantiated as an [SQL view](ABENSQL_VIEW_GLOSRY.html) on the [database](ABENDATABASE_GLOSRY.html).

**DDIC maintenance view**

Special [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) of the [ABAP Dictionary](ABENABAP_DICTIONARY.html) for multiple [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) that are not instantiated as an [SQL view](ABENSQL_VIEW_GLOSRY.html) on the [database](ABENDATABASE_GLOSRY.html).

**DDIC projection view**

Special [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) of the [ABAP Dictionary](ABENABAP_DICTIONARY.html) for a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html). A DDIC projection view is not instantiated as an [SQL view](ABENSQL_VIEW_GLOSRY.html) on the [database](ABENDATABASE_GLOSRY.html).

**DDIC quantity field**

Component of a [DDIC structure](ABENDDIC_STRUCTURE_GLOSRY.html), or [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html), or [DDIC view](ABENDDIC_VIEW_GLOSRY.html) of type `QUAN` defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). A quantity field must be linked to a [unit key](ABENUNIT_GLOSRY.html) of a structure, database table, or view. This key determines the unit of the quantity field.

See also:

**DDIC runtime object**

Summary of all relevant properties of a [data type](ABENDATA_TYPE_GLOSRY.html) defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). A DDIC runtime object is created when a dictionary object is activated and is stored as an entry in the [name table](ABENNAME_TABLE_GLOSRY.html) ([nametab](ABENNAME_TAB_GLOSRY.html)). The [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) accesses the DDIC runtime object when types from the ABAP Dictionary are used.

**DDIC structure**

[Structured type](ABENSTRUCTURED_TYPE_GLOSRY.html) defined as a [DDIC type](ABENDDIC_TYPE_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).

**DDIC table type**

[Table type](ABENTABLE_TYPE_GLOSRY.html) for an [internal table](ABENINTERNAL_TABLE_GLOSRY.html) defined as a [DDIC type](ABENDDIC_TYPE_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).

**DDIC table view**

[DDIC view](ABENDDIC_VIEW_GLOSRY.html) on [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) of the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) that can only be defined in the form-based [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html)\\ [tool](ABENDDIC_TOOLS.html) of the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html). Table views can be [DDIC database views](ABENDATABASE_VIEW_GLOSRY.html), [DDIC projection views](ABENDDIC_PROJ_VIEW_GLOSRY.html), [DDIC maintenance views](ABENMAINTENANCE_VIEW_GLOSRY.html), and [DDIC help views](ABENHELP_VIEW_GLOSRY.html).

**DDIC type**

[Data type](ABENDATA_TYPE_GLOSRY.html) defined as a [global type](ABENGLOBAL_TYPE_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). DDIC types are always data types, while global [object types](ABENOBJECT_TYPE_GLOSRY.html) are defined in the [class library](ABENCLASS_LIBRARY_GLOSRY.html). In particular [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) and [DDIC views](ABENDDIC_VIEW_GLOSRY.html) can be used as DDIC types in ABAP programs.

**DDIC view**

[View](ABENVIEW_GLOSRY.html) defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). Either a [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) or an [DDIC external view](ABENEXTERNAL_VIEW_GLOSRY.html).

**decimal floating point number type**

[Numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) for the decimal storage of numbers with mantissa and exponents. The associated [built-in ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html) are [`decfloat16`](ABENBUILTIN_TYPES_NUMERIC.html) and [`decfloat34`](ABENBUILTIN_TYPES_NUMERIC.html). The [built-in DDIC types](ABENBUILTIN_DDIC_TYPE_GLOSRY.html) are [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-2-----df16-dec---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_2), [`DF16_RAW`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-2-----decfloat34---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_2), [`DF34_DEC`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-2--and---df34-raw---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_2). The internal representation follows the standard IEEE-754-2008, where [decimal numbers](ABENDECIMAL_NUMBER_GLOSRY.html) with 16 or 34 [places](ABENPLACE_GLOSRY.html) are accurately represented in the mantissa. A decimal floating point number has an additional [scaling](ABENSCALE_GLOSRY.html) property. A [data object](ABENDATA_OBJECT_GLOSRY.html) of a decimal floating point number type is a [decimal floating point number](ABENDECFLOAT_GLOSRY.html).

**dictionary**

*\->*\\ [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html)

**dictionary DDL**

Data definition language ([DDL](ABENDDL_GLOSRY.html)) of the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) for the definition of [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). Dictionary DDL contains language elements for [structures](ABENSTRUCTURE_GLOSRY.html), [append structures](ABENAPPEND_STRUCTURE_GLOSRY.html), [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) and [HANA tuning objects](ABENHANA_TUNING_OBJECT_GLOSRY.html). Dictionary DDL is based on the syntax of [CDS DDL](ABENCDS_DDL_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html).

**dictionary object**

DDIC object for short. [Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) defined in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). Examples of dictionary objects are global [data types](ABENDATA_TYPE_GLOSRY.html), [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html), and [DDIC views](ABENDDIC_VIEW_GLOSRY.html).

**DRUL source code**

Source code for [dependency rules](ABENDEPENDENCY_RULE_GLOSRY.html) in [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html).

**DTDC source code**

Source code for [dynamic caches](ABENDYNAMIC_CACHE_GLOSRY.html) in [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html).

**export/import table**

[Transparent](ABENTRANSPARENT_TABLE_GLOSRY.html)\\ [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) with the required structure for storing [data clusters](ABENDATA_CLUSTER_GLOSRY.html) in database tables and in [cross-transaction application buffers](ABENCROSSTRANS_APP_BUFFER_GLOSRY.html) of the [shared memory](ABENSHARED_MEMORY_GLOSRY.html). Data clusters are exported to export/import tables using the statement [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) and imported again using the statement [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html).

**extension index**

[Index](ABENINDEX_GLOSRY.html) of a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) that is created as a separate [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html). An extension index can be created to extend an existing database table without modifying the original object. During an upgrade, the extension index is automatically applied without any modification adjustment.

**field exit**

Obsolete [customer exit](ABENCUSTOMER_EXIT_GLOSRY.html) that can be linked with [DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) in customer systems. If a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) is defined with reference to such a data element, a function module named `FIELD_EXIT_dtel` is called during the data transport from the dynpro to the ABAP program at the event [PAI](ABENPAI_GLOSRY.html). Here, `dtel` is the name of the data element. The value of the dynpro field can be modified in the function module. The function module of a field exit cannot be debugged at present.

**fixed value**

A single value specified for a [DDIC domain](ABENDOMAIN_GLOSRY.html) as part of its value range.

**fixed value append**

A fixed value append defines [fixed values](ABENFIXED_VALUE_GLOSRY.html) and/or intervals that are appended to an existing [DDIC domain](ABENDOMAIN_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). Domains delivered by SAP can be enhanced in customer systems by means of fixed value appends without modification.

**foreign key**

One or more columns of a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) ([foreign key table](ABENFOREIGN_KEY_TABLE_GLOSRY.html)) that are [primary keys](ABENPRIMARY_KEY_GLOSRY.html) of another database table ([check table](ABENCHECK_TABLE_GLOSRY.html)).

**foreign key dependency**

Relationship between a [foreign key table](ABENFOREIGN_KEY_TABLE_GLOSRY.html) and a [check table](ABENCHECK_TABLE_GLOSRY.html). A foreign key table usually only contains entries for which the content of the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) also occurs as content of the [primary key](ABENPRIMARY_KEY_GLOSRY.html) in the check table.

**foreign key field**

Field in a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) to which a [check table](ABENCHECK_TABLE_GLOSRY.html) is assigned. Part of the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) of a [foreign key table](ABENFOREIGN_KEY_TABLE_GLOSRY.html).

**foreign key table**

[DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) that contains [foreign keys](ABENFOREIGN_KEY_GLOSRY.html).

**fuzzy search index**

[Index](ABENINDEX_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) that database that provides fast error-tolerant text search, where a query returns records even when the search term contains additional or missing characters or other types of spelling errors. The [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) allows fuzzy search indexes to be created for [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html).

**geodata type**

Data type for geometric data. The [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) currently supports the built-in data type [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html).

**geospatial data**

*\->*\\ [spatial data](ABENSPATIAL_DATA_GLOSRY.html)

**global temporary table**

GTT for short. [Table category](ABENDDIC_DATABASE_TABLES_TAB_CAT.html) of a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). A GTT is used to store temporary data that is deleted at the end of each [database LUW](ABENDATABASE_LUW_GLOSRY.html). Only [ABAP SQL](ABENABAP_SQL_GLOSRY.html) should be used to access global temporary tables defined in the ABAP Dictionary.

**global type**

[Data type](ABENDATA_TYPE_GLOSRY.html) or [object type](ABENOBJECT_TYPE_GLOSRY.html) that is visible as a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) in the entire [AS ABAP](ABENAS_ABAP_GLOSRY.html). Global data types are defined as [DDIC types](ABENDDIC_TYPE_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) or as [CDS types](ABENCDS_TYPE_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). Global object types are defined as [global classes](ABENGLOBAL_CLASS_GLOSRY.html) or as [global interfaces](ABENGLOBAL_INTERFACE_GLOSRY.html) in the [class library](ABENCLASS_LIBRARY_GLOSRY.html). All these global types share the same namespace. Besides these global types, data types defined in the public [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of global classes or in global interfaces can also be used globally.

**HANA tuning object**

A [tuning object](ABENTUNING_OBJECT_GLOSRY.html) that defines technical settings for an ABAP Dictionary object on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). HANA tuning objects are defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) in [DDIC DDL](ABENDDIC_DCL_GLOSRY.html) and they are a wrapper for settings on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). Currently, there are the following HANA tuning objects:

**include structure**

Abbreviated as include. [Structure](ABENSTRUCTURE_GLOSRY.html) of the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) that is included in another structure.

**index**

Selected columns of a [database table](ABENDATABASE_TABLE_GLOSRY.html) that are sorted in order and stored as a copy in the [database system](ABENDATABASE_SYSTEM_GLOSRY.html), and which point to the actual rows. For the database tables of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) that are defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), there is always a [primary index](ABENPRIMARY_INDEX_GLOSRY.html), and additional [secondary indexes](ABENSECONDARY_INDEX_GLOSRY.html) can also be created. In [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) there may be one or more [table indexes](ABENTABLE_INDEX_GLOSRY.html).

**INDX-type table**

Obsolete name for [export/import tables](ABENEXPORT_IMPORT_TABLE_GLOSRY.html).

**infotype**

Special [structure](ABENSTRUCTURE_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). The statement [`INFOTYPES`](ABAPINFOTYPES.html) creates special [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) of this structure, which can be processed in a [`PROVIDE`](ABAPPROVIDE.html)\\ [loop](ABENLOOP_GLOSRY.html).

**initial value**

The ABAP runtime framework defines an initial value for each [data type](ABENDATA_TYPE_GLOSRY.html). The initial values of the [elementary data types](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) depend on the corresponding [built-in ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html). The initial value of [reference types](ABENREFERENCE_TYPE_GLOSRY.html) is the [null reference](ABENNULL_REFERENCE_GLOSRY.html). The initial value of an [internal table](ABENINTERNAL_TABLE_GLOSRY.html) is an empty table without lines. The initial value of [structured types](ABENSTRUCTURED_TYPE_GLOSRY.html) is produced from the initial values of the individual [structure components](ABENSTRUCTURE_COMPONENT_GLOSRY.html). The statement [`CLEAR`](ABAPCLEAR.html) with no additions sets a [data object](ABENDATA_OBJECT_GLOSRY.html) to the appropriate initial value for its type. Initial values are also assigned to most [built-in data types](ABENDDIC_BUILTIN_TYPES.html) in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), but those are not evaluated in ABAP programs.

**integer type**

[Numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) for storing [integer numbers](ABENINTEGER_NUMBER_GLOSRY.html) of different value ranges. The associated [built-in ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html) are ([`b`](ABENBUILTIN_TYPES_NUMERIC.html), [`s`](ABENBUILTIN_TYPES_NUMERIC.html)), [`i`](ABENBUILTIN_TYPES_NUMERIC.html), and [`int8`](ABENBUILTIN_TYPES_NUMERIC.html). The [built-in DDIC types](ABENBUILTIN_DDIC_TYPE_GLOSRY.html) are [`INT1`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-2-----int2---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_2), [`INT4`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-2--and---int8---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_2). The internal representation takes place in the integer representation of the current platform. A [data object](ABENDATA_OBJECT_GLOSRY.html) of an integer type is an [integer](ABENINTEGER_GLOSRY.html).

**join**

A combination of two [SQL data sources](ABENSQL_DATA_SOURCE_GLOSRY.html) into one result set, consisting of columns of both data sources. The rows of the result set are determined by the [join type](ABENJOIN_TYPE_GLOSRY.html) and by [join conditions](ABENJOIN_CONDITION_GLOSRY.html) between columns of the data sources. The relation between the rows of the data sources can be expressed by a [cardinality](ABENCARDINALITY_GLOSRY.html). Joins can be implemented in ABAP as follows:

Furthermore, [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) define join relationships that are instantiated when the associations are used in [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

**lock object**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) that is used as the basis for [SAP locks](ABENSAP_LOCK_GLOSRY.html). In a lock object [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) are specified to which a common [lock](ABENLOCK_GLOSRY.html) is to be applied and which are linked by [foreign key dependencies](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html). When a lock object is created, two [lock function modules](ABENLOCK_FUNCTION_MODULE_GLOSRY.html) are automatically generated.

[**\-> More about**](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/cf21eea5446011d189700000e8322d00)

**mass activation**

Activation of multiple objects in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) using the [mass activator](ABENMASS_ACTIVATOR_GLOSRY.html).

**mass activator**

[System program](ABENSYSTEM_PROGRAM_GLOSRY.html)\\ `RADMASG0` for the [mass activation](ABENMASS_ACTIVATION_GLOSRY.html) of objects in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).

**matchcode object**

Predecessor of [search helps](ABENSEARCH_HELP_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).

**name table**

Nametab for short. A native [database table](ABENDATABASE_TABLE_GLOSRY.html) that stores the [DDIC runtime objects](ABENDDIC_RUNTIME_OBJECT_GLOSRY.html) of [data types](ABENDATA_TYPE_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). It contains [nametab headers](ABENNAME_TAB_HEADER_GLOSRY.html) and [nametab field descriptions](ABENNAME_TAB_FIELDS_GLOSRY.html). The name table is persisted as the native database table `DDNTT` and is not defined as a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) in the ABAP Dictionary. This means that it cannot be accessed using ABAP SQL or ABAP CDS. The name table is accessed internally in the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) or by using APIs.

The former table `DDNTF` for separate storage of the field descriptions is not supported any more.

**nametab**

*\->*\\ [Name table](ABENNAME_TABLE_GLOSRY.html)

**nametab field descriptions**

A part of the [name table](ABENNAME_TABLE_GLOSRY.html) for [DDIC runtime objects](ABENDDIC_RUNTIME_OBJECT_GLOSRY.html) of [data types](ABENDATA_TYPE_GLOSRY.html) from the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), used for the properties of structure components.

**nametab header**

A part of the [name table](ABENNAME_TABLE_GLOSRY.html) for [DDIC runtime objects](ABENDDIC_RUNTIME_OBJECT_GLOSRY.html) of [data types](ABENDATA_TYPE_GLOSRY.html) from the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), used for the properties of the entire object.

**numeric text field type**

[Character-like data type](ABENCHARLIKE_DATA_TYPE_GLOSRY.html) for storing [numeric texts](ABENNUMERIC_TEXT_GLOSRY.html) of fixed length. The associated [built-in ABAP type](ABENBUILTIN_ABAP_TYPE_GLOSRY.html) is [`n`](ABENBUILTIN_TYPES_CHARACTER.html). The [built-in DDIC types](ABENBUILTIN_DDIC_TYPE_GLOSRY.html) are [`NUMC`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-7--and---accp---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_6). The internal representation takes place in the [character representation](ABENCHAR_REPRESENTATION_GLOSRY.html) of the current [code page](ABENCODEPAGE_GLOSRY.html). A [data object](ABENDATA_OBJECT_GLOSRY.html) of this type is a [numeric text field](ABENNUMERIC_TEXT_FIELD_GLOSRY.html).

**packed number type**

[Numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) for saving [fixed point numbers](ABENFIXED_POINT_NUMBER_GLOSRY.html) with a fixed number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) The associated [built-in ABAP type](ABENBUILTIN_ABAP_TYPE_GLOSRY.html) is [`p`](ABENBUILTIN_TYPES_NUMERIC.html). The [built-in DDIC type](ABENBUILTIN_DDIC_TYPE_GLOSRY.html) is [`DEC`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-2---the-number-of-decimal-places-is-a-property-of-the-data-type-and-not--as-with--floating-point-numbers--abenfloating-point-number-glosry-html---a-property-of-the-data-itself--calculations-with-packed-numbers-are-performed-using--fixed-point-arithmetic--abenfixed-point-arithmetic-glosry-html---the-internal-representation-uses-the--bcd--abenbcd-glosry-html--format--a--data-object--abendata-object-glosry-html--of-a-packed-number-type-is-a--packed-number--abenpacked-number-glosry-html------pooled-table----before--abap-release--abenabap-release-glosry-html--7-73---table-category--abenddic-database-tables-tab-cat-html--of-a--ddic-database-table--abenddic-db-table-glosry-html--in-the--abap-dictionary--abenabap-dictionary-glosry-html---a-pooled-table-was-not-defined-as-such-on-the--database--abendatabase-glosry-html---instead--multiple-pooled-tables-were-stored-in-a--table-pool--abentable-pool-glosry-html--in-the-database--only--abap-sql--abenabap-sql-glosry-html--could-be-used-to-access-pooled-tables-whilst-certain-other-restrictions-also-applied--pooled-tables-are-no-longer-supported-since-abap-release-7-73--any-existing-pooled-tables-were-transformed-to--transparent-tables--abentransparent-table-glosry-html------primary-index----unique--index--abenindex-glosry-html--of-a--ddic-database-table--abenddic-db-table-glosry-html--defined-in--abap-dictionary--abenabap-dictionary-glosry-html---the-index-is-assembled-from-the--key-fields--abenkey-field-glosry-html--of-the--primary-key--abenprimary-key-glosry-html---when-a-table-is-activated-in-the-abap-dictionary--the-primary-index-is-created-automatically-using-the-primary-key-fields-of-the-table--certain--internal-tables--abeninternal-table-glosry-html--have-a--primary-table-index--abenprimary-table-index-glosry-html------replacement-object----a-replacement-object-is-a--cds-view--abencds-view-glosry-html--that-can-be-specified-for-a--ddic-database-table--abenddic-db-table-glosry-html--or-a--ddic-database-view--abendatabase-view-glosry-html---in-case-of-a-read-access-using--abap-sql--abenabap-sql-glosry-html---the-replacement-object-is-addressed-instead-of-the-original-object-----search-help----a--repository-object--abenrepository-object-glosry-html--maintained-in-the--abap-dictionary--abenabap-dictionary-glosry-html--to-create-value-lists--it-supplies--input-fields--abeninput-output-field-glosry-html--on--dynpros--abendynpro-glosry-html--with-single-or-multicolumn--input-helps--abeninput-help-glosry-html---search-helps-can-be-linked-in-the-abap-dictionary-with--structure-components--abenstructure-component-glosry-html----ddic-data-elements--abendata-element-glosry-html---and--check-tables--abencheck-table-glosry-html---a-search-help-enables-searches-for-input-values-using-associated-data--without-the-need-to-know-the-exact-spelling-of-the-value----------more-about----https---help-sap-com-docs-abap-platform-new-ec1c9c8191b74de98feb94001a95dd76-cf21ee2b446011d189700000e8322d00-----secondary-index-----index--abenindex-glosry-html--of--ddic-database-tables--abenddic-db-table-glosry-html--defined-in-the--abap-dictionary--abenabap-dictionary-glosry-html--that-can-be-created-in-addition-to-the--primary-index--abenprimary-index-glosry-html---creating-secondary-indexes-can-improve-the-performance-when-accessing-databases-that-evaluate-the-indexes-of-the--database--abendatabase-glosry-html---a-secondary-index-can-be-unique--but-it-does-not-have-to-be--a--secondary-table-index--abensecondary-table-index-glosry-html--can-be-assigned-to--internal-tables--abeninternal-table-glosry-html------spatial-data----data-that-describes-the-position--shape--and-orientation-of-an-object-in-a--spatial-reference-system--abenspatial-ref-system-glosry-html---this-allows-the-visualization-of-the-position-or-the-movement-of-an-object--spatial-data-is-often-represented-as-2d-geometries--cartesian-coordinates--but-can-also-include-the-altitude-for-a-3d-geometry--typical-geometrical-forms-are-points--lines--and-polygons-----spatial-reference-identifier----srid-for-short--an-identifier-that-specifies-a--spatial-reference-system--abenspatial-ref-system-glosry-html---the-default-value-for-the-identifier-of-the-spatial-reference-system-is-0-and-indicates-a-cartesian-coordinate-system--i-e--2d-geometries-----spatial-reference-system----a-system-to-define-the-location-of-an-object-using-coordinates--this-system-consists-of-various-parameters-that-are-used-to-represent-a-geometry--such-as-the-name-of-the-coordinate-system-from-which-the-coordinates-are-derived--the-specification-of-a-spatial-reference-system-is-done-by-a--spatial-reference-identifier--abenspatial-ref-identifier-glosry-html---srid---a-spatial-reference-system-is-used-to-bring-spatial-data-into-context-----standalone-data-type----a--data-type--abendata-type-glosry-html--that-is-defined-using-the-statement---types---abaptypes-html--in-an--abap-program--abenabap-program-glosry-html---as-a-data-type-of-the--abap-dictionary--abenabap-dictionary-glosry-html--or-as-a--cds-entity--abencds-entity-glosry-html---see-also--bound-data-type--abenbound-data-type-glosry-html------standard-index-----index--abenindex-glosry-html--of-a--ddic-database-table--abenddic-db-table-glosry-html--that-is-created-and-transported-as-a-part-of-the-respective--dictionary-object--abendictionary-object-glosry-html------structured-type-----data-type--abendata-type-glosry-html--of-a--structure--abenstructure-glosry-html---it-contains-other-data-types-as--structure-components--abenstructure-component-glosry-html---a-named-structured-type-is-either-defined-as-a--ddic-structure--abenddic-structure-glosry-html---a--cds-entity--abencds-entity-glosry-html--or-inside-an--abap-program--abenabap-program-glosry-html--using-the-statement---types-begin-of---abaptypes-struc-html------system-table-----client-independent--abenclient-independent-glosry-html-----ddic-database-table--abenddic-db-table-glosry-html--without-a--client-column--abenclient-column-glosry-html---a-system-table-contains-data-that-is-not-specific-for-a-client-and-that-is-generally-only-processed-by--system-programs--abensystem-program-glosry-html------table-buffering-----buffering--abensap-buffering-old-glosry-html--of-data-from--ddic-database-tables--abenddic-db-table-glosry-html----ddic-database-views--abendatabase-view-glosry-html---or-from--cds-entities--abencds-entity-glosry-html--in-a--table-buffer--abentable-buffer-glosry-html--in-the--shared-memory--abenshared-memory-glosry-html--of-the-current--as-instance--abenas-instance-glosry-html---whether-and-how-a-ddic-database-table-or-a-ddic-database-view-is-buffered-is-determined-by-its--technical-settings--abenddic-database-tables-buffer-html---for-a-cds-entity--the-buffering-is-determined-by-annotations-and-a--cds-entity-buffer--abencds-entity-buffer-glosry-html---buffering-is-managed-by-the--database-interface--abendatabase-interface-glosry-html---table-buffering-is-applied-implicitly-when-the-database-is-accessed-using--abap-sql--abenabap-sql-glosry-html--and-from-classic--dynpros--abendynpro-glosry-html---in-abap-sql--the--abap-sql-in-memory-engine--abenabap-sql-inmemeng-glosry-html--processes-the-tabular-data-in-the-table-buffer-----table-cluster----before--abap-release--abenabap-release-glosry-html--7-73---ddic-database-table--abenddic-db-table-glosry-html--in-the--database--abendatabase-glosry-html--that-contains-the-data-of-multiple--cluster-tables--abencluster-table-glosry-html---cluster-tables-are-no-longer-supported-and-all-table-clusters-have-been-removed-----table-key----columns-of-an--internal-table--abeninternal-table-glosry-html--or--ddic-database-table--abenddic-db-table-glosry-html--whose-content-identifies-table-lines--for-internal-tables--distinction-is-made-between--primary-table-keys--abenprimary-table-key-glosry-html--and--secondary-table-keys--abensecondary-table-key-glosry-html---which-are--technical-type-properties--abentechnical-type-prpt-glosry-html--of-the--table-type--abentable-type-glosry-html------table-pool----before--abap-release--abenabap-release-glosry-html--7-73---ddic-database-table--abenddic-db-table-glosry-html--in-the--database--abendatabase-glosry-html--that-contains-the-data-of-multiple--pooled-tables--abenpooled-table-glosry-html---pooled-tables-are-no-longer-supported-and-all-table-pools-have-been-removed-----text-field-type-----character-like-data-type--abencharlike-data-type-glosry-html--for-storing--character-strings--abencharacter-string-glosry-html--of-fixed-length--the-associated--built-in-abap-type--abenbuiltin-abap-type-glosry-html--is---c---abenbuiltin-types-character-html---the--built-in-ddic-types--abenbuiltin-ddic-type-glosry-html--are---char---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_3) and [`LCHR`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-3---the-internal-representation-takes-place-in-the--character-representation--abenchar-representation-glosry-html--of-the-current--code-page--abencodepage-glosry-html---a--data-object--abendata-object-glosry-html--of-a-text-field-type-is-a--text-field--abentext-field-glosry-html------text-language----semantic-property-of-a--ddic-database-table--abenddic-db-table-glosry-html--that-affects-data-transport-between-non-unicode-and--unicode-systems--abenunicode-system-glosry-html------text-table----special--foreign-key-table--abenforeign-key-table-glosry-html--whose--primary-key--abenprimary-key-glosry-html--consists-of-the--foreign-key--abenforeign-key-glosry-html---that-is--the-primary-key-of-the--check-table--abencheck-table-glosry-html--and-a-language-key-of-the-type---lang---abenddic-builtin-types-html---a-text-table-contains-language-dependent-texts-that-are-assigned-to-the-lines-of-the-check-table-----time-stamp----combined--date--abendate-glosry-html---time--abentime-glosry-html--specification-for-determining-a-point-in-time--time-stamps-of-the--abap-runtime-framework--abenabap-runtime-frmwk-glosry-html--are--posix-time-stamps--abenposix-timestamp-glosry-html--independent-of-time-zone--they-are-represented-in-a--time-stamp-field--abentimestamp-field-glosry-html--with-the--time-stamp-type--abentimestamp-field-glosry-html------utclong---abenbuiltin-types-date-time-html--or-as--time-stamps-in-packed-numbers--abentime-stamps-packed-html--whose-data-type-is-defined-using-the--ddic-data-elements--abendata-element-glosry-html-----timestamp--or--timestampl--from-the--abap-dictionary--abenabap-dictionary-glosry-html------transparent-table-----table-category--abenddic-database-tables-tab-cat-html--of-a--ddic-database-table--abenddic-db-table-glosry-html--in-the--abap-dictionary--abenabap-dictionary-glosry-html--that-has-exactly-one-identically-named-instance-with-the-same-columns-as-the-definition-in-the-abap-dictionary--besides-using--abap-sql--abenabap-sql-glosry-html---the-data-of-transparent-tables-can-also-be-processed-using--native-sql--abennative-sql-glosry-html--and--amdp--abenamdp-glosry-html--and-outside--as-abap--abenas-abap-glosry-html--by-using-the-programming-interface-of-the-database--the-latter-is--not-recommended--abendatabase-access-recomm-html------tuning-object----a--repository-object--abenrepository-object-glosry-html--that-defines-technical-settings-for-certain-repository-objects--a-tuning-object-can-be-defined-and-transported-separately-from-the-repository-object-for-which-it-is-defined--the-following-types-of-tuning-objects-are-currently-available-----unit-id----content-of-a--unit-key--abenunit-glosry-html---valid-unit-ids-are-defined-in-the-database-table--t006------unit-key----component-of-a--ddic-structure--abenddic-structure-glosry-html---or--ddic-database-table--abenddic-db-table-glosry-html----or--ddic-view--abenddic-view-glosry-html--of-type--unit--defined-in-the--abap-dictionary--abenabap-dictionary-glosry-html---a-unit-key-can-be-linked-to-a--quantity-field--abenquantity-glosry-html--of-a-structure--database-table--or-view--the-unit-key-can-contain-a--unit-id--abenunit-id-glosry-html--from-the-database-table--t006---and-defines-the-unit-for-the-quantity-field-----value-help-------------input-help--abeninput-help-glosry-html-----value-range----set-of-valid-values-for-a--data-object--abendata-object-glosry-html---the-values-that-are-valid-for-a-data-object-are-determined-by-its--data-type--abendata-type-glosry-html---in--abap-dictionary--abenabap-dictionary-glosry-html---the-term-value-range-indicates-a--semantic-property--abenddic-domains-sema-html--of-a--ddic-domain--abendomain-glosry-html------value-table----semantic-property-of-a--ddic-domain--abendomain-glosry-html--in-the--abap-dictionary--abenabap-dictionary-glosry-html---the-value-table-is-the-default-value-for-the--check-table--abencheck-table-glosry-html--of-table-fields-defined-with-reference-to-the-domain-----writable-database-object----a--repository-object--abenrepository-object-glosry-html--that-allows-modifying-data-on-the-database-------a--ddic-database-table--abenddic-db-table-glosry-html--or--ddic-view--abenddic-view-glosry-html--in--abap-dictionary--abenabap-dictionary-glosry-html--is-client-dependent-if-the-first-column-is-a--client-column--abenclient-column-glosry-html---the-system-table--t000---which-contains-the--as-abap--abenas-abap-glosry-html-----client-ids--abenclient-identifier-glosry-html---is-an-exception-to-this-rule------the-client-dependency-of-a--cds-entity--abencds-entity-glosry-html--is-determined-by-its-data-sources--client-handling-is-by-done-implicitly-by-filtering-the--session-variable--abensession-variable-glosry-html------session-client-------the-client-dependency-of--cds-ddic-based-views--obsolete---abencds-v1-view-glosry-html--is-declared-in-the--cds-source-code--abencds-source-code-glosry-html--by-the--abap-annotation--abenabap-annotation-glosry-html-----CLientHandling.type`.

-   [DDIC currency field](ABENDDIC_CURRENCY_FIELD_GLOSRY.html)
-   [ABAP CDS amount field](ABENCDS_AMOUNT_FIELD_GLOSRY.html)

-   [currency field](ABENCURRENCY_FIELD_GLOSRY.html)
-   [ABAP CDS amount field](ABENCDS_AMOUNT_FIELD_GLOSRY.html)

-   [View cache](ABENVIEW_CACHE_GLOSRY.html)
-   [static view cache](ABENSTATIC_VIEW_CACHE_GLOSRY.html)

-   [quantity field](ABENQUANTITY_GLOSRY.html)
-   [ABAP CDS quantity field](ABENCDS_QUANTITY_GLOSRY.html)

-   [DDIC dependency rules](ABENDEPENDENCY_RULE_GLOSRY.html)
-   [DDIC dynamic caches](ABENDYNAMIC_CACHE_GLOSRY.html)

-   [DDIC views](ABENDDIC_VIEW_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html)
-   [Join expressions](ABENJOIN_EXPRESSION_GLOSRY.html) in [queries](ABENASQL_QUERY_GLOSRY.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html)
-   [Join expressions](ABENJOIN_EXPRESSION_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html)

-   [HANA tuning objects](ABENHANA_TUNING_OBJECT_GLOSRY.html) defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) in [DDIC DDL](ABENDDIC_DCL_GLOSRY.html).
-   [ABAP tuning objects](ABENABAP_TUNING_OBJECT_GLOSRY.html) defined as [CDS objects](ABENCDS_OBJECT_GLOSRY.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html).

-   In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html), [writable CDS view entities](ABENWRITABLE_V2_GLOSRY.html), and [writable CDS external entities](ABENWRITABLE_EE_GLOSRY.html) allow for the modification of data with the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html).
-   In [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) and [DDIC table views](ABENTABLE_VIEW_GLOSRY.html) allow data change operations.

abenabap.html abenabap\_dictionary.html