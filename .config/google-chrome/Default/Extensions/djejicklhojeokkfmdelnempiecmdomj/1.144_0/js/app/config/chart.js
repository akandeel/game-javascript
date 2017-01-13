chartConfig = config = {
    achievements: true,
    allowEdgeResize:false,
    allowResizeUnselected:false,
    allowTextOverflow:true,
    autoSaveDelayMultiUser: 10,
    autoSaveDelaySingleUser: 2000,
    basicPlugins:{'/js/plugins/v2/mindmap.js':true},
    bleedHintColor: '#fb1d00',
    blockTypeIndent:function(type, fontSize) { if(type == 'p') return 0; return fontSize * (type=='ol' ? 3 : 2); },
    indentBullet:function(type, indentLeft) { if(type == 'ul') return indentLeft/2; return 0; },
    clipToPage:false,
    deactivatedDialogs: [],
    deactivatedUIHints: [],
    defaultColumnSpacing:72/4,
    defaultDPI:160,
    defaultGrid:20,
    defaultHAlign:'center',
    defaultImageClass: 'UserImage2Block',
    defaultImageFillPos: 'fill',
    defaultPanelFill: null,
    defaultTextClass: 'DefaultTextBlockNew',
    defaultUnit: 'px',
    defaultVAlign:'middle',
    defaultZoom: 75,
    disabledProperties: {},
    drawOffPage: true,
    editorSpaceChecksDialogSelector:true,
    editorWantsTabs:true,//false, // I changed this to fix the tab and indent errors on chart
    extendedPageOptions:true,
    handleColor: '#009de0',
    handleColorSecondary: '#91bcec',
    outlineColor: '#009de0',
    activeLinkPointColor: '#e05966',
    handleLineWidth: 1,
    hasBleed:false,
    hasEmbeddedPages: false,
    hasFacingPages:false,
    hasHeaderFooter:false,
    padSelection:true,
    hasRulers:false,
    help: '/help/c/',
    hintBothLineColor: '#00cc00',
    hintEdgeLineColor: '#f78d1e',
    hintLineColor: '#0099ff',
    hintPanelLineColor: '#aaaaaa',
    hintLineWidth: 1,
    imageUploadTimeout: 20000,
    lineSpacingFactor:1,
    lockOptionBarWhenNoSelection: false,
    markupDefaults:{},
    outlineSize:3,
    overlayOffset:0,
    pagesHaveIndependentViewports: true,
    pageSizesAllowed: ['Letter', 'Legal', 'Executive', 'A3', 'A4', 'A5', 'Tabloid', 'Folio','Statement'],
    pageSpacing: 60,
    pageUnitsAllowed: ['in','cm', 'pt', 'px'],
    placeholderImageUrl: 'https://d2slcw3kip6qmk.cloudfront.net/app/webroot/img/img_placeholder.png',
    pluginGroups: [ 'Standard', 'Software', 'Business', 'Networking', 'Visual Content', 'Other' ],
    renderBackgroundItems: true,
    renderDeepSelectionOutline:true,
    renderMetricsHintsForKeyboardInput: false,
    renderSelectionOutlineColor: '#009de099',
    renderSelectionOutlineWidth: 2.5,
    renderSelectedLineOutlineWidth: 1.5,
    rotateInCorner: true,
    rotateHandleSize: 6,
    rotateHandleColor: '#000',
    rotateHandleStemColor: '#999',
    resizeHandleSize: 9,
    searchShouldChangePage: true,
    searchShouldShowMaster: true,
    serverDisableTimeout: 30,
    serverDisableTimeoutFocused: 600,
    showAlignmentHints:true,
    spacingGuideColor: '#56aaff',
    supportUrl: 'http://support.lucidchart.com',
    tempHintLineColor: '#ff3333',
    useChildrenCategories:true,
    useCMYKMode:false,
    useLinkPoints:true,
    viewportTitle: false,
    washOutInactive: true,
    zOrderOverrideAbove: ['state', 'frame'],
    zOrderOverrideBelow: ['background'],
    allowSmallAutoResize: false,
    importBatchSize:3,
    importFileLimit:200,
    maxSizeSVG: 153600,
};