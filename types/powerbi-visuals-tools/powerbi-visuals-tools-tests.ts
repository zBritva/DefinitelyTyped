import powerbi from './index';

import IVisualPlugin = powerbi.visuals.plugins.IVisualPlugin;
import IVisual = powerbi.extensibility.visual.IVisual;

const visualPlugin: IVisualPlugin = {
    name: 'string',
    create: (options?: powerbi.extensibility.VisualConstructorOptions) => {
        const value: IVisual = {
            update: (options: powerbi.extensibility.VisualUpdateOptions) => {}
        };
        return value;
    },
    class: 'string',
    custom: true,
    apiVersion: "1.11.0",
    displayName: "string"
};

import ISelectionIdBuilder = powerbi.visuals.ISelectionIdBuilder;
import ISelectionId = powerbi.visuals.ISelectionId;

const selection: ISelectionId = {
    equals: (sel: ISelectionId) => false,
    includes: (sel: ISelectionId, ignoreHL: boolean) => false,
    getKey: () => "string",
    getSelector: () => {
        const selector: powerbi.data.Selector = {
        };
        return selector;
    },
    getSelectorsByColumn: () => {
        const selector: powerbi.data.SelectorsByColumn = {
        };
        return selector;
    },
    hasIdentity: () => false
};

const selectionBuilder: ISelectionIdBuilder = {
    withCategory: (categoryColumn: powerbi.DataViewCategoryColumn, index: number): ISelectionIdBuilder => {
        return selectionBuilder;
    },
    withSeries: (ser: powerbi.DataViewValueColumns, val: powerbi.DataViewValueColumn | powerbi.DataViewValueColumnGroup): ISelectionIdBuilder => {
        return selectionBuilder;
    },
    withMeasure: (measure: string): ISelectionIdBuilder => {
        return selectionBuilder;
    },
    createSelectionId: (): ISelectionId => selection
};

import DataView = powerbi.DataView;
import DataViewMetadata = powerbi.DataViewMetadata;
import DataViewCategorical = powerbi.DataViewCategorical;
import DataViewSingle = powerbi.DataViewSingle;
import DataViewTree = powerbi.DataViewTree;
import DataViewTable = powerbi.DataViewTable;
import DataViewMatrix = powerbi.DataViewMatrix;
import DataViewScriptResultData = powerbi.DataViewScriptResultData;

const dataView: DataView = {
    metadata: {
        columns: [
        ],
        objects: undefined,
        dataReduction: undefined,
        segment: {
        }
    },
    categorical: {
        categories: [
            {
                identity: [
                    {
                        expr: {},
                        key: "string",
                        kind: powerbi.DataRepetitionKind.ScopeIdentity
                    }
                ],
                identityFields: [],
                objects: undefined,
                source: {
                    displayName: "string",
                    format: "string",
                    groupName: "string",
                    objects: undefined,
                    aggregates: {
                        average: true
                    },
                    isMeasure: false,
                    queryName: "string",
                    sort: powerbi.SortDirection.Ascending || powerbi.SortDirection.Descending,
                    index: 0,
                    type: {
                        text: true
                    },
                    sortOrder: 0,
                    kpi: {
                        graphic: "string",
                        normalizedFiveStateKpiRange: false
                    }
                },
                values: []
            }
        ],
        values: undefined
    }
};

import IColorPalette = powerbi.extensibility.IColorPalette;
import IColorInfo = powerbi.IColorInfo;

const testIColorPalette: IColorPalette = {
    getColor: (key: string) => {
        const result: IColorInfo = {value: key};
        return result;
    }
};

import ISelectionManager = powerbi.extensibility.ISelectionManager;

const testISelectionManager: ISelectionManager = {
    select: (selectionId: powerbi.visuals.ISelectionId | powerbi.visuals.ISelectionId[], multiSelect?: boolean) => (1 as any),
    hasSelection: () => false,
    clear: () => (0 as any),
    getSelectionIds: () => [selection],
    applySelectionFilter: () => {},
    registerOnSelectCallback: (callback: (ids: powerbi.visuals.ISelectionId[]) => void) => {}
};

import ITooltipService = powerbi.extensibility.ITooltipService;
import TooltipShowOptions = powerbi.extensibility.TooltipShowOptions;
import TooltipMoveOptions = powerbi.extensibility.TooltipMoveOptions;
import TooltipHideOptions = powerbi.extensibility.TooltipHideOptions;

const testITooltipService: ITooltipService = {
    enabled: () => true,
    show: (options: TooltipShowOptions) => {},
    move: (options: TooltipMoveOptions) => {},
    hide: (options: TooltipHideOptions) => {}
};

import ITelemetryService = powerbi.extensibility.ITelemetryService;
import VisualEventType = powerbi.VisualEventType;

const testITelemetryService: ITelemetryService = {
    instanceId: "",
    trace: (type: VisualEventType, payload?: string) => {}
};

import IAuthenticationService = powerbi.extensibility.IAuthenticationService;

const testIAuthenticationService: IAuthenticationService = {
    getAADToken: (visualId?: string) => {
        return null as any;
    }
};

import ILocalizationManager = powerbi.extensibility.ILocalizationManager;

const testILocalizationManager: ILocalizationManager = {
    getDisplayName: (key: string) => key
};

import IVisualHost = powerbi.extensibility.visual.IVisualHost;

const testIVisualHost: IVisualHost = {
    instanceId: "",
    createSelectionIdBuilder: () => selectionBuilder,
    createSelectionManager: () => testISelectionManager,
    colorPalette: testIColorPalette,
    persistProperties: (changes: powerbi.VisualObjectInstancesToPersist) => {},
    applyJsonFilter: (filter: powerbi.IFilter, objectName: string, propertyName: string, action: powerbi.FilterAction) => {},
    tooltipService: testITooltipService,
    telemetry: testITelemetryService,
    authenticationService: testIAuthenticationService,
    locale: "en-US",
    allowInteractions: false,
    launchUrl: (url: string) => {},
    fetchMoreData: () => false,
    refreshHostData: () => {},
    createLocalizationManager: () => testILocalizationManager
};
