---
title: "ABENCDS_ANNOTATIONS_FRMWRK_TABLES"
description: |
  ABENCDS_ANNOTATIONS_FRMWRK_TABLES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ANNOTATIONS_FRMWRK_TABLES.htm"
abapFile: "ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "class", "data", "types", "ABENCDS", "ANNOTATIONS", "FRMWRK", "TABLES"]
---

The following tables summarize the [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html) and [properties](ABENCDS_SAP_ANNO_PROPS.html) of all [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html) and [CDS DCL](ABENCDS_DCL_GLOSRY.html) in ABAP CDS. The first column contains links to more detailed information.

Only those annotations are shown that can be used in the current ABAP language version.

**Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`AccessControl.auditing.specification`](ABENCDS_956586857-_ANNO.html) `#TABLE_ENTITY` \\
\\
`#VIEW` `String(1000)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AccessControl.auditing.type`](ABENCDS_102413712-_ANNO.html) `#TABLE_ENTITY` \\
\\
`#VIEW` `String(20)` `#CUSTOM` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AccessControl.authorizationCheckMandatory[ ]`](ABENCDS_64119063-_ANNO.html) `#EXTERNAL_ENTITY` \\
\\
`#HIERARCHY` \\
\\
`#TABLE_ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(20)` `#DELETE` \\
`#INSERT` \\
`#SELECT` \\
`#UPDATE` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Aggregation.allowPrecisionLoss`](ABENCDS_1871137401-_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Aggregation.exception`](ABENCDS_1540548770_ANNO.html) `#ELEMENT` `String(30)` `#AVG` \\
`#COUNT` \\
`#COUNT_DISTINCT` \\
`#FIRST` \\
`#LAST` \\
`#MAX` \\
`#MEDIAN` \\
`#MIN` \\
`#NHA` \\
`#STANDARD_DEVIATION` \\
`#SUM` \\
`#VARIANCE` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Aggregation.referenceElement[ ]`](ABENCDS_1237865219-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Analytics.association.toDocumentStorage`](ABENCDS_235480066-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.constraints.filter`](ABENCDS_1043132933_ANNO.html) `#ELEMENT` `String(20)` `#UNIQUE_PER_CELL` \\
`#UNIQUE_PER_QUERY` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.dataCategory`](ABENCDS_568606453-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(20)` `#AGGREGATIONLEVEL` \\
`#CUBE` \\
`#DIMENSION` \\
`#DOCSTORE` \\
`#FACT` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.document.defaultAssociationToStorage`](ABENCDS_554014380_ANNO.html) `#VIEW` `AssociationRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.document.reference`](ABENCDS_355403503-_ANNO.html) `#ELEMENT` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.document.semantics`](ABENCDS_669838829-_ANNO.html) `#ELEMENT` `String(30)` `#DOCUMENT` \\
`#ID` \\
`#INFOPROV` \\
`#KYFNM` \\
`#OWNER` \\
`#PROPERTY` \\
`#QPROV` \\
`#SELECTIONS` \\
`#SESSION_ID` \\
`#STATUS` \\
`#SVA_INFOPROV` \\
`#TAG` \\
`#TIMESTAMP` \\
`#TYPE` \\
`#VERSION` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.document.serviceClassName`](ABENCDS_1209697303-_ANNO.html) `#ENTITY` \\
\\
`#VIEW` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.document.storageForEntity[ ]`](ABENCDS_732025797_ANNO.html) `#ENTITY` \\
\\
`#VIEW` `EntityRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.document.type`](ABENCDS_228695892-_ANNO.html) `#ELEMENT` `String(4)` `#DOC` \\
`#HIO` \\
`#HNM` \\
`#HNO` \\
`#SVA` \\
`#SVH` \\
`#TRA` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.excludeFromRuntimeExtensibility`](ABENCDS_814069367-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.hidden`](ABENCDS_2109597745_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` \\
\\
`#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.hints`](ABENCDS_111006225_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(1298)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.internalName`](ABENCDS_1635461139_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` \\
\\
`#VIEW` `String(30)` `#DEFAULT` \\
`#GLOBAL` \\
`#LOCAL` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.query`](ABENCDS_881299780-_ANNO.html) `#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.columns.hierarchicalDisplay.active`](ABENCDS_1791326552-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `Boolean` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.columns.hierarchicalDisplay.expandTo`](ABENCDS_31741450-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.columns.totalsLocation`](ABENCDS_922459005_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(10)` `#LEFT` \\
`#RIGHT` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.dataRetrieval`](ABENCDS_1374018734_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(30)` `#ALL_AT_ONCE` \\
`#ON_HIERARCHY_DRILLDOWN` \\
`#ON_NAVIGATION` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.displayOriginalInitialValue`](ABENCDS_33267603-_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` \\
\\
`#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.initialValueForMissingText`](ABENCDS_1445898426_ANNO.html) `#ENTITY` \\
\\
`#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.maxProcessingEffort`](ABENCDS_1037361749_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(20)` `#HIGH` \\
`#LOW` \\
`#MEDIUM` \\
`#UNLIMITED` `#HIGH` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.olapPushdown`](ABENCDS_1870969825-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(30)` `#MAX` \\
`#OFF` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.rows.hierarchicalDisplay.active`](ABENCDS_2067852096-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `Boolean` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.rows.hierarchicalDisplay.expandTo`](ABENCDS_1295952820_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.rows.totalsLocation`](ABENCDS_1838938954_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(10)` `#BOTTOM` \\
`#TOP` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.runtimeExtensibility.allowed`](ABENCDS_1999912159_ANNO.html) `#ENTITY` \\
\\
`#VIEW` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.valueHelp.supressInitialValue`](ABENCDS_1693486678_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.zeroValues.handling`](ABENCDS_2016857059-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(20)` `#HIDE` \\
`#HIDE_IF_ALL` \\
`#SHOW` `#SHOW` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.settings.zeroValues.hideOnAxis`](ABENCDS_1301366722-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(20)` `#COLUMNS` \\
`#ROWS` \\
`#ROWS_COLUMNS` `#ROWS_COLUMNS` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.technicalName`](ABENCDS_1915515413_ANNO.html) `#ENTITY` \\
\\
`#HIERARCHY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(28)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Analytics.variableCheck.implementedBy`](ABENCDS_1152620375-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` \\
\\
`#VIEW` `String(255)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`AnalyticsDetails.elimination.pair[ ].dimension1`](ABENCDS_1211955043-_ANNO.html) `#ELEMENT` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.elimination.pair[ ].dimension2`](ABENCDS_785013031_ANNO.html) `#ELEMENT` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.elimination.rule`](ABENCDS_1795438715-_ANNO.html) `#ELEMENT` `String(20)` `#ELIMINATE_IF_ALL` \\
`#ELIMINATE_IF_ONE` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.exceptionAggregationSteps[ ].exceptionAggregationBehavior`](ABENCDS_1873151419_ANNO.html) `#ELEMENT` `String(14)` `#AVG` \\
`#COUNT` \\
`#COUNT_DISTINCT` \\
`#FIRST` \\
`#LAST` \\
`#MAX` \\
`#MEDIAN` \\
`#MIN` \\
`#NHA` \\
`#STD` \\
`#SUM` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.exceptionAggregationSteps[ ].exceptionAggregationElements[ ]`](ABENCDS_273130070_ANNO.html) `#ELEMENT` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.axis`](ABENCDS_741079388-_ANNO.html) `#ELEMENT` `String(20)` `#COLUMNS` \\
`#FREE` \\
`#ROWS` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.cellReference.characteristicStructureElement`](ABENCDS_459989353-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.cellReference.measureStructureElement`](ABENCDS_678776589_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.collisionHandling.decimals`](ABENCDS_1413766833-_ANNO.html) `#ELEMENT` `String(20)` `#CONCURRENT` \\
`#DEFAULT` \\
`#THIS` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.collisionHandling.formula`](ABENCDS_1480232296_ANNO.html) `#ELEMENT` `String(20)` `#CONCURRENT` \\
`#DEFAULT` \\
`#THIS` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.collisionHandling.scaling`](ABENCDS_1267460590_ANNO.html) `#ELEMENT` `String(20)` `#CONCURRENT` \\
`#DEFAULT` \\
`#THIS` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.collisionHandling.semanticObject`](ABENCDS_1908756799_ANNO.html) `#ELEMENT` `String(20)` `#CONCURRENT` \\
`#DEFAULT` \\
`#THIS` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.decimals`](ABENCDS_1483832130_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.display`](ABENCDS_1081205336_ANNO.html) `#ELEMENT` `String(20)` `#KEY` \\
`#KEY_TEXT` \\
`#TEXT` \\
`#TEXT_KEY` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.displayHierarchy`](ABENCDS_900971148_ANNO.html) `#ELEMENT` `String(20)` `#FILTER` \\
`#FILTER_ONLY` \\
`#OFF` \\
`#ON` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.elementHierarchy.initiallyCollapsed`](ABENCDS_1595836893_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.elementHierarchy.parent`](ABENCDS_337532032-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.formula`](ABENCDS_730974330_ANNO.html) `#ELEMENT` `String(1298)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.hidden`](ABENCDS_1105022108_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.hierarchyAssociation`](ABENCDS_1808598258_ANNO.html) `#ELEMENT` `AssociationRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.hierarchyBinding[ ].type`](ABENCDS_1237616442_ANNO.html) `#ELEMENT` `String(12)` `#CONSTANT` \\
`#ELEMENT` \\
`#PARAMETER` \\
`#SYSTEM_FIELD` \\
`#USER_INPUT` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.hierarchyBinding[ ].value`](ABENCDS_1727265990-_ANNO.html) `#ELEMENT` `String(512)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.hierarchyBinding[ ].variableSequence`](ABENCDS_123301363_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.hierarchyInitialLevel`](ABENCDS_1919098161-_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.hierarchySettings.childNodePosition`](ABENCDS_416832717_ANNO.html) `#ELEMENT` `String(10)` `#ABOVE` \\
`#BELOW` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.hierarchySettings.hideNodeWithOneChild`](ABENCDS_68026887-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.hierarchySettings.hidePostedNodesValues`](ABENCDS_1179977864_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.ignoreFurtherFilter.forAllElements`](ABENCDS_1535828704_ANNO.html) `#ELEMENT` `Boolean` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.ignoreFurtherFilter.forElement[ ]`](ABENCDS_362709383_ANNO.html) `#ELEMENT` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.isCell`](ABENCDS_1556465713-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.keyDisplay`](ABENCDS_794884207_ANNO.html) `#ELEMENT` `String(30)` `#COMPOUND` \\
`#CONTEXT_DEPENDENT` \\
`#NOT_COMPOUND` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.onCharacteristicStructure`](ABENCDS_1799227771_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.resultValueHelpSource`](ABENCDS_1458726059-_ANNO.html) `#ELEMENT` `String(10)` `#DIMENSION` \\
`#QUERY` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.resultValuesSource`](ABENCDS_1572845230_ANNO.html) `#ELEMENT` `String(10)` `#CUBE` \\
`#DIMENSION` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.reverseSign`](ABENCDS_624410338_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.scaling`](ABENCDS_941665532_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.sortDirection`](ABENCDS_882208844-_ANNO.html) `#ELEMENT` `String(20)` `#ASC` \\
`#DESC` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.temporalJoin.derivationType`](ABENCDS_1919095871-_ANNO.html) `#ELEMENT` `String(20)` `#FIRST_DAY` \\
`#LAST_DAY` \\
`#OFFSET` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.temporalJoin.offsetOfDays`](ABENCDS_1885827575-_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.temporalJoin.timeElement`](ABENCDS_180977041_ANNO.html) `#ELEMENT` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.totals`](ABENCDS_1587493176_ANNO.html) `#ELEMENT` `String(20)` `#CONDITIONAL` \\
`#HIDE` \\
`#SHOW` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.query.variableSequence`](ABENCDS_1253171795-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Integer` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.defaultHierarchyNode.node[ ].element`](ABENCDS_870991642_ANNO.html) `#PARAMETER` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.defaultHierarchyNode.node[ ].value`](ABENCDS_72996958_ANNO.html) `#PARAMETER` `String(1024)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.defaultHierarchyNode.nodeType`](ABENCDS_1232610243-_ANNO.html) `#PARAMETER` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.defaultRanges[ ].high`](ABENCDS_1477228996-_ANNO.html) `#PARAMETER` `String(1024)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.defaultRanges[ ].low`](ABENCDS_672255340-_ANNO.html) `#PARAMETER` `String(1024)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.defaultRanges[ ].option`](ABENCDS_698268564-_ANNO.html) `#PARAMETER` `String(2)` `#BT` \\
`#CP` \\
`#EQ` \\
`#GE` \\
`#GT` \\
`#LE` \\
`#LT` \\
`#NB` \\
`#NE` \\
`#NP` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.defaultRanges[ ].sign`](ABENCDS_913820777-_ANNO.html) `#PARAMETER` `String(1)` `#E` \\
`#I` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.defaultValue`](ABENCDS_767114265-_ANNO.html) `#PARAMETER` `String(1024)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.defaultValueHigh`](ABENCDS_1200112008_ANNO.html) `#PARAMETER` `String(1024)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.hierarchyAssociation`](ABENCDS_2056058507-_ANNO.html) `#PARAMETER` `AssociationRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.hierarchyBinding[ ].type`](ABENCDS_989212596_ANNO.html) `#PARAMETER` `String(20)` `#CONSTANT` \\
`#PARAMETER` \\
`#SYSTEM_FIELD` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.hierarchyBinding[ ].value`](ABENCDS_1820352587-_ANNO.html) `#PARAMETER` `String(512)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.hierarchyBinding[ ].variableSequence`](ABENCDS_1614358293_ANNO.html) `#PARAMETER` `Integer` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.mandatory`](ABENCDS_1715668707-_ANNO.html) `#PARAMETER` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.multipleSelections`](ABENCDS_2020456524-_ANNO.html) `#PARAMETER` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.referenceElement`](ABENCDS_923050150-_ANNO.html) `#PARAMETER` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.selectionType`](ABENCDS_802091487_ANNO.html) `#PARAMETER` `String(20)` `#HIERARCHY_NODE` \\
`#INTERVAL` \\
`#RANGE` \\
`#SINGLE` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`AnalyticsDetails.variable.usageType`](ABENCDS_1412905580-_ANNO.html) `#PARAMETER` `String(20)` `#FILTER` \\
`#FORMULA` \\
`#PARAMETER` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Consumption.cacheSettings.refreshForbidden`](ABENCDS_1540815607_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.cacheSettings.usage`](ABENCDS_66994189_ANNO.html) `#ENTITY` `String(20)` `#CLIENT_CONTROLLED` \\
`#MANDATORY` \\
`#NOT_ALLOWED` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.cacheSettings.useNonTransactional`](ABENCDS_1542401044_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.dbHints[ ]`](ABENCDS_710938603-_ANNO.html) `#VIEW` `String(1298)` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.defaultValue`](ABENCDS_1396898918_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.binding[ ].targetElement`](ABENCDS_1904654104-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.binding[ ].targetParameter`](ABENCDS_1180704550_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.binding[ ].type`](ABENCDS_1193562477-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(12)` `#CONSTANT` \\
`#ELEMENT` \\
`#PARAMETER` \\
`#SYSTEM_FIELD` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.binding[ ].value`](ABENCDS_922158943_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(512)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.lookupEntity`](ABENCDS_351463783-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `EntityRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.pfcgMapping`](ABENCDS_1339521172-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.resultAggregation`](ABENCDS_1413788360-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `#AVG` \\
`#COUNT_DISTINCT` \\
`#MAX` \\
`#MIN` \\
`#SUM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.resultAggregationHigh`](ABENCDS_1524598949_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `#AVG` \\
`#COUNT_DISTINCT` \\
`#MAX` \\
`#MIN` \\
`#SUM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.resultElement`](ABENCDS_913041005_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.resultElementHigh`](ABENCDS_2091380562_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.resultHierarchyNode.mapping[ ].hierarchyElement`](ABENCDS_1854637833_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.resultHierarchyNode.mapping[ ].lookupElement`](ABENCDS_1606829147_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.derivation.resultHierarchyNode.nodeTypeElement`](ABENCDS_2076986893_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.dynamicLabel.binding[ ].element`](ABENCDS_1346100757_ANNO.html) `#ELEMENT` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.dynamicLabel.binding[ ].format`](ABENCDS_1540292092-_ANNO.html) `#ELEMENT` `String(20)` `#KEY` \\
`#KEY_CONCATENATED` \\
`#KEY_INTERNAL` \\
`#TEXT` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.dynamicLabel.binding[ ].index`](ABENCDS_1633227914_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.dynamicLabel.binding[ ].length`](ABENCDS_2079780457_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.dynamicLabel.binding[ ].offset`](ABENCDS_595704331_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.dynamicLabel.binding[ ].parameter`](ABENCDS_31561499-_ANNO.html) `#ELEMENT` `ParameterRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.dynamicLabel.binding[ ].replaceWith`](ABENCDS_874563402-_ANNO.html) `#ELEMENT` `String(11)` `#DIFFERENCE` \\
`#HIGH` \\
`#LOW` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.dynamicLabel.label`](ABENCDS_456525016-_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.businessDate.at`](ABENCDS_657148619_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.defaultHierarchyNode.node[ ].element`](ABENCDS_1645754370_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.defaultHierarchyNode.node[ ].value`](ABENCDS_1562025248-_ANNO.html) `#ELEMENT` `String(512)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.defaultHierarchyNode.nodeType`](ABENCDS_1532918077_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.defaultValue`](ABENCDS_467685227-_ANNO.html) `#ELEMENT` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.defaultValueHigh`](ABENCDS_1959431186_ANNO.html) `#ELEMENT` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.hidden`](ABENCDS_250664068_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.hierarchyAssociation`](ABENCDS_1285144265-_ANNO.html) `#ELEMENT` `AssociationRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.hierarchyBinding[ ].type`](ABENCDS_1575871936-_ANNO.html) `#ELEMENT` `String(12)` `#CONSTANT` \\
`#ELEMENT` \\
`#PARAMETER` \\
`#SYSTEM_FIELD` \\
`#USER_INPUT` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.hierarchyBinding[ ].value`](ABENCDS_691490181_ANNO.html) `#ELEMENT` `String(512)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.hierarchyBinding[ ].variableSequence`](ABENCDS_835409933_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.mandatory`](ABENCDS_1041639879-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.multipleSelections`](ABENCDS_370562965-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.filter.selectionType`](ABENCDS_1846298436-_ANNO.html) `#ELEMENT` `String(20)` `#HIERARCHY_NODE` \\
`#INTERVAL` \\
`#RANGE` \\
`#SINGLE` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.hidden`](ABENCDS_207868793_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.hierarchyNodeSelection.defaultHierarchyNode.node[ ].element`](ABENCDS_165233041_ANNO.html) `#PARAMETER` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.hierarchyNodeSelection.defaultHierarchyNode.node[ ].value`](ABENCDS_2133955186-_ANNO.html) `#PARAMETER` `String(512)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.hierarchyNodeSelection.defaultHierarchyNode.nodeType`](ABENCDS_1690282172-_ANNO.html) `#PARAMETER` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.hierarchyNodeSelection.hierarchyBinding[ ].type`](ABENCDS_1142889310-_ANNO.html) `#PARAMETER` `String(12)` `#CONSTANT` \\
`#ELEMENT` \\
`#PARAMETER` \\
`#SYSTEM_FIELD` \\
`#USER_INPUT` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.hierarchyNodeSelection.hierarchyBinding[ ].value`](ABENCDS_1730821167_ANNO.html) `#PARAMETER` `String(512)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.hierarchyNodeSelection.hierarchyBinding[ ].variableSequence`](ABENCDS_1510613406_ANNO.html) `#PARAMETER` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.hierarchyNodeSelection.hierarchyElement`](ABENCDS_1535740973-_ANNO.html) `#PARAMETER` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.hierarchyNodeSelection.multipleSelections`](ABENCDS_1394995008_ANNO.html) `#PARAMETER` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.ranked`](ABENCDS_443217666_ANNO.html) `#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.semanticObject`](ABENCDS_226548257-_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` \\
\\
`#PARAMETER` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.semanticObjectMapping.additionalBinding[ ].element`](ABENCDS_1706614704_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.semanticObjectMapping.additionalBinding[ ].localElement`](ABENCDS_745512240-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.semanticObjectMapping.element`](ABENCDS_1783365650_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefault.binding.usage`](ABENCDS_27509916-_ANNO.html) `#ELEMENT` `String(30)` `#FILTER` \\
`#FILTER_AND_DISPLAY` \\
`#FILTER_AND_RESULT` \\
`#RESULT` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefault.display`](ABENCDS_1864856196-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefault.fetchValues`](ABENCDS_884538153-_ANNO.html) `#ENTITY` `String(30)` `#AUTOMATICALLY_WHEN_DISPLAYED` \\
`#ON_EXPLICIT_REQUEST` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefault.initialValueIsSignificant`](ABENCDS_1455457562-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].additionalBinding[ ].element`](ABENCDS_805715173_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].additionalBinding[ ].localConstant`](ABENCDS_1228689791-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(255)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].additionalBinding[ ].localElement`](ABENCDS_274352458-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].additionalBinding[ ].localParameter`](ABENCDS_945672507_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `ParameterRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].additionalBinding[ ].parameter`](ABENCDS_1532597711-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].additionalBinding[ ].usage`](ABENCDS_1441351652_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(30)` `#FILTER` \\
`#FILTER_AND_DISPLAY` \\
`#FILTER_AND_RESULT` \\
`#RESULT` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].distinctValues`](ABENCDS_2114743873_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].enabled`](ABENCDS_517749277_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].entity.element`](ABENCDS_1864468220_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].entity.name`](ABENCDS_1955238469-_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` \\
\\
`#PARAMETER` `EntityRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].label`](ABENCDS_1197602852-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].presentationVariantQualifier`](ABENCDS_1501489672_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].qualifier`](ABENCDS_431826238-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Consumption.valueHelpDefinition[ ].useForValidation`](ABENCDS_1546657336_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`DataIntegration.dataProduct.category`](ABENCDS_698663424_ANNO.html) `#SERVICE` `String(30)` `#ANALYTICAL` \\
`#BUSINESS_OBJECT` \\
`#OTHER` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`DataIntegration.dataProduct.outputPorts[ ].service`](ABENCDS_458873111-_ANNO.html) `#SERVICE` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`DataIntegration.dataProduct.release.successors[ ].service`](ABENCDS_238239693-_ANNO.html) `#SERVICE` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`DataIntegration.dataProduct.release.version.major`](ABENCDS_1329702853_ANNO.html) `#SERVICE` `Integer` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`DataIntegration.dataProduct.release.version.minor`](ABENCDS_1912854538-_ANNO.html) `#SERVICE` `Integer` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`DataIntegration.dataProduct.release.version.patch`](ABENCDS_1872835334-_ANNO.html) `#SERVICE` `Integer` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`DataIntegration.dataProduct.type`](ABENCDS_1407986582-_ANNO.html) `#SERVICE` `String(20)` `#BASE` \\
`#DERIVED` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`DataIntegration.deltaReplication.ignoredDataSources[ ]`](ABENCDS_1249954665_ANNO.html) `#VIEW` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`DataIntegration.deltaReplication.intended`](ABENCDS_994227313-_ANNO.html) `#VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`DefaultAggregation`](ABENCDS_1815801967_ANNO.html) `#ELEMENT` `String(30)` `#AVG` \\
`#COUNT` \\
`#COUNT_DISTINCT` \\
`#FORMULA` \\
`#MAX` \\
`#MIN` \\
`#NONE` \\
`#SUM` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`EnterpriseSearch.filteringAttribute.caseInsensitiveAggregation`](ABENCDS_821107140_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringAttribute.considerNullValues`](ABENCDS_1653445419-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringAttribute.default`](ABENCDS_790523918_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringAttribute.displayPosition`](ABENCDS_107008934-_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.caseInsensitiveAggregation`](ABENCDS_2023162591-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.collapse`](ABENCDS_211393441-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.complexFilter`](ABENCDS_292724122_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.considerNullValues`](ABENCDS_546378851_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.dateIntervalDefinition`](ABENCDS_1899861934_ANNO.html) `#ELEMENT` `String(10)` `#FIVE_YEARS` \\
`#ONE_YEAR` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.default`](ABENCDS_1873115543_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.displayPosition`](ABENCDS_1949728172_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.iconUrl`](ABENCDS_1916299268_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.noIntervals`](ABENCDS_743834510_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.numberOfValues`](ABENCDS_826819764_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.order.by`](ABENCDS_550889622_ANNO.html) `#ELEMENT` `String(20)` `#FILTER_ELEMENT_LABEL` \\
`#FILTER_ELEMENT_VALUE` \\
`#NUMBER_OF_HITS` `#NUMBER_OF_HITS` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.order.byReference`](ABENCDS_1002432260_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.filteringFacet.order.direction`](ABENCDS_328055812_ANNO.html) `#ELEMENT` `String(4)` `#ASC` \\
`#DESC` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.freeStyleField.importance`](ABENCDS_525210926-_ANNO.html) `#ELEMENT` `String(6)` `#HIGH` \\
`#LOW` \\
`#MEDIUM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.freeStyleField.withAutoCompletion`](ABENCDS_1827692517-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.model`](ABENCDS_1280040647_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.modelName`](ABENCDS_25459512-_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.modelNamePlural`](ABENCDS_1749113809_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.navigation.intentBased.semanticObject`](ABENCDS_1434397866-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.navigation.mailApp`](ABENCDS_772988979_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.navigation.telephoneApp`](ABENCDS_1121305493_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.navigation.urlBased.urlField`](ABENCDS_978621620-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.arrayAlternativeNames[ ].alternativeName`](ABENCDS_228093718_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` `String(128)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.boolean.falseValue`](ABENCDS_1022957433_ANNO.html) `#ELEMENT` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.boolean.trueValue`](ABENCDS_1488939870-_ANNO.html) `#ELEMENT` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.boolean.unknownValue`](ABENCDS_908968922_ANNO.html) `#ELEMENT` `String(30)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.compoundElements[ ].arrayAlternativeNames[ ].alternativeName`](ABENCDS_555084622-_ANNO.html) `#ENTITY` `String(128)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.compoundElements[ ].elements[ ]`](ABENCDS_1004946012_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.compoundElements[ ].name`](ABENCDS_1344331421_ANNO.html) `#ENTITY` `String(128)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.notRelevant`](ABENCDS_689480502_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.valueEnumeration.entityBased.codeElement`](ABENCDS_1808548897-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.valueEnumeration.entityBased.entity`](ABENCDS_794742634_ANNO.html) `#ELEMENT` `EntityRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.valueEnumeration.entityBased.textElement`](ABENCDS_29787506-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.valueEnumeration.standard`](ABENCDS_2086819586-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.valueExamples[ ]`](ABENCDS_1912468767_ANNO.html) `#ELEMENT` `String(128)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.variantElements[ ].arrayAlternativeNames[ ].alternativeName`](ABENCDS_1582337566_ANNO.html) `#ENTITY` `String(128)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.variantElements[ ].elements[ ]`](ABENCDS_735964257-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.nls.variantElements[ ].name`](ABENCDS_1677138952-_ANNO.html) `#ENTITY` `String(128)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.responseField.contactPhoto`](ABENCDS_518284083_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.responseField.longText`](ABENCDS_321204668_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.responseField.standard.displayPosition`](ABENCDS_1423781203_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.responseField.thumbNail`](ABENCDS_949259184_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.resultItemKey[ ]`](ABENCDS_1933209145_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.title.subTitleField`](ABENCDS_1387304987_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`EnterpriseSearch.title.titleField`](ABENCDS_1589352869_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Event.context.attribute`](ABENCDS_2123008750-_ANNO.html) `#ELEMENT` `String(20)` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Event.context.position`](ABENCDS_123886785-_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Event.element.externalName`](ABENCDS_1689242704_ANNO.html) `#ELEMENT` `String(128)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Event.previousValue.element`](ABENCDS_207123953_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Event.qualifiesEventType`](ABENCDS_992525611_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Event.raisedAt.dateTime`](ABENCDS_829829382_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Event.sapObjectNodeTypeKey[ ].aliases[ ]`](ABENCDS_816706202_ANNO.html) `#ENTITY` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Event.sapObjectNodeTypeKey[ ].element`](ABENCDS_788469658_ANNO.html) `#ENTITY` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`ObjectModel.association.toDerivationFunction`](ABENCDS_1631540097_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.association.toHierarchy`](ABENCDS_556934736-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.collectiveValueHelp.for.element`](ABENCDS_91716332-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.dataCategory`](ABENCDS_1108938853-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` `String(30)` `#HIERARCHY` \\
`#TEXT` \\
`#VALUE_HELP` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.filter.enabled`](ABENCDS_511174217_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.foreignKey.association`](ABENCDS_339592116-_ANNO.html) `#ELEMENT` `AssociationRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.leadingEntity.name`](ABENCDS_472801206-_ANNO.html) `#SERVICE` `EntityRef` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.modelingPattern`](ABENCDS_987989212_ANNO.html) `#ENTITY` `String(60)` `#ANALYTICAL_CUBE` \\
`#ANALYTICAL_DIMENSION` \\
`#ANALYTICAL_DOCUMENT_STORE` \\
`#ANALYTICAL_FACT` \\
`#ANALYTICAL_KPI` \\
`#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE` \\
`#ANALYTICAL_QUERY` \\
`#COLLECTIVE_VALUE_HELP` \\
`#DATA_STRUCTURE` \\
`#DERIVATION_FUNCTION` \\
`#ENTERPRISE_SEARCH_PROVIDER` \\
`#EXTERNAL_DATA_PROVIDER` \\
`#LANGUAGE_DEPENDENT_TEXT` \\
`#NONE` \\
`#OUTPUT_EMAIL_DATA_PROVIDER` \\
`#OUTPUT_FORM_DATA_PROVIDER` \\
`#OUTPUT_PARAMETER_DETERMINATION_DATA_SOURCE` \\
`#PARENT_CHILD_HIERARCHY_NODE_PROVIDER` \\
`#SITUATION_ANCHOR` \\
`#SITUATION_DATACONTEXT` \\
`#SITUATION_TRIGGER` \\
`#TRANSACTIONAL_ENTITY` \\
`#TRANSACTIONAL_INTERFACE` \\
`#TRANSACTIONAL_PROJECTED_ENTITY` \\
`#TRANSACTIONAL_QUERY` \\
`#UNIT_CONVERION_RATE` \\
`#VALUE_HELP_PROVIDER` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.query.combinedCountAndDataRetrievalEnabled`](ABENCDS_1541735823-_ANNO.html) `#CUSTOM_ENTITY` \\
\\
`#ENTITY` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.representativeKey`](ABENCDS_1426106406_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` `KeyElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.resultSet.sizeCategory`](ABENCDS_1776194829_ANNO.html) `#CUSTOM_ENTITY` \\
\\
`#ENTITY` \\
\\
`#TABLE_FUNCTION` `String(3)` `#XS` \\
`#XXS` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.sapObjectNodeType.name`](ABENCDS_83620759-_ANNO.html) `#ENTITY` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.sapObjectNodeTypeReference`](ABENCDS_1392253137-_ANNO.html) `#ELEMENT` \\
\\
`#SIMPLE_TYPE` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.semanticKey[ ]`](ABENCDS_969786454-_ANNO.html) `#ENTITY` \\
\\
`#TABLE_FUNCTION` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.sort.enabled`](ABENCDS_953677833-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.sort.transformedBy`](ABENCDS_257610249-_ANNO.html) `#ELEMENT` `String(255)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.supportedCapabilities[ ]`](ABENCDS_684104273-_ANNO.html) `#ENTITY` `String(60)` `#ANALYTICAL_DIMENSION` \\
`#ANALYTICAL_DOCUMENT_STORE` \\
`#ANALYTICAL_KPI` \\
`#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE` \\
`#ANALYTICAL_PROVIDER` \\
`#ANALYTICAL_QUERY` \\
`#CDS_MODELING_ASSOCIATION_TARGET` \\
`#CDS_MODELING_DATA_SOURCE` \\
`#COLLECTIVE_VALUE_HELP` \\
`#DATA_STRUCTURE` \\
`#DERIVATION_FUNCTION` \\
`#ENTERPRISE_SEARCH_PROVIDER` \\
`#EXTERNAL_DATA_PROVIDER` \\
`#EXTRACTION_DATA_SOURCE` \\
`#KEY_USER_COPYING_TEMPLATE` \\
`#LANGUAGE_DEPENDENT_TEXT` \\
`#ODM_COMPLIANT_PROVIDER` \\
`#OUTPUT_EMAIL_DATA_PROVIDER` \\
`#OUTPUT_FORM_DATA_PROVIDER` \\
`#OUTPUT_PARAMETER_DETERMINATION_DATA_SOURCE` \\
`#PARENT_CHILD_HIERARCHY_NODE_PROVIDER` \\
`#SEARCHABLE_ENTITY` \\
`#SITUATION_ANCHOR` \\
`#SITUATION_DATACONTEXT` \\
`#SITUATION_TRIGGER` \\
`#SQL_DATA_SOURCE` \\
`#TRANSACTIONAL_PROVIDER` \\
`#UI_PROVIDER_PROJECTION_SOURCE` \\
`#UNIT_CONVERION_RATE` \\
`#VALUE_HELP_PROVIDER` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.text.association`](ABENCDS_155024245-_ANNO.html) `#ELEMENT` `AssociationRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.text.control`](ABENCDS_81808902-_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` `String(60)` `#ASSOCIATED_TEXT_UI_HIDDEN` \\
`#NONE` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.text.element[ ]`](ABENCDS_1468318600_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.text.reference.association`](ABENCDS_1465379351_ANNO.html) `#ELEMENT` `AssociationRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.unitConversionRate.association`](ABENCDS_486564725-_ANNO.html) `#ELEMENT` `AssociationRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`ObjectModel.value.derivedFrom[ ]`](ABENCDS_777237863_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`OData.action[ ].localName`](ABENCDS_452750455_ANNO.html) `#ENTITY` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`OData.action[ ].name`](ABENCDS_99617042_ANNO.html) `#ENTITY` `String(128)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`OData.entitySet.name`](ABENCDS_814310721-_ANNO.html) `#ENTITY` `String(30)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`OData.entityType.name`](ABENCDS_1422061889-_ANNO.html) `#ENTITY` `String(128)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`OData.etag`](ABENCDS_1179260535_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`OData.hierarchy.recursiveHierarchy[ ].entity.name`](ABENCDS_253752354-_ANNO.html) `#ENTITY` `EntityRef` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`OData.property.name`](ABENCDS_311850322-_ANNO.html) `#ELEMENT` `String(128)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`OData.property.valueControl`](ABENCDS_1730876588_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`OData.schema.name`](ABENCDS_1996983346-_ANNO.html) `#SERVICE` `String(128)` `-` `-` `-` `-` `RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Search.defaultSearchElement`](ABENCDS_1489485690-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Search.fuzzinessThreshold`](ABENCDS_294491798-_ANNO.html) `#ELEMENT` `Decimal(3,2)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Search.mode`](ABENCDS_1895951254-_ANNO.html) `#ELEMENT` `String(20)` `#IDENTIFIER` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Search.ranking`](ABENCDS_1594409060-_ANNO.html) `#ELEMENT` `String(6)` `#HIGH` \\
`#LOW` \\
`#MEDIUM` `#MEDIUM` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Search.searchable`](ABENCDS_1567884046_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Search.termMappingDictionary`](ABENCDS_568724386-_ANNO.html) `#ELEMENT` `String(128)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Search.termMappingListId[ ]`](ABENCDS_1460214714_ANNO.html) `#ELEMENT` `String(32)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Search.textIndex.required`](ABENCDS_284009624_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Semantics.address.city`](ABENCDS_1461511500_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.address.country`](ABENCDS_266976788-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.address.label`](ABENCDS_1342434817_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.address.number`](ABENCDS_1327030582_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.address.postBox`](ABENCDS_1102495668-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.address.region`](ABENCDS_689303788-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.address.street`](ABENCDS_694562234_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.address.streetNoNumber`](ABENCDS_15352966-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.address.subRegion`](ABENCDS_1287496915_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.address.type[ ]`](ABENCDS_157700015-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `String(10)` `#HOME` \\
`#OTHER` \\
`#PREF` \\
`#WORK` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.address.zipCode`](ABENCDS_1448814198_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.baseUnitOfMeasure`](ABENCDS_2097062483-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.businessDate.at`](ABENCDS_845229671-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.businessDate.from`](ABENCDS_1488069366_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.businessDate.to`](ABENCDS_1884225121_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.dayOfMonth`](ABENCDS_493560921_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.dayOfYear`](ABENCDS_1867100602_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.halfyear`](ABENCDS_82821257-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.month`](ABENCDS_1974309554-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.quarter`](ABENCDS_177548655_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.week`](ABENCDS_1677800518_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.year`](ABENCDS_2066141519-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.yearHalfyear`](ABENCDS_1248825398-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.yearMonth`](ABENCDS_7695013-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.yearQuarter`](ABENCDS_1907964787-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.calendar.yearWeek`](ABENCDS_698696316-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.conversionRate.denominator`](ABENCDS_166770316_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.conversionRate.numerator`](ABENCDS_834051776-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.dateTime`](ABENCDS_358510380_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.durationInDays`](ABENCDS_1424766515-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.durationInHours`](ABENCDS_883019560-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.durationInMinutes`](ABENCDS_189899413-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.durationInSeconds`](ABENCDS_2064850478_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.address`](ABENCDS_1631214101_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.bcc`](ABENCDS_90607315_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.body`](ABENCDS_1570788266-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.cc`](ABENCDS_1890091459_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.from`](ABENCDS_1058208108-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.keywords`](ABENCDS_1565627958_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.received`](ABENCDS_1046616751_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.sender`](ABENCDS_765473691_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.subject`](ABENCDS_1749414930-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.to`](ABENCDS_2090682750_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.eMail.type[ ]`](ABENCDS_181800755-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `String(10)` `#HOME` \\
`#OTHER` \\
`#PREF` \\
`#WORK` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.fiscal.dayOfYear`](ABENCDS_1919799078-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.fiscal.period`](ABENCDS_950905845-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.fiscal.quarter`](ABENCDS_141738638-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.fiscal.week`](ABENCDS_1976141743-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.fiscal.year`](ABENCDS_1794007718_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.fiscal.yearPeriod`](ABENCDS_1656506917-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.fiscal.yearQuarter`](ABENCDS_1896152647_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.fiscal.yearVariant`](ABENCDS_1664704275-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.fiscal.yearWeek`](ABENCDS_1247688371-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.imageUrl`](ABENCDS_1321146933-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.language`](ABENCDS_230394003-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.largeObject.acceptableMimeTypes[ ]`](ABENCDS_514907485_ANNO.html) `#ELEMENT` `String(255)` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.largeObject.cacheControl.maxAge`](ABENCDS_1095859513-_ANNO.html) `#ELEMENT` `String(30)` `#LONG` \\
`#MEDIUM` \\
`#SHORT` \\
`#VERY_LONG` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.largeObject.contentDispositionPreference`](ABENCDS_362794121_ANNO.html) `#ELEMENT` `String(30)` `#ATTACHMENT` \\
`#INLINE` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.largeObject.fileName`](ABENCDS_305473728_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.largeObject.mimeType`](ABENCDS_1459539484_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.mimeType`](ABENCDS_26368417-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.name.additionalName`](ABENCDS_1167533843-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.name.familyName`](ABENCDS_1249035756_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.name.fullName`](ABENCDS_1394730853_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.name.givenName`](ABENCDS_221475067-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.name.jobTitle`](ABENCDS_1382573248_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.name.nickName`](ABENCDS_1674339503_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.name.prefix`](ABENCDS_1789297569_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.name.suffix`](ABENCDS_1286046449_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.nullValueIndicatorFor`](ABENCDS_404676902-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.organization.name`](ABENCDS_39683004_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.organization.role`](ABENCDS_186087376_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.organization.unit`](ABENCDS_2134511127-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.quantity.unitOfMeasureIsoCode`](ABENCDS_864612737-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.quantity.unitOfMeasureSapCode`](ABENCDS_1552454084-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.signReversalIndicator`](ABENCDS_1718413646-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.systemDateTime.createdAt`](ABENCDS_982060907_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.systemDateTime.lastChangedAt`](ABENCDS_1631854850-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.systemDateTime.localInstanceLastChangedAt`](ABENCDS_425922347-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.telephone.type[ ]`](ABENCDS_581749929-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `String(10)` `#CELL` \\
`#FAX` \\
`#HOME` \\
`#PAGER` \\
`#PREF` \\
`#TEXT` \\
`#TEXT_PHONE` \\
`#VIDEO` \\
`#VOICE` \\
`#WORK` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.text`](ABENCDS_1085868017_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.timeZone`](ABENCDS_1314120847-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.timeZoneReference`](ABENCDS_1144633199-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `ElementRef` `-` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.user.createdBy`](ABENCDS_1660126530_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.user.lastChangedBy`](ABENCDS_886796743_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.user.localInstanceLastChangedBy`](ABENCDS_1906771207_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`Semantics.uuid`](ABENCDS_1437732720-_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` \\
\\
`#SIMPLE_TYPE` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`UI.adaptationHidden`](ABENCDS_914962098_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.headLine.criticality`](ABENCDS_1695349266_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.headLine.criticalityRepresentation`](ABENCDS_1730511305_ANNO.html) `#ENTITY` `String(12)` `#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.headLine.iconUrl`](ABENCDS_567007397-_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.headLine.label`](ABENCDS_1864604074_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.headLine.targetElement`](ABENCDS_1837789293_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.headLine.type`](ABENCDS_1676199671_ANNO.html) `#ENTITY` `String(40)` `#STANDARD` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.headLine.url`](ABENCDS_402108909_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.headLine.value`](ABENCDS_2096337270_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.imageUrl`](ABENCDS_2105013861-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.mainInfo.criticality`](ABENCDS_1791884454_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.mainInfo.criticalityRepresentation`](ABENCDS_1372579104-_ANNO.html) `#ENTITY` `String(12)` `#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.mainInfo.iconUrl`](ABENCDS_276189127_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.mainInfo.label`](ABENCDS_977752413_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.mainInfo.targetElement`](ABENCDS_71348517_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.mainInfo.type`](ABENCDS_33955392_ANNO.html) `#ENTITY` `String(40)` `#STANDARD` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.mainInfo.url`](ABENCDS_1831807693-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.mainInfo.value`](ABENCDS_697784705_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.secondaryInfo.criticality`](ABENCDS_1111520315-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.secondaryInfo.criticalityRepresentation`](ABENCDS_1998465181_ANNO.html) `#ENTITY` `String(12)` `#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.secondaryInfo.iconUrl`](ABENCDS_1794291622_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.secondaryInfo.label`](ABENCDS_1762658721-_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.secondaryInfo.targetElement`](ABENCDS_2064532820-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.secondaryInfo.type`](ABENCDS_374889579_ANNO.html) `#ENTITY` `String(40)` `#STANDARD` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.secondaryInfo.url`](ABENCDS_842092241-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.secondaryInfo.value`](ABENCDS_2059403645-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.title.criticality`](ABENCDS_192507551_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.title.criticalityRepresentation`](ABENCDS_959692017_ANNO.html) `#ENTITY` `String(12)` `#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.title.iconUrl`](ABENCDS_1168687851-_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.title.label`](ABENCDS_1332695577-_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.title.targetElement`](ABENCDS_348499779_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.title.type`](ABENCDS_1338816421-_ANNO.html) `#ENTITY` `String(40)` `#STANDARD` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.title.url`](ABENCDS_445507210_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.title.value`](ABENCDS_1556044485-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.badge.typeImageUrl`](ABENCDS_645917463_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].actions[ ].dataAction`](ABENCDS_1675165992-_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].actions[ ].invocationGrouping`](ABENCDS_962974385-_ANNO.html) `#ENTITY` `String(12)` `#CHANGE_SET` \\
`#ISOLATED` `#ISOLATED` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].actions[ ].label`](ABENCDS_1383487403_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].actions[ ].requiresContext`](ABENCDS_934268340-_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].actions[ ].semanticObject`](ABENCDS_508293081-_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].actions[ ].semanticObjectAction`](ABENCDS_1657074_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].actions[ ].type`](ABENCDS_290254702-_ANNO.html) `#ENTITY` `String(40)` `#FOR_ACTION` \\
`#FOR_INTENT_BASED_NAVIGATION` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].chartType`](ABENCDS_133180678-_ANNO.html) `#ENTITY` `String(40)` `#AREA` \\
`#AREA_STACKED` \\
`#AREA_STACKED_100` \\
`#BAR` \\
`#BAR_DUAL` \\
`#BAR_STACKED` \\
`#BAR_STACKED_100` \\
`#BAR_STACKED_DUAL` \\
`#BAR_STACKED_DUAL_100` \\
`#BUBBLE` \\
`#BULLET` \\
`#COLUMN` \\
`#COLUMN_DUAL` \\
`#COLUMN_STACKED` \\
`#COLUMN_STACKED_100` \\
`#COLUMN_STACKED_DUAL` \\
`#COLUMN_STACKED_DUAL_100` \\
`#COMBINATION` \\
`#COMBINATION_DUAL` \\
`#COMBINATION_STACKED` \\
`#COMBINATION_STACKED_DUAL` \\
`#DONUT` \\
`#DONUT_100` \\
`#HEAT_MAP` \\
`#HORIZONTAL_AREA` \\
`#HORIZONTAL_AREA_STACKED` \\
`#HORIZONTAL_AREA_STACKED_100` \\
`#HORIZONTAL_COMBINATION_DUAL` \\
`#HORIZONTAL_COMBINATION_STACKED` \\
`#HORIZONTAL_COMBINATION_STACKED_DUAL` \\
`#HORIZONTAL_WATERFALL` \\
`#LINE` \\
`#LINE_DUAL` \\
`#PIE` \\
`#RADAR` \\
`#SCATTER` \\
`#TREE_MAP` \\
`#VERTICAL_BULLET` \\
`#WATERFALL` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].description`](ABENCDS_830899058_ANNO.html) `#ENTITY` `String(120)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].dimensionAttributes[ ].dimension`](ABENCDS_1563888131-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].dimensionAttributes[ ].emphasizedValues[ ]`](ABENCDS_1802805886_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].dimensionAttributes[ ].role`](ABENCDS_921303495-_ANNO.html) `#ENTITY` `String(10)` `#CATEGORY` \\
`#CATEGORY2` \\
`#SERIES` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].dimensionAttributes[ ].valuesForSequentialColorLevels[ ]`](ABENCDS_1503083881_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].dimensions[ ]`](ABENCDS_869587742_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].measureAttributes[ ].asDataPoint`](ABENCDS_1033482556-_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].measureAttributes[ ].measure`](ABENCDS_1708578584_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].measureAttributes[ ].role`](ABENCDS_1869851323-_ANNO.html) `#ENTITY` `String(10)` `#AXIS_1` \\
`#AXIS_2` \\
`#AXIS_3` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].measureAttributes[ ].useSequentialColorLevels`](ABENCDS_479880989_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].measures[ ]`](ABENCDS_802559988-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].qualifier`](ABENCDS_834052954-_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.chart[ ].title`](ABENCDS_537532627-_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].actionGroupId`](ABENCDS_1636411679_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].criticality`](ABENCDS_467191905-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].criticalityRepresentation`](ABENCDS_693412069-_ANNO.html) `#ELEMENT` `String(12)` `#ONLY_ICON` \\
`#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].cssDefault.width`](ABENCDS_1829592951-_ANNO.html) `#ELEMENT` `String(20)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].dataAction`](ABENCDS_1567577492-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].determining`](ABENCDS_1786298792_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].emphasized`](ABENCDS_2077325348_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].exclude`](ABENCDS_679339088-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].groupLabel`](ABENCDS_1653713076-_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].hidden`](ABENCDS_1483608320_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].iconUrl`](ABENCDS_1271131525_ANNO.html) `#ELEMENT` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].importance`](ABENCDS_1827585618_ANNO.html) `#ELEMENT` `String(6)` `#HIGH` \\
`#LOW` \\
`#MEDIUM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].inline`](ABENCDS_1739020982-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].invocationGrouping`](ABENCDS_1858154951-_ANNO.html) `#ELEMENT` `String(12)` `#CHANGE_SET` \\
`#ISOLATED` `#ISOLATED` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].isCopyAction`](ABENCDS_893647883-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].isPartOfPreview`](ABENCDS_1961572830_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].label`](ABENCDS_1565071885_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].name`](ABENCDS_66759668_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].navigationAvailable`](ABENCDS_1932307658-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].position`](ABENCDS_1541300707-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].qualifier`](ABENCDS_1917677874_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].requiresContext`](ABENCDS_378626638-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].rowSpanForDuplicateValues`](ABENCDS_1996561677_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].semanticObject`](ABENCDS_1810848531_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].semanticObjectAction`](ABENCDS_1082094308_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].semanticObjectBinding[ ].element`](ABENCDS_1225023223_ANNO.html) `#ELEMENT` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].semanticObjectBinding[ ].localElement`](ABENCDS_1714201843-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].semanticObjectBinding[ ].localParameter`](ABENCDS_505983237-_ANNO.html) `#ELEMENT` `ParameterRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].targetElement`](ABENCDS_108177741_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].template`](ABENCDS_1970103659_ANNO.html) `#ELEMENT` `String(255)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].type`](ABENCDS_788036901-_ANNO.html) `#ELEMENT` `String(40)` `#AS_ADDRESS` \\
`#AS_CHART` \\
`#AS_CONNECTED_FIELDS` \\
`#AS_CONTACT` \\
`#AS_DATAPOINT` \\
`#AS_FIELDGROUP` \\
`#AS_PRESENTATION_VARIANT` \\
`#AS_SELECTION_PRESENTATION_VARIANT` \\
`#FOR_ACTION` \\
`#FOR_ACTION_GROUP` \\
`#FOR_INTENT_BASED_NAVIGATION` \\
`#STANDARD` \\
`#WITH_ACTION` \\
`#WITH_ACTION_GROUP` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].url`](ABENCDS_1169732948_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].value`](ABENCDS_1318654673_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.connectedFields[ ].valueQualifier`](ABENCDS_745516926_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.createHidden`](ABENCDS_2041993037-_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.criticalityLabels[ ].criticality`](ABENCDS_1635274103_ANNO.html) `#ELEMENT` `Integer` `#CRITICAL` \\
`#NEGATIVE` \\
`#POSITIVE` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.criticalityLabels[ ].label`](ABENCDS_1370873419-_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.criticalityLabels[ ].qualifier`](ABENCDS_1926435501-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].criticality`](ABENCDS_1237184411_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].criticalityRepresentation`](ABENCDS_2132440007-_ANNO.html) `#ELEMENT` `String(12)` `#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].emphasized`](ABENCDS_2038351282-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].hidden`](ABENCDS_1480481653-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].iconUrl`](ABENCDS_827725976_ANNO.html) `#ELEMENT` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].importance`](ABENCDS_1849754568-_ANNO.html) `#ELEMENT` `String(6)` `#HIGH` \\
`#LOW` \\
`#MEDIUM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].isPartOfPreview`](ABENCDS_1541044164_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].label`](ABENCDS_40443436-_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].qualifier`](ABENCDS_1089888552_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].rowSpanForDuplicateValues`](ABENCDS_558878255_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].semanticObject`](ABENCDS_903726639_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].semanticObjectAction`](ABENCDS_642868483_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].type`](ABENCDS_69083963_ANNO.html) `#ELEMENT` `String(40)` `#STANDARD` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].url`](ABENCDS_1012445558_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataFieldDefault[ ].value`](ABENCDS_297342712-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticality`](ABENCDS_348129968-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.acceptanceRangeHighValue`](ABENCDS_1706502036_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.acceptanceRangeLowValue`](ABENCDS_291174288_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.constantThresholds[ ].acceptanceRangeHighValue`](ABENCDS_600063752-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.constantThresholds[ ].acceptanceRangeLowValue`](ABENCDS_76967194-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.constantThresholds[ ].aggregationLevel[ ]`](ABENCDS_1993846012-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.constantThresholds[ ].deviationRangeHighValue`](ABENCDS_223598049_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.constantThresholds[ ].deviationRangeLowValue`](ABENCDS_672889410_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.constantThresholds[ ].toleranceRangeHighValue`](ABENCDS_505474560-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.constantThresholds[ ].toleranceRangeLowValue`](ABENCDS_953238141-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.deviationRangeHighValue`](ABENCDS_413093737-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.deviationRangeHighValueElement`](ABENCDS_1824666286_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.deviationRangeLowValue`](ABENCDS_835111482-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.deviationRangeLowValueElement`](ABENCDS_1327765704_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.improvementDirection`](ABENCDS_1759944807-_ANNO.html) `#ELEMENT` `String(8)` `#MAXIMIZE` \\
`#MINIMIZE` \\
`#TARGET` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.toleranceRangeHighValue`](ABENCDS_200046454_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.toleranceRangeHighValueElement`](ABENCDS_759632402_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.toleranceRangeLowValue`](ABENCDS_554496519_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityCalculation.toleranceRangeLowValueElement`](ABENCDS_830552989-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityRepresentation`](ABENCDS_1499292211-_ANNO.html) `#ELEMENT` `String(12)` `#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.criticalityValue`](ABENCDS_945760540-_ANNO.html) `#ELEMENT` `Integer` `#CRITICAL` \\
`#NEGATIVE` \\
`#POSITIVE` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.description`](ABENCDS_1852632786_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.forecastValue`](ABENCDS_93463976_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.hidden`](ABENCDS_1775339859_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.longDescription`](ABENCDS_1832891608-_ANNO.html) `#ELEMENT` `String(250)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.maximumValue`](ABENCDS_1463846906-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.minimumValue`](ABENCDS_952920300_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.qualifier`](ABENCDS_17739803-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.referencePeriod.description`](ABENCDS_989930274_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.referencePeriod.end`](ABENCDS_1032228177-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.referencePeriod.start`](ABENCDS_1256446419_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.responsible`](ABENCDS_1804694756-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.responsibleName`](ABENCDS_94559242_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.targetValue`](ABENCDS_1325645678_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.targetValueElement`](ABENCDS_977257222_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.title`](ABENCDS_1446080992-_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trend`](ABENCDS_1979958765_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trendCalculation.downDifference`](ABENCDS_922869099_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trendCalculation.downDifferenceElement`](ABENCDS_110061085-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trendCalculation.isRelativeDifference`](ABENCDS_557446502-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trendCalculation.referenceValue`](ABENCDS_2121687021-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trendCalculation.strongDownDifference`](ABENCDS_1521241200_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trendCalculation.strongDownDifferenceElement`](ABENCDS_191422664_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trendCalculation.strongUpDifference`](ABENCDS_1922359880-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trendCalculation.strongUpDifferenceElement`](ABENCDS_738304099-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trendCalculation.upDifference`](ABENCDS_1838184515-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.trendCalculation.upDifferenceElement`](ABENCDS_1061051370-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.valueFormat.numberOfFractionalDigits`](ABENCDS_311394813_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.valueFormat.scaleFactor`](ABENCDS_1863721227_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.visualization`](ABENCDS_1590835810-_ANNO.html) `#ELEMENT` `String(12)` `#BULLET_CHART` \\
`#DONUT` \\
`#NUMBER` \\
`#PROGRESS` \\
`#RATING` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.dataPoint.withCriticalityLabels`](ABENCDS_1921613471-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.defaultValue`](ABENCDS_1930292456_ANNO.html) `#ELEMENT` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.deleteHidden`](ABENCDS_723129678-_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.doNotCheckScaleOfMeasuredQuantity`](ABENCDS_1143047081_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].exclude`](ABENCDS_1182146754-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].feature`](ABENCDS_992195295-_ANNO.html) `#ELEMENT` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].hidden`](ABENCDS_950827159_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].id`](ABENCDS_2039744517-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].importance`](ABENCDS_1090436236-_ANNO.html) `#ELEMENT` `String(6)` `#HIGH` \\
`#LOW` \\
`#MEDIUM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].isMap`](ABENCDS_1579339872_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].isPartOfPreview`](ABENCDS_1187851329_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].isSummary`](ABENCDS_1070960628_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].label`](ABENCDS_799955090_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].parentId`](ABENCDS_124939291-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].position`](ABENCDS_1370539010-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].purpose`](ABENCDS_1670155180_ANNO.html) `#ELEMENT` `String(40)` `#FILTER` \\
`#HEADER` \\
`#OPERATION_PARAMETER` \\
`#QUICK_CREATE` \\
`#QUICK_VIEW` \\
`#STANDARD` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].qualifier`](ABENCDS_1262791765_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].targetElement`](ABENCDS_1424624683-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].targetQualifier`](ABENCDS_2033016862-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].type`](ABENCDS_824350749_ANNO.html) `#ELEMENT` `String(40)` `#ADDRESS_REFERENCE` \\
`#BADGE_REFERENCE` \\
`#CHART_REFERENCE` \\
`#COLLECTION` \\
`#CONTACT_REFERENCE` \\
`#DATAPOINT_REFERENCE` \\
`#FIELDGROUP_REFERENCE` \\
`#HEADERINFO_REFERENCE` \\
`#IDENTIFICATION_REFERENCE` \\
`#LINEITEM_REFERENCE` \\
`#NOTE_REFERENCE` \\
`#PRESENTATIONVARIANT_REFERENCE` \\
`#SELECTIONPRESENTATIONVARIANT_REFERENCE` \\
`#STATUSINFO_REFERENCE` \\
`#URL_REFERENCE` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.facet[ ].url`](ABENCDS_1253348002-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].actionGroupId`](ABENCDS_1829497181_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].criticality`](ABENCDS_779878154-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].criticalityRepresentation`](ABENCDS_662747725-_ANNO.html) `#ELEMENT` `String(12)` `#ONLY_ICON` \\
`#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].cssDefault.width`](ABENCDS_304305186_ANNO.html) `#ELEMENT` `String(20)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].dataAction`](ABENCDS_1274070716-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].determining`](ABENCDS_1608251073_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].emphasized`](ABENCDS_1833888524_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].exclude`](ABENCDS_514524285_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].groupLabel`](ABENCDS_1947089820-_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].hidden`](ABENCDS_2102483571_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].iconUrl`](ABENCDS_2098531768-_ANNO.html) `#ELEMENT` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].importance`](ABENCDS_2054237562_ANNO.html) `#ELEMENT` `String(6)` `#HIGH` \\
`#LOW` \\
`#MEDIUM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].inline`](ABENCDS_1117262279-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].invocationGrouping`](ABENCDS_1713184207_ANNO.html) `#ELEMENT` `String(12)` `#CHANGE_SET` \\
`#ISOLATED` `#ISOLATED` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].isCopyAction`](ABENCDS_18384578-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].isPartOfPreview`](ABENCDS_1065854645-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].label`](ABENCDS_231786943_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].navigationAvailable`](ABENCDS_654694452-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].position`](ABENCDS_1094519055_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].qualifier`](ABENCDS_2129584915-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].requiresContext`](ABENCDS_1576926503_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].rowSpanForDuplicateValues`](ABENCDS_2044004261_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].semanticObject`](ABENCDS_214828561-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].semanticObjectAction`](ABENCDS_490946706_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].semanticObjectBinding[ ].element`](ABENCDS_762944345-_ANNO.html) `#ELEMENT` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].semanticObjectBinding[ ].localElement`](ABENCDS_1314000956_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].semanticObjectBinding[ ].localParameter`](ABENCDS_964426032-_ANNO.html) `#ELEMENT` `ParameterRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].targetElement`](ABENCDS_183560463_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].type`](ABENCDS_1302662315_ANNO.html) `#ELEMENT` `String(40)` `#AS_ADDRESS` \\
`#AS_CHART` \\
`#AS_CONNECTED_FIELDS` \\
`#AS_CONTACT` \\
`#AS_DATAPOINT` \\
`#AS_FIELDGROUP` \\
`#AS_PRESENTATION_VARIANT` \\
`#AS_SELECTION_PRESENTATION_VARIANT` \\
`#FOR_ACTION` \\
`#FOR_ACTION_GROUP` \\
`#FOR_INTENT_BASED_NAVIGATION` \\
`#STANDARD` \\
`#WITH_ACTION` \\
`#WITH_ACTION_GROUP` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].url`](ABENCDS_298816368-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].value`](ABENCDS_503365987_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.fieldGroup[ ].valueQualifier`](ABENCDS_1263465086-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.description.criticality`](ABENCDS_1384914881_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.description.criticalityRepresentation`](ABENCDS_1830616392_ANNO.html) `#ENTITY` `String(12)` `#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.description.iconUrl`](ABENCDS_1082641577-_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.description.label`](ABENCDS_2034373157-_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.description.targetElement`](ABENCDS_402638790_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.description.type`](ABENCDS_1640398095-_ANNO.html) `#ENTITY` `String(40)` `#AS_CONNECTED_FIELDS` \\
`#STANDARD` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.description.url`](ABENCDS_1538601481-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.description.value`](ABENCDS_1787960057-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.description.valueQualifier`](ABENCDS_1444182200_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.imageUrl`](ABENCDS_343625352_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.title.criticality`](ABENCDS_600116933_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.title.criticalityRepresentation`](ABENCDS_1891168930-_ANNO.html) `#ENTITY` `String(12)` `#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.title.iconUrl`](ABENCDS_189616342_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.title.label`](ABENCDS_897370684_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.title.targetElement`](ABENCDS_421745529_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.title.type`](ABENCDS_962874121_ANNO.html) `#ENTITY` `String(40)` `#AS_CONNECTED_FIELDS` \\
`#STANDARD` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.title.url`](ABENCDS_1633332205-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.title.value`](ABENCDS_648856288_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.title.valueQualifier`](ABENCDS_230951473_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.typeImageUrl`](ABENCDS_939199532_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.typeName`](ABENCDS_852067256_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.headerInfo.typeNamePlural`](ABENCDS_24288459-_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.hidden`](ABENCDS_1308869518_ANNO.html) `#ELEMENT` \\
\\
`#PARAMETER` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].actionGroupId`](ABENCDS_172480914-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].criticality`](ABENCDS_1442091304_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].criticalityRepresentation`](ABENCDS_1659524627-_ANNO.html) `#ELEMENT` `String(12)` `#ONLY_ICON` \\
`#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].cssDefault.width`](ABENCDS_704915140_ANNO.html) `#ELEMENT` `String(20)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].dataAction`](ABENCDS_2061449559_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].determining`](ABENCDS_609523937-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].emphasized`](ABENCDS_1549866209-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].exclude`](ABENCDS_1360521922-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].hidden`](ABENCDS_287818999-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].iconUrl`](ABENCDS_849994507_ANNO.html) `#ELEMENT` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].importance`](ABENCDS_1264505495-_ANNO.html) `#ELEMENT` `String(6)` `#HIGH` \\
`#LOW` \\
`#MEDIUM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].inline`](ABENCDS_787386179_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].invocationGrouping`](ABENCDS_802004590-_ANNO.html) `#ELEMENT` `String(12)` `#CHANGE_SET` \\
`#ISOLATED` `#ISOLATED` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].isCopyAction`](ABENCDS_1626802564-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].isPartOfPreview`](ABENCDS_1070103529_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].label`](ABENCDS_1924256206-_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].navigationAvailable`](ABENCDS_845797895-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].position`](ABENCDS_1369941452-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].qualifier`](ABENCDS_821399706_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].requiresContext`](ABENCDS_1571954811-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].rowSpanForDuplicateValues`](ABENCDS_1019210747_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].semanticObject`](ABENCDS_1283009334_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].semanticObjectAction`](ABENCDS_1273358515_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].semanticObjectBinding[ ].element`](ABENCDS_1073216576-_ANNO.html) `#ELEMENT` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].semanticObjectBinding[ ].localElement`](ABENCDS_1357787778_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].semanticObjectBinding[ ].localParameter`](ABENCDS_1772280510_ANNO.html) `#ELEMENT` `ParameterRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].targetElement`](ABENCDS_1841093060-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].type`](ABENCDS_1239070146-_ANNO.html) `#ELEMENT` `String(40)` `#AS_ADDRESS` \\
`#AS_CHART` \\
`#AS_CONNECTED_FIELDS` \\
`#AS_CONTACT` \\
`#AS_DATAPOINT` \\
`#AS_FIELDGROUP` \\
`#AS_PRESENTATION_VARIANT` \\
`#AS_SELECTION_PRESENTATION_VARIANT` \\
`#FOR_ACTION` \\
`#FOR_ACTION_GROUP` \\
`#FOR_INTENT_BASED_NAVIGATION` \\
`#STANDARD` \\
`#WITH_ACTION` \\
`#WITH_ACTION_GROUP` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].url`](ABENCDS_1170563889-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].value`](ABENCDS_1633802514-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.identification[ ].valueQualifier`](ABENCDS_200925019_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticality`](ABENCDS_1421215833_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.acceptanceRangeHighValue`](ABENCDS_589836983_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.acceptanceRangeLowValue`](ABENCDS_403591873-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.constantThresholds[ ].acceptanceRangeHighValue`](ABENCDS_2063535132-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.constantThresholds[ ].acceptanceRangeLowValue`](ABENCDS_1936169370_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.constantThresholds[ ].aggregationLevel[ ]`](ABENCDS_1391479045-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.constantThresholds[ ].deviationRangeHighValue`](ABENCDS_2057445731-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.constantThresholds[ ].deviationRangeLowValue`](ABENCDS_776659098_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.constantThresholds[ ].toleranceRangeHighValue`](ABENCDS_1775311228_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.constantThresholds[ ].toleranceRangeLowValue`](ABENCDS_1048631461-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.deviationRangeHighValue`](ABENCDS_298576440_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.deviationRangeLowValue`](ABENCDS_599408365-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.improvementDirection`](ABENCDS_349205975-_ANNO.html) `#ELEMENT` `String(8)` `#MAXIMIZE` \\
`#MINIMIZE` \\
`#TARGET` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.toleranceRangeHighValue`](ABENCDS_45666855-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityCalculation.toleranceRangeLowValue`](ABENCDS_862979794_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityRepresentation`](ABENCDS_1683719252_ANNO.html) `#ELEMENT` `String(12)` `#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.criticalityValue`](ABENCDS_856025239_ANNO.html) `#ELEMENT` `Integer` `#CRITICAL` \\
`#NEGATIVE` \\
`#POSITIVE` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.description`](ABENCDS_773516325-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.forecastValue`](ABENCDS_391950281_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.hidden`](ABENCDS_653447383_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.longDescription`](ABENCDS_481597122-_ANNO.html) `#ELEMENT` `String(250)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.maximumValue`](ABENCDS_774092449-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.minimumValue`](ABENCDS_1102010805_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.referencePeriod.description`](ABENCDS_1476536-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.referencePeriod.end`](ABENCDS_1941432392_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.referencePeriod.start`](ABENCDS_1258714988_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.responsible`](ABENCDS_736589333_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.responsibleName`](ABENCDS_1948909084_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.targetValue`](ABENCDS_259374489-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.title`](ABENCDS_1432705155_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.trend`](ABENCDS_1968696498-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.trendCalculation.downDifference`](ABENCDS_165508112_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.trendCalculation.isRelativeDifference`](ABENCDS_2140945212-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.trendCalculation.referenceValue`](ABENCDS_1084946072-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.trendCalculation.strongDownDifference`](ABENCDS_67732014_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.trendCalculation.strongUpDifference`](ABENCDS_185650034_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.trendCalculation.upDifference`](ABENCDS_238794748-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.valueFormat.numberOfFractionalDigits`](ABENCDS_1773719941_ANNO.html) `#ELEMENT` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.valueFormat.scaleFactor`](ABENCDS_1025842294_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].dataPoint.visualization`](ABENCDS_1276948481-_ANNO.html) `#ELEMENT` `String(12)` `#BULLET_CHART` \\
`#DONUT` \\
`#NUMBER` \\
`#PROGRESS` \\
`#RATING` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].detail.alternativePresentationVariantQualifiers[ ]`](ABENCDS_44552114-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].detail.defaultPresentationVariantQualifier`](ABENCDS_1543997474_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].detail.semanticObject`](ABENCDS_566510180-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].detail.semanticObjectAction`](ABENCDS_1655633059_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].id`](ABENCDS_1717580298_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].qualifier`](ABENCDS_1774674454_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].selectionVariantQualifier`](ABENCDS_684578969_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.kpi[ ].shortDescription`](ABENCDS_78237851_ANNO.html) `#ELEMENT` `String(20)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].actionGroupId`](ABENCDS_1808225901_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].criticality`](ABENCDS_1309545091-_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].criticalityRepresentation`](ABENCDS_297561687_ANNO.html) `#ELEMENT` `String(12)` `#ONLY_ICON` \\
`#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].cssDefault.width`](ABENCDS_943223464-_ANNO.html) `#ELEMENT` `String(20)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].dataAction`](ABENCDS_1902929883_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].determining`](ABENCDS_1068374858_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].emphasized`](ABENCDS_1473399405-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].exclude`](ABENCDS_62243717_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].hidden`](ABENCDS_729364893-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].iconUrl`](ABENCDS_1611385424-_ANNO.html) `#ELEMENT` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].importance`](ABENCDS_1089309723-_ANNO.html) `#ELEMENT` `String(6)` `#HIGH` \\
`#LOW` \\
`#MEDIUM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].inline`](ABENCDS_347107881_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].invocationGrouping`](ABENCDS_1287795495_ANNO.html) `#ELEMENT` `String(12)` `#CHANGE_SET` \\
`#ISOLATED` `#ISOLATED` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].isCopyAction`](ABENCDS_2064820613-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].isPartOfPreview`](ABENCDS_1155581801_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].label`](ABENCDS_1726122579_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].navigationAvailable`](ABENCDS_1979814568_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].position`](ABENCDS_230265370-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].qualifier`](ABENCDS_1484012885_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].requiresContext`](ABENCDS_647666939-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].rowSpanForDuplicateValues`](ABENCDS_1340724159-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].semanticObject`](ABENCDS_705821188-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].semanticObjectAction`](ABENCDS_1462902374_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].semanticObjectBinding[ ].element`](ABENCDS_1108548272-_ANNO.html) `#ELEMENT` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].semanticObjectBinding[ ].localElement`](ABENCDS_1183216817_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].semanticObjectBinding[ ].localParameter`](ABENCDS_41307459_ANNO.html) `#ELEMENT` `ParameterRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].targetElement`](ABENCDS_205280831_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].type`](ABENCDS_347542779_ANNO.html) `#ELEMENT` `String(40)` `#AS_ADDRESS` \\
`#AS_CHART` \\
`#AS_CONNECTED_FIELDS` \\
`#AS_CONTACT` \\
`#AS_DATAPOINT` \\
`#AS_FIELDGROUP` \\
`#AS_PRESENTATION_VARIANT` \\
`#AS_SELECTION_PRESENTATION_VARIANT` \\
`#FOR_ACTION` \\
`#FOR_ACTION_GROUP` \\
`#FOR_INTENT_BASED_NAVIGATION` \\
`#STANDARD` \\
`#WITH_ACTION` \\
`#WITH_ACTION_GROUP` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].url`](ABENCDS_1326787564_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].value`](ABENCDS_1966244495_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.lineItem[ ].valueQualifier`](ABENCDS_1838222959-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.masked`](ABENCDS_150591737_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.multiLineText`](ABENCDS_40183251-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.note.content.mimeType`](ABENCDS_1345525584_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.note.content.value`](ABENCDS_45167487_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.note.title.hidden`](ABENCDS_433792610_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.note.title.value`](ABENCDS_2879366-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.note.type.languageDependent`](ABENCDS_1202776521-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.note.type.maxLength`](ABENCDS_1367682277_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.note.type.multipleNotes`](ABENCDS_722298920_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.note.type.name`](ABENCDS_1944862712_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].groupBy[ ]`](ABENCDS_1152076199_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].id`](ABENCDS_397833246_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].includeGrandTotal`](ABENCDS_1844549153_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].initialExpansionLevel`](ABENCDS_1986479756-_ANNO.html) `#ENTITY` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].maxItems`](ABENCDS_1925365585_ANNO.html) `#ENTITY` `Integer` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].qualifier`](ABENCDS_161382726-_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].recursiveHierarchyQualifier`](ABENCDS_937506020-_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].requestAtLeast[ ]`](ABENCDS_1885991486_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].selectionFieldsQualifier`](ABENCDS_155710428_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].sortOrder[ ].by`](ABENCDS_1682631613-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].sortOrder[ ].direction`](ABENCDS_613943470-_ANNO.html) `#ENTITY` `String(4)` `#ASC` \\
`#DESC` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].text`](ABENCDS_774951907-_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].total[ ]`](ABENCDS_1530683873-_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].totalBy[ ]`](ABENCDS_1889723134_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].visualizations[ ].element`](ABENCDS_947550714_ANNO.html) `#ENTITY` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].visualizations[ ].qualifier`](ABENCDS_1717346594-_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.presentationVariant[ ].visualizations[ ].type`](ABENCDS_241067122_ANNO.html) `#ENTITY` `String(40)` `#AS_CHART` \\
`#AS_DATAPOINT` \\
`#AS_LINEITEM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionField[ ].element`](ABENCDS_2022813284-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionField[ ].exclude`](ABENCDS_1532172068-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionField[ ].position`](ABENCDS_531194467-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionField[ ].qualifier`](ABENCDS_1615756015-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionPresentationVariant[ ].id`](ABENCDS_8202993-_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionPresentationVariant[ ].presentationVariantQualifier`](ABENCDS_1525932436_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionPresentationVariant[ ].qualifier`](ABENCDS_1562223590-_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionPresentationVariant[ ].selectionVariantQualifier`](ABENCDS_500346719_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionPresentationVariant[ ].text`](ABENCDS_600273991_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionVariant[ ].filter`](ABENCDS_1222964633-_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionVariant[ ].id`](ABENCDS_60252014_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionVariant[ ].parameters[ ].name`](ABENCDS_526689087_ANNO.html) `#ENTITY` `ParameterRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionVariant[ ].parameters[ ].value`](ABENCDS_1110677473_ANNO.html) `#ENTITY` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionVariant[ ].qualifier`](ABENCDS_1421384984_ANNO.html) `#ENTITY` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.selectionVariant[ ].text`](ABENCDS_1380759690_ANNO.html) `#ENTITY` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].actionGroupId`](ABENCDS_577883765-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].criticality`](ABENCDS_1806281407-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].criticalityRepresentation`](ABENCDS_1775575399-_ANNO.html) `#ELEMENT` `String(12)` `#ONLY_ICON` \\
`#WITHOUT_ICON` \\
`#WITH_ICON` `#WITHOUT_ICON` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].cssDefault.width`](ABENCDS_1326720424_ANNO.html) `#ELEMENT` `String(20)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].dataAction`](ABENCDS_1190724759-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].determining`](ABENCDS_436839286_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].emphasized`](ABENCDS_1615276321_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].exclude`](ABENCDS_1452295040-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].hidden`](ABENCDS_79010829_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].iconUrl`](ABENCDS_892226229_ANNO.html) `#ELEMENT` `String(1024)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].importance`](ABENCDS_2004414295_ANNO.html) `#ELEMENT` `String(6)` `#HIGH` \\
`#LOW` \\
`#MEDIUM` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].inline`](ABENCDS_998037433-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].invocationGrouping`](ABENCDS_2139917933-_ANNO.html) `#ELEMENT` `String(12)` `#CHANGE_SET` \\
`#ISOLATED` `#ISOLATED` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].isCopyAction`](ABENCDS_1415082684-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].isPartOfPreview`](ABENCDS_1626156623-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].label`](ABENCDS_900600758_ANNO.html) `#ELEMENT` `String(60)` `-` `-` `X` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].navigationAvailable`](ABENCDS_1161735041-_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].position`](ABENCDS_2105130218-_ANNO.html) `#ELEMENT` `DecimalFloat` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].qualifier`](ABENCDS_440856729-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].requiresContext`](ABENCDS_43480541_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].rowSpanForDuplicateValues`](ABENCDS_931175567_ANNO.html) `#ELEMENT` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].semanticObject`](ABENCDS_1674507306-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].semanticObjectAction`](ABENCDS_1330223575_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].semanticObjectBinding[ ].element`](ABENCDS_1159218838-_ANNO.html) `#ELEMENT` `String(40)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].semanticObjectBinding[ ].localElement`](ABENCDS_1876434346_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].semanticObjectBinding[ ].localParameter`](ABENCDS_1624344965-_ANNO.html) `#ELEMENT` `ParameterRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].targetElement`](ABENCDS_1166724647-_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].type`](ABENCDS_339885815-_ANNO.html) `#ELEMENT` `String(40)` `#AS_ADDRESS` \\
`#AS_CHART` \\
`#AS_CONNECTED_FIELDS` \\
`#AS_CONTACT` \\
`#AS_DATAPOINT` \\
`#AS_FIELDGROUP` \\
`#AS_PRESENTATION_VARIANT` \\
`#AS_SELECTION_PRESENTATION_VARIANT` \\
`#FOR_ACTION` \\
`#FOR_ACTION_GROUP` \\
`#FOR_INTENT_BASED_NAVIGATION` \\
`#STANDARD` \\
`#WITH_ACTION` \\
`#WITH_ACTION_GROUP` \\
`#WITH_INTENT_BASED_NAVIGATION` \\
`#WITH_NAVIGATION_PATH` \\
`#WITH_URL` `#STANDARD` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].url`](ABENCDS_1252698421_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].value`](ABENCDS_645798762_ANNO.html) `#ELEMENT` `ElementRef` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.statusInfo[ ].valueQualifier`](ABENCDS_609091653-_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.textArrangement`](ABENCDS_857384890-_ANNO.html) `#ELEMENT` \\
\\
`#ENTITY` `String(13)` `#TEXT_FIRST` \\
`#TEXT_LAST` \\
`#TEXT_ONLY` \\
`#TEXT_SEPARATE` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.updateHidden`](ABENCDS_759025072-_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.valueCriticality[ ].criticality`](ABENCDS_1060479977-_ANNO.html) `#ELEMENT` `Integer` `#CRITICAL` \\
`#NEGATIVE` \\
`#POSITIVE` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.valueCriticality[ ].qualifier`](ABENCDS_157193550_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`UI.valueCriticality[ ].value`](ABENCDS_1218774824_ANNO.html) `#ELEMENT` `String(120)` `-` `-` `-` `X` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`VDM.private`](ABENCDS_527004726-_ANNO.html) `#ENTITY` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`VDM.viewExtension`](ABENCDS_1891967415-_ANNO.html) `#EXTEND_VIEW` `Boolean` `-` `true` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ [`VDM.viewType`](ABENCDS_2063101229-_ANNO.html) `#ENTITY` `String(30)` `#BASIC` \\
`#COMPOSITE` \\
`#CONSUMPTION` \\
`#DERIVATION_FUNCTION` \\
`#EXTENSION` \\
`#TRANSACTIONAL` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` **Syntax** **Scope** **Type** **Enums** **Default** **Text** **MDE** **API**\\ [`Workflow.enabledFor[ ]`](ABENCDS_1985209549_ANNO.html) `#VIEW` `String(30)` `#CUSTOM_TASK_ATTRIBUTES` \\
`#RESPONSIBILITY_MANAGEMENT` `-` `-` `-` `RELEASED_FOR_KEY_USER_APPS` \\
`RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_frmwrk.html