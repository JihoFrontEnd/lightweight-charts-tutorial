# [lightwieght-charts](https://kr.tradingview.com/lightweight-charts)

## Options

### ChartOptions

```ts
/**
 * Structure describing options of the chart. Series options are to be set separately
 */
export interface ChartOptions {
    /** Width of the chart in pixels. */
    width: number;
    /** Height of the chart in pixels. */
    height: number;
    /**
     * Watermark options.
     *
     * A watermark is a background label that includes a brief description of the drawn data. Any text can be added to it.
     *
     * Please make sure you enable it and set an appropriate font color and size to make your watermark visible in the background of the chart.
     * We recommend a semi-transparent color and a large font. Also note that watermark position can be aligned vertically and horizontally.
     */
    watermark: WatermarkOptions;
    /** Layout options. */
    layout: LayoutOptions;
    /** Left price scale options. */
    leftPriceScale: VisiblePriceScaleOptions;
    /** Right price scale options. */
    rightPriceScale: VisiblePriceScaleOptions;
    /** Overlay price scale options. */
    overlayPriceScales: OverlayPriceScaleOptions;
    /** Time scale options. */
    timeScale: TimeScaleOptions;
    /** Crosshair options. */
    crosshair: CrosshairOptions;
    /** Grid options. */
    grid: GridOptions;
    /** Localization options. */
    localization: LocalizationOptions;
    /** Scroll options, or a boolean flag that enables/disables scrolling. */
    handleScroll: HandleScrollOptions | boolean;
    /** Scale options, or a boolean flag that enables/disables scaling. */
    handleScale: HandleScaleOptions | boolean;
    /** Kinetic scroll options. */
    kineticScroll: KineticScrollOptions;
}
```

#### 차트의 크기 조정

-   `width` : defualt value is relative 100%
-   `height` : `width`는 값을 안 줘도 괜찮은데, 이 값은 줘야 차트가 보인다.
-   `IChartApi.resize(width, height)`를 통해 동적으로 차트의 크기를 조절 가능하다.

#### `layout`

```ts
export interface LayoutOptions {
    /**
     * Chart and scales background color.
     */
    background: Background;
    /**
     * @deprecated Use background instead.
     */
    backgroundColor: string;
    /**
     * Color of text on the scales.
     */
    textColor: string;
    /**
     * Font size of text on scales in pixels.
     */
    fontSize: number;
    /**
     * Font family of text on the scales.
     */
    fontFamily: string;
}
```

-   `background`: 차트의 배경색상을 지정한다.
    -   `Background = SolidColor | VerticalGradientColor`
    -   `SolidColor = { type: ColorType.Solid; color: string; }`
    -   `VerticalGradientColor`: 섬세하게 색상을 지정할 수 있다.
        -   ```
            {
                type: ColorType.VerticalGradient;
                topColor: string;
                bottomColor: string;
            }
            ```
    -   조금 복잡해보이지만, 사실 그냥 String 값을 지정하면 편하다.
    -   `HEX(#000, #000000)`, `"rgb(r, g, b)"`, 또는 `"rgba(r, g, b, a)"`
        형식의 String 리터럴을 주면 `SolidColor`로 배치되어 색상이 입혀진다.

#### `leftPriceScale`

```ts
/** Structure that describes price scale options */
export interface PriceScaleOptions {
    /**
     * Automatically set price range based on visible data range.
     */
    autoScale: boolean;
    /** Price scale mode. */
    mode: PriceScaleMode;
    /**
     * Invert the price scale, so that a upwards trend is shown as a downwards trend and vice versa.
     * Affects both the price scale and the data on the chart.
     */
    invertScale: boolean;
    /**
     * Align price scale labels to prevent them from overlapping.
     */
    alignLabels: boolean;
    /**
     * Price scale margins.
     */
    scaleMargins: PriceScaleMargins;
    /**
     * Set true to draw a border between the price scale and the chart area.
     */
    borderVisible: boolean;
    /**
     * Price scale border color.
     */
    borderColor: string;
    /**
     * Show top and bottom corner labels only if entire text is visible.
     */
    entireTextOnly: boolean;
    /** Indicates if this price scale visible. Ignored by overlay price scales. */
    visible: boolean;
    /** Draw small horizontal line on price axis labels. */
    drawTicks: boolean;
}
```

#### `crosshair`

마우스 포인터를 차트에 올렸을 때 렌더링되는 교차점 등의 설정

```ts
/** Structure describing crosshair options  */
export interface CrosshairOptions {
    /** Crosshair mode */
    mode: CrosshairMode;
    /** Vertical line options. */
    vertLine: CrosshairLineOptions;
    /** Horizontal line options. */
    horzLine: CrosshairLineOptions;
}
```

-   mode
    -   `Normal = 0`: 마우스 포인터에 맞게 설정
    -   `Magnet = 1`: series에 포인터가 자석처럼 붙음
-   vertLine & horzLine
    -   `color`
    -   `width`
    -   `style`
    -   `visible`
    -   `labelVisible`
    -   `labelBackgroundColor`

#### `grid`

차트 전체의 그리드 영역의 설정

```ts
export interface GridOptions {
    /** Vertical grid line options. */
    vertLines: GridLineOptions {
        color: string;
        style: LineStyle;
        visible: boolean;
    },
    /** Horizontal grid line options. */
    horzLines: GridLineOptions {
        color: string;
        style: LineStyle;
        visible: boolean;
    },
}
```

#### `localization`

```ts
export interface LocalizationOptions {
    /**
     * Current locale used to format dates. Uses the browser's language settings by default.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
     */
    locale: string;
    /**
     * Override formatting of the price scale crosshair label. Can be used for cases that can't be covered with built-in price formats.
     */
    priceFormatter?: PriceFormatterFn;
    /**
     * Override formatting of the time scale crosshair label.
     */
    timeFormatter?: TimeFormatterFn;
    /**
     * Date formatting string.
     * Can contain `yyyy`, `yy`, `MMMM`, `MMM`, `MM` and `dd` literals which will be replaced with corresponding date's value.
     * Ignored if timeFormatter has been specified.
     */
    dateFormat: string;
}
```

#### `handleScroll`

```ts
HandleScrollOptions {
    /**
     * Enable scrolling with the mouse wheel.
     */
    mouseWheel: boolean;
    /**
     * Enable scrolling by holding down the left mouse button and moving the mouse.
     */
    pressedMouseMove: boolean;
    /**
     * Enable horizontal touch scrolling.
     *
     * When enabled the chart handles touch gestures that would normally scroll the webpage horizontally.
     */
    horzTouchDrag: boolean;
    /**
     * Enable vertical touch scrolling.
     *
     * When enabled the chart handles touch gestures that would normally scroll the webpage vertically.
     */
    vertTouchDrag: boolean;
}
```

#### `handleScale`

```ts
HandleScaleOptions {
    /**
     * Enable scaling with the mouse wheel.
     */
    mouseWheel: boolean;
    /**
     * Enable scling with pinch/zoom gestures.
     */
    pinch: boolean;
    /**
     * Enable scaling the price and/or time scales by holding down the left mouse button and moving the mouse.
     */
    axisPressedMouseMove: AxisPressedMouseMoveOptions | boolean;
    /**
     * Enable resetting scaling by double-clicking the left mouse button.
     */
    axisDoubleClickReset: boolean;
}
```

#### `keneticScroll`

```ts
KineticScrollOptions {
    /**
     * Enable kinetic scroll with touch gestures.
     */
    touch: boolean;
    /**
     * Enable kinetic scroll with the mouse.
     */
    mouse: boolean;
}
```