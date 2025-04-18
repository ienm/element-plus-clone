import type { TooltipInstance } from 'element-plus/es/components/tooltip';
import type { ISelectProps, SelectOptionProxy } from './token';
export declare const useSelect: (props: ISelectProps, emit: any) => {
    triggerRef: import("vue").Ref<HTMLElement>;
    inputId: import("vue").Ref<string | undefined>;
    contentId: import("vue").Ref<string>;
    nsSelect: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string) => string;
        m: (modifier?: string) => string;
        be: (blockSuffix?: string, element?: string) => string;
        em: (element?: string, modifier?: string) => string;
        bm: (blockSuffix?: string, modifier?: string) => string;
        bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    nsInput: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string) => string;
        m: (modifier?: string) => string;
        be: (blockSuffix?: string, element?: string) => string;
        em: (element?: string, modifier?: string) => string;
        bm: (blockSuffix?: string, modifier?: string) => string;
        bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    states: {
        inputValue: string;
        options: Map<any, any>;
        cachedOptions: Map<any, any>;
        optionValues: any[];
        selected: any[];
        selectionWidth: number;
        collapseItemWidth: number;
        selectedLabel: string;
        hoveringIndex: number;
        previousQuery: null;
        inputHovering: boolean;
        menuVisibleOnFocus: boolean;
        isBeforeHide: boolean;
    };
    isFocused: import("vue").Ref<boolean>;
    expanded: import("vue").Ref<boolean>;
    optionsArray: import("vue").ComputedRef<any[]>;
    hoverOption: import("vue").Ref<any>;
    selectSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
    filteredOptionsCount: import("vue").ComputedRef<number>;
    updateTooltip: () => void;
    updateTagTooltip: () => void;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => void>;
    onInput: (event: any) => void;
    deletePrevTag: (e: any) => void;
    deleteTag: (event: any, tag: any) => void;
    deleteSelected: (event: any) => void;
    handleOptionSelect: (option: any) => void;
    scrollToOption: (option: any) => void;
    hasModelValue: import("vue").ComputedRef<boolean>;
    shouldShowPlaceholder: import("vue").ComputedRef<boolean>;
    currentPlaceholder: import("vue").ComputedRef<string>;
    mouseEnterEventName: import("vue").ComputedRef<"mouseenter" | null>;
    needStatusIcon: import("vue").ComputedRef<boolean>;
    showClose: import("vue").ComputedRef<boolean>;
    iconComponent: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown> | undefined>;
    iconReverse: import("vue").ComputedRef<string>;
    validateState: import("vue").ComputedRef<"" | "error" | "success" | "validating">;
    validateIcon: import("vue").ComputedRef<any>;
    showNewOption: import("vue").ComputedRef<boolean>;
    updateOptions: () => void;
    collapseTagSize: import("vue").ComputedRef<"default" | "small">;
    setSelected: () => void;
    selectDisabled: import("vue").ComputedRef<boolean | undefined>;
    emptyText: import("vue").ComputedRef<string | null>;
    handleCompositionStart: (event: CompositionEvent) => void;
    handleCompositionUpdate: (event: CompositionEvent) => void;
    handleCompositionEnd: (event: CompositionEvent) => void;
    onOptionCreate: (vm: SelectOptionProxy) => void;
    onOptionDestroy: (key: any, vm: SelectOptionProxy) => void;
    handleMenuEnter: () => void;
    focus: () => void;
    blur: () => void;
    handleClearClick: (event: Event) => void;
    handleClickOutside: (event: Event) => void;
    handleEsc: () => void;
    toggleMenu: () => void;
    selectOption: () => void;
    getValueKey: (item: any) => any;
    navigateOptions: (direction: any) => void;
    dropdownMenuVisible: import("vue").WritableComputedRef<boolean>;
    showTagList: import("vue").ComputedRef<any[]>;
    collapseTagList: import("vue").ComputedRef<any[]>;
    popupScroll: (data: {
        scrollTop: number;
        scrollLeft: number;
    }) => void;
    tagStyle: import("vue").ComputedRef<{
        maxWidth: string;
    }>;
    collapseTagStyle: import("vue").ComputedRef<{
        maxWidth: string;
    }>;
    popperRef: import("vue").ComputedRef<HTMLElement | undefined>;
    inputRef: import("vue").Ref<HTMLInputElement | null>;
    tooltipRef: import("vue").Ref<TooltipInstance | null>;
    tagTooltipRef: import("vue").Ref<TooltipInstance | null>;
    prefixRef: import("vue").Ref<HTMLElement>;
    suffixRef: import("vue").Ref<HTMLElement>;
    selectRef: import("vue").Ref<HTMLElement>;
    wrapperRef: import("vue").ShallowRef<HTMLElement | undefined>;
    selectionRef: import("vue").Ref<HTMLElement>;
    scrollbarRef: import("vue").Ref<{
        handleScroll: () => void;
    } | null>;
    menuRef: import("vue").Ref<HTMLElement>;
    tagMenuRef: import("vue").Ref<HTMLElement>;
    collapseItemRef: import("vue").Ref<HTMLElement>;
};
