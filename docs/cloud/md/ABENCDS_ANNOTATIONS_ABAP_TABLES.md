---
title: "ABENCDS_ANNOTATIONS_ABAP_TABLES"
description: |
  ABENCDS_ANNOTATIONS_ABAP_TABLES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ANNOTATIONS_ABAP_TABLES.htm"
abapFile: "ABENCDS_ANNOTATIONS_ABAP_TABLES.html"
keywords: ["do", "try", "class", "data", "types", "ABENCDS", "ANNOTATIONS", "ABAP", "TABLES"]
---

The following tables summarize the [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html) and [properties](ABENCDS_SAP_ANNO_PROPS.html) of all [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html) and [CDS DCL](ABENCDS_DCL_GLOSRY.html) in ABAP CDS. The first column contains links to more detailed information.

Only those annotations are shown that can be used in the current ABAP language version.

**Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`AbapCatalog.amdp.allowedForWrite`](ABENCDS_368297892_ANNO.html) `#TABLE_ENTITY` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.buffering.numberOfKeyFields`](ABENCDS_1619044161-_ANNO.html) `#VIEW` `Integer` `-` `000` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.buffering.status`](ABENCDS_1242119123-_ANNO.html) `#VIEW` `String(20)` `#ACTIVE` \\
`#NOT_ALLOWED` \\
`#SWITCHED_OFF` `#SWITCHED_OFF` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.buffering.type`](ABENCDS_464103458_ANNO.html) `#VIEW` `String(10)` `#FULL` \\
`#GENERIC` \\
`#NONE` \\
`#SINGLE` `#NONE` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.compiler.compareFilter`](ABENCDS_1687178802-_ANNO.html) `#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.dataMaintenance`](ABENCDS_67699033-_ANNO.html) `#HIERARCHY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(20)` `#ALLOWED` \\
`#DISPLAY_ONLY` \\
`#NOT_ALLOWED` \\
`#RESTRICTED` `#RESTRICTED` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.dbHints[ ].dbSystem`](ABENCDS_680013611-_ANNO.html) `#VIEW` `String(3)` `#ADA` \\
`#ALL` \\
`#ASE` \\
`#DB2` \\
`#DB4` \\
`#DB6` \\
`#HDB` \\
`#INF` \\
`#MSS` \\
`#ORA` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.dbHints[ ].hint`](ABENCDS_828976635-_ANNO.html) `#VIEW` `String(1298)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.deliveryClass`](ABENCDS_61840010-_ANNO.html) `#TABLE_ENTITY` `String(30)` `#APPLICATION_DATA` \\
`#CUSTOMIZING_DATA` \\
`#LOCAL_DATA` \\
`#SYSTEM_ADMINISTRATIVE_DATA` \\
`#SYSTEM_DATA` \\
`#SYSTEM_EDITABLE_DATA` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.entityBuffer.definitionAllowed`](ABENCDS_2036691489-_ANNO.html) `#TABLE_ENTITY` \\
\\
`#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.entityBuffer.definitionType[ ]`](ABENCDS_1760222934_ANNO.html) `#VIEW` `String(20)` `#DELEGATED` \\
`#MATERIALIZED` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.entityBuffer.propagationAllowed`](ABENCDS_1859277801_ANNO.html) `#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.extensibility.allowNewCompositions`](ABENCDS_2031682287_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.extensibility.allowNewDatasources`](ABENCDS_1925198989-_ANNO.html) `#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.extensibility.dataSources[ ]`](ABENCDS_1373877666-_ANNO.html) `#VIEW` `LocalDefinitionRef` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.extensibility.elementSuffix`](ABENCDS_864724495_ANNO.html) `#ENTITY` `String(3)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.extensibility.extensible`](ABENCDS_1159849682_ANNO.html) `#ENTITY` \\
\\
`#SERVICE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.extensibility.quota.maximumBytes`](ABENCDS_699341645-_ANNO.html) `#ENTITY` `Integer` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.extensibility.quota.maximumFields`](ABENCDS_1345726382_ANNO.html) `#ENTITY` `Integer` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.preserveKey`](ABENCDS_450773322_ANNO.html) `#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.sqlViewAppendName`](ABENCDS_873797739_ANNO.html) `#EXTEND_VIEW` `String(16)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.sqlViewName`](ABENCDS_253495944_ANNO.html) `#VIEW` `String(16)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.typeSpec.changeDocumentRelevant`](ABENCDS_2016919924-_ANNO.html) `#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.typeSpec.conversionExit`](ABENCDS_58258031_ANNO.html) `#ELEMENT` \\
\\
`#SIMPLE_TYPE` `String(5)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.typeSpec.outputLength`](ABENCDS_1569826112_ANNO.html) `#ELEMENT` \\
\\
`#SIMPLE_TYPE` `Integer` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AbapCatalog.viewEnhancementCategory[ ]`](ABENCDS_801468554-_ANNO.html) `#VIEW` `String(20)` `#GROUP_BY` \\
`#NONE` \\
`#PROJECTION_LIST` \\
`#UNION` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`AccessControl.authorizationCheck`](ABENCDS_1180334353_ANNO.html) `#EXTERNAL_ENTITY` \\
\\
`#HIERARCHY` \\
\\
`#TABLE_ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(20)` `#CHECK` \\
`#MANDATORY` \\
`#NOT_ALLOWED` \\
`#NOT_REQUIRED` \\
`#PRIVILEGED_ONLY` `#NOT_REQUIRED` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Aggregation.default`](ABENCDS_741130102_ANNO.html) `#ELEMENT` `String(30)` `#AVG` \\
`#COUNT_DISTINCT` \\
`#FORMULA` \\
`#MAX` \\
`#MIN` \\
`#NONE` \\
`#NOP` \\
`#SUM` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`API.element.decommissioningPlannedForYearMonth`](ABENCDS_1318352950-_ANNO.html) `#ELEMENT` `String(7)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`API.element.releaseState`](ABENCDS_1839662893-_ANNO.html) `#ELEMENT` `String(30)` `#DECOMMISSIONED` \\
`#DEPRECATED` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`API.element.successor`](ABENCDS_1922632877-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`ClientHandling.algorithm`](ABENCDS_1114072352_ANNO.html) `#TABLE_FUNCTION` \\
\\
`#VIEW` `String(20)` `#AUTOMATED` \\
`#NONE` \\
`#SESSION_VARIABLE` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ClientHandling.clientSafe`](ABENCDS_1549616294_ANNO.html) `#HIERARCHY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ClientHandling.type`](ABENCDS_613831553_ANNO.html) `#TABLE_ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(20)` `#CLIENT_DEPENDENT` \\
`#CLIENT_INDEPENDENT` \\
`#INHERITED` `#INHERITED` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`EndUserText.heading`](ABENCDS_92083118_ANNO.html) `#SIMPLE_TYPE` `String(55)` `-` `-` `X` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EndUserText.label`](ABENCDS_924137870_ANNO.html) `#ACCESSPOLICY` \\
\\
`#ASPECT` \\
\\
`#ELEMENT` \\
\\
`#ENTITY` \\
\\
`#ENTITY_ASPECT` \\
\\
`#ENUM_VALUE` \\
\\
`#EXTEND_VIEW` \\
\\
`#PARAMETER` \\
\\
`#PFCG_MAPPING` \\
\\
`#ROLE` \\
\\
`#SERVICE` \\
\\
`#SIMPLE_TYPE` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EndUserText.quickInfo`](ABENCDS_26162021_ANNO.html) `#ANNOTATE` \\
\\
`#ELEMENT` \\
\\
`#ENTITY_ASPECT` \\
\\
`#ENUM_VALUE` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `String(100)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Environment.sql.passValue`](ABENCDS_1000560355-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Environment.systemField`](ABENCDS_1937921420_ANNO.html) `#PARAMETER` `String(20)` `#CLIENT` \\
`#SYSTEM_DATE` \\
`#SYSTEM_LANGUAGE` \\
`#SYSTEM_TIME` \\
`#USER` \\
`#USER_DATE` \\
`#USER_TIMEZONE` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`MappingRole`](ABENCDS_984551930-_ANNO.html) `#ROLE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Metadata.allowExtensions`](ABENCDS_1985816297-_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Metadata.ignorePropagatedAnnotations`](ABENCDS_1433174898-_ANNO.html) `#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Metadata.layer`](ABENCDS_195182532_ANNO.html) `#ANNOTATE` `Integer` `#CORE` \\
`#CUSTOMER` \\
`#INDUSTRY` \\
`#LOCALIZATION` \\
`#PARTNER` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`ObjectModel.query.implementedBy`](ABENCDS_763589850-_ANNO.html) `#CUSTOM_ENTITY` \\
\\
`#ENTITY` `String(255)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.usageType.dataClass`](ABENCDS_1091668137-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` `String(30)` `#CUSTOMIZING` \\
`#MASTER` \\
`#META` \\
`#MIXED` \\
`#ORGANIZATIONAL` \\
`#TRANSACTIONAL` `#MIXED` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.usageType.serviceQuality`](ABENCDS_1255374604-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` `String(30)` `#A` \\
`#B` \\
`#C` \\
`#D` \\
`#P` \\
`#X` `#X` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.usageType.sizeCategory`](ABENCDS_1163152301_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` `String(3)` `#L` \\
`#M` \\
`#S` \\
`#XL` \\
`#XXL` `#S` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.virtualElementCalculatedBy`](ABENCDS_1555784333_ANNO.html) `#ELEMENT` `String(255)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Semantics.amount.currencyCode`](ABENCDS_689127610-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.currencyCode`](ABENCDS_1954553685-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.quantity.unitOfMeasure`](ABENCDS_653082254-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.unitOfMeasure`](ABENCDS_772720932-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_abap.html