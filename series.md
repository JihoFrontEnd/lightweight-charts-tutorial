# Series

## Options

### Common
```ts
/**
    * Represents options common for all types of series
    */
export interface SeriesOptionsCommon {
    /**
        * Visibility of the label with the latest visible price on the price scale.
        */
    lastValueVisible: boolean;
    /** Title of the series. This label is placed with price axis label */
    title: string;
    /** Target price scale to bind new series to */
    priceScaleId?: string;
    /** Show the series. */
    visible: boolean;
    /**
        * Show the price line. Price line is a horizontal line indicating the last price of the series.
        */
    priceLineVisible: boolean;
    /**
        * The source to use for the value of the price line.
        */
    priceLineSource: PriceLineSource;
    /**
        * Width of the price line.
        */
    priceLineWidth: LineWidth;
    /**
        * Color of the price line.
        */
    priceLineColor: string;
    /**
        * Price line style.
        */
    priceLineStyle: LineStyle;
    /** Price format. */
    priceFormat: PriceFormat;
    /**
        * Visibility of base line. Suitable for percentage and `IndexedTo100` scales.
        */
    baseLineVisible: boolean;
    /**
        * Color of the base line in `IndexedTo100` mode.
        */
    baseLineColor: string;
    /**
        * Base line width. Suitable for percentage and `IndexedTo10` scales.
        */
    baseLineWidth: LineWidth;
    /**
        * Base line style. Suitable for percentage and indexedTo100 scales.
        */
    baseLineStyle: LineStyle;
    /** Override the default {@link AutoscaleInfo} provider. */
    autoscaleInfoProvider?: AutoscaleInfoProvider;
    /** @deprecated Use priceScale method of the series to apply options instead. */
    scaleMargins?: PriceScaleMargins;
}
```

### Area

```ts
/**
 * Represents style options for an area series.
 */
export interface AreaStyleOptions {
    /**
     * Color of the top part of the area.
     */
    topColor: string;
    /**
     * Color of the bottom part of the area.
     */
    bottomColor: string;
    /**
     * Line color.
     */
    lineColor: string;
    /**
     * Line style.
     */
    lineStyle: LineStyle;
    /**
     * Line width in pixels.
     */
    lineWidth: LineWidth;
    /**
     * Line type.
     */
    lineType: LineType;
    /**
     * Show the crosshair marker.
     */
    crosshairMarkerVisible: boolean;
    /**
     * Crosshair marker radius in pixels.
     */
    crosshairMarkerRadius: number;
    /**
     * Crosshair marker border color. An empty string falls back to the the color of the series under the crosshair.
     */
    crosshairMarkerBorderColor: string;
    /**
     * The crosshair marker background color. An empty string falls back to the the color of the series under the crosshair.
     */
    crosshairMarkerBackgroundColor: string;
    /**
     * Last price animation mode.
     */
    lastPriceAnimation: LastPriceAnimationMode;
}
```