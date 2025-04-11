/**
 * The global render object for drawing operations. *
 * // Create a font for rendering text
 * const fontHandle = render.create_font("Verdana", 25, 400);
 *
 * // Get the screen size
 * const [screenSizeX, screenSizeY] = render.get_viewport_size();
 *
 * // Callback function for rendering
 * ```ts
 * function engineTickCallback(): void {
 *     // Draw a white diagonal line
 *     render.draw_line(500, 500, 600, 600, 255, 255, 255, 255, 5);
 *
 *     // Draw a filled yellow rectangle
 *     render.draw_rectangle(700, 700, 50, 50, 255, 255, 0, 255, 1, true);
 *
 *     // Draw a filled red circle
 *     render.draw_circle(900, 900, 25, 255, 0, 0, 255, 5, true);
 *
 *     // Draw text in magenta with a white outline
 *     render.draw_text(fontHandle, "Test", 1000, 1000, 255, 0, 255, 255, 5, 255, 255, 255, 255);
 *
 *     // Draw a red triangle
 *     render.draw_triangle(500, 500, 600, 600, 800, 800, 255, 0, 0, 255, 1, false);
 * }
 * ```
 */
namespace render {
    /**
     * Creates a font with the specified name, size, and weight.
     *
     * @param name - The font name (e.g., "Verdana").
     * @param size - The font size in pixels.
     * @param weight - The font weight (e.g., 400 for normal, 700 for bold).
     * @returns A font handle to use with `draw_text`.
     */
    function create_font(name: string, size: number, weight: number): number;

    /**
     * Retrieves the screen size for reference.
     *
     * @returns A tuple [width, height] representing the screen resolution.
     */
    function get_viewport_size(): [number, number];

    /**
     * Draws a diagonal line.
     *
     * @param x1 - Starting x-coordinate.
     * @param y1 - Starting y-coordinate.
     * @param x2 - Ending x-coordinate.
     * @param y2 - Ending y-coordinate.
     * @param r - Red component (0–255).
     * @param g - Green component (0–255).
     * @param b - Blue component (0–255).
     * @param a - Alpha (opacity) component (0–255).
     * @param thickness - Line thickness in pixels.
     */
    function draw_line(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        r: number,
        g: number,
        b: number,
        a: number,
        thickness: number
    ): void;

    /**
     * Draws a rectangle.
     *
     * @param x - Top-left x-coordinate.
     * @param y - Top-left y-coordinate.
     * @param width - Width of the rectangle.
     * @param height - Height of the rectangle.
     * @param r - Red component (0–255).
     * @param g - Green component (0–255).
     * @param b - Blue component (0–255).
     * @param a - Alpha component (0–255).
     * @param thickness - Border thickness.
     * @param filled - Whether the rectangle is filled (true) or outlined (false).
     */
    function draw_rectangle(
        x: number,
        y: number,
        width: number,
        height: number,
        r: number,
        g: number,
        b: number,
        a: number,
        thickness: number,
        filled: boolean
    ): void;

    /**
     * Draws a filled circle.
     *
     * @param x - Center x-coordinate.
     * @param y - Center y-coordinate.
     * @param radius - Radius of the circle.
     * @param r - Red component (0–255).
     * @param g - Green component (0–255).
     * @param b - Blue component (0–255).
     * @param a - Alpha component (0–255).
     * @param thickness - Stroke thickness (used if not filled).
     * @param filled - Whether the circle is filled (true) or outlined (false).
     */
    function draw_circle(
        x: number,
        y: number,
        radius: number,
        r: number,
        g: number,
        b: number,
        a: number,
        thickness: number,
        filled: boolean
    ): void;

    /**
     * Draws text on the screen with optional outline.
     *
     * @param font - Font handle created using `create_font`.
     * @param text - The text string to render.
     * @param x - X-coordinate of the text position.
     * @param y - Y-coordinate of the text position.
     * @param r - Red color component (0–255).
     * @param g - Green color component (0–255).
     * @param b - Blue color component (0–255).
     * @param a - Alpha (opacity) of the text (0–255).
     * @param outline_thickness - Thickness of the outline.
     * @param o_r - Red component of the outline color.
     * @param o_g - Green component of the outline color.
     * @param o_b - Blue component of the outline color.
     * @param o_a - Alpha of the outline color.
     */
    function draw_text(
        font: number,
        text: string,
        x: number,
        y: number,
        r: number,
        g: number,
        b: number,
        a: number,
        outline_thickness: number,
        o_r: number,
        o_g: number,
        o_b: number,
        o_a: number
    ): void;

    /**
     * Draws a triangle.
     *
     * @param x1 - First point x-coordinate.
     * @param y1 - First point y-coordinate.
     * @param x2 - Second point x-coordinate.
     * @param y2 - Second point y-coordinate.
     * @param x3 - Third point x-coordinate.
     * @param y3 - Third point y-coordinate.
     * @param r - Red component (0–255).
     * @param g - Green component (0–255).
     * @param b - Blue component (0–255).
     * @param a - Alpha component (0–255).
     * @param thickness - Outline thickness (used if not filled).
     * @param filled - Whether to fill the triangle or draw outline only.
     */
    function draw_triangle(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        r: number,
        g: number,
        b: number,
        a: number,
        thickness: number,
        filled: boolean
    ): void;

    /**
     * Gets the current overlay FPS.
     *
     * @returns Frames per second as a number.
     */
    function get_fps(): number;

    /**
     * Creates a bitmap from a URL.
     *
     * @param url - The URL to fetch the image from.
     * @returns A bitmap handle.
     */
    function create_bitmap_from_url(url: string): number;

    /**
     * Creates a bitmap from a buffer handle.
     *
     * @param buffer_handle - A handle to the memory buffer containing image data.
     * @returns A bitmap handle.
     */
    function create_bitmap_from_buffer(buffer_handle: number): number;

    /**
     * Creates a bitmap from a file.
     *
     * @param file_name - Path or name of the file.
     * @returns A bitmap handle.
     */
    function create_bitmap_from_file(file_name: string): number;
}
